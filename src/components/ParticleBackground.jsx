import React from 'react';

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-[#050816] overflow-hidden">
      {/* 1. Seamless Base Gradient Fill */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#060c23] to-[#08102d]" />

      {/* 2. Symmetrical Soft Slate-Blue & Silver Ambient Glows (Vercel/Linear premium style) */}
      {/* Left Edge Glow (Soft silver highlight) */}
      <div 
        className="absolute top-[15%] left-[-20%] w-[70vw] h-[70vw] max-w-[900px] rounded-full blur-[160px] pointer-events-none" 
        style={{ background: 'radial-gradient(circle, rgba(186, 210, 255, 0.035) 0%, transparent 80%)' }}
      />
      
      {/* Right Edge Glow (Soft silver highlight) */}
      <div 
        className="absolute bottom-[15%] right-[-20%] w-[70vw] h-[70vw] max-w-[900px] rounded-full blur-[160px] pointer-events-none" 
        style={{ background: 'radial-gradient(circle, rgba(186, 210, 255, 0.035) 0%, transparent 80%)' }}
      />

      {/* Top Center Ambient Glow (Soft White/Slate Ambient) */}
      <div 
        className="absolute top-[-400px] left-1/2 -translate-x-1/2 w-[95vw] h-[700px] max-w-[1300px] rounded-full blur-[180px] pointer-events-none" 
        style={{ background: 'radial-gradient(circle, rgba(200, 220, 255, 0.04) 0%, transparent 75%)' }}
      />

      {/* Center Subtle Deep Lighting for readability */}
      <div 
        className="absolute top-[35%] left-[25%] w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none" 
        style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.01) 0%, transparent 80%)' }}
      />
      <div 
        className="absolute top-[65%] right-[25%] w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none" 
        style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.01) 0%, transparent 80%)' }}
      />

      {/* 3. SVG Pattern Definitions */}
      <svg className="absolute w-0 h-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="batikSilverEngraved" width="220" height="320" patternUnits="userSpaceOnUse">
            {/* Elegant scrolling vines (Javanese Lung-lungan scrollwork) in silver-gray (Ultra faint 2%) */}
            <path d="M -10,0 C 30,40 100,20 110,60 C 120,100 80,140 110,180 C 130,220 90,260 110,320" stroke="rgba(226, 232, 240, 0.02)" strokeWidth="0.9" fill="none" />
            <path d="M 110,0 C 130,40 200,20 210,60 C 220,100 180,140 210,180 C 230,220 190,260 210,320" stroke="rgba(226, 232, 240, 0.02)" strokeWidth="0.9" fill="none" />

            {/* Stylized Catfish (Lele) representing Lamongan identity (Fine 5% stroke) */}
            <g transform="translate(25, 40) scale(0.9)" stroke="rgba(241, 245, 249, 0.05)" strokeWidth="0.9" fill="none">
              {/* Body & Head */}
              <path d="M 40,40 C 65,30 95,35 110,50 C 95,65 65,60 40,50 Z" />
              {/* Whiskers (elegant Javanese spiral scrolls) */}
              <path d="M 105,45 C 118,36 130,37 134,42" />
              <path d="M 105,45 C 112,40 120,44 125,48" />
              <path d="M 105,53 C 118,60 130,59 134,54" />
              <path d="M 105,53 C 112,58 120,54 125,50" />
              {/* Gills/fins details */}
              <path d="M 75,32 C 80,20 90,20 92,33" />
              <path d="M 75,57 C 80,68 90,68 92,55" />
              {/* Tail fin (batik wavy lines) */}
              <path d="M 40,40 C 30,35 20,40 10,32 C 18,45 25,48 40,50" />
              <path d="M 22,37 Q 15,39 8,36" strokeWidth="0.7" />
            </g>

            {/* Stylized Milkfish (Bandeng) representing Lamongan identity (Fine 5% stroke) */}
            <g transform="translate(20, 160) scale(0.9)" stroke="rgba(241, 245, 249, 0.05)" strokeWidth="0.9" fill="none">
              {/* Sleek Body */}
              <path d="M 60,80 C 85,60 115,65 135,80 C 115,95 85,90 60,80 Z" />
              {/* Forked Tail (wavy, sharp, elegant) */}
              <path d="M 60,80 C 45,70 30,60 20,65 C 32,80 38,85 60,80" />
              <path d="M 60,80 C 45,90 30,100 20,95 C 32,80 38,75 60,80" />
              {/* Dorsal Fin */}
              <path d="M 95,63 L 105,50 L 115,64" />
              {/* Scale detailing */}
              <path d="M 80,72 Q 85,76 90,72" stroke="rgba(241, 245, 249, 0.02)" strokeWidth="0.7" />
              <path d="M 90,78 Q 95,82 100,78" stroke="rgba(241, 245, 249, 0.02)" strokeWidth="0.7" />
              <path d="M 100,72 Q 105,76 110,72" stroke="rgba(241, 245, 249, 0.02)" strokeWidth="0.7" />
            </g>

            {/* Floral connection elements (Ultra faint 2.5% stroke) */}
            <path d="M 135,50 C 160,90 160,130 110,180" stroke="rgba(241, 245, 249, 0.025)" strokeWidth="0.9" fill="none" />
            <path d="M 40,50 C 10,90 10,130 60,180" stroke="rgba(241, 245, 249, 0.025)" strokeWidth="0.9" fill="none" />
            <path d="M 135,180 C 160,220 160,260 110,310" stroke="rgba(241, 245, 249, 0.025)" strokeWidth="0.9" fill="none" />
            
            {/* Traditional Megamendung-style clouds (Ultra faint 1.5%) */}
            <path d="M 10,130 Q 25,120 40,130 T 70,130" stroke="rgba(241, 245, 249, 0.015)" strokeWidth="0.8" fill="none" />
            <path d="M 150,290 Q 165,280 180,290 T 210,290" stroke="rgba(241, 245, 249, 0.015)" strokeWidth="0.8" fill="none" />
          </pattern>
        </defs>
      </svg>

      {/* 4. Left Symmetrical Vertical Panel (Desktop/Tablet) */}
      {/* Uses a CSS mask-image linear gradient to fade out perfectly to the right */}
      <div 
        className="fixed left-0 top-0 bottom-0 w-[26vw] md:w-[22vw] lg:w-[26vw] max-w-[340px] z-[1] pointer-events-none hidden md:block"
        style={{
          maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)'
        }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="url(#batikSilverEngraved)" />
        </svg>
      </div>

      {/* 5. Right Symmetrical Vertical Panel - Horizontally Mirrored (Desktop/Tablet) */}
      {/* Uses scaleX(-1) to mirror both geometry and the linear-gradient fade perfectly */}
      <div 
        className="fixed right-0 top-0 bottom-0 w-[26vw] md:w-[22vw] lg:w-[26vw] max-w-[340px] z-[1] pointer-events-none hidden md:block"
        style={{ 
          transform: 'scaleX(-1)',
          maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)'
        }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="url(#batikSilverEngraved)" />
        </svg>
      </div>

      {/* 6. Clean Mobile Background (Mobile Only) */}
      {/* No distracting top/bottom bands on mobile screens to preserve maximum visual breathing room and premium look. */}
      {/* On mobile, we only display the clean, highly-blurred glows on top of the deep navy base. */}

      {/* Bottom overlay shadow grid fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050816] to-transparent pointer-events-none" />
    </div>
  );
}
