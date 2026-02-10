export default function DataSageCaseStudy() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <section
        className="relative rounded-2xl bg-slate-900 border border-slate-800 p-10
                   before:absolute before:inset-0 before:rounded-2xl
                   before:bg-teal-400/5 before:blur-2xl before:-z-10"
      >
        <h1 className="text-4xl font-bold text-slate-100">
          Data Sage
        </h1>

        <p className="mt-4 text-slate-400 max-w-2xl">
          An AI-powered data analysis assistant that helps users explore,
          query, and derive insights from datasets.
        </p>

        {/* Problem */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-200">Problem</h2>
          <p className="mt-2 text-slate-400">
            Non-technical users struggle to extract insights from raw datasets
            and often rely on manual queries or dashboards.
          </p>
        </section>

        {/* Approach */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-200">Approach</h2>
          <p className="mt-2 text-slate-400">
            Built an AI assistant that interprets natural language queries,
            analyzes structured data, and returns meaningful insights.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-200">Tech Stack</h2>
          <p className="mt-2 text-slate-400">
            Python, Pandas, LLMs, FastAPI, Streamlit
          </p>
        </section>

        {/* Outcome */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-200">Outcome</h2>
          <p className="mt-2 text-slate-400">
            Enabled faster data exploration and reduced dependency on manual
            analysis workflows.
          </p>
        </section>

        {/* Improvements */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-200">
            What I’d Improve Next
          </h2>
          <p className="mt-2 text-slate-400">
            Improve query accuracy, add memory across sessions, and support
            larger datasets.
          </p>
        </section>
      </section>
    </main>
  );
}
