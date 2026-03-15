import React, { useState } from 'react';
import { Heart, ArrowDown, MapPin, Menu, X } from 'lucide-react';

export default function App() {
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ['Home', 'Destinations', 'Travel Guide', 'Enroll', 'Packages', 'About', 'Contact Us'];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a1f18] text-[#f4f1eb] font-sans selection:bg-[#f4f1eb] selection:text-[#0a1f18]">
      {/* Tilted Background Grid */}
      <div className="absolute top-1/2 left-1/2 w-[200vw] h-[200vh] -translate-x-1/2 -translate-y-1/2 -rotate-[20deg] opacity-70 pointer-events-none">
        <div className="grid grid-cols-4 grid-rows-4 gap-4 md:gap-6 w-full h-full">
          {/* Row 1 */}
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=1000&auto=format&fit=crop)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1000&auto=format&fit=crop)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop)' }}></div>
          {/* Row 2 */}
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1000&auto=format&fit=crop)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000&auto=format&fit=crop)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop)' }}></div>
          {/* Row 3 */}
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1000&auto=format&fit=crop)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506744626753-dba7d4154a14?q=80&w=1000&auto=format&fit=crop)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1000&auto=format&fit=crop)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1000&auto=format&fit=crop)' }}></div>
          {/* Row 4 */}
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1000&auto=format&fit=crop)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1000&auto=format&fit=crop)' }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop)' }}></div>
        </div>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#0a1f18]/50 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#3a5a40]/30 via-[#1a3a2a]/40 to-[#0a1f18]/60 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-50 pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
        {/* Left: Logo */}
        <div className="flex items-center gap-3 z-30">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide">SAFARI</h1>
          <MapPin className="w-5 h-5 md:w-7 md:h-7 opacity-80" strokeWidth={1} />
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((item) => (
            <a key={item} href="#" className="text-[10px] xl:text-[11px] tracking-[0.15em] uppercase hover:opacity-70 transition-opacity whitespace-nowrap mt-0.5">
              {item}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-6 md:gap-8 z-30">
          <button className="hover:opacity-70 transition-opacity">
            <Heart className="w-5 h-5" strokeWidth={1} />
          </button>
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden hover:opacity-70 transition-opacity"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 z-10 bg-[#0a1f18] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((item) => (
            <a 
              key={item} 
              href="#" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col justify-between h-[calc(100vh-100px)] px-6 md:px-12 pb-8 md:pb-12">
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-lg md:text-[22px] max-w-md font-light leading-[1.4] tracking-wide mt-20 md:mt-32">
            Exclusive residence with a rich<br className="hidden md:block" />
            wellness infrastructure next to Nature<br className="hidden md:block" />
            Park
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-8 w-full">
          <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-current flex items-center justify-center hover:bg-white/10 transition-colors shrink-0">
            <ArrowDown className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1} />
          </button>

          <h2 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[11rem] leading-[0.9] text-right tracking-tight">
            Splendor<br />of Renewal
          </h2>
        </div>
      </main>

      {/* Cookie Banner */}
      {!cookieAccepted && (
        <div className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#f0eee4] text-[#1a1a1a] rounded-full px-6 md:px-8 py-3 flex items-center gap-6 md:gap-8 shadow-2xl w-[90%] md:w-auto justify-between md:justify-start">
          <span className="text-[9px] md:text-[10px] tracking-[0.2em] font-medium leading-[1.4]">THIS SITE COLLECTS<br/>COOKIES.</span>
          <button 
            onClick={() => setCookieAccepted(true)}
            className="border border-[#1a1a1a] rounded-full px-5 md:px-6 py-2 text-[9px] md:text-[10px] tracking-[0.2em] font-medium hover:bg-[#1a1a1a] hover:text-[#f0eee4] transition-colors shrink-0"
          >
            ACCEPT
          </button>
        </div>
      )}
    </div>
  );
}
