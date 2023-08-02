import { Html } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import SkillLevel from "./SkillLevel"

const SkillSet = () => {
  return (

    <Box sx={{ py:5, px: { xs:5, sm:2, md:5 } }} >        
        <Typography variant="h2" className="text-2xl font-bold underline pb-3">
            SKILLS
        </Typography>
        <Box className="flex flex-col gap-6 py-2">
            <Box className="shadow-xl p-4 rounded-md">
                <Typography variant="h3" className="text-xl font-bold pb-2">Frontend</Typography>
                <Box className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                    justify-center items-center sm:justify-evenly gap-5 py-5">
                    
                    {
                        {
                            "frontend": [
                                {
                                    name: 'HTML',
                                    level: 90,
                                    experience: "5 years experience"
                                },
                                {
                                    name: 'CSS',
                                    level: 70,
                                    experience: "5 years experience"
                                },
                                {
                                    name: 'JavaScript',
                                    level: 70,
                                    experience: "5 years experience"
                                },
                                {
                                    name: 'React',
                                    level: 70,
                                    experience: "2 years experience"
                                },
                                {
                                    name: 'Tailwind',
                                    level: 85,
                                    experience: "2 years experience"
                                },
                                {
                                    name: 'Material UI',
                                    level: 85,
                                    experience: "2 years experience"
                                },
                            ],
                        }.frontend.map((skill, index) => (
                            <Box key={index} className="flex flex-col justify-center items-center sm:justify-start">
                                <Typography variant="h5" 
                                    className="text-3xl pb-2 font-bold"
                                >
                                    {skill.name}
                                </Typography>
                                    {/**
                                     * <SkillLevel level={skill.level} />
                                     */}
                                <Typography variant="body2" 
                                    className="font-thin text-sm"
                                >
                                    {skill.experience}
                                </Typography>
                            </Box>
                        ))
                    }

                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default SkillSet
