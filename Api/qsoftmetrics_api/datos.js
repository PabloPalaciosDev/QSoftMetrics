export const categorias = [
  {
    nombre: "Adecuación Funcional",
    subcategorias: [
      {
        nombre: "Completitud Funcional",
        pregunta:
          "¿Las funcionalidades y características del sistema cubren todas las tareas y objetivos de los usuarios y stakeholders?",
      },
      {
        nombre: "Corrección Funcional",
        pregunta:
          "¿El sistema provee los resultados exactos esperado de los usuarios y stakeholders?",
      },
      {
        nombre: "Pertinencia Funcional",
        pregunta:
          "¿En qué medida considera que el conjunto de funciones del producto facilita la consecución de sus tareas y objetivos?",
      },
    ],
  },
  {
    nombre: "Eficiencia de Desempeño",
    subcategorias: [
      {
        nombre: "Comportamiento Temporal",
        pregunta:
          "¿En qué medida considera que el producto cumple con los requisitos especificados en términos de tiempo de respuesta y rendimiento?",
      },
      {
        nombre: "Utilización de Recursos",
        pregunta:
          "¿En qué medida considera que el producto utiliza una cantidad y tipo de recursos que no exceden lo especificado al llevar a cabo su función?",
      },
      {
        nombre: "Capacidad",
        pregunta:
          "¿En qué medida considera que el producto cumple con los requisitos en cuanto a los límites máximos de parámetros como ítems almacenados, usuarios concurrentes, y ancho de banda de comunicaciones?",
      },
    ],
  },
  {
    nombre: "Compatibilidad",
    subcategorias: [
      {
        nombre: "Coexistencia",
        pregunta:
          "¿En qué medida considera que el producto puede coexistir con otro software independiente en un entorno común sin afectar negativamente los recursos compartidos?",
      },
      {
        nombre: "Interoperabilidad",
        pregunta:
          "¿En qué medida considera que el producto tiene la capacidad de intercambiar información y utilizarla eficazmente con otros sistemas o componentes?",
      },
    ],
  },
  {
    nombre: "Capacidad de Interacción",
    subcategorias: [
      {
        nombre: "Reconocibilidad de la Adecuación",
        pregunta:
          "¿Consideras que el software te permite identificar rápidamente si es adecuado para satisfacer tus necesidades específicas?",
      },
      {
        nombre: "Aprendizabilidad",
        pregunta:
          "¿Crees que puedes aprender a utilizar el software en un tiempo razonable sin necesidad de consultar documentación adicional?",
      },
      {
        nombre: "Operabilidad",
        pregunta:
          "¿Encuentras que el software es fácil de operar y controlar sin enfrentar dificultades significativas?",
      },
      {
        nombre: "Protección contra Errores de Usuario",
        pregunta:
          "¿El sistema te previene de manera efectiva para evitar errores durante su operación?",
      },
      {
        nombre: "Involucración del Usuario",
        pregunta:
          "¿Consideras que el software presenta sus funciones de manera atractiva, lo que motiva tu interacción continua con él?",
      },
      {
        nombre: "Inclusividad",
        pregunta:
          "¿El software te parece accesible y usable para personas con diferentes habilidades, edades, culturas y géneros?",
      },
      {
        nombre: "Asistencia al Usuario",
        pregunta:
          "¿Crees que el software proporciona la asistencia necesaria para que los usuarios con diferentes capacidades logren sus objetivos específicos?",
      },
      {
        nombre: "Auto-descriptividad",
        pregunta:
          "¿Consideras que el software proporciona la información adecuada, permitiéndote entender su uso sin necesidad de recurrir a recursos adicionales?",
      },
    ],
  },
  {
    nombre: "Fiabilidad",
    subcategorias: [
      {
        nombre: "Ausencia de Fallos",
        pregunta:
          "¿Consideras que el sistema lleva a cabo sus funciones sin fallos bajo condiciones normales de operación?",
      },
      {
        nombre: "Disponibilidad",
        pregunta:
          "¿Crees que el sistema está operativo y accesible para su uso cuando lo necesitas?",
      },
      {
        nombre: "Tolerancia a Fallos",
        pregunta:
          "¿Confías en que el sistema opera según lo previsto, incluso en presencia de fallos de hardware o software?",
      },
      {
        nombre: "Capacidad de Recuperación",
        pregunta:
          "¿Consideras que el software es capaz de recuperar los datos afectados y restablecer el estado deseado del sistema en caso de una interrupción o fallo?",
      },
    ],
  },
  {
    nombre: "Seguridad",
    subcategorias: [
      {
        nombre: "Confidencialidad",
        pregunta:
          "¿Consideras que el sistema asegura que los datos solo son accesibles para aquellos con la debida autorización?",
      },
      {
        nombre: "Integridad",
        pregunta:
          "¿Crees que el producto garantiza que el estado del sistema y sus datos están protegidos contra modificaciones o eliminaciones no autorizadas?",
      },
      {
        nombre: "No Repudio",
        pregunta:
          "¿Confías en que el sistema puede demostrar de manera fiable las acciones o eventos que han ocurrido, de modo que no puedan ser negados posteriormente?",
      },
      {
        nombre: "Responsabilidad",
        pregunta:
          "¿Consideras que el sistema permite rastrear de manera inequívoca las acciones realizadas por cada entidad?",
      },
      {
        nombre: "Autenticidad",
        pregunta:
          "¿Crees que el producto es capaz de demostrar de manera segura que la identidad de un sujeto o recurso es la que se afirma ser?",
      },
      {
        nombre: "Resistencia",
        pregunta:
          "¿Consideras que el sistema puede mantener su operación bajo condiciones de ataque por parte de un actor malicioso?",
      },
    ],
  },
  {
    nombre: "Mantenibilidad",
    subcategorias: [
      {
        nombre: "Modularidad",
        pregunta:
          "¿El sistema está diseñado de tal manera que las diferentes partes o módulos pueden ser modificados sin afectar al resto del sistema?",
      },
      {
        nombre: "Reusabilidad",
        pregunta:
          "¿Es posible reutilizar componentes o módulos del sistema en otras aplicaciones sin necesidad de realizar modificaciones significativas?",
      },
      {
        nombre: "Analizabilidad",
        pregunta:
          "¿El sistema proporciona suficientes herramientas y documentación para facilitar el diagnóstico de problemas y la identificación de áreas que requieren cambios?",
      },
      {
        nombre: "Capacidad para ser Modificado",
        pregunta:
          "¿Qué tan fácil es realizar cambios o modificaciones en el sistema, y cómo afecta esto a la estabilidad general del software?",
      },
      {
        nombre: "Capacidad para ser Probado",
        pregunta:
          "¿Es fácil probar el sistema después de realizar cambios para asegurar que no se han introducido nuevos defectos?",
      },
    ],
  },
  {
    nombre: "Flexibilidad",
    subcategorias: [
      {
        nombre: "Adaptabilidad",
        pregunta:
          "¿El sistema puede adaptarse fácilmente a diferentes entornos operativos sin requerir cambios significativos en su código?",
      },
      {
        nombre: "Escalabilidad",
        pregunta:
          "¿El sistema puede escalar para manejar un mayor número de usuarios o una mayor carga de trabajo sin comprometer su rendimiento?",
      },
      {
        nombre: "Instalabilidad",
        pregunta:
          "¿Qué tan fácil es instalar el sistema en diferentes plataformas o configuraciones de hardware?",
      },
      {
        nombre: "Reemplazabilidad",
        pregunta:
          "¿El sistema puede ser reemplazado por otro producto similar sin generar dificultades significativas en términos de compatibilidad o migración de datos?",
      },
    ],
  },
  {
    nombre: "Protección",
    subcategorias: [
      {
        nombre: "Restricción Operativa",
        pregunta:
          "¿El sistema opera correctamente bajo condiciones restrictivas, como acceso limitado a recursos o fallos de hardware, sin comprometer su seguridad?",
      },
      {
        nombre: "Identificación de Riesgos",
        pregunta:
          "¿El sistema incluye mecanismos para identificar posibles riesgos y tomar medidas preventivas para mitigarlos?",
      },
      {
        nombre: "Protección ante Fallos",
        pregunta:
          "¿El sistema está diseñado para manejar fallos de manera que minimice el impacto en los usuarios y la pérdida de datos?",
      },
      {
        nombre: "Advertencia de Peligro",
        pregunta:
          "¿El sistema proporciona advertencias adecuadas a los usuarios en caso de posibles peligros o errores que puedan afectar su funcionamiento?",
      },
      {
        nombre: "Integración Segura",
        pregunta:
          "¿El sistema puede integrarse de manera segura con otros sistemas sin comprometer la seguridad de los datos o la funcionalidad general?",
      },
    ],
  },
];
