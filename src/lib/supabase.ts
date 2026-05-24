// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

/*
=============================================================================
  PERFORMANCE DIAGNOSTICS & REGION CONFIGURATION
=============================================================================
  
  1. Performance Diagnostics (Browser DevTools):
     - Open DevTools (F12) -> Network tab.
     - Select 'Img' filter to isolate image requests.
     - Check the 'Size' column to verify images are properly compressed (target < 200KB for large assets, < 50KB for thumbnails).
     - Check 'TTFB' (Time to First Byte) in the timing breakdown. High TTFB indicates CDN latency or slow database response.
     - Monitor 'Requests' count: excessive sequential requests will block rendering.

  2. Project Region Configuration:
     - Ensure the Supabase project is hosted close to the user base (e.g., ap-south-1 Mumbai or ap-southeast-1 Singapore for Indian users).
     - Hosting in distant regions (e.g., US) can add 150ms-300ms latency per request, compounding TTFB issues.

  3. Parallelizing Independent Requests:
     - Avoid sequential await loops for independent data fetching:
       // ❌ BAD
       for (const item of items) { await fetchMedia(item); }
       
       // ✅ GOOD
       const promises = items.map(item => fetchMedia(item));
       await Promise.all(promises);
=============================================================================
*/

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Warning: Missing Supabase Environment Variables. Dynamic database queries will fail.')
}

export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-key"
)

/**
 * Parses a given Supabase public storage URL and returns a transformed URL 
 * with width: 800, quality: 70, format: webp.
 * If the URL is not a Supabase storage URL, or if it is not an image format,
 * the original URL is returned.
 */
export function getOptimizedSupabaseUrl(url: string): string {
  if (!url) return url;
  
  // Fix double 'h' typo if present: 'hhttps://' -> 'https://'
  let cleanUrl = url.trim();
  if (cleanUrl.startsWith("hhttps://")) {
    cleanUrl = "https://" + cleanUrl.substring(9);
  }
  
  // Since Image Transformations are disabled/unsupported on this Supabase project,
  // we do not attempt to parse and transform the URL via the SDK.
  // We simply return the original (cleaned) URL to avoid double-encoding issues 
  // (e.g. changing %20 to %2520) with spaces in file names.
  return cleanUrl;
}