const steps = [
  {
    title: "Discovery",
    description:
      "We understand your goals, users, product needs, and technical scope before building.",
  },
  {
    title: "Design",
    description:
      "We craft premium interfaces and product flows that are modern, clear, and conversion-focused.",
  },
  {
    title: "Development",
    description:
      "We build clean, scalable systems using modern technologies and production-ready practices.",
  },
  {
    title: "Launch",
    description:
      "We deploy, optimize, and support your product so it performs smoothly in the real world.",
  },
  {
    title: "Maintenance",
    description:
      "We monitor, improve, and maintain your product to keep it secure, reliable, and performing at its best.",
  },
  {
    title: "Growth",
    description:
      "We refine, scale, and evolve your product with new features, insights, and optimizations as your business grows.",
  },
];

const Process = () => {
  return (
    <section id="process" className="max-w-7xl mx-auto px-6 py-20">
      <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-xl">
        <div className="text-cyan-300 text-sm font-medium mb-3">
          Our Process
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto">
          A simple, reliable system from idea to launch.
        </h2>
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-[26px] border border-white/10 bg-[#0c1626] p-6"
            >
              <div className="text-cyan-300 text-sm mb-4">
                {(i + 1).toString().padStart(2, "0")}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
