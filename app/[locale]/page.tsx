import { useTranslations } from 'next-intl';
import { type Locale } from '@/i18n';
import LanguageSwitcherClient from '@/components/LanguageSwitcherClient';

const providers = [
  "OpenAI", "Anthropic", "Claude", "Gemini", "Mistral", "Ollama",
  "Telegram", "Discord", "Slack", "Local Deployment"
];

export default function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const t = useTranslations();

  const features = [
    {
      key: 'fast',
      icon: "⚡"
    },
    {
      key: 'lightweight',
      icon: "📦"
    },
    {
      key: 'pluggable',
      icon: "🔌"
    },
    {
      key: 'safe',
      icon: "🔒"
    },
    {
      key: 'multiplatform',
      icon: "🌐"
    },
    {
      key: 'zero',
      icon: "🚀"
    }
  ];

  const architecture = ['core', 'adapter', 'channel'];

  const comparison = [
    {
      name: "ZeroClaw",
      key: "zeroclaw" as const
    },
    {
      name: "OpenClaw",
      key: "openclaw" as const
    }
  ];

  const comparisonData: Record<string, {startup: string; size: string; memory: string; safety: string}> = {
    zeroclaw: {
      startup: "< 10ms",
      size: "3.4MB",
      memory: t('comparison.items.zeroclaw.memory'),
      safety: t('comparison.items.zeroclaw.safety')
    },
    openclaw: {
      startup: "~500ms",
      size: "~150MB",
      memory: t('comparison.items.openclaw.memory'),
      safety: t('comparison.items.openclaw.safety')
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="font-semibold text-lg">ZeroClaw</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-8 text-sm text-gray-600">
              <a href="#features" className="hover:text-black transition-colors">{t('nav.features')}</a>
              <a href="#architecture" className="hover:text-black transition-colors">{t('nav.architecture')}</a>
              <a href="#comparison" className="hover:text-black transition-colors">{t('nav.comparison')}</a>
              <a href="https://github.com/openagen/zeroclaw" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">{t('nav.github')}</a>
            </div>
            <LanguageSwitcherClient />
          </div>
          <a
            href="https://github.com/openagen/zeroclaw"
            target="_blank"
            rel="noreferrer"
            className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            {t('nav.getStarted')}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
              {t('hero.badge')}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/openagen/zeroclaw"
                target="_blank"
                rel="noreferrer"
                className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                {t('hero.visitGithub')}
              </a>
              <a
                href="#features"
                className="border border-gray-200 px-8 py-3 rounded-lg font-medium hover:border-gray-300 transition-colors"
              >
                {t('hero.learnMore')}
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-gray-100">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{t('stats.startup')}</div>
              <div className="text-sm text-gray-600">{t('stats.startupLabel')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{t('stats.size')}</div>
              <div className="text-sm text-gray-600">{t('stats.sizeLabel')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{t('stats.providers')}</div>
              <div className="text-sm text-gray-600">{t('stats.providersLabel')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('features.title')}</h2>
            <p className="text-gray-600 text-lg">{t('features.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.key}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{t(`features.items.${feature.key}.title`)}</h3>
                <p className="text-gray-600">{t(`features.items.${feature.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('architecture.title')}</h2>
            <p className="text-gray-600 text-lg">{t('architecture.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {architecture.map((layer) => (
              <div key={layer} className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">{t(`architecture.layers.${layer}.title`)}</h3>
                <ul className="space-y-2">
                  {(t.raw(`architecture.layers.${layer}.items`) as string[]).map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('platforms.title')}</h2>
            <p className="text-gray-600 text-lg">{t('platforms.subtitle')}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {providers.map((provider) => (
              <span
                key={provider}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm"
              >
                {provider}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('comparison.title')}</h2>
            <p className="text-gray-600 text-lg">{t('comparison.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {comparison.map((item) => (
              <div
                key={item.key}
                className={`p-6 rounded-xl border ${
                  item.name === "ZeroClaw"
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white"
                }`}
              >
                <h3 className="text-xl font-semibold mb-4">{item.name}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className={item.name === "ZeroClaw" ? "text-gray-300" : "text-gray-600"}>
                      {t('comparison.labels.startup')}
                    </span>
                    <span className="font-medium">{comparisonData[item.key].startup}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={item.name === "ZeroClaw" ? "text-gray-300" : "text-gray-600"}>
                      {t('comparison.labels.size')}
                    </span>
                    <span className="font-medium">{comparisonData[item.key].size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={item.name === "ZeroClaw" ? "text-gray-300" : "text-gray-600"}>
                      {t('comparison.labels.memory')}
                    </span>
                    <span className="font-medium">{comparisonData[item.key].memory}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={item.name === "ZeroClaw" ? "text-gray-300" : "text-gray-600"}>
                      {t('comparison.labels.safety')}
                    </span>
                    <span className="font-medium">{comparisonData[item.key].safety}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-gray-600 text-lg mb-8">
            {t('cta.description')}
          </p>
          <a
            href="https://github.com/openagen/zeroclaw"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            {t('cta.button')}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">Z</span>
            </div>
            <span className="font-medium">ZeroClaw</span>
          </div>
          <p className="text-sm text-gray-600">
            {t('footer.license')} • {t('footer.builtWith')}
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="https://github.com/openagen/zeroclaw" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
              GitHub
            </a>
            <a href="https://github.com/openagen/zeroclaw/stargazers" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
              {t('footer.star')}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
