export const CATEGORIES = ["Sports Fields", "Parks", "Civil"] as const;
export type Category = (typeof CATEGORIES)[number];

export const PROJECT_CATEGORIES: Record<string, Category[]> = {
  "west-vancouver-place-for-sport": ["Sports Fields"],
  "handsworth-secondary-turf-field": ["Sports Fields"],
  "killarney-park-track-and-field": ["Sports Fields", "Parks"],
  "william-griffin-turf-field": ["Sports Fields"],
  "whistler-gateway-loop": ["Civil"],
  "westminster-pier-park": ["Parks"],
  "town-centre-park-lake-loop": ["Parks"],
  "town-centre-park-tournament-site": ["Sports Fields", "Parks"],
  "world-cup-26-field-of-play": ["Sports Fields"],
  "nat-bailey-stadium-field-replacement": ["Sports Fields"],
  "vancouver-house-offsite-roadworks": ["Civil"],
  "reach-8-dyke": ["Civil"],
  "willoughby-community-park-fields": ["Sports Fields", "Parks"],
  "latimer-pond": ["Civil", "Parks"],
  "vicarro-ranch-stormwater-pond": ["Civil"],
  "harewood-centennial-park": ["Parks", "Sports Fields"],
  "leigh-square-donald-pathway": ["Parks", "Civil"],
  "minoru-lakes-renewal": ["Parks"],
  "delbrook-lands-park": ["Parks"],
  "north-delta-track-and-field": ["Sports Fields"],
  "bear-creek-track-renovation": ["Sports Fields"],
  "aberdeen-neighbourhood-park": ["Parks"],
  "cottonwood-park-phase-1b": ["Parks"],
  "lynn-canyon-parking-improvements": ["Civil"],
  "new-brighton-park-shoreline": ["Parks"],
};

/** Example projects shown under each service on the Services page. */
export const SERVICE_PROJECTS: Record<string, string[]> = {
  "Civil Construction": ["vancouver-house-offsite-roadworks", "reach-8-dyke"],
  "Sports Fields & Athletic Facilities": ["world-cup-26-field-of-play", "nat-bailey-stadium-field-replacement", "handsworth-secondary-turf-field"],
  "Parks & Recreation": ["harewood-centennial-park", "delbrook-lands-park", "aberdeen-neighbourhood-park"],
  "Roads & Infrastructure": ["vancouver-house-offsite-roadworks", "lynn-canyon-parking-improvements", "leigh-square-donald-pathway"],
  "Earthworks & Site Development": ["reach-8-dyke", "north-delta-track-and-field"],
  "Landscape Construction": ["leigh-square-donald-pathway", "minoru-lakes-renewal", "cottonwood-park-phase-1b"],
};
