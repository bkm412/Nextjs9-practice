import * as React from 'react'
import App, {Container} from 'next/app'
import Head from 'next/head';

export default class extends App {
    static async getInitialProps({Component, router, ctx}) {
        const server = !!ctx.req
        const out = {server} as any

        if (Component.getInitialProps) {
            return {
                ...out,
                pageProps: {
                    ...await Component.getInitialProps(ctx)
                }
            }
        }

        return out
    }

    render() {
        const {props} = this as any;
        const {Component, pageProps} = props;

        return (
            <Container>
                <Head>
                    <title>Amazing Next.js 9</title>
                </Head>
                <Component {...pageProps} />
            </Container>
        )
    }
}