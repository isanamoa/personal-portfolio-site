import { AppBar, Avatar, Box, Container, Paper, Typography } from "@mui/material";
import Carder from "../Reusables/Carder";
import Carousel from "react-material-ui-carousel";
import Typist from "react-typist-component";
import * as MyIconsColl from '../MyIcons';


const HeaderMain = () => {
  return (
    <Paper 
        className="md:container mx-auto mt-16 mb-3 flex flex-col md:flex-row px-5 py-1 gap-3"
        >
        <Box sx={{ flex: 2 }} className="flex gap-5">
            <Avatar 
                alt="isanamoa" 
                src="/assets/images/isanamoa1.jpg" 
                sx={{ width: 100, height: 100 }}
            />
            <Box>
                <Typography variant="h4" className="font-bold text-2xl"> 
                    Nana Ansah Yanney
                </Typography>
                <Typist 
                    typingDelay={300} 
                    cursor={<span className='cursor'>|</span>}
                    onTypingDone={false}
                    >
                    <Typography variant="body2" className="font-semibold">
                        Software Developer
                    </Typography>
                </Typist>
            </Box>
        </Box>
        <Box sx={{ flex: 1, bgcolor: 'bg-green-200', }}>
            <Carousel >
                {
                    [
                        {
                            icon: <MyIconsColl.Brush />,
                            title:"Profile",
                            content: `A skilled frontend developer with over 3 years of experience building responsive and 
                            user-friendly interfaces for websites and applications. She is proficient in HTML, CSS, and JavaScript, 
                            and has experience working with popular libraries such as React and Vue, and frontend frameworks such as Next. 
                            Have strong desire for web performance optimization and always look for ways to improve the speed and efficiency of my codes. 
                            Good collaborator and communicator, with the capacity to work both under pressure and stress-free environment to achieve project target.`
                        }, 
                        {
                            icon: <MyIconsColl.Lightbulb />,
                            title:"Inspiration",
                            content: "The love of God through creation"
                        },
                        {
                            icon: <MyIconsColl.FormatQuote />,
                            title:"Quotes",
                            content: "Nothing is done without a start and a try"
                        },

                    ]
                    .map((cards, index) => (
                        <Carder key={index}
                            icon={cards.icon}
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
