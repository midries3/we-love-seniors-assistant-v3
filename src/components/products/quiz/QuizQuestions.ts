export interface Question {
  id: number;
  text: string;
  options: string[];
}

export const productQuestions: Record<string, Question[]> = {
  airFryer: [
    {
      id: 1,
      text: "What size air fryer are you looking for?",
      options: ["Small (1-2 people)", "Medium (3-4 people)", "Large (5+ people)"],
    },
    {
      id: 2,
      text: "Which features are most important to you?",
      options: ["Easy to use controls", "Multiple cooking functions", "Easy to clean"],
    },
    {
      id: 3,
      text: "What's your budget range?",
      options: ["Under $50", "$50-$100", "Over $100"],
    },
  ],
  mobilityScooter: [
    {
      id: 1,
      text: "Where do you plan to use the mobility scooter most often?",
      options: ["Indoors only", "Outdoors only", "Both indoors and outdoors"],
    },
    {
      id: 2,
      text: "What's your preferred maximum travel distance on a single charge?",
      options: ["Up to 10 miles", "10-20 miles", "Over 20 miles"],
    },
    {
      id: 3,
      text: "Which features are most important to you?",
      options: ["Comfort", "Portability", "Speed and range"],
    },
  ],
  pillDispenser: [
    {
      id: 1,
      text: "How many different medications do you need to manage?",
      options: ["1-3 medications", "4-6 medications", "7+ medications"],
    },
    {
      id: 2,
      text: "Do you need medication reminders?",
      options: ["Yes, with alarms", "Yes, but silent notifications", "No reminders needed"],
    },
    {
      id: 3,
      text: "Would you like family monitoring capabilities?",
      options: ["Yes, with mobile app", "Yes, but basic alerts only", "No monitoring needed"],
    },
  ],
  smartCane: [
    {
      id: 1,
      text: "Which smart features interest you most?",
      options: ["Fall detection", "GPS tracking", "Health monitoring"],
    },
    {
      id: 2,
      text: "What type of handle grip do you prefer?",
      options: ["Traditional curved", "Ergonomic gel grip", "Palm grip"],
    },
    {
      id: 3,
      text: "Do you need LED lighting for visibility?",
      options: ["Yes, bright LED", "Yes, subtle lighting", "No lighting needed"],
    },
  ],
  securityCamera: [
    {
      id: 1,
      text: "Where do you plan to install the security camera?",
      options: ["Indoor only", "Outdoor only", "Both indoor and outdoor"],
    },
    {
      id: 2,
      text: "What features are most important to you?",
      options: ["Two-way audio", "Night vision", "Motion detection"],
    },
    {
      id: 3,
      text: "Do you need mobile app connectivity?",
      options: ["Yes, with live viewing", "Yes, for notifications only", "No app needed"],
    },
  ],
};