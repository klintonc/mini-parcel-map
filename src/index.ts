import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

// Load the Google Maps script with the key from .env (GOOGLE_MAPS_API_KEY)
const loadGoogleMaps = (): Promise<void> =>
  new Promise((resolve, reject) => {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      reject(new Error('GOOGLE_MAPS_API_KEY is not set. Copy .env.example to .env and add your key.'));
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google Maps'));
    document.head.appendChild(script);
  });

loadGoogleMaps()
  .then(() => {
    const user = new User();
    const company = new Company();
    const map = new Map('map');

    map.addMarker(user);
    map.addMarker(company);
  })
  .catch((err) => {
    console.error(err);
  });
