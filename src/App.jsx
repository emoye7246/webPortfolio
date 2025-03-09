import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar/Navbar'
import playIcon from '/Users/elijahmoye/Desktop/web_Portfolio/webPortfolio/src/assets/icons/play-button.png'
import playFair from '/Users/elijahmoye/Desktop/web_Portfolio/webPortfolio/src/assets/fonts/Playfair_Display_SC/PlayfairDisplaySC-Regular.ttf'

export const App = () => {

  return (
    <>
      <div className='flex flex-row max-w-screen min-h-screen bg-[#F9F9F9] '>

      <div className='flex flex-col min-h-full mt-8 w-[95vw] justify-between p-10 gap-y-10 '>

        <div className='flex flex-row justify-between'>

            <div>
              <div className='text-[24px] text-[#9B9DA1] font-[playFair]'>Elijah Moye</div>
              <hr className='border-[#B3AFAF] ' />
            </div>


              <div className='flex flex-row gap-x-5'>
                <img src={playIcon} alt="play_icon" className='h-[24px] w-[24px]' />
                <div className='font-[playFair]'>Let the music play on</div>
              </div>

          </div>


            <div className='flex flex-row max-w-full justify-between gap-10'>

                <div className='flex flex-col items-start justify-start gap-y-10'>

                  <div className='w-[0.3px] h-[100px]  bg-gray-400'></div>
                  <div className='w-[0.3px] h-[100px]  bg-gray-400'></div>
                  <div className='w-[0.3px] h-[100px]  bg-gray-400'></div>
                  <div className='w-[0.3px] h-[100px]  bg-gray-400'></div>

                </div>

              <div className='flex items-center justify-center grow'>
                <Outlet />
              </div>
            </div>
           

            <div className='flex flex-row gap-x-8'>
              <div>Icon</div>
              <div>toggle</div>
              <div className='font-[playFair]'>light mode is on</div>
            </div>


      </div>


          <div className="flex w-[5vw] min-h-full border-gray-200 border-1 p-14 bg-white drop-shadow-sm">
              
          </div>
          


      </div>
    </>
  )
}

