import { useContext } from "react"
import { WebContext } from "../App"
import { lightModeIcons, myImages } from "../icons"
import { Link } from "react-router-dom"

export const AboutPage = () => {

    const {darkMode} = useContext(WebContext)


    return (

        <>
            <div style={{fontFamily: 'Playfair'}} className={darkMode ? "flex flex-row w-full h-full items-center justify-evenly gap-y-10 text-white" : "flex flex-row w-full h-full items-center justify-evenly gap-y-10 text-black"} id="fade">


                <div className="flex flex-col items-center justify-center w-[50vw] h-full gap-y-10">


                    <div className="flex flex-col items-center justify-center w-[400px] h-full ">

                        <img src={myImages.headshot} alt="headshot" className={darkMode ? "rounded-[14px] border-2 drop-shadow-xs border-gray-200/10" : "rounded-[14px] border-2 drop-shadow-xs border-gray-200"}/>
                            
                    </div>

                </div>

                <div className="flex flex-col w-[50vw] h-full items-start gap-y-4">

                    <div className="flex flex-col w-full gap-y-2">
                        <hr className="w-44 text-start"/>
                        <div className="text-4xl text-start">Elijah Moye</div>
                        <div>Frontend/UI UX developer</div>
                    </div>

                    <div className="flex items-center justify-center w-[500px] h-full ">

                        <div className="flex flex-col h-full justify-evenly text-[18px]">

                            <p >
                                Hello my name is Elijah Moye and I'm a passionate web developer with a strong focus on building intuitive and engaging user experiences.  
                                With expertise in React, JavaScript, HTML, and CSS I am continuing to challenge and sharpen my skills with every website I build. 
                            </p>
                            
                            <p>
                                I've developed projects ranging from interactive games to practical web apps, always aiming to write clean, efficient code. 
                                Whether it's crafting dynamic UIs or solving complex problems, I love the challenge of bringing digital experiences to life.
                            </p>

                            <p>
                                Currently, I'm seeking opportunities to grow as a developer and collaborate on exciting projects. 
                                Feel free to check out my work or get in touch!
                            </p>
                            
                            
                        </div>

                    </div>
                    
                    
                </div>

            </div>
        </>
    )
}