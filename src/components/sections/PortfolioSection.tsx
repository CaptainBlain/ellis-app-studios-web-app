import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Mobile App",
    category: "iOS & Android",
    description: "Full-stack shopping app with payment integration, inventory management, and real-time notifications.",
    tech: ["React Native", "Firebase", "Stripe"],
    image: "bg-gradient-to-br from-blue-500 to-purple-600",
  },
  {
    title: "Property Management Platform",
    category: "Web App",
    description: "Cloud-based platform for landlords to manage properties, tenants, and maintenance requests.",
    tech: ["React", "Next.js", "AWS"],
    image: "bg-gradient-to-br from-green-500 to-teal-600",
  },
  {
    title: "Fitness Tracking App",
    category: "Cross-Platform",
    description: "Health and fitness tracker with workout plans, progress analytics, and social features.",
    tech: ["Flutter", "Firebase", "REST API"],
    image: "bg-gradient-to-br from-orange-500 to-red-600",
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Crafted with attention to detail, built to scale, and loved by users.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image/Placeholder */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 text-xs font-medium text-foreground">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Button
                  variant="ghost"
                  className="w-full justify-between group/btn hover:bg-primary/10 hover:text-primary"
                >
                  View Case Study
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="shadow-lg hover:shadow-glow transition-all">
            <Link href="/portfolio">
              View Full Portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

