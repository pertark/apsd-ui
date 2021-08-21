import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import Cookies from 'js-cookie'
import { useToast, Button, Box, Stack } from "@chakra-ui/react"
import { useState, useEffect, useContext } from 'react';
import UserContext from '../components/UserContext';

export default function Home() {
  let body = "hotfix 7"

  const { authed, setAuth } = useContext(UserContext); // todo: remove setAuth in future versions  

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
    <Layout>
      <p>{body}</p>
      <Button onClick={()=>{setAuth(authed ? false : true)}}>switch auth debug</Button>
      {authed ? authed_body : unauthed_body}
    </Layout>
  )
}