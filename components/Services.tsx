"use client";

import { useState } from "react";
import { ArrowUpRight, Zap, Sparkles, Bot, Smartphone, Cloud } from "lucide-react";

const servicesList = [
  {
    num: "01",
    title: "Web Development",
    tag: "FLAGSHIP SERVICE",
    desc: "Blazing-fast, SEO-optimized websites and web applications built on cutting-edge frameworks. From marketing sites to complex enterprise portals — we ship products that perform.",
    icon: <Zap className="w-4 h-4" />,
    techStack: [
      "Next.js / React",
      "Node.js / TypeScript",
      "PostgreSQL / Prisma",
      "Vercel / AWS Edge",
      "TailwindCSS / Framer",
    ],
  },
  {
    num: "02",
    title: "UI / UX Design",
    tag: "DESIGN & MOTION",
    desc: "Design systems and interfaces that convert. Pixel-perfect, user-centric designs with motion and micro-interactions that create lasting impressions.",
    icon: <Sparkles className="w-4 h-4" />,
    techStack: [
      "Figma / FigJam",
      "Framer",
      "Spline 3D",
      "Adobe Creative Suite",
      "Lottie Animations",
    ],
  },
  {
    num: "03",
    title: "SAAS Development",
    tag: "SCALABLE PLATFORMS",
    desc: "Full-stack SAAS platforms with auth, billing, dashboards, and multi-tenancy — architected for scale from day one. Handle complexity, focus on growth.",
    icon: <Zap className="w-4 h-4" />,
    techStack: [
      "Stripe Integration",
      "Supabase / Firebase",
      "Multi-tenant Arch",
      "Real-time Sockets",
      "Analytics Dashboards",
    ],
  },
  {
    num: "04",
    title: "AI Automation",
    tag: "SMART WORKFLOWS",
    desc: "Intelligent workflows, chatbots, and AI integrations that automate operations and amplify your team's output 10x. From LLM pipelines to autonomous agents.",
    icon: <Bot className="w-4 h-4" />,
    techStack: [
      "OpenAI API",
      "LangChain",
      "Pinecone / Vector DBs",
      "n8n / Make",
      "Python / FastAPI",
    ],
  },
  {
    num: "05",
    title: "Mobile Applications",
    tag: "NATIVE EXPERIENCE",
    desc: "Cross-platform mobile apps for iOS and Android with native feel, offline support, and high performance.",
    icon: <Smartphone className="w-4 h-4" />,
    techStack: [
      "React Native",
      "Expo",
      "Swift / iOS",
      "Kotlin / Android",
      "App Store Deployment",
    ],
  },
  {
    num: "06",
    title: "Cloud & DevOps",
    tag: "INFRASTRUCTURE",
    desc: "Scalable cloud infrastructure, CI/CD pipelines, monitoring, and performance optimization.",
    icon: <Cloud className="w-4 h-4" />,
    techStack: [
      "AWS / GCP",
      "Kubernetes / Docker",
      "Terraform",
      "GitHub Actions",
      "Datadog Monitoring",
    ],
  },
];

