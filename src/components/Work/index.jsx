const projects = [
  {
    name: "Smartalto Dashboard",
    tag: "CRM + AI Lead Management",
    result:
      "Automated the outbound lead handling reducing the manual work by 75%",
  },
  {
    name: "SaaS Platform",
    tag: "AI + SOP Generation System",
    result: "Improved lead handling and workflow speed",
  },
  {
    name: "Messaging App",
    tag: "Messaging System For ",
    result: "Higher conversion through better UX and speed",
  },
];

const Work = () => {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
        <div className="m-auto">
          <h2 className="text-cyan-300 text-sm font-medium mb-3">
            Selected Work
          </h2>
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto">
            Case studies that build trust.
          </h3>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="rounded-[30px] border border-white/10 bg-gradient-to-b from-white/8 to-white/5 p-5"
          >
            <div
              className={`rounded-[24px] h-56 mb-5 ${index === 0 ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/10" : index === 1 ? "bg-gradient-to-br from-indigo-500/20 to-cyan-500/10" : "bg-gradient-to-br from-blue-500/20 to-slate-500/10"} border border-white/10 flex items-end p-5`}
            >
              <div className="rounded-2xl bg-[#0d1828]/80 border border-white/10 p-4 w-full backdrop-blur">
                <div className="text-sm text-slate-400">{project.tag}</div>
                <div className="text-lg font-semibold mt-1">{project.name}</div>
              </div>
            </div>
            <div className="text-slate-300 text-sm">Outcome</div>
            <div className="text-xl font-semibold mt-2">{project.result}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
