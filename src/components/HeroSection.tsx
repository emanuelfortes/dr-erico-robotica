import WhatsAppIcon from "./WhatsAppIcon";
import { WA_LINK } from "../constants";
import imgLogo from "../assets/logo_1.png";
import imgBg from "../assets/dr-erico-rob-1.webp";
import imgBgMobile from "../assets/dr-erico-rob-1.webp";

const HeroSection = () => (
  <section
    id="hero"
    className="relative overflow-hidden"
    style={{ fontFamily: "'Montserrat', sans-serif", background: "#071120" }}
  >

    {/* ============================================================
        MOBILE: foto em cima + texto embaixo
    ============================================================ */}
    <div className="flex flex-col lg:hidden">

      {/* Foto — altura maior para o doutor aparecer bem */}
      <div className="relative w-full overflow-hidden" style={{ height: "75vw", minHeight: 300, maxHeight: 560 }}>
        <img
          src={imgBgMobile}
          alt="Dr. Érico Diógenes com robô cirúrgico"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 15%" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#071120]" />
      </div>

      {/* Texto */}
      <div className="px-6 sm:px-10 pt-4 pb-12">

        <div className="mb-5">
          <img src={imgLogo} alt="Dr. Érico Diógenes — Urologista" className="h-10 sm:h-12 w-auto" />
        </div>

        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[0.65rem] font-semibold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-4 w-fit">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          Urologista em Fortaleza
        </div>

        <h1 className="text-[1.75rem] sm:text-3xl font-black leading-[1.15] mb-4 text-white">
          Urologista em Fortaleza com{" "}
          <em className="not-italic">Tecnologia de Cirurgia Robótica Avançada</em>
        </h1>

        <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-7 max-w-lg">
          Atendimento com o <strong className="text-white">Dr. Érico Diógenes</strong>, referência
          em urologia em Fortaleza, com foco em{" "}
          <strong className="text-white">precisão, recuperação rápida e segurança máxima.</strong>
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-[#f5c518] hover:bg-[#d4a800] text-[#0a1628] font-bold text-xs tracking-[0.1em] uppercase px-8 py-4 rounded-full shadow-[0_8px_32px_rgba(245,197,24,0.30)] transition-all duration-200"
          >
            <WhatsAppIcon size={16} />
            Agendar Consulta Agora
          </a>
          <a
            href="#sobre"
            className="flex items-center justify-center px-7 py-4 rounded-full border border-white/20 text-white font-medium text-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200"
          >
            Conhecer o Dr. Érico
          </a>
        </div>

        <div className="flex gap-6 sm:gap-8 pt-7 border-t border-white/[0.08]">
          {[
            { num: "21+", label: "anos de\nexperiência" },
            { num: "5★",  label: "avaliação\nno Google"  },
            { num: "48h", label: "alta após\ncirurgia"    },
          ].map(({ num, label }) => (
            <div key={num}>
              <div className="text-white text-3xl sm:text-4xl font-black leading-none">{num}</div>
              <div className="text-white/50 text-xs mt-1 leading-snug whitespace-pre-line">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ============================================================
        DESKTOP: dois painéis lado a lado (texto | foto)
        Texto ocupa 42%, foto ocupa 58% — avança mais para a esquerda
    ============================================================ */}
    <div className="hidden lg:flex min-h-screen">

      {/* Painel esquerdo — texto */}
      <div className="flex flex-col justify-center w-[42%] px-16 py-20 shrink-0">

        <div className="mb-10">
          <img src={imgLogo} alt="Dr. Érico Diógenes — Urologista" className="h-14 w-auto" />
        </div>

        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[0.7rem] font-semibold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-7 w-fit">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          Urologista em Fortaleza
        </div>

        <h1 className="text-3xl font-black leading-[1.15] mb-6 text-white">
          Urologista em Fortaleza com{" "}
          <em className="not-italic">Tecnologia de Cirurgia Robótica Avançada</em>
        </h1>

        <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-md">
          Atendimento com o <strong className="text-white">Dr. Érico Diógenes</strong>, referência
          em urologia em Fortaleza, com foco em{" "}
          <strong className="text-white">precisão, recuperação rápida e segurança máxima.</strong>
        </p>

        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-[#f5c518] hover:bg-[#d4a800] text-[#0a1628] font-bold text-xs tracking-[0.1em] uppercase px-8 py-4 rounded-full shadow-[0_8px_32px_rgba(245,197,24,0.30)] hover:shadow-[0_12px_40px_rgba(245,197,24,0.45)] transition-all duration-200 hover:-translate-y-0.5"
          >
            <WhatsAppIcon size={16} />
            Agendar Consulta Agora
          </a>
          <a
            href="#sobre"
            className="flex items-center justify-center px-7 py-4 rounded-full border border-white/20 text-white font-medium text-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200"
          >
            Conhecer o Dr. Érico
          </a>
        </div>

        <div className="flex gap-8 pt-10 border-t border-white/[0.08]">
          {[
            { num: "21+", label: "anos de\nexperiência" },
            { num: "5★",  label: "avaliação\nno Google"  },
            { num: "48h", label: "alta após\ncirurgia"    },
          ].map(({ num, label }) => (
            <div key={num}>
              <div className="text-white text-4xl font-black leading-none">{num}</div>
              <div className="text-white/50 text-xs mt-1 leading-snug whitespace-pre-line">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Painel direito — foto ocupa 58%, avança para a esquerda com margem negativa */}
      <div className="relative flex-1 overflow-hidden -ml-16">
        {/* Degradê à esquerda para fundir suavemente com o texto */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#071120] to-transparent z-10 pointer-events-none" />
        <img
          src={imgBg}
          alt="Dr. Érico Diógenes com robô cirúrgico"
          className="w-full h-full object-cover"
          style={{ objectPosition: "30% center" }}
        />
      </div>

    </div>

  </section>
);

export default HeroSection;