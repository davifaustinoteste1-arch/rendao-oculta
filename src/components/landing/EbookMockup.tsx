import ebook from "@/assets/capa_do_ebook.png";
import selo from "@/assets/selo_preco.png";

export function EbookMockup({
  className = "",
  float = true,
}: {
  className?: string;
  float?: boolean;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden
        className="animate-pulse-glow absolute inset-0 -z-10 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 55%, color-mix(in oklab, var(--neon) 45%, transparent), transparent 65%)",
        }}
      />
      <img
       src={ebook}
        alt="Capa do ebook Renda Oculta"
        loading="lazy"
        className={`relative w-full max-w-[420px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] ${
          float ? "animate-float-slow" : ""
        }`}
        style={{ transform: "perspective(1200px) rotateY(-8deg) rotateX(2deg)" }}
      />
      <img
        src={selo}
        alt="Por apenas 19,90"
        loading="lazy"
        className="animate-badge-float animate-badge-glow pointer-events-none absolute -bottom-[8%] -left-[3%] z-10 h-[24%] w-auto md:-bottom-[10%] md:-left-[4%] md:h-[26%]"
      />
    </div>
  );
}
