import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { theme } from "../styles/theme"

import '../styles/slider.css'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
