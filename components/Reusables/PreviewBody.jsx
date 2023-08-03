import { Slide } from '@mui/material';
import Image from 'next/image';
import { Box } from '@mui/material';

const PreviewBody = ({ projectImage }) => {
    
  return (
    <>
        <Box className='relative w-full sm:hover:opacity-10'>
            {
                <>
                    <Image 
                        alt="..."
                        src={projectImage[0]}
                        width={450}
                        height={450}
                        className="relative w-5/6 left-10 z-0"
                    />

                    <Image 
                        alt="..."
                        src={projectImage[1]}
                        width={420}
                        height={450}
                        className="absolute w-5/6 top-11 z-50"
                    />
                </>
            } 
        </Box>
    </>
  )
}

export default PreviewBody
