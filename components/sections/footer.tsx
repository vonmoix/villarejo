export function Footer() {
  return (
    <footer className="py-6 border-t border-[var(--border-subtle)]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-[0.8125rem] text-subtle">
          © {new Date().getFullYear()} Manuel Villarejo
        </p>
        <a
          href="https://linkedin.com/in/mvillarejo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.8125rem] text-subtle hover:text-muted transition-colors"
        >
          linkedin.com/in/mvillarejo ↗
        </a>
      </div>
    </footer>
  );
}
