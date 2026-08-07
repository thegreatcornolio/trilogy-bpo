"use client";

import { useEffect, useState, type CSSProperties } from "react";

type Props = {
  src: string;
  poster: string;
  objectPosition?: string;
  videoKey?: string;
};

/** Looping muted background video that falls back to the poster image when the
 * visitor prefers reduced motion. */
export function AutoVideo({
  src,
  poster,
  objectPosition = "center",
  videoKey,
}: Props) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const onChange = (event: MediaQueryListEvent) =>
      setReduceMotion(event.matches);
    query.addEventListener?.("change", onChange);
    return () => query.removeEventListener?.("change", onChange);
  }, []);

  const style: CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition,
  };

  if (reduceMotion) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={poster} alt="" aria-hidden style={style} />;
  }

  return (
    <video
      key={videoKey ?? src}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
      style={style}
    />
  );
}

export default AutoVideo;
