import InputOutlinedIcon from '@mui/icons-material/Input';
import { Box, Typography, Tooltip, IconButton } from "@mui/material"

const ContactUs = ({ openForm }) => {
  return (
    <Box className="w-full sm:w-[50%] md:w-1/2 flex  flex-col items-center justify-center pb-2 mb-5 gap-4 ">
      <Typography variant="h3" className="text-2xl font-bold">Contact</Typography>
      <Typography variant="body2" className="text-sm text-center md:text-justify">
        Let us discuss your project by filling the form. 
        <Tooltip title="Open form">
          <IconButton onClick={openForm}>
            <InputOutlinedIcon size='small'
            className='text-gray-50 cursor-pointer'
            fontSize="inherit"
            />
          </IconButton>
        </Tooltip>
        <br />
        Thank you.
      </Typography>
    </Box>
  )
}

export default ContactUs
