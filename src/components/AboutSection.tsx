import { Award, Clock, Users, Star } from "lucide-react";

const stats = [
  { icon: Award, value: "8+", label: "Anos de experiência" },
  { icon: Users, value: "3.000+", label: "Clientes atendidos" },
  { icon: Star, value: "5.0", label: "Avaliação média" },
  { icon: Clock, value: "100%", label: "Pontualidade" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="gold-line mb-6" />
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">Sobre nós</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Paixão por <span className="text-gradient-gold">perfeição</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              A Elite Auto nasceu da paixão por carros e pela busca incansável da perfeição em cada detalhe.
              Nosso time é formado por profissionais certificados que utilizam as melhores técnicas e produtos
              do mercado para entregar resultados que superam expectativas.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Trabalhamos com marcas renomadas como Menzerna, Gtechniq e Chemical Guys,
              garantindo que seu veículo receba apenas o melhor. Cada carro que entra no nosso estúdio
              recebe um tratamento exclusivo e personalizado.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/40 transition-colors duration-300"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="font-display text-3xl font-bold text-gradient-gold mb-1">{stat.value}</p>
                <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
