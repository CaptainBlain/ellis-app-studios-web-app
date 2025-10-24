import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, Smartphone, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Apps & Websites",
    description: "Responsive web applications using React and Next.js, hosted on AWS or Firebase, connected to APIs or CMS.",
    features: ["Modern React/Next.js", "Responsive Design", "API Integration", "Cloud Hosting"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps (iOS + Android)",
    description: "Native and cross-platform apps with App Store and Play Store submission, complete backend integration.",
    features: ["iOS & Android", "App Store Deployment", "Backend Integration", "Cross-platform"],
  },
  {
    icon: Settings,
    title: "App Maintenance & Growth",
    description: "Ongoing updates, bug fixes, hosting management, analytics, and iterative improvements for your apps.",
    features: ["Regular Updates", "Bug Fixes", "Performance Monitoring", "Feature Enhancements"],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Services That Scale Your Business
          </h2>
          <p className="text-lg text-muted-foreground">
            From MVP to market leader, I deliver end-to-end solutions that keep working long after launch.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="shadow-lg hover:shadow-glow transition-all">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

