import { AppBar, Box, Container, Paper, Typography } from "@mui/material";

import AboutUs from "../Reusables/AboutUs";
import Social from "../Reusables/Social";
const HeaderBar = () => {
  return (
    <AppBar sx={{ mb:2 }}>
        <Container sx={{ display: 'flex', 
            width: {sm: '85%'}, px: 2,
            bgcolor: 'green' }} 
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
