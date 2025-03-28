import { useState, useEffect, useContext, createContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { darkModeIcons, lightModeIcons, myImages } from './icons'
import { MusicPlayer } from './stylingComponents/musicPlayer'

export const WebContext = createContext(null)

export const App = () => {



  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
  
  }, [darkMode])


  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }
  return (
    <>

      <div className={darkMode ? 'flex flex-row max-w-screen min-h-screen bg-[#2E2E2E]' : 'flex flex-row max-w-screen min-h-screen bg-[#F9F9F9]'} id='open'>

      <WebContext.Provider value={{darkMode}}>

      <div className='flex flex-col min-h-screen  w-[95vw] justify-between p-10 gap-y-4 '>

        <div className='flex flex-row grow justify-between'>

            <div>
              <div className={darkMode ? 'text-[24px] text-white' : 'text-[24px] text-[#9B9DA1]'} style={{fontFamily: 'Playfair'}}>Elijah Moye</div>
              <hr className={darkMode ? 'border-[#d2d0d0] ' : 'border-[#B3AFAF] '} />
            </div>


              <div className='flex items-center justify-center'>
                <MusicPlayer />
              </div>

          </div>


            <div className='flex flex-row max-w-full justify-between gap-10 flex-grow'>

                <div className='flex flex-col items-start justify-start gap-y-10'>

                  <div className='w-[0.3px] h-[100px]  bg-gray-400'></div>
                  <div className='w-[0.3px] h-[100px]  bg-gray-400'></div>
                  <div className='w-[0.3px] h-[100px]  bg-gray-400'></div>
                  <div className='w-[0.3px] h-[100px]  bg-gray-400'></div>

                </div>

              <div className='flex items-center justify-center grow h-[calc(100vh-200px)] overflow-y-scroll  '>


                  <Outlet />


              </div>
            </div>
           

            <div className='flex flex-row gap-x-4'>
              <img src={darkMode ? darkModeIcons.darkMode : lightModeIcons.lightMode} alt="lightdarkIcon" className='w-[24px] h-[24px]' />
              <label class="flex flex-row items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" onClick={toggleDarkMode} />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                </label>
              <div style={{fontFamily: 'playfair'}} className={darkMode ? 'text-white' : 'text-black'}>{darkMode ? 'dark mode is on' : 'light mode is on'}</div>

            </div>


      </div>



          <div className={darkMode ? "flex flex-col w-[5vw] min-h-full p-5  items-center border-gray-200  bg-gray-300/10 drop-shadow-md justify-between" : "flex flex-col w-[5vw] min-h-full p-5  items-center border-gray-200 border-[1px]  bg-white drop-shadow-md justify-between"}>
 
            <a href="mailto:elijahmoye.developer@gmail.com" className='mt-5 cursor-pointer'>
              <img src={darkMode ? darkModeIcons.mail : lightModeIcons.mail} alt="mail-icon" className='h-[24px] w-[24px]'/>
            </a>

            <Link to='/'>
                  <img src={darkMode ? darkModeIcons.home : lightModeIcons.home} alt="homeIcon" className='h-[32px] w-[32px]' />
            </Link>

            <div className='flex flex-col gap-y-10 mb-5'>

              <div className='cursor-pointer' onClick={() => window.open('https://github.com/emoye7246', '_blank', "noopener,noreferrer")}>
                <img src={darkMode ? darkModeIcons.github : lightModeIcons.github} alt="github-icon" className='h-[32px] w-[32px]'/>
              </div>

              <div className='cursor-pointer' onClick={() => window.open('https://www.linkedin.com/in/elijah-moye-566676213/', '_blank', "noopener,noreferrer")}>
                <img src={darkMode ? darkModeIcons.linkedIn : lightModeIcons.linkedin} alt="linkedin-icon" className='h-[32px] w-[32px]'/>
              </div>

              <div className='cursor-pointer' onClick={() => window.open('https://www.figma.com/files/team/1468242853243992189/recents-and-sharing?fuid=1468242851430072543', '_blank', "noopener,noreferrer")}>
                <img src={darkMode ? darkModeIcons.figma : lightModeIcons.figma} alt="figma-icon" className='h-[32px] w-[32px]'/>
              </div>

            </div>
              
          </div>
          
          </WebContext.Provider>
      </div>
    </>
  )
}