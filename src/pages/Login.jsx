import styled from 'styled-components'
import BgImage from '../assets/images/login-background.jpg'
import LogosOne from '../assets/images/cta-logo-one.svg'
import LogosTwo from '../assets/images/cta-logo-two.png'
import {useContext, useEffect} from 'react'
import {LoginContext} from '../context/LoginContextProvider'
import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'

const Login = () => {
	const [isLogged, setIsLogged] = useContext(LoginContext)

	const navigate = useNavigate()
	
	const handleLogin = () => {
		setIsLogged(!isLogged)
	}

	useEffect(() => {
		if (isLogged) {
			navigate('/home')
		} else {
			navigate('/')
		}
	}, [isLogged])

	return (
		<Container
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 1}}
		>
			<Content>
				<img src={LogosOne} />

				<SButton onClick={handleLogin}>Get All There</SButton>

				<p>
					Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
				</p>

				<img src={LogosTwo} />
			</Content>
		</Container>
	)
}

export default Login

const Container = styled(motion.section)`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	background-image: url(${BgImage});
	background-size: cover;
	padding-inline: 3rem;
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	max-width: 600px;
	text-align: center;

	p{
		font-size: .7rem;
		letter-spacing: 2px;
		line-height: 1.2rem;
		width: calc(100% + 4rem);
		margin-bottom: 1rem;
	}
`

const SButton = styled.button`
	padding: 1rem 2rem;
	background-color: #0063e5;
	width: calc(100% + 4rem);
	font-size: 1.2rem;
	font-weight: bold;
	letter-spacing: 2px;
	text-transform: uppercase;
	border: none;
	border-radius: .25rem;
	transition: .2s;

	&:hover{
		background-color: #0483ee;
	}
`