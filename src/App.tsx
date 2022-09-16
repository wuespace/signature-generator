import React, { useState } from 'react';
import { EMailPreview } from './components/EMailPreview';
import { LanguageContext, Locale } from './contexts/language-context';
import { Editor } from './components/Editor';
import { IntlProvider } from 'react-intl';
import deMessages from './locales/de.json';
import enMessages from './locales/en.json';

const DEFAULT_LOCALE: Locale = window.navigator.language.split(
	'-'
)[0] as Locale;
const MESSAGES: Record<Locale, any> = {
	en: enMessages,
	de: deMessages
};

function App() {
	const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

	return (
		<LanguageContext.Provider value={{ locale, setLocale }}>
			<IntlProvider
				locale={locale}
				defaultLocale={DEFAULT_LOCALE}
				messages={MESSAGES[locale]}
			>
				<div id="wrapper">
					<Editor />
					<EMailPreview />
				</div>
			</IntlProvider>
		</LanguageContext.Provider>
	);
}

export default App;
