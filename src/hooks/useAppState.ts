import create, {State} from "zustand";
import {UserDetails} from "../lib/user-details";
import {Link} from "../lib/link";

interface AppState extends State, UserDetails {
    setName(name: string): void;

    setRole(name: string): void;

    addPersonalLink(): void;

    deletePersonalLink(index: number): void;

    setLink(index: number, personalLink: Link): void;
}

export const useAppState = create<AppState>((set, get) => ({
    name: 'Max Mustermann',
    role: 'Tester',
    personalLinks: [
        {
            platform: 'Mail',
            prefix: 'mailto:',
            link: 'max.mustermann@wuespace.de'
        },
        {
            platform: 'Mobil',
            prefix: 'tel:',
            link: '+49 1111 11111111'
        }
    ],

    addPersonalLink() {
        set({
            personalLinks: [
                ...get().personalLinks,
                {
                    platform: 'Website',
                    link: 'https://www.wuespace.de',
                    prefix: '',
                }
            ]
        })
    },
    deletePersonalLink(index: number) {
        const links = get().personalLinks.slice();
        links.splice(index, 1)
        set({personalLinks: links})
    },
    setLink(index: number, personalLink: Link) {
        const links = get().personalLinks.slice();
        links.splice(index, 1, personalLink);
        set({personalLinks: links})
    },
    setName(name: string) {
        set({name});
    },
    setRole(role: string) {
        set({role});
    }
}))
