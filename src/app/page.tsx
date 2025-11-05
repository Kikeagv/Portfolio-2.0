import Hero from "~/components/Hero";
import { LinkPreviewDemo } from "~/components/LinkPreviewDemo";
import ProjectCard from "~/components/ProjectCard";

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
        <ProjectCard
          title="Building a modern and fast credit card onboarding"
          year="2023"
          tags={["Mobile Design", "Onboarding"]}
          imageUrl="https://picsum.photos/seed/portfolio-project/648/420.jpg"
          logoUrl="https://picsum.photos/seed/portfolio-logo/65/64.jpg"
          className="max-w-6xl mx-auto"
        />
      </div>
    </main>
  );
}
