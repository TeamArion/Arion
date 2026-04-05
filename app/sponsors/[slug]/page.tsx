import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { premiumSponsors } from '@/data/sponsors/premiumSponsors';

export function generateStaticParams() {
  return premiumSponsors.map((sponsor) => ({
    slug: sponsor.slug,
  }));
}

export default function SponsorDetailPage({ params }: { params: { slug: string } }) {
  const sponsor = premiumSponsors.find((s) => s.slug === params.slug);

  if (!sponsor) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0e0e0e] text-[#e5e2e1] pt-32 pb-24 selection:bg-[#E8001A] selection:text-[#fff9f8] font-body flex flex-col">
      <article className="max-w-5xl mx-auto px-6 w-full flex-grow">
        
        {/* Navigation back */}
        <Link 
          href="/sponsors" 
          className="inline-flex items-center gap-2 text-[#747373] hover:text-[#E8001A] transition-colors mb-16 uppercase tracking-[0.2em] text-xs font-display font-bold"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Sponsors
        </Link>

        {/* Header Section */}
        <header className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-20">
          {/* Circular Logo exactly as requested */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-[#2a2a2a] bg-[#131313] p-8 flex-shrink-0 flex items-center justify-center shadow-[0_0_50px_rgba(232,0,26,0.05)]">
            <div className="relative w-full h-full">
              <Image 
                src={sponsor.logo}
                alt={`${sponsor.name} Logo`}
                fill
                className="object-contain"
              />
            </div>
            
            {/* Tier Badge inside logo container absolute bounding */}
            <div className={`absolute -bottom-4 bg-[#0e0e0e] border ${sponsor.tier === 'Platinum' ? 'border-[#E8001A] text-[#E8001A]' : 'border-[#c6c6c6] text-[#c6c6c6]'} px-6 py-2 uppercase tracking-[0.3em] font-display font-bold text-xs`}>
              {sponsor.tier}
            </div>
          </div>

          <div className="flex-1 text-center md:text-left mt-4 md:mt-8">
            <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter text-white mb-6">
              {sponsor.name}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              {sponsor.socials.website && (
                <a href={sponsor.socials.website} target="_blank" rel="noopener noreferrer" className="border border-[#46484d] text-white hover:border-[#E8001A] hover:bg-[#E8001A] transition-colors px-6 py-3 font-display font-bold text-xs uppercase tracking-[0.2em]">
                  Visit Website
                </a>
              )}
              {sponsor.socials.linkedin && (
                <a href={sponsor.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-[#0077b5] transition-colors p-3 border border-transparent hover:border-[#2a2a2a]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              )}
              {sponsor.socials.instagram && (
                <a href={sponsor.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-[#E1306C] transition-colors p-3 border border-transparent hover:border-[#2a2a2a]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Description Section */}
        {/* Exactly 250 words generally handled by data layer. Visualized cleanly without curved borders. */}
        <section className="bg-[#131313] p-8 md:p-12 mb-20 border-l border-[#E8001A]">
          <p className="font-body text-[#c8c6c5] leading-loose text-lg whitespace-pre-line">
            {sponsor.description}
          </p>
        </section>

        {/* Gallery Section - Only for Platinum */}
        {sponsor.tier === 'Platinum' && sponsor.gallery && sponsor.gallery.length > 0 && (
          <section className="mb-20">
            <h2 className="font-display font-black text-4xl uppercase tracking-tighter text-white mb-8 border-b border-[#2a2a2a] pb-4">
              Arion <span className="text-[#E8001A] font-light">X</span> {sponsor.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sponsor.gallery.map((imgUrl, i) => (
                <div key={i} className="relative aspect-video w-full border border-[#2a2a2a] hover:border-[#E8001A] transition-colors overflow-hidden group">
                  <Image 
                    src={imgUrl}
                    alt={`Arion and ${sponsor.name} collaborative moment ${i + 1}`}
                    fill
                    className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* Embedded Footer */}
      <footer className="w-full border-t border-[#2a2a2a] bg-[#0e0e0e] mt-auto">
        <div className="max-w-[1920px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display font-bold uppercase tracking-[0.2em] text-xs text-[#747373]">
            &copy; {new Date().getFullYear()} Team Arion Racing.
          </div>
          <div className="font-body text-xs text-[#46484d] uppercase tracking-widest">
            Kinetic Monolith Architecture.
          </div>
        </div>
      </footer>
    </main>
  );
}
