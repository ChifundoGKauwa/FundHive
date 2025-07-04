const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    category: "Technology",
    title: "Smart Urban Farming System",
    description: "Revolutionary hydroponic system that allows anyone to grow fresh vegetables at home using AI-powered automation.",
    raised: 23450,
    goal: 50000,
    author: "Chifundo Kauwa",
    daysLeft: 12,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    category: "Environment",
    title: "Ocean Cleanup Drone Project",
    description: "Autonomous underwater drones designed to collect plastic waste from oceans while monitoring marine life and water quality.",
    raised: 45000,
    goal: 75000,
    author: "Yankho Chisale",
    daysLeft: 8,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    category: "Education",
    title: "VR Learning Platform for Kids",
    description: "Immersive virtual reality educational platform that makes learning fun and interactive for children aged 5-12.",
    raised: 18750,
    goal: 30000,
    author: "Victor Khembo",
    daysLeft: 15,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    category: "Health",
    title: "Solar-Powered Water Purifier",
    description: "Portable water purification system powered entirely by solar energy, designed for remote communities and disaster relief.",
    raised: 28900,
    goal: 40000,
    author: "Philip Ephraim",
    daysLeft: 22,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
    category: "Health",
    title: "AI-Powered Music Therapy App",
    description: "Mobile application that uses artificial intelligence to create personalized music therapy sessions for mental health support.",
    raised: 15600,
    goal: 25000,
    author: "Gift Kasauka",
    daysLeft: 30,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    category: "Fashion",
    title: "Sustainable Fashion Marketplace",
    description: "Online platform connecting eco-conscious consumers with sustainable fashion brands and upcycled clothing.",
    raised: 12400,
    goal: 35000,
    author: "Jackson Chadza",
    daysLeft: 45,
  },
];

function ProgressBar({ value, max }) {
  const percent = Math.round((value / max) * 100);
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
      <div
        className="bg-green-500 h-2 rounded-full"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="w-full py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Featured Projects</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Discover innovative projects from creators around the world. Every contribution makes a difference.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow p-4 flex flex-col">
              <div className="relative mb-3">
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded" />
                <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">{project.category}</span>
              </div>
              <h3 className="font-semibold text-lg mb-1 text-green-700">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-2 flex-1">{project.description}</p>
              <ProgressBar value={project.raised} max={project.goal} />
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>MK{project.raised.toLocaleString()} raised</span>
                <span>{Math.round((project.raised / project.goal) * 100)}% of MK{project.goal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                <span>by {project.author}</span>
                <span className="font-semibold text-gray-700">{project.daysLeft} days left</span>
              </div>
              <button className="mt-auto bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600 transition">Fund This Project</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 