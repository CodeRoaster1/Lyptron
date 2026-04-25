"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Story from "@/components/Story";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => revealObserver.observe(el));

    // Re-scan after a short delay for dynamic content
    const timeout = setTimeout(() => {
      const dynamicReveals = document.querySelectorAll('.reveal');
      dynamicReveals.forEach((el) => revealObserver.observe(el));
    }, 500);

    // Stats counter animation observer
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          entry.target.querySelectorAll('.stat-val').forEach(el => {
            const elNode = el as HTMLElement;
            const rawText = elNode.textContent || "0";
            const max = parseInt(rawText.replace(/\D/g, '') || "0", 10);
            if (max === 0) return;
            
            const isPercent = rawText.includes('%');
            const suffix = isPercent ? '%' : '+';
            
            let c = 0;
            const inc = max / 30;
            const timer = setInterval(() => {
              c += inc;
              if (c >= max) { 
                clearInterval(timer); 
                elNode.textContent = max + suffix; 
              } else { 
                elNode.textContent = Math.floor(c) + suffix; 
              }
            }, 40);
          });
        }
      });
    }, { threshold: 0.5 });
    
    const stats = document.querySelector('.hero-stats');
    if (stats) statsObserver.observe(stats);

    // Services drag scroll functionality
    const scroll = document.getElementById('svcScroll');
    const thumb = document.getElementById('svcScrollThumb');
    if (scroll) {
      let isDown = false, startX: number, scrollLeft: number;
      
      const onMouseDown = (e: MouseEvent) => { 
        isDown = true; 
        scroll.classList.add('active'); 
        startX = e.pageX - scroll.offsetLeft; 
        scrollLeft = scroll.scrollLeft; 
      };
      const onMouseLeave = () => { isDown = false; };
      const onMouseUp = () => { isDown = false; };
      const onMouseMove = (e: MouseEvent) => { 
        if (!isDown) return; 
        e.preventDefault(); 
        const x = e.pageX - scroll.offsetLeft; 
        scroll.scrollLeft = scrollLeft - (x - startX) * 1.5; 
      };

      scroll.addEventListener('mousedown', onMouseDown);
      scroll.addEventListener('mouseleave', onMouseLeave);
      scroll.addEventListener('mouseup', onMouseUp);
      scroll.addEventListener('mousemove', onMouseMove);

      let touchStart = 0, touchScrollLeft = 0;
      const onTouchStart = (e: TouchEvent) => { 
        touchStart = e.touches[0].pageX; 
        touchScrollLeft = scroll.scrollLeft; 
      };
      const onTouchMove = (e: TouchEvent) => { 
        const dx = touchStart - e.touches[0].pageX; 
        scroll.scrollLeft = touchScrollLeft + dx; 
      };

      scroll.addEventListener('touchstart', onTouchStart, { passive: true });
      scroll.addEventListener('touchmove', onTouchMove, { passive: true });

      const onScroll = () => {
        if (!thumb) return;
        const pct = scroll.scrollLeft / (scroll.scrollWidth - scroll.clientWidth);
        thumb.style.width = (30 + pct * 70) + '%';
        thumb.style.marginLeft = (pct * 40) + '%';
      };
      scroll.addEventListener('scroll', onScroll);
      
      return () => {
        revealObserver.disconnect();
        statsObserver.disconnect();
        scroll.removeEventListener('mousedown', onMouseDown);
        scroll.removeEventListener('mouseleave', onMouseLeave);
        scroll.removeEventListener('mouseup', onMouseUp);
        scroll.removeEventListener('mousemove', onMouseMove);
        scroll.removeEventListener('touchstart', onTouchStart);
        scroll.removeEventListener('touchmove', onTouchMove);
        scroll.removeEventListener('scroll', onScroll);
      };
    }

    return () => {
      revealObserver.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Work />
        <Story />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
