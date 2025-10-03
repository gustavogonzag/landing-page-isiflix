import React from "react";
import { ArrowRight } from "lucide-react";

type ButtonPinkBigProps = {
  textButton: string;
  linkButton: string;
};

const ButtonPinkBig: React.FC<ButtonPinkBigProps> = ({ textButton, linkButton }) => {
  return (
    <a
      href={linkButton}
      className="inline-flex sm:w-auto w-full items-center justify-center gap-2 px-10 py-4 bg-[#E7205F] text-white text-lg font-['Loos-Normal'] font-bold rounded-lg hover:bg-[#d01d57] transition"
    >
      {textButton}
      <ArrowRight className="w-5 h-5" />
    </a>
  );
};

export default ButtonPinkBig;
