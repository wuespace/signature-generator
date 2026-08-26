import { UserDetails } from './user-details';

export function generateSignature({
	name,
	role,
	personalLinks
}: UserDetails): string {
	return `
        <style>
            a {
                color: rgb(69, 40, 151);
            }
        </style>
        <hr>
        <br>
        <table>
            <tbody>
            <tr>
                <td style="vertical-align: top;">
                  <img width=64px alt="WüSpace" src="https://wiki.wuespace.de/attachments/205">
                </td>
                <td style="padding-left: 1em; vertical-align: top">
                    ${name}<br>
                    <i>${role}, WüSpace e. V.</i>
                    <br>
                    ${
											personalLinks.length
												? `
                        <br>
                        <table>
                            <tbody>
                            ${personalLinks
															.map<string>(
																link => `
                                <tr>
                                    <th align="left">${link.platform}</th>
                                    <td align="left"><a href="${
																			link.prefix + link.link
																		}"
                                                        style="color: rgb(69, 40, 151)">${
																													link.link
																												}</a>
                                    </td>
                                </tr>
                            `
															)
															.join('\n')}
                            </tbody>
                        </table>
                    `
												: ''
										}
                    <p style="font-size: 0.75em">WüSpace e.V. •
                        Emil-Fischer-Straße 32 •
                        97074 Würzburg<br />
                        <br />
                        Vereinsregisternummer: 201239 (Amtsgericht Würzburg)
                    </p>
                    <p>
                        <a href="https://go.wuespace.de" style="color: rgb(69, 40, 151)">https://go.wuespace.de</a>
                    </p>
                    <table style="border-collapse:collapse;margin-top:10px;" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                        <tr>
                            <td align="center" style="background-color:rgb(69,40,151); border-radius:4px; padding: 4px 8px;">
                                <a href="https://go.wuespace.de/linkedin" style="color:white; text-decoration:none; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; font-size:11px; font-weight:bold; line-height:1;">LinkedIn</a>
                            </td>
                            <td style="width:5px;"></td>
                            <td align="center" style="background-color:rgb(69,40,151); border-radius:4px; padding: 4px 8px;">
                                <a href="https://go.wuespace.de/instagram" style="color:white; text-decoration:none; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; font-size:11px; font-weight:bold; line-height:1;">Instagram</a>
                            </td>
                            <td style="width:5px;"></td>
                            <td align="center" style="background-color:rgb(69,40,151); border-radius:4px; padding: 4px 8px;">
                                <a href="https://go.wuespace.de/mastodon" style="color:white; text-decoration:none; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; font-size:11px; font-weight:bold; line-height:1;">Mastodon</a>
                            </td>
                            <td style="width:5px;"></td>
                            <td align="center" style="background-color:rgb(69,40,151); border-radius:4px; padding: 4px 8px;">
                                <a href="https://go.wuespace.de/youtube" style="color:white; text-decoration:none; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; font-size:11px; font-weight:bold; line-height:1;">YouTube</a>
                            </td>
                            <td style="width:5px;"></td>
                            <td align="center" style="background-color:rgb(69,40,151); border-radius:4px; padding: 4px 8px;">
                                <a href="https://go.wuespace.de/bluesky" style="color:white; text-decoration:none; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; font-size:11px; font-weight:bold; line-height:1;">Bluesky</a>
                            </td>
                            <td style="width:5px;"></td>
                            <td align="center" style="background-color:rgb(69,40,151); border-radius:4px; padding: 4px 8px;">
                                <a href="https://go.wuespace.de/github" style="color:white; text-decoration:none; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; font-size:11px; font-weight:bold; line-height:1;">GitHub</a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            </tbody>
        </table>`;
}
