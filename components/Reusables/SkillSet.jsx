import { Box, Typography } from "@mui/material"

const SkillSet = () => {
  return (

    <Box sx={{ py:5, px: { xs:5, sm:2, md:5 } }} >        
        <Typography variant="h2" className="text-2xl font-bold underline pb-3">
            SKILLS
        </Typography>
        <Box className="flex flex-col gap-6 py-2">
            <Box className="shadow-xl p-4 rounded-md bg-red-100">
                <Typography variant="h3" className="text-xl font-bold pb-2">Frontend</Typography>
                <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center sm:justify-evenly gap-5 py-5">
                    <Box>
                        <Typography variant="h4" className="text-lg pb-2 font-bold">HTML</Typography>
                        <Typography variant="body2" className="font-thin">3 Years Experience</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h4" className="text-lg pb-2 font-bold">CSS</Typography>
                        <Typography variant="body2" className="font-thin">3 Years Experience</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h4" className="text-lg pb-2 font-bold">JavaScript</Typography>
                        <Typography variant="body2" className="font-thin">3 Years Experience</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h4" className="text-lg pb-2 font-bold">React</Typography>
                        <Typography variant="body2" className="font-thin">3 Years Experience</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default SkillSet
