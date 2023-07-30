
import PreviewBody from './PreviewBody';
import { Paper } from '@mui/material';
import PreviewTitle from './PreviewTitle';

const PreviewCard = ({ projectData }) => {
  const { title, dependency, projectLink, projectCode, projectImages } = projectData;
  return (
    <Paper className="w-full sm:max-w-[300px] xl:max-w-[546px] max-h-[470px] rounded-lg py-5 px-3 bg-[#242424] shadow-lg my-5">
      <PreviewBody projectImage={projectImages}/>
      <PreviewTitle projectTitle={{title, dependency, projectLink, projectCode}}/>  
    </Paper>
  )
}

export default PreviewCard
