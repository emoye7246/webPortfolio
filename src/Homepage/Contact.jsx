import { useContext } from "react"
import { darkModeIcons, lightModeIcons, myImages } from "../icons"
import { FadeInWhenVisible } from "../stylingComponents/fadeOnScroll"
import { WebContext } from "../App"

export const Contact = () => {

    const {darkMode} = useContext(WebContext)
    return (

        <>
            <div className="flex flex-col justify-center items-center gap-y-20">

                <FadeInWhenVisible>
                    <div className="flex flex-col">
                        <div style={{fontFamily: `Playfair`}} className={darkMode ? 'text-white text-7xl' : 'text-black text-7xl' }>Contact</div>
                        <hr className={darkMode ? 'border-[1px] border-white w-[700px]' : 'border-[1px] border-black w-[700px]'}/>
                    </div>
                </FadeInWhenVisible>

                    <div className="flex flex-row w-[50vw] justify-between  items-center">

                        <div>
                            <img src={darkMode ? darkModeIcons.contact : lightModeIcons.contact} alt="contactIcon" srcset="" className="w-[200px] h-[200px]" />
                        </div>

                        <div className="flex flex-col">

                            <div className="flex flex-col  gap-y-10 mb-5">
                                <div className="w-[350px] h-[200px] border-2"></div>
                                <hr className={darkMode ? 'border-white' : 'border-black'} />
                            </div>

                            <div className="flex flex-col items-center justify-center gap-y-6">

                                <div className="flex flex-row gap-x-10  w-full items-start text-start">
                                    <img src={darkMode ? darkModeIcons.email : lightModeIcons.email} alt="emailIcon" className="w-[24px] h-[24px]" />
                                    <div style={{fontFamily: `Playfair`}} className={darkMode ? 'text-white' : 'text-black'}>elijahmoye.developer@gmail.com</div>
                                </div>

                                <div className="flex flex-row gap-x-10  w-full items-start text-start">
                                    <img src={darkMode ? darkModeIcons.phone : lightModeIcons.phone} alt="phoneIcon" className="w-[24px] h-[24px]" />
                                    <div style={{fontFamily: `Playfair`}} className={darkMode ? 'text-white' : 'text-black'}>(602) 919 - 5399</div>
                                </div>

                                <div className="flex flex-row gap-x-10 w-full" >
                                    <img src={darkMode ? darkModeIcons.download : lightModeIcons.download} alt="downloadIcon" className="w-[24px] h-[24px]" />
                                    <div style={{fontFamily: `Playfair`}} className={darkMode ? 'text-white' : 'text-black'}> Download Resume</div>
                                </div>
                  
                            </div>
                            
                        </div>

                    </div>

            </div>
        </>
    )
}