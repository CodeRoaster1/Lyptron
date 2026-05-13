"use client";

const team = [
  {
    name: "SRIVATHSA B S",
    role: "FOUNDER & TECH LEAD",
    roleColor: "#f59e0b",
    bio: "Visionary designer and AI researcher bridging human-centric design with machine-learning automation.",
    tags: ["System Arch", "AI Dev", "Cloud"],
    image: "/sri.png",
  },
  {
    name: "ARJUN L",
    role: "LEAD DEVELOPER",
    roleColor: "#60a5fa",
    bio: "Full-stack engineer building scalable architectures and intuitive user experiences.",
    tags: ["React Native", "Mobile UI", "API Design"],
    image: "/arju.jpg",
  },
  {
    name: "SURYAKANTH KATTI",
    role: "GROWTH & STRATEGY",
    roleColor: "#34d399",
    bio: "Bridging technical development and digital marketing with creative growth engineering.",
    tags: ["Marketing", "SEO", "Analytics"],
    image: "/kali.png",
  },
  {
    name: "LALITH KUMAR M R",
    role: "FRONTEND ENGINEER",
    roleColor: "#f59e0b",
    bio: "Operations-focused developer ensuring smooth delivery and administrative excellence.",
    tags: ["Vue.js", "Tailwind", "Animation"],
    image: "/lali.png",
  },
];

export default function Story() {
  return (
    <section id="story" className="bg-[#050508] relative overflow-hidden border-t border-[rgba(255,255,255,0.07)]">

      {/* ── Header ── */}
      <div className="section-inner pb-0">
        <div className="reveal mb-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="font-['Space_Mono'] text-[0.65rem] tracking-[0.28em] text-[#f59e0b] uppercase font-bold">
              // OUR STORY
            </span>
          </div>
          <h2 className="font-['Orbitron'] text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.95] tracking-tight mb-6">
            THE MINDS<br />BEHIND LYPTRON
          </h2>
          <p className="text-[#8a9ab8] text-base md:text-lg leading-[1.85] font-['Rajdhani'] font-medium max-w-[560px]">
            We are a collective of engineers, designers, and strategists driven by a singular
            mission: to engineer the future of digital experiences.
          </p>
        </div>

        {/* ── Manifesto block ── */}
        <div className="reveal manifesto-block mb-0">
          <p className="manifesto-text">
            Founded on the belief that conventional digital solutions are no longer enough, Lyptron was
            built to bridge the gap between high-end aesthetics and robust engineering. Our journey
            started as a boutique studio and evolved into a full-scale digital agency serving forward-thinking enterprises.
          </p>
          <p className="manifesto-text mt-6">
            We don't just write code or push pixels; we architect platforms that scale, designs that
            captivate, and systems that automate. We are your technical co-founders, your creative
            directors, and your growth partners.
          </p>
        </div>
      </div>

      {/* ── Team Carousel (auto-scrolling marquee) ── */}
      <div className="reveal team-carousel-wrap">
        <div className="team-carousel-track">
          {/* Duplicate set for seamless infinite loop */}
          {[...team, ...team, ...team].map((member, idx) => (
            <div key={idx} className="team-card group">
              {/* Photo */}
              <img
                src={member.image}
                alt={member.name}
                className="team-card__photo"
              />
              {/* Gradient overlay */}
              <div className="team-card__gradient" />
              {/* Active border glow */}
              <div className="team-card__border" />

              {/* Content */}
              <div className="team-card__content">
                <div className="team-card__role" style={{ color: member.roleColor }}>
                  {member.role}
                </div>
                <h3 className="team-card__name">{member.name}</h3>
                <div className="team-card__tags">
                  {member.tags.map((tag, ti) => (
                    <span key={ti} className="team-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* ── Manifesto block ── */
        .manifesto-block {
          background: rgba(15, 21, 34, 0.7);
          border: 1px solid rgba(59, 130, 246, 0.1);
          border-radius: 12px;
          padding: 3rem 3.5rem;
          max-width: 860px;
          width: 100%;
          margin: 0 auto;
          backdrop-filter: blur(12px);
        }

        .manifesto-text {
          font-family: 'Space Mono', monospace;
          font-size: 0.88rem;
          color: #8a9ab8;
          line-height: 2;
          letter-spacing: 0.02em;
        }

        /* ── Carousel wrapper ── */
        .team-carousel-wrap {
          width: 100%;
          overflow: hidden;
          padding: 80px 0 100px;
          position: relative;
        }

        /* Fade edges */
        .team-carousel-wrap::before,
        .team-carousel-wrap::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 10;
          pointer-events: none;
        }
        .team-carousel-wrap::before {
          left: 0;
          background: linear-gradient(to right, #050508, transparent);
        }
        .team-carousel-wrap::after {
          right: 0;
          background: linear-gradient(to left, #050508, transparent);
        }

        .team-carousel-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: team-scroll 32s linear infinite;
        }

        .team-carousel-wrap:hover .team-carousel-track {
          animation-play-state: paused;
        }

        @keyframes team-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-320px * 4)); }
        }

        /* ── Individual Card ── */
        .team-card {
          position: relative;
          flex-shrink: 0;
          width: 300px;
          height: 460px;
          border-radius: 16px;
          overflow: hidden;
          background: #0a0d16;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .team-card:hover {
          transform: translateY(-8px);
        }

        /* Photo */
        .team-card__photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: grayscale(0.7) brightness(0.85);
          transition: filter 0.5s ease, transform 0.6s ease;
        }

        .team-card:hover .team-card__photo {
          filter: grayscale(0) brightness(0.9);
          transform: scale(1.04);
        }

        /* Gradient overlay */
        .team-card__gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(5, 5, 8, 0.95) 0%,
            rgba(5, 5, 8, 0.5) 45%,
            transparent 100%
          );
          z-index: 1;
        }

        /* Border glow — gold on hover */
        .team-card__border {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          border: 1.5px solid rgba(255, 255, 255, 0.06);
          transition: border-color 0.4s ease;
          z-index: 3;
          pointer-events: none;
        }

        .team-card:hover .team-card__border {
          border-color: rgba(245, 158, 11, 0.6);
          box-shadow: 0 0 28px rgba(245, 158, 11, 0.15) inset;
        }

        /* Content box */
        .team-card__content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 2;
          padding: 1.6rem 1.5rem;
        }

        .team-card__role {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 0.4rem;
        }

        .team-card__name {
          font-family: 'Orbitron', monospace;
          font-size: clamp(0.9rem, 1.4vw, 1.1rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.04em;
          line-height: 1.25;
          margin-bottom: 1rem;
          word-break: break-word;
        }

        /* Tech tags */
        .team-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .team-card__tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.56rem;
          letter-spacing: 0.1em;
          color: #8a9ab8;
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 3px 10px;
          border-radius: 3px;
          transition: border-color 0.3s, color 0.3s;
        }

        .team-card:hover .team-card__tag {
          border-color: rgba(245, 158, 11, 0.3);
          color: #c8d6f0;
        }

        @media (max-width: 640px) {
          .team-card {
            width: 260px;
            height: 400px;
          }
          .manifesto-block {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
