const chatwoot = {
  baseUrl: 'https://app.chatwoot.com',
  websiteToken: 'fGpU9Uke6q9TqJHhLDS7xepS',
  settings: { position: 'right', type: 'standard', launcherTitle: '' },
} as const;

declare global {
  interface Window {
    chatwootSettings?: { position: string; type: string; launcherTitle: string };
    chatwootSDK?: { run: (config: { websiteToken: string; baseUrl: string }) => void };
  }
}

export function initChatwoot() {
  if (document.getElementById('chatwoot-sdk')) return;

  window.chatwootSettings = chatwoot.settings;

  const preconnect = document.createElement('link');
  preconnect.rel = 'preconnect';
  preconnect.href = chatwoot.baseUrl;
  document.head.appendChild(preconnect);

  const script = document.createElement('script');
  script.id = 'chatwoot-sdk';
  script.src = `${chatwoot.baseUrl}/packs/js/sdk.js`;
  script.async = true;
  script.onload = () => {
    window.chatwootSDK?.run({ websiteToken: chatwoot.websiteToken, baseUrl: chatwoot.baseUrl });
  };
  document.head.appendChild(script);
}
