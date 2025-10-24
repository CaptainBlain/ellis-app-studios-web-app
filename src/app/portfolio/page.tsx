import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Mobile App",
    category: "iOS & Android",
    description: "Full-stack shopping app with payment integration, inventory management, and real-time notifications for a UK retail startup.",
    challenge: "Client needed a cross-platform mobile app to expand their online presence",
    solution: "Built with React Native, Firebase backend, Stripe payments, and push notifications",
    results: ["10k+ downloads in first 3 months", "4.8★ average rating", "30% increase in online sales"],
    tech: ["React Native", "Firebase", "Stripe", "Push Notifications"],
    gradient: "bg-gradient-to-br from-blue-500 to-purple-600",
  },
  {
    title: "Property Management Platform",
    category: "Web App",
    description: "Cloud-based platform for landlords to manage properties, tenants, maintenance requests, and financial reporting.",
    challenge: "Property managers needed to streamline operations across multiple locations",
    solution: "Full-stack web app with React, Next.js, AWS infrastructure, and automated workflows",
    results: ["50+ properties managed", "80% reduction in admin time", "100% uptime achieved"],
    tech: ["React", "Next.js", "AWS", "PostgreSQL"],
    gradient: "bg-gradient-to-br from-green-500 to-teal-600",
  },
  {
    title: "Fitness Tracking App",
    category: "Cross-Platform",
    description: "Health and fitness tracker with custom workout plans, progress analytics, social features, and wearable integration.",
    challenge: "Startup wanted to compete in crowded fitness app market with unique features",
    solution: "Cross-platform app using Flutter with real-time data sync and gamification",
    results: ["5k+ active users", "Featured in App Store", "85% user retention"],
    tech: ["Flutter", "Firebase", "REST API", "Analytics"],
    gradient: "bg-gradient-to-br from-orange-500 to-red-600",
  },
  {
    title: "Restaurant Booking System",
    category: "Web App",
    description: "Online reservation platform with table management, customer profiles, and automated confirmation emails.",
    challenge: "Restaurant chain needed to replace outdated booking system",
    solution: "React-based booking system with real-time availability and SMS notifications",
    results: ["200+ daily bookings", "40% reduction in no-shows", "Excellent customer feedback"],
    tech: ["React", "Node.js", "MongoDB", "Twilio"],
    gradient: "bg-gradient-to-br from-pink-500 to-rose-600",
  },
  {
    title: "Educational Learning App",
    category: "iOS & Android",
    description: "Interactive learning platform for students with video lessons, quizzes, progress tracking, and teacher dashboards.",
    challenge: "Education provider wanted to expand digital learning offerings",
    solution: "Native mobile apps with offline content sync and interactive assessments",
    results: ["1000+ student users", "95% completion rate", "Featured by Apple"],
    tech: ["Swift", "Kotlin", "Firebase", "Video Streaming"],
    gradient: "bg-gradient-to-br from-indigo-500 to-blue-600",
  },
  {
    title: "Inventory Management System",
    category: "Web App",
    description: "Comprehensive inventory tracking system with barcode scanning, automated reordering, and supplier management.",
    challenge: "Warehouse needed to modernize manual inventory processes",
    solution: "Web-based system with barcode integration and automated alerts",
    results: ["99.5% inventory accuracy", "60% faster processing", "ROI in 6 months"],
    tech: ["React", "Python", "AWS", "PostgreSQL"],
    gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              10+ Projects Delivered
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Building Apps That{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Make an Impact
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From startups to established businesses, here are some of the projects I've brought to life.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={project.title}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Project Header */}
                  <div className={`h-48 relative overflow-hidden ${project.gradient}`}>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 text-xs font-medium text-foreground">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    {/* Challenge & Solution */}
                    <div className="space-y-3 mb-4 text-sm">
                      <div>
                        <span className="font-semibold text-foreground">Challenge: </span>
                        <span className="text-muted-foreground">{project.challenge}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Solution: </span>
                        <span className="text-muted-foreground">{project.solution}</span>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-4">
                      <div className="font-semibold text-foreground text-sm mb-2">Key Results:</div>
                      <ul className="space-y-1">
                        {project.results.map((result) => (
                          <li key={result} className="text-sm text-muted-foreground flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md bg-secondary/10 text-foreground text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button variant="ghost" className="w-full justify-between hover:bg-primary/10 hover:text-primary">
                      View Case Study
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Want to Be My Next Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how I can help bring your app idea to life with the same attention to detail and commitment to quality.
            </p>
            <Button asChild size="lg" className="shadow-lg hover:shadow-glow transition-all">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

