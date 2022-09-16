# WüSpace Email Signature Generator

This is a simple tool to generate a WüSpace email signature. It is accessible at
https://signature-generator.wuespace.de .

## Development

### Prerequisites

- [Node.js](https://nodejs.org/en/) (>= 16.0.0)

### Setup

1. Clone the repository
2. Install dependencies: `npm ci`
3. Start the development server: `npm start`
4. Open the app in your browser: http://localhost:3000
5. Make changes to the code and see the changes in the browser
6. When you are done, build the app: `npm run build`
7. The built app is now in the `build` folder

### Localization

This project uses `react-intl` for localization.

#### Adding strings

1. Use the string in your source code (e.g., using
   `<FormattedMessage id="myString" defaultMessage="Hello World" />`)
2. Run `npm run i18n:extract`. This will extract all strings from the source
   code and add them to the `lang/en.json` file.

#### Translating strings

Translate the strings in the `lang` folder. You can use the `en.json` file as a
template.

The project also includes a project file for
[BabelEdit](https://www.codeandweb.com/babeledit), which you can use to
translate the strings.

#### Compiling translations

Run `npm run i18n:compile`. This will compile the translations into the
`src/locales` folder (which doesn't get committed to the repository).

#### Adding a new language

1. Add the language to the `Locale` type in `src/contexts/language-context.tsx`
2. Copy the `en.json` file in `lang` to your corresponding language code (e.g.,
   `de.json` for German)
3. Run `npm run i18n:compile` to compile the translations
4. Add the language to the `MESSAGES: Record<Locale, any>` object in
   `src/App.tsx`
5. Add corresponding language options to the `LanguageSelector` component in
   `src/components/LanguageSelector.tsx`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.
