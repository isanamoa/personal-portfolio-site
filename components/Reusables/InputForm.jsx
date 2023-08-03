import { Box, Button, TextField } from "@mui/material"

const InputForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form is active')
  }

  return (
    <Box className="w-full px-10 sm:px-0 sm:w-[50%] lg:w-[40%] flex flex-col gap-4 justify-around sm:justify-center">
      {/**
       * `${displayForm ? "w-full px-10 sm:px-0 sm:w-[50%] lg:w-[40%] flex flex-col gap-4 justify-around sm:justify-center": 'hidden'}`
       */}
      <form onSubmit={handleSubmit}>
      
        <Box className='pb-3'>
          
          <TextField
            name="userName"
            label="Your Name: "
            type="text"
            variant="standard"
            className="w-full text-gray-500 border-b-2 border-b-teal-500  enabled:hover:bg-slate-100"              
            required
          />
        
        </Box>

        <Box className='pb-3'>
          
          <TextField
            name="userEmail"
            label="Your Email: "
            type="email"
            variant="standard"
            className="w-full text-gray-500 border-b-2 border-b-teal-500 enabled:hover:bg-slate-100"          
            required
          />

        </Box>

        <Box className='pb-3'>
          <TextField
            name='userMessage'
            label="Enter Message: "
            placeholder="Message..."
            multiline
            maxRows={4}
            variant="standard"
            className="w-full"
            required
          />
        </Box>

        <Box className='flex gap-3 items-end justify-end'>
            <Button type="submit" className=" bg-white text-blue-700 border-b-2 
              border-b-teal-500 rounded-none 
              enabled:hover:bg-blue-800
              enabled:hover:text-white capitalize">
              Send Message
            </Button>
        </Box>
      </form>
    </Box>
  )
}

export default InputForm
