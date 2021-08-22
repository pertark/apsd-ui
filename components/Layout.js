import { Box, Stack } from '@chakra-ui/react'
import { useEffect, useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import UserContext from '../components/UserContext'

export default function Layout ({ children }) {
  const { setAuth } = useContext(UserContext)

  useEffect(() => {
    fetch('/api/user').then((response) => {
      // if unauthorized this will always be false
      setAuth(response.ok)
    })
  })

  return (
    <Stack>
      <Navbar></Navbar>
      <Box>
        { children }
      </Box>
      <Footer></Footer>
    </Stack>
  )
};
