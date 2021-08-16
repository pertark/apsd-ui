import { Box, Button, Flex, Heading, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ authed, setAuth, children }) {

  useEffect( () => {
    fetch('/api/user').then((response) => {
      // if unauthorized this will always be false
      setAuth(response.ok);
    });
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
