"use client";

import { Fragment } from "react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    num: "01",
    color: "blue",
    cat: "SAAS PLATFORM",
    title: "NexusFlow — Workflow Automation Suite",
    meta: ["Design", "Development", "2024"],
    tags: ["Next.js", "Supabase", "Stripe"],
    link: "#",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
  },
  {
    num: "02",
    color: "gold",
    cat: "AI INTEGRATION",
    title: "VoxAI — Conversational Commerce",
    meta: ["AI", "Web", "2025"],
    tags: ["OpenAI", "LangChain", "React"],
    link: "#",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=1200",
  },
  {
    num: "03",
    color: "violet",
    cat: "WEB DESIGN",
    title: "Stratum — Agency Rebrand",
    meta: ["Branding", "2026"],
    tags: ["Figma", "Framer", "Motion"],
    link: "#",
    image: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?auto=format&fit=crop&q=80&w=800",
  },
  {
    num: "04",
    color: "emerald",
    cat: "DASHBOARD",
    title: "DataForge Analytics",
    meta: ["Design + Dev", "2026"],
    tags: ["React", "D3.js", "PostgreSQL"],
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    num: "05",
    color: "cyan",
    cat: "MOBILE APP",
    title: "PulseTrack Health App",
    meta: ["iOS & Android", "2026"],
    tags: ["React Native", "Expo", "Node.js"],
    link: "#",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Work() {
  return (
    <section id="work" className="border-t border-[rgba(255,255,255,0.07)]">
      <div className="section-inner">

        {/* ── Header ── */}
        <div className="work-header reveal">
          <div>
            <div className="font-['Space_Mono'] text-[0.65rem] tracking-[0.22em] text-[#f59e0b] uppercase mb-5 flex items-center gap-2 pl-[14px] border-l-2 border-[#3b82f6] leading-none">
              <span className="text-[#3b82f6]">//</span> PORTFOLIO
            </div>
            <h2 className="font-['Orbitron'] text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.95] tracking-tight">
              SELECTED<br />WORK
            </h2>
          </div>
          <div className="work-header-right">
            <span className="work-count">05 PROJECTS</span>
            <a href="#contact" className="work-view-all" style={{ textDecoration: "none" }}>
              Start a project →
            </a>
          </div>
        </div>

        {/* ── Bento Grid ── */}
        <div className="work-bento reveal">
          {projects.map((p, idx) => (
            <a
              key={idx}
              href={p.link}
              className="wc"
              data-c={p.color}
              style={{ textDecoration: "none" }}
            >
              {/* Background image */}
              <img src={p.image} alt="" className="wc-bg" />

              {/* Ghost number watermark */}
              <span className="wc-ghost">{p.num}</span>

              {/* Category chip */}
              <div className="wc-cat">{p.cat}</div>

              {/* Arrow button */}
              <div className="wc-arrow">
                <ArrowRight style={{ width: "1rem", height: "1rem" }} />
              </div>

              {/* Content */}
              <div className="wc-body">
                <h3 className="wc-title">{p.title}</h3>
                <div className="wc-meta">
                  {p.meta.map((m, mi) => (
                    <Fragment key={mi}>
                      {mi > 0 && <span className="wc-sep">◈</span>}
                      <span>{m}</span>
                    </Fragment>
                  ))}
                </div>
                <div className="wc-tags">
                  {p.tags.map((tag, ti) => (
                    <span key={ti} className="wc-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="work-cta-bar reveal">
          <a href="#contact" className="btn-primary no-underline inline-flex items-center gap-2">
            <span>DISCUSS YOUR PROJECT</span>
          </a>
        </div>

      </div>

      <style jsx>{`
        #work {
          background: var(--bg2);
        }
        #work .section-inner {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        /* ── Header ── */
        .work-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 3rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border2);
        }
        .work-header-right {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .work-count {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: var(--text3);
          letter-spacing: 0.18em;
        }
        .work-view-all {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: var(--blue2);
          letter-spacing: 0.12em;
          cursor: pointer;
          border-bottom: 1px solid rgba(59, 130, 246, 0.3);
          padding-bottom: 2px;
          transition: color 0.3s, border-color 0.3s;
        }
        .work-view-all:hover {
          color: var(--gold);
          border-color: rgba(245, 158, 11, 0.4);
        }

        /* ── Bento grid ── */
        .work-bento {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: 340px 280px;
          gap: 16px;
        }

        /* ── Background image ── */
        .wc-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.35) saturate(0.6);
          opacity: 0.55;
          transition: opacity 0.5s ease, transform 0.7s ease;
          z-index: 0;
        }
        .wc:hover .wc-bg {
          opacity: 0.75;
          filter: brightness(0.28) saturate(0.8);
          transform: scale(1.04);
        }

        /* ── Card base ── */
        .wc {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--border2);
          border-radius: 3px;
          padding: 2rem 2.2rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          cursor: pointer;
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .wc:hover {
          transform: translateY(-5px);
          border-color: var(--border);
        }

        /* ── Grid placements ── */
        .wc:nth-child(1) { grid-column: span 7; grid-row: 1; }
        .wc:nth-child(2) { grid-column: span 5; grid-row: 1; }
        .wc:nth-child(3) { grid-column: span 4; grid-row: 2; }
        .wc:nth-child(4) { grid-column: span 4; grid-row: 2; }
        .wc:nth-child(5) { grid-column: span 4; grid-row: 2; }

        /* ── Gradient mesh backgrounds ── */
        .wc[data-c="blue"]    { background: radial-gradient(ellipse at 80% 20%, rgba(59,130,246,0.18) 0%, var(--surface) 60%); }
        .wc[data-c="gold"]    { background: radial-gradient(ellipse at 20% 80%, rgba(245,158,11,0.16) 0%, var(--surface) 60%); }
        .wc[data-c="violet"]  { background: radial-gradient(ellipse at 70% 30%, rgba(139,92,246,0.16) 0%, var(--surface) 60%); }
        .wc[data-c="emerald"] { background: radial-gradient(ellipse at 30% 70%, rgba(16,185,129,0.15) 0%, var(--surface) 60%); }
        .wc[data-c="cyan"]    { background: radial-gradient(ellipse at 60% 40%, rgba(6,182,212,0.16) 0%, var(--surface) 60%); }

        /* ── Hover glow ── */
        .wc[data-c="blue"]:hover    { box-shadow: 0 20px 60px rgba(59,130,246,0.18); }
        .wc[data-c="gold"]:hover    { box-shadow: 0 20px 60px rgba(245,158,11,0.18); }
        .wc[data-c="violet"]:hover  { box-shadow: 0 20px 60px rgba(139,92,246,0.18); }
        .wc[data-c="emerald"]:hover { box-shadow: 0 20px 60px rgba(16,185,129,0.18); }
        .wc[data-c="cyan"]:hover    { box-shadow: 0 20px 60px rgba(6,182,212,0.18); }

        /* ── Top accent bar sweep ── */
        .wc::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 0; height: 2px;
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .wc:hover::before { width: 100%; }
        .wc[data-c="blue"]::before    { background: linear-gradient(90deg, #3b82f6, transparent); }
        .wc[data-c="gold"]::before    { background: linear-gradient(90deg, #f59e0b, transparent); }
        .wc[data-c="violet"]::before  { background: linear-gradient(90deg, #8b5cf6, transparent); }
        .wc[data-c="emerald"]::before { background: linear-gradient(90deg, #10b981, transparent); }
        .wc[data-c="cyan"]::before    { background: linear-gradient(90deg, #06b6d4, transparent); }

        /* ── Ghost number watermark ── */
        .wc-ghost {
          position: absolute;
          font-family: 'Orbitron', monospace;
          font-weight: 900;
          line-height: 1;
          user-select: none;
          pointer-events: none;
          transition: opacity 0.4s;
        }
        .wc:nth-child(1) .wc-ghost   { font-size: 11rem; right: -1rem; top: -1rem; opacity: 0.04; }
        .wc:nth-child(n+2) .wc-ghost { font-size: 6rem; right: -0.5rem; top: -0.5rem; opacity: 0.05; }
        .wc[data-c="blue"]    .wc-ghost { color: #3b82f6; }
        .wc[data-c="gold"]    .wc-ghost { color: #f59e0b; }
        .wc[data-c="violet"]  .wc-ghost { color: #8b5cf6; }
        .wc[data-c="emerald"] .wc-ghost { color: #10b981; }
        .wc[data-c="cyan"]    .wc-ghost { color: #06b6d4; }
        .wc:hover .wc-ghost { opacity: 0.10; }

        /* ── Category chip ── */
        .wc-cat {
          position: absolute;
          top: 1.6rem; left: 2.2rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 2px;
        }
        .wc[data-c="blue"]    .wc-cat { color: #60a5fa; background: rgba(59,130,246,0.12);  border: 1px solid rgba(59,130,246,0.3); }
        .wc[data-c="gold"]    .wc-cat { color: #fbbf24; background: rgba(245,158,11,0.12);  border: 1px solid rgba(245,158,11,0.3); }
        .wc[data-c="violet"]  .wc-cat { color: #a78bfa; background: rgba(139,92,246,0.12);  border: 1px solid rgba(139,92,246,0.3); }
        .wc[data-c="emerald"] .wc-cat { color: #34d399; background: rgba(16,185,129,0.12);  border: 1px solid rgba(16,185,129,0.3); }
        .wc[data-c="cyan"]    .wc-cat { color: #67e8f9; background: rgba(6,182,212,0.12);   border: 1px solid rgba(6,182,212,0.3); }

        /* ── Arrow button ── */
        .wc-arrow {
          position: absolute;
          top: 1.4rem; right: 1.6rem;
          width: 38px; height: 38px;
          border-radius: 50%;
          border: 1px solid var(--border2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text3);
          transition: all 0.35s ease;
        }
        .wc[data-c="blue"]:hover    .wc-arrow { border-color: #3b82f6; color: #60a5fa; background: rgba(59,130,246,0.1);  transform: rotate(45deg); }
        .wc[data-c="gold"]:hover    .wc-arrow { border-color: #f59e0b; color: #fbbf24; background: rgba(245,158,11,0.1);  transform: rotate(45deg); }
        .wc[data-c="violet"]:hover  .wc-arrow { border-color: #8b5cf6; color: #a78bfa; background: rgba(139,92,246,0.1);  transform: rotate(45deg); }
        .wc[data-c="emerald"]:hover .wc-arrow { border-color: #10b981; color: #34d399; background: rgba(16,185,129,0.1); transform: rotate(45deg); }
        .wc[data-c="cyan"]:hover    .wc-arrow { border-color: #06b6d4; color: #67e8f9; background: rgba(6,182,212,0.1);   transform: rotate(45deg); }

        /* ── Card body ── */
        .wc-body { position: relative; z-index: 1; }

        /* ── Title ── */
        .wc-title {
          font-family: 'Orbitron', monospace;
          font-weight: 800;
          color: var(--text);
          letter-spacing: 0.02em;
          line-height: 1.25;
          transition: color 0.3s;
          margin-bottom: 0.5rem;
        }
        .wc:nth-child(1) .wc-title   { font-size: clamp(1.2rem, 2.2vw, 1.6rem); }
        .wc:nth-child(n+2) .wc-title { font-size: clamp(0.9rem, 1.5vw, 1.1rem); }
        .wc[data-c="blue"]:hover    .wc-title { color: #60a5fa; }
        .wc[data-c="gold"]:hover    .wc-title { color: #fbbf24; }
        .wc[data-c="violet"]:hover  .wc-title { color: #a78bfa; }
        .wc[data-c="emerald"]:hover .wc-title { color: #34d399; }
        .wc[data-c="cyan"]:hover    .wc-title { color: #67e8f9; }

        /* ── Meta ── */
        .wc-meta {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          color: var(--text3);
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          flex-wrap: wrap;
        }
        .wc-sep { opacity: 0.35; }

        /* ── Tags ── */
        .wc-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 0.9rem;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s;
        }
        .wc:hover .wc-tags { opacity: 1; transform: translateY(0); }
        .wc-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.52rem;
          padding: 3px 9px;
          border-radius: 2px;
          border: 1px solid var(--border2);
          color: var(--text3);
          letter-spacing: 0.06em;
          transition: border-color 0.3s, color 0.3s;
        }
        .wc[data-c="blue"]:hover    .wc-tag { border-color: rgba(59,130,246,0.4);  color: #93c5fd; }
        .wc[data-c="gold"]:hover    .wc-tag { border-color: rgba(245,158,11,0.4);  color: #fcd34d; }
        .wc[data-c="violet"]:hover  .wc-tag { border-color: rgba(139,92,246,0.4);  color: #c4b5fd; }
        .wc[data-c="emerald"]:hover .wc-tag { border-color: rgba(16,185,129,0.4);  color: #6ee7b7; }
        .wc[data-c="cyan"]:hover    .wc-tag { border-color: rgba(6,182,212,0.4);   color: #a5f3fc; }

        /* ── CTA bar ── */
        .work-cta-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 0 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1023px) {
          .work-bento {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
          }
          .wc:nth-child(1) { grid-column: span 2; }
          .wc:nth-child(n) { grid-column: span 1; }
          .wc { min-height: 280px; }
        }
        @media (max-width: 600px) {
          .work-bento { grid-template-columns: 1fr; }
          .wc:nth-child(n) { grid-column: span 1; }
          .wc { min-height: 240px; }
        }
      `}</style>
    </section>
  );
}
