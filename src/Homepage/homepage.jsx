import { myImages } from '../icons'
import { FadeInWhenVisible } from '../stylingComponents/fadeOnScroll'
import { SkillsFront } from './frontSkills'
import { FrontTools } from './fronTools'
import { Contact } from './Contact'

export const Homepage = () => {

    return (

        <>
            <div className="flex flex-col w-full h-full text-center justify-evenly gap-y-20 relative">

                <div>
                    <FadeInWhenVisible>
                        <div className="absolute text-gray-500/10 text-[200px] tracking-[10px] font-[playFair] font-light" >About</div>
                    </FadeInWhenVisible>
                </div>

                <div className="flex flex-row relative right-10 max-w-full justify-end items-center gap-x-20">
                    <div className='text-[60px] font-[playFair] '>About Me</div>
                    <div className=" h-[400px] w-[600px] rounded-[14px]" style={{backgroundImage: `url(${myImages.headshotTransparent})`}}>
                        
                            <img src={myImages.headshot} alt="" className='w-[600px] h-[400px] object-contain opacity-' />

                    </div>
                </div>

                    
                <div>
                    <FadeInWhenVisible>
                        <div className="absolute text-gray-500/10 text-[200px] tracking-[10px] font-[playFair] font-light ">Work</div>
                    </FadeInWhenVisible>
                </div>

                <div className="flex flex-row relative right-10 max-w-full justify-end items-center gap-x-20">
                    <div className='text-[60px] font-[playFair] '>My Work</div>
                    <div className=" h-[400px] w-[600px] rounded-[14px]">
                        
                            <img src={myImages.work} alt="work-icon" className='w-[600px] h-[400px] object-contain' />
                    </div>
                </div>

                <div className='mb-10'>
                    <SkillsFront />
                </div>
                
                <div className='mb-10'>
                    <FrontTools />
                </div>

                <div>
                    <Contact />
                </div>
                  


            </div>
        </>
    )
}