"use client";

import { ArrowRight, Globe, Layers, Monitor, Bot, Smartphone, Activity } from "lucide-react";

const servicesList = [
  {
    num: "01",
    accent: "blue",
    title: "Web Development",
    featured: true,
    desc: "Blazing-fast, SEO-optimized websites and web apps built on cutting-edge frameworks. From marketing sites to complex enterprise portals — we ship products that perform.",
    icon: <Globe className="w-6 h-6" />,
    tags: ["Next.js", "React", "Node.js", "TypeScript"],
  },
  {
    num: "02",
    accent: "gold",
    title: "UI / UX Design",
    desc: "Design systems and interfaces that convert. Pixel-perfect, user-centric designs with motion and micro-interactions that create lasting impressions and drive results.",
    icon: <Layers className="w-6 h-6" />,
    tags: ["Figma", "Framer", "Motion", "Branding"],
  },
  {
    num: "03",
    accent: "cyan",
    title: "SAAS Development",
    desc: "Full-stack SAAS platforms with auth, billing, dashboards, and multi-tenancy — architected for scale from day one. Handle complexity, focus on growth.",
    icon: <Monitor className="w-6 h-6" />,
    tags: ["Stripe", "Supabase", "Prisma", "Docker"],
  },
  {
    num: "04",
    accent: "violet",
    title: "AI Automation",
    desc: "Intelligent workflows, chatbots, and AI integrations that automate operations and amplify your team's output 10x. From LLM pipelines to autonomous agents.",
    icon: <Bot className="w-6 h-6" />,
    tags: ["LLMs", "OpenAI", "n8n", "LangChain"],
  },
  {
    num: "05",
    accent: "emerald",
    title: "Mobile Applications",
    desc: "Cross-platform mobile apps for iOS and Android with native feel, offline capabilities, and seamless backend integration. Shipped to both app stores.",
    icon: <Smartphone className="w-6 h-6" />,
    tags: ["React Native", "Expo", "Flutter"],
  },
  {
    num: "06",
    accent: "rose",
    title: "Cloud & DevOps",
    desc: "Scalable cloud infrastructure, CI/CD pipelines, monitoring, and performance optimisation for enterprise-grade reliability and zero-downtime deployments.",
    icon: <Activity className="w-6 h-6" />,
    tags: ["AWS", "Vercel", "GitHub Actions", "Terraform"],
  },
];

export default function Services() {
  const marqueeItems = [
    "Web Development", "UI/UX Design", "SAAS Development",
    "AI Automation", "Mobile Applications", "Cloud & DevOps",
  ];

  return (
    <section id="services" className="relative z-10">

      {/* ── Intro header ── */}
      <div className="svc-intro reveal">
        <div className="svc-intro-left">
          <div className="section-tag">Our Expertise</div>
          <h2 className="section-title">WHAT WE<br />BUILD FOR<br />YOU</h2>
        </div>
        <div className="svc-intro-right">
          <span className="svc-intro-count">06 CAPABILITIES</span>
          <a href="#contact" className="services-cta-link" style={{ textDecoration: "none" }}>
            Discuss your project <span className="services-cta-arrow">→</span>
          </a>
        </div>
      </div>

      {/* ── Scrolling marquee ── */}
      <div className="svc-marquee-wrap">
        <div className="svc-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="svc-marquee-item">
              <span className="svc-marquee-dot" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── 3×2 Tile Grid ── */}
      <div className="reveal svc-tile-grid">
        {servicesList.map((svc, idx) => (
          <div key={idx} className="svc-tile" data-accent={svc.accent}>

            {/* Number + featured badge */}
            <div className="svc-tile-num">
              <span>{svc.num}</span>
              {svc.featured && (
                <span className="svc-tile-featured">
                  <span className="svc-tile-featured-star">★</span> FEATURED
                </span>
              )}
            </div>

            {/* Icon */}
            <div className="svc-tile-icon">{svc.icon}</div>

            {/* Title */}
            <h3 className="svc-tile-title">{svc.title}</h3>

            {/* Description */}
            <p className="svc-tile-desc">{svc.desc}</p>

            {/* Divider */}
            <div className="svc-tile-divider" />

            {/* Tech tags */}
            <div className="svc-tile-tags">
              {svc.tags.map((tag, ti) => (
                <span key={ti} className="svc-tile-tag">{tag}</span>
              ))}
            </div>

            {/* Learn more link */}
            <a href="#contact" className="svc-tile-arrow" style={{ textDecoration: "none" }}>
              LEARN MORE <span>→</span>
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* ── Section ── */
        #services {
          background: var(--bg);
          padding: 0;
        }

        /* ── Intro header ── */
        .svc-intro {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 80px 6% 50px;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          gap: 3rem;
          border-bottom: 1px solid var(--border2);
        }
        .svc-intro-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.8rem;
          padding-bottom: 6px;
          flex-shrink: 0;
        }
        .svc-intro-count {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: var(--text3);
          letter-spacing: 0.18em;
        }
        .services-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Mono', monospace;
          font-size: 0.68rem;
          color: var(--blue2);
          letter-spacing: 0.1em;
          border-bottom: 1px solid var(--border);
          padding-bottom: 4px;
          transition: color 0.3s, border-color 0.3s;
          white-space: nowrap;
        }
        .services-cta-link:hover {
          color: var(--gold);
          border-color: var(--gold);
        }
        .services-cta-arrow {
          transition: transform 0.3s;
          display: inline-block;
        }
        .services-cta-link:hover .services-cta-arrow {
          transform: translateX(5px);
        }

        /* ── Marquee ── */
        .svc-marquee-wrap {
          width: 100%;
          overflow: hidden;
          border-bottom: 1px solid var(--border2);
          padding: 1.4rem 0;
          background: var(--surface);
        }
        .svc-marquee-track {
          display: flex;
          gap: 4rem;
          width: max-content;
          animation: marquee-svc 22s linear infinite;
        }
        .svc-marquee-item {
          display: flex;
          align-items: center;
          gap: 14px;
          white-space: nowrap;
          font-family: 'Orbitron', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text3);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .svc-marquee-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }
        @keyframes marquee-svc {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* ── Tile Grid ── */
        .svc-tile-grid {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 40px 6% 60px;
          background: transparent;
        }

        /* ── Service Tiles ── */
        .svc-tile {
          background: linear-gradient(145deg, var(--surface) 0%, var(--bg) 100%);
          border: 1px solid var(--border2);
          border-radius: 2px;
          padding: 2.4rem 2.2rem 2rem;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease, background 0.35s ease;
          min-height: 330px;
        }

        /* Top accent line — grows on hover */
        .svc-tile::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 0; height: 2px;
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 0 2px 0 0;
        }
        .svc-tile:hover::before { width: 100%; }
        .svc-tile[data-accent="blue"]::before    { background: linear-gradient(90deg, #3b82f6, #60a5fa); }
        .svc-tile[data-accent="gold"]::before    { background: linear-gradient(90deg, #f59e0b, #fbbf24); }
        .svc-tile[data-accent="cyan"]::before    { background: linear-gradient(90deg, #06b6d4, #67e8f9); }
        .svc-tile[data-accent="violet"]::before  { background: linear-gradient(90deg, #8b5cf6, #a78bfa); }
        .svc-tile[data-accent="emerald"]::before { background: linear-gradient(90deg, #10b981, #34d399); }
        .svc-tile[data-accent="rose"]::before    { background: linear-gradient(90deg, #f43f5e, #fb7185); }

        /* Bottom-right glow blob */
        .svc-tile::after {
          content: '';
          position: absolute;
          bottom: -70px; right: -70px;
          width: 200px; height: 200px;
          border-radius: 50%;
          opacity: 0;
          filter: blur(60px);
          transition: opacity 0.55s ease;
          pointer-events: none;
        }
        .svc-tile[data-accent="blue"]::after    { background: rgba(59,130,246,0.22); }
        .svc-tile[data-accent="gold"]::after    { background: rgba(245,158,11,0.20); }
        .svc-tile[data-accent="cyan"]::after    { background: rgba(6,182,212,0.20); }
        .svc-tile[data-accent="violet"]::after  { background: rgba(139,92,246,0.20); }
        .svc-tile[data-accent="emerald"]::after { background: rgba(16,185,129,0.20); }
        .svc-tile[data-accent="rose"]::after    { background: rgba(244,63,94,0.20); }
        .svc-tile:hover::after { opacity: 1; }

        .svc-tile:hover {
          transform: translateY(-4px);
          border-color: var(--border);
          background: linear-gradient(145deg, var(--surface2) 0%, var(--surface) 100%);
        }
        .svc-tile[data-accent="blue"]:hover    { box-shadow: 0 16px 48px rgba(59,130,246,0.15),  0 0 0 1px rgba(59,130,246,0.2); }
        .svc-tile[data-accent="gold"]:hover    { box-shadow: 0 16px 48px rgba(245,158,11,0.15),  0 0 0 1px rgba(245,158,11,0.2); }
        .svc-tile[data-accent="cyan"]:hover    { box-shadow: 0 16px 48px rgba(6,182,212,0.15),   0 0 0 1px rgba(6,182,212,0.2); }
        .svc-tile[data-accent="violet"]:hover  { box-shadow: 0 16px 48px rgba(139,92,246,0.15),  0 0 0 1px rgba(139,92,246,0.2); }
        .svc-tile[data-accent="emerald"]:hover { box-shadow: 0 16px 48px rgba(16,185,129,0.15),  0 0 0 1px rgba(16,185,129,0.2); }
        .svc-tile[data-accent="rose"]:hover    { box-shadow: 0 16px 48px rgba(244,63,94,0.15),   0 0 0 1px rgba(244,63,94,0.2); }

        /* ── Card number ── */
        .svc-tile-num {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          color: var(--text3);
          letter-spacing: 0.18em;
          margin-bottom: 1.6rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }
        .svc-tile-featured {
          font-family: 'Space Mono', monospace;
          font-size: 0.52rem;
          letter-spacing: 0.12em;
          color: #f59e0b;
          border: 1px solid rgba(245,158,11,0.35);
          padding: 2px 8px;
          border-radius: 2px;
        }
        .svc-tile-featured-star { margin-right: 3px; }

        /* ── Icon box ── */
        .svc-tile-icon {
          width: 52px; height: 52px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.4rem;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }
        .svc-tile-icon svg { width: 26px; height: 26px; }
        .svc-tile[data-accent="blue"]    .svc-tile-icon { background: rgba(59,130,246,0.12);  border: 1px solid rgba(59,130,246,0.3); }
        .svc-tile[data-accent="gold"]    .svc-tile-icon { background: rgba(245,158,11,0.10);  border: 1px solid rgba(245,158,11,0.3); }
        .svc-tile[data-accent="cyan"]    .svc-tile-icon { background: rgba(6,182,212,0.10);   border: 1px solid rgba(6,182,212,0.3); }
        .svc-tile[data-accent="violet"]  .svc-tile-icon { background: rgba(139,92,246,0.10);  border: 1px solid rgba(139,92,246,0.3); }
        .svc-tile[data-accent="emerald"] .svc-tile-icon { background: rgba(16,185,129,0.10);  border: 1px solid rgba(16,185,129,0.3); }
        .svc-tile[data-accent="rose"]    .svc-tile-icon { background: rgba(244,63,94,0.10);   border: 1px solid rgba(244,63,94,0.3); }
        .svc-tile[data-accent="blue"]    .svc-tile-icon svg { color: #60a5fa; }
        .svc-tile[data-accent="gold"]    .svc-tile-icon svg { color: #fbbf24; }
        .svc-tile[data-accent="cyan"]    .svc-tile-icon svg { color: #67e8f9; }
        .svc-tile[data-accent="violet"]  .svc-tile-icon svg { color: #a78bfa; }
        .svc-tile[data-accent="emerald"] .svc-tile-icon svg { color: #34d399; }
        .svc-tile[data-accent="rose"]    .svc-tile-icon svg { color: #fb7185; }
        .svc-tile:hover .svc-tile-icon { transform: scale(1.08); }
        .svc-tile[data-accent="blue"]:hover    .svc-tile-icon { box-shadow: 0 0 20px rgba(59,130,246,0.35); }
        .svc-tile[data-accent="gold"]:hover    .svc-tile-icon { box-shadow: 0 0 20px rgba(245,158,11,0.35); }
        .svc-tile[data-accent="cyan"]:hover    .svc-tile-icon { box-shadow: 0 0 20px rgba(6,182,212,0.35); }
        .svc-tile[data-accent="violet"]:hover  .svc-tile-icon { box-shadow: 0 0 20px rgba(139,92,246,0.35); }
        .svc-tile[data-accent="emerald"]:hover .svc-tile-icon { box-shadow: 0 0 20px rgba(16,185,129,0.35); }
        .svc-tile[data-accent="rose"]:hover    .svc-tile-icon { box-shadow: 0 0 20px rgba(244,63,94,0.35); }

        /* ── Title ── */
        .svc-tile-title {
          font-family: 'Orbitron', monospace;
          font-size: clamp(0.88rem, 1.3vw, 1.05rem);
          font-weight: 800;
          color: var(--text);
          letter-spacing: 0.04em;
          line-height: 1.25;
          margin-bottom: 0.8rem;
          position: relative;
          z-index: 1;
          transition: color 0.3s;
        }
        .svc-tile[data-accent="blue"]:hover    .svc-tile-title { color: #60a5fa; }
        .svc-tile[data-accent="gold"]:hover    .svc-tile-title { color: #fbbf24; }
        .svc-tile[data-accent="cyan"]:hover    .svc-tile-title { color: #67e8f9; }
        .svc-tile[data-accent="violet"]:hover  .svc-tile-title { color: #a78bfa; }
        .svc-tile[data-accent="emerald"]:hover .svc-tile-title { color: #34d399; }
        .svc-tile[data-accent="rose"]:hover    .svc-tile-title { color: #fb7185; }

        /* ── Description ── */
        .svc-tile-desc {
          font-size: 0.87rem;
          color: var(--text2);
          line-height: 1.68;
          flex: 1;
          position: relative;
          z-index: 1;
        }

        /* ── Divider ── */
        .svc-tile-divider {
          height: 1px;
          background: var(--border2);
          margin: 1.3rem 0 1rem;
          position: relative;
          z-index: 1;
          transition: background 0.3s;
        }
        .svc-tile[data-accent="blue"]:hover    .svc-tile-divider { background: rgba(59,130,246,0.3); }
        .svc-tile[data-accent="gold"]:hover    .svc-tile-divider { background: rgba(245,158,11,0.3); }
        .svc-tile[data-accent="cyan"]:hover    .svc-tile-divider { background: rgba(6,182,212,0.3); }
        .svc-tile[data-accent="violet"]:hover  .svc-tile-divider { background: rgba(139,92,246,0.3); }
        .svc-tile[data-accent="emerald"]:hover .svc-tile-divider { background: rgba(16,185,129,0.3); }
        .svc-tile[data-accent="rose"]:hover    .svc-tile-divider { background: rgba(244,63,94,0.3); }

        /* ── Tags ── */
        .svc-tile-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          position: relative;
          z-index: 1;
        }
        .svc-tile-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.54rem;
          padding: 4px 10px;
          border: 1px solid var(--border2);
          border-radius: 2px;
          color: var(--text3);
          letter-spacing: 0.06em;
          transition: border-color 0.3s, color 0.3s, background 0.3s;
        }
        .svc-tile[data-accent="blue"]:hover    .svc-tile-tag { border-color: rgba(59,130,246,0.4);  color: #93c5fd;  background: rgba(59,130,246,0.06); }
        .svc-tile[data-accent="gold"]:hover    .svc-tile-tag { border-color: rgba(245,158,11,0.4);  color: #fcd34d;  background: rgba(245,158,11,0.06); }
        .svc-tile[data-accent="cyan"]:hover    .svc-tile-tag { border-color: rgba(6,182,212,0.4);   color: #a5f3fc;  background: rgba(6,182,212,0.06); }
        .svc-tile[data-accent="violet"]:hover  .svc-tile-tag { border-color: rgba(139,92,246,0.4);  color: #c4b5fd;  background: rgba(139,92,246,0.06); }
        .svc-tile[data-accent="emerald"]:hover .svc-tile-tag { border-color: rgba(16,185,129,0.4);  color: #6ee7b7;  background: rgba(16,185,129,0.06); }
        .svc-tile[data-accent="rose"]:hover    .svc-tile-tag { border-color: rgba(244,63,94,0.4);   color: #fda4af;  background: rgba(244,63,94,0.06); }

        /* ── Arrow link ── */
        .svc-tile-arrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Mono', monospace;
          font-size: 0.58rem;
          color: var(--text3);
          letter-spacing: 0.1em;
          margin-top: 1rem;
          position: relative;
          z-index: 1;
          transition: color 0.3s, gap 0.3s;
        }
        .svc-tile[data-accent="blue"]:hover    .svc-tile-arrow { color: #60a5fa;  gap: 10px; }
        .svc-tile[data-accent="gold"]:hover    .svc-tile-arrow { color: #fbbf24;  gap: 10px; }
        .svc-tile[data-accent="cyan"]:hover    .svc-tile-arrow { color: #67e8f9;  gap: 10px; }
        .svc-tile[data-accent="violet"]:hover  .svc-tile-arrow { color: #a78bfa;  gap: 10px; }
        .svc-tile[data-accent="emerald"]:hover .svc-tile-arrow { color: #34d399;  gap: 10px; }
        .svc-tile[data-accent="rose"]:hover    .svc-tile-arrow { color: #fb7185;  gap: 10px; }

        /* ── Responsive ── */
        @media (max-width: 1023px) {
          .svc-tile-grid {
            grid-template-columns: repeat(2, 1fr);
            padding: 30px 5% 50px;
            gap: 16px;
          }
        }
        @media (max-width: 600px) {
          .svc-tile-grid {
            grid-template-columns: 1fr;
            padding: 24px 5% 40px;
            gap: 14px;
          }
        }
      `}</style>
    </section>
  );
}
