import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { useState } from 'react'
import UserContext from '../components/UserContext'

function MyApp ({ Component, pageProps }) {
  const theme = extendTheme({
    colors: {
      ap: {
        100: '#f7fafc',
        200: '#3c92bc',
        300: '#337CA0',
        900: '#1a202c'
      }
    }
  })

  // let sharedState = { authed: false, setAuth: function(val){ console.log(this); this.authed = val } }
  const [authed, setAuth] = useState(false)

  return (
    <ChakraProvider theme={theme}>
      <UserContext.Provider value={{ authed, setAuth }}>
        <Component {...pageProps}/>
      </UserContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp
