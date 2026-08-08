import ebook from "@/assets/capa_do_ebook.png.asset.json";
import selo from "@/assets/selo_preco.png.asset.json";

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
        src={ebook.url}
        alt="Capa do ebook Renda Oculta"
        loading="lazy"
        className={`relative w-full max-w-[420px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] ${
          float ? "animate-float-slow" : ""
        }`}
        style={{ transform: "perspective(1200px) rotateY(-8deg) rotateX(2deg)" }}
      />
      <img
        src={selo.url}
        alt="Por apenas 19,90"
        loading="lazy"
        className="animate-badge-float animate-badge-glow pointer-events-none absolute -bottom-2 -left-4 z-10 h-[22%] w-auto md:-bottom-3 md:-left-6 md:h-[20%]"
        style={{ maxHeight: "22%" }}
      />
    </div>
  );
}
