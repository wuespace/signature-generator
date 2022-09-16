import { LanguageContext, Locale } from '../contexts/language-context';
import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

export function LanguageSelector() {
	const { locale, setLocale } = useContext(LanguageContext);

	return (
		<label>
			<FormattedMessage
				id="languageSelector.label"
				defaultMessage="UI Language:"
			/>
			<br />
			<select
				value={locale}
				onChange={e => setLocale(e.target.value as Locale)}
			>
				<option value="en">
					<FormattedMessage
						id="components.language-selector.options.english"
						defaultMessage="English"
					/>
				</option>
				<option value="de">
					<FormattedMessage
						id="components.language-selector.options.german"
						defaultMessage="German"
					/>
				</option>
			</select>
		</label>
	);
}
