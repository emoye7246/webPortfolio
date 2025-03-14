import { App } from "./App";
import { Homepage } from "./Homepage/homepage";
import { AboutPage } from "./Pages/About";
import { ProjectsPage } from "./Pages/Projects";

export const routes = [

    {
        path: '/', 
        element: <App />, 
        children: [

            {index: true, element: <Homepage />},
            {path: 'projects', element: <ProjectsPage />},
            {path: 'about', element: <AboutPage />}
        ]
    }
]