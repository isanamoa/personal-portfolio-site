
import PreviewBody from './PreviewBody';
import { Paper } from '@mui/material';
import PreviewTitle from './PreviewTitle';

const PreviewCard = () => {
  return (
    <Paper className="w-full xl:w-[546px] h-[420px] rounded-lg bg-gray-50 py-7 px-5 shadow-lg my-5">
        <PreviewBody />
        <PreviewTitle />
    </Paper>
  )
}

export default PreviewCard
