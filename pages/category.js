import Layout from '../components/Layout'
import { Box, Stack } from '@chakra-ui/react'
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Exam from '../components/Exam'
import UserContext from '../components/UserContext'

export default function Category () {
  const { authed } = useContext(UserContext)

  // const [exams, setExams] = useState([])
  const [body, setBody] = useState('')

  const router = useRouter()

  // example category id: 7f82f62b-3716-4846-8010-3b4268e06efd
  useEffect(() => {
    const uuid = router.query.uuid
    if (uuid) {
      fetch(`/api/category/${uuid}`).then(async (response) => {
        const resp = await response.json()
        const exams = resp.exams
        // console.log(json)
        // setExams(json)
        if (exams) {
          if (exams.length === 0) {
            setBody(<Box>No Exams</Box>)
          } else {
            // setBody(<Stack>{exams.map((val, idx) => <Box key={idx}>placeholder {idx}, val {val}</Box>)}</Stack>)
            setBody(<Stack>{exams.map((val, idx) => <Exam key={idx} uuid={val} />)}</Stack>)
          }
        } else {
          setBody(<Box>Loading...</Box>)
        }
      })
    }
  }, [router.query.uuid])

  const unauthedBody = (
    <Box>
      Temporary page
      Please sign in
    </Box>
  )

  // const authedBody = !!exams ? (exams.length !== 0 ? exams.map((val, idx) => { return (<Exam uuid={val} key={idx}></Exam>) }) : <Box>No exams in this category!!</Box>) : (<Box>loading...</Box>)

  return (
    <Layout authed={authed}>
      {authed ? body : unauthedBody}
    </Layout>
  )
}
