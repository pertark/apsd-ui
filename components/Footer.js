import { Box } from '@chakra-ui/react'
// import { HamburgerIcon, StarIcon } from '@chakra-ui/icons'

export default function Footer (props) {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      // maxW="7xl"
      py="12"
      px={{ base: '4', md: '8' }}
      bg="ap.200"
      width="100%"
      textColor="white"
    >
      insert footer content here
    </Box>
  )
};
