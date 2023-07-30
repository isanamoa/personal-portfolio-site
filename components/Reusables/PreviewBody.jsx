import { Slide } from '@mui/material';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';

const PreviewBody = ({ projectImage }) => {
    
  return (
    <>
        <Carousel className='w-full'>
            {
                projectImage.map((newImg, index) =>(
                    <Image key={index}
                        alt="..."
                        src={newImg}
                        width={200}
                        height={200}
                        className='w-full'
                    />
                ))
            } 
        </Carousel>
    </>
  )
}

export default PreviewBody
