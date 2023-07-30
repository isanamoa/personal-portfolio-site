
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const PreviewTitle = ({ projectTitle }) => {
  
  return (
    <Box className='p-2 text-sm'>
        <Typography variant="h3" className='text-lg font-bold my-3'>{projectTitle.title}</Typography>
        <Box className='flex items-center justify-start flex-wrap gap-1 text-sm'>
            {
              projectTitle.dependency.map((value, index) =>(
                <Typography className="p-2" key={index}>{value}</Typography>
              ))
            }
            
        </Box>
        <Box className='flex items-center justify-evenly gap-5'>
            <Link href={projectTitle.projectLink} target="_blank" className="border-b-2 hover:text-green-400 border-green-700 p-2">View Project</Link>
            <Link href={projectTitle.projectCode} target="_blank" className="border-b-2 hover:text-green-400 border-green-700 p-2">View Code</Link>
        </Box>
    </Box>
  )
}

export default PreviewTitle
