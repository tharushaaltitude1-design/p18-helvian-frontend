import type { ContactValues, DemoValues, NewsletterValues } from '@/utils/validators';

/**
 * Mock API for the static landing page.
 * TODO: replace each function body with a fetch() call to the Laravel API
 * (e.g. POST /api/demo-requests, /api/contact, /api/newsletter). Keep the signatures.
 */
export type ApiResult = { success: true };

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));
const inFlight = new Set<string>();

const isBot = (honeypot?: string) => Boolean(honeypot && honeypot.trim().length > 0);

function save(key: string, data: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify({ data, createdAt: new Date().toISOString() }));
  } catch {
    /* storage unavailable (private mode / blocked): the demo still succeeds */
  }
}

/** Double-submit protection + silent bot drop. Bots get the same success response and nothing is stored. */
async function submit<T extends { website?: string }>(key: string, values: T, delay: number): Promise<ApiResult> {
  if (inFlight.has(key)) return { success: true };
  inFlight.add(key);
  try {
    await wait(delay);
    if (!isBot(values.website)) {
      const { website: _website, ...clean } = values;
      void _website;
      save(`helvian.${key}`, clean);
    }
    return { success: true };
  } finally {
    inFlight.delete(key);
  }
}

export const submitDemoRequest = (values: DemoValues) => submit('demoRequest', values, 650);
export const submitContact = (values: ContactValues) => submit('contact', values, 650);
export const subscribeNewsletter = (values: NewsletterValues) => submit('newsletter', values, 450);
