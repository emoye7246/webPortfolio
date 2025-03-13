import { FadeInWhenVisible } from "../stylingComponents/fadeOnScroll"

export const FrontTools = () => {


    const FrontTools = [

        {Tool: 'Visual Studio Code', image: 'src/assets/IconsTools/vscode.PNG'},
        {Tool: 'NPM', image: 'src/assets/IconsTools/npm.PNG'},
        {Tool: 'Github', image: 'src/assets/IconsTools/github.PNG'},
        {Tool: 'Vercel', image: 'src/assets/IconsTools/vercel.PNG'},
        {Tool: 'Postman', image: 'src/assets/IconsTools/postman.PNG'},
        {Tool: 'Canva', image: 'src/assets/IconsTools/canva.PNG'},
    ]

    return (

        <>
            <div className="flex flex-col gap-y-20">

                    <FadeInWhenVisible>
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-7xl">My Frontend Tools</div>
                            <hr className="w-[700px]" />
                        </div>
                    </FadeInWhenVisible>

                    <div className="grid grid-cols-3 grid-rows-1 gap-20">

                        {FrontTools.map((tool, i) => 

                            <div key={i} className="flex flex-col items-center justify-center">

                                    <img src={tool.image} alt="skillIcon" className="w-[200px] h-[200px]" />
                                    <div>{tool.Tool}</div>

                            </div>
                        )}

                    </div>

            </div>
        </>
    )
}