/**
 * Utility to parse and format legacy WordPress Visual Composer (WPBakery) shortcodes
 * into clean, responsive HTML and styled Tailwind components.
 */
export function formatWpContent(rawHtml: string): string {
  if (!rawHtml) return "";

  let cleaned = rawHtml;

  // 1. Transform [vc_btn title="..." link="url:ENCODED_URL..."] shortcodes into modern buttons
  cleaned = cleaned.replace(/\[vc_btn\s+([^\]]+)\]/gi, (_, attrsString) => {
    const titleMatch = attrsString.match(/title=["']([^"']+)["']/i);
    const linkMatch = attrsString.match(/link=["']([^"']+)["']/i);

    const title = titleMatch ? titleMatch[1] : "Click Here";
    let url = "#";

    if (linkMatch) {
      const linkVal = linkMatch[1];
      const urlParam = linkVal.match(/url:([^|]+)/i);
      if (urlParam) {
        try {
          url = decodeURIComponent(urlParam[1]);
        } catch {
          url = urlParam[1];
        }
      }
    }

    return `<div class="my-4 text-center sm:inline-block sm:mr-3">
      <a href="${url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all no-underline">
        ${title} &rarr;
      </a>
    </div>`;
  });

  // 2. Unwrap [vc_column_text]...[/vc_column_text]
  cleaned = cleaned.replace(/\[vc_column_text\]([\s\S]*?)\[\/vc_column_text\]/gi, "$1");

  // 3. Clean up any remaining [vc_*] or [/vc_*] shortcodes
  cleaned = cleaned.replace(/\[\/?vc_[^\]]*\]/gi, "");

  return cleaned.trim();
}
