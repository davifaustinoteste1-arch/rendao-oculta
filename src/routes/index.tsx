import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/landing/Reveal";
import { Particles } from "@/components/landing/Particles";
import { EbookMockup } from "@/components/landing/EbookMockup";

const CHECKOUT_URL = "https://pay.kiwify.com.br/0f2LIYx";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Renda Oculta | Renda Extra pelo Celular" },
      {
        name: "description",
        content:
          "Descubra o método para buscar uma renda extra usando apenas o celular. Aprenda estratégias práticas e comece do zero.",
      },
      { property: "og:title", content: "Renda Oculta | Renda Extra pelo Celular" },
      {
        property: "og:description",
        content:
          "Descubra o método para buscar uma renda extra usando apenas o celular. Aprenda estratégias práticas e comece do zero.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Cta({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <a id={id} href={CHECKOUT_URL} className={`btn-neon w-full sm:w-auto ${className}`}>
      {children}
    </a>
  );
}

const FEATURES = [
  {
    icon: "📱",
    title: "Oportunidades pelo celular",
    text: "Descubra diferentes formas de buscar uma renda extra usando seu próprio celular.",
  },
  {
    icon: "⚡",
    title: "Estratégias simples",
    text: "Conteúdo direto, sem excesso de teoria e pensado para quem está começando.",
  },
  {
    icon: "🏠",
    title: "Trabalhe de onde estiver",
    text: "Aprenda possibilidades que podem ser exploradas de casa e no seu tempo livre.",
  },
  {
    icon: "🚀",
    title: "Comece do zero",
    text: "Não é necessário ser especialista para começar a entender o método.",
  },
];

const FAQ = [
  {
    q: "O que é o Renda Oculta?",
    a: "É um material digital que reúne estratégias e possibilidades para quem quer buscar uma renda extra utilizando o celular.",
  },
  {
    q: "Preciso ter experiência para começar?",
    a: "Não. O conteúdo foi pensado de forma direta para quem está começando do zero.",
  },
  {
    q: "Preciso de computador?",
    a: "Não é necessário. Todo o conteúdo foi estruturado pensando em quem usa apenas o celular.",
  },
  {
    q: "Posso acessar pelo celular?",
    a: "Sim. O material é digital e pode ser lido no celular, tablet ou computador.",
  },
  {
    q: "Como recebo o acesso?",
    a: "O acesso é digital e liberado logo após a confirmação da compra.",
  },
  {
    q: "É uma promessa de ganho garantido?",
    a: "Não. O Renda Oculta apresenta estratégias e possibilidades de renda extra. Os resultados dependem da aplicação, dedicação, contexto e outros fatores individuais. Não existe garantia de ganhos.",
  },
];

