import Link from "next/link";
import Image from "next/image";

const project = {
  title: "E-commerce platform with AI-powered recommendations",
  year: "2024",
  tags: ["Web Development", "Machine Learning", "UI/UX"],
  description: "A next-generation e-commerce platform featuring personalized product recommendations and immersive shopping experiences.",
  imageUrl: "https://picsum.photos/seed/portfolio-project-2/1200/630.jpg",
  logoUrl: "https://picsum.photos/seed/portfolio-logo-2/130/128.jpg",
  client: "ShopTech Industries",
  duration: "6 months",
  role: "Senior UX Designer",
  tools: ["Figma", "Framer", "Python", "TensorFlow", "Algolia"],
  overview: "Developed an AI-driven e-commerce platform that learns user preferences and provides personalized shopping experiences with smart recommendations.",
  problem: "Traditional e-commerce platforms showed generic product suggestions, leading to poor conversion rates and customer dissatisfaction.",
  solution: "Built an intelligent recommendation engine combined with an intuitive interface that adapts to user behavior and preferences in real-time.",
  process: [
    "Market research and user interviews",
    "AI model development and training",
    "Interface design and prototyping",
    "A/B testing of recommendation algorithms",
    "Performance optimization and launch"
  ],
  results: [
    "78% increase in conversion rate",
    "300% improvement in recommendation accuracy",
    "45% reduction in cart abandonment",
    "4.8/5 average customer rating"
  ]
};

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 relative">
              <Image
                src={project.logoUrl}
                alt="Project logo"
                width={130}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-8 justify-center text-lg">
            <span className="text-gray-300">{project.year}</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-300">{project.duration}</span>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-4">Client</h3>
            <p className="text-gray-300 text-lg">{project.client}</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Role</h3>
            <p className="text-gray-300 text-lg">{project.role}</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Duration</h3>
            <p className="text-gray-300 text-lg">{project.duration}</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Tools</h3>
            <p className="text-gray-300 text-lg">{project.tools.join(", ")}</p>
          </div>
        </div>

        {/* Overview */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Overview</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Problem */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Problem</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Solution</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {project.solution}
          </p>
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            {/* This would be where you add screenshots, videos, or interactive demos */}
            <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
              <p className="text-gray-400">Project showcase area</p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Process</h2>
          <ol className="space-y-4">
            {project.process.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="text-purple-400 font-bold text-xl">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span className="text-lg text-gray-300">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Results */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6">
                <p className="text-lg text-gray-300">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-lg"
          >
            ← Back to Projects
          </Link>
        </div>
      </section>
    </main>
  );
}