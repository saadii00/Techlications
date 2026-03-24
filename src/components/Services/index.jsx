import CloudIcon from "../../assets/custom-coding-svgrepo-com.svg";
import DataIcon from "../../assets/data-svgrepo-com.svg";
import MobileIcon from "../../assets/mobile-check-svgrepo-com.svg";
import SaaSIcon from "../../assets/cloud-svgrepo-com.svg";
import ComputerIcon from "../../assets/computer-svgrepo-com.svg";
import BlockchainIcon from "../../assets/blockchain-svgrepo-com.svg";
import DesignIcon from "../../assets/design-svgrepo-com.svg";
import BrainIcon from "../../assets/brain-svgrepo-com.svg";

const services = [
  {
    title: "Custom Web Apps",
    desc: "Fast, scalable web platforms built for startups, SaaS products, and growing businesses.",
    icon: CloudIcon,
  },
  {
    title: "Data Intelligence",
    desc: "Transform raw data through ETL pipelines into dashboards, insights, and systems that support smarter business decisions.",
    icon: DataIcon,
  },
  {
    title: "Mobile Development",
    desc: "High-performance cross-platform mobile apps with clean UX, smooth interactions, and strong backend integration.",
    icon: MobileIcon,
  },
  {
    title: "AI Development",
    desc: "AI-powered solutions that automate workflows, improve decisions, and enhance user experiences.",
    icon: BrainIcon,
  },
  {
    title: "Desktop Development",
    desc: "Robust desktop applications built for performance, seamless workflows, and deep system integration across Windows, macOS, and Linux.",
    icon: ComputerIcon,
  },
  {
    title: "Blockchain Development",
    desc: "Secure and scalable blockchain solutions, from smart contracts to decentralized applications, built for transparency, automation, and real-world business use.",
    icon: BlockchainIcon,
  },
  {
    title: "UI/UX Design",
    desc: "User-centered interfaces designed for clarity, conversion, and seamless digital experiences across web and mobile products.",
    icon: DesignIcon,
  },
  {
    title: "Cloud & DevOps",
    desc: "Reliable cloud infrastructure, deployment pipelines, and scalable environments built for performance, security, and smooth operations.",
    icon: SaaSIcon,
  },
];

const Services = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-16">
      <div className="max-w-2xl mb-10 mx-auto">
        <div className="text-cyan-300 text-sm font-medium mb-3">Services</div>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Built for modern software businesses.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur hover:-translate-y-1 transition"
          >
            <div className="h-12 w-12 rounded-2xl bg-cyan-400/15 border border-cyan-300/20 mb-5 flex items-center justify-center text-cyan-300 mx-auto">
              <img
                src={service.icon}
                alt="Service Icon"
                className="h-6 w-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-slate-400 leading-7 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
