import { useContext } from "react"
import { darkModeIcons, lightModeIcons, myImages } from "../icons"
import { FadeInWhenVisible, FadeIn } from "../stylingComponents/fadeOnScroll"
import { WebContext } from "../App"

export const Contact = () => {

    const {darkMode} = useContext(WebContext)
    return (

        <>
            <div style={{fontFamily: `Playfair`}}  className={darkMode ? "flex flex-col w-full justify-center items-center gap-y-20 text-white" : "flex flex-col w-full justify-center items-center gap-y-20 text-black"}>

                <FadeIn>
                    <div className="flex flex-col">
                        <div  className={darkMode ? 'text-white text-7xl' : 'text-black text-7xl' }>Contact</div>
                        <hr className={darkMode ? 'border-[1px] border-white w-[700px]' : 'border-[1px] border-black w-[700px]'}/>
                    </div>
                </FadeIn>

                    <div className="flex flex-row w-[50vw] justify-between  items-center">

                        <div>
                            <img src={darkMode ? darkModeIcons.contact : lightModeIcons.contact} alt="contactIcon" srcset="" className="w-[200px] h-[200px]" />
                        </div>

                        <div className="flex flex-col">

                            <div className="flex w-[400px] text-start justify-center flex-col gap-y-10 mb-5">

                                <div className="flex flex-col gap-y-5 h-full justify-evenly">
                                    <p className="text-2xl">Let’s Connect!</p>

                                    <p>
                                        I’m always open to new opportunities, collaborations, and discussions about web development and game design. 
                                        Whether you have a project in mind, a job opportunity, or just want to chat about tech, feel free to reach out!
                                    </p>
                                </div>
                                <hr className={darkMode ? 'border-white' : 'border-black'} />
                            </div>

                            <div className="flex flex-col items-center justify-center gap-y-6">

                                <div className="flex flex-row gap-x-10  w-full items-start text-start">
                                    <img src={darkMode ? darkModeIcons.email : lightModeIcons.email} alt="emailIcon" className="w-[24px] h-[24px]" />
                                    <div className={darkMode ? 'text-white' : 'text-black'}>elijahmoye.developer@gmail.com</div>
                                </div>

                                <div className="flex flex-row gap-x-10  w-full items-start text-start">
                                    <img src={darkMode ? darkModeIcons.phone : lightModeIcons.phone} alt="phoneIcon" className="w-[24px] h-[24px]" />
                                    <div className={darkMode ? 'text-white' : 'text-black'}>(602) 919 - 5399</div>
                                </div>

                                <a href="/assets/Web Development Resume.pdf" download className="flex flex-row gap-x-10 w-full" >
                                    <img src={darkMode ? darkModeIcons.download : lightModeIcons.download} alt="downloadIcon" className="w-[24px] h-[24px]" />
                                    <div className={darkMode ? 'text-white' : 'text-black'}> Download My Resume</div>
                                </a>
                  
                            </div>
                            
                        </div>

                    </div>

            </div>
        </>
    )
}