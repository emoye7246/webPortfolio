import { useContext } from "react"
import { WebContext } from "../App"
import { lightModeIcons } from "../icons"
import { Link } from "react-router-dom"

export const AboutPage = () => {

    const {darkMode} = useContext(WebContext)


    return (

        <>
            <div className="flex flex-row w-full h-full items-center justify-evenly">

                    <Link to='/'>
                        <div className="absolute top-[12%] left-[5%] flex flex-row gap-x-5">
                            <img src={lightModeIcons.backButton} alt="backIcon" />
                            <div>Go Back</div>
                        </div>
                    </Link>


                <div className="flex flex-col items-center justify-center w-[50vw] h-full gap-y-10">



                    <div className="w-[500px] h-full border-2">



                    </div>

                </div>

                <div className="flex flex-col w-[50vw] h-full items-start gap-y-4">

                    <div className="flex flex-col w-full gap-y-2">
                        <hr className="w-44 text-start"/>
                        <div className="text-4xl text-start">Elijah Moye</div>
                        <div>Frontend/UI UX developer</div>
                    </div>

                    <div className="flex w-[500px] h-full border-2 border-black">

                    </div>
                    
                    
                </div>

            </div>
        </>
    )
}