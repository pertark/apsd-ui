import { Box, Button, Flex, Heading, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <Stack>
      <Navbar></Navbar>
      { props.children }
    </Stack>
  )
};
