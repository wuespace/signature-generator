import { useAppState } from '../hooks/useAppState';
import { LinkEditor } from './LinkEditor';
import { generateSignature } from '../lib/generate-signature';

export function Editor() {
	const state = useAppState();

	const copyHTML = async () => {
		await navigator.clipboard.writeText(generateSignature(state));
		alert(
			'Signature copied to clipboard. You can now paste it into your email client.'
		);
	};

	return (
		<aside>
			<form
				onSubmit={e => {
					e.preventDefault();
					copyHTML();
				}}
			>
				<fieldset>
					<legend>Persönliche Daten</legend>
					<label>
						Name
						<br />
						<input
							type="text"
							placeholder={'Fridolin Freilich'}
							onChange={e => state.setName(e.target.value)}
							value={state.name}
						/>
					</label>
					<br />
					<label>
						Rolle
						<br />
						<input
							type="text"
							placeholder={'Fridolin Freilich'}
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
						Add a link
					</button>
				</fieldset>
				<button type="submit">Copy Signature HTML code</button>
			</form>
		</aside>
	);
}
