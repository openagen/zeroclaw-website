const capabilities = [
  {
    title: "Threat Mapping",
    description: "Continuously map attacker infrastructure, behavior chains, and campaign overlap in one unified panel."
  },
  {
    title: "Agentic Investigations",
    description: "Turn intent into automated investigations that gather context, enrich IOC data, and produce actionable findings."
  },
  {
    title: "Signal to Action",
    description: "Convert noisy events into prioritized response tasks for analysts and engineering workflows."
  }
];

const highlights = [
  "实时威胁检测",
  "多源情报融合",
  "自动化报告生成",
  "跨团队协作流"
];

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
      <div className="text-lg font-semibold tracking-tight">ZeroClaw</div>
      <a
        href="https://github.com/theonlyhennygod/zeroclaw"
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium transition hover:border-ink hover:bg-ink hover:text-white"
      >
        GitHub
      </a>
    </header>
  );
}

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12 sm:pt-24">
      <div className="max-w-4xl">
        <p className="mb-5 inline-flex rounded-full border border-ink/15 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
          ZeroClaw Platform
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-6xl">
          让安全团队用 AI
          <br />
          直接驱动情报与响应
        </h1>
        <p className="mt-6 max-w-2xl text-base text-ink/70 sm:text-lg">
          ZeroClaw 是面向现代安全团队的智能情报与自动化响应平台，融合数据、分析与协作，
          让每次告警都变成可执行的动作。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/theonlyhennygod/zeroclaw"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            查看源码
          </a>
          <a
            href="#capabilities"
            className="rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold transition hover:border-ink"
          >
            了解能力
          </a>
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <section id="capabilities" className="mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="grid gap-4 sm:grid-cols-3">
        {capabilities.map((item) => (
          <article key={item.title} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-halo">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function HighlightStrip() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="rounded-3xl border border-ink/10 bg-ink p-8 text-white shadow-halo">
        <p className="text-xs uppercase tracking-[0.18em] text-white/70">Core Modules</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {highlights.map((item) => (
            <span key={item} className="rounded-full border border-white/30 px-4 py-2 text-sm">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 pb-10 text-sm text-ink/60">
      <p>© {new Date().getFullYear()} ZeroClaw</p>
      <p>Built with Next.js + Tailwind CSS</p>
    </footer>
  );
}
