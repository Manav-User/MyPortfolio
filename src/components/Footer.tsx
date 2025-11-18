const Footer = () => {
    return (
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Manav Majmudar
          </p>
        </div>
      </footer>
    );
};
  
export default Footer;
  