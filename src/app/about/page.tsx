import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code2, Smartphone, Cloud, Database, Zap, Shield } from "lucide-react";

const technologies = [
  { icon: Code2, name: "React & Next.js", description: "Modern web frameworks" },
  { icon: Smartphone, name: "iOS & Android", description: "Native & cross-platform" },
  { icon: Cloud, name: "AWS & Firebase", description: "Cloud infrastructure" },
  { icon: Database, name: "Databases", description: "SQL & NoSQL solutions" },
  { icon: Zap, name: "APIs & Integration", description: "RESTful & GraphQL" },
  { icon: Shield, name: "Security", description: "Best practices & compliance" },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Blain Ellis
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A full-stack web & mobile developer based in Loughborough, UK. I build apps that help small businesses scale and startups validate ideas.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why I Do What I Do</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I focus on building maintainable, scalable code and delivering apps that keep working long after launch. With over 8 years of development experience, I've learned that the best solutions come from truly understanding both the technology and the business needs.
              </p>
              <p>
                Because I've shipped multiple end-to-end apps (iOS + Android + web), I understand the full stack and deliver cross-platform consistency. This means fewer surprises, better integration, and apps that feel cohesive across all platforms.
              </p>
              <p>
                My approach is simple: listen carefully, build thoughtfully, and maintain thoroughly. Whether you're launching an MVP or scaling an existing product, I'm here to ensure your technology works as hard as you do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Technologies & Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="bg-card p-6 rounded-xl border border-border hover:border-primary/20 hover:shadow-lg transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Key Milestones
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                  10+
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Apps Launched</h3>
                  <p className="text-muted-foreground">Successfully delivered and deployed to App Store and Play Store</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                  8+
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Years Experience</h3>
                  <p className="text-muted-foreground">Full-stack development across web and mobile platforms</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                  100%
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Client Satisfaction</h3>
                  <p className="text-muted-foreground">Committed to delivering quality work on time and on budget</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Let's Talk About Your Project
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to turn your idea into reality? Get in touch for a free consultation.
            </p>
            <Button asChild size="lg" className="shadow-lg hover:shadow-glow transition-all">
              <Link href="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

