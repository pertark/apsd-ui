import { Box, Button, Flex, Heading, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props) {
  const [authed, setAuthed] = useState(false);

  useEffect( () => {
    fetch('/api/user').then((response) => {
      // if unauthorized this will always be false
      setAuthed(response.ok);
    });
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
