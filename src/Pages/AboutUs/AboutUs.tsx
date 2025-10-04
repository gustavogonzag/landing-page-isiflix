import ScrollToTop from '../../Utils/ScrollToTop'

function AboutUs() {
  return (
    <div className="w-full flex flex-col gap-32 mt-25">
      
      {/* Quem é o Prof. Isidro */}
      <div className="flex justify-center">
        <div className="max-w-7xl mx-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              className="max-h-[500px] object-contain drop-shadow-lg"
              src="/IsidroAboutUs.png"
              alt="Professor Isidro"
            />
          </div>
          <div className="flex flex-col gap-y-6 items-start">
            <article>
              <h1 className="font-['Loos-Normal'] font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
                Quem é o <span className="text-[#E7205F]">Professor Isidro?</span>
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-gray-200 mt-6">
                Professor Isidro é docente há mais de <span className="font-semibold text-white">25 anos</span>, lecionando nos cursos de <span className="text-white">Ciência da Computação</span>, <span className="text-white">Engenharia da Computação</span>, <span className="text-white">Engenharia de Software</span> e áreas correlatas. 
                Reconhecido pela sua didática única, também é criador de um dos canais de ensino mais respeitados do YouTube, ajudando milhares de alunos a vencer desafios em disciplinas complexas, como <span className="font-semibold text-white">Estruturas de Dados</span>.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-300 mt-4">
                Além da sala de aula, é <span className="text-white font-semibold">Java Champion</span>, com mais de 20 anos de experiência em consultoria e projetos. Sua metodologia vai além do “como fazer”: ele ensina o <span className="text-white font-semibold">porquê</span>, explorando vantagens, desvantagens e consequências de cada decisão.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-300 mt-4">
                Você não vai apenas aprender a usar ferramentas — vai entender profundamente os conceitos que as sustentam. É esse DNA que fundamenta a <span className="text-[#E7205F] font-semibold">IsiFLIX</span>.
              </p>
            </article>
          </div>
        </div>
      </div>

      {/* O que é a IsiFLIX */}
      <div className="flex justify-center">
        <div className="max-w-7xl mx-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-y-6 items-start">
            <article>
              <h1 className="font-['Loos-Normal'] font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
                O que é a <span className="text-[#E7205F]">IsiFLIX?</span>
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-gray-200 mt-6">
                Mais que uma formação, a IsiFLIX é um <span className="font-semibold text-white">passo decisivo para sua carreira</span>. O projeto nasceu do sonho de centralizar décadas de experiência e conteúdos em um único lugar — robusto, prático e transformador.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-300 mt-4">
                Originalmente pensada como um curso técnico, a plataforma evoluiu para se tornar um <span className="font-semibold text-white">projeto de vida</span>, voltado para impactar pessoas e não apenas ensinar tecnologia.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-300 mt-4">
                Aqui você vai encontrar não só conteúdos sobre frameworks e ferramentas modernas, mas também <span className="text-white font-semibold">formações densas em fundamentos da Computação</span>, metodologias de trabalho e crescimento profissional. 
              </p>
            </article>
          </div>
          <div className="flex justify-center">
            <img
              className="max-h-[400px] md:max-h-[500px] w-auto object-contain drop-shadow-lg"
              src="/LOGO-ISIFLIX-FOOTER.png"
              alt="Logo IsiFLIX"
            />
          </div>
        </div>
      </div>

      <ScrollToTop />
    </div>
  )
}

export default AboutUs
