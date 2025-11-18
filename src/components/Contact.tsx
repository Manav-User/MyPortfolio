import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, opportunities, or collaborations in AI/ML.
          Feel free to reach out!
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 glow-effect"
            asChild
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=manavmajmudar01@gmail.com&su=Contact%20from%20Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compose in Gmail"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
          </Button>
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/10 hover:text-primary transition-colors"
            asChild
          >
            <a href="https://www.linkedin.com/in/manav-majmudar-b829312ba/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/10 hover:text-primary transition-colors"
            asChild
          >
            <a href="https://github.com/Manav-User" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/10 hover:text-primary transition-colors"
            asChild
          >
            <a href="https://www.instagram.com/_manav_.o_o/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;