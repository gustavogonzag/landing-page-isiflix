import IsidroMethods from "../../../public/IsidroMetodos.png"
import MethodCards from "../../Components/Cards/MethodCards"

function MethodsSession() {
    return (
        <div className="w-full flex justify-center mt-25">
            <div className="max-w-7xl mx-10 flex flex-wrap justify-between items-center gap-x-20">
                <div>
                    <img className="max-h-[1000px] w-120 object-contain" src={IsidroMethods} alt="IsidroHeroSection" />
                </div>
                <div className='inline-flex flex-col gap-y-8 items-start'>
                    <h1 className="font-['Loos-Normal'] font-bold text-3xl sm:text-4xl md:text-5xl">
                        Por trás da plataforma, <br />
                        uma <span className='text-[#E7205F]'>método testado <br />
                            claro e sem enrolação.</span>
                    </h1>
                    <p className='text-lg sm:text-xl md:text-2xl'>
                        O professor Isidro estruturou a ISI.FLIX <br />
                        com base em anos de experiência em sala de aula, <br />
                        projetos reais e feedback de milhares de alunos. <br />
                        Aqui, você segue um caminho lógico, técnico e aplicável.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <MethodCards text="1. Conceito bem explicado" />
                        <MethodCards text="2. Aplicação direta em código" />
                        <MethodCards text="3. Prática com feedback" />
                        <MethodCards text="4. Projeto integrador" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MethodsSession