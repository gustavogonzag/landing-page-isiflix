import React from "react";

type ButtonWhiteProps = {
  textButton: string;
  linkButton: string;
};

const ButtonPinkWhite: React.FC<ButtonWhiteProps> = ({ textButton, linkButton }) => {
  return (
    <a
      href={linkButton}
      className="px-4 py-2 bg-white text-black rounded-lg cursor-pointer transition"
    >
      {textButton}
    </a>
  );
};

export default ButtonPinkWhite;
