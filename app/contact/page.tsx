export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Contact</h1>

      <p className="mt-4 text-gray-600">
        You can reach me or explore my work through the links below.
      </p>

      <ul className="mt-6 space-y-2">
        <li>
          <a className="underline" href="https://github.com/your-username">
            GitHub
          </a>
        </li>
        <li>
          <a className="underline" href="https://linkedin.com/in/your-username">
            LinkedIn
          </a>
        </li>
        <li>
          <a className="underline" href="mailto:youremail@example.com">
            Email
          </a>
        </li>
      </ul>
    </main>
  );
}
