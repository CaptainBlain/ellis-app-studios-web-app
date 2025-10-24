import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Building Cross-Platform Apps with React Native",
    excerpt: "Learn how React Native enables you to build native mobile apps for iOS and Android using a single codebase, saving time and resources.",
    category: "Mobile Development",
    date: "October 15, 2025",
    readTime: "5 min read",
    slug: "building-cross-platform-apps-react-native",
  },
  {
    title: "Why Startups Choose Next.js for Their MVPs",
    excerpt: "Discover why Next.js has become the go-to framework for startups building their minimum viable products, with its balance of performance and developer experience.",
    category: "Web Development",
    date: "October 8, 2025",
    readTime: "4 min read",
    slug: "why-startups-choose-nextjs-mvps",
  },
  {
    title: "Firebase vs AWS: Which is Right for Your App?",
    excerpt: "A comprehensive comparison of Firebase and AWS for mobile and web applications, helping you make the right infrastructure choice.",
    category: "Cloud Infrastructure",
    date: "October 1, 2025",
    readTime: "6 min read",
    slug: "firebase-vs-aws-comparison",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Insights &{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Tutorials
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Tips, tutorials, and insights on web and mobile app development.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={post.slug}
                  className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary hover:underline font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Coming Soon Message */}
            <div className="mt-12 text-center">
              <div className="inline-block px-6 py-3 rounded-lg bg-muted text-muted-foreground">
                More articles coming soon! Subscribe to get notified.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

