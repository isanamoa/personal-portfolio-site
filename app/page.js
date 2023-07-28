'use client';
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MainView from "@/components/Body/MainView";
import { Box } from "@mui/material";

const Home = () => {
  return (
    
    <Box className="min-h-screen">
      <Header />
      <MainView />
      <Footer />
    </Box>
  );
};

export default Home;