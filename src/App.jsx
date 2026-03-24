import Header from "./components/Header";

import "./App.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Contact from "./components/Contact";

const DevAgencyHomepage = () => {
  return (
    <div className="min-h-screen bg-[#07111f] text-white overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-32 right-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <Header />

      <main className="relative z-10">
        <Hero />
        <Services />
        <Work />
        <Process />
        <Contact />
      </main>
    </div>
  );
};

export default DevAgencyHomepage;
