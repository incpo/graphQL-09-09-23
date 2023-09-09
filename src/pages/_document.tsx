import {Head, Html, Main, NextScript} from 'next/document'
import Header from "@/components/Header";

export default function Document() {
    return (
        <Html lang="en">
            <Head/>
            <body className='mx-auto max-w-[1699px] p-2 bg-background text-text'>
            <Header/>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
