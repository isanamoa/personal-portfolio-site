
import PreviewBody from './PreviewBody';
import { Paper } from '@mui/material';
import PreviewTitle from './PreviewTitle';

const PreviewCard = () => {
  return (
    <Paper className="w-full sm:max-w-[300px] xl:max-w-[546px] max-h-[470px] rounded-lg bg-gray-50 py-7 px-5 shadow-lg my-5">
        <PreviewBody />
        <PreviewTitle />
    </Paper>
  )
}

export default PreviewCard
