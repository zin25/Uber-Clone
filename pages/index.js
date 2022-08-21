import { useEffect, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import Map from './components/map'
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'


export default function Home() {
  //what any components
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          photoUrl: user.photoURL,
          name: user.displayName,
          
          
        })
      } else {
        setUser(null)
        router.push('/login')
      }
    })
  }, [])



  return (
    <Wrapper>
      <Map/>
      <ActionItems>
      {/*  Header */}
      <Header>
        {/* Self Closing Tags */}
        <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
        <Profile>
          <Name>{user && user.name}</Name>
          <UserImage src={user && user.photoUrl} onClick= {() => signOut(auth)}/>
          
        </Profile>
        </Header>
      {/*  Action Buttons */}
      <ActionButtons>
        <Link href="/search">
        <ActionButton>
        <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
          Ride
        </ActionButton>
      </Link>
        <ActionButton>
        <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"/>
          Wheels
        </ActionButton>
        <ActionButton>
        <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberscedule.png"/>
          Reserve
        </ActionButton>
      </ActionButtons>
      {/*  InputButtons */}
      <InputButton>Where To?</InputButton>


      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
 flex flex-col h-screen 
`

const ActionItems = tw.div `
 flex-1 p-4 
`

const Header = tw.div`
 flex justify-between items-center 
`

const UberLogo = tw.img`
h-28
`

const Profile = tw.div`
flex items-center
`

const Name = tw.div`
mr-4 w-20 text-sm
`

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer
`
const ActionButtons = tw.div`
flex
`

const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transisition text-xl
`

const ActionButtonImage = tw.img`
h-3/5
`

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`