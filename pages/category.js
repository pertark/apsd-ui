import Layout from '../components/Layout'
import { Button, Box } from '@chakra-ui/react'
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Exam from '../components/Exam'
import UserContext from '../components/UserContext'

export default function Category () {
  const { authed, setAuth } = useContext(UserContext)

  const body = 'test'
  const [exams, setExams] = useState(null)

  const router = useRouter()

  // example category id: f688a741-365d-488c-baed-a6987fc3eef8
  useEffect(() => {
    const uuid = router.query.uuid
    if (uuid) {
      fetch(`/api/category/${uuid}`).then(async (response) => {
        setExams(await response.json())
      })
    }
  }, [router.query.uuid])

  const unauthedBody = (
    <Box>
      Temporary page
      Please sign in
    </Box>
  )

  const authedBody = exams ? ( exams.length != 0 ? exams.map((val, idx) => { return (<Exam uuid={val} key={idx}></Exam>) }) : <Box>No exams in this category!!</Box>) : (<Box>loading...</Box>)

  return (
    <Layout authed={authed}>
      <p>{body}</p>
      <Button onClick={() => { setAuth(!authed) }}>switch auth debug</Button>
      {authed ? authedBody : unauthedBody}
    </Layout>
  )
}
