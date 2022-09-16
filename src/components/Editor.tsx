import { useAppState } from '../hooks/useAppState';
import { LinkEditor } from './LinkEditor';
import { generateSignature } from '../lib/generate-signature';
import { FormattedMessage, useIntl } from 'react-intl';
import { LanguageSelector } from './LanguageSelector';

export function Editor() {
	const state = useAppState();
	const intl = useIntl();

	const copyHTML = async () => {
		await navigator.clipboard.writeText(generateSignature(state));
		alert(
			intl.formatMessage({
				id: 'components.editor.copied-alert.message',
				defaultMessage:
					'Signature copied to clipboard. You can now paste it into your email client.'
			})
		);
	};

	return (
		<aside>
			<form
				onSubmit={e => {
					e.preventDefault();
					copyHTML().finally();
				}}
			>
				<fieldset>
					<legend>
						<FormattedMessage
							id="components.editor.preferences.legend"
							defaultMessage="Preferences"
						/>
					</legend>
					<LanguageSelector />
				</fieldset>
				<fieldset>
					<legend>
						<FormattedMessage
							id="components.editor.personal-data"
							defaultMessage="Personal Data"
						/>
					</legend>
					<label>
						<FormattedMessage
							id="components.editor.name.label"
							defaultMessage="Name & Pronouns"
						/>
						<br />
						<input
							type="text"
							placeholder={intl.formatMessage({
								id: 'components.editor.name.placeholder',
								defaultMessage: 'Peter Parker (he/him)'
							})}
							onChange={e => state.setName(e.target.value)}
							value={state.name}
						/>
					</label>
					<br />
					<label>
						<FormattedMessage
							id="components.editor.role.label"
							defaultMessage="Role at WüSpace"
						/>
						<br />
						<input
							type="text"
							placeholder={intl.formatMessage({
								id: 'components.editor.role.placeholder',
								defaultMessage: 'Developer'
							})}
							onChange={e => state.setRole(e.target.value)}
							value={state.role}
						/>
					</label>
				</fieldset>
				<fieldset>
					<legend>Links</legend>
					{state.personalLinks.map((link, index) => (
						<LinkEditor link={link} index={index} key={index} />
					))}
					<button type="button" onClick={state.addPersonalLink}>
						<FormattedMessage
							id="components.editor.add-link"
							defaultMessage="Add Link"
						/>
					</button>
				</fieldset>
				<button type="submit">
					<FormattedMessage
						id="components.editor.copy-html"
						defaultMessage="Copy HTML"
					/>
				</button>
			</form>
		</aside>
	);
}
