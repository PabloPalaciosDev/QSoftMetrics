import { Router } from 'express';
import multer from 'multer';
import unzipper from 'unzipper';
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();
const upload = multer({ dest: 'uploads/' });

// Función para iniciar sesión en SonarQube y obtener la cookie de sesión JWT
const loginToSonarQube = async () => {
  const sonarLoginUrl = 'http://localhost:9000/api/authentication/login?login=admin&password=admin123';

  try {
    const response = await fetch(sonarLoginUrl, {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Error iniciando sesión en SonarQube');
    }

    // Obtener las cookies de la respuesta
    const cookie = response.headers.get('set-cookie');
    console.log('Cookie obtenida:', cookie);

    // Extraer el token JWT de la cookie (JWT-SESSION)
    const jwtMatch = cookie.match(/JWT-SESSION=([^;]+);/);
    if (!jwtMatch) {
      throw new Error('No se encontró el JWT en la respuesta');
    }

    const jwtToken = jwtMatch[1];
    return jwtToken; // Retorna el JWT Token
  } catch (error) {
    console.error('Error iniciando sesión en SonarQube:', error);
    throw error;
  }
};

// Función para obtener los resultados de SonarQube
const getSonarQubeResults = async (jwtToken) => {
  const sonarAPIUrl = 'http://localhost:9000/api/measures/component?component=qsoftmetrics&metricKeys=new_technical_debt,code_smells,cognitive_complexity,class_complexity,file_complexity,function_complexity,sqale_rating,effort_to_reach_maintainability_rating_a,bugs,new_bugs,reliability_rating,reliability_issues,vulnerabilities,new_vulnerabilities,security_rating,new_security_rating,security_hotspots,new_security_hotspots,public_documented_api_density,duplicated_lines_density,duplicated_blocks,ncloc_language_distribution,ncloc,lines';

  try {
    const response = await fetch(sonarAPIUrl, {
      method: 'GET',
      headers: {
        'Cookie': `JWT-SESSION=${jwtToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Error obteniendo los resultados de SonarQube');
    }

    const data = await response.json();
    return data; // Retorna los datos obtenidos
  } catch (error) {
    console.error('Error obteniendo los resultados de SonarQube:', error);
    throw error;
  }
};

// Ruta para manejar la subida del archivo y ejecutar SonarScanner
router.post('/upload-code', upload.single('codeFile'), async (req, res) => {
  const codeFilePath = path.join(process.cwd(), 'uploads', req.file.filename); // Cambia __dirname por process.cwd()
  const extractPath = path.join(process.cwd(), req.file.originalname); // Ajusta esta ruta también si es necesario

  if (!fs.existsSync(codeFilePath)) {
    console.error('El archivo no existe:', codeFilePath);
    return res.status(404).send('Archivo no encontrado.');
  }

  try {
    fs.createReadStream(codeFilePath)
      .pipe(unzipper.Extract({ path: extractPath }))
      .on('close', () => {
        console.log('Código descomprimido en:', extractPath);

        // Ejecutar SonarScanner
        const sonarCommand = `"sonar-scanner" -D"sonar.projectKey=qsoftmetrics" -D"sonar.sources=${extractPath}" -D"sonar.host.url=http://localhost:9000" -D"sonar.token=sqp_195f35c61418e97776413f11eac0f6a0a1bfe7b9" -D"sonar.inclusions=**/*" -D"sonar.scm.exclusions.disabled=true"`;

        exec(sonarCommand, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error ejecutando SonarScanner: ${stderr}`);
            return res.status(500).send(`Error analizando el código: ${stderr}`);
          }

          console.log(`SonarScanner output: ${stdout}`);
          res.status(200).send('Análisis completado con éxito. Revisa SonarQube para los resultados.');
          //Eliminar carpeta con el código fuente
          fs.rmdirSync(extractPath, { recursive: true });
        });
      });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Error al procesar el archivo.');
  }
});

// Ruta para obtener los resultados de SonarQube
router.get('/results', async (req, res) => {
  try {
    // Iniciar sesión en SonarQube y obtener el token JWT
    const jwtToken = await loginToSonarQube();

    // Obtener los resultados de SonarQube
    const sonarResults = await getSonarQubeResults(jwtToken);
    console.log('Resultados de SonarQube:', sonarResults);

    res.status(200).json(sonarResults);
  } catch (error) {
    console.error('Error obteniendo los resultados:', error);
    res.status(500).send('Error al obtener los resultados de SonarQube.');
  }
});

export default router;
