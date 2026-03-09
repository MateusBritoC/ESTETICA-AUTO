import servicePolishing from "@/assets/service-polishing.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceCeramic from "@/assets/service-ceramic.jpg";
import { Sparkles, ShieldCheck, CarFront, Droplets } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Polimento Técnico",
    description: "Correção de pintura e polimento cristalizado para um brilho incomparável. Removemos riscos, hologramas e imperfeições.",
    image: servicePolishing,
  },
  {
    icon: CarFront,
    title: "Higienização Interna",
    description: "Limpeza profunda de estofados, painel, teto e todos os detalhes do interior do seu veículo.",
    image: serviceInterior,
  },
  {
    icon: ShieldCheck,
    title: "Vitrificação Cerâmica",
    description: "Proteção duradoura com revestimento cerâmico que repele água, sujeira e raios UV por até 3 anos.",
    image: serviceCeramic,
  },
  {
    icon: Droplets,
    title: "Lavagem Premium",
    description: "Lavagem técnica com produtos biodegradáveis, secagem com ar filtrado e finalização impecável.",
    image: null,
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">O que fazemos</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Nossos <span className="text-gradient-gold">Serviços</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-500"
            >
              {service.image && (
                <div className="h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                </div>
              )}
              <div className={`relative p-8 ${!service.image ? "py-12" : ""}`}>
                <service.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
