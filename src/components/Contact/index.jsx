const Contact = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 pt-10 pb-24">
      <div className="rounded-[36px] bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 p-10 md:p-14">
        <div className="max-w-3xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] opacity-70">
            Let’s Build
          </div>
          <h2 className="text-3xl md:text-6xl font-semibold leading-tight mt-3">
            Ready to turn your idea into a premium digital product?
          </h2>
          <p className="mt-5 text-lg max-w-2xl text-slate-900/80 leading-8 mx-auto">
            We help startups, founders, and businesses design and develop
            high-impact software products that actually move the business
            forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button className="rounded-2xl bg-slate-950 text-white px-6 py-3 font-semibold hover:opacity-90 transition">
              Schedule a Discovery Call
            </button>
            <button className="rounded-2xl border border-slate-900/20 bg-white/30 px-6 py-3 font-medium">
              See Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
