"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 48 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    opacity: 0.06 + i * 0.016,
    width: 0.4 + i * 0.028,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Decorative background paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="#F59E0B"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0.3, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [path.opacity * 0.6, path.opacity * 1.5, path.opacity * 0.6],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 22 + path.id * 0.4,
              repeat: Infinity,
              ease: "linear",
              delay: path.id * 0.15,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

interface HeroPathsProps {
  firstName: string;
  lastName: string;
  eyebrow?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function HeroPaths({
  firstName,
  lastName,
  eyebrow,
  subtitle,
  children,
}: HeroPathsProps) {
  const renderWord = (word: string, baseDelay: number) =>
    word.split("").map((letter, i) => (
      <motion.span
        key={i}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: baseDelay + i * 0.028,
          type: "spring",
          stiffness: 130,
          damping: 22,
        }}
        className="inline-block"
      >
        {letter}
      </motion.span>
    ));

  return (
    <div className="relative min-h-svh w-full flex flex-col justify-end overflow-hidden bg-bg pb-24 md:pb-32">
      {/* grain */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.032]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* animated paths */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* content */}
      <div className="relative z-10 container mx-auto max-w-[1100px] px-6 md:px-8">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-[0.6875rem] tracking-[0.12em] uppercase text-accent mb-5"
          >
            {eyebrow}
          </motion.p>
        )}

        <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[0.92] text-ink mb-5"
            style={{ fontSize: "clamp(4rem, 11vw, 9.5rem)" }}>
          <span className="block">{renderWord(firstName, 0.2)}</span>
          <span className="block">{renderWord(lastName, 0.35)}</span>
        </h1>

        {/* amber rule */}
        <motion.div
          className="w-11 h-0.5 bg-accent mb-5"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.75 }}
            className="font-display font-normal text-muted tracking-[-0.01em] mb-6"
            style={{ fontSize: "clamp(1rem, 2.2vw, 1.45rem)" }}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.9 }}
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* scroll whisper */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-6 md:left-8 hidden sm:flex items-center gap-3
                   font-mono text-[0.6875rem] tracking-[0.06em] uppercase text-subtle"
      >
        <span className="block w-7 h-px bg-subtle" />
        scroll
      </motion.span>
    </div>
  );
}
