
import { Box, Typography } from "@mui/material";

const PreviewTitle = ({ projectTitle }) => {
  
  return (
    <Box className='p-2 text-sm mt-8'>
        <Typography variant="h3" className='text-lg font-bold my-2'>{projectTitle.title}</Typography>
        <Box className='flex items-center justify-start flex-wrap gap-1 text-sm'>
            {
              projectTitle.dependency.map((value, index) =>(
                <Typography className="p-1" key={index}>{value}</Typography>
              ))
            }
            
        </Box>
    </Box>
  )
}

export default PreviewTitle
