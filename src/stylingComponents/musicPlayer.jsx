import { useContext } from "react"
import { WebContext } from "../App"
import { darkModeIcons, lightModeIcons } from "../icons"
import { useState, useRef, useEffect } from "react"
import { myMusic } from "../music/songs"

export const MusicPlayer = () => {

    const [currentSongIndex, setCurrentSongIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(new Audio(myMusic[currentSongIndex].src))

    const {darkMode} = useContext(WebContext)


    useEffect(() => {
        if (audioRef.current) {
          audioRef.current.pause()
        }
        audioRef.current = new Audio(myMusic[currentSongIndex].song)
    
        if (isPlaying) {
          audioRef.current.play();
        }
      }, [currentSongIndex])
    
      const playPauseHandler = () => {
        if (!audioRef.current) return
        if (isPlaying) {
          audioRef.current.pause()
        } else {
          audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
      }
    
      const changeSong = (index) => {
        setCurrentSongIndex(index);
      }
    
      const nextSong = () => {
        const newIndex = (currentSongIndex + 1) % myMusic.length;
        changeSong(newIndex);
      }
    
      const prevSong = () => {
        const newIndex = (currentSongIndex - 1 + myMusic.length) % myMusic.length;
        changeSong(newIndex);
      }

      return (

          <div className="flex flex-row w-full h-full justify-center items-center gap-x-4 ">



            <div className="flex flex-row w-full gap-x-4 justify-between">


                <button onClick={() => prevSong()}>{<img src={darkMode ? darkModeIcons.back : lightModeIcons.back} alt="backIcon" className={isPlaying ? "h-[16px] w-[16px]" : 'hidden'}/>}</button>

                    {isPlaying ? <button onClick={() => playPauseHandler()}>{<img src={darkMode ? darkModeIcons.pause : lightModeIcons.pause} alt="pauseIcon" className="h-[16px] w-[16px]"/>}</button>: <button onClick={() => playPauseHandler()}>{<img src={darkMode ? darkModeIcons.play : lightModeIcons.play} alt="playIcon" className="h-[24px] w-[24px]"/>}</button>}

                <button onClick={() => nextSong()}>{<img src={darkMode ? darkModeIcons.next : lightModeIcons.next} alt="nextIcon" className={isPlaying ? "h-[16px] w-[16px]" : 'hidden'}/>}</button>
            </div>

            <div style={{fontFamily: 'Playfair'}} className={darkMode ? "flex w-full text-center whitespace-nowrap text-white" : "flex w-full text-center whitespace-nowrap text-black"}>Let the Music play on</div>



        </div>
      )
}