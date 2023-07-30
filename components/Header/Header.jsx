import { Box, } from "@mui/material";

import HeaderBar from "./HeaderBar";
import HeaderMain from "./HeaderMain";

const Header = () => {
    return (
      <Box sx={{ mb: 4}}>
        <HeaderBar />
        <HeaderMain />   
      </Box>
    )
  }
  
  export default Header;