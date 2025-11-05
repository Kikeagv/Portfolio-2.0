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
        <div className="flex flex-col gap-y-16">
          <ProjectCard
            title="Building a modern and fast credit card onboarding"
            year="2023"
            tags={["Mobile Design", "Onboarding"]}
            imageUrl="https://picsum.photos/seed/portfolio-project-1/648/420.jpg"
            logoUrl="https://picsum.photos/seed/portfolio-logo-1/65/64.jpg"
            slug="credit-card-onboarding"
            className="max-w-6xl mx-auto"
          />
          <ProjectCard
            title="E-commerce platform with AI-powered recommendations"
            year="2024"
            tags={["Web Development", "Machine Learning", "UI/UX"]}
            imageUrl="https://picsum.photos/seed/portfolio-project-2/648/420.jpg"
            logoUrl="https://picsum.photos/seed/portfolio-logo-2/65/64.jpg"
            slug="ecommerce-platform"
            className="max-w-6xl mx-auto"
          />
          <ProjectCard
            title="Real-time collaboration tool for remote teams"
            year="2023"
            tags={["SaaS", "React", "WebSockets", "Design"]}
            imageUrl="https://picsum.photos/seed/portfolio-project-3/648/420.jpg"
            logoUrl="https://picsum.photos/seed/portfolio-logo-3/65/64.jpg"
            slug="collaboration-tool"
            className="max-w-6xl mx-auto"
          />
        </div>
      </div>
    </main>
  );
}
