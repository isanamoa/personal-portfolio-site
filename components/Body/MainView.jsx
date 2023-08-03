import { Box, Grid, Paper, Typography } from "@mui/material";
import PreviewCard from "../Reusables/PreviewCard";
import SkillSet from "../Reusables/SkillSet";

const MainView = () => {
  return (
    <Box className="md:container mx-auto mb-7">
      <SkillSet />
      <Box className="py-5 px-10 sm:px-2 md:px-10">
        <Typography variant="h2" className="py-1 text-2xl font-semibold underline">
          PROJECTS
        </Typography>
        {/** grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 */}
        <Box className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-3">
            {
              [
                {
                  title: 'Developers Job App',
                  dependency: ['JavaScript', 'Material UI', 'React',],
                  projectLink: "https://software-developers-jobs.netlify.app/",
                  projectCode: "https://github.com/isanamoa/devjobs-nextapp",
                  projectImages: [
                    "/assets/project-pics/devjobs-app-light-desk.png",
                    "/assets/project-pics/devjobs-app-dark-desk.png",
                  ]
                },
                {
                  title: 'Country API App',
                  dependency: ['JavaScript', 'Tailwind', 'React',],
                  projectLink: "https://next-country-api-app.netlify.app/",
                  projectCode: "https://github.com/isanamoa/countries_api_nextapp",
                  projectImages: [
                    "/assets/project-pics/countryApi-light-desk.png",
                    "/assets/project-pics/countryApi-dark-desk.png",
                  ]
                },
                {
                  title: 'TODO App',
                  dependency: ['JavaScript', 'Tailwind', 'React',],
                  projectLink: "https://isanamoa.github.io/todo_app/",
                  projectCode: "https://github.com/isanamoa/todo_app",
                  projectImages: [
                    "/assets/project-pics/todo-app-light-desk.png",
                    "/assets/project-pics/todo-app-dark-desk.png",
                  ]
                },
                {
                  title: 'GitHub Developer Finder App',
                  dependency: ['JavaScript', 'Tailwind', 'React',],
                  projectLink: "https://isanamoa.github.io/devfinder_app/",
                  projectCode: "https://github.com/isanamoa/devfinder_app",
                  projectImages: [
                    "/assets/project-pics/devfinder-app-dark-desk.png",
                    "/assets/project-pics/devfinder-app-light-desk.png",
                  ]
                },
                {
                  title: 'FLYO Landing Page',
                  dependency: ['JavaScript', 'Tailwind', 'React', 'Vite'],
                  projectLink: "https://isanamoa.github.io/flyo_landing_page/",
                  projectCode: "https://github.com/isanamoa/flyo_landing_page",
                  projectImages: [
                    "/assets/project-pics/flyo-landing-page-app-mobile.PNG",
                    "/assets/project-pics/flyo-landing-page-app-desk2.PNG",
                  ]
                },
              ].map((item, index) => (
                <PreviewCard key={index} projectData={item}/>
              ))
            }

            
        
        </Box>
      </Box>
    </Box>
  )
}

export default MainView;
