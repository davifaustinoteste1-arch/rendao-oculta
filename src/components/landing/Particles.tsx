export function Particles({ count = 18 }: { count?: number }) {
  const items = Array.from({ length: count }, (_, i) => i);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((i) => {
        const left = (i * 37) % 100;
        const size = 2 + ((i * 7) % 4);
        const duration = 12 + ((i * 5) % 12);
        const delay = (i * 1.7) % 12;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-neon"
            style={{
              left: `${left}%`,
              bottom: `-${10 + (i % 5) * 6}px`,
              width: size,
              height: size,
              opacity: 0.5,
              boxShadow: "0 0 12px var(--neon)",
              animation: `particle-rise ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
