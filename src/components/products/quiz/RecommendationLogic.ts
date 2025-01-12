import { ProductRecommendation, productRecommendations } from "./ProductRecommendations";

export const getRecommendation = (productType: string, answers: string[]): ProductRecommendation => {
  let category: string;
  
  switch(productType) {
    case 'airFryer':
      category = answers[2] === "Under $50" ? "budget" : 
                 answers[2] === "$50-$100" ? "midRange" : "premium";
      break;
    case 'mobilityScooter':
      category = answers[0] === "Indoors only" ? "basic" :
                 answers[0] === "Outdoors only" ? "midRange" : "premium";
      break;
    case 'pillDispenser':
      category = answers[0] === "1-3 medications" ? "basic" :
                 answers[0] === "4-6 medications" ? "midRange" : "premium";
      break;
    case 'smartCane':
      category = answers[0] === "Fall detection" ? "basic" :
                 answers[0] === "GPS tracking" ? "midRange" : "premium";
      break;
    case 'securityCamera':
      category = answers[0] === "Indoor only" ? "basic" :
                 answers[0] === "Outdoor only" ? "midRange" : "premium";
      break;
    default:
      category = "midRange";
  }

  if (!productRecommendations[productType]) {
    return {
      name: "Product Not Found",
      description: "We're sorry, but we couldn't find a matching product. Please try again.",
      features: ["No features available"],
      imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      affiliateLink: "#"
    };
  }

  return productRecommendations[productType][category] || productRecommendations[productType].midRange;
};