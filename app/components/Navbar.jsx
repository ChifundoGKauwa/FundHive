export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur shadow-sm flex justify-between items-center px-6 py-4">
      <div className="text-green-600 font-bold text-xl">FundHive</div>
      <div className="space-x-6">
        <a href="#featured-projects" className="text-gray-700">Featured Projects</a>
        <a href="#how-it-works" className="text-gray-700">How it works</a>
        <button className="text-gray-700">Sign In</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Start a Project</button>
      </div>
    </nav>
  );
}
