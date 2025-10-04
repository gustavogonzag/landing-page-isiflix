import ButtonPinkBig from '../../Components/Buttons/ButtonPinkBig/ButtonPinkBig'

function HeroSection() {
    return (
        <div className="w-full flex justify-center mt-25">
            <div className="max-w-7xl mx-4 flex flex-col md:flex-row items-center justify-center gap-8">
                <div className='flex flex-col gap-y-8 items-start max-w-xl'>
                    <h1 className="font-['Loos-Normal'] font-bold text-3xl sm:text-4xl md:text-5xl">
                        Aprimore suas habilidades 
                        em uma plataforma feita para 
                        formar <span className='text-[#E7205F]'>devs <br />
                        completos.</span>
                    </h1>
                    <p className='text-lg sm:text-xl md:text-2xl'>
                        Estude com metodologia clara, pratique em projetos reais
                        e acompanhe seu avanço aula por aula.
                    </p>
                    <ButtonPinkBig textButton='Quero fazer parte' linkButton='#plans'/>
                </div>

                <div className="flex justify-center">
                    <img 
                        className="max-h-[500px] w-auto object-contain" 
                        src="/IsidroHero.png"
                        alt="IsidroHeroSection"  
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
