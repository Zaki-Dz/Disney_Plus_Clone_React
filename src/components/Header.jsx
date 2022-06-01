import styled from 'styled-components'
import Logo from '../assets/images/logo.svg'
import HomeIcon from '../assets/images/home-icon.svg'
import SearchIcon from '../assets/images/search-icon.svg'
import WatchlistIcon from '../assets/images/watchlist-icon.svg'
import OriginalsIcon from '../assets/images/original-icon.svg'
import MoviesIcon from '../assets/images/movie-icon.svg'
import SeriesIcon from '../assets/images/series-icon.svg'
import {LoginContext} from '../context/LoginContextProvider'
import {useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'

const Header = () => {
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
		<SHeader
			initial={{opacity: 0, y: -100}}
			animate={{opacity: 1, y: 0}}
			exit={{opacity: 0, y: -100}}
		>
			<img src={Logo} />

			{isLogged && (
				<NavMenu
					initial={{opacity: 0, x: -100}}
					animate={{opacity: 1, x: 0}}
					exit={{opacity: 0, x: -100}}
				>
					<NavLink>
						<a href="#">
							<img src={HomeIcon} />

							<span>Home</span>
						</a>
					</NavLink>

					<NavLink>
						<a href="#">
							<img src={SearchIcon} />

							<span>Search</span>
						</a>
					</NavLink>

					<NavLink>
						<a href="#">
							<img src={WatchlistIcon} />

							<span>Watchlist</span>
						</a>
					</NavLink>

					<NavLink>
						<a href="#">
							<img src={OriginalsIcon} />

							<span>Originals</span>
						</a>
					</NavLink>

					<NavLink>
						<a href="#">
							<img src={MoviesIcon} />

							<span>Movies</span>
						</a>
					</NavLink>

					<NavLink>
						<a href="#">
							<img src={SeriesIcon} />

							<span>Series</span>
						</a>
					</NavLink>
				</NavMenu>
			)}

			<Login onClick={handleLogin}>{isLogged ? 'Log-out' : 'Login'}</Login>
		</SHeader>
	)
}

export default Header

const SHeader = styled(motion.header)`
	position: fixed;
	top: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	padding: 1rem 2rem;
	background-color: #090b13;
	z-index: 10;

	img{
		max-width: 80px;
	}
`

const NavMenu = styled(motion.ul)`
	display: flex;
	align-items: center;
	margin-right: auto;
	gap: 2rem;

	@media only screen and (max-width: 768px) {  
  	display: none;
	}
`

const NavLink = styled.li`
	a{
		display: flex;
		gap: .5rem;

		img{
			max-width: 30px;
		}

		span{
			padding-top: .5rem;
			text-transform: uppercase;
			position: relative;
			overflow: hidden;

			&::before{
				content: '';
				position: absolute;
				width: 100%;
				height: 2px;
				left: -100%;
				bottom: 0;
				background-color: white;
				opacity: 0;
				transition: .2s;
			}
		}

		&:hover{
			span::before{
				left: 0;
				opacity: 1;
			}
		}
	}
`

const Login = styled.button`
	background-color: #0008;
	padding: .5rem 1rem;
	text-transform: uppercase;
	border-radius: .25rem;
	border: 1px solid #f9f9f9;
	transition: .2s;

	&:hover{
		background-color: #f9f9f9;
		color: black;
	}
`