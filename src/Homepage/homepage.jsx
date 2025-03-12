import eli from '/Users/elijahmoye/Desktop/web_Portfolio/webPortfolio/src/assets/eli.jpg'
import eliTransparent from '/Users/elijahmoye/Desktop/web_Portfolio/webPortfolio/src/assets/icons/transparent.png'
import playFair from '/Users/elijahmoye/Desktop/web_Portfolio/webPortfolio/src/assets/fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf'
import { useState,useEffect } from 'react'


export const Homepage = () => {



    return (

        <>
            <div className="flex flex-col w-full h-full gap-y-20 relative">

                <div>
                    <div className="absolute text-gray-500/10 text-[200px] tracking-[10px] font-[playFair] font-light" >About</div>
                </div>

                <div className="flex flex-row relative right-10 max-w-full justify-end items-center gap-x-20">
                    <div className='text-[60px] font-[playFair] '>About Me</div>
                    <div className=" h-[400px] w-[600px] rounded-[14px]" style={{backgroundImage: `url(${eliTransparent})`}}>
                        
                            <img src={eli} alt="" className='w-[600px] h-[400px] object-contain opacity-' />

                    </div>
                </div>

                <div>
                    <div className="absolute text-gray-500/10 text-[200px] tracking-[10px] font-[playFair] font-light ">About</div>
                </div>

                <div className="flex flex-row relative right-10 max-w-full justify-end items-center gap-x-20">
                    <div className='text-[60px] font-[playFair] '>About Me</div>
                    <div className=" h-[400px] w-[600px] rounded-[14px]" style={{backgroundImage: `url(${eliTransparent})`}}>
                        
                            <img src={eli} alt="" className='w-[600px] h-[400px] object-contain opacity-' />

                    </div>
                </div>

            </div>
        </>
    )
}