import { useContext } from "react"
import { FadeInWhenVisible, FadeIn } from "../stylingComponents/fadeOnScroll"
import { WebContext } from "../App"
import { lightModeIcons, darkModeIcons} from "../icons"

export const SkillsFront = () => {

    const {darkMode} = useContext(WebContext)

    const FrontSkills = [

        {Skill: 'HTML5', image: '/assets/icons/html.PNG'},
        {Skill: 'CSS', image: '/assets/icons/css.PNG'},
        {Skill: 'Javascript(ES6+)', image: '/assets/icons/javascript.PNG'},
        {Skill: 'React.js', image: '/assets/icons/react.PNG'},
        {Skill: 'Tailwind Css', image: '/assets/icons/tailwind.PNG'},
        {Skill: 'Figma', image: '/assets/icons/figmaIcon.PNG'},
    ]

    return (

        <>

        
            <div className="flex flex-col justify-evenly gap-y-20">

                <FadeInWhenVisible>
                    <div className="flex flex-col items-center justify-center">
                        <div style={{fontFamily: `Playfair`}} className={darkMode ? 'text-white text-7xl' : 'text-black text-7xl' }>My Frontend Skills</div>
                        <hr className={darkMode ? 'border-[1px] border-white w-[700px]' : 'border-[1px] border-black w-[700px]'}  />
                    </div>
                </FadeInWhenVisible>

                <div className="grid grid-cols-3 grid-rows-1 gap-20">

                    {FrontSkills.map((skill, i) => 

                        <div key={i} className="flex flex-col items-center justify-center">
                                    
                                    <img src={skill.image} alt="skillIcon" className="w-[200px] h-[200px]" />
                                    <div style={{fontFamily: `Playfair`}} className={darkMode ? 'text-white' : 'text-black'}>{skill.Skill}</div>
                        </div>
                    )}

                </div>

                 <FadeIn>

                        <div className='flex flex-row items-center text-center justify-center relative gap-x-5 mt-3'>
                            <img src={darkMode ? darkModeIcons.arrow : lightModeIcons.arrowLight} alt="arrowIcons" className='w-[24px] h-[24px]' />
                            <div className={darkMode ? 'text-white' : 'text-black'}>Scroll Down</div>
                            <img src={darkMode ? darkModeIcons.arrow : lightModeIcons.arrowLight} alt="arrowIcons" className='w-[24px] h-[24px]' />
                        </div>

                </FadeIn>

            </div>
        </>
    )
}


