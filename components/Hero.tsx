"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        const threeCanvas = canvasRef.current;

        const renderer = new THREE.WebGLRenderer({ canvas: threeCanvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 1000);
        camera.position.set(-4.0, 0, 8);

        function resizeThree() {
            const hero = document.getElementById('hero');
            if (!hero) return;
            const W = hero ? hero.offsetWidth : window.innerWidth;
            const H = hero && hero.offsetHeight > 0 ? hero.offsetHeight : window.innerHeight;
            renderer.setSize(W, H);
            camera.aspect = W / H;
            // Desktop: push sphere to far left; mobile: center
            if (W > 1024) camera.position.x = -4.0;
            else if (W > 768) camera.position.x = -2.8;
            else camera.position.x = 0;
            camera.updateProjectionMatrix();
        }
        resizeThree();
        window.addEventListener('resize', resizeThree);

        const isDarkMode = () => document.documentElement.getAttribute('data-theme') === 'dark';

        // ── MAIN WIREFRAME ICOSPHERE ─────────────────────────────────────
        const sphereGeo = new THREE.IcosahedronGeometry(2, 3);
        const wireframeMat = new THREE.MeshBasicMaterial({
            color: 0x3b82f6, wireframe: true, transparent: true, opacity: 0.18
        });
        const sphere = new THREE.Mesh(sphereGeo, wireframeMat);
        scene.add(sphere);

        // ── SOLID INNER SPHERE (subtle glow core) ────────────────────────
        const innerGeo = new THREE.IcosahedronGeometry(1.85, 2);
        const innerMat = new THREE.MeshBasicMaterial({
            color: 0x050818, transparent: true, opacity: 0.92, wireframe: false
        });
        const innerSphere = new THREE.Mesh(innerGeo, innerMat);
        scene.add(innerSphere);

        // ── OUTER GLOW RING 1 ────────────────────────────────────────────
        const ring1Geo = new THREE.TorusGeometry(2.6, 0.008, 2, 120);
        const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.55 });
        const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
        ring1.rotation.x = Math.PI / 2.5;
        scene.add(ring1);

        // ── ORBIT RING 2 (gold) ──────────────────────────────────────────
        const ring2Geo = new THREE.TorusGeometry(3.1, 0.006, 2, 120);
        const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.45 });
        const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
        ring2.rotation.x = Math.PI / 5;
        ring2.rotation.z = Math.PI / 6;
        scene.add(ring2);

        // ── ORBIT RING 3 (blue thin) ─────────────────────────────────────
        const ring3Geo = new THREE.TorusGeometry(3.6, 0.004, 2, 120);
        const ring3Mat = new THREE.MeshBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.3 });
        const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
        ring3.rotation.x = -Math.PI / 3.5;
        ring3.rotation.y = Math.PI / 4;
        scene.add(ring3);

        // ── FLOATING NODE DOTS on sphere surface ─────────────────────────
        const nodeDots: { mesh: THREE.Mesh, isGold: boolean, phase: number }[] = [];
        const uniqueVerts: THREE.Vector3[] = [];
        const posAttr = sphereGeo.attributes.position;
        for (let i = 0; i < posAttr.count; i++) {
            const v = new THREE.Vector3(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
            v.normalize().multiplyScalar(2);
            let dup = false;
            for (const u of uniqueVerts) { if (v.distanceTo(u) < 0.05) { dup = true; break; } }
            if (!dup) uniqueVerts.push(v);
        }
        uniqueVerts.slice(0, 28).forEach((pos, i) => {
            const isGold = i % 7 === 0;
            const dotGeo = new THREE.SphereGeometry(isGold ? 0.045 : 0.028, 6, 6);
            const dotMat = new THREE.MeshBasicMaterial({ color: isGold ? 0xf59e0b : 0x60a5fa });
            const dot = new THREE.Mesh(dotGeo, dotMat);
            dot.position.copy(pos);
            sphere.add(dot);
            nodeDots.push({ mesh: dot, isGold, phase: Math.random() * Math.PI * 2 });
        });

        // ── ORBITING SATELLITE DOTS ──────────────────────────────────────
        const satellites: { pivot: THREE.Object3D, speed: number }[] = [];
        const satData = [
            { radius: 2.6, speed: 0.4, tilt: new THREE.Euler(Math.PI / 2.5, 0, 0), color: 0x3b82f6, size: 0.055 },
            { radius: 3.1, speed: -0.25, tilt: new THREE.Euler(Math.PI / 5, 0, Math.PI / 6), color: 0xf59e0b, size: 0.07 },
            { radius: 3.6, speed: 0.18, tilt: new THREE.Euler(-Math.PI / 3.5, Math.PI / 4, 0), color: 0x60a5fa, size: 0.04 },
        ];
        satData.forEach(sd => {
            const pivot = new THREE.Object3D();
            pivot.rotation.copy(sd.tilt);
            scene.add(pivot);
            const sGeo = new THREE.SphereGeometry(sd.size, 8, 8);
            const sMat = new THREE.MeshBasicMaterial({ color: sd.color });
            const sat = new THREE.Mesh(sGeo, sMat);
            sat.position.set(sd.radius, 0, 0);
            pivot.add(sat);

            const trailGeo = new THREE.TorusGeometry(sd.size * 2.2, sd.size * 0.4, 4, 16);
            const trailMat = new THREE.MeshBasicMaterial({ color: sd.color, transparent: true, opacity: 0.3 });
            const trail = new THREE.Mesh(trailGeo, trailMat);
            sat.add(trail);
            satellites.push({ pivot, speed: sd.speed });
        });

        // ── DATA GRID PLANE (subtle floor grid) ─────────────────────────
        const gridHelper = new THREE.GridHelper(12, 16, 0x3b82f6, 0x0d1a33);
        gridHelper.position.y = -3.2;
        (gridHelper.material as THREE.Material).transparent = true;
        (gridHelper.material as THREE.Material).opacity = 0.18;
        scene.add(gridHelper);

        // ── FLOATING PARTICLES ───────────────────────────────────────────
        const partCount = 120;
        const partGeo = new THREE.BufferGeometry();
        const partPos = new Float32Array(partCount * 3);
        const partVel: { x: number, y: number }[] = [];
        for (let i = 0; i < partCount; i++) {
            partPos[i * 3] = (Math.random() - 0.5) * 14;
            partPos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            partPos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
            partVel.push({ x: (Math.random() - 0.5) * 0.003, y: (Math.random() - 0.5) * 0.003 });
        }
        partGeo.setAttribute('position', new THREE.BufferAttribute(partPos, 3));
        const partMat = new THREE.PointsMaterial({ color: 0x3b82f6, size: 0.04, transparent: true, opacity: 0.55 });
        const particles = new THREE.Points(partGeo, partMat);
        scene.add(particles);

        // ── MOUSE PARALLAX ───────────────────────────────────────────────
        let mouseX = 0, mouseY = 0;
        let targetRotX = 0, targetRotY = 0;
        const heroEl = document.getElementById('hero');
        const onMouseMove = (e: MouseEvent) => {
            if (!heroEl) return;
            const rect = threeCanvas.getBoundingClientRect();
            mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        };
        if (heroEl) heroEl.addEventListener('mousemove', onMouseMove);

        // ── ANIMATE ──────────────────────────────────────────────────────
        let t = 0;
        let animationId: number;
        function animate3D() {
            animationId = requestAnimationFrame(animate3D);
            t += 0.008;

            targetRotY += (mouseX * 0.5 - targetRotY) * 0.04;
            targetRotX += (mouseY * 0.3 - targetRotX) * 0.04;

            sphere.rotation.y = t * 0.12 + targetRotY;
            sphere.rotation.x = t * 0.06 + targetRotX;
            innerSphere.rotation.copy(sphere.rotation);

            ring1.rotation.z += 0.003;
            ring2.rotation.z -= 0.002;
            ring3.rotation.y += 0.0015;

            satellites.forEach(s => { s.pivot.rotation.y += s.speed * 0.012; });

            nodeDots.forEach((nd) => {
                const pulse = 0.6 + 0.4 * Math.sin(t * 1.5 + nd.phase);
                (nd.mesh.material as THREE.Material).opacity = nd.isGold ? pulse : pulse * 0.85;
                (nd.mesh.material as THREE.Material).transparent = true;
            });

            const pa = particles.geometry.attributes.position;
            for (let i = 0; i < partCount; i++) {
                pa.array[i * 3] += partVel[i].x;
                pa.array[i * 3 + 1] += partVel[i].y;
                if (Math.abs(pa.array[i * 3]) > 7) partVel[i].x *= -1;
                if (Math.abs(pa.array[i * 3 + 1]) > 5) partVel[i].y *= -1;
            }
            pa.needsUpdate = true;

            camera.position.y = Math.sin(t * 0.3) * 0.08;

            const dark = isDarkMode();
            wireframeMat.color.set(dark ? 0x3b82f6 : 0x2563eb);
            innerMat.color.set(dark ? 0x030610 : 0xe8f0ff);
            innerMat.opacity = dark ? 0.92 : 0.75;
            partMat.color.set(dark ? 0x3b82f6 : 0x2563eb);

            renderer.render(scene, camera);
        }
        animate3D();

        return () => {
            window.removeEventListener('resize', resizeThree);
            if (heroEl) heroEl.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationId);

            sphereGeo.dispose();
            wireframeMat.dispose();
            innerGeo.dispose();
            innerMat.dispose();
            ring1Geo.dispose();
            ring1Mat.dispose();
            ring2Geo.dispose();
            ring2Mat.dispose();
            ring3Geo.dispose();
            ring3Mat.dispose();
            partGeo.dispose();
            partMat.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
            <canvas ref={canvasRef} id="threeCanvas"
                style={{ position: "absolute", inset: "0", width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}></canvas>

            <div className="max-w-[1536px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-[42fr_58fr] items-center px-[6%] gap-12 lg:gap-0">
                {/* LEFT: Text content */}
                <div className="hero-content">
                    <div className="hero-tag" style={{ animation: "fadeUp 0.8s ease both" }}>
                        <span className="hero-tag-dot"></span>
                        NEXT-GEN DIGITAL AGENCY &nbsp;|&nbsp; EST. 2024
                    </div>
                    <h1 className="hero-title" style={{ animation: "fadeUp 0.8s 0.15s ease both" }}>
                        <span className="line1">BUILD THE</span>
                        <span className="line2">FUTURE.</span>
                    </h1>
                    <p className="hero-sub" style={{ animation: "fadeUp 0.8s 0.3s ease both", textAlign: "left", margin: "1.5rem 0 2rem" }}>
                        We engineer high-performance digital products — from blazing-fast web apps and SAAS platforms to
                        AI-powered automation systems that scale your business.</p>
                    <div className="hero-btns" style={{ animation: "fadeUp 0.8s 0.45s ease both", justifyContent: "flex-start" }}>
                        <button className="btn-primary"
                            onClick={() => { document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}><span>EXPLORE
                                SERVICES</span></button>
                        <button className="btn-outline"
                            onClick={() => { document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) }}>VIEW OUR WORK</button>
                    </div>
                    <div className="hero-stats"
                        style={{ animation: "fadeUp 0.8s 0.6s ease both", marginTop: "3rem", justifyContent: "flex-start", gap: "2rem" }}>
                        <div className="stat">
                            <span className="stat-val" data-count="50" style={{ color: '#fff' }}>20</span>
                            <span className="stat-label">Projects Shipped</span>
                        </div>
                        <div className="stat">
                            <span className="stat-val" data-count="98" style={{ color: '#fff' }}>100</span>
                            <span className="stat-label">Satisfaction %</span>
                        </div>
                        <div className="stat">
                            <span className="stat-val" data-count="12" style={{ color: '#fff' }}>100+</span>
                            <span className="stat-label">Industries</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
