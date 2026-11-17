import { z } from 'zod';

/** Honeypot field: real users never fill it. It is NOT validated here; services/api.ts silently drops bot submissions. */
const honeypot = z.string().optional();

export const demoSchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your full name.'),
  email: z.string().trim().email('Please enter a valid work email.'),
  organization: z.string().trim().min(2, 'Please enter your organization.'),
  role: z.string().min(1, 'Select a role.'),
  facility: z.string().min(1, 'Select a facility type.'),
  plan: z.string(),
  message: z.string(),
  website: honeypot,
});

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your full name.'),
  email: z.string().trim().email('Please enter a valid work email.'),
  phone: z.string().trim().min(7, 'Please enter a phone number.'),
  organization: z.string().trim().min(2, 'Please enter your organization.'),
  interest: z.string().min(1, 'Select an interest.'),
  size: z.string().min(1, 'Select a facility size.'),
  message: z.string().trim().min(10, 'Please share at least 10 characters.'),
  website: honeypot,
});

export const newsletterSchema = z.object({
  email: z.string().trim().email('Enter a valid email.'),
  website: honeypot,
});

export type DemoValues = z.infer<typeof demoSchema>;
export type ContactValues = z.infer<typeof contactSchema>;
export type NewsletterValues = z.infer<typeof newsletterSchema>;
