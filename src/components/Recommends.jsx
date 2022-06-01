import styled from 'styled-components'
import ImageOne from '../assets/images/scale.jpeg'
import ImageTwo from '../assets/images/scale (1).jpeg'
import ImageThree from '../assets/images/scale (2).jpeg'
import ImageFour from '../assets/images/scale (3).jpeg'
import {motion} from 'framer-motion'

const Recommends = ({title}) => {
	return (
		<Container>
			<h4>{title}</h4>

			<Content>
				<div>
					<img src={ImageOne} />
				</div>

				<div>
					<img src={ImageTwo} />
				</div>

				<div>
					<img src={ImageThree} />
				</div>

				<div>
					<img src={ImageFour} />
				</div>
			</Content>
		</Container>
	)
}

export default Recommends

const Container = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`

const Content = styled.section`
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	gap: 2rem;

	@media only screen and (max-width: 768px) {
	  grid-template-columns: repeat(2, minmax(0, 1fr));
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
	}
`