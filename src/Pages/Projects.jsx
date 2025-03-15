export const ProjectsPage = () => {

    

    return (

        <>  
            <div style={{fontFamily: 'Playfair'}} className="flex flex-row w-full h-full">

                <div className="w-[35vw] h-full border-black justify-evenly items-center ">

                    <div className="flex flex-col items-center h-full p-10 justify-evenly bg-gray-100 text-black">
                        
                        <div className="flex flex-col">
                            <div  className="text-center text-3xl">My Projects</div>
                            <hr className="w-[300px]" />
                        </div>


                        <div  className="flex flex-col gap-y-20 items-center justify-center">
                            <p>
                            Here’s a collection of projects I’ve built, showcasing my skills in React, JavaScript, HTML, and CSS. 
                            Each project reflects my passion for creating interactive, user-friendly web applications. 
                            From games and productivity tools to functional web apps, I focus on clean code, responsive design, and seamless user experiences.

                            </p>

                            <p>
                                Explore my work below, and feel free to check out the code or try the live demos!

                            </p>
                        </div>

                    </div>

                </div>

                <div className="flex justify-center w-[65vw] items-center">

                    <div className="grid grid-cols-2 grid-rows-1 gap-10">

                        <div className="border-2 w-[200px] h-[200px]"></div>
                        <div className="border-2 w-[200px] h-[200px]"></div>


                    </div>

                </div>
            </div>
        </>
    )

}