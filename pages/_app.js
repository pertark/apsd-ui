import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { useState } from "react"

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    colors: {
      ap: {
        100: "#f7fafc",
        200: "#3c92bc",
        300: "#337CA0",
        900: "#1a202c",
      },
    },
  });

  const [authed, setAuth] = useState(false);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} authed={authed} setAuth={setAuth}/>
    </ChakraProvider>
  )
}

export default MyApp
