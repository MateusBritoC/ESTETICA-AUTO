import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroCar} alt="Carro de luxo sendo detalhado" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <div className="gold-line mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }} />
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Estética Automotiva Premium
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            Seu carro merece o{" "}
            <span className="text-gradient-gold">melhor tratamento</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-lg mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            Cuidamos do seu veículo com técnicas avançadas e produtos de altíssima qualidade.
            Resultados que impressionam.
          </p>
          <div className="flex gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
            <a
              href="#servicos"
              className="px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest rounded-sm hover:brightness-110 transition-all"
            >
              Nossos Serviços
            </a>
            <a
              href="#contato"
              className="px-8 py-3.5 border border-primary/40 text-foreground font-body text-sm uppercase tracking-widest rounded-sm hover:border-primary hover:text-primary transition-all"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