function Index() {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-[#050505]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden px-5 pt-16 pb-20 sm:pt-24 md:pb-28">
        <div aria-hidden className="grid-lines radial-fade absolute inset-0 -z-20 opacity-60" />
        <div
          aria-hidden
          className="animate-pulse-glow absolute top-[-20%] left-1/2 -z-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--neon) 30%, transparent), transparent 70%)",
          }}
        />
        <Particles count={22} />

        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <Reveal>
              <span className="surface-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold tracking-[0.22em] text-neon uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                Descubra uma nova possibilidade de renda
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl leading-[0.95] font-bold sm:text-5xl lg:text-6xl">
                Descubra o método para ganhar
                <span className="text-neon-glow mt-2 block text-5xl sm:text-6xl lg:text-7xl">
                  até R$5.000/mês
                </span>
                <span className="block">pelo celular</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg md:mx-0">
                Aprenda formas práticas de criar uma renda extra usando apenas o seu celular,
                trabalhando de casa e começando do zero.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col items-center gap-3 md:items-start">
                <Cta>Quero descobrir o método</Cta>
                <p className="text-sm text-muted-foreground">Comece hoje pelo celular.</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="order-first md:order-none">
            <EbookMockup className="mx-auto flex justify-center" />
          </Reveal>
        </div>
      </section>

      {/* CURIOSIDADE */}
      <section className="relative overflow-hidden border-y border-border/60 px-5 py-20 md:py-28">
        <div
          aria-hidden
          className="animate-shine pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg]"
          style={{
            background:
              "linear-gradient(90deg, transparent, color-mix(in oklab, var(--neon) 10%, transparent), transparent)",
          }}
        />
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
              E se o seu celular pudesse ser mais do que uma ferramenta?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-base text-muted-foreground sm:text-lg">
              Todos os dias, milhões de pessoas passam horas no celular. Poucas sabem transformar
              esse tempo em oportunidades reais de renda extra.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="surface-panel mt-10 rounded-2xl px-6 py-8 font-display text-xl leading-relaxed tracking-wide text-foreground uppercase sm:text-2xl">
              Seu celular já está nas suas mãos.{" "}
              <span className="text-neon-glow">
                Agora falta descobrir como usá-lo de forma estratégica.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* O QUE VOCÊ VAI DESCOBRIR */}
      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-3xl font-bold sm:text-4xl">
              O que existe dentro do <span className="text-neon-glow">Renda Oculta</span>?
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 90}>
                <article className="group h-full rounded-2xl border border-border bg-[#080808] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-neon/50 hover:glow-soft">
                  <div className="text-2xl">{f.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold tracking-wide">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section className="relative overflow-hidden px-5 py-20 md:py-28">
        <div aria-hidden className="grid-lines radial-fade absolute inset-0 -z-10 opacity-40" />
        <Particles count={12} />
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="text-center md:text-left">
            <Reveal>
              <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
                Você não precisa de mais um motivo para esperar.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 text-base text-muted-foreground sm:text-lg">
                Você já tem uma ferramenta poderosa nas mãos. O próximo passo é aprender a enxergar
                as oportunidades que podem existir por trás dela.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 flex justify-center md:justify-start">
                <Cta>Quero começar agora</Cta>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="relative mx-auto w-full max-w-xs">
              <div className="surface-panel relative rounded-[2rem] p-4">
                <div className="rounded-[1.5rem] bg-black p-4">
                  <div className="flex items-center justify-between text-[10px] tracking-widest text-muted-foreground uppercase">
                    <span>Notificações</span>
                    <span className="text-neon">$</span>
                  </div>
                  {[1, 0.6, 0.3].map((o, i) => (
                    <div
                      key={i}
                      style={{ opacity: o }}
                      className="mt-3 flex items-center gap-3 rounded-xl border border-neon/20 bg-[#0b0f0b] px-3 py-2.5"
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-neon/90 text-sm text-black">
                        $
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-semibold">Venda aprovada!</p>
                        <p className="text-[11px] text-muted-foreground">Valor: R$ ••,••</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OFERTA */}
      <section className="relative overflow-hidden border-y border-border/60 bg-black px-5 py-20 md:py-28">
        <div
          aria-hidden
          className="animate-pulse-glow absolute bottom-[-30%] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--neon) 28%, transparent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <Reveal className="order-first">
            <EbookMockup className="mx-auto flex justify-center" float={false} />
          </Reveal>
          <div className="text-center md:text-left">
            <Reveal>
              <span className="inline-flex rounded-full border border-neon/50 px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-neon uppercase">
                Oferta especial
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                Desbloqueie o <span className="text-neon-glow">Renda Oculta</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <ul className="mx-auto mt-8 max-w-md space-y-3 text-left">
                {[
                  "Acesso ao conteúdo completo",
                  "Estratégias para buscar renda extra pelo celular",
                  "Conteúdo direto e prático",
                  "Acesso imediato após a compra",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-neon/60 text-[11px] text-neon">
                      ✓
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-col items-center gap-3 md:items-start">
                <Cta className="text-base sm:text-lg">Quero acessar o Renda Oculta</Cta>
                <p className="text-xs tracking-widest text-muted-foreground uppercase">
                  Pagamento seguro • Acesso digital
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center text-3xl font-bold sm:text-4xl">Ainda tem dúvidas?</h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 60}>
                <details className="group rounded-xl border border-border bg-[#080808] px-5 py-4 transition-colors duration-300 open:border-neon/40">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold sm:text-base">
                    {item.q}
                    <span className="text-neon transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-black px-5 py-24 md:py-32">
        <Particles count={16} />
        <div
          aria-hidden
          className="animate-pulse-glow absolute top-1/2 left-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--neon) 24%, transparent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <Reveal>
              <h2 className="text-3xl leading-tight font-bold sm:text-5xl">
                Seu celular já está <span className="text-neon-glow">nas suas mãos.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 text-base text-muted-foreground sm:text-lg">
                Agora você decide se vai continuar apenas consumindo conteúdo ou começar a descobrir
                novas possibilidades.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 flex justify-center md:justify-start">
                <Cta>Quero descobrir o Renda Oculta</Cta>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140} className="order-first md:order-none">
            <EbookMockup className="mx-auto flex justify-center" />
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border/60 px-5 py-10 text-center">
        <p className="text-xs leading-relaxed text-muted-foreground">
          Renda Oculta • Produto digital. Este material apresenta estratégias e possibilidades de
          renda extra. Os resultados dependem da aplicação e do contexto individual. Não há garantia
          de ganhos.
        </p>
      </footer>

      {/* CTA fixo mobile */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-neon/25 bg-black/85 px-4 py-3 backdrop-blur-md transition-all duration-300 md:hidden ${
          showBar ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
        }`}
      >
        <a href={CHECKOUT_URL} className="btn-neon w-full py-3.5 text-sm">
          Quero acessar
        </a>
      </div>
    </main>
  );
}
