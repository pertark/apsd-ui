import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { Box, Stack, SkeletonText } from '@chakra-ui/react'
import { useContext } from 'react'
import UserContext from '../components/UserContext'

export default function Home () {
  const { authed } = useContext(UserContext)

  const unauthedBody = (
    <Box>
      <Stack direction={'column'} spacing={'1em'}>
        <Box>
          <h1 className={styles.title}>Compare yourself to your school</h1>
          <p className={styles.description}>Find out the score distributions for your AP tests</p>
        </Box>
        <Stack direction={{ base: 'column', md: 'row' }} align={'center'}>
          <Box>
            <h2>information section</h2>
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
          <Box>
            <h2>information section</h2>
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        </Stack>
      </Stack>
    </Box>
  )

  const authedBody = (
    <h1>See how you did compared to your school!</h1>
  )

  return (
    <Layout>
      {authed ? authedBody : unauthedBody}
    </Layout>
  )
}
