import Layout from '../components/Layout'
import { Button, Box } from '@chakra-ui/react'
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Exam from '../components/Exam'
import UserContext from '../components/UserContext'

export default function Category () {
  const { authed, setAuth } = useContext(UserContext)

  const [exams, setExams] = useState([])
  const [body, setBody] = useState("")

  const router = useRouter()

  // example category id: f688a741-365d-488c-baed-a6987fc3eef8
  useEffect(() => {
    const uuid = router.query.uuid
    if (uuid) {
      fetch(`/api/category/${uuid}`).then(async (response) => {
        let json = await response.json()
        console.log(json)
        setExams(json)
      })
    }
  }, [router.query.uuid])

  const unauthedBody = (
    <Box>
      Temporary page
      Please sign in
    </Box>
  )

  console.log(exams.length)
  //const authedBody = !!exams ? (exams.length !== 0 ? exams.map((val, idx) => { return (<Exam uuid={val} key={idx}></Exam>) }) : <Box>No exams in this category!!</Box>) : (<Box>loading...</Box>)
  
  if ( exams ) {
    if ( exams.length == 0 ) {
      setBody(<Box>No Exams</Box>)
    } else {
      setBody(exams.map((val, idx) => <Box>placeholder {idx}, val {val}</Box>))
    }
  } else {
    setBody(<Box>Loading...</Box>)
  }
  
  return (
    <Layout authed={authed}>
      {authed ? body : unauthedBody}
    </Layout>
  )
}
