import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link rel="icon" className='bg-white' href="/Logo.svg" sizes="any" />
        </Head>
      <body className=''>
        <div className='bg-white'>
        <Main />
        <NextScript />
        </div>
  
      </body>
    </Html>
  )
}
