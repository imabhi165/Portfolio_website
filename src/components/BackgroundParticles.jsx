import React, { useRef, useEffect } from "react";

const BackgroundParticles = ({ className = "", style = {} }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const colors = [
      "rgba(0,204,177,0.9)",
      "rgba(123,97,255,0.9)",
      "rgba(255,196,20,0.9)",
      "rgba(28,160,251,0.9)",
    ];

    const createParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 0.5 + Math.random() * 2.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0.2 + Math.random() * 0.6,
    });

    const initParticles = (count = Math.round((width * height) / 18000)) => {
      particlesRef.current = Array.from({ length: count }, () =>
        createParticle(),
      );
    };

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      initParticles();
    };

    let lastTime = 0;

    const draw = (time) => {
      const dt = (time - lastTime) / 16.666 || 1;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // subtle background vignette
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(6,17,28,0.25)");
      gradient.addColorStop(0.6, "rgba(10,13,20,0.08)");
      gradient.addColorStop(1, "rgba(0,0,0,0.6)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particlesRef.current.forEach((p) => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // wrap
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // draw glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
        const c = p.color.replace(
          /rgba\((\d+),(\d+),(\d+),[\d.]+\)/,
          "$1,$2,$3",
        );
        grd.addColorStop(0, `rgba(${c},${p.alpha})`);
        grd.addColorStop(0.3, `rgba(${c},${p.alpha * 0.4})`);
        grd.addColorStop(1, "rgba(0,0,0,0)");

        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationRef.current);
      } else {
        lastTime = performance.now();
        animationRef.current = requestAnimationFrame(draw);
      }
    };

    initParticles();
    animationRef.current = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        ...style,
      }}
    />
  );
};

export default BackgroundParticles;
