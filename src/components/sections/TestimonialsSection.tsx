import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder, RetailTech Solutions",
    content: "Blain delivered our e-commerce app ahead of schedule and under budget. His attention to detail and technical expertise made the entire process seamless.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO, PropManage",
    content: "Working with Blain was a game-changer for our startup. He understood our vision and built a scalable platform that's been running flawlessly for over a year.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "CEO, FitLife App",
    content: "From concept to App Store launch in just 6 weeks! Blain's expertise in both iOS and Android development saved us months of time and headaches.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take my word for it — here's what clients say about working together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

