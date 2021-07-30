import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import Cookies from 'js-cookie'
import { useToast } from "@chakra-ui/react"
import { Component, useEffect } from 'react'

export default function Home() {
  let toast = useToast()
  let body = "test"

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

  return (
    <Layout authed={true}>
      <p>{body}</p>
    </Layout>
  )
}