export default function Services() {
  const [activeRow, setActiveRow] = useState<number | null>(0);

  return (
    <section id="services" className="bg-[#050508] border-t border-[rgba(255,255,255,0.07)] relative z-10">

      <div className="section-inner">

        {/* ── Header ── */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="flex-1">
            <div className="svc-section-tag">
              <span className="svc-section-tag__slash">// </span> OUR EXPERTISE
            </div>
            <h2 className="font-['Orbitron'] text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.95] tracking-tight mt-6">
              WHAT WE<br />BUILD FOR<br />YOU
            </h2>
          </div>

          <div className="max-w-[300px] md:mt-20 flex-shrink-0">
            <div className="svc-cap-label">06 CAPABILITIES</div>
            <p className="text-[#8a9ab8] text-sm md:text-base leading-[1.85] mb-8 font-['Rajdhani'] font-medium mt-3">
              End-to-end digital solutions engineered for performance, scale, and measurable impact.
            </p>
            <a href="#contact" className="svc-discuss-link group">
              <span>Discuss your project</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* ── Accordion ── */}
        <div className="svc-list">
          {servicesList.map((svc, idx) => {
            const isActive = activeRow === idx;
            return (
              <div
                key={idx}
                className={`svc-row${isActive ? " svc-row--active" : ""}`}
                onClick={() => setActiveRow(isActive ? null : idx)}
              >
                {/* ── Row header (always visible) ── */}
                <div className="svc-row__header">
                  <div className="svc-row__left">
                    <span className={`svc-row__num${isActive ? " svc-row__num--active" : ""}`}>
                      {svc.num}
                    </span>
                    <h3 className={`svc-row__title${isActive ? " svc-row__title--active" : ""}`}>
                      {svc.title}
                    </h3>
                  </div>

                  {/* Icon button */}
                  <div className={`svc-row__icon-wrap${isActive ? " svc-row__icon-wrap--active" : ""}`}>
                    {svc.icon}
                  </div>
                </div>

                {/* ── Expanded body ── */}
                <div className={`svc-row__body${isActive ? " svc-row__body--open" : ""}`}>
                  <div className="svc-row__body-inner">

                    {/* Left col */}
                    <div className="svc-row__info">
                      <div className="svc-row__tag">// {svc.tag}</div>
                      <h4 className="svc-row__info-title">{svc.title}</h4>
                      <p className="svc-row__desc">{svc.desc}</p>
                    </div>

                    {/* Right col — tech stack */}
                    <div className="svc-row__stack">
                      <div className="svc-row__stack-label">// TECH STACK</div>
                      <ul className="svc-row__stack-list">
                        {svc.techStack.map((tech, ti) => (
                          <li key={ti} className="svc-row__stack-item">
                            <span className="svc-row__stack-dot" />
                            <span>{tech}</span>
                          </li>
                        ))}
                      </ul>
                      <a href="#work" className="svc-row__case-link group">
                        VIEW CASE STUDIES
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style jsx>{`
        /* ── Section tag ── */
        .svc-section-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #f59e0b;
          padding-left: 14px;
          border-left: 2px solid #3b82f6;
          line-height: 1;
        }
        .svc-section-tag__slash { color: #3b82f6; }

        /* ── Capability label ── */
        .svc-cap-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #2a3a58;
          font-weight: 700;
        }

        /* ── Discuss link ── */
        .svc-discuss-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #60a5fa;
          text-decoration: none;
          border-bottom: 1px solid rgba(59, 130, 246, 0.3);
          padding-bottom: 4px;
          transition: color 0.3s, border-color 0.3s;
        }
        .svc-discuss-link:hover {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.4);
        }

        /* ── Accordion list ── */
        .svc-list {
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        /* ── Row ── */
        .svc-row {
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          cursor: pointer;
          transition: background 0.35s ease;
        }
        .svc-row:hover {
          background: rgba(255, 255, 255, 0.02);
        }
        .svc-row--active {
          background: rgba(10, 13, 22, 0.9);
          border-bottom-color: rgba(59, 130, 246, 0.18);
        }

        /* ── Row header ── */
        .svc-row__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2.2rem 0;
          transition: padding 0.3s;
        }
        .svc-row--active .svc-row__header {
          padding-bottom: 0;
        }

        .svc-row__left {
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .svc-row__num {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #2a3a58;
          transition: color 0.3s;
          min-width: 2.2rem;
        }
        .svc-row__num--active { color: #f59e0b; }

        .svc-row__title {
          font-family: 'Orbitron', monospace;
          font-size: clamp(1.2rem, 2.4vw, 1.8rem);
          font-weight: 800;
          color: #4a5a78;
          letter-spacing: 0.02em;
          transition: color 0.3s;
        }
        .svc-row:hover .svc-row__title { color: #c8d6f0; }
        .svc-row__title--active { color: #fff !important; }

        /* ── Icon button ── */
        .svc-row__icon-wrap {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2a3a58;
          transition: border-color 0.3s, color 0.3s, background 0.3s;
          flex-shrink: 0;
        }
        .svc-row:hover .svc-row__icon-wrap {
          border-color: rgba(59, 130, 246, 0.4);
          color: #60a5fa;
        }
        .svc-row__icon-wrap--active {
          background: #3b82f6;
          border-color: #3b82f6;
          color: #fff;
        }

        /* ── Expanded body ── */
        .svc-row__body {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.4s ease,
                      padding 0.4s ease;
          padding: 0;
        }
        .svc-row__body--open {
          max-height: 600px;
          opacity: 1;
          padding: 3.5rem 0 4rem;
        }

        .svc-row__body-inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 6rem;
          align-items: start;
        }

        /* ── Left info col ── */
        .svc-row__tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #f59e0b;
          margin-bottom: 1.4rem;
        }

        .svc-row__info-title {
          font-family: 'Orbitron', monospace;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin-bottom: 1.8rem;
        }

        .svc-row__desc {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.05rem;
          font-weight: 500;
          color: #8a9ab8;
          line-height: 1.85;
          max-width: 440px;
          letter-spacing: 0.01em;
          margin-bottom: 0;
        }

        /* ── Right tech stack col ── */
        .svc-row__stack-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #2a3a58;
          margin-bottom: 1.8rem;
        }

        .svc-row__stack-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          margin-bottom: 2.5rem;
        }

        .svc-row__stack-item {
          display: flex;
          align-items: center;
          gap: 14px;
          font-family: 'Rajdhani', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #8a9ab8;
          letter-spacing: 0.03em;
          transition: color 0.25s;
        }
        .svc-row__stack-item:hover { color: #e2eaf8; }

        .svc-row__stack-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #3b82f6;
          flex-shrink: 0;
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.55);
        }

        .svc-row__case-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 700;
          color: #60a5fa;
          text-decoration: none;
          transition: color 0.3s;
        }
        .svc-row__case-link:hover { color: #f59e0b; }

        @media (max-width: 768px) {
          .svc-row__body-inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .svc-row__left {
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}