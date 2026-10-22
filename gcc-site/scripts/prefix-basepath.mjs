#!/usr/bin/env node
/**
 * Next 16 static export + turbopack can leave public/ asset URLs unprefixed
 * when basePath is set. Rewrite absolute same-origin asset paths after build.
 *
 * Only touch HTML/JS/CSS/TXT — never rewrite .svg/.xml body content (that
 * corrupts self-closing tags like fill="#fff"/>).
 */
import fs from "node:fs";
import path from "node:path";

const base = (process.env.GCC_BASE_PATH || "/trilogy-gcc").replace(/\/$/, "");
const outDir = path.resolve(process.cwd(), "out");

if (!base) {
  console.log("No GCC_BASE_PATH — skip prefix rewrite");
  process.exit(0);
}

const TEXT_EXT = new Set([".html", ".js", ".css", ".txt", ".json"]);

/** Only rewrite paths that look like site assets / Next routes */
function shouldRewrite(urlPath) {
  if (!urlPath.startsWith("/")) return false;
  if (urlPath.startsWith("//")) return false;
  if (urlPath.startsWith(base + "/") || urlPath === base) return false;
  if (urlPath.startsWith("/api")) return false;
  // Must look like a real path (file, _next, or app route) — avoid SVG junk like "/>"
  if (!/^\/(?:_next|proposal|logo-|icon|favicon|apple-|cape-|offer-|brand-|trilogy-|[a-z0-9_-]+\/)/i.test(urlPath)
    && !/^\/(?:[a-z0-9_.@-]+\.(?:png|jpe?g|webp|gif|svg|ico|mp4|pdf|css|js|woff2?|txt|html?))(?:\?.*)?$/i.test(urlPath)
    && !/^\/(?:404\/?|icon\.png|favicon\.ico)(?:\?.*)?$/i.test(urlPath)) {
    return false;
  }
  return true;
}

function rewriteContent(content) {
  return content
    .replace(/(["'`])(\/(?!\/)[^"'`]*?)\1/g, (full, quote, urlPath) => {
      if (!shouldRewrite(urlPath)) return full;
      return `${quote}${base}${urlPath}${quote}`;
    })
    .replace(/url\(\s*(['"]?)(\/[^)"'\s]+)\1\s*\)/g, (full, quote, urlPath) => {
      if (!shouldRewrite(urlPath)) return full;
      return `url(${quote}${base}${urlPath}${quote})`;
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
