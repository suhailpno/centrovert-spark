const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-2xl font-bold text-gradient">Centrovert</p>
          <p className="text-muted-foreground">
            Empowering businesses through AI & Automation
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Centrovert. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
