'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { locales, localeNames, type Locale } from '@/i18n';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale() as Locale;

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
            locale === loc
              ? 'bg-black text-white'
              : 'text-gray-600 hover:text-black hover:bg-gray-100'
          }`}
        >
          {localeNames[loc]}
        </button>
      ))}
    </div>
  );
}
