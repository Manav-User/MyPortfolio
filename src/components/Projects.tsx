import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
// Import video assets so Vite/bundler resolves them to public URLs
import FaceDetectionDemo from "@/assets/Face_detection.mp4";
import FingerCountingDemo from "@/assets/Finger_Counting.mp4";
import VirtualKeyboardDemo from "@/assets/Virtual_Keyboard.mp4";

const Projects = () => {
  const projects = [
    {
      title: "Face Recognition and Detection",
      description: "This my self learning project. In this I have create face detection and recognition System of my family members.",
      tags: ["Python", "Computer Vision", "LBPH", "OpenCV","numpy","PIL"],
      github: "https://github.com/Manav-User/Face-Detection",
      demo: FaceDetectionDemo,
    },
    {
      title: "Finger Counting",
      description: "The goal of this project is to build a real-time hand gesture recognition system that can detect the number of fingers a person is holding up and display it dynamically.",
      tags: ["Python", "Computer Vision", "Mediapipe", "OpenCV"],
      github: "https://github.com/Manav-User/Finger-Tracking",
      demo: FingerCountingDemo,
    },
    {
      title: "Virtual Keyboard",
      description: "The goal of this project is to build a touchless typing virtual keyboard developed to simulate a real keyboard that can be operated through hand gestures.",
      tags: ['Python','Computer Vision' ,'OpenCV', 'CVZone','numpy'],
      github: "https://github.com/Manav-User/Virtual-Keyboard",
      demo: VirtualKeyboardDemo,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Some of my recent AI/ML work
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card 
              key={project.title}
              className="card-gradient card-shadow border-border hover:border-primary/50 transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag}
                      variant="outline"
                      className="border-primary/30 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
