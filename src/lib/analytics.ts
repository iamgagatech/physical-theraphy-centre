export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // In a real app, this would send data to GA4, Mixpanel, etc.
  console.log(`[Analytics Event]: ${eventName}`, properties);
  
  if (window.gtag) {
    window.gtag('event', eventName, properties);
  }
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
