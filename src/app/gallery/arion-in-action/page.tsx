import { Metadata } from 'next';
import InteractiveBentoGallery from '@/components/PhotoGrid';
import GalleryHero from '@/components/gallery/GalleryHero';
import SectionHeader from '@/components/gallery/SectionHeader';

export const metadata: Metadata = {
  title: 'Arion In Action | TEAM ARION',
  description: 'Team Arion in Action',
};

export default function ArionInActionPage() {
  const actionMediaItems = [
    {
      id: 1,
      type: "video",
      title: "Garage Work",
      desc: "Late night chassis welding",
      url: "/videos/car_video.mp4",
      span: "md:col-span-3 md:row-span-3 col-span-2",
    },
    {
      id: 2,
      type: "image",
      title: "Car Testing",
      desc: "First shakedown of the season",
      url: "/images/Car_1.jpeg",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 3,
      type: "image",
      title: "Team Fun",
      desc: "Post-competition celebrations",
      url: "/images/d_1.jpeg",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      id: 4,
      type: "video",
      title: "Suspension Test",
      desc: "Testing lateral forces",
      url: "/videos/car_video.mp4",
      span: "md:col-span-2 md:row-span-3",
    },
    {
      id: 5,
      type: "image",
      title: "Aero Layup",
      desc: "Carbon fiber preparation",
      url: "/images/d_2.jpeg",
      span: "md:col-span-4 md:row-span-2",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <main className="flex flex-col items-center w-full pb-24">
        {/* Hero Section */}
        <GalleryHero
          title="Arion In"
          subtitle="Action"
          archiveLabel="Archive Section 01 // Field Ops"
          description="RAW. FAST. UNFILTERED. A visual log of everything from the sparks in the garage to the smoke on the tarmac."
          variant="sub"
        />

        {/* Gallery Section */}
        <section className="w-full max-w-7xl mx-auto px-6 py-24">
           <SectionHeader 
             title="Bento Stream" 
             className="mb-16"
           />
           <InteractiveBentoGallery mediaItems={actionMediaItems} />
        </section>
      </main>
    </div>
  );
}
