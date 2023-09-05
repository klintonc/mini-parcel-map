# Mini Parcel Map

A small TypeScript app that shows a Google Map with two markers: a random user and a random company, generated with [Faker](https://fakerjs.dev). Click a marker to see its details. Bundled with [Parcel](https://parceljs.org).

## Features

- Full-page Google Map
- Random `User` and `Company` placed at random coordinates
- Info window with details when you click a marker
- A `Mappable` interface: any class with a `location` and `markerContent()` can be added to the map

## Getting started

Requirements: Node.js, Yarn and a [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/get-api-key) key.

1. Add your API key:

   ```bash
   cp .env.example .env
   # then set GOOGLE_MAPS_API_KEY in .env
   ```

2. Install and run:

   ```bash
   yarn install
   yarn start
   ```

   Open http://localhost:1234.

To create a production build in `dist/`, run `yarn build`.

The key is read from `.env` when Parcel builds the app, so it ends up in the browser bundle. Restrict it to your domains in the Google Cloud console.

## Project structure

```
index.html        # Page with the map container
src/
├── index.ts      # Loads Google Maps, then creates the map and markers
├── Map.ts        # Map wrapper and the Mappable interface
├── User.ts       # Random user (Faker)
├── Company.ts    # Random company (Faker)
└── env.d.ts      # Type for process.env.GOOGLE_MAPS_API_KEY
```
