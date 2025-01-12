import { ProductRecommendation } from './recommendations/types';
import { airFryerRecommendations } from './recommendations/airFryers';
import { mobilityScooterRecommendations } from './recommendations/mobilityScooters';
import { pillDispenserRecommendations } from './recommendations/pillDispensers';
import { smartCaneRecommendations } from './recommendations/smartCanes';
import { securityCameraRecommendations } from './recommendations/securityCameras';

export type { ProductRecommendation };

export const productRecommendations = {
  airFryer: airFryerRecommendations,
  mobilityScooter: mobilityScooterRecommendations,
  pillDispenser: pillDispenserRecommendations,
  smartCane: smartCaneRecommendations,
  securityCamera: securityCameraRecommendations,
} as const;