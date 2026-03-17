import SeoHead from "../seo/SeoHead";
import HeroSection from "../components/HeroSection";
import IdentificacaoSEO from "../components/IdentificacaoSEO";
import SolucaoSection from "../components/SolucaoSection";
import AutoridadeSection from "../components/AutoridadeSection";
import ProvaSocialSection from "../components/ProvaSocialSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";

export default function UrologistaFortaleza() {
  return (
    <>
      <SeoHead
        title="Urologista em Fortaleza com Tecnologia de Cirurgia Robótica Avançada"
        description="Atendimento com o Dr. Érico Diógenes, referência em urologia em Fortaleza, com foco em precisão, recuperação rápida e segurança máxima."
      />

      <HeroSection />
      <IdentificacaoSEO />
      <SolucaoSection />
      <AutoridadeSection />
      <ProvaSocialSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
