import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import playIcon from '/Users/elijahmoye/Desktop/web_Portfolio/webPortfolio/src/assets/icons/play-button.png'
import figma from '/Users/elijahmoye/Desktop/web_Portfolio/webPortfolio/src/assets/icons/figma.png'
import mail from '/Users/elijahmoye/Desktop/web_Portfolio/webPortfolio/src/assets/icons/mail.png'
import github from '/Users/elijahmoye/Desktop/web_Portfolio/webPortfolio/src/assets/icons/outline.png'
import linkedIn from '/Users/elijahmoye/Desktop/web_Portfolio/webPortfolio/src/assets/icons/linkedin.png'
import both from '/Users/elijahmoye/Desktop/web_Portfolio/webPortfolio/src/assets/icons/day-and-night.png'

export const App = () => {

  const [theme, setTheme] = useState(() => {

    return localStorage.getItem('theme') || ('light')
  })


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <>

    
      <div className='flex flex-row max-w-screen min-h-screen bg-[#F9F9F9] '>

      <div className='flex flex-col min-h-screen mt-8 w-[95vw] justify-between p-10 gap-y-4 '>

        <div className='flex flex-row grow justify-between'>

            <div>
              <div className='text-[24px] text-[#9B9DA1] font-[playFair]'>Elijah Moye</div>
              <hr className='border-[#B3AFAF] ' />
            </div>


              <div className='flex flex-row gap-x-5'>
                <img src={playIcon} alt="play_icon" className='h-[24px] w-[24px]' />
                <div className='font-[playFair]'>Let the music play on</div>
              </div>

          </div>


            <div className='flex flex-row max-w-full justify-between gap-10 flex-grow'>

                <div className='flex flex-col items-start justify-start gap-y-10'>

                  <div className='w-[0.3px] h-[100px]  bg-gray-400'></div>
                  <div className='w-[0.3px] h-[100px]  bg-gray-400'></div>
                  <div className='w-[0.3px] h-[100px]  bg-gray-400'></div>
                  <div className='w-[0.3px] h-[100px]  bg-gray-400'></div>

                </div>

              <div className='flex items-center justify-center grow h-[calc(100vh-200px)] overflow-y-scroll'>
                <Outlet />
              </div>
            </div>
           

            <div className='flex flex-row gap-x-4'>
              <img src={both} alt="" className='w-[24px] h-[24px]' />
              <label class="flex flex-row items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                </label>
              <div className='font-[playFair]'>light mode is on</div>

            </div>


      </div>


          <div className="flex flex-col w-[5vw] min-h-full p-5 items-center border-gray-200 border-1  bg-white drop-shadow-sm justify-between">


            <div>
              <img src={mail} alt="mail-icon" className='h-[24px] w-[24px]'/>
            </div>

            <div className='flex flex-col gap-y-10'>
              <img src={github} alt="mail-icon" className='h-[32px] w-[32px]'/>
              <img src={linkedIn} alt="mail-icon" className='h-[32px] w-[32px]'/>
              <img src={figma} alt="mail-icon" className='h-[32px] w-[32px]'/>

            </div>
              
          </div>
          


      </div>
    </>
  )
}