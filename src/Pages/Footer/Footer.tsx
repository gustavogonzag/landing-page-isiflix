import LogoIsiFlix from "../../../public/LOGO-ISIFLIX-FOOTER.png"; // ajuste o caminho da sua logo
import { CircleFadingPlus, MonitorPlay } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#0C0C0C] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        
        {/* Coluna 1: Logo e Sobre */}
        <div className="flex flex-col gap-4">
          <img src={LogoIsiFlix} alt="Logo" className="w-64" />
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-extrabold text-lg">Sobre</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <a href="/aboutus"><li>Quem somos</li></a>
            <li>Política de uso</li>
            <li>Fale conosco</li>
          </ul>
        </div>

        {/* Coluna 2: Produtos */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg">Produtos</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>Sua carreira</li>
            <li>Para empresas</li>
          </ul>
        </div>

        {/* Coluna 3: Redes Sociais */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg">Redes Sociais</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <a href="https://www.instagram.com/professorisidro" target="_blank"><li className="flex items-center gap-2"><CircleFadingPlus className="w-4 h-4" /> Instagram</li></a>
            <a href="https://www.youtube.com/@professorisidro" target="_blank"><li className="flex items-center gap-2"><MonitorPlay className="w-4 h-4" /> Youtube</li></a>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
