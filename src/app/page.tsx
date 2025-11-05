import Hero from "~/components/Hero";
import { LinkPreviewDemo } from "~/components/LinkPreviewDemo";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative">
        <Hero />
        <div className="absolute inset-0 flex items-center justify-center">
          <LinkPreviewDemo />
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white">
          Portfolio
        </h1>
      </div>
    </main>
  );
}
