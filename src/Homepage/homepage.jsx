import { darkModeIcons, lightModeIcons, myImages } from '../icons'
import { FadeIn, FadeInWhenVisible } from '../stylingComponents/fadeOnScroll'
import { SkillsFront } from './frontSkills'
import { FrontTools } from './fronTools'
import { Contact } from './Contact'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { WebContext } from '../App'
import { AboutSection } from './About'
import { WorkSection } from './myWork'

export const Homepage = () => {

    const {darkMode} = useContext(WebContext)

    return (

        <>
            <div className="flex flex-col w-full h-full text-center justify-evenly gap-y-32 relative">


                    <Link to='about'>
                        <div className='mt-6 mb-10'>
                            <AboutSection />
                        </div>
                    </Link>


                    <Link to='projects'>
                        <div className='mt-20 mb-10'>
                            <WorkSection />
                        </div>
                    </Link>


                <div className='mt-30 mb-10'>
                    <SkillsFront />
                </div>
                
                <div className='mb-10'>
                    <FrontTools />
                </div>

                <div className='mb-10'>
                    <Contact />
                </div>

            </div>
        </>
    )
}