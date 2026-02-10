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
        <div className="border p-6 rounded-lg">
  <h2 className="text-xl font-semibold">Data Sage</h2>
  <p className="mt-2 text-gray-600">
    An AI-powered data analysis assistant that helps users explore,
    query, and derive insights from datasets.
  </p>

  <a
    href="/projects/data-sage"
    className="inline-block mt-4 underline"
  >
    View case study →
  </a>
</div>


        {/* AirPointer */}
       <div className="border p-6 rounded-lg">
  <h2 className="text-xl font-semibold">AirPointer</h2>
  <p className="mt-2 text-gray-600">
    A computer-vision-based system that enables gesture-controlled
    mouse interaction using hand movements.
  </p>

  <a
    href="/projects/airpointer"
    className="inline-block mt-4 underline"
  >
    View case study →
  </a>
</div>


      </div>
    </main>
  );
}
