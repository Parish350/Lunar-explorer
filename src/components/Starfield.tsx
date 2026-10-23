import React, { useEffect, useRef } from "react";

export const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Generate stars
    const starCount = Math.floor((width * height) / 4500);
    const stars = Array.from({ length: Math.min(starCount, 300) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.015 + 0.005,
      direction: Math.random() > 0.5 ? 1 : -1,
      color: Math.random() > 0.8 ? "#93c5fd" : Math.random() > 0.9 ? "#c084fc" : "#f8fafc"
    }));

    // Animated spacecraft position
    let shipX = -100;
    let shipY = height * 0.22;
    const shipSpeed = 0.45;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Distant subtle nebula glows
      const grad1 = ctx.createRadialGradient(width * 0.8, height * 0.25, 10, width * 0.8, height * 0.25, 450);
      grad1.addColorStop(0, "rgba(79, 70, 229, 0.08)");
      grad1.addColorStop(1, "rgba(15, 23, 42, 0)");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(width * 0.15, height * 0.75, 10, width * 0.15, height * 0.75, 380);
      grad2.addColorStop(0, "rgba(14, 165, 233, 0.06)");
      grad2.addColorStop(1, "rgba(15, 23, 42, 0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Render stars with gentle twinkling
      for (const star of stars) {
        star.alpha += star.speed * star.direction;
        if (star.alpha > 0.95) {
          star.alpha = 0.95;
          star.direction = -1;
        } else if (star.alpha < 0.15) {
          star.alpha = 0.15;
          star.direction = 1;
        }

        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render slow-moving spacecraft
      shipX += shipSpeed;
      shipY += Math.sin(shipX * 0.005) * 0.15;
      if (shipX > width + 150) {
        shipX = -120;
        shipY = height * (0.15 + Math.random() * 0.3);
      }

      ctx.save();
      ctx.translate(shipX, shipY);
      ctx.globalAlpha = 0.85;

      // Rocket flame / ion propulsion trail
      const flameGrad = ctx.createLinearGradient(-35, 0, 0, 0);
      flameGrad.addColorStop(0, "rgba(56, 189, 248, 0)");
      flameGrad.addColorStop(1, "rgba(56, 189, 248, 0.8)");
      ctx.fillStyle = flameGrad;
      ctx.beginPath();
      ctx.moveTo(-35, 0);
      ctx.lineTo(-4, -2.5);
      ctx.lineTo(-4, 2.5);
      ctx.closePath();
      ctx.fill();

      // Spacecraft body
      ctx.fillStyle = "#e2e8f0";
      ctx.beginPath();
      ctx.moveTo(12, 0);
      ctx.lineTo(-6, -4);
      ctx.lineTo(-4, 0);
      ctx.lineTo(-6, 4);
      ctx.closePath();
      ctx.fill();

      // Solar panel wings
      ctx.fillStyle = "#38bdf8";
      ctx.fillRect(-2, -9, 3, 5);
      ctx.fillRect(-2, 4, 3, 5);

      ctx.restore();
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
