import { createContext } from 'react';

export const LanguageContext = createContext<LanguageContextType>({
	locale: 'en',
	setLocale: () => {
		throw new Error('LanguageContext is not initialized');
	}
});

export type Locale = 'en' | 'de' | 'fr' | 'sw';

export interface LanguageContextType {
	locale: Locale;
	setLocale: (locale: Locale) => void;
}
