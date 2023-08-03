import {  Avatar, Box,  Button, Typography } from "@mui/material";
import Typist from "react-typist-component";

const HeaderMain = () => {
  return (
    <Box 
        sx={{ display:'flex', flexDirection:{xs:'column-reverse', sm:'row' }, 
        alignItems:'start', justifyContent:{xs: 'center', sm: 'space-between'},
        pl:2, pt:0, gap:{xs:5, sm:0}, mb:5 }}
        className="lg:w-[75rem] mx-auto"
        >
        <Box sx={{ width: { sm:1/2, md:3/5}, display: 'flex',
            flexDirection: {xs:'column', sm:'row'}, 
            alignItems: {xs:'center', sm:"start"}, gap:3,
            justifyContent: {xs:'center', sm:'space-between'} }} className="sm:mt-16">

            <Typography variant="h1" sx={{ fontSize: {xs:'1.8rem', sm:'2.7rem', lg:'5.5rem',}}} className="sm:absolute font-bold z-10 whitespace-nowrap"> 
                Nice to meet you! <br/>  
                I’m <span className="border-b-2 border-b-green-400">Nana Ansah</span>.
            </Typography>
            <Box sx={{ mt: {sm:15, md:20, lg:30} }} >
                <Typist 
                    typingDelay={300} 
                    cursor={<span className='cursor'>|</span>}
                    onTypingDone={false}
                    >
                    <Typography variant="body1" className="text-center sm:text-left font-semibold">
                        Based in Ghana, I’m a front-end developer <br className="hidden md:block"/> 
                        passionate about building accessible web apps <br className="hidden md:block" />
                        that users love.
                    </Typography>
                </Typist>
                <Button  className="mt-7 bg-transparent border-b-2 
                    border-b-teal-500 rounded-none text-white">
                    CONTACT ME
                </Button>
            </Box>
        </Box>
        <Box sx={{ width: { xs:1, sm:1/2, md:2/5 } }} className="flex flex-col items-center justify-center filter grayscale pt-20 sm:pt-16 sm:bg-[#242424]">
            <Avatar 
                alt="isanamoa" 
                src="/assets/images/isanamoa1.jpg" 
                variant="square"
                sx={{ position: 'relative', border: 'none', width: {xs: '15rem', md:"19.5rem"}, height: { xs:'350px', sm: '520px', md: '618px'} }}
                className="sm:w-full"
            />
        </Box>
    </Box>
  )
}

export default HeaderMain
