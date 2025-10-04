import SpotlightCard from '../../Components/Cards/SpotlightCard';

function TopicsSession() {
    return (
        <div className="w-full flex flex-col justify-center items-center mt-0">
            <div className="flex-col flex gap-y-6 items-center">
                <h1 className="font-['Loos-Normal'] font-bold text-3xl sm:text-4xl md:text-5xl text-center">
                    Como a <span className='text-[#E7205F]'>ISIFLIX</span> forma você.
                </h1>
                <p className='text-lg sm:text-xl md:text-2xl text-center'>Uma jornada construída com foco no que realmente importa: <br />
                    preparar você para o mercado com consistência.</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(250, 53, 115, 1)"
                    title="Imersão guiada:"
                    description="Aulas planejadas para conduzir você da base à aplicação, com foco no entendimento, não na decoreba.">
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(250, 53, 115, 1)"
                    title="Estudos de casos reais:"
                    description="Problemas que você encontrará em projetos verdadeiros, resolvidos com clareza e estratégia."
                ></SpotlightCard>
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(250, 53, 115, 1)"
                    title="Aplicação prática constante:"
                    description="Você não só assiste — você faz. Exercícios, desafios e simulações que fortalecem sua autonomia."
                ></SpotlightCard>
            </div>

        </div>
    )
}

export default TopicsSession