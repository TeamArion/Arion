import Link from "next/link";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] w-full border-t border-primary/20 z-10 relative">
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center px-10 py-12 gap-8">
        <div className="flex items-center gap-4">
          <span className="text-primary font-black text-lg font-display tracking-tighter uppercase">TEAM ARION</span>
          <div className="h-4 w-[1px] bg-outline-variant/40"></div>
          <p className="text-white/40 font-body text-[10px] uppercase tracking-[0.1em]">© 2024 TEAM ARION. ALL RIGHTS RESERVED.</p>
        </div>
        
        <div className="flex gap-10 items-center">
          <Link className="font-body text-[10px] uppercase tracking-[0.1em] text-white/40 hover:text-primary transition-colors duration-200" href="/contact">CONTACT US</Link>
          <Link className="font-body text-[10px] uppercase tracking-[0.1em] text-white/40 hover:text-primary transition-colors duration-200" href="/brochure">TECHNICAL DOCS</Link>
          <Link className="font-body text-[10px] uppercase tracking-[0.1em] text-white/40 hover:text-primary transition-colors duration-200" href="/sponsors">SPONSORSHIP</Link>
        </div>
        
        <div className="flex items-center gap-6">
  <a
    href="https://www.linkedin.com/company/team-arion/?viewAsMember=true"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary/80 hover:text-primary transition-all duration-300 hover:scale-110"
  >
    <FaLinkedin size={22} />
  </a>

  <a
    href="https://www.instagram.com/_team.arion_/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary/80 hover:text-primary transition-all duration-300 hover:scale-110"
  >
    <FaInstagram size={22} />
  </a>

  <a
    href="https://www.youtube.com/@TeamArionNMIT"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary/80 hover:text-primary transition-all duration-300 hover:scale-110"
  >
    <FaYoutube size={22} />
  </a>
</div>
      </div>
    </footer>
  );
}
