export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight">
        Building AI-driven products from idea to deployment.
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        I design and build systems that combine machine learning, software
        engineering, and product thinking to solve real-world problems.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="/projects"
          className="px-5 py-2 rounded-md bg-black text-white"
        >
          View Projects
        </a>

        <a
          href="/contact"
          className="px-5 py-2 rounded-md border border-gray-300"
        >
          Contact
        </a>
      </div>
    </main>
  );
}
