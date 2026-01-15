# SEO Optimization Guide

This document outlines the SEO optimizations implemented for the Noriaki Nishida portfolio website to improve search engine rankings for keywords like "Noriaki Nishida," "Nishida," "Noriaki," "max-dev," "fullstack engineer," "Japanese developer," and more.

## Implemented SEO Features

### 1. Meta Tags
- **Title Tag**: Optimized with primary keywords
- **Meta Description**: Compelling description with target keywords
- **Meta Keywords**: Comprehensive keyword list including:
  - Noriaki Nishida, Nishida, Noriaki
  - max-dev, max dev
  - fullstack, fullstack engineer, full stack developer
  - Japanese developer, Japan developer
  - React developer, Node.js developer, TypeScript developer
  - Tottori developer, freelance developer, remote developer

### 2. Open Graph Tags
- Optimized for social media sharing (Facebook, LinkedIn, etc.)
- Custom OG image for better social previews
- Proper OG title, description, and URL

### 3. Twitter Card Tags
- Summary large image card
- Optimized for Twitter sharing

### 4. Structured Data (JSON-LD)
- **Person Schema**: Defines Noriaki Nishida as a Person with:
  - Name and alternate names (Max-Dev, Max Dev)
  - Job title (Full Stack Engineer)
  - Location (Tottori City, Japan)
  - Contact information
  - Skills and expertise
- **WebSite Schema**: Defines the website structure
- Helps search engines understand the content better

### 5. Sitemap
- XML sitemap at `/sitemap.xml`
- Includes all major sections:
  - Homepage
  - About section
  - Skills section
  - Experience section
  - Projects section
  - Services section
  - Contact section
- Proper priority and change frequency settings

### 6. Robots.txt
- Allows all search engine crawlers
- References sitemap location
- Proper crawl-delay settings

### 7. Semantic HTML
- Proper heading hierarchy (h1, h2, h3)
- Semantic HTML5 elements (main, section, article, etc.)
- Proper alt text for images
- ARIA labels for accessibility

### 8. Technical SEO
- Canonical URLs to prevent duplicate content
- Proper language declaration (lang="en")
- Geo-location meta tags (Tottori City, Japan)
- Mobile-responsive viewport settings

## Target Keywords

### Primary Keywords
- Noriaki Nishida
- Nishida
- Noriaki
- max-dev
- max dev

### Secondary Keywords
- fullstack engineer
- full stack developer
- fullstack developer
- Japanese developer
- Japan developer
- React developer
- Node.js developer
- TypeScript developer
- web developer
- software engineer
- Tottori developer
- freelance developer
- remote developer
- frontend developer
- backend developer
- full stack engineer Japan

## SEO Best Practices Implemented

1. **Keyword Optimization**
   - Keywords naturally integrated into content
   - Keywords in title, headings, and meta descriptions
   - Long-tail keywords included

2. **Content Quality**
   - Unique, valuable content
   - Regular updates recommended
   - Clear structure and navigation

3. **Technical SEO**
   - Fast page load times
   - Mobile-friendly design
   - Proper URL structure
   - Clean code

4. **Link Building** (To be implemented)
   - Social media profiles
   - GitHub profile
   - LinkedIn profile
   - Professional networks

## Next Steps for Better SEO

1. **Content Updates**
   - Regularly update portfolio with new projects
   - Add blog posts about development topics
   - Share case studies and tutorials

2. **Backlinks**
   - Get listed on developer directories
   - Contribute to open source projects
   - Guest post on tech blogs
   - Participate in developer communities

3. **Local SEO**
   - Register on Google Business Profile
   - List on Japanese developer directories
   - Join local tech communities

4. **Analytics**
   - Set up Google Analytics
   - Set up Google Search Console
   - Monitor keyword rankings
   - Track user behavior

5. **Performance**
   - Optimize images (WebP format)
   - Implement lazy loading
   - Minimize CSS and JavaScript
   - Use CDN for static assets

6. **Social Signals**
   - Share portfolio on social media
   - Engage with developer communities
   - Build professional network

## Monitoring SEO Performance

### Tools to Use
1. **Google Search Console**: Monitor search performance
2. **Google Analytics**: Track user behavior
3. **Ahrefs/SEMrush**: Keyword research and tracking
4. **PageSpeed Insights**: Monitor page speed
5. **Lighthouse**: Overall SEO audit

### Key Metrics to Track
- Organic search traffic
- Keyword rankings
- Click-through rate (CTR)
- Bounce rate
- Average session duration
- Pages per session
- Conversion rate

## Updating Sitemap

When adding new content, update `public/sitemap.xml` with:
- New URLs
- Last modified dates
- Appropriate priorities
- Change frequencies

## Updating Structured Data

When profile information changes, update:
- `index.html` - JSON-LD structured data
- `src/components/SEO.tsx` - Meta tags
- Ensure all information is accurate and current

## Important Notes

1. **Domain**: Update all URLs from `https://noriakinishida.dev` to your actual domain when deploying
2. **OG Image**: Create and upload an Open Graph image (1200x630px) to `/public/og-image.png`
3. **Favicon**: Ensure favicon is properly set
4. **HTTPS**: Use HTTPS for better SEO ranking
5. **Regular Updates**: Keep content fresh and updated regularly

## Contact Information in SEO

The following contact information is included in structured data:
- Email: noriakinishida38@gmail.com
- Phone: +81-070-2478-6494
- Location: Tottori City, Japan

Update these if they change.
