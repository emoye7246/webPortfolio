import { App } from "./App";
import { Homepage } from "./Homepage/homepage";

export const routes = [

    {
        path: '/', 
        element: <App />, 
        children: [

            {index: true, element: <Homepage />}
        ]
    }
]