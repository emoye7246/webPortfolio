import { myImages } from "../icons"
import { FadeInWhenVisible } from "../stylingComponents/fadeOnScroll"

export const Contact = () => {

    return (

        <>
            <div className="flex flex-col justify-center items-center gap-y-20">

                <FadeInWhenVisible>
                    <div className="flex flex-col">
                        <div className="text-7xl">Contact</div>
                        <hr className="w-[700px]" />
                    </div>
                </FadeInWhenVisible>

                    <div className="flex flex-row w-[50vw] justify-between  items-center">

                        <div>
                            <img src={myImages.contactInfo} alt="contactIcon" srcset="" className="w-[200px] h-[200px]" />
                        </div>

                        <div className="flex flex-col">

                            <div className="flex flex-col  gap-y-10 mb-5">
                                <div className="w-[350px] h-[200px] border-2"></div>
                                <hr />
                            </div>

                            <div className="flex flex-col items-center justify-center gap-y-6">

                                <div className="flex flex-row gap-x-10  w-full items-start text-start">
                                    <img src={myImages.email} alt="email" className="w-[24px] h-[24px]" />
                                    <div>elijahmoye.developer@gmail.com</div>
                                </div>

                                <div className="flex flex-row gap-x-10  w-full items-start text-start">
                                    <img src={myImages.phone} alt="email" className="w-[24px] h-[24px]" />
                                    <div>(602) 919 - 5399</div>
                                </div>

                                <div className="flex flex-row gap-x-10 w-full" >
                                    <img src={myImages.download} alt="email" className="w-[24px] h-[24px]" />
                                    <div> Download Resume</div>
                                </div>
                  
                            </div>
                            
                        </div>

                    </div>

            </div>
        </>
    )
}