import { Timestamp } from "firebase/firestore";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  author: {
    name: string;
    avatar?: string;
  };
  status: "draft" | "published" | "scheduled";
  publishedAt?: Timestamp | Date;
  createdAt: Timestamp | Date;
  updatedAt: Timestamp | Date;
  tags: string[];
  categories: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  aiGenerated: boolean;
  readTime: number; // minutes
  views: number;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  images: string[];
  thumbnail: string;
  platforms: ("web" | "ios" | "android")[];
  technologies: string[];
  liveUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  featured: boolean;
  order: number;
  createdAt: Timestamp | Date;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  message: string;
  budget?: string;
  timeline?: string;
  status: "new" | "contacted" | "qualified" | "converted" | "archived";
  source: string;
  createdAt: Timestamp | Date;
}

export interface SiteSettings {
  id: "global";
  siteTitle: string;
  siteDescription: string;
  contactEmail: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  availability: boolean;
  availabilityMessage: string;
}

export interface AIGenerationRequest {
  topic: string;
  tone?: "professional" | "casual" | "technical";
  length?: "short" | "medium" | "long";
  type?: "title" | "outline" | "article" | "seo";
}

export interface AIGenerationResponse {
  content: string;
  metadata?: {
    model: string;
    tokens: number;
  };
}

