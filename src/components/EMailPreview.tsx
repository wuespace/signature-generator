import {useAppState} from "../hooks/useAppState";
import {SignatureRenderer} from "./SignatureRenderer";

export function EMailPreview() {
    const userDetails = useAppState();

    return <main>
        Sehr geehrte Damen und Herren,<br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur corporis dignissimos dolore esse impedit itaque magni, modi, non, soluta suscipit unde veritatis. Dignissimos earum illo, ipsam nemo quod ratione?<br />
        <br />
        Mit freundlichen Grüßen,<br />
        {userDetails.name}<br />
        <br />
        <br />
        <SignatureRenderer />
    </main>
}
