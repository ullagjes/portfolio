
import { useMediaQuery } from '@material-ui/core'
import Head from 'next/head'
import AboutMe from '../components/AboutMe'
import NavBar from '../components/NavBar'
import ProfileBackground from '../components/ProfileBackground'
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
      <ProfileBackground>
        {!mediumScreen ? 
        <ProfileLarge />
        : 
        <ProfileSmall />
        }
      </ProfileBackground>
        <AboutMe />
    </>
  )
}
