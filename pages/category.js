import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import Cookies from 'js-cookie'
import { useToast, Button, Box, Stack } from "@chakra-ui/react"
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import { PieChart } from 'react-minimal-pie-chart'
import Exam from '../components/Exam'
import UserContext from '../components/UserContext';

export default function Category() {
  const { authed, setAuth } = useContext(UserContext);

  let toast = useToast()
  let body = "test"
  const [exams, setExams] = useState([]);

  const router = useRouter()

  // example category id: f688a741-365d-488c-baed-a6987fc3eef8
  useEffect(() => {
    let uuid = router.query.uuid; 
    if (uuid) {
      fetch(`/api/category/${uuid}`).then(async (response) => {
        setExams(await response.json());
      })
    }
  }, [router.query.uuid])

  const unauthed_body = (
    <Box>
      Temporary page
      Please sign in
    </Box>
  )

  // adjust color palette to match 5/4/3/2/1
  const colorPalette = ['#f4511e','#fb8c00','#ffc107', '#8bc34a', '#26a69a', '#00bcd4', '#03a9f4', '#2196f3', '#3f51b5', '#5e35b1']

  const authed_body = exams ? exams.map((val, idx) => {return (<Exam uuid={val} key={idx}></Exam>)}) : (<Box>loading...</Box>)

  return (
    <Layout authed={authed}>
      <p>{body}</p>
      <Button onClick={()=>{setAuth(authed ? false : true)}}>switch auth debug</Button>
      {authed ? authed_body : unauthed_body}
    </Layout>
  )
}