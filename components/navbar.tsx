import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-lg text-slate-100 hover:text-teal-400 transition-colors"
        >
          KARTHIK JR
        </Link>

        <div className="flex gap-6 text-sm text-slate-400">
          <Link
            href="/"
            className="hover:text-teal-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="hover:text-teal-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="hover:text-teal-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-teal-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
