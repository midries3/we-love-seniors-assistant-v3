export interface ProductRecommendation {
  name: string;
  description: string;
  features: string[];
  imageUrl: string;
  affiliateLink: string;
}

export type ProductCategory = Record<string, ProductRecommendation>;