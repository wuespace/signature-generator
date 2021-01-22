import {UserDetails} from "./user-details";

export function generateSignature({name, role, personalLinks}: UserDetails): string {
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
                    <img alt="WüSpace Logo" style="width:64px"
                         src="data:image/jpeg;filename=wuespace-logo.jpg;base64,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"
                         moz-do-not-send="false">
                </td>
                <td style="padding-left: 1em; vertical-align: top">
                    ${name}<br>
                    <i>${role}, WüSpace e. V.</i>
                    <br>
                    ${personalLinks.length ? `
                        <br>
                        <table>
                            <tbody>
                            ${(personalLinks).map<string>(link => `
                                <tr>
                                    <th align="left">${link.platform}</th>
                                    <td align="left"><a href="${link.prefix + link.link}"
                                                        style="color: rgb(69, 40, 151)">${link.link}</a>
                                    </td>
                                </tr>
                            `).join("\n")}
                            </tbody>
                        </table>
                    ` : ''}
                    <p style="font-size: 0.75em">WüSpace e.V. •
                        Emil-Fischer-Straße 32 •
                        Informatik 8 •
                        97074 Würzburg<br />
                        <br />
                        Vereinsregisternummer: 201239 (Amtsgericht Würzburg)
                    </p>
                    <p>
                        <a href="https://www.wuespace.de" style="color: rgb(69, 40, 151)">https://www.wuespace.de</a>
                    </p>
                    <table style="border-collapse:collapse;" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tbody>
                        <tr>
                            <td style="padding:0;">
                                <table style="background-color:rgb(69,40,151);border-radius:6px;" cellspacing="10"
                                       cellpadding="0" border="0">
                                    <tbody>
                                    <tr>
                                        <td align="center" height="34" width="34"><a
                                                href="https://www.facebook.com/pg/wuespace/"><img
                                                src="https://d1ctrvvfkbyl4b.cloudfront.net/clips/social-icons/facebook-light%402x.png"
                                                alt="Facebook"
                                                style="display:block; outline:0;border:0;padding:0;width:24px;height:auto;"
                                                border="0" width="24"></a>
                                        </td>
                                        <td align="center" height="34" width="34"><a
                                                href="https://www.youtube.com/channel/UC1mwTgqCY5-G1RouptOXnSg"><img
                                                src="https://d1ctrvvfkbyl4b.cloudfront.net/clips/social-icons/youtube-light%402x.png"
                                                alt="YouTube"
                                                style="display:block; outline:0;border:0;padding:0;width:24px;height:auto;"
                                                border="0" width="24"></a>
                                        </td>
                                        <td align="center" height="34" width="34"><a
                                                href="https://twitter.com/WueSpace"><img
                                                src="https://d1ctrvvfkbyl4b.cloudfront.net/clips/social-icons/twitter-light%402x.png"
                                                alt="Twitter"
                                                style="display:block; outline:0;border:0;padding:0;width:24px;height:auto;"
                                                border="0" width="24"></a>
                                        </td>
                                        <td align="center" height="34" width="34"><a
                                                href="https://www.instagram.com/wuespace/"><img
                                                src="https://d1ctrvvfkbyl4b.cloudfront.net/clips/social-icons/instagram-light%402x.png"
                                                alt="Instagram"
                                                style="display:block; outline:0;border:0;padding:0;width:24px;height:auto;"
                                                border="0" width="24"></a>
                                        </td>

                                        <td align="center" height="34" width="34"><a
                                                href="https://www.linkedin.com/company/wuespace/"><img
                                                src="https://d1ctrvvfkbyl4b.cloudfront.net/clips/social-icons/linkedin-light%402x.png"
                                                alt="LinkedIn"
                                                style="display:block; outline:0;border:0;padding:0;width:24px;height:auto;"
                                                border="0" width="24"></a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            </tbody>
        </table>`
}

