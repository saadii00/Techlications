const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-10 pb-12 md:pt-20 md:pb-28">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 mb-6">
            Premium Software Development Agency
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight max-w-3xl">
            We build <span className="text-cyan-300">scalable</span> digital
            products for ambitious brands.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300 leading-8">
            From SaaS platforms and AI systems to mobile apps and custom web
            solutions, we design and engineer software that looks premium and
            performs in the real world.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button className="rounded-2xl bg-cyan-400 text-slate-950 px-6 py-3 font-semibold hover:scale-[1.02] transition">
              Start Your Project
            </button>
            <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium hover:bg-white/10 transition">
              View Case Studies
            </button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="text-2xl font-semibold">5+</div>
              <div className="text-sm text-slate-400 mt-1">
                Projects delivered
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="text-2xl font-semibold">AI</div>
              <div className="text-sm text-slate-400 mt-1">
                Automation expertise
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="text-2xl font-semibold">24/7</div>
              <div className="text-sm text-slate-400 mt-1">
                Product-focused support
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[28px] border border-white/10 bg-[#0b1728] p-5">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-sm text-slate-400">
                    Live Product Overview
                  </div>
                  <div className="text-xl font-semibold mt-1">
                    Agency Control Center
                  </div>
                </div>
                <div className="h-10 w-10 rounded-2xl bg-cyan-400/20 flex items-center justify-center text-cyan-300">
                  ✦
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col justify-center">
                  <div className="text-sm text-slate-400">Revenue</div>
                  <div className="text-3xl font-semibold ">$84k</div>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10  py-8 flex flex-col justify-center">
                  <div className="text-sm text-slate-400">Projects</div>
                  <div className="text-3xl font-semibold ">5</div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-white/5 border border-white/10 p-4">
                <div className="flex items-center justify-center mb-4">
                  <div>
                    <div className="text-sm text-slate-400">
                      Workflow Status
                    </div>
                    <div className="text-lg font-semibold mt-1">
                      Product Delivery Pipeline
                    </div>
                  </div>
                </div>
                <div className="grid gap-3 grid-cols-3">
                  {[
                    "Discovery",
                    "UI/UX Design",
                    "Development",
                    "QA & Launch",
                    "Maintenance",
                  ].map((item, i) => (
                    <>
                      <div
                        className={`h-3 w-3 rounded-full ${i < 4 ? "bg-cyan-300" : "bg-white/20"}`}
                      />
                      <div className="flex-1 text-sm text-slate-300">
                        {item}
                      </div>
                      <div className="text-xs text-slate-500 justify-self-end">
                        {i < 4 ? "Done" : "Ongoing"}
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-[#0e1a2b]/90 p-4 backdrop-blur-xl shadow-xl hidden md:block">
            <div className="text-xs text-slate-400">Active Client</div>
            <div className="text-lg font-semibold mt-1">Messaging App</div>
            <div className="text-sm text-cyan-300 mt-1">
              Maintenance in progress
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
