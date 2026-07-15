export type Category = "Website" | "App" | "Custom Software" | "Digital Marketing" | "AI Automation";

export interface IntentMatch {
  category: Category;
  confidence: number;
  extracted?: {
    keywords?: string[];
  };
}

export const CATEGORIES: Category[] = [
  "Website",
  "App",
  "Custom Software",
  "Digital Marketing",
  "AI Automation",
];

const CATEGORY_PATTERNS: Record<Category, RegExp> = {
  "Website": /\b(website|site|web|store|shop|ecommerce|e-commerce|landing page|blog|portfolio|cms|redesign|domain|wordpress|shopify)\b/i,
  "App": /\b(app|application|mobile|ios|android|react native|flutter|saas|web app|portal|pwa|smartphone)\b/i,
  "Custom Software": /\b(software|system|tool|crm|erp|dashboard|backend|api|database|inventory|billing|logistics|internal|workflow|enterprise)\b/i,
  "Digital Marketing": /\b(marketing|seo|ads|advertising|leads|traffic|social media|google ads|meta ads|branding|growth|funnel|email marketing)\b/i,
  "AI Automation": /\b(ai|artificial intelligence|bot|chatbot|automation|automate|llm|chatgpt|claude|agent|pipeline|scrape|scraping|support bot)\b/i,
};

/**
 * 0ms client-side intent classifier.
 * Replaces network round-trips to /api/classify with immediate, highly accurate regex keyword matching.
 */
export function classifyIntent(query: string): IntentMatch {
  const cleanQuery = query.trim();
  if (!cleanQuery) {
    return { category: "Website", confidence: 0.5 };
  }

  let bestCategory: Category = "Website";
  let maxMatches = 0;
  const matchedKeywords: string[] = [];

  for (const [category, pattern] of Object.entries(CATEGORY_PATTERNS) as [Category, RegExp][]) {
    const matches = cleanQuery.match(new RegExp(pattern, "gi"));
    if (matches) {
      const matchCount = matches.length;
      if (matchCount > maxMatches) {
        maxMatches = matchCount;
        bestCategory = category;
      }
      matchedKeywords.push(...matches);
    }
  }

  // If we found direct keyword hits, confidence is high (0.85 - 0.99)
  // If no direct hits, default to Website with baseline confidence
  const confidence = maxMatches > 0 ? Math.min(0.75 + maxMatches * 0.1, 0.99) : 0.6;

  return {
    category: bestCategory,
    confidence,
    extracted: {
      keywords: Array.from(new Set(matchedKeywords.map((k) => k.toLowerCase()))),
    },
  };
}
