import { Link } from '../lib/link';
import { useAppState } from '../hooks/useAppState';
import { ChangeEvent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

export function LinkEditor({ link, index }: { link: Link; index: number }) {
	const { deletePersonalLink, setLink } = useAppState();

	const intl = useIntl();

	const setPrefix = (e: ChangeEvent<HTMLSelectElement>) => {
		const prefix = e.target.value;
		if (prefix === '' || prefix === 'tel:' || prefix === 'mailto:')
			setLink(index, { ...link, prefix });
	};

	return (
		<fieldset>
			<legend>
				{link.platform} (
				<a href="js:void" onClick={() => deletePersonalLink(index)}>
					<FormattedMessage
						id="linkEditor.removeLink"
						defaultMessage="Remove link"
					/>
				</a>
				)
			</legend>
			<label>
				<FormattedMessage
					id="components.LinkEditor.link-type.label"
					defaultMessage="Link Type:"
				/>
				<br />
				<select onChange={setPrefix} value={link.prefix}>
					<option value="">
						<FormattedMessage
							id={'components.link-editor.link-types.normal'}
							description="Select field value for normal links"
							defaultMessage={'Normal'}
						/>
					</option>
					<option value="tel:">
						<FormattedMessage
							id={'components.link-editor.link-types.phone'}
							description="Select field value for phone links"
							defaultMessage={'Phone'}
						/>
					</option>
					<option value="mailto:">
						<FormattedMessage
							id={'components.link-editor.link-types.email'}
							description="Select field value for email links"
							defaultMessage={'Email'}
						/>
					</option>
				</select>
			</label>
			<br />
			<label>
				<FormattedMessage
					id="components.LinkEditor.platform.label"
					defaultMessage="Title:"
				/>
				<br />
				<input
					type="text"
					placeholder={intl.formatMessage({
						id: 'components.LinkEditor.platform.placeholder',
						defaultMessage: 'e.g. Twitter'
					})}
					onChange={e => setLink(index, { ...link, platform: e.target.value })}
					value={link.platform}
				/>
			</label>
			<br />
			<label>
				<FormattedMessage
					id="components.LinkEditor.link.label"
					defaultMessage="Link:"
				/>
				<br />
				<input
					type="text"
					placeholder={intl.formatMessage({
						id: 'components.LinkEditor.link.placeholder',
						defaultMessage: 'e.g. https://twitter.com/username'
					})}
					onChange={e => setLink(index, { ...link, link: e.target.value })}
					value={link.link}
				/>
			</label>
			<br />
		</fieldset>
	);
}
