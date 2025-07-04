export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-r from-green-400 to-blue-500 py-16 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Fund the Future</h1>
      <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
        Discover amazing projects and help bring innovative ideas to life. Join our community of creators and supporters.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-white text-green-600 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition">Explore Projects</button>
        <button className="bg-green-500 text-white font-semibold px-6 py-2 rounded shadow hover:bg-green-600 transition">Start a Project</button>
      </div>
    </section>
  );
} 