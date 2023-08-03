
import PreviewBody from './PreviewBody';
import { Box } from '@mui/material';
import PreviewTitle from './PreviewTitle';
import Link from "next/link";

const PreviewCard = ({ projectData }) => {
  const { title, dependency, projectLink, projectCode, projectImages } = projectData;
  return (
    <Box className="relative w-full sm:max-w-[300px] xl:max-w-[540px] 
      max-h-[470px] py-5 bg-[#242424] shadow-lg my-5
      sm:last:hover:block">
      <PreviewBody projectImage={projectImages}/>
      <PreviewTitle projectTitle={{title, dependency}}/>
      <Box className="sm:absolute sm:z-50 top-[35%]  w-full">
        <Box className='flex sm:flex-col items-center justify-evenly sm:hidden gap-5'>
          <Link href={projectLink} target="_blank" className="border-b-2 hover:text-green-400 border-green-700 p-2">View Project</Link>
          <Link href={projectCode} target="_blank" className="border-b-2 hover:text-green-400 border-green-700 p-2">View Code</Link>
        </Box>
      </Box>  
    </Box>
  )
}

export default PreviewCard
