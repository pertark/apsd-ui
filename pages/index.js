import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { Button, Box, Stack } from '@chakra-ui/react'
import { useContext } from 'react'
import UserContext from '../components/UserContext'

export default function Home () {
  const body = 'hotfix 7'

  const { authed, setAuth } = useContext(UserContext) // todo: remove setAuth in future versions

  const unauthedBody = (
    <Box>
      <Stack direction={'column'} spacing={'1em'}>
        <Box>
          <h1 className={styles.title}>Compare yourself to your school</h1>
          <p className={styles.description}>Find out the score distributions for your AP tests</p>
        </Box>
        <Stack direction={{ base: 'column', md: 'row' }}>

        </Stack>
      </Stack>
    </Box>
  )

  const authedBody = (
    <h1>See how you did compared to your school!</h1>
  )

  return (
    <Layout>
      <p>{body}</p>
      <Button onClick={() => { setAuth(!authed) }}>switch auth debug</Button>
      {authed ? authedBody : unauthedBody}
    </Layout>
  )
}
