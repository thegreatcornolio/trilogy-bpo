#!/usr/bin/env node
/**
 * Next 16 static export + turbopack can leave public/ asset URLs unprefixed
 * when basePath is set. Rewrite absolute same-origin asset paths after build.
 */
import fs from "node:fs";
import path from "node:path";

const base = (process.env.GCC_BASE_PATH || "/trilogy-gcc").replace(/\/$/, "");
const outDir = path.resolve(process.cwd(), "out");

if (!base) {
  console.log("No GCC_BASE_PATH — skip prefix rewrite");
  process.exit(0);
}

const TEXT_EXT = new Set([".html", ".js", ".css", ".txt", ".json", ".xml", ".svg"]);

function shouldRewrite(urlPath) {
  if (!urlPath.startsWith("/")) return false;
  if (urlPath.startsWith("//")) return false;
  if (urlPath.startsWith(base + "/") || urlPath === base) return false;
  // Leave external-looking and special schemes alone
  if (urlPath.startsWith("/api")) return false;
  return true;
}

function rewriteContent(content) {
  // href="/...", src="/...", url(/...), url("/...")
  return content
    .replace(/(["'`])(\/(?!\/)[^"'`]*?)\1/g, (full, quote, urlPath) => {
      // Only rewrite path-like strings that look like site assets / routes
      if (!shouldRewrite(urlPath)) return full;
      // Skip obvious non-asset tokens (too short, no slash after, etc.) is ok — prefixing /404 is fine under basePath
      if (urlPath.startsWith("/trilogy-gcc")) return full;
      return `${quote}${base}${urlPath}${quote}`;
    })
    .replace(/url\(\s*(\/[^)"'\s]+)\s*\)/g, (full, urlPath) => {
      if (!shouldRewrite(urlPath)) return full;
      return `url(${base}${urlPath})`;
    });
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!TEXT_EXT.has(path.extname(entry.name))) continue;
    const before = fs.readFileSync(full, "utf8");
    const after = rewriteContent(before);
    if (after !== before) {
      fs.writeFileSync(full, after);
      console.log("prefixed", path.relative(outDir, full));
    }
  }
}

if (!fs.existsSync(outDir)) {
  console.error("Missing out/ — run build first");
  process.exit(1);
}

walk(outDir);
console.log(`Done. Asset prefix: ${base}`);
