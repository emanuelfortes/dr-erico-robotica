const reviews = [
  {
    initials: "P",
    gradient: "linear-gradient(135deg,#667eea,#764ba2)",
    text: "Excelente profissional. Muito seguro e atencioso desde a consulta até o pós-operatório. Me senti confiante em todo o processo.",
    author: "Paciente via Google",
  },
  {
    initials: "A",
    gradient: "linear-gradient(135deg,#f093fb,#f5576c)",
    text: "Recuperação muito mais rápida do que eu imaginava. Dr. Érico transmite muita confiança.",
    author: "Avaliação Google",
  },
  {
    initials: "P",
    gradient: "linear-gradient(135deg,#4facfe,#00f2fe)",
    text: "Atendimento diferenciado, explicação clara e domínio total da técnica. Recomendo sem dúvidas.",
    author: "Paciente satisfeito",
  },
  {
    initials: "R",
    gradient: "linear-gradient(135deg,#43e97b,#38f9d7)",
    text: "Procurei um urologista em Fortaleza e encontrei um dos melhores. Experiência impecável.",
    author: "Review Google",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 text-[#f5c518] text-base mb-4">★★★★★</div>
);

const ProvaSocialSection = () => (
  <section id="prova-social" className="bg-[#0a1628] py-24 px-6 lg:px-16">
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="text-center mb-14">
        <div className="w-12 h-[3px] bg-[#f5c518] mx-auto mb-8" />
        {/* H2 */}
        <h2 className="font-serif text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
          O que pacientes dizem no Google
        </h2>
        <div className="flex items-center justify-center gap-2">
          <div className="flex gap-1 text-[#f5c518] text-xl">★★★★★</div>
          <span className="text-[#8a9bb5] text-sm">· Avaliação média Google</span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 hover:-translate-y-1.5 transition-transform duration-300 flex flex-col"
          >
            {/* Avatar */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                style={{ background: r.gradient }}
              >
                {r.initials}
              </div>
              <Stars />
            </div>

            {/* Text */}
            <p className="text-[#333] text-sm leading-relaxed flex-1 mb-4 italic">
              "{r.text}"
            </p>

            {/* Author */}
            <p className="text-gray-400 text-xs font-semibold">— {r.author}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProvaSocialSection;