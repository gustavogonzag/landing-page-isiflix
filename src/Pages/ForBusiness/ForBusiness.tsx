function ForBusiness() {
  return (
<section className="w-full flex justify-center py-20">
      <div className="max-w-6xl mx-4 flex flex-col gap-12">
        
        {/* Título */}
        <div className="text-center space-y-4">
          <h2 className="font-['Loos-Normal'] text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Planos Corporativos para sua <span className="text-[#E7205F]">equipe de desenvolvimento</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos planos corporativos para transformar sua equipe, formar talentos e contribuir para a evolução profissional de cada colaborador.
          </p>
        </div>

        {/* Lema */}
        <div className="bg-gradient-to-r from-[#E7205F] to-[#941F44] px-8 py-6 rounded-xl shadow-lg text-center">
          <p className="text-2xl sm:text-3xl font-semibold text-white italic mb-3">
            “Software is about people”
          </p>
          <p className="text-gray-100 text-lg max-w-3xl mx-auto">
            Mais do que código, acreditamos que o desenvolvimento é sobre <span className="text-white font-bold">pessoas</span>.  
            As melhores práticas arquiteturais e ferramentas modernas só fazem sentido se atenderem à principal variável dessa equação: <span className="text-white font-semibold">o usuário</span>.
          </p>
        </div>

        {/* Lista de programas */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Conheça alguns programas que oferecemos
          </h3>
          <ul className="grid sm:grid-cols-2 gap-6 text-gray-200">
            <li className="bg-[#191919] border border-[#E7205F] rounded-xl p-5 hover:scale-105 transition">
              Programa de Formação de Estagiários
            </li>
            <li className="bg-[#191919] border border-[#E7205F] rounded-xl p-5 hover:scale-105 transition">
              Ramp-up e mentoria para grupos de profissionais
            </li>
            <li className="bg-[#191919] border border-[#E7205F] rounded-xl p-5 hover:scale-105 transition">
              Palestras corporativas sobre trabalho, compromisso, estudo contínuo e a “vida real do mercado”
            </li>
            <li className="bg-[#191919] border border-[#E7205F] rounded-xl p-5 hover:scale-105 transition">
              Imersões para formação de CTOs
            </li>
            <li className="bg-[#191919] border border-[#E7205F] rounded-xl p-5 hover:scale-105 transition">
              Imersões em tecnologias emergentes
            </li>
            <li className="bg-[#191919] border border-[#E7205F] rounded-xl p-5 hover:scale-105 transition">
              Bootcamps e formações de curto prazo para iniciantes
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ForBusiness