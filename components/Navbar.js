import { Box, Button, Flex, Heading, Stack, Slide, Text, Center, useDisclosure } from "@chakra-ui/react"
import { HamburgerIcon, StarIcon } from "@chakra-ui/icons";
import styles from '../styles/Navbar.module.css'

export default function Navbar(props) {
  const categories = ["math", "fuck i don't know", "something else", "more test data"]
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  // console.log(styles)
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      bg="teal.500"
      color="white"
      className={styles["big-flex"]}
      {...props}
    >
      <Flex align="center" mr={5} mt={6} mb={6} ml={6} pointerEvents="none">
        <Heading as="h1" size="lg" letterSpacing={"tighter"} >
          AP Score Distribution
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} mr={6} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        height={{base: "100%", md: "5.5em" }}
        margin="0"
        padding="0"
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        spacing={{base: 3, md: 1}}
        className={styles["stack"]}
      >
        { categories.map((val, idx) => {
          return (
            <Center 
              key={idx} 
              h="100%" 
              className={styles['menu-item']}
              paddingX="0.5em"
              bg="teal.500"
            >
              <StarIcon margin="0.2em" ml={{base: "1em", md: "0.2em"}}/>
              <p>
                {val}
              </p>
            </Center>
          )
        }) }
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          mr={6} mt={{base: 1, md: 6}} mb={6} ml={5}
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
          Log in
        </Button>
      </Box>
    </Flex>
  );
};
