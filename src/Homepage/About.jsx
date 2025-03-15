import { useContext } from "react"
import { WebContext } from "../App"
import { FadeIn, FadeInWhenVisible } from "../stylingComponents/fadeOnScroll"
import { myImages, darkModeIcons, lightModeIcons } from "../icons"

export const AboutSection = () => {

    const {darkMode} = useContext(WebContext)

    return (

        <>
             <div className='flex flex-col w-full h-full items-center justify-center gap-y-16 mb-10'>
            
                <div className='flex flex-row w-full items-center justify-evenly'>

                    <div className='flex flex-col h-full justify-center'>
                        
                        <FadeInWhenVisible>
                            <div style={{fontFamily: `Playfair`}} className={darkMode ? 'text-gray-300/10 text-[200px] font-light' : 'text-gray-500/10 text-[200px] font-light'}>About</div>
                        </FadeInWhenVisible>
                        <div style={{fontFamily: `Playfair`}} className={darkMode ? 'text-[60px] mt-[-60px] mr-[-200px] text-white' : 'text-[60px] mt-[-60px] mr-[-200px]'}>About Me</div>
                        
                    </div>

                    <div>
                        <div className=" h-[400px] w-[600px] rounded-[14px]" style={{backgroundImage: `url(${myImages.headshotTransparent})`}}>

                            <img src={myImages.headshot} alt="pfp" className='w-[600px] h-[400px] object-contain' />
                            <div className={darkMode ? 'text-white' : 'text-black'}>Click here to learn more</div>

                        </div>
                    </div>

                </div>

                <FadeIn>
                    <div className='flex flex-row items-center text-center justify-center gap-x-5'>
                        <img src={darkMode ? darkModeIcons.arrow : lightModeIcons.arrowLight} alt="arrowIcons" className='w-[24px] h-[24px]' />
                        <div className={darkMode ? 'text-white' : 'text-black'}>Scroll Down</div>
                        <img src={darkMode ? darkModeIcons.arrow : lightModeIcons.arrowLight} alt="arrowIcons" className='w-[24px] h-[24px]' />
                    </div>
                </FadeIn>

            </div>
        </>
    )
}