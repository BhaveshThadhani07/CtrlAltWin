import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Check } from "lucide-react";

export const Hero = ({ onGenerate, generating }) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.8 })
        .from(".hero-line", { y: 40, opacity: 0, duration: 1, stagger: 0.12 }, "-=0.4")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-cta", { y: 30, opacity: 0, duration: 0.9 }, "-=0.5");
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const openAuth = () => {
    window.location.hash = "auth";
  };

  return (
    <section
      ref={rootRef}
      className="relative min-h-screen w-full overflow-hidden pt-32 pb-20"
      data-testid="hero-section"
    >
      {/* Cinematic light plate */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/4722576/pexels-photo-4722576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[60vh] bg-[radial-gradient(ellipse_at_top,rgba(255,69,0,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start px-6 md:px-10">
        <div className="hero-eyebrow mb-8 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
          <span className="onair-dot h-2 w-2 rounded-full bg-primary" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Idea in. Presenter video out.
          </span>
        </div>

        <h1 className="font-display text-[3.2rem] font-black leading-[0.95] tracking-tighter text-foreground sm:text-7xl lg:text-[6.5rem]">
          <span className="hero-line block overflow-hidden">Type a prompt.</span>
          <span className="hero-line block overflow-hidden">
            Get a <span className="text-primary text-glow">narrated video.</span>
          </span>
        </h1>

        <p className="hero-sub mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
          No slides to design. No voiceover to record. No rehearsals. Describe your idea and
          watch it become a fully narrated presenter video in seconds.
        </p>

        <div className="hero-cta mt-12 flex flex-col items-start gap-6">
          <button
            onClick={openAuth}
            data-testid="hero-cta"
            className="group flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-mono text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-[0_0_50px_rgba(255,69,0,0.22)] transition-all hover:-translate-y-1 hover:bg-[hsl(16_100%_45%)] hover:shadow-[0_0_70px_rgba(255,69,0,0.38)] active:scale-95"
          >
            Create your first video
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {["No credit card", "Free to start", "Ready in seconds"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
