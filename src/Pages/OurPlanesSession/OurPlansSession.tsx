import PlanCard from "../../Components/Cards/PlanCardPink"
import PlanCardTransparent from "../../Components/Cards/PlanCardTransparent"


function OurPlansSession() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-26">
      <div className="flex-col flex gap-y-6 items-center">
        <h1 id="plans" className="font-['Loos-Normal'] font-bold text-3xl sm:text-4xl md:text-5xl text-center">
          Conheça nossos planos
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
        <PlanCard
          title="Plano Anual"
          installment="12"
          currency="R$"
          value="79,90"
          features={[
            "1 ano de acesso",
            "Aulas completas",
            "Projetos práticos",
            "Suporte online",
            "Certificado",
            "Conteúdo atualizado"
          ]}
          cashPayment="791,60"
        />
        <PlanCardTransparent
          title="Plano Mensal"
          installment="12"
          currency="R$"
          value="94,00"
          features={[
            "Aulas completas",
            "Projetos práticos",
            "Suporte online",
            "Certificado",
            "Conteúdo atualizado"
          ]}
        />
      </div>

    </div>
  )
}

export default OurPlansSession