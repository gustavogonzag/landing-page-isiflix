import React from "react";
import { Check } from "lucide-react";

type PlanCardProps = {
  title: string;
  installment: string; // ex: "12"
  currency: string; // ex: "R$"
  value: string; // ex: "79,90"
  features: string[];
  cashPayment: string;
};

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  installment,
  currency,
  value,
  features,
  cashPayment,
}) => {
  return (
    <div className="w-80 h-130 max-w-sm bg-gradient-to-b from-[#FA3573] to-[#941F44] border border-white rounded-xl p-6 flex flex-col justify-between gap-6 items-center">
      {/* Título */}
      <h3 className="text-white font-bold text-2xl text-center">{title}</h3>

      {/* Valor */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end text-white font-bold">
          <span className="text-1xl">{installment}x</span>
          <span className="text-base">{currency}</span>
        </div>
        <div className="text-white font-['Loos-Normal'] font-bold text-7xl">{value}</div>
      </div>
      <span className="text-white text-base"> ou R${cashPayment} à vista</span>

      {/* Lista de recursos */}
      <ul className="flex flex-col items-center gap-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-white text-sm">
            <Check className="w-4 h-4 text-[#FA3573]" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Botão */}
      <button
        onClick={() => window.open("https://pay.hotmart.com/E77000704M?checkoutMode=10&bid=1669750509031&split=12&_ga=2.256804363.1488422938.1698108024-2133290366.1660697971", "_blank")}
        className="mt-4 w-full py-3 bg-white text-[#E7205F] font-['Loos-Normal'] font-bold rounded-lg hover:opacity-90 cursor-pointer transition">
        Quero fazer parte
      </button>
    </div>
  );
};

export default PlanCard;
