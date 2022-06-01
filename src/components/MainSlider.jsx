import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import ImageOne from '../assets/images/slider-badag.jpg'
import ImageTwo from '../assets/images/slider-badging.jpg'
import ImageThree from '../assets/images/slider-scale.jpg'
import ImageFour from '../assets/images/slider-scales.jpg'

const MainSlider = () => {
	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true
	}

	return (
		<Carousel {...settings}>
			<Wrap>
				<img src={ImageOne} />
			</Wrap>

			<Wrap>
				<img src={ImageTwo} />
			</Wrap>

			<Wrap>
				<img src={ImageThree} />
			</Wrap>

			<Wrap>
				<img src={ImageFour} />
			</Wrap>
		</Carousel>
	)
}

export default MainSlider

const Carousel = styled(Slider)`
	margin-top: 20px;

	& > button{
		opacity: 0;
		height: 100%;
		padding: 1rem;
		width: 60px;
		transition: .2s;
		z-index: 10;

		&:hover{
			opacity: 1;
		}
	}

	ul li {
		button::before{
			font-size: 10px;
			color: #aaa;
		}

		&.slick-active button::before{
			color: #fff;
		}
	}

	.slick-list{
		overflow: initial;
	}
`

const Wrap = styled.div`
	border: .25rem solid transparent;
	border-radius: .5rem;
	transition: .2s;
	box-shadow: 0 5px 0 transparent, 0 1rem 1rem #000a;
	cursor: pointer;
	overflow: hidden;

	&:hover{
		border-color: #f9f9f9;
	}
`