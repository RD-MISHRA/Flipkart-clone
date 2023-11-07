
import { styled } from '@mui/material';
import "react-multi-carousel/lib/styles.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { bannerData } from '../../constants/data';
import Carousel from 'react-multi-carousel';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Image = styled('img')({
    width: '100%',
    height: 280
    
});
const Banner = () => {
    return (
        <Carousel
           responsive={responsive}
           infinite={true}

         >
            {bannerData.map(data => (
                <Image src={data.url} alt="foo" key={data.id} />
            ))}
        </Carousel>
    );
}




export default Banner;