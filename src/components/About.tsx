import { GraduationCap, Code2, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Currently pursuing B.Tech in Information Technology from CHARUSAT University
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="card-gradient card-shadow p-6 border-border hover:border-primary/50 transition-all duration-300 animate-slide-up">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-muted-foreground">
              Information Technology student, currently in 3rd year of my B.Tech, enthusiastic in AIML and Robotics.
            </p>
          </Card>

          <Card className="card-gradient card-shadow p-6 border-border hover:border-primary/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-muted-foreground">
              AI/ML Intern working on real-world machine learning projects.
            </p>
          </Card>

          <Card className="card-gradient card-shadow p-6 border-border hover:border-primary/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Focus</h3>
            <p className="text-muted-foreground">
              Machine Learning and Robotics.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;