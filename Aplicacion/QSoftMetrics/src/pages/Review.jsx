import Navbar from "../components/Navbar";

export default function Review() {
  return (
    <section className="flex flex-row min-h-[100vh] bg-background text-foreground">
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Main Page</h1>
      </div>
    </section>
  );
}
