import React, { useRef, useState, useLayoutEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import GallerySection from '../components/GallerySection';
import HomeTourismSections from '../components/HomeTourismSections';
import HeroSection from '../components/HeroSection';

export default function HomePage() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState(0);

  useLayoutEffect(() => {
    if (!gridRef.current) return;

    const updateHeight = () => {
      if (gridRef.current) {
        setSectionHeight(gridRef.current.offsetHeight);
      }
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection />

      <div className="relative">
        <div className="sticky z-0 bg-black" style={{ top: `min(0px, calc(100vh - ${sectionHeight}px))` }}>
          <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-[#0A110D] pb-[1px]">
            <div className="relative h-full">
              <div className="lg:sticky lg:top-0 lg:h-screen w-full min-h-[50vh] bg-[#E8E5DF] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2000&auto=format&fit=crop"
                  alt="Giraffes at Sunset"
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
                />
                <div className="absolute top-5 left-5 flex items-center gap-2 text-[#0A110D] lg:top-8 lg:left-8">
                  <div className="flex -space-x-2 opacity-80">
                    <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" strokeWidth={3} />
                    <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" strokeWidth={3} />
                  </div>
                  <span className="font-sans font-bold text-2xl lg:text-3xl tracking-tighter opacity-80">WILD SAFARI</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#0A110D]">
              <div className="bg-[#E8E5DF] p-6 lg:p-10 flex flex-col min-h-[350px] lg:min-h-[50vh]">
                <h2 className="text-xl lg:text-2xl xl:text-[28px] font-medium leading-tight text-[#0A110D] tracking-tight">
                  Experience the Great Migration: A Journey Through the Serengeti
                </h2>
                <div className="mt-auto pt-8 lg:pt-4 font-mono text-[10px] xl:text-[11px] tracking-widest uppercase text-[#0A110D] space-y-3">
                  <p>Featured Expedition</p>
                  <p className="leading-relaxed opacity-80">
                    Witness millions of wildebeest and zebras traverse the plains in one of nature&apos;s most spectacular events.
                  </p>
                </div>
              </div>

              <div className="bg-[#E8E5DF] p-6 lg:p-10 flex flex-col relative min-h-[350px] lg:min-h-[50vh]">
                <div className="absolute top-5 right-5 lg:top-8 lg:right-8 flex items-center gap-3 cursor-pointer text-[#0A110D] hover:opacity-70 transition-opacity z-10">
                  <div className="flex flex-col gap-[4px] w-6 lg:w-8">
                    <div className="h-[2px] w-full bg-current"></div>
                    <div className="h-[2px] w-full bg-current"></div>
                  </div>
                  <span className="font-mono text-xs lg:text-sm uppercase tracking-widest font-medium">Menu</span>
                </div>

                <h2 className="text-xl lg:text-2xl xl:text-[28px] font-medium leading-tight text-[#0A110D] tracking-tight mt-12 lg:mt-0 pr-12">
                  Luxury Lodges: Where Comfort Meets the Untamed Wilderness
                </h2>
                <div className="mt-auto pt-8 lg:pt-4 font-mono text-[10px] xl:text-[11px] tracking-widest uppercase text-[#0A110D] space-y-3">
                  <p>Accommodations</p>
                  <p className="leading-relaxed opacity-80">
                    Immerse yourself in nature without sacrificing five-star amenities and world-class dining.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2 bg-[#15241B] p-8 lg:p-12 xl:p-16 flex flex-col min-h-[400px] lg:min-h-[60vh]">
                <h1 className="text-3xl lg:text-4xl xl:text-[52px] font-medium leading-[1.1] text-[#E8E5DF] tracking-tight max-w-3xl mt-auto lg:mt-4">
                  Discover the Big Five: Your Ultimate African Safari Adventure
                </h1>
                <div className="mt-8 lg:mt-auto">
                  <div className="font-mono text-[10px] xl:text-[11px] tracking-widest uppercase text-[#a0a0a0] space-y-4 max-w-xl">
                    <p>Wildlife Encounters</p>
                    <p className="leading-relaxed">
                      Join our expert guides on daily game drives to spot lions, leopards, rhinos, elephants, and buffalo in their natural habitat.
                    </p>
                  </div>
                  <button className="mt-8 bg-[#E8E5DF] text-[#0A110D] font-mono text-[10px] xl:text-xs font-medium tracking-widest uppercase px-6 py-3 xl:px-8 xl:py-4 rounded-full hover:bg-white transition-colors w-fit">
                    Plan Your Safari
                  </button>
                </div>
              </div>

              <div className="bg-[#E8E5DF] p-6 lg:p-10 flex flex-col min-h-[350px] lg:min-h-[50vh]">
                <h2 className="text-xl lg:text-2xl xl:text-[28px] font-medium leading-tight text-[#0A110D] tracking-tight mt-auto lg:mt-8">
                  Guided Walking Safaris: Connect with the Earth
                </h2>
                <div className="mt-auto pt-8 lg:pt-4 font-mono text-[10px] xl:text-[11px] tracking-widest uppercase text-[#0A110D] space-y-3">
                  <p>Immersive Experiences</p>
                  <p className="leading-relaxed opacity-80">
                    Step out of the vehicle and experience the bush up close, learning about tracks, flora, and smaller wildlife.
                  </p>
                </div>
              </div>

              <div className="bg-[#15241B] p-6 lg:p-10 flex flex-col min-h-[350px] lg:min-h-[50vh]">
                <h2 className="text-xl lg:text-2xl xl:text-[28px] font-medium leading-tight text-[#E8E5DF] tracking-tight mt-auto lg:mt-8">
                  Conservation at Heart: Protecting Africa&apos;s Heritage
                </h2>
                <div className="mt-auto pt-8 lg:pt-4 font-mono text-[10px] xl:text-[11px] tracking-widest uppercase text-[#a0a0a0] space-y-3">
                  <p>Our Commitment</p>
                  <p className="leading-relaxed">
                    A portion of every booking goes directly to local anti-poaching units and community development projects, ensuring the
                    wild remains wild.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[100vh] pointer-events-none"></div>
      </div>

      <div ref={galleryRef} className="relative z-10 -mt-[100vh]">
        <GallerySection />
      </div>

      <HomeTourismSections />
    </>
  );
}
