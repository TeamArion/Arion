import { Metadata } from 'next';
import InteractiveBentoGallery from '@/components/PhotoGrid';
import InstagramPost from '@/components/Instagram';
import GalleryHero from '@/components/gallery/GalleryHero';
import SectionHeader from '@/components/gallery/SectionHeader';
import StatCard from '@/components/gallery/StatCard';

export const metadata: Metadata = {
  title: 'Formula Bharat 2026 | TEAM ARION',
  description: 'Road to Coimbatore',
};

export default function FormulaBharatPage() {
  const fbMediaItems = [
    {
      id: 1,
      type: "image",
      title: "Statics Event",
      desc: "Design Evaluation",
      url: "/images/d_1.jpeg",
      span: "md:col-span-3 md:row-span-2",
    },
    {
      id: 2,
      type: "video",
      title: "Endurance Run",
      desc: "Pushing limits at Kari Motor Speedway",
      url: "/videos/car_video.mp4",
      span: "md:col-span-3 md:row-span-4",
    },
    {
      id: 3,
      type: "image",
      title: "Cost Report",
      desc: "Business Presentation",
      url: "/images/d_2.jpeg",
      span: "md:col-span-3 md:row-span-2",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <main className="flex flex-col items-center w-full pb-24">
        {/* Hero Section */}
        <GalleryHero
           title="Formula Bharat"
           subtitle="2026"
           archiveLabel="Event Hub // Coimbatore"
           description="A high-voltage campaign at Kari Motor Speedway. Monitoring performance metrics and engineering achievements in real-time."
           variant="sub"
        />

        {/* Stats Section */}
        <section className="w-full bg-[#050505] border-b border-white/5 py-24 px-6 relative overflow-hidden">
          <div className="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative z-10">
            <StatCard label="Overall Rank" value="04" largeValue />
            <StatCard label="Endurance" value="Complete" />
            <StatCard label="Design Event" value="Top 5" />
            <StatCard label="Business Plan" value="03" largeValue />
          </div>
        </section>

        {/* Media & Updates Grid */}
        <section className="w-full max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row gap-16">
          {/* Photo Gallery (Left Side) */}
          <div className="w-full lg:w-2/3 flex flex-col gap-12">
            <SectionHeader title="High Speed Highlights" />
            <InteractiveBentoGallery mediaItems={fbMediaItems} />
          </div>

          {/* Instagram Feed (Right Side) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-12">
            <SectionHeader title="Live Updates" />
            <div className="flex flex-col gap-8 items-center">
               <InstagramPost 
                 type="post"
                 mediaUrl="/images/Car_1.jpeg"
                 caption="Arrived at Kari Motor Speedway! Technical inspection starts tomorrow. Ready to show what we've built. #FormulaBharat2026 #TeamArion"
                 likes={428}
                 comments={15}
               />
               <InstagramPost 
                 type="reel"
                 mediaUrl="/videos/car_video.mp4"
                 caption="Sound ON 🔊 First engine fire-up at the tracks! Pure music to our ears. #Racing #Engineering"
                 likes={892}
                 comments={42}
               />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
