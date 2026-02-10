import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Projects</h1>

      <p className="mt-4 text-gray-600">
        A selection of projects where I focused on problem-solving,
        implementation, and iteration.
      </p>

      <div className="mt-10 space-y-6">
        

        {/* Data Sage */}
    <div className="relative rounded-xl bg-slate-900 border border-slate-800 p-6
                shadow-sm hover:shadow-lg transition-all
                hover:-translate-y-1 hover:border-teal-400/40">
  <h2 className="text-xl font-semibold text-slate-100">Data Sage</h2>

  <p className="mt-2 text-slate-400">
    An AI-powered data analysis assistant that helps users explore,
    query, and derive insights from datasets.
  </p>

  <div className="mt-4 flex items-center gap-4">
    <a
      href="/projects/data-sage"
      className="text-teal-400 hover:text-teal-300 transition-colors"
    >
      Case study →
    </a>
      <a
    href="https://data-sage.streamlit.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-emerald-400 hover:text-emerald-300 transition-colors"
  >
    Live demo ↗
  </a>
    <a
      href="https://github.com/Karthikgowdajr/Data_sage"
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-slate-200 transition-colors"
    >
      GitHub ↗
    </a>
  </div>
</div>


        {/* AirPointer */}
      <div className="relative rounded-xl bg-slate-900 border border-slate-800 p-6
                shadow-sm hover:shadow-lg transition-all
                hover:-translate-y-1 hover:border-teal-400/40">
  <h2 className="text-xl font-semibold text-slate-100">AirPointer</h2>

  <p className="mt-2 text-slate-400">
    A computer-vision-based system that enables gesture-controlled
    mouse interaction using hand movements.
  </p>

  <div className="mt-4 flex items-center gap-4">
    <a
      href="/projects/airpointer"
      className="text-teal-400 hover:text-teal-300 transition-colors"
    >
      Case study →
    </a>
      <a
    href="https://your-live-url-here"
    target="_blank"
    rel="noopener noreferrer"
    className="text-emerald-400 hover:text-emerald-300 transition-colors"
  >
    Live demo ↗
  </a>
    <a
      href="https://github.com/Karthikgowdajr/air-pointer"
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-slate-200 transition-colors"
    >
      GitHub ↗
    </a>
     <span className="text-slate-500 text-sm">
    Desktop application
  </span>
  </div>
 
</div>


      </div>
    </main>
  );
}
