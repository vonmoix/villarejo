"use client";

import { useEffect, useRef, useState } from "react";

export function About() {
  const videoRef   = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">

        <p className="text-ink text-[1.0625rem] font-medium max-w-[60ch] mb-12 leading-[1.78]">
          Bilingual (English · Spanish native) with 19+ years leading distributed
          teams across Europe and APAC. I bring the same curiosity to AI&#8209;powered
          operations and continuous learning as I do to enterprise transformation.
        </p>

        <div className="grid gap-16 md:gap-24 md:grid-cols-2 mb-16">
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

        {/* Video — after content so it doesn't block the text */}
        <div
          className={`relative w-full overflow-hidden rounded-xl aspect-[16/9] md:aspect-[21/8] bg-surface2 transition-all duration-300${
            !videoLoaded ? " animate-pulse" : ""
          }`}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/video-poster.jpg"
            aria-label="Landscape video"
            onCanPlay={() => setVideoLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/video.webm" type="video/webm" />
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/70" />
        </div>

      </div>
    </section>
  );
}
