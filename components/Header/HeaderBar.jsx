import {  Box, Container,  } from "@mui/material";

import AboutUs from "../Reusables/AboutUs";
import Social from "../Reusables/Socials";
const HeaderBar = () => {
  return (
    <Box sx={{ mb:2, zIndex: 'modal' }} className="w-full absolute top-0">

        <Container sx={{ display:'flex', flexDirection:{xs:'column', sm:'row'}, 
              alignItems:'center', justifyContent:{xs:'center', sm:'space-between'},
              pl:{md:2}
            }} 
            className="lg:w-[75rem] mx-auto"
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
