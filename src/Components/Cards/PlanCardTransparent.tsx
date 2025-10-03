import React from "react";
import { Check } from "lucide-react";

type PlanCardProps = {
  title: string;
  installment: string; // ex: "12"
  currency: string; // ex: "R$"
  value: string; // ex: "79,90"
  features: string[];
};

const PlanCardTransparent: React.FC<PlanCardProps> = ({
  title,
  value,
  features,
}) => {
  return (
    <div className="w-80 h-130 max-w-sm bg-transparent border border-white rounded-xl p-6 flex flex-col justify-between">
      {/* Título */}
      <h3 className="text-white font-bold text-2xl text-center">{title}</h3>

      {/* Valor */}
      <div className="flex items-center justify-center gap-4">
        <div className="text-white font-['Loos-Normal'] font-bold text-7xl">{value}</div>
      </div>

      {/* Lista de recursos centralizada */}
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
        onClick={() => window.open("http://pay.hotmart.com/E77000704M?off=wtof0pep&_ga=2.256804363.1488422938.1698108024-2133290366.1660697971", "_blank")}
        className="mt-4 w-full py-3 bg-[#FA3573] text-white font-bold rounded-lg hover:opacity-90 cursor-pointer transition">
        Quero fazer parte
      </button>
    </div>
  );
};

export default PlanCardTransparent;
