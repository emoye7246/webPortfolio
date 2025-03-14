import { useContext } from "react"
import { FadeInWhenVisible } from "../stylingComponents/fadeOnScroll"
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
                            <div className="text-7xl">My Frontend Tools</div>
                            <hr className="w-[700px]" />
                        </div>
                    </FadeInWhenVisible>

                    <div className="grid grid-cols-3 grid-rows-1 gap-20">

                        {FrontTools.map((tool, i) => 

                            <div key={i} className="flex flex-col items-center justify-center">

                                    <img src={tool.image} alt="skillIcon" className="w-[200px] h-[200px]" />
                                    <div>{tool.Tool}</div>

                            </div>
                        )}

                    </div>

                    <FadeInWhenVisible>
                        <div className='absolute w-full text-center items-center justify-center'>

                            <div className='flex flex-row items-center text-center justify-center relative gap-x-5 mt-3'>
                                <img src={darkMode ? darkModeIcons.arrowLight : lightModeIcons.arrowLight} alt="arrowIcons" className='w-[24px] h-[24px]' />
                                <div>Scroll Down</div>
                                <img src={darkMode ? darkModeIcons.arrowLight : lightModeIcons.arrowLight} alt="arrowIcons" className='w-[24px] h-[24px]' />
                            </div>

                        </div>
                    </FadeInWhenVisible>

            </div>
        </>
    )
}