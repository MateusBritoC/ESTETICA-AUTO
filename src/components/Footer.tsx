const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#inicio" className="font-display text-xl font-bold text-gradient-gold tracking-wider">
          ELITE<span className="text-foreground">AUTO</span>
        </a>
        <p className="font-body text-sm text-muted-foreground">
          © 2025 Elite Auto Estética. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
