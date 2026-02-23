import React, { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, ogType = "website" }) => {
  useEffect(() => {
    document.title = `${title} | Physical Therapy Centre Lagos`;
    
    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update OG Type
    let metaOgType = document.querySelector('meta[property="og:type"]');
    if (!metaOgType) {
      metaOgType = document.createElement("meta");
      metaOgType.setAttribute("property", "og:type");
      document.head.appendChild(metaOgType);
    }
    metaOgType.setAttribute("content", ogType);

    // Update OG Title
    let metaOgTitle = document.querySelector('meta[property="og:title"]');
    if (!metaOgTitle) {
      metaOgTitle = document.createElement("meta");
      metaOgTitle.setAttribute("property", "og:title");
      document.head.appendChild(metaOgTitle);
    }
    metaOgTitle.setAttribute("content", title);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", canonical);
    }
  }, [title, description, canonical, ogType]);

  return null;
};

export const JSONLD: React.FC<{ data: any }> = ({ data }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  "name": "Physical Therapy Centre",
  "image": "https://ptcentrelagos.com/logo.png",
  "url": "https://ptcentrelagos.com",
  "telephone": "+2348001234567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Victoria Island",
    "addressLocality": "Lagos",
    "addressRegion": "Lagos Island",
    "postalCode": "101241",
    "addressCountry": "NG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.4281,
    "longitude": 3.4219
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "medicalSpecialty": "Physiotherapy",
  "priceRange": "$$"
};
