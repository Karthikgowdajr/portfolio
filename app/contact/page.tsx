export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Contact</h1>

      <p className="mt-4 text-gray-400">
        You can reach me or explore my work through the links below.
      </p>

      <ul className="mt-6 space-y-2">
        <li>
          <a className="text-slate-400 hover:text-slate-200 transition-colors" href="https://github.com/Karthikgowdajr">
            GitHub ↗
          </a>
        </li>
        <li>
          <a className="text-slate-400 hover:text-slate-200 transition-colors" href="https://www.linkedin.com/in/karthik-jr-14--/">
            LinkedIn ↗
          </a>
        </li>
        <li>
          <a className="text-slate-400 hover:text-slate-200 transition-colors" href="mailto:karthikjr14@gmail.com">
            Email ↗
          </a>
        </li>
      </ul>
    </main>
  );
}
