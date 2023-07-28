import { Slide } from '@mui/material';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';

const PreviewBody = () => {
    
  return (
    <>
        <Carousel className=''>
            <Image
                alt="..."
                src="/assets/countryApi-dark-desk.png"
                width={200}
                height={200}
            />
            <Image
                alt="..."
                src="/assets/countryApi-light-desk.png"
                width={200}
                height={200}
            />
            <Image
                alt="..."
                src="/assets/countryApi-dark-mobile.png"
                width={200}
                height={200}
            />
            <Image
                alt="..."
                src="/assets/countryApi-light-mobile.png"
                width={200}
                height={200}
            />
            <Image
                alt="..."
                src="/assets/countryApi-details-desk-dark.png"
                width={200}
                height={200}
            />
            <Image
                alt="..."
                src="/assets/countryApi-details-desk-light.png"
                width={200}
                height={200}
            />
            <Image
                alt="..."
                src="/assets/countryApi-details-mobile-dark.png"
                width={200}
                height={200}
            />
            <Image
                alt="..."
                src="/assets/countryApi-details-mobile-light.png"
                width={200}
                height={200}
            />
        </Carousel>
    </>
  )
}

export default PreviewBody
