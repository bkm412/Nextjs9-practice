import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();

        const page = renderPage((App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        );

        const styleTags = sheet.getStyleElement();

        return { ...page, styleTags };
    }

    render() {
        const {props} = this as any;
        const {styleTags} = props;
        return (
            <html>
            <Head>
                {styleTags}
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        );
    }
}