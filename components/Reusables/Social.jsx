import { Box } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

const Social = () => {
  return (
    <Box className="flex flex-row-reverse items-center gap-2">
      <Twitter />
      <LinkedIn />
      <GitHub />
    </Box>
  )
}

export default Social;
