import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const cards = [
  {
    id: 1,
    title: "The Great Migration",
    subtitle: "Serengeti Plains",
    src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Gentle Giants",
    subtitle: "Amboseli National Park",
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Apex Predators",
    subtitle: "Maasai Mara",
    src: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Ancient Rhinos",
    subtitle: "Ngorongoro Crater",
    src: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=1000&auto=format&fit=crop",
  }
];

export default function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative z-10 bg-[#0A110D] pt-[15vh]">
      
      {/* Inverted Corners to curve the first section */}
      <svg width="40" height="40" className="absolute top-[-40px] left-0 md:hidden pointer-events-none fill-[#0A110D]">
        <path d="M0,40 L0,0 A40,40 0 0,0 40,40 Z" />
      </svg>
      <svg width="40" height="40" className="absolute top-[-40px] right-0 md:hidden pointer-events-none fill-[#0A110D]">
        <path d="M40,40 L40,0 A40,40 0 0,1 0,40 Z" />
      </svg>
      <svg width="60" height="60" className="absolute top-[-60px] left-0 hidden md:block pointer-events-none fill-[#0A110D]">
        <path d="M0,60 L0,0 A60,60 0 0,0 60,60 Z" />
      </svg>
      <svg width="60" height="60" className="absolute top-[-60px] right-0 hidden md:block pointer-events-none fill-[#0A110D]">
        <path d="M60,60 L60,0 A60,60 0 0,1 0,60 Z" />
      </svg>

      {/* Section Header */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24 flex flex-col items-center text-center">
        <span className="text-xs md:text-sm font-mono tracking-[0.3em] text-[#E8E5DF]/60 uppercase mb-4">
          The Collection
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#E8E5DF] leading-tight mb-8">
          Untamed Wilderness
        </h2>
        <div className="w-32 md:w-48 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60"></div>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {cards.map((card, index) => (
          <Card 
            key={card.id} 
            card={card} 
            index={index} 
            total={cards.length}
          />
        ))}
      </div>
    </div>
  );
}

function Card({ card, index, total }: { card: any, index: number, total: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"]
  });

  const isLast = index === total - 1;

  // Standard stacking animations for non-last cards
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const stickyTop = `calc(15vh + ${index * 40}px)`;

  // Expansion animations for the last card
  const marginTop = useTransform(scrollYProgress, [0, 0.4], [stickyTop, "0vh"]);
  const height = useTransform(scrollYProgress, [0, 0.4], ["70vh", "100vh"]);
  const width = useTransform(scrollYProgress, [0, 0.4], ["calc(100% - 2rem)", "100%"]);
  const maxWidth = useTransform(scrollYProgress, [0, 0.4], ["1024px", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["24px", "0px"]);
  
  // Content crossfade for the last card
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const newContentOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const newContentY = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);

  const cardContent = (
    <motion.div 
      style={isLast ? { 
        marginTop, 
        height, 
        width, 
        maxWidth, 
        borderRadius 
      } : { 
        scale, 
        opacity,
        width: 'calc(100% - 2rem)',
        maxWidth: '1024px',
        height: '70vh',
        borderRadius: '24px'
      }}
      className="relative overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border border-white/10 group origin-top bg-[#15241B] mx-auto"
    >
      <img 
        src={card.src} 
        alt={card.title} 
        className={`w-full h-full object-cover transition-transform duration-[2s] ease-out ${isLast ? '' : 'group-hover:scale-105'}`}
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-[#0A110D]/90 via-[#0A110D]/20 to-transparent ${isLast ? 'opacity-60' : 'opacity-80 group-hover:opacity-100'} transition-opacity duration-700`} />
      
      {/* Original Content */}
      <motion.div 
        style={{ opacity: isLast ? contentOpacity : 1 }}
        className={`absolute bottom-0 left-0 w-full p-6 md:p-12 flex flex-col gap-2 md:gap-4 transition-transform duration-700 ${isLast ? '' : 'transform translate-y-4 group-hover:translate-y-0'}`}
      >
        <div className="flex items-center gap-4">
          <span className="text-xs md:text-sm font-mono tracking-[0.2em] text-[#E8E5DF] uppercase bg-white/10 px-3 py-1 rounded-full backdrop-blur-md border border-white/20">
            0{index + 1}
          </span>
          <span className="text-xs md:text-sm font-mono tracking-[0.2em] text-[#E8E5DF]/80 uppercase drop-shadow-md">
            {card.subtitle}
          </span>
        </div>
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white drop-shadow-xl leading-tight">
          {card.title}
        </h3>
      </motion.div>

      {/* New Content (Only on last card) */}
      {isLast && (
        <motion.div 
          style={{ opacity: newContentOpacity, y: newContentY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-8 bg-black/30 backdrop-blur-[2px]"
        >
          <span className="text-[#D4AF37] text-xs md:text-sm font-mono tracking-[0.3em] uppercase mb-4 md:mb-6">
            Experience the Wild
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif text-white leading-tight mb-6 md:mb-8 max-w-4xl drop-shadow-2xl">
            Your Journey Begins Here
          </h2>
          <p className="text-base md:text-xl text-white/90 max-w-2xl mb-8 md:mb-12 font-light drop-shadow-md">
            Immerse yourself in the untamed beauty of the African savanna. Witness the circle of life unfold before your eyes in an unforgettable adventure.
          </p>
          <button className="px-6 md:px-8 py-3 md:py-4 bg-[#D4AF37] text-black font-medium tracking-widest uppercase text-xs md:text-sm hover:bg-white transition-colors duration-300 rounded-sm">
            Book Expedition
          </button>
        </motion.div>
      )}

    </motion.div>
  );

  if (!isLast) {
    return (
      <div 
        ref={cardRef} 
        className="sticky flex items-start justify-center w-full"
        style={{ 
          top: stickyTop, 
          height: '70vh',
          marginBottom: '20vh'
        }}
      >
        {cardContent}
      </div>
    );
  }

  return (
    <div 
      ref={cardRef} 
      className="relative w-full h-[300vh]"
    >
      <div 
        className="sticky flex items-start justify-center w-full"
        style={{ 
          top: 0, 
          height: '100vh',
        }}
      >
        {cardContent}
      </div>
    </div>
  );
}
