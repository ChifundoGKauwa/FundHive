const steps = [
  {
    number: 1,
    title: "Create Your Project",
    description: "Share your vision, set your funding goal, and tell your story to the world.",
  },
  {
    number: 2,
    title: "Build Your Community",
    description: "Engage with supporters, share updates, and grow your project's momentum.",
  },
  {
    number: 3,
    title: "Bring Ideas to Life",
    description: "Reach your goal, deliver on promises, and make your vision a reality.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-14 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">How FundHive Works</h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Simple steps to turn your ideas into reality
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex-1 flex flex-col items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold text-xl mb-3 border-2 border-green-400">
                {step.number}
              </div>
              <div className="font-semibold mb-1">{step.title}</div>
              <div className="text-gray-500 text-sm">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 