import {  Avatar, Box,  Button, Typography } from "@mui/material";
import Typist from "react-typist-component";

const HeaderMain = () => {
  return (
    <Box 
        className="md:container mx-auto mb-3 flex flex-col-reverse items-start justify-center
            md:items-start sm:justify-between sm:flex-row pl-5 pt-0 gap-y-5"
        >
        <Box className="w-full sm:w-1/2 md:w-3/4 sm:mt-16 flex flex-col items-center justify-center
                 sm:flex-row sm:justify-between sm:items-start">

            <Typography variant="h5" className="sm:absolute text-3xl font-bold sm:text-4xl md:text-6xl lg:text-7xl z-10 whitespace-nowrap"> 
                Nice to meet you! <br /> 
                I’m <span className="pb-1 border-b-2 border-b-green-400">Nana Ansah</span>.
            </Typography>
            <Box className="sm:mt-10 md:mt-16 lg:mt-24">
                <Typist 
                    typingDelay={300} 
                    cursor={<span className='cursor'>|</span>}
                    onTypingDone={false}
                    >
                    <Typography variant="body1" className="text-center sm:text-left font-semibold mt-5 sm:mt-20">
                        Based in Ghana, I’m a front-end developer <br /> 
                        passionate about building accessible web apps <br />
                        that users love.
                    </Typography>
                </Typist>
                <Button  className="mt-7 bg-transparent border-b-2 
                border-b-teal-500 rounded-none text-white">
                CONTACT ME
                </Button>
            </Box>
        </Box>
        <Box className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center filter grayscale pt-20 sm:pt-16 sm:bg-[#242424]">
            <Avatar 
                alt="isanamoa" 
                src="/assets/images/isanamoa1.jpg" 
                variant="square"
                sx={{ position: 'relative', border: 'none', width: {xs: '15rem', md:"19.5rem"}, height: { xs:'350px', md: '370px'} }}
                className="sm:w-full"
            />
        </Box>
    </Box>
  )
}

export default HeaderMain
