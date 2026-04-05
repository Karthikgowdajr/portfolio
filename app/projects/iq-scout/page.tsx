export default function IQScoutCaseStudy() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <section
        className="relative rounded-2xl bg-slate-900 border border-slate-800 p-10
                   before:absolute before:inset-0 before:rounded-2xl
                   before:bg-orange-400/5 before:blur-2xl before:-z-10"
      >
        {/* Title */}
        <h1 className="text-4xl font-bold text-slate-100">
          IQ-Scout
        </h1>

        <p className="mt-4 text-slate-400 max-w-2xl">
          An AI-powered sales intelligence engine that analyzes any company
          in real-time and generates actionable insights, deal signals, and
          ready-to-send outreach.
        </p>

        {/* Problem */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-200">Problem</h2>
          <p className="mt-2 text-slate-400">
            Sales teams spend hours researching prospects manually—analyzing websites,
            identifying pain points, and crafting personalized outreach. This process is slow,
            inconsistent, and difficult to scale.
          </p>
        </section>

        {/* Approach */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-200">Approach</h2>
          <p className="mt-2 text-slate-400">
            Built a real-time AI pipeline that scrapes company data, enriches it with external signals,
            and uses LLMs to generate structured insights. The system converts raw web data into
            actionable sales intelligence in seconds.
          </p>
        </section>

        {/* Architecture */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-200">Architecture</h2>
          <ul className="mt-2 text-slate-400 space-y-2 list-disc list-inside">
            <li>Firecrawl for dynamic website scraping</li>
            <li>Tavily for real-time news and signals</li>
            <li>FastAPI backend for orchestration</li>
            <li>LLM (OpenRouter / Gemini) for analysis + reasoning</li>
            <li>Streamlit frontend for interactive UI</li>
          </ul>
        </section>

        {/* Key Features */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-200">Key Features</h2>
          <ul className="mt-2 text-slate-400 space-y-2 list-disc list-inside">
            <li>Instant company analysis from a single URL</li>
            <li>AI-generated pain points and opportunity areas</li>
            <li>Deal scoring and fit classification</li>
            <li>Competitor and risk insights</li>
            <li>Auto-generated cold emails and LinkedIn outreach</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-200">Tech Stack</h2>
          <p className="mt-2 text-slate-400">
            FastAPI, Streamlit, Python, OpenRouter, Gemini, Firecrawl, Tavily
          </p>
        </section>

        {/* Outcome */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-200">Outcome</h2>
          <p className="mt-2 text-slate-400">
            Reduced prospect research time from hours to seconds and enabled
            consistent, high-quality outreach generation. Demonstrated a scalable
            approach to AI-driven sales automation.
          </p>
        </section>

        {/* Improvements */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-200">
            What I’d Improve Next
          </h2>
          <ul className="mt-2 text-slate-400 space-y-2 list-disc list-inside">
            <li>Add memory for multi-touch prospect tracking</li>
            <li>Integrate CRM (HubSpot / Salesforce)</li>
            <li>Advanced RAG with vector database</li>
            <li>Real-time lead scoring dashboard</li>
            <li>Multi-agent pipeline for deeper analysis</li>
          </ul>
        </section>

        {/* Impact Line (🔥 Important for founders) */}
        <section className="mt-10">
          <p className="text-orange-400 font-semibold text-lg">
            → IQ-Scout transforms raw company data into sales-ready intelligence instantly.
          </p>
        </section>
      </section>
    </main>
  );
}