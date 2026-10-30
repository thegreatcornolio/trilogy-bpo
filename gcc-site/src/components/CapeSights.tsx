import Image from "next/image";

const tiles = [
  {
    src: "/proposal/location/cape-sights/iStock_000002459094_Medium.jpg",
    alt: "Cape Town harbour with Table Mountain beyond",
    className: "cape-sights-collage__tile cape-sights-collage__tile--hero",
  },
  {
    src: "/proposal/location/cape-sights/sunset.jpeg",
    alt: "Sunset over Hout Bay with proteas in the foreground",
    className: "cape-sights-collage__tile cape-sights-collage__tile--tall",
  },
  {
    src: "/proposal/location/cape-sights/Cape-Point-Cape-Town-2.jpg",
    alt: "Cape Point coastal path and ocean cliffs",
    className: "cape-sights-collage__tile",
  },
  {
    src: "/proposal/location/cape-sights/capetown.jpeg",
    alt: "Aerial view of Cape Town Stadium, marina and Table Mountain",
    className: "cape-sights-collage__tile cape-sights-collage__tile--wide",
  },
  {
    src: "/proposal/location/cape-sights/1592007850677.jpeg",
    alt: "Colourful beach huts at St James near Muizenberg",
    className: "cape-sights-collage__tile",
  },
  {
    src: "/proposal/location/cape-sights/va-waterfront-table-mountain.webp",
    alt: "V&A Waterfront marina with Table Mountain behind",
    className: "cape-sights-collage__tile cape-sights-collage__tile--tall",
  },
  {
    src: "/proposal/location/cape-sights/WorkingAtRestaurant_KL_20230628_62.jpg",
    alt: "Rooftop dining with Table Mountain in the background",
    className: "cape-sights-collage__tile cape-sights-collage__tile--wide",
  },
  {
    src: "/proposal/location/cape-sights/a-18-pexels-tembela-bohle-920038-16830259865634-1024x683.webp",
    alt: "Hiker overlooking Lion's Head and the Atlantic coastline",
    className: "cape-sights-collage__tile",
  },
  {
    src: "/proposal/location/cape-sights/cape-town-coworking.jpg",
    alt: "Aerial view of Sea Point promenade and Atlantic seaboard",
    className: "cape-sights-collage__tile",
  },
  {
    src: "/proposal/location/cape-sights/images.jpeg",
    alt: "Table Mountain at golden hour from across the bay",
    className: "cape-sights-collage__tile",
  },
] as const;

export default function CapeSights() {
  return (
    <figure className="cape-sights-figure rise">
      <div className="cape-sights-collage" aria-label="Sights in and around Cape Town">
        {tiles.map((tile) => (
          <div key={tile.src} className={tile.className}>
            <Image src={tile.src} alt={tile.alt} fill sizes="(max-width: 900px) 50vw, 33vw" />
          </div>
        ))}
      </div>
      <figcaption>
        Sights in and around Cape Town — lifestyle that attracts and retains talent.
      </figcaption>
    </figure>
  );
}
