import LogoIsiflix from '../../../public/LOGO-ISIFLIX-NAVBAR 1.png'
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ButtonPink from '../../Components/Buttons/ButtonPink/ButtonPink';
import ButtonWhite from '../../Components/Buttons/ButtonWhite/ButtonWhite';
import { Link } from 'react-router-dom';

function NavbarMenu() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md w-full top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link to="/">
            <img src={LogoIsiflix} alt="logoisiflix" />
          </Link>

          {/* Links - só aparecem em telas médias pra cima */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="/aboutus" className="">Quem somos</a>
            <a href="/mycareer" className="">Carreiras</a>
            <a href="/forbusiness" className="">Para empresas</a>
            <a href="https://www.amazon.com.br/shop/professorisidro" target='_blank' className="">Lojinha</a>
            < ButtonPink textButton="Quero fazer parte" linkButton="/#plans" />
            < ButtonWhite textButton="Entrar" linkButton="/" />
          </div>

          {/* Botão hamburger - só aparece em telas pequenas */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-100">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden shadow-md flex flex-col gap-4 p-4">
          <a href="/" className="block px-4 py-2 text-gray-100 hover:bg-gray-100">Home</a>
          <a href="/aboutus" className="block px-4 py-2 text-gray-100 hover:bg-gray-100">Sobre</a>
          <a href="/mycareer" className="block px-4 py-2 text-gray-100 hover:bg-gray-100">Carreiras</a>
          <a href="/forbusiness" className="block px-4 py-2 text-gray-100 hover:bg-gray-100">Para empresas</a>
          <ButtonPink textButton="Quero fazer parte" linkButton="/#plans" />
          <ButtonWhite textButton="Entrar" linkButton="/" />
        </div>
      )}
    </nav>
  );
}

export default NavbarMenu