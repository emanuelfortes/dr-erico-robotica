import WhatsAppIcon from "./WhatsAppIcon";
import { WA_LINK } from "../constants";

const comoRealizado = [
  "Visão 3D ampliada",
  "Movimentos extremamente precisos",
  "Controle total do cirurgião",
];

const beneficios = [
  "Menos dor após a cirurgia",
  "Cortes menores e mais delicados",
  "Recuperação acelerada",
  "Maior preservação de funções",
];

const SolucaoSection = () => (
  <section id="solucao" className="bg-[#0a1628] py-24 px-6 lg:px-16">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

      {/* LEFT: visual cards */}
      <div className="grid gap-4">
        {/* Top card */}
        <div className="rounded-2xl bg-[#0f1f3d] border border-white/[0.08] p-8">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="font-serif text-xl font-bold text-white mb-2">Sistema Robótico</h3>
          <p className="text-[#8a9bb5] text-sm leading-relaxed">
            Visão 3D com ampliação de até 10x e instrumentos articulados com 7 graus de liberdade —
            superando os limites da mão humana.
          </p>
        </div>
        {/* Bottom two */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-[#0f1f3d] border border-white/[0.08] p-6 flex flex-col gap-2">
            <span className="text-3xl">⚡</span>
            <span className="font-bold text-white text-sm">Laser HoLEP</span>
            <span className="text-[#8a9bb5] text-xs leading-relaxed">Padrão ouro para próstata aumentada</span>
          </div>
          <div className="rounded-2xl bg-[#f5c518]/10 border border-[#f5c518]/25 p-6 flex flex-col gap-2">
            <span className="text-3xl">🏠</span>
            <span className="font-bold text-white text-sm">Alta em 48h</span>
            <span className="text-[#8a9bb5] text-xs leading-relaxed">Recuperação rápida e sem complicações</span>
          </div>
        </div>
      </div>

      {/* RIGHT: copy */}
      <div>
        <div className="w-12 h-[3px] bg-[#f5c518] mb-8" />

        {/* H2 — SEO */}
        <h2 className="font-serif text-3xl lg:text-4xl font-black text-white leading-tight mb-6">
          Cirurgia Robótica em Fortaleza: mais precisão,{" "}
          <span className="text-[#f5c518]">menos impacto no seu corpo</span>
        </h2>

        <p className="text-[#8a9bb5] text-sm leading-relaxed mb-6">
          A cirurgia robótica representa o nível mais avançado da medicina urológica atual.
          Com ela, o procedimento é realizado com:
        </p>

        {/* Como é realizado */}
        <ul className="flex flex-col gap-2.5 mb-8">
          {comoRealizado.map((item) => (
            <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
              <span className="w-5 h-5 rounded-full bg-[#f5c518]/15 flex items-center justify-center text-[#f5c518] text-xs flex-shrink-0">›</span>
              {item}
            </li>
          ))}
        </ul>

        <p className="text-[#8a9bb5] text-sm leading-relaxed mb-5">Isso proporciona:</p>

        {/* Benefícios com ✔ */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {beneficios.map((b) => (
            <li key={b} className="flex items-center gap-2.5 text-white font-medium text-sm">
              <span className="w-5 h-5 rounded-full bg-[#f5c518] flex items-center justify-center text-[#0a1628] text-xs font-black flex-shrink-0">✓</span>
              {b}
            </li>
          ))}
        </ul>

        <p className="text-[#8a9bb5] text-sm leading-relaxed mb-8">
          Para pacientes que buscam excelência e tecnologia, essa é hoje a{" "}
          <strong className="text-white">melhor escolha disponível.</strong>
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-[#f5c518] hover:bg-[#d4a800] text-[#0a1628] font-bold text-xs tracking-[0.1em] uppercase px-8 py-4 rounded-full shadow-[0_8px_32px_rgba(245,197,24,0.25)] hover:shadow-[0_12px_40px_rgba(245,197,24,0.35)] transition-all duration-200 hover:-translate-y-0.5"
        >
          <WhatsAppIcon size={16} />
          Quero Saber Mais
        </a>
      </div>
    </div>
  </section>
);

export default SolucaoSection;