"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const CHARS = "ГሴЀ†ѢДNΣΩΠ░▒▓█◣◥◤◢⊣⊢ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Build random column where real letter appears first
function buildColumn(letter: string, total = 12): string[] {
    const pool = CHARS.split("").filter((c) => c !== letter);
    const chars: string[] = [];

    for (let i = 0; i < total - 1; i++) {
        chars.push(pool[Math.floor(Math.random() * pool.length)]);
    }

    chars.push(letter); // final letter visible
    return chars;
}

const BASE_DURATIONS = [1.2, 1.4, 1.1, 1.5, 1.3, 1.6, 1.25];

const RollingLetter = ({
    letter,
    duration,
}: {
    letter: string;
    duration: number;
}) => {
    const [column] = useState(() => buildColumn(letter));

    return (
        <span className={styles.scrollBox}>
            <span
                className={styles.scrollColumn}
                style={{ "--roll-dur": `${duration}s` } as React.CSSProperties}
            >
                {column.map((char, i) => (
                    <span key={i} className={styles.scrollChar}>
                        {char}
                    </span>
                ))}
            </span>
        </span>
    );
};

const ScrambleText = ({ text }: { text: string }) => {
    return (
        <span className={styles.scrollWrap}>
            {text.split("").map((char, i) => (
                <RollingLetter
                    key={i}
                    letter={char}
                    duration={BASE_DURATIONS[i % BASE_DURATIONS.length]}
                />
            ))}
        </span>
    );
};

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <nav
            id="mainNav"
            className="fixed top-0 w-full z-[1000] bg-[var(--nav-bg)] backdrop-blur-[20px] border-b border-[var(--border)] h-[70px]"
        >
            <div className="container-wide h-full flex items-center justify-between">
                <a
                    href="#hero"
                    className="flex items-center gap-3 font-['Orbitron'] text-[1.45rem] font-[800] tracking-[0.12em] text-[var(--text)] no-underline"
                >
                    <img
                        src="/Logo.gif"
                        alt="Lyptron Logo"
                        className="w-[58px] h-[58px] object-contain"
                    />

                    <ScrambleText text="LYPTRON" />
                </a>

                <ul className="hidden lg:flex items-center gap-8 list-none">
                    <li><a href="#services" className={styles.navLink}>Services</a></li>
                    <li><a href="#work" className={styles.navLink}>Work</a></li>
                    <li><a href="#process" className={styles.navLink}>Process</a></li>
                    <li><a href="#pricing" className={styles.navLink}>Pricing</a></li>
                    <li><a href="#contact" className={styles.navLink}>Contact</a></li>
                </ul>

                <div className="flex items-center gap-4">
                    {mounted && (
                        <button
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            className={styles.themeToggle}
                            aria-label="Toggle Theme"
                        />
                    )}
                </div>
            </div>
        </nav>
    );
}