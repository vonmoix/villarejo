import Image from "next/image";
import landscapeImg from "@/images/land.jpg";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">

        {/* Landscape image */}
        <div className="relative w-full overflow-hidden rounded-xl mb-16"
             style={{ aspectRatio: "21 / 8" }}>
          <Image
            src={landscapeImg}
            alt="Rolling green hills and forest landscape"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 1100px"
            priority
          />
          {/* subtle dark vignette at bottom to blend into page */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/70" />
          {/* faint green tint to reinforce the palette */}
          <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply" />
        </div>

        <div className="grid gap-16 md:gap-24 md:grid-cols-2">
          {/* languages */}
          <div>
            <p className="font-mono text-[0.6875rem] text-accent-hi tracking-[0.12em] uppercase mb-3">
              Languages
            </p>
            <h2
              className="font-display font-bold text-ink tracking-[-0.022em] leading-[1.07] mb-5"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Communication
            </h2>
            <div>
              {[
                { lang: "English", level: "Full Professional" },
                { lang: "Spanish", level: "Native" },
              ].map(({ lang, level }, i) => (
                <div
                  key={lang}
                  className={`flex items-center justify-between py-4
                    ${i === 0 ? "border-t border-[var(--border-subtle)]" : ""}
                    border-b border-[var(--border-subtle)]`}
                >
                  <span className="text-base font-medium text-ink">{lang}</span>
                  <span className="font-mono text-[0.6875rem] tracking-[0.07em] uppercase text-subtle">
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* interests */}
          <div>
            <p className="font-mono text-[0.6875rem] text-accent-hi tracking-[0.12em] uppercase mb-3">
              Interests
            </p>
            <h2
              className="font-display font-bold text-ink tracking-[-0.022em] leading-[1.07] mb-5"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Beyond Work
            </h2>
            <div className="space-y-4 text-[0.9375rem] text-muted leading-[1.78]">
              <p>
                AI and automation — applying agentic tools and workflows to
                simplify everyday life.
              </p>
              <p>Travel, sea, and adventure with two young children.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
