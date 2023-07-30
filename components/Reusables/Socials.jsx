import { Box } from "@mui/material";
import { AnchorTwoTone, GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "next/link";

const Socials = () => {
  
  return (
    <Box className="flex flex-row-reverse items-center gap-2">
        <Link href={"/"} target="_blank">
          <Twitter />
        </Link>
        <Link href={"/"} target="_blank">
          <LinkedIn />
        </Link>
        <Link href={"/"} target="_blank">
          <AnchorTwoTone />
        </Link>
        <Link href={"https://github.com/isanamoa"} target="_blank">
          <GitHub />
        </Link>
    </Box>
  )
}

export default Socials;
