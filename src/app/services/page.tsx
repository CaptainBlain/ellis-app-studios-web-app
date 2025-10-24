import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Globe, Smartphone, Settings, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Apps & Websites",
    description: "Responsive web applications using React/Next, hosted on AWS or Firebase, connected to APIs or CMS",
    features: [
      "Modern React & Next.js development",
      "Responsive design for all devices",
      "API & database integration",
      "Cloud hosting & deployment",
      "SEO optimization",
      "Performance optimization",
    ],
    outcomes: ["Faster time to market", "Scalable infrastructure", "Cross-browser compatibility"],
    timeline: "4-8 weeks typical",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Apps (iOS + Android)",
    description: "Native/Flutter apps, App Store + Play Store submission, backend integration",
    features: [
      "iOS & Android development",
      "Cross-platform or native approach",
      "App Store submission & optimization",
      "Backend & API integration",
      "Push notifications",
      "In-app purchases & payments",
    ],
    outcomes: ["Reach millions of users", "Native performance", "Cross-platform consistency"],
    timeline: "6-12 weeks typical",
  },
  {
    id: "maintenance",
    icon: Settings,
    title: "App Maintenance & Growth",
    description: "Updates, bug fixes, hosting, analytics, iterative improvements",
    features: [
      "Regular security updates",
      "Bug fixes & troubleshooting",
      "Performance monitoring",
      "Feature enhancements",
      "Analytics integration",
      "Ongoing technical support",
    ],
    outcomes: ["Ongoing reliability", "User satisfaction", "Continuous improvement"],
    timeline: "Flexible retainers",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Services That Drive{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Results
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From MVP to market leader, I deliver end-to-end solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Card className="p-8 md:p-12 border-2 hover:border-primary/20 hover:shadow-lg transition-all">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Icon & Title */}
                    <div className="md:w-1/3">
                      <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">{service.title}</h2>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="text-sm text-primary font-medium mb-2">Timeline</div>
                      <div className="text-sm text-muted-foreground">{service.timeline}</div>
                    </div>

                    {/* Features & Outcomes */}
                    <div className="md:w-2/3 space-y-6">
                      {/* Features */}
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">What's Included</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Outcomes */}
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">Key Outcomes</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.outcomes.map((outcome) => (
                            <span
                              key={outcome}
                              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                            >
                              {outcome}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                        <Button asChild className="w-full sm:w-auto">
                          <Link href="/contact">
                            Discuss Your Project
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              How We Work Together
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Discovery", desc: "Understand your goals and requirements" },
                { step: "02", title: "Scope", desc: "Define features and timeline" },
                { step: "03", title: "Build", desc: "Develop and test your application" },
                { step: "04", title: "Launch", desc: "Deploy and support your success" },
              ].map((phase, index) => (
                <div
                  key={phase.step}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                    {phase.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project and create a custom solution that fits your needs and budget.
            </p>
            <Button asChild size="lg" className="shadow-lg hover:shadow-glow transition-all">
              <Link href="/contact">Schedule a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

