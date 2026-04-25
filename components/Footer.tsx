export default function Footer() {
  return (
    <>
      <footer>
        <div className="container-wide">
            <div className="footer-top">
                <div className="footer-brand">
                    <div className="footer-brand-name">LYPTRON</div>
                    <p className="footer-brand-desc">Future-grade digital agency specializing in web development, design, SAAS,
                        and AI automation for companies that want to lead their industry.</p>
                </div>
                <div>
                    <div className="footer-col-title">// Services</div>
                    <ul className="footer-links">
                        <li><a href="#services">Web Development</a></li>
                        <li><a href="#services">UI/UX Design</a></li>
                        <li><a href="#services">SAAS Development</a></li>
                        <li><a href="#services">AI Automation</a></li>
                        <li><a href="#services">Mobile Apps</a></li>
                    </ul>
                </div>
                <div>
                    <div className="footer-col-title">// Company</div>
                    <ul className="footer-links">
                        <li><a href="#work">Portfolio</a></li>
                        <li><a href="#process">Process</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <div className="footer-col-title">// Connect</div>
                    <ul className="footer-links">
                        <li><a href="#">Twitter / X</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">hello@lyptron.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <span>© 2025 LYPTRON. ALL RIGHTS RESERVED.</span>
                <span className="text-[var(--blue)] tracking-[0.2em]">◈ LYPTRON</span>
                <span>PRIVACY · TERMS</span>
            </div>
        </div>
      </footer>
    </>
  );
}