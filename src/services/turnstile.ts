const turnstileConfig = {
  siteKey: '0x4AAAAAAGE5yZS8gJ3ncE76',
  scriptId: 'cf-turnstile-sdk',
  preconnectId: 'cf-turnstile-preconnect',
  scriptSrc: 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit',
} as const;

type TurnstileRenderOptions = {
  sitekey: string;
  theme?: 'light' | 'dark' | 'auto';
  size?: 'normal' | 'compact';
  callback?: (token: string) => void;
  'expired-callback'?: () => void;
  'error-callback'?: () => void;
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
  reset: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let loader: Promise<TurnstileApi> | null = null;

export const turnstileSiteKey = turnstileConfig.siteKey;

export function loadTurnstile(): Promise<TurnstileApi> {
  if (loader) return loader;

  loader = new Promise<TurnstileApi>((resolve, reject) => {
    if (window.turnstile) {
      resolve(window.turnstile);
      return;
    }

    if (!document.getElementById(turnstileConfig.preconnectId)) {
      const preconnect = document.createElement('link');
      preconnect.id = turnstileConfig.preconnectId;
      preconnect.rel = 'preconnect';
      preconnect.href = 'https://challenges.cloudflare.com';
      document.head.appendChild(preconnect);
    }

    const existing = document.getElementById(turnstileConfig.scriptId) as HTMLScriptElement | null;
    const script = existing ?? document.createElement('script');
    script.id = turnstileConfig.scriptId;
    script.src = turnstileConfig.scriptSrc;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.turnstile) resolve(window.turnstile);
      else reject(new Error('Turnstile SDK did not initialize'));
    };
    script.onerror = () => reject(new Error('Turnstile SDK failed to load'));
    if (!existing) document.head.appendChild(script);
  }).catch((error: unknown) => {
    loader = null;
    throw error;
  });

  return loader;
}

export function resetTurnstile(widgetId?: string) {
  window.turnstile?.reset(widgetId);
}
