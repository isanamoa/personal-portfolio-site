import { AppBar, Box, Container, Paper, Typography } from "@mui/material";

import AboutUs from "../Reusables/AboutUs";
import Social from "../Reusables/Socials";
const HeaderBar = () => {
  return (
    <AppBar sx={{ mb:2, }} className="bg-blue-800">
        <Container className="md:container mx-auto flex px-2 md:px-0"
            maxWidth={false} 
            disableGutters
            >
            <AboutUs />
            <Social />
        </Container>
    </AppBar>
  )
}

export default HeaderBar
