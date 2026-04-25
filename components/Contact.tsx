"use client";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="section-inner">
            <div className="contact-wrap">
                <div className="reveal">
                    <div className="section-tag">Let's Connect</div>
                    <h2 className="section-title">BOOK YOUR<br />FREE CALL</h2>
                    <p className="contact-info-desc">Ready to build something remarkable? Book a complimentary 1-on-1
                        strategy call with our team. No obligation, just clarity on how to move your vision forward.</p>
                    <div className="contact-detail">
                        <div className="contact-detail-icon">✉</div>
                        <div>
                            <div
                                style={{"fontSize":"0.75rem","color":"var(--text3)","fontFamily":"'Space Mono',monospace","letterSpacing":"0.08em","marginBottom":"3px"}}>
                                EMAIL</div>
                            hello@lyptron.com
                        </div>
                    </div>
                    <div className="contact-detail">
                        <div className="contact-detail-icon">📍</div>
                        <div>
                            <div
                                style={{"fontSize":"0.75rem","color":"var(--text3)","fontFamily":"'Space Mono',monospace","letterSpacing":"0.08em","marginBottom":"3px"}}>
                                LOCATION</div>
                            Remote-first · Worldwide
                        </div>
                    </div>
                    <div className="contact-detail">
                        <div className="contact-detail-icon">⏱</div>
                        <div>
                            <div
                                style={{"fontSize":"0.75rem","color":"var(--text3)","fontFamily":"'Space Mono',monospace","letterSpacing":"0.08em","marginBottom":"3px"}}>
                                RESPONSE TIME</div>
                            Within 24 hours
                        </div>
                    </div>
                    <div style={{"marginTop":"2.5rem"}}>
                        <div
                            style={{"fontFamily":"'Space Mono',monospace","fontSize":"0.65rem","color":"var(--text3)","letterSpacing":"0.12em","marginBottom":"1rem","textTransform":"uppercase"}}>
                            // Connect</div>
                        <div style={{"display":"flex","gap":"1rem"}}>
                            <a href="#"
                                style={{"width":"40px","height":"40px","border":"1px solid var(--border)","display":"flex","alignItems":"center","justifyContent":"center","color":"var(--text2)","textDecoration":"none","transition":"all 0.3s"}}
                                onMouseOver={(e) => {}}
                                onMouseOut={(e) => {}}>𝕏</a>
                            <a href="#"
                                style={{"width":"40px","height":"40px","border":"1px solid var(--border)","display":"flex","alignItems":"center","justifyContent":"center","color":"var(--text2)","textDecoration":"none","transition":"all 0.3s"}}
                                onMouseOver={(e) => {}}
                                onMouseOut={(e) => {}}>in</a>
                            <a href="#"
                                style={{"width":"40px","height":"40px","border":"1px solid var(--border)","display":"flex","alignItems":"center","justifyContent":"center","color":"var(--text2)","textDecoration":"none","transition":"all 0.3s"}}
                                onMouseOver={(e) => {}}
                                onMouseOut={(e) => {}}>gh</a>
                        </div>
                    </div>
                </div>
                <div className="reveal">
                    <div className="contact-form">
                        <div id="contactForm">
                            <div
                                style={{"fontFamily":"'Orbitron',monospace","fontSize":"0.85rem","fontWeight":"700","color":"var(--text)","marginBottom":"1.5rem","letterSpacing":"0.08em"}}>
                                BOOK A FREE 1-ON-1 CALL
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">First Name</label>
                                    <input className="form-input" type="text" placeholder="Alex" id="fname" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Last Name</label>
                                    <input className="form-input" type="text" placeholder="Johnson" id="lname" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input className="form-input" type="email" placeholder="alex@company.com" id="email" suppressHydrationWarning />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Company / Project</label>
                                <input className="form-input" type="text" placeholder="My Startup Inc." id="company" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Service Interested In</label>
                                <select className="form-select" id="service" defaultValue="">
                                    <option value="" disabled>Select a service...</option>
                                    <option>Web Development</option>
                                    <option>UI/UX Design</option>
                                    <option>SAAS Development</option>
                                    <option>AI Automation</option>
                                    <option>Mobile App</option>
                                    <option>Full Digital Transformation</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Tell us about your project</label>
                                <textarea className="form-textarea"
                                    placeholder="Brief description of what you want to build..."
                                    id="message"></textarea>
                            </div>
                            <button className="form-submit" onClick={() => {}}>
                                <span>BOOK MY FREE CALL →</span>
                            </button>
                        </div>
                        <div className="form-success" id="formSuccess">
                            <div style={{"fontSize":"2rem","marginBottom":"1rem"}}>✦</div>
                            <div style={{"fontSize":"1rem","marginBottom":"0.5rem","color":"var(--gold)"}}>CALL BOOKED!</div>
                            <div
                                style={{"fontSize":"0.8rem","color":"var(--text2)","fontFamily":"'Rajdhani',sans-serif","lineHeight":"1.6"}}>
                                Thank you for reaching out. Our team will contact you within 24 hours to confirm your
                                free strategy session.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
