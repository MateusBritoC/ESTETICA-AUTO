import { Phone, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ nome: "", telefone: "", servico: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Me chamo ${formData.nome}. Tenho interesse no serviço: ${formData.servico}. ${formData.mensagem}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">Contato</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Fale <span className="text-gradient-gold">conosco</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-display text-lg font-semibold mb-1">Endereço</h4>
                <p className="font-body text-muted-foreground">Rua Exemplo, 123 - Centro, São Paulo - SP</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-display text-lg font-semibold mb-1">Telefone / WhatsApp</h4>
                <p className="font-body text-muted-foreground">(11) 99999-9999</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-display text-lg font-semibold mb-1">Horário</h4>
                <p className="font-body text-muted-foreground">Seg a Sex: 8h - 18h | Sáb: 8h - 14h</p>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Seu nome"
                required
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Seu telefone"
                required
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <select
                required
                value={formData.servico}
                onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground focus:outline-none focus:border-primary transition-colors"
              >
                <option value="" className="text-muted-foreground">Selecione o serviço</option>
                <option value="Polimento Técnico">Polimento Técnico</option>
                <option value="Higienização Interna">Higienização Interna</option>
                <option value="Vitrificação Cerâmica">Vitrificação Cerâmica</option>
                <option value="Lavagem Premium">Lavagem Premium</option>
              </select>
            </div>
            <div>
              <textarea
                placeholder="Sua mensagem (opcional)"
                rows={4}
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest rounded-sm hover:brightness-110 transition-all"
            >
              Enviar via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
