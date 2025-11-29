import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profilePic from "@/assets/pro.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="AI Neural Network Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 animate-fade-in">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Manav Majmudar</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              IT Student
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8">
              A university student dedicated to solving real-world challenges through technology, with AI/ML and robotics as growing areas of interest.
            </p>
            
            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              <Button 
                size="lg" 
                onClick={scrollToProjects}
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Photo Section */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src={profilePic} 
                  alt="Manav Majmudar" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;