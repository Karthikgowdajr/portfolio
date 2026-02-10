export default function AirPointerCaseStudy() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <section
        className="relative rounded-2xl bg-slate-900 border border-slate-800 p-10
                   before:absolute before:inset-0 before:rounded-2xl
                   before:bg-teal-400/5 before:blur-2xl before:-z-10"
      >
        <h1 className="text-4xl font-bold text-slate-100">
          AirPointer
        </h1>

        <p className="mt-4 text-slate-400 max-w-2xl">
          A computer-vision-based system that enables gesture-controlled
          mouse interaction using hand movements.
        </p>

        {/* Problem */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-200">Problem</h2>
          <p className="mt-2 text-slate-400">
            Traditional input devices like a mouse or touchpad are not always
            accessible or intuitive, especially for touchless interaction
            scenarios.
          </p>
        </section>

        {/* Approach */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-200">Approach</h2>
          <p className="mt-2 text-slate-400">
            Built a real-time hand gesture recognition system using computer
            vision to map specific gestures to mouse movements and actions.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-200">Tech Stack</h2>
          <p className="mt-2 text-slate-400">
            Python, OpenCV, MediaPipe, Computer Vision
          </p>
        </section>

        {/* Outcome */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-200">Outcome</h2>
          <p className="mt-2 text-slate-400">
            Achieved real-time gesture tracking and basic mouse control using
            hand movements captured through a webcam.
          </p>
        </section>

        {/* Improvements */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-200">
            What I’d Improve Next
          </h2>
          <p className="mt-2 text-slate-400">
            Improve gesture accuracy, reduce latency, and support a wider
            range of gestures.
          </p>
        </section>
      </section>
    </main>
  );
}
