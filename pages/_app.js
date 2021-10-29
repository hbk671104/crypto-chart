import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>靠谱项目可视化数据</title>
                <meta name="description" content="精选区块链投资标的项目数据" />
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
