import React from "react";
import { CircleCheck } from "lucide-react";

type CardProps = {
  title: string;
  description: string;
};

const CardTopics: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="w-90 h-40 bg-transparent border border-white rounded-lg p-5 flex flex-col justify-between items-center mt-10">
      {/* Título com ícone */}
      <div className="flex items-center gap-2">
        <CircleCheck className="w-10 h-10 text-white" />
      </div>
      {/* Descrição */}
      <div className="flex flex-col items-center">
        <h3 className="text-white font-['Loos-Normal'] font-bold text-lg">{title}</h3>
      <p className="text-white text-sm text-center">{description}</p>
      </div>
      
    </div>
  );
};

export default CardTopics;
