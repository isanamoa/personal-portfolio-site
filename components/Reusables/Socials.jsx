import { Box } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "next/link";
import { SiFrontendmentor } from 'react-icons/si'
const Socials = () => {
  
  return (
    <Box className="flex flex-row-reverse items-center gap-x-2 text-sm">
        <Link href={"https://twitter.com/Yannanahio?t=HmwNNt5qqgXXvX_ajhDbiw&s=08"} target="_blank">
          <Twitter size='small' />
        </Link>
        <Link href={"https://www.linkedin.com/in/isaac-ansah-amoah-535759b0"} target="_blank">
          <LinkedIn size='small' />
        </Link>
        <Link href={"https://www.frontendmentor.io/"} target="_blank">
          <SiFrontendmentor  />
        </Link>
        <Link href={"https://github.com/isanamoa"} target="_blank">
          <GitHub size='small' />
        </Link>
    </Box>
  )
}

export default Socials;
