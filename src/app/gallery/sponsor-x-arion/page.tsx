import { Metadata } from 'next';
import InstagramPost from '@/components/Instagram';
import GalleryHero from '@/components/gallery/GalleryHero';
import SectionHeader from '@/components/gallery/SectionHeader';

export const metadata: Metadata = {
  title: 'Sponsor X Arion | TEAM ARION',
  description: 'Our Partnership through social lens',
};

export default function SponsorXArionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <main className="flex flex-col items-center w-full pb-24">
        {/* Hero Section */}
        <GalleryHero
           title="Sponsor X"
           subtitle="Arion"
           archiveLabel="Partnerships // Social activations"
           description="Celebrating the brands that fuel our ambition. A curated feed of our collaborative journey and technical synergy."
           variant="sub"
        />

        {/* Sponsor Feed */}
        <section className="w-full max-w-7xl mx-auto px-6 py-32 bg-[#050505]">
          <SectionHeader 
             title="Synergy Stream"
             className="mb-20"
          />
          <div className="flex flex-wrap gap-12 justify-center">
            <InstagramPost 
              type="post"
              mediaUrl="/images/spons1.webp"
              caption="Massive thanks to our Platinum Sponsor for supplying top-tier machining tools. Building a masterpiece requires the best tools! 🛠️🔧 #Sponsorship #TeamArion"
              likes={512}
              comments={24}
              username="team_arion"
            />
            <InstagramPost 
              type="reel"
              mediaUrl="/videos/car_video.mp4"
              caption="Real-time track telemetry powered by our tech partners. See the data flow as we push the limits! 💻📈 #TechPartner"
              likes={1024}
              comments={45}
            />
            <InstagramPost 
              type="post"
              mediaUrl="/images/s1.png"
              caption="Precision matters. Unboxing the new carbon fiber weaves from our material sponsors. Ready for layup! 🏎️💨 #CarbonFiber"
              likes={340}
              comments={12}
            />
            <InstagramPost 
              type="post"
              mediaUrl="/images/spons2.webp"
              caption="Proudly displaying our partners on the new livery. Together we race towards victory! 🏁🏆 #Motorsports"
              likes={678}
              comments={31}
            />
             <InstagramPost 
              type="reel"
               mediaUrl="/videos/car_video.mp4"
              caption="Behind the scenes of the suspension assembly. High-grade bearings provided by our sponsors making everything buttery smooth! ✨ #Engineering"
              likes={920}
              comments={50}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
