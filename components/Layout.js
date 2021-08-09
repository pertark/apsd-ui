import { Box, Button, Flex, Heading, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEffect } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props) {
  var authed;

  useEffect(async () => {
    let response = await fetch('/api/user');

    // if unauthorized this will always be false
    authed = response.ok;
  })

  return (
    <Stack>
      <Navbar authed={authed}></Navbar>
      <Box>
        { props.children }
      </Box>
      <Footer></Footer>
    </Stack>
  )
};
