import { useEffect, useState } from "react";
import { ChevronDown, Check } from "lucide-react";

interface Episodio {
  idSerie: number;
  nomeSerie: string;
  ementa: string;
  imagemCapa: string;
  emiteCertificado: number;
  cargaHoraria: number;
  idEpisodio: number;
  nomeEpisodio: string;
  tempoMinutos: number;
}

function MyCareer() {
  const [episodios, setEpisodios] = useState<Episodio[]>([]);
  const [openCurso, setOpenCurso] = useState<number | null>(null);

  useEffect(() => {
    // substitua pela sua API real
    fetch("https://isiflix.com.br:8443/series/free")
      .then((res) => res.json())
      .then((data: Episodio[]) => setEpisodios(data));
  }, []);

  if (episodios.length === 0) {
    return (
      <div className="w-full flex justify-center mt-20">
        <p className="text-lg text-gray-600">Carregando cursos...</p>
      </div>
    );
  }

  const cursos = episodios.reduce((acc: Record<number, Episodio[]>, ep) => {
    if (!acc[ep.idSerie]) acc[ep.idSerie] = [];
    acc[ep.idSerie].push(ep);
    return acc;
  }, {});

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <h1 className="font-['Loos-Normal'] text-4xl font-bold text-center text-white mb-12">
        Minha Carreira
      </h1>

      {Object.values(cursos).map((episodiosCurso) => {
        const curso = episodiosCurso[0];
        const isOpen = openCurso === curso.idSerie;

        return (
          <div
            key={curso.idSerie}
            className="rounded-xl shadow-lg overflow-hidden border border-white bg-gradient-to-b from-[#E7205F]/20 to-[#941F44]/20"
          >
            {/* Header do curso */}
            <button
              onClick={() =>
                setOpenCurso(isOpen ? null : curso.idSerie)
              }
              className="w-full flex justify-between items-center px-6 py-4 bg-[#0C0C0C] text-white text-left font-semibold text-xl hover:bg-gray-900 transition-colors"
            >
              <span className="text-[#E7205F]">{curso.nomeSerie}</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Conteúdo do curso */}
            {isOpen && (
              <div className="p-6 bg-[#121212] flex flex-col md:flex-row gap-6">
                {/* Imagem do curso */}
                <img
                  src={curso.imagemCapa}
                  alt={curso.nomeSerie}
                  className="max-w-[300px] w-full object-contain rounded-lg self-center md:self-start border border-[#E7205F]"
                />

                {/* Info do curso */}
                <div className="flex-1 space-y-4">
                  {curso.emiteCertificado === 1 && (
                    <p className="text-[#E7205F] font-semibold flex items-center gap-2">
                      <Check className="w-5 h-5" /> Este conteúdo emite certificado
                    </p>
                  )}

                  <div
                    className="prose prose-sm text-white max-w-none"
                    dangerouslySetInnerHTML={{ __html: curso.ementa }}
                  />

                  {/* Lista de episódios */}
                  <div className="mt-4">
                    <h3 className="text-lg font-medium mb-4 text-[#E7205F]">
                      Lista de Episódios
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {episodiosCurso.map((ep) => (
                        <div
                          key={ep.idEpisodio}
                          className="flex justify-between items-center p-3 border border-[#E7205F]/50 rounded-lg hover:bg-[#E7205F]/10 transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <Check className="text-[#E7205F] w-4 h-4" />
                            {ep.nomeEpisodio}
                          </span>
                          <span className="text-gray-300 text-sm">
                            {ep.tempoMinutos} min
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MyCareer;
