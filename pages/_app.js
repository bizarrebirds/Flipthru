import '../styles/globals.css'
import { Karla } from '@next/font/google'

const karla = Karla({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <style jsx global>{`
          .cardInfo {
            font-family: ${karla.style.fontFamily};
          }
          .albumTitle {
            font-family: ${karla.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </>
  )
}