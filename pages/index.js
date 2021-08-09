import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import Cookies from 'js-cookie'
import { useToast, Button, Box, Stack } from "@chakra-ui/react"
import { Component, useEffect, useState } from 'react'

export default function Home() {
  let toast = useToast()
  let body = "test"
  const [authed, setAuth] = useState(false) 

  useEffect(() => {
    // append message to body to be popped up as a toast
    let message = JSON.parse(Cookies.get('message') || "{}");
    console.log(message)
    if (message !== {}) {
      if (message.name === "error") {
        window.onload = toast({
          title: "Error",
          description: message.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
    Cookies.remove('message');
  })

  const unauthed_body = (
    <Box>
      <Stack direction={"column"} spacing={'1em'}>
        <Box>
          <h1 className={styles.title}>Compare yourself to your school</h1>
          <p className={styles.description}>Find out the score distributions for your AP tests</p>
        </Box>
        <Stack direction={{ base: "column", md: "row" }}>
          
        </Stack>
      </Stack>
    </Box>
  )

  const authed_body = (
    <h1>See how you did compared to your school!</h1>
  )

  return (
    <Layout authed={authed}>
      <p>{body}</p>
      <Button onClick={()=>{setAuth(authed ? false : true)}}>switch auth debug</Button>
      {authed ? authed_body : unauthed_body}
    </Layout>
  )
}