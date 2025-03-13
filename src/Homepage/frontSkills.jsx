import { FadeInWhenVisible } from "../stylingComponents/fadeOnScroll"

export const SkillsFront = () => {

    const FrontSkills = [

        {Skill: 'HTML5', image: 'src/assets/icons/html.PNG'},
        {Skill: 'CSS', image: 'src/assets/icons/css.PNG'},
        {Skill: 'Javascript(ES6+)', image: 'src/assets/icons/javascript.PNG'},
        {Skill: 'React.js', image: 'src/assets/icons/react.PNG'},
        {Skill: 'Tailwind Css', image: 'src/assets/icons/tailwind.PNG'},
        {Skill: 'Figma', image: 'src/assets/icons/figmaIcon.PNG'},
    ]

    return (

        <>

        
            <div className="flex flex-col gap-y-20">

                <FadeInWhenVisible>
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-7xl">My Frontend Skills</div>
                        <hr className="w-[700px]" />
                    </div>
                </FadeInWhenVisible>

                <div className="grid grid-cols-3 grid-rows-1 gap-20">

                    {FrontSkills.map((skill, i) => 

                        <div key={i} className="flex flex-col items-center justify-center">
                                    
                                    <img src={skill.image} alt="skillIcon" className="w-[200px] h-[200px]" />
                                    <div>{skill.Skill}</div>
                        </div>
                    )}

                </div>

            </div>
        </>
    )
}


