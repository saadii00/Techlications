import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Techlications Logo" className="h-16 w-auto" />
        <div className="text-xl font-semibold tracking-wide">Techlications</div>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm text-cyan-300">
        <a href="#services" className="hover:text-white transition ">Services</a>
        <a href="#work" className="hover:text-white transition">Work</a>
        <a href="#process" className="hover:text-white transition">Process</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </nav>
      <button className="rounded-2xl border border-cyan-400/30 bg-white/5 px-5 py-2 text-sm font-medium text-white backdrop-blur hover:bg-white/10 transition">
        Book a Call
      </button>
    </header>
  );
}

export default Header;