import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Nav = () => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, { y: -40, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.1 });
    }, ref);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={ref}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8"
      data-testid="main-nav"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-black/55 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl md:px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary orange-glow">
            <span className="font-display text-lg font-black text-primary-foreground">P</span>
          </div>
          <span className="font-display text-xl font-black tracking-tight">
            PRESENTOR<span className="text-primary">.</span>
          </span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          {[
            ["Features", "features"],
            ["How it works", "how"],
            ["Library", "library"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              data-testid={`nav-${id}`}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </button>
          ))}
        </div>
        <button
          onClick={() => {
            window.location.hash = "auth";
          }}
          data-testid="nav-cta"
          className="rounded-full bg-white/5 px-5 py-2 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-white/10"
        >
          Start creating
        </button>
      </div>
    </nav>
  );
};
