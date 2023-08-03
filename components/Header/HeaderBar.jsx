import {  Box, Container,  } from "@mui/material";

import AboutUs from "../Reusables/AboutUs";
import Social from "../Reusables/Socials";
const HeaderBar = () => {
  return (
    <Box sx={{ mb:2, zIndex: 'modal' }} className="w-full absolute top-0">
        <Container className=" bg-transparent md:container mx-auto flex flex-col px-2 md:pl-5 
            items-center justify-center sm:flex-row sm:justify-between"
            maxWidth={false} 
            disableGutters
            >
            <AboutUs />
            <Social />
        </Container>
    </Box>
  )
}

export default HeaderBar
