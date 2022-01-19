import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import theme from '../app/themes/index.js'
import "@fontsource/lato"

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence 
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
          initial={false}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
