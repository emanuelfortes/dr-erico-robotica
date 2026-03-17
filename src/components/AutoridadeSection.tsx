const formacao = [
  "Fellowship em Cirurgia Robótica – Hospital Israelita Albert Einstein",
  "Residência Médica – Hospital Geral de Fortaleza (HGF)",
  "Graduação – Universidade Federal do Ceará (UFC)",
  "Membro Titular da Sociedade Brasileira de Urologia",
];

const diferenciais = [
  "Atendimento claro, direto e humanizado",
  "Foco total na segurança do paciente",
  "Uso das tecnologias mais modernas disponíveis",
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#f5c518] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const AutoridadeSection = () => (
  <section id="sobre" className="bg-[#0f1f3d] py-24 px-6 lg:px-16">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

      {/* LEFT: image + accent */}
      <div className="relative">
        <div
          className="w-full rounded-3xl flex items-center justify-center overflow-hidden"
          style={{ aspectRatio: "4/5", background: "linear-gradient(135deg, #162447 0%, #0a1628 100%)" }}
        >
          <svg className="w-[60%] opacity-25" viewBox="0 0 200 280" fill="none">
            <ellipse cx="100" cy="60" rx="45" ry="55" fill="white" />
            <path d="M10 280 C10 180 40 160 100 155 C160 160 190 180 190 280Z" fill="white" />
            <rect x="75" y="130" width="50" height="40" rx="4" fill="white" fillOpacity="0.6" />
          </svg>
        </div>
        {/* Gold accent */}
        <div className="absolute -bottom-5 -right-5 w-44 h-44 rounded-2xl bg-[#f5c518] flex flex-col items-center justify-center gap-1 shadow-[0_20px_60px_rgba(245,197,24,0.3)]">
          <span className="font-serif text-[#0a1628] text-5xl font-black leading-none">21</span>
          <span className="text-[#0a1628] text-[0.68rem] font-bold uppercase tracking-wide text-center px-3">
            anos de experiência
          </span>
        </div>
      </div>

      {/* RIGHT: copy */}
      <div>
        <span className="text-[#f5c518] text-[0.72rem] font-semibold tracking-[0.14em] uppercase block mb-4">
          Quem cuidará de você
        </span>

        {/* H2 — SEO */}
        <h2 className="font-serif text-3xl lg:text-4xl font-black text-white leading-tight mb-3">
          Dr. Érico Diógenes –{" "}
          <span className="text-[#f5c518]">Urologista em Fortaleza</span> referência em
          cirurgia robótica
        </h2>

        <p className="text-white/80 font-semibold mb-6 text-sm">
          Uma trajetória dedicada à excelência urológica.
        </p>

        <p className="text-[#8a9bb5] text-sm leading-relaxed mb-6">
          Com mais de <strong className="text-white">21 anos de experiência</strong>, o Dr.
          Érico Diógenes é reconhecido como um dos principais nomes da urologia em Fortaleza.
          Sua formação reúne instituições de alto prestígio:
        </p>

        {/* Formação */}
        <ul className="flex flex-col gap-3 mb-8">
          {formacao.map((f) => (
            <li key={f} className="flex items-start gap-3 text-white/75 text-sm leading-snug">
              <CheckIcon />
              {f}
            </li>
          ))}
        </ul>

        <p className="text-[#8a9bb5] text-sm leading-relaxed mb-5">
          Seu diferencial vai além da técnica:
        </p>

        {/* Diferenciais */}
        <ul className="flex flex-col gap-3">
          {diferenciais.map((d) => (
            <li key={d} className="flex items-center gap-3 text-white font-medium text-sm">
              <span className="text-[#f5c518] text-base leading-none">›</span>
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AutoridadeSection;