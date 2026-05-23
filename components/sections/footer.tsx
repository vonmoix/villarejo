export function Footer() {
  return (
    <footer className="py-6 border-t border-[var(--border-subtle)]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-[0.8125rem] text-subtle">© 2026 Manuel Villarejo</p>
        <nav className="flex gap-5">
          {["Privacy", "Terms", "DMCA"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[0.8125rem] text-subtle hover:text-muted transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
