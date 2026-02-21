import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
      <section className="relative rounded-2xl bg-slate-900 border border-slate-800 p-10
                    before:absolute before:inset-0 before:rounded-2xl
                    before:bg-teal-400/10 before:blur-2xl before:-z-10">

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* LEFT SIDE - TEXT */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold tracking-tight leading-tight text-slate-100">
              Building AI-driven products
              <span className="block text-teal-400">
                from idea to deployment
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
              I design and build intelligent systems that combine machine learning,
              software engineering, and product thinking to solve real-world problems.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="/projects"
                className="px-6 py-3 rounded-md bg-teal-400 text-slate-950 font-medium hover:bg-teal-300 transition-colors"
              >
                View Projects
              </a>

              <a
                href="/contact"
                className="px-6 py-3 rounded-md border border-slate-700 text-slate-200 hover:bg-slate-800 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/Karthik_Professional.png.jpeg"
              alt="Karthik JR"
              width={290}
              height={290}
              className="rounded-2xl object-cover shadow-2xl border border-slate-700 hover:scale-105 transition-transform duration-300"
            />
          </div>

        </div>
      </section>
    </main>
  );
}