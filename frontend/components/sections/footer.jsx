export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full h-20 bg-background py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* <div className="flex items-center gap-2">
        <span className="font-bold text-primary text-lg">
          Asian Skin Clinic
        </span>
        <span className="">© {year}</span>
      </div>
      <nav className="flex gap-6 text-sm ">
        <a href="#home" className="hover:text-primary transition-colors">
          Home
        </a>
        <a href="#about" className="hover:text-primary transition-colors">
          About
        </a>
        <a href="#services" className="hover:text-primary transition-colors">
          Services
        </a>
        <a href="#contact" className="hover:text-primary transition-colors">
          Contact
        </a>
      </nav> */}
    </footer>
  );
}
