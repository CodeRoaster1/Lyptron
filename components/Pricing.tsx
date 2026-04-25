export default function Pricing() {
  return (
    <>
      <section id="pricing">
        <div className="section-inner">
            <div className="reveal">
                <div className="section-tag">Investment</div>
                <h2 className="section-title">TRANSPARENT<br />PRICING</h2>
                <p className="section-sub">No hidden fees. No surprises. Choose the plan that fits your stage, and scale as
                    you grow.</p>
            </div>
            <div className="pricing-grid reveal">
                {/* Starter */}
                <div className="price-card">
                    <div className="price-tier">// Starter</div>
                    <div className="price-val"><sup>₹</sup>14,999</div>
                    <div className="price-freq">per project</div>
                    <div className="price-divider"></div>
                    <ul className="price-features">
                        <li>5-page website or landing page</li>
                        <li>Responsive mobile design</li>
                        <li>Basic SEO setup</li>
                        <li>2 revision rounds</li>
                        <li>14-day delivery</li>
                        <li className="unavail">Custom animations</li>
                        <li className="unavail">CMS integration</li>
                        <li className="unavail">AI features</li>
                    </ul>
                    <button className="btn-price">GET STARTED</button>
                </div>
                {/* Growth */}
                <div className="price-card featured">
                    <div className="price-badge">POPULAR</div>
                    <div className="price-tier">// Growth</div>
                    <div className="price-val"><sup>₹</sup>39,999</div>
                    <div className="price-freq">per project</div>
                    <div className="price-divider"></div>
                    <ul className="price-features">
                        <li>Full website or web app</li>
                        <li>Custom UI/UX design system</li>
                        <li>Advanced animations & motion</li>
                        <li>CMS / Dashboard integration</li>
                        <li>API & third-party integrations</li>
                        <li>4 revision rounds</li>
                        <li>30-day delivery</li>
                        <li className="unavail">AI automation</li>
                    </ul>
                    <button className="btn-price">GET STARTED</button>
                </div>
                {/* Enterprise */}
                <div className="price-card">
                    <div className="price-tier">// Enterprise</div>
                    <div className="price-val">Custom</div>
                    <div className="price-freq">starting ₹99,999</div>
                    <div className="price-divider"></div>
                    <ul className="price-features">
                        <li>Full SAAS or complex platform</li>
                        <li>AI automation workflows</li>
                        <li>Custom backend & database</li>
                        <li>Auth, billing, multi-tenancy</li>
                        <li>Dedicated project manager</li>
                        <li>Unlimited revisions</li>
                        <li>60-day delivery</li>
                        <li>6-month post-launch support</li>
                    </ul>
                    <button className="btn-price">GET STARTED</button>
                </div>
            </div>
            <div className="reveal" style={{"textAlign":"center","marginTop":"2.5rem"}}>
                <p style={{"fontSize":"0.9rem","color":"var(--text3)","fontFamily":"'Space Mono',monospace"}}>
                    Not sure which plan fits? <a href="#contact" style={{"color":"var(--blue2)","textDecoration":"none"}}>Book
                        a free strategy call →</a>
                </p>
            </div>
        </div>
    </section>
    </>
  );
}