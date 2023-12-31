
import { Box } from "@mui/material";
import ContactUs from "../Reusables/ContactUs";
import InputForm from "../Reusables/InputForm";
import AboutUs from "../Reusables/AboutUs";
import Social from "../Reusables/Socials";
//import { useState } from "react";

const Footer = () => {
  /*
  const [displayForm, setDisplayForm] = useState(false);
  const openForm = ()=>{
    setDisplayForm(prev=>!prev)
  }
  */
  return (
    <Box className="bg-[#242424] py-5">
      <Box className="lg:w-[75rem] mx-auto flex  flex-col items-center justify-center md:flex-row py-5 border-b-2 border-b-white">
        <ContactUs />
        <InputForm />
      </Box>

      <Box className="lg:w-[75rem] mx-auto flex flex-col  items-center justify-center sm:flex-row sm:justify-between py-5 px-2 md:px-0">
        <AboutUs />
        <Social />
      </Box>
    </Box>
  )
}

export default Footer;
