import { AppBar, Box, Container, Paper, Typography } from "@mui/material";
import Carder from "../Reusables/Carder";

const HeaderMain = () => {
  return (
    <Paper sx={{ mt:7, mb:3, display: 'flex', 
        flexDirection: {xs: 'column', md:'row'}, 
        width: {sm: '85%'}, px: 5, py: 1,
        mx: 'auto' }}>
        <Box sx={{ flex: 2 }}>
            <Typography variant="h5"> 
                Nana Ansah Yanney
            </Typography>
            <Typography variant="body1">
                Software Developer
            </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
            <Carder 
                title="Profile" 
                content="Efficient Software Programmer"
            />
        </Box>
    </Paper>
  )
}

export default HeaderMain
