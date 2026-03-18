export default function ResumeSenseiCaseStudy() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <section
        className="relative rounded-2xl bg-slate-900 border border-slate-800 p-10
                   before:absolute before:inset-0 before:rounded-2xl
                   before:bg-teal-400/5 before:blur-2xl before:-z-10"
      >
        <h1 className="text-4xl font-bold text-slate-100">
          Resume Sensei
        </h1>

        <p className="mt-4 text-slate-400 max-w-2xl">
         An AI-powered Resume Scanner which helps you with ats and recruiter scores to make your 
        resume better for job applications..
        </p>



        {/* Problem */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-200">Problem</h2>
          <p className="mt-2 text-slate-400">
            Job seekers often depend on online ATS score checkers to validate their resumes,
            but many free tools produce inconsistent and non-transparent scores, leaving users confused about the actual quality of their resume.
          </p>
        </section>

        
        {/* Approach */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-200">Approach</h2>
          <p className="mt-2 text-slate-400">
            an AI-powered resume analysis system designed to simulate ATS-style screening with more transparency. The system parses resumes,
            evaluates structure and relevance, compares content against job descriptions, detects missing keywords, and generates section-wise improvement suggestions.
          </p>
        </section>

        {/* Key Feature */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-200">Key Feature</h2>
          <p className="mt-2 text-slate-400">
            Resume parsing and content extraction, ATS-style score breakdown, Job description matching,  Missing keyword identification,
            Section-level feedback, Explainable scoring logic, AI-generated improvement suggestions
          </p>
        </section>
        
      </section>
    </main>
  );
}