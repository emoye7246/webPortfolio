import { useContext } from "react"
import { FadeInWhenVisible, FadeIn } from "../stylingComponents/fadeOnScroll"
import { WebContext } from "../App"
import { lightModeIcons, darkModeIcons } from "../icons"

export const FrontTools = () => {

    const {darkMode} = useContext(WebContext)

    const FrontTools = [

        {Tool: 'Visual Studio Code', image: '/assets/IconsTools/vscode.PNG'},
        {Tool: 'NPM', image: '/assets/IconsTools/npm.PNG'},
        {Tool: 'Github', image: '/assets/IconsTools/github.PNG'},
        {Tool: 'Vercel', image: '/assets/IconsTools/vercel.PNG'},
        {Tool: 'Postman', image: '/assets/IconsTools/postman.PNG'},
        {Tool: 'Canva', image: '/assets/IconsTools/canva.PNG'},
    ]

    return (

        <>
            <div className="flex flex-col gap-y-20">

                    <FadeInWhenVisible>
                        <div className="flex flex-col items-center justify-center">
                            <div style={{fontFamily: `Playfair`}} className={darkMode ? 'text-white text-7xl' : 'text-black text-7xl' }>My Frontend Tools</div>
                            <hr className={darkMode ? 'border-[1px] border-white w-[700px]' : 'border-[1px] border-black w-[700px]'} />
                        </div>
                    </FadeInWhenVisible>

                    <div className="grid grid-cols-3 grid-rows-1 gap-20">

                        {FrontTools.map((tool, i) => 

                            <div key={i} className="flex flex-col items-center justify-center">

                                    <img src={tool.image} alt="skillIcon" className="w-[200px] h-[200px]" />
                                    <div style={{fontFamily: `Playfair`}}  className={darkMode ? 'text-white' : 'text-black'}>{tool.Tool}</div>

                            </div>
                        )}

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