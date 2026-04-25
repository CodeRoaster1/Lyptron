"use client";

import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    cat: "E-COMMERCE / FASHION",
    title: "Vriddhi Vastra",
    meta: "Custom Web Design · 2024",
    link: "https://vriddhivastra.com/",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800",
  },
  {
    cat: "SAAS PLATFORM",
    title: "NexusFlow — Automation Suite",
    meta: "Design + Development · 2024",
    link: "#",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&q=80&w=800",
  },
  {
    cat: "AI INTEGRATION",
    title: "VoxAI — Conversational Agent",
    meta: "AI + Web · 2024",
    link: "#",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800",
  },
  {
    cat: "WEB DESIGN",
    title: "Stratum Digital Agency",
    meta: "Branding + Web · 2025",
    link: "#",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800",
  },
  {
    cat: "DASHBOARD",
    title: "DataForge Analytics",
    meta: "Design + Dev · 2025",
    link: "#",
    image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?auto=format&fit=crop&q=80&w=800",
  }
];

export default function Work() {
  return (
    <section id="work" className="bg-[#050508] relative overflow-hidden border-t border-[rgba(255,255,255,0.07)]">
      <div className="section-inner">
        
        {/* ── Header ── */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="flex-1">
            <div className="font-['Space_Mono'] text-[0.68rem] tracking-[0.22em] text-[#f59e0b] uppercase mb-6 flex items-center gap-2 pl-[14px] border-l-2 border-[#3b82f6] leading-none">
              <span className="text-[#3b82f6]"> // </span> PORTFOLIO
            </div>
            <h2 className="font-['Orbitron'] text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.95] tracking-tight mt-6">
              SELECTED<br />WORK
            </h2>
          </div>
          
          <div className="max-w-[340px] md:mt-20 flex-shrink-0">
            <div className="font-['Space_Mono'] text-[0.62rem] tracking-[0.22em] text-[#2a3a58] mb-3 uppercase font-bold">
              FEATURED PROJECTS
            </div>
            <p className="text-[#8a9ab8] text-sm md:text-base leading-[1.85] mb-8 font-['Rajdhani'] font-medium">
              A glimpse into the high-performance digital products and experiences we've engineered for forward-thinking brands.
            </p>
          </div>
        </div>

        {/* ── Project Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8">
          {projects.map((project, idx) => {
            const isLarge = idx < 2;
            
            return (
              <a 
                href={project.link}
                target={project.link !== "#" ? "_blank" : undefined}
                rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                key={idx} 
                className={`group relative overflow-hidden bg-[#0a0d16] transition-all duration-500 flex flex-col justify-end ${isLarge ? 'md:col-span-3 h-[420px] md:h-[500px]' : 'md:col-span-2 h-[360px] md:h-[420px]'}`}
                style={{ cursor: project.link === "#" ? "default" : "pointer" }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top Arrow Link Icon */}
                <div className="absolute top-8 right-8 z-20">
                  <div 
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-white group-hover:text-[#050508] group-hover:scale-110"
                    style={{ opacity: project.link === "#" ? 0 : 1 }}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-20 p-8 md:p-10 mt-auto transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="font-['Space_Mono'] text-[0.62rem] tracking-[0.22em] text-[#f59e0b] uppercase mb-4 font-bold flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-[#f59e0b]/50 transition-all duration-500 group-hover:w-10 group-hover:bg-[#f59e0b]"></span>
                    {project.cat}
                  </div>
                  <h3 className="font-['Orbitron'] text-2xl md:text-3xl font-black text-white mb-4 tracking-wide leading-tight drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-[#8a9ab8] text-[0.8rem] font-['Space_Mono'] uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                    {project.meta}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}