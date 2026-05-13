export default function Pricing() {
  return (
    <section id="pricing">
      <div className="section-inner">

        {/* ── Header ── */}
        <div className="reveal">
          <div className="section-tag">Investment</div>
          <h2 className="section-title">TRANSPARENT<br />PRICING</h2>
          <p className="section-sub">
            No hidden fees. No surprises. Choose the plan that fits your stage, and scale as you grow.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="pc-grid reveal">

          {/* ── Starter ── */}
          <div className="pc-card">
            <div className="pc-tier">// STARTER</div>
            <div className="pc-price"><sup>₹</sup>79,999</div>
            <div className="pc-freq">per project</div>
            <div className="pc-divider" />
            <ul className="pc-features">
              <li className="avail">5-page website or landing page</li>
              <li className="avail">Responsive mobile design</li>
              <li className="avail">Basic SEO setup</li>
              <li className="avail">2 revision rounds</li>
              <li className="avail">14-day delivery</li>
              <li className="unavail">Custom animations</li>
              <li className="unavail">CMS integration</li>
              <li className="unavail">AI features</li>
            </ul>
            <button className="pc-btn pc-btn--outline">GET STARTED</button>
          </div>

          {/* ── Growth (featured) ── */}
          <div className="pc-card pc-card--featured">
            <div className="pc-badge">POPULAR</div>
            <div className="pc-tier">// GROWTH</div>
            <div className="pc-price"><sup>₹</sup>2,49,999</div>
            <div className="pc-freq">per project</div>
            <div className="pc-divider" />
            <ul className="pc-features">
              <li className="avail">Full website or web app</li>
              <li className="avail">Custom UI/UX design system</li>
              <li className="avail">Advanced animations &amp; motion</li>
              <li className="avail">CMS / Dashboard integration</li>
              <li className="avail">API &amp; third-party integrations</li>
              <li className="avail">4 revision rounds</li>
              <li className="avail">30-day delivery</li>
              <li className="unavail">AI automation</li>
            </ul>
            <button className="pc-btn pc-btn--gold">GET STARTED</button>
          </div>

          {/* ── Enterprise ── */}
          <div className="pc-card pc-card--enterprise">
            <div className="pc-tier">// ENTERPRISE</div>
            <div className="pc-price"><sup>₹</sup>6,99,999</div>
            <div className="pc-freq">per project / custom</div>
            <div className="pc-divider" />
            <ul className="pc-features">
              <li className="avail">Full SAAS or complex platform</li>
              <li className="avail">AI automation workflows</li>
              <li className="avail">Custom backend &amp; database</li>
              <li className="avail">Auth, billing, multi-tenancy</li>
              <li className="avail">Dedicated project manager</li>
              <li className="avail">Unlimited revisions</li>
              <li className="avail">60-day delivery</li>
              <li className="avail">6-month post-launch support</li>
            </ul>
            <button className="pc-btn pc-btn--purple">GET STARTED</button>
          </div>

        </div>

        {/* ── Footer note ── */}
        <div className="reveal" style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <p style={{ fontSize: "0.85rem", color: "var(--text3)", fontFamily: "'Space Mono',monospace" }}>
            Not sure which plan fits?{" "}
            <a href="#contact" style={{ color: "var(--blue2)", textDecoration: "none" }}>
              Book a free strategy call →
            </a>
          </p>
        </div>

      </div>

      <style jsx>{`
        /* ── Grid ── */
        .pc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 4rem;
          align-items: start;
        }

        @media (max-width: 900px) {
          .pc-grid { grid-template-columns: 1fr; max-width: 480px; }
        }

        /* ── Card base ── */
        .pc-card {
          background: var(--surface);
          border: 1px solid var(--border2);
          padding: 2.4rem 2rem 2rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }

        /* Top-edge accent bar — expands left→right on hover (left/right cards only) */
        .pc-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 2px;
          width: 0%;
          background: linear-gradient(90deg, var(--blue), var(--gold));
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .pc-card:not(.pc-card--featured):hover::before {
          width: 100%;
        }

        /* Left/right cards: only button + accent bar animate, no lift */
        .pc-card:not(.pc-card--featured):hover {
          transform: none;
          box-shadow: none;
          border-color: rgba(59, 130, 246, 0.15);
        }

        /* Left card button lights up on hover */
        .pc-card:not(.pc-card--featured):hover .pc-btn--outline {
          border-color: var(--blue) !important;
          color: var(--blue2);
          background: rgba(59, 130, 246, 0.06);
        }

        /* Enterprise button lights up on hover */
        .pc-card--enterprise:hover .pc-btn--purple {
          box-shadow: 0 0 20px rgba(124, 58, 237, 0.4);
          opacity: 1;
        }

        /* ── Featured (Growth) — always elevated, full hover ── */
        .pc-card--featured {
          background: var(--surface2);
          border-color: rgba(245, 158, 11, 0.25);
          padding-top: 3rem;
          transform: translateY(-6px);
          box-shadow: 0 16px 50px rgba(0,0,0,0.35);
        }
        .pc-card--featured:hover {
          transform: translateY(-12px);
          box-shadow: 0 24px 60px rgba(245, 158, 11, 0.12);
          border-color: rgba(245, 158, 11, 0.45);
        }
        /* Featured card doesn't use accent bar */
        .pc-card--featured::before { display: none; }

        /* ── Enterprise ── */
        .pc-card--enterprise {
          border-top: 2px solid #7c3aed;
        }

        /* ── POPULAR badge ── */
        .pc-badge {
          position: absolute;
          top: 1.2rem;
          right: 1.2rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          background: var(--gold);
          color: #000;
          padding: 4px 12px;
          border-radius: 100px;
        }

        /* ── Tier label ── */
        .pc-tier {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: #60a5fa;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 1.4rem;
        }

        /* ── Price ── */
        .pc-price {
          font-family: 'Orbitron', monospace;
          font-size: clamp(2.4rem, 4.5vw, 3.6rem);
          font-weight: 900;
          color: var(--text);
          line-height: 1;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
        }
        .pc-price sup {
          font-size: 1.1rem;
          vertical-align: top;
          margin-top: 0.5rem;
          color: var(--blue);
          font-weight: 400;
        }

        /* ── Frequency ── */
        .pc-freq {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: #3b82f6;
          letter-spacing: 0.08em;
          margin-bottom: 2rem;
        }

        .pc-divider {
          height: 1px;
          background: var(--border2);
          margin-bottom: 1.8rem;
        }

        /* ── Feature list ── */
        .pc-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 2.2rem;
          min-height: 220px;
        }

        .pc-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.97rem;
          font-weight: 500;
          line-height: 1.4;
          letter-spacing: 0.01em;
        }

        .pc-features li::before {
          flex-shrink: 0;
          font-size: 0.78rem;
          width: 16px;
          text-align: center;
        }

        .pc-features li.avail {
          color: var(--text2);
        }
        .pc-features li.avail::before {
          content: '✓';
          color: #60a5fa;
        }

        .pc-features li.unavail {
          color: var(--text3);
        }
        .pc-features li.unavail::before {
          content: '✕';
          color: var(--text3);
        }

        /* ── Buttons ── */
        .pc-btn {
          width: 100%;
          padding: 13px;
          font-family: 'Orbitron', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          border: none;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: opacity 0.3s, transform 0.2s;
        }
        .pc-btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .pc-btn:active { transform: translateY(0); }

        /* Starter — outline default, fills blue on card hover */
        .pc-btn--outline {
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border2) !important;
          clip-path: none;
          transition: background 0.35s ease, border-color 0.35s ease, color 0.35s ease;
        }
        .pc-card:hover .pc-btn--outline {
          background: linear-gradient(135deg, var(--blue), #1d4ed8) !important;
          border-color: transparent !important;
          color: #fff;
          opacity: 1;
        }

        .pc-btn--gold {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: #000;
        }

        /* Enterprise — outline default, fills purple on card hover */
        .pc-btn--purple {
          background: transparent;
          color: #a78bfa;
          border: 1px solid rgba(124, 58, 237, 0.4) !important;
          clip-path: none;
          transition: background 0.35s ease, border-color 0.35s ease, color 0.35s ease,
                      box-shadow 0.35s ease;
        }
        .pc-card--enterprise:hover .pc-btn--purple {
          background: linear-gradient(135deg, #7c3aed, #5b21b6);
          border-color: transparent !important;
          color: #fff;
          box-shadow: 0 0 24px rgba(124, 58, 237, 0.4);
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
