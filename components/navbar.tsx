import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 border-b">
      <div className="max-w-4xl mx-auto flex gap-6 font-medium">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
