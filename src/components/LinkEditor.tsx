import { Link } from '../lib/link';
import { useAppState } from '../hooks/useAppState';
import { ChangeEvent } from 'react';

export function LinkEditor({ link, index }: { link: Link; index: number }) {
	const { deletePersonalLink, setLink } = useAppState();

	const setPrefix = (e: ChangeEvent<HTMLSelectElement>) => {
		const prefix = e.target.value;
		if (prefix === '' || prefix === 'tel:' || prefix === 'mailto:')
			setLink(index, { ...link, prefix });
	};

	return (
		<fieldset>
			<legend>{link.platform}</legend>
			<button type="button" onClick={() => deletePersonalLink(index)}>
				Delete
			</button>
			<br />
			<label>
				Typ:
				<br />
				<select onChange={setPrefix} value={link.prefix}>
					<option value="">Normal</option>
					<option value="tel:">Telefon</option>
					<option value="mailto:">E-Mail</option>
				</select>
			</label>
			<br />
			<label>
				Titel
				<br />
				<input
					type="text"
					placeholder={'Website'}
					onChange={e => setLink(index, { ...link, platform: e.target.value })}
					value={link.platform}
				/>
			</label>
			<br />
			<label>
				Link
				<br />
				<input
					type="text"
					placeholder={'https://www.example.com'}
					onChange={e => setLink(index, { ...link, link: e.target.value })}
					value={link.link}
				/>
			</label>
			<br />
		</fieldset>
	);
}
