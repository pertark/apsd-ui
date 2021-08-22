import { useToast, Box, Button, Flex, Heading, Stack, Center, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon, StarIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

import { useState, useEffect, useContext } from 'react'
import Cookies from 'js-cookie'
import UserContext from './UserContext'

export default function Navbar (props) {
  const { authed } = useContext(UserContext)

  const [categories, setCategories] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => (isOpen ? onClose() : onOpen())

  const toast = useToast()

  useEffect(() => {
    // append message to body to be popped up as a toast
    const message = JSON.parse(Cookies.get('message') || '{}')
    console.log(message)
    if (message !== {}) {
      if (message.name === 'error') {
        window.onload = toast({
          title: 'Error',
          description: message.message,
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      }
    }
    Cookies.remove('message')
  })

  useEffect(() => {
    if (authed) {
      fetch('/api/category/get_categories').then(async (response) => {
        const body = await response.json()
        setCategories(body.map((category) => category.name))
      }).catch(() => { console.log('request error') })
    }
  }, [authed])

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      bg="ap.200"
      color="white"
      className={styles['big-flex']}
      {...props}
    >
      <Flex align="center" mr={5} mt={6} mb={6} ml={6} pointerEvents="none">
        <Heading as="h1" size="lg" letterSpacing={'tighter'} >
          AP Score Distribution
        </Heading>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} mr={6} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        height={{ base: '100%', md: '5.5em' }}
        margin="0"
        padding="0"
        direction={{ base: 'column', md: 'row' }}
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        spacing={{ base: 3, md: 1 }}
        className={styles.stack}
      >
        {authed
          ? categories.map((val, idx) => {
            return (
              <Center
                key={idx}
                h="100%"
                className={styles['menu-item']}
                paddingX="0.5em"
                bg="ap.200"
              >
                <StarIcon margin="0.2em" ml={{ base: '1em', md: '0.2em' }}/>
                <p>
                  <b>{val}</b>
                </p>
              </Center>
            )
          })
          : <Box></Box>
        }
      </Stack>

      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <Link href={authed ? '/oauth/logout' : '/oauth/login'} passHref>
          <Button
            mr={6} mt={{ base: 1, md: 6 }} mb={6} ml={5}
            variant={'outline'}

            _hover={{ bg: 'ap.300', borderColor: 'ap.100' }}
          >
            {authed ? 'Log out' : 'Log in'}

          </Button>
        </Link>
      </Box>
    </Flex>
  )
};
