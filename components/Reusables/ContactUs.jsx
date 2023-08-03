import { Box, Typography,  } from "@mui/material";

const ContactUs = () => {
  return (
    <Box className="w-full sm:w-[50%] md:w-1/2 flex  flex-col items-center justify-center pb-2 mb-5 gap-4 ">
      <Typography variant="h3" className="text-2xl font-bold">Contact</Typography>
      <Typography variant="body2" className="text-sm text-center sm:text-left md:text-justify">
        I would love to hear about your project and how I <br />
        could help. Please fill in the form, and I’ll get back <br />
        to you as soon as possible.
      </Typography>
    </Box>
  )
}

export default ContactUs
