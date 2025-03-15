import { useContext } from "react"
import { WebContext } from "../App"
import { FadeIn, FadeInWhenVisible, FadeInWork } from "../stylingComponents/fadeOnScroll"
import { myImages, darkModeIcons, lightModeIcons } from "../icons"

export const WorkSection = () => {

    const {darkMode} = useContext(WebContext)

    return (

        <>
             <div className='flex flex-col w-full h-full text-center items-center justify-center p-6 gap-y-10'>

                        <div className='flex flex-row w-full justify-evenly'>

                            <div className='flex flex-col h-full text-center justify-center'>
                                
                                <FadeInWhenVisible>
                                    <div style={{fontFamily: `Playfair`}} className={darkMode ? 'text-gray-300/10 text-[200px] font-light' : 'items-center text-gray-500/10 h-full text-[200px] font-light'}>Work</div>
                                </FadeInWhenVisible>
                                <div style={{fontFamily: `Playfair`}} className={darkMode ? 'text-[60px] mt-[-60px] mr-[-200px] text-white' : 'text-[60px] mt-[-60px] mr-[-200px]'}>My Work</div>
                                
                            </div>

                            <div className='flex flex-col'>
                                    <img src={myImages.work} alt="pfp" className='w-[600px] h-[400px] object-contain' />
                                    <div className={darkMode ? 'text-white' : 'text-black'}>Click here to learn more</div>
                            </div>

                        </div>

                        <FadeIn>
                            <div className='flex flex-row items-center text-center justify-center gap-x-5 mt-3'>
                                <img src={darkMode ? darkModeIcons.arrow : lightModeIcons.arrowLight} alt="arrowIcons" className='w-[24px] h-[24px]' />
                                <div className={darkMode ? 'text-white' : 'text-black'}>Scroll Down</div>
                                <img src={darkMode ? darkModeIcons.arrow : lightModeIcons.arrowLight} alt="arrowIcons" className='w-[24px] h-[24px]' />
                            </div>
                        </FadeIn>

                    </div>
        </>
    )
}