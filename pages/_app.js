import '../styles/globals.css'
import { Assistant } from '@next/font/google'

const assistant = Assistant({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <style jsx global>{`
          .cardInfo {
            font-family: ${assistant.style.fontFamily};
          }
          .albumTitle {
            font-family: ${assistant.style.fontFamily};
          }
          .albumTitle {
              font-family: ${assistant.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </>
  )
}