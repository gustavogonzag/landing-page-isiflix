import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface ButtonPinkProps {
  textButton: string;
  linkButton: string;
}

function ButtonPink({ textButton, linkButton }: ButtonPinkProps) {
  // caso 1: link externo (abre em nova aba)
  if (linkButton.startsWith("http")) {
    return (
      <a
        href={linkButton}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-pink-700 text-white rounded-lg hover:bg-pink-800 transition"
      >
        {textButton}
      </a>
    );
  }

  // caso 2: link com hash (scroll suave para seção)
  if (linkButton.includes("#")) {
    return (
      <HashLink
        smooth
        to={linkButton}
        className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
      >
        {textButton}
      </HashLink>
    );
  }

  // caso 3: rota interna normal
  return (
    <Link
      to={linkButton}
      className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
    >
      {textButton}
    </Link>
  );
}

export default ButtonPink;
