import { Html } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import SkillLevel from "./SkillLevel"

const SkillSet = () => {
  return (

    <Box sx={{ py:3, px: { xs:5, sm:2, md:5 } }} className="border-t-2 border-b-2 sm:border-b-0 border-y-white">        
        <Box className="flex flex-col gap-6 py-1">
            <Box className="shadow-xl p-4 rounded-md">
                <Box className="flex flex-col sm:grid sm:grid-cols-2 
                    md:grid-cols-3 lg:grid-cols-4 justify-center items-center sm:justify-evenly gap-x-5 gap-y-10 py-1">
                    
                    {
                        {
                            frontend: [
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
                                    experience: "3 years experience"
                                },
                                {
                                    name: 'Tailwind',
                                    level: 85,
                                    experience: "3 years experience"
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
