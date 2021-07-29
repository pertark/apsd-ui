import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    colors: {
      ap: {
        100: "#f7fafc",
        200: "#3c92bc",
        900: "#1a202c",
      },
    },
  })

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
