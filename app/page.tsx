import { Capabilities, Footer, Header, Hero, HighlightStrip } from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <BackgroundGlow />
      <Header />
      <Hero />
      <Capabilities />
      <HighlightStrip />
      <Footer />
    </main>
  );
}

function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-20 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/25 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white blur-3xl" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-200/50 blur-3xl" />
    </div>
  );
}
