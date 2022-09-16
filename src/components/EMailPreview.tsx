import { useAppState } from '../hooks/useAppState';
import { SignatureRenderer } from './SignatureRenderer';
import { FormattedMessage } from 'react-intl';

export function EMailPreview() {
	const userDetails = useAppState();

	return (
		<main>
			<FormattedMessage
				id="components.EMailPreview.salutation"
				defaultMessage="Dear ladies and gentlemen,"
			/>
			<br />
			<br />
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
			consequatur corporis dignissimos dolore esse impedit itaque magni, modi,
			non, soluta suscipit unde veritatis. Dignissimos earum illo, ipsam nemo
			quod ratione?
			<br />
			<br />
			<FormattedMessage
				id="components.EMailPreview.signature"
				defaultMessage="Kind regards,"
			/>
			<br />
			{userDetails.name}
			<br />
			<br />
			<br />
			<SignatureRenderer />
		</main>
	);
}
