"use client";

import { useEffect, useRef } from "react";
import styles from "./Navbar.module.css";

const REEL_SIZE = 6;

function randDur() {
    return 1000 + Math.random() * 800; // 1000ms – 1800ms
}
function randPause() {
    return 1800 + Math.random() * 2400; // 1.8s – 4.2s
}

const RollingLetter = ({ letter }: { letter: string }) => {
    const colRef = useRef<HTMLSpanElement>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const col = colRef.current;
        if (!col) return;

        // Set initial position to middle section (no transition)
        col.style.transition = "none";
        col.style.transform = `translateY(-${REEL_SIZE * 1.2}em)`;

        function runCycle() {
            if (!col) return;
            const dur = randDur();
            const pause = randPause();
            const rolls = 1 + Math.floor(Math.random() * 2);
            const goUp = Math.random() < 0.5;
            const target = goUp
                ? -((REEL_SIZE + rolls) * 1.2)
                : -((REEL_SIZE - rolls) * 1.2);

            // Snap back to middle silently
            col.style.transition = "none";
            col.style.transform = `translateY(-${REEL_SIZE * 1.2}em)`;

            // Double rAF ensures the snap is painted before animating
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    col.style.transition = `transform ${dur}ms cubic-bezier(0.25, 0.1, 0.1, 1)`;
                    col.style.transform = `translateY(${target}em)`;
                    timerRef.current = setTimeout(() => {
                        timerRef.current = setTimeout(runCycle, pause);
                    }, dur);
                });
            });
        }

        // Stagger start slightly so letters don't all fire together on mount
        const initDelay = Math.random() * 600;
        timerRef.current = setTimeout(runCycle, initDelay);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [letter]);

    // Build reel: 3 sections × REEL_SIZE copies of the same letter
    const reel = Array.from({ length: REEL_SIZE * 3 }, () => letter);

    return (
        <span className={styles.scrollBox}>
            <span ref={colRef} className={styles.scrollColumn}>
                {reel.map((char, i) => (
                    <span key={i} className={styles.scrollChar}>
                        {char}
                    </span>
                ))}
            </span>
        </span>
    );
};

const RollingText = ({ text }: { text: string }) => (
    <span className={styles.scrollWrap}>
        {text.split("").map((char, i) => (
            <RollingLetter key={i} letter={char} />
        ))}
    </span>
);

export default function Navbar() {
    return (
        <nav
            id="mainNav"
            className="fixed top-0 w-full z-[1000] bg-[var(--nav-bg)] backdrop-blur-[20px] border-b border-[var(--border)] h-[70px]"
        >
            <div className="container-wide h-full flex items-center justify-between">
                <a
                    href="#hero"
                    className="flex items-center gap-3 no-underline"
                >
                    <img
                        src="/Logo.gif"
                        alt="Lyptron Logo"
                        className="w-[56px] h-[56px] object-contain flex-shrink-0"
                    />
                    <span className={styles.brandText}>
                        <RollingText text="LYPTRON" />
                    </span>
                </a>

                <ul className="hidden lg:flex items-center gap-8 list-none">
                    <li><a href="#services" className={styles.navLink}>Services</a></li>
                    <li><a href="#work" className={styles.navLink}>Work</a></li>
                    <li><a href="#process" className={styles.navLink}>Process</a></li>
                    <li><a href="#pricing" className={styles.navLink}>Pricing</a></li>
                    <li><a href="#contact" className={styles.navLink}>Contact</a></li>
                </ul>

                <div className="flex items-center gap-4">
                    <a href="#contact" className="hidden lg:inline-flex btn-primary no-underline items-center justify-center text-[0.7rem] uppercase mt-1">
                        <span>BOOK A CALL</span>
                    </a>
                    <button className="lg:hidden p-2 text-[var(--text)]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
