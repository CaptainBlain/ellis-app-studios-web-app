"use client";

import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, Calendar, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email subject and body
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.project}\n\nMessage:\n${formData.message}`
    );
    
    // Open mailto link
    window.location.href = `mailto:blain@ellisappdev.co.uk?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Let's Build Something{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Amazing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to start your project? Get in touch for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <Card className="p-8 border-2">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Type *
                      </label>
                      <Input
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        placeholder="e.g., Mobile App, Web App, Maintenance"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tell Me About Your Project *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your project, timeline, and any specific requirements..."
                        rows={6}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      <Mail className="mr-2 w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Contact Info & Options */}
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    I typically respond within 24 hours. Choose your preferred way to connect.
                  </p>
                </div>

                {/* Contact Options */}
                <Card className="p-6 border-2 hover:border-primary/20 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Best for detailed project discussions
                      </p>
                      <a
                        href="mailto:blain@ellisappdev.co.uk"
                        className="text-sm text-primary hover:underline"
                      >
                        blain@ellisappdev.co.uk
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 hover:border-primary/20 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Schedule a Call</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Book a free 30-minute consultation
                      </p>
                      <a
                        href="#"
                        className="text-sm text-primary hover:underline"
                      >
                        View available times
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 hover:border-primary/20 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-sm text-muted-foreground">
                        Based in Loughborough, UK
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Available for remote projects worldwide
                      </p>
                    </div>
                  </div>
                </Card>

                {/* FAQ */}
                <div className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4">Quick Questions</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-foreground">Response time: </span>
                      <span className="text-muted-foreground">Usually within 24 hours</span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Availability: </span>
                      <span className="text-muted-foreground">Currently taking new projects</span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Typical timeline: </span>
                      <span className="text-muted-foreground">4-12 weeks depending on scope</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

