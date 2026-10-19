import type { NextConfig } from "next";
import path from "path";

/** Set GCC_BASE_PATH=/trilogy-gcc when publishing under web.trilogybpo.com/trilogy-gcc/ */
const basePath = process.env.GCC_BASE_PATH?.replace(/\/$/, "") || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
