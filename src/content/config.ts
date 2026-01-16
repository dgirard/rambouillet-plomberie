import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Services collection (urgence, chauffage, plomberie)
const servicesCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    priceRange: z.string().optional(),
    urgency: z.enum(['standard', 'urgent', '24h']),
    category: z.enum(['urgence', 'chauffage', 'plomberie']),
    cities: z.array(z.string()).default(['rambouillet']),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional()
  })
});

// Cities collection for local SEO
const citiesCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/cities' }),
  schema: z.object({
    city: z.string(),
    slug: z.string(),
    department: z.string().default('Yvelines'),
    postalCodes: z.array(z.string()),
    population: z.number().optional(),
    landmarks: z.array(z.string()).default([]),
    interventionTime: z.string().default('30 minutes'),
    testimonial: z.object({
      text: z.string(),
      author: z.string(),
      rating: z.number().min(1).max(5)
    }).optional()
  })
});

// Realisations collection for gallery
const realisationsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/realisations' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    category: z.enum(['urgence', 'chauffage', 'plomberie', 'renovation']),
    location: z.string(),
    duration: z.string().optional(),
    tags: z.array(z.string()),
    images: z.array(z.object({
      src: image(),
      alt: z.string(),
      caption: z.string().optional()
    })).optional(),
    featured: z.boolean().default(false),
    testimonial: z.object({
      text: z.string(),
      author: z.string(),
      rating: z.number().min(1).max(5)
    }).optional()
  })
});

export const collections = {
  services: servicesCollection,
  cities: citiesCollection,
  realisations: realisationsCollection
};
