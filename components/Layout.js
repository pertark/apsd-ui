import { Box, Button, Flex, Heading, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <Stack>
      <Navbar></Navbar>
      <Box>
        { props.children }
      </Box>
      <Footer></Footer>
    </Stack>
  )
};
