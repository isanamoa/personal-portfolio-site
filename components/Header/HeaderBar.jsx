import { AppBar, Box, Container, Paper, Typography } from "@mui/material";

import AboutUs from "../Reusables/AboutUs";
import Social from "../Reusables/Socials";
const HeaderBar = () => {
  return (
    <AppBar sx={{ mb:2, }} className="bg-green-900 py-2">
        <Container className="md:container mx-auto flex flex-col px-2 md:px-0 items-center justify-center sm:flex-row sm:justify-between"
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
