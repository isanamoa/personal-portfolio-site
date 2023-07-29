import { Slide } from '@mui/material';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';

const PreviewBody = () => {
    
  return (
    <>
        <Carousel className='w-full'>
            <Image
                alt="..."
                src="/assets/project-pics/countryApi-dark-desk.png"
                width={200}
                height={200}
                className='w-full'
            />
            <Image
                alt="..."
                src="/assets/project-pics/countryApi-light-desk.png"
                width={200}
                height={200}
                className='w-full'
            />
            <Image
                alt="..."
                src="/assets/project-pics/countryApi-details-desk-dark.png"
                width={200}
                height={200}
                className='w-full'
            />
            <Image
                alt="..."
                src="/assets/project-pics/countryApi-details-desk-light.png"
                width={200}
                height={200}
                className='w-full'
            />
            
        </Carousel>
    </>
  )
}

export default PreviewBody
