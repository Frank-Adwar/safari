import React, { useRef, useState, useLayoutEffect } from 'react';
import { ChevronRight, Instagram } from 'lucide-react';
import GallerySection from './components/GallerySection';

export default function App() {
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
    <div className="bg-[#0A110D] font-sans">
      {/* Split Layout Container */}
      <div className="relative">
        <div 
          className="sticky z-0 bg-black"
          style={{ top: `min(0px, calc(100vh - ${sectionHeight}px))` }}
        >
          <div 
            ref={gridRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-[#0A110D] pb-[1px]"
          >
          
          {/* Left Column (Sticky Image) */}
        <div className="relative h-full">
          <div 
            className="lg:sticky lg:top-0 lg:h-screen w-full min-h-[50vh] bg-[#E8E5DF] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2000&auto=format&fit=crop" 
              alt="Giraffes at Sunset" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
            />
            <div className="absolute top-5 left-5 lg:top-8 lg:left-8 flex items-center gap-2 text-[#0A110D]">
              <div className="flex -space-x-2 opacity-80">
                <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" strokeWidth={3} />
                <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" strokeWidth={3} />
              </div>
              <span className="font-sans font-bold text-2xl lg:text-3xl tracking-tighter opacity-80">WILD SAFARI</span>
            </div>
          </div>
        </div>

        {/* Right Column (Scrollable Content) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#0A110D]">
          
          {/* Top Middle -> Block 1 */}
          <div className="bg-[#E8E5DF] p-6 lg:p-10 flex flex-col min-h-[350px] lg:min-h-[50vh]">
            <h2 className="text-xl lg:text-2xl xl:text-[28px] font-medium leading-tight text-[#0A110D] tracking-tight">
              Experience the Great Migration: A Journey Through the Serengeti
            </h2>
            <div className="mt-auto pt-8 lg:pt-4 font-mono text-[10px] xl:text-[11px] tracking-widest uppercase text-[#0A110D] space-y-3">
              <p>Featured Expedition</p>
              <p className="leading-relaxed opacity-80">
                Witness millions of wildebeest and zebras traverse the plains in one of nature's most spectacular events.
              </p>
            </div>
          </div>

          {/* Top Right -> Block 2 */}
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

          {/* Bottom Left -> Block 3 (Full width on right side) */}
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

          {/* Middle Middle -> Block 4 */}
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

          {/* Middle Right -> Block 5 */}
          <div className="bg-[#15241B] p-6 lg:p-10 flex flex-col min-h-[350px] lg:min-h-[50vh]">
            <h2 className="text-xl lg:text-2xl xl:text-[28px] font-medium leading-tight text-[#E8E5DF] tracking-tight mt-auto lg:mt-8">
              Conservation at Heart: Protecting Africa's Heritage
            </h2>
            <div className="mt-auto pt-8 lg:pt-4 font-mono text-[10px] xl:text-[11px] tracking-widest uppercase text-[#a0a0a0] space-y-3">
              <p>Our Commitment</p>
              <p className="leading-relaxed">
                A portion of every booking goes directly to local anti-poaching units and community development projects, ensuring the wild remains wild.
              </p>
            </div>
          </div>

        </div>
        </div>
        </div>
        
        {/* Spacer to allow scrolling while sticky */}
        <div className="h-[100vh] pointer-events-none"></div>
      </div>

      {/* Gallery Section with Scroll Animation */}
      <div ref={galleryRef} className="relative z-10 -mt-[100vh]">
        <GallerySection />
      </div>

      {/* Footer Section */}
      <footer className="min-h-screen bg-white text-black p-4 md:p-6 lg:p-8 font-sans flex flex-col justify-center relative z-20">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* DESTINATIONS */}
          <div className="border border-gray-200 rounded-2xl p-6 lg:p-8 flex flex-col min-h-[300px] lg:min-h-[400px]">
            <h3 className="font-bold text-sm tracking-wider mb-auto">DESTINATIONS</h3>
            <ul className="space-y-4 text-[15px] font-medium">
              <li><a href="#" className="hover:opacity-70 transition-opacity">All</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Serengeti</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Maasai Mara</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Kruger National Park</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Okavango Delta</a></li>
            </ul>
          </div>

          {/* EXPERIENCES */}
          <div className="border border-gray-200 rounded-2xl p-6 lg:p-8 flex flex-col min-h-[300px] lg:min-h-[400px]">
            <h3 className="font-bold text-sm tracking-wider mb-8">EXPERIENCES</h3>
            <ul className="space-y-4 text-[15px] font-medium">
              <li><a href="#" className="hover:opacity-70 transition-opacity">All</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Game Drives</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Walking Safaris</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Hot Air Balloon</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Photography Tours</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Cultural Visits</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Conservation</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="border border-gray-200 rounded-2xl p-6 lg:p-8 flex flex-col min-h-[300px] lg:min-h-[400px]">
            <h3 className="font-bold text-sm tracking-wider mb-8">COMPANY</h3>
            <ul className="space-y-4 text-[15px] font-medium">
              <li><a href="#" className="underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity">Home</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">FAQs</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Booking Terms</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Cookie Policy</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Contact</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Plan Your Trip</a></li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div className="flex flex-col gap-4 lg:gap-6 min-h-[300px] lg:min-h-[400px]">
            <div className="grid grid-cols-2 gap-4 lg:gap-6 flex-1">
              <a href="#" className="border border-gray-200 rounded-2xl flex items-center justify-center hover:bg-gray-50 transition-colors h-full">
                <Instagram className="w-8 h-8 lg:w-10 lg:h-10" strokeWidth={2} />
              </a>
              <a href="#" className="border border-gray-200 rounded-2xl flex items-center justify-center hover:bg-gray-50 transition-colors h-full">
                <svg className="w-8 h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 lg:gap-6 flex-1">
              <a href="#" className="border border-gray-200 rounded-2xl flex items-center justify-center hover:bg-gray-50 transition-colors h-full">
                <svg className="w-6 h-6 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
              <a href="#" className="border border-gray-200 rounded-2xl flex items-center justify-center hover:bg-gray-50 transition-colors h-full">
                <svg className="w-7 h-7 lg:w-9 lg:h-9" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="border border-gray-200 rounded-2xl flex items-center justify-center hover:bg-gray-50 transition-colors h-full">
                <svg className="w-8 h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
