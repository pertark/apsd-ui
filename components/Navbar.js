import { Box, Button, Flex, Heading, Stack, Slide, Text, Center, useDisclosure, Spacer } from "@chakra-ui/react"
import { HamburgerIcon, StarIcon } from "@chakra-ui/icons";
import styles from '../styles/Navbar.module.css'
import { useState, useEffect } from 'react';

export default function Navbar(props) {
  var [categories, setCategories] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  useEffect( () => {
    if (props.authed) {
      let categoriesTemp = [];
      fetch('/api/category/get_categories').then((response) => {
        response.json.forEach(category => {
          categoriesTemp.push(category.name);
        });
        setCategories(categoriesTemp);
      })
    }
  }, [props.authed, categories, setCategories])

  // console.log(styles)
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      bg="ap.200"
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
        { !!props.authed ? categories.map((val, idx) => {
          return (
            <Center 
              key={idx} 
              h="100%" 
              className={styles['menu-item']}
              paddingX="0.5em"
              bg="ap.200"
            >
              <StarIcon margin="0.2em" ml={{base: "1em", md: "0.2em"}}/>
              <p>
                <b>{val}</b>
              </p>
            </Center>
          )
        }) : <Box></Box>
       }
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          mr={6} mt={{base: 1, md: 6}} mb={6} ml={5}
          variant={"outline"}
          
          _hover={{ bg: "ap.300", borderColor: "ap.100" }}
          onClick={!!props.authed ? ()=>{location.href = "/oauth/logout"} : ()=>{location.href = "/oauth/login"}}
        >
          {!!props.authed ? "Log out": "Log in"}
        </Button>
      </Box>
    </Flex>
  );
};
