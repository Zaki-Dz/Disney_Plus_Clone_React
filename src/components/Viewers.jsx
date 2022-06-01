import styled from 'styled-components'
import LogoOne from '../assets/images/viewers-disney.png'
import LogoTwo from '../assets/images/viewers-pixar.png'
import LogoThree from '../assets/images/viewers-marvel.png'
import LogoFour from '../assets/images/viewers-starwars.png'
import LogoFive from '../assets/images/viewers-national.png'

import VideoOne from '../assets/videos/disney.mp4'
import VideoTwo from '../assets/videos/pixar.mp4'
import VideoThree from '../assets/videos/marvel.mp4'
import VideoFour from '../assets/videos/star-wars.mp4'
import VideoFive from '../assets/videos/national-geographic.mp4'

const Viewers = () => {
	return (
		<Container>
			<div>
				<img src={LogoOne} />

				<video autoPlay loop muted>
					<source src={VideoOne} />
				</video>
			</div>
			
			<div>
				<img src={LogoTwo} />

				<video autoPlay loop muted>
					<source src={VideoTwo} />
				</video>
			</div>

			<div>
				<img src={LogoThree} />

				<video autoPlay loop muted>
					<source src={VideoThree} />
				</video>
			</div>

			<div>
				<img src={LogoFour} />

				<video autoPlay loop muted>
					<source src={VideoFour} />
				</video>
			</div>

			<div>
				<img src={LogoFive} />

				<video autoPlay loop muted>
					<source src={VideoFive} />
				</video>
			</div>
		</Container>
	)
}

export default Viewers

const Container = styled.section`
	display: grid;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	gap: 2rem;

	@media only screen and (max-width: 768px) {
	  grid-template-columns: unset;
	}

	div{
		border: 4px solid #2b2c36;
		border-radius: .5rem;
		box-shadow: 0 1rem 1rem #000a;
		position: relative;
		z-index: 1;
		cursor: pointer;
		transition: .2s;

		&:hover{
			transform: scale(1.05);
			border-color: white;
		}

		video{
			position: absolute;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			opacity: 0;
			transition: .2s;
		}

		&:hover video{
			opacity: 1;
		}
	}
`