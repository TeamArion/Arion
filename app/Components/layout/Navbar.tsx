"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Our Team", href: "/team" },
  { name: "Our Car", href: "/our-car" },
  { name: "OUR GALLERY", href: "/gallery" },
  { name: "Our SPONSORS", href: "/sponsors" },
  { name: "BLOG", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/90 backdrop-blur-md border-b border-primary/20 flex px-6 py-4 max-w-[1920px] mx-auto left-0 right-0 items-center justify-between">
      <Link href="/" className="flex items-center gap-4">
        <div className="h-8 w-8 bg-white flex items-center justify-center rounded-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
            <path d="M12 8l-4 4"></path>
            <path d="M12 8v8"></path>
            <path d="M16 12l-4 -4"></path>
          </svg>
        </div>
        <span className="text-xl font-black text-[#00D3B0] tracking-tighter font-display uppercase">
          TEAM ARION
        </span>
      </Link>
      
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`font-display font-bold uppercase tracking-tight transition-all duration-300 ${
                isActive 
                  ? "text-primary border-b border-primary pb-1" 
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
    </>
  );
}
