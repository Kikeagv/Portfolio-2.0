import Hero from "~/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900">
          Portfolio
        </h1>
      </div>
    </main>
  );
}
