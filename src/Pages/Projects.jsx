import { useContext, useState } from "react"
import { WebContext } from "../App"

export const ProjectsPage = () => {

    const Projects = [

        {title: 'Mock Shopping Page', link: 'https://mock-shopping-pages.vercel.app/', image: '/assets/websites/Shopping.PNG', github: 'https://github.com/emoye7246/Mock-Shopping-Page', figma:'https://www.figma.com/design/HiFfk6YBD3T8SWB5KmkXFb/Shopping-Cart?m=auto&t=pIIqUrBHmYVKAXUl-6'},
        {title: 'Stock Application', link: 'https://stock-app-ashen-theta.vercel.app/', image: '/assets/websites/Invest.PNG', github: 'https://github.com/emoye7246/StockApp', figma:'https://www.figma.com/design/vw1Bv3deQlxUr3ogYDgPvT/Investment-App?m=auto&t=pIIqUrBHmYVKAXUl-6'},
        {title: 'CV Application Builder', link: 'https://cvappfreeser.netlify.app/', image: '/assets/websites/freeCv.PNG', github: 'https://github.com/emoye7246/cvApplication', figma:'https://github.com/emoye7246/cvApplication'},
        {title: 'Sketch Application', link: 'https://sketch-react.vercel.app/', image: '/assets/websites/letsSketch.PNG', github: 'https://github.com/emoye7246/sketch-REACT', figma:'https://www.figma.com/design/Xtj3V04jRk3YM5rYZ7AVQ3/Sketch-App?m=auto&t=pIIqUrBHmYVKAXUl-6'},
        {title: 'Memory Card Game', link: 'https://memory-card-opal-three.vercel.app/', image: '/assets/websites/memoryCardGame.PNG', github: 'https://github.com/emoye7246/MemoryCard', figma:'https://www.figma.com/design/NUOh8Q7FRQxTNDuq3cPl3A/Spiderman-Game?m=auto&t=pIIqUrBHmYVKAXUl-6'},
        {title: 'Movie Finder', link: 'https://movie-finder-ten-xi.vercel.app/', image: '/assets/websites/MovieFInd.PNG', github: 'https://github.com/emoye7246/movieFinder--', figma:'https://www.figma.com/design/FcBeEYekN8jgJgYCMPdB12/Movie-Finder?m=auto&t=pIIqUrBHmYVKAXUl-6'},
        {title: 'Todo App', link: 'https://todo-react-omega-two.vercel.app/', image: '/assets/websites/todo.PNG', github: 'https://github.com/emoye7246/todo_React', figma: 'https://www.figma.com/design/rVa98QNEth6j5Qw36BSbbu/Todo-App?m=auto&t=pIIqUrBHmYVKAXUl-6'},
        {title: 'Weather App', link: 'https://weather-app-nu-ashy-20.vercel.app/', image: '/assets/websites/whatsTheWeather.PNG', github: 'https://github.com/emoye7246/WeatherApp', figma:'https://www.figma.com/design/H4QLbmRjfLKYHgqv2cSD5y/Weather-App?m=auto&t=pIIqUrBHmYVKAXUl-6'}


    ]

    const {darkMode} = useContext(WebContext)

    

    return (

        <>  
            <div style={{fontFamily: 'Playfair'}} className="flex flex-row w-full h-full" id="fade">

                <div className="w-[35vw] h-full justify-evenly items-center ">

                    <div className={darkMode ? "flex flex-col items-center h-full p-10 justify-evenly bg-gray-300/10 text-white" : "flex flex-col items-center h-full p-10 justify-evenly bg-gray-100 text-black"}>
                        
                        <div className="flex flex-col">
                            <div  className="text-center text-3xl">My Projects</div>
                            <hr className="w-[300px]" />
                        </div>


                        <div  className="flex flex-col gap-y-20 items-center justify-center">
                            <p>
                            Here’s a collection of projects I’ve built, showcasing my skills in React, JavaScript, HTML, and CSS. 
                            Each project reflects my passion for creating interactive, user-friendly web applications. 
                            From games and productivity tools to functional web apps, I focus on clean code, responsive design, and seamless user experiences.

                            </p>

                            <p>
                                Explore my work in the section to the right, and feel free to check out the code by clicking any of the github links or click the live preview links to try the live demos!

                            </p>
                        </div>

                    </div>

                </div>

                <div className="flex justify-center w-[65vw] h-full items-start overflow-auto">

                    <div className="grid grid-cols-2 grid-rows-1 gap-12 p-14">

                        {Projects.map((website, i) => 

                                <div className="flex flex-col transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer text-center">
                                    
                                    <div className={darkMode ? 'text-white' : 'text-black'}>{website.title}</div>
                                    <img src={website.image} alt='websiteLogo' className="w-[300px] h-[400px] rounded-[10px]" />

                                    <div className="flex flex-row w-full items-center justify-evenly mt-4">

                                        <button onClick={() => window.open(`${website.github}`, '_blank', "noopener,noreferrer")} id="linkButton">Github</button>
                                        <button onClick={() => {window.open(`${website.figma}`, '_blank', "noopener,noreferrer")}} id="linkButton">Figma</button>
                                        <button onClick={() => {window.open(`${website.link}`, '_blank', "noopener,noreferrer")}} id="linkButton">Live Preview</button>

                                    </div>


                                </div>
                        )}


                    </div>

                </div>
            </div>
        </>
    )

}