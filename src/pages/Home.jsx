import {useContext, useEffect} from 'react'
import {LoginContext} from '../context/LoginContextProvider'
import moduleName from '../assets/images/home-background.png'
import styled from 'styled-components'
import MainSlider from '../components/MainSlider'
import Viewers from '../components/Viewers'
import Recommends from '../components/Recommends'
import {motion} from 'framer-motion'

const Home = () => {
	const [isLogged, setIsLogged] = useContext(LoginContext)

	useEffect(() => {
		if (isLogged) {
			console.log('you are logged in')
		}
	}, [isLogged])

	return (
		<SHome
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
		>
			<MainSlider />

			<Viewers />

			<Recommends title='Recommended for you' />

			<Recommends title='New to Disney+' />

			<Recommends title='Originals' />

			<Recommends title='Trending' />
		</SHome>
	)
}

export default Home

const SHome = styled(motion.main)`
	background-image: url(${moduleName});
	background-size: cover;
	min-height: 100vh;
	padding-top: 75px;
	overflow: hidden;
	padding-inline: 3rem;
	display: flex;
	flex-direction: column;
	gap: 4rem;
	padding-bottom: 1rem;
`