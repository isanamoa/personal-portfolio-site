import { Box, Grid, Paper, Typography } from "@mui/material";
import PreviewCard from "../Reusables/PreviewCard";
import SkillSet from "../Reusables/SkillSet";

const MainView = () => {
  return (
    <Paper className="md:container mx-auto bg-red-200">
      <SkillSet />
      <Box className="py-5 px-10 sm:px-2 md:px-10">
        <Typography variant="h2" className="py-1 text-2xl font-semibold underline">
          PROJECTS
        </Typography>
        <Grid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-2 items-center justify-center gap-5">
          
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
        
        </Grid>
      </Box>
    </Paper>
  )
}

export default MainView;
