"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, Briefcase, Mail, TrendingUp, Plus, Eye } from "lucide-react";
import { collection, getDocs, query, orderBy, limit, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    totalProjects: 0,
    totalContacts: 0,
    newContacts: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch posts
        const postsSnap = await getDocs(collection(db, "posts"));
        const publishedPosts = postsSnap.docs.filter(
          (doc) => doc.data().status === "published"
        );

        // Fetch projects
        const projectsSnap = await getDocs(collection(db, "projects"));

        // Fetch contacts
        const contactsSnap = await getDocs(collection(db, "contacts"));
        const newContacts = contactsSnap.docs.filter(
          (doc) => doc.data().status === "new"
        );

        setStats({
          totalPosts: postsSnap.size,
          publishedPosts: publishedPosts.length,
          totalProjects: projectsSnap.size,
          totalContacts: contactsSnap.size,
          newContacts: newContacts.length,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Blog Posts",
      value: stats.totalPosts,
      subtitle: `${stats.publishedPosts} published`,
      icon: FileText,
      href: "/admin/blog",
      color: "bg-blue-500",
    },
    {
      title: "Portfolio Projects",
      value: stats.totalProjects,
      subtitle: "Total projects",
      icon: Briefcase,
      href: "/admin/portfolio",
      color: "bg-green-500",
    },
    {
      title: "Contact Submissions",
      value: stats.totalContacts,
      subtitle: `${stats.newContacts} new`,
      icon: Mail,
      href: "/admin/contacts",
      color: "bg-orange-500",
    },
    {
      title: "Total Views",
      value: "—",
      subtitle: "Coming soon",
      icon: Eye,
      href: "#",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your site.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <Card key={stat.title} className="p-6 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              {stat.href !== "#" && (
                <Link
                  href={stat.href}
                  className="text-sm text-primary hover:underline"
                >
                  View
                </Link>
              )}
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">
              {loading ? "..." : stat.value}
            </div>
            <div className="text-sm text-muted-foreground">{stat.subtitle}</div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Button asChild>
            <Link href="/admin/blog/new">
              <Plus className="mr-2 w-4 h-4" />
              New Blog Post
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/admin/portfolio/new">
              <Plus className="mr-2 w-4 h-4" />
              New Project
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/admin/media">
              <Plus className="mr-2 w-4 h-4" />
              Upload Media
            </Link>
          </Button>
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 rounded-lg bg-muted">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground">
                Blog posts and projects can be added here
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Start by creating your first blog post or portfolio project
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Site Preview */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">Your Website</h2>
          <Button asChild variant="outline" size="sm">
            <Link href="/" target="_blank">
              <Eye className="mr-2 w-4 h-4" />
              View Live Site
            </Link>
          </Button>
        </div>
        <p className="text-muted-foreground">
          Your website is live and accessible to visitors. Use this admin panel to
          manage content, view contacts, and update your portfolio.
        </p>
      </Card>
    </div>
  );
}

