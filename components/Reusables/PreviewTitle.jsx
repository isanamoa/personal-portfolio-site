
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const PreviewTitle = () => {
  
  return (
    <Box className='p-2 text-sm'>
        <Typography variant="h3" className='text-lg font-bold my-3'>Title</Typography>
        <Box className='flex items-center justify-between gap-1 '>
            <Typography className="p-2">HTML </Typography>|
            <Typography className="p-2">CSS </Typography>|
            <Typography className="p-2">JavaScript</Typography>|
            <Typography className="p-2">React</Typography>
        </Box>
        <Box className='flex items-center justify-evenly gap-5'>
            <Link href={'/'} className="border-b-2 hover:text-green-400 border-green-700 p-2">View Project</Link>
            <Link href={'/'} className="border-b-2 hover:text-green-400 border-green-700 p-2">View Code</Link>
        </Box>
    </Box>
  )
}

export default PreviewTitle
