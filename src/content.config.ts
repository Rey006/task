import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 1. Company Core Info
const company = defineCollection({
  loader: glob({ pattern: "company.md", base: "./src/content/company" }),
  schema: z.object({
    name: z.string({ message: "❌ [company.md] Il campo 'name' è obbligatorio e deve essere una stringa." }),
    claim: z.string({ message: "❌ [company.md] Il campo 'claim' è obbligatorio e deve essere una stringa." }),
    email: z
      .string({ message: "❌ [company.md] Manca il campo 'email'." })
      .email("❌ [company.md] L'email inserita non ha un formato valido (es. info@dominio.it)."),
    city: z.string({ message: "❌ [company.md] Il campo 'city' è obbligatorio." }),
    servedArea: z.array(z.string(), {
      message: "❌ [company.md] 'servedArea' deve essere una lista di stringhe.",
    }).default([]),
    seo: z.object({
      title: z
        .string({ message: "❌ [company.md] Manca il campo 'seo.title'." })
        .max(60, "⚠️ [company.md] 'seo.title' non dovrebbe superare i 60 caratteri per un SEO ottimale."),
      description: z
        .string({ message: "❌ [company.md] Manca il campo 'seo.description'." })
        .max(155, "⚠️ [company.md] 'seo.description' non dovrebbe superare i 155 caratteri per un SEO ottimale."),
    }, { message: "❌ [company.md] Oggetto 'seo' mancante." }),
    availability: z.string().optional(),
    social: z
      .array(
        z.object({
          network: z.string({ message: "❌ [company.md] Manca 'network' nell'array social." }),
          url: z
            .string({ message: "❌ [company.md] Manca 'url' nell'array social." })
            .url("❌ [company.md] L'URL inserito in un social non è valido (es. https://...)."),
        })
      )
      .optional(),
  }),
});

// 2. Services Collection
const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string({ message: "❌ [Servizi] Il campo 'title' è obbligatorio e deve essere una stringa." }),
    description: z.string({ message: "❌ [Servizi] Il campo 'description' è obbligatorio e deve essere una stringa." }),
    order: z
      .number({ message: "❌ [Servizi] Il campo 'order' deve essere un numero obbligatorio." })
      .int("❌ [Servizi] Il campo 'order' deve essere un numero intero (es. 1, 2, 3)."),
  }),
});

// 3. Projects Collection
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string({ message: "❌ [Progetti] Manca il campo 'title' nel progetto." }),
      description: z.string({ message: "❌ [Progetti] Manca il campo 'description' nel progetto." }),
      pubDate: z.date({ message: "❌ [Progetti] Manca la data 'pubDate' o non è valida (formato YYYY-MM-DD)." }),
      featured: z.boolean({ message: "❌ [Progetti] Il campo 'featured' deve essere un booleano (true/false)." }).default(false),
      client: z.string().optional(),
      tags: z.array(z.string()).default([]),
      coverImage: image().optional(),
    }),
});

export const collections = {
  company,
  services,
  projects,
};