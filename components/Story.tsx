"use client";

/* ──────────────────────────────────────────────────────────────
   MEET THE TEAM  —  hover-reveal card
   Default : photo fills card, name + role visible at bottom
   Hover   : name + role slide up smoothly, revealing bio and
             tech stack fading in below them.
────────────────────────────────────────────────────────────── */

const team = [
  {
    name: "SRIVATHSA B S",
    role: "Founder, Lead Designer, AI-Dev",
    bio: "Visionary designer and AI researcher focusing on the intersection of human-centric design and machine-learning automation.",
    techIcons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", label: "Figma" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", label: "PyTorch" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", label: "Flutter" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", label: "TF" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", label: "PS" },
    ],
    image: "/sri.png",
  },
  {
    name: "ARJUN L",
    role: "Co-Founder, Lead Developer",
    bio: "Full-stack engineer building scalable architectures and intuitive user experiences. Expert in Next.js and Cloud Infrastructure.",
    techIcons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", label: "Next.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", label: "Node.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: "TS" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", label: "Docker" },
    ],
    image: "/arju.jpg",
  },

  {
    name: "SURYAKANTH KATTI",
    role: "Social Media Manager, Developer",
    bio: "Bridging the gap between technical development and digital marketing. Creative developer with a knack for growth engineering.",
    techIcons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", label: "CSS3" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", label: "HTML5" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JS" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: "Git" },
    ],
    image: "/kali.png",
  },
  {
    name: "LALITH KUMAR M R",
    role: "Junior Developer, Sales Admin",
    bio: "Operations-focused developer ensuring smooth delivery cycles and administrative excellence across all digital projects.",
    techIcons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", label: "HTML5" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", label: "CSS3" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JS" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", label: "Node.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", label: "GitHub" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", label: "MySQL" },
    ],
    image: "/lali.png",
  },
];

export default function Story() {
  return (
    <section id="story" className="bg-[#050508] relative overflow-hidden border-t border-[rgba(255,255,255,0.07)]">
      <div className="section-inner">

        {/* ── Header ── */}
        <div className="mb-32 flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="flex-1">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-[#3b82f6]" />
              <span className="font-['Space_Mono'] text-[0.65rem] tracking-[0.28em] text-[#f59e0b] uppercase font-bold">
                OUR STORY
              </span>
              <div className="w-8 h-[2px] bg-[#f59e0b]/30" />
            </div>
            <h2 className="font-['Orbitron'] text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.95] tracking-tight">
              MEET THE TEAM<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>BEHIND LYPTRON</span>
            </h2>
          </div>

          <div className="max-w-[360px] md:mt-24 flex-shrink-0">
            <div className="font-['Space_Mono'] text-[0.6rem] tracking-[0.28em] text-[#2a3a58] mb-4 uppercase font-bold">
              04 ENGINEERS
            </div>
            <p className="text-[#8a9ab8] text-base leading-[1.9] font-['Rajdhani'] font-medium">
              An elite collective of visionary designers, AI researchers, and full-stack engineers dedicated to pushing the boundaries of digital innovation.
            </p>
            <div className="mt-6 w-12 h-[1px] bg-gradient-to-r from-[#3b82f6] to-transparent" />
          </div>
        </div>

        {/* ── Team Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">
          {team.map((member, idx) => (
            <div key={idx} className="team-card group">

              {/* Photo Background */}
              <img
                src={member.image}
                alt={member.name}
                className="team-card__photo"
              />

              {/* Gradient Overlay for Readability */}
              <div className="team-card__gradient" />

              {/* Content Box */}
              <div className="team-card__content">
                {/* Header: Name and Role (Always visible, slides up on hover) */}
                <div className="team-card__header">
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                </div>

                {/* Details: Bio and Tech Stack (Hidden by default, expands on hover) */}
                <div className="team-card__details">
                  <div className="team-card__details-inner">
                    <p className="team-card__bio">{member.bio}</p>

                    <div className="w-full h-[1px] bg-[rgba(255,255,255,0.1)] my-4" />

                    <div className="team-card__tech-label">// TECH STACK</div>
                    <div className="team-card__tech-icons">
                      {member.techIcons.map((icon, ti) => (
                        <div key={ti} className="team-card__tech-icon-wrap" title={icon.label}>
                          <img
                            src={icon.src}
                            alt={icon.label}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-20" />
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .team-card {
          position: relative;
          width: 100%;
          height: clamp(450px, 70vh, 720px);

          overflow: hidden;
          background: #0a0d16;
          border: 1px solid rgba(255, 255, 255, 0.05);
          cursor: pointer;
        }

        /* ── Photo ── */
        .team-card__photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1), filter 0.7s ease;
          filter: brightness(0.9) contrast(1.1);
          z-index: 0;
        }

        .team-card:hover .team-card__photo {
          transform: scale(1.05);
          filter: brightness(0.25) contrast(1.2);
        }

        /* ── Gradient Overlay ── */
        .team-card__gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(5, 5, 8, 1) 0%, rgba(5, 5, 8, 0.4) 50%, transparent 100%);
          z-index: 1;
          transition: opacity 0.5s ease;
          opacity: 0.85;
        }

        .team-card:hover .team-card__gradient {
          opacity: 1;
          background: linear-gradient(to top, rgba(5, 5, 8, 0.95) 0%, rgba(5, 5, 8, 0.8) 100%);
        }

        /* ── Content Container ── */
        .team-card__overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 15, 30, 0.92); /* richer dark overlay */
          backdrop-filter: blur(3px);
          z-index: 3;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .team-card:hover .team-card__overlay {
          opacity: 1;
        }

        .team-card__content {
          position: absolute;
          inset: 0;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem 1.8rem;
          text-align: left;
        }

        /* ── Header (Name & Role) ── */
        .team-card__header {
          transform: translateY(0);
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .team-card__name {
          font-family: 'Orbitron', monospace;
          font-size: clamp(1rem, 1.6vw, 1.3rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.04em;
          margin-bottom: 0.4rem;
          line-height: 1.2;
          text-align: left;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
          word-break: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }

        .team-card__role {
          font-family: 'Space Mono', monospace;
          font-size: clamp(0.6rem, 0.85vw, 0.7rem);
          color: #f59e0b;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 700;
          text-align: left;
          line-height: 1.5;
        }

        /* ── Details (Bio & Tech Stack) ── */
        /* Using CSS Grid animation to smoothly expand height from 0 to auto */
        .team-card__details {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .team-card:hover .team-card__details {
          grid-template-rows: 1fr;
        }

        .team-card__details-inner {
          overflow: hidden;
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          padding-top: 0;
        }

        .team-card:hover .team-card__details-inner {
          opacity: 1;
          transform: translateY(0);
          padding-top: 1.2rem;
          transition: opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s, padding-top 0.4s ease;
        }
        .team-card__bio {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: #c8d6f0;
          line-height: 1.6;
          margin-bottom: 0;
        }

        .team-card__tech-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          color: #60a5fa;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .team-card__tech-icons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .team-card__tech-icon-wrap {
          width: 28px;
          height: 28px;
          filter: none;
          opacity: 1;
          transition: transform 0.3s ease;
        }

        .team-card__tech-icon-wrap:hover {
          transform: scale(1.15);
        }
      `}</style>
    </section>
  );
}
