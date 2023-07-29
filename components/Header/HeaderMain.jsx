import { AppBar, Avatar, Box, Container, Paper, Typography } from "@mui/material";
import Carder from "../Reusables/Carder";
import Carousel from "react-material-ui-carousel";
import Typist from "react-typist-component";


const HeaderMain = () => {
  return (
    <Paper 
        className="md:container mx-auto mt-10 mb-3 flex flex-col md:flex-row px-5 py-1 gap-3"
        >
        <Box sx={{ flex: 2 }} className="flex gap-5">
            <Avatar 
                alt="isanamoa" 
                src="/assets/images/isanamoa1.jpg" 
                sx={{ width: 100, height: 100 }}
            />
            <Box>
                <Typography variant="h4" className="font-bold"> 
                    Nana Ansah Yanney
                </Typography>
                <Typist typingDelay={300} cursor={<span className='cursor'>|</span>}>
                    <Typography variant="body1" className="font-semibold">
                        Software Developer
                    </Typography>
                </Typist>
            </Box>
        </Box>
        <Box sx={{ flex: 1, bgcolor: 'bg-green-200' }}>
            <Carousel className="bg-green-50">
                {
                    [
                        {
                            title:"Profile",
                            content: "Efficient Software Programmer"
                        }, 
                        {
                            title:"Inspiration",
                            content: "The love of God through creation"
                        },
                        {
                            title:"Quotes",
                            content: "Nothing is done without a start and a try"
                        },

                    ]
                    .map((cards, index) => (
                        <Carder key={index}
                            title={cards.title} 
                            content={cards.content}
                        />
                    ))
                }
            </Carousel>
        </Box>
    </Paper>
  )
}

export default HeaderMain
