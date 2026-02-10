export default function AirPointerCaseStudy() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">AirPointer</h1>

      <p className="mt-4 text-gray-600">
        A computer-vision-based system that enables gesture-controlled
        mouse interaction using hand movements.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="mt-2 text-gray-600">
          Traditional input devices like a mouse or touchpad are not always
          accessible or intuitive, especially for touchless interaction
          scenarios.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Approach</h2>
        <p className="mt-2 text-gray-600">
          Built a real-time hand gesture recognition system using computer
          vision to map specific gestures to mouse movements and actions.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <p className="mt-2 text-gray-600">
          Python, OpenCV, MediaPipe, Computer Vision
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Outcome</h2>
        <p className="mt-2 text-gray-600">
          Achieved real-time gesture tracking and basic mouse control using
          hand movements captured through a webcam.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">What I’d Improve Next</h2>
        <p className="mt-2 text-gray-600">
          Improve gesture accuracy, reduce latency, and support a wider
          range of gestures.
        </p>
      </section>
    </main>
  );
}
