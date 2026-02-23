export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  faqs: FAQ[];
  benefits: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
