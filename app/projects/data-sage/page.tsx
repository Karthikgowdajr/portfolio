export default function DataSageCaseStudy() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Data Sage</h1>

      <p className="mt-4 text-gray-600">
        An AI-powered data analysis assistant that helps users explore,
        query, and derive insights from datasets.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="mt-2 text-gray-600">
          Non-technical users struggle to extract insights from raw datasets
          and often rely on manual queries or dashboards.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Approach</h2>
        <p className="mt-2 text-gray-600">
          Built an AI assistant that interprets natural language queries,
          analyzes structured data, and returns meaningful insights.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <p className="mt-2 text-gray-600">
          Python, Pandas, LLMs, FastAPI, Streamlit
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Outcome</h2>
        <p className="mt-2 text-gray-600">
          Enabled faster data exploration and reduced dependency on manual
          analysis workflows.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">What I’d Improve Next</h2>
        <p className="mt-2 text-gray-600">
          Improve query accuracy, add memory across sessions, and support
          larger datasets.
        </p>
      </section>
    </main>
  );
}
