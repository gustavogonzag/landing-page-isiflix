import ReactPlayer from "react-player";

function PlayerSection() {
    return (
        <div className="w-full flex flex-col justify-center items-center mt-25">
            <div className="flex-col flex gap-y-6 items-center">
                <h1 className="font-['Loos-Normal'] font-bold text-3xl sm:text-4xl md:text-5xl text-center">
                    Um <span className='text-[#E7205F]'>método</span> claro, direto e aplicável.
                </h1>
                <p className='text-lg sm:text-xl md:text-2xl text-center'>Assista ao vídeo e entenda como a ISI.FLIX foi pensada <br />
                    para formar desenvolvedores preparados para o mercado.</p>
            </div>
            {/* Player responsivo */}
            <div className="w-full flex justify-center mt-8">
                <div className="w-full max-w-5xl h-[500px] aspect-video relative rounded-xl overflow-hidden shadow-lg mb-0">
                    <ReactPlayer
                        src="https://www.youtube.com/watch?v=5pbChRfGeH8"
                        width="100%"
                        height="80%"
                        controls
                        style={{ display: 'block' }}
                    />
                </div>
            </div>

        </div>

    )
}

export default PlayerSection