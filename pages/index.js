
import { useMediaQuery } from '@material-ui/core'
import Head from 'next/head'
import DiagonalSection from '../components/diagonalSection'
import NavBar from '../components/NavBar'
import ProfileLarge from '../components/ProfileLarge'
import ProfileSmall from '../components/ProfileSmall'


export default function Home() {

  const mediumScreen = useMediaQuery(`(max-width:800px)`)

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      </Head>
      <NavBar />
        <DiagonalSection>
          {!mediumScreen ? 
          <ProfileLarge />
          : 
          <ProfileSmall />
          }
          
        </DiagonalSection>
    </>
  )
}
