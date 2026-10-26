import minoru7 from "@/assets/minoru-7.jpg";
import minoru5 from "@/assets/minoru-5.jpg";
import minoru6 from "@/assets/minoru-6.jpg";
import vic4 from "@/assets/vicarro-4.jpg";
import aberdeen4 from "@/assets/aberdeen-4.jpg";
import aberdeen5 from "@/assets/aberdeen-5.jpg";
import cotton4 from "@/assets/cottonwood-4.jpg";
import brighton4 from "@/assets/new-brighton-4.jpg";
import brighton5 from "@/assets/new-brighton-5.jpg";
import brighton6 from "@/assets/new-brighton-6.jpg";
import wf1 from "@/assets/willoughby-fields-1.jpg";
import wf2 from "@/assets/willoughby-fields-2.jpg";
import wf3 from "@/assets/willoughby-fields-3.jpg";
import wf4 from "@/assets/willoughby-fields-4.jpg";
import lat1 from "@/assets/latimer-1.jpg";
import lat2 from "@/assets/latimer-2.jpg";
import lat3 from "@/assets/latimer-3.jpg";
import wg1 from "@/assets/william-griffin-1.jpg";
import wgl1 from "@/assets/whistler-gateway-1.jpg";
import wgl2 from "@/assets/whistler-gateway-2.jpg";
import wgl3 from "@/assets/whistler-gateway-3.jpg";
import wgl4 from "@/assets/whistler-gateway-4.jpg";
import wgl5 from "@/assets/whistler-gateway-5.jpg";
import wgl6 from "@/assets/whistler-gateway-6.jpg";
import wgl7 from "@/assets/whistler-gateway-7.jpg";
import wgl8 from "@/assets/whistler-gateway-8.jpg";
import wpp1 from "@/assets/westminster-pier-1.jpg";
import wpp2 from "@/assets/westminster-pier-2.jpg";
import wpp3 from "@/assets/westminster-pier-3.jpg";
import wpp4 from "@/assets/westminster-pier-4.jpg";
import wpp5 from "@/assets/westminster-pier-5.jpg";
import wpp6 from "@/assets/westminster-pier-6.jpg";
import tcp1 from "@/assets/town-centre-1.jpg";
import tcp2 from "@/assets/town-centre-2.jpg";
import tcp3 from "@/assets/town-centre-3.jpg";
import tcp4 from "@/assets/town-centre-4.jpg";
import tcp5 from "@/assets/town-centre-5.jpg";
import tct1 from "@/assets/town-centre-tournament-1.jpg";
import tct2 from "@/assets/town-centre-tournament-2.jpg";
import tct4 from "@/assets/town-centre-tournament-4.jpg";
import tct5 from "@/assets/town-centre-tournament-5.jpg";
import tct6 from "@/assets/town-centre-tournament-6.jpg";
import tct7 from "@/assets/town-centre-tournament-7.jpg";
import tct8 from "@/assets/town-centre-tournament-8.jpg";
import tct9 from "@/assets/town-centre-tournament-9.jpg";
import tct10 from "@/assets/town-centre-tournament-10.jpg";
import tct11 from "@/assets/town-centre-tournament-11.jpg";
import tct12 from "@/assets/town-centre-tournament-12.jpg";
import tct13 from "@/assets/town-centre-tournament-13.jpg";
import kil1 from "@/assets/killarney-1.jpg";
import vic1 from "@/assets/vicarro-1.jpg";
import vic2 from "@/assets/vicarro-2.jpg";
import vic3 from "@/assets/vicarro-3.jpg";
import wv1 from "@/assets/west-van-sport-1.jpg";
import wv2 from "@/assets/west-van-sport-2.jpg";
import wv3 from "@/assets/west-van-sport-3.jpg";
import hw1 from "@/assets/handsworth-1.jpg";
import hw2 from "@/assets/handsworth-2.jpg";
import hw3 from "@/assets/handsworth-3.jpg";
import stairs1 from "@/assets/vancouver-house-stairs.jpg";
import stairs2 from "@/assets/vancouver-house-stairs-2.jpg";
import vh3 from "@/assets/vancouver-house-3.jpg";
import vh4 from "@/assets/vancouver-house-4.jpg";
import vh5 from "@/assets/vancouver-house-5.jpg";
import dyke1 from "@/assets/reach8-dyke-1.jpg";
import dyke2 from "@/assets/reach8-dyke-2.jpg";
import dyke3 from "@/assets/reach8-dyke-3.jpg";
import nat2 from "@/assets/nat-bailey-2.jpg";
import nat3 from "@/assets/nat-bailey-3.jpg";
import wc2 from "@/assets/worldcup-2.jpg";
import wc3 from "@/assets/worldcup-3.jpg";
import wc4 from "@/assets/worldcup-4.jpg";
import aberdeen1 from "@/assets/aberdeen-1.jpg";
import aberdeen2 from "@/assets/aberdeen-2.jpg";
import aberdeen3 from "@/assets/aberdeen-3.jpg";
import bear1 from "@/assets/bear-creek-1.jpg";
import bear2 from "@/assets/bear-creek-2.jpg";
import cotton1 from "@/assets/cottonwood-1.jpg";
import cotton2 from "@/assets/cottonwood-2.jpg";
import cotton3 from "@/assets/cottonwood-3.jpg";
import delbrook1 from "@/assets/delbrook-1.jpg";
import delbrook4 from "@/assets/delbrook-4.jpg";
import delbrook5 from "@/assets/delbrook-5.jpg";
import delbrook6 from "@/assets/delbrook-6.jpg";
import harewood1 from "@/assets/harewood-1.jpg";
import harewood2 from "@/assets/harewood-2.jpg";
import leigh1 from "@/assets/leigh-square-1.jpg";
import leigh2 from "@/assets/leigh-square-2.jpg";
import leigh4 from "@/assets/leigh-square-4.jpg";
import leigh5 from "@/assets/leigh-square-5.jpg";
import lynn1 from "@/assets/lynn-canyon-1.jpg";
import lynn2 from "@/assets/lynn-canyon-2.jpg";
import lynn3 from "@/assets/lynn-canyon-3.jpg";
import minoru1 from "@/assets/minoru-1.jpg";
import minoru2 from "@/assets/minoru-2.jpg";
import minoru3 from "@/assets/minoru-3.jpg";
import brighton1 from "@/assets/new-brighton-1.jpg";
import ndelta1 from "@/assets/north-delta-1.jpg";
import ndelta2 from "@/assets/north-delta-2.jpg";
import ndelta3 from "@/assets/north-delta-3.jpg";

export type Project = {
  slug: string;
  title: string;
  owner: string;
  location: string;
  consultant?: string;
  period: string;
  value: string;
  summary: string;
  hideSummary?: boolean;
  awards?: string[];
  scope: string[];
  photos: { url: string; alt: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "west-vancouver-place-for-sport",
    title: "West Vancouver Place for Sport",
    owner: "District of West Vancouver",
    location: "West Vancouver, BC",
    consultant: "Doug Wournell Sport Architect",
    period: "December 2023 – October 2024",
    value: "$11,669,700",
    summary:
      "A new synthetic turf field and running track for West Vancouver, including 21,370 m³ of bulk excavation, 76,000 MT of fill, precast and cast-in-place concrete walls, field fencing, track asphalt and synthetic track surfacing, irrigation, drainage, fibre optic conduit, football goal posts, trees, storage sheds and support structures.",
    scope: [
      "21,500 m³ of bulk excavation and off-site disposal",
      "Lock block retaining wall",
      "76,000 MT fill quantity",
      "22,000 ft precast wall",
      "700 m³ CIP concrete",
      "Electrical including field lighting",
      "Irrigation, drainage, storm, sanitary and water utilities",
      "Dewatering & ESC",
      "Fencing",
      "Asphalt",
    ],
    photos: [
      { url: wv1, alt: "Aerial view of the West Vancouver Place for Sport turf field and track with the ocean behind" },
      { url: wv2, alt: "West Vancouver Place for Sport field and track on its precast retaining wall below the mountains" },
      { url: wv3, alt: "Track, turf field and tall retaining wall at West Vancouver Place for Sport" },
    ],
  },
  {
    slug: "vicarro-ranch-stormwater-pond",
    title: "Vicarro Ranch Stormwater Detention Pond and Pump Station",
    owner: "City of Abbotsford",
    location: "Abbotsford, BC",
    consultant: "ISL Engineering",
    period: "September 2021 – April 2023",
    value: "$5,641,600",
    summary:
      "Excavation and removal of approx. 19,500 m³ of spoil, flow control chamber, inlet/outlet headwalls, toe drain system, pond berm with low permeable liner, grass and rip rap lined channels, landscaping, instream tie-in works with environmental compensation planting, pathway restoration, a new pump station building with station piping and 3 pumps, retaining walls, site grading, drainage and access driveway, and BC Hydro PMT, ducts and conduit civil works.",
    hideSummary: true,
    scope: [
      "19,500 m² rough site grading",
      "4,850 m³ imported embankment fill",
      "21,500 m³ common excavation",
      "2,850 m³ imported topsoil",
      "Supply and install all structural steel and misc. metal work",
      "Supply and install all wood and related works",
      "Booster pump station",
      "Municipal infrastructure",
    ],
    photos: [
      { url: vic1, alt: "Exterior of the new Vicarro Ranch pump station building with timber roof" },
      { url: vic2, alt: "Blue station piping and pumps inside the Vicarro Ranch pump station" },
      { url: vic3, alt: "Aerial view of the Vicarro Ranch stormwater detention pond under construction" },
      { url: vic4, alt: "Vicarro Ranch pump station above its gabion retaining wall and grass slope" },
    ],
  },
  {
    slug: "william-griffin-turf-field",
    title: "William Griffin Synthetic Turf Field Civil Works",
    owner: "District of North Vancouver",
    location: "North Vancouver, BC",
    consultant: "R.F. Binnie & Associates",
    period: "July 2023 – December 2023",
    value: "$1,987,300.00",
    summary:
      "Excavation and removal of the existing aggregate base and laterals, geosynthetic and granular fill placement, and installation of solid and perforated storm sewers for the synthetic turf field.",
    hideSummary: true,
    scope: [
      "7,000 m3 of excavation including permeable aggregate, native fills, and drain rock",
      "2,500 m3 trench excavation including offsite disposal of material",
      "Supply & installation of sand bedding",
      "Installation of 2 layers of uniaxial geogrid including installation of anchoring system",
      "Installation of solid pipe and perforated storm drainage",
    ],
    photos: [
      { url: wg1, alt: "Aerial view of the completed William Griffin synthetic turf field in North Vancouver" },
    ],
  },
  {
    slug: "whistler-gateway-loop",
    title: "Whistler Gateway Loop Development – Phase 1 Civil & Landscape",
    owner: "Resort Municipality of Whistler",
    location: "Whistler, BC",
    consultant: "Kerr Wood Leidel",
    period: "February 2017 – September 2017",
    value: "$3,894,200.00",
    summary:
      "Transformation of an existing Whistler Village parking lot into a new 8-bay bus loop, including site preparation, road construction and paving, concrete works, civil servicing and landscaping.",
    hideSummary: true,
    scope: [
      "Excavation, compaction, grading",
      "Subgrade preparation",
      "Design build irrigation",
      "Electrical street lighting and ducting",
      "Storm sewer install",
      "Concrete walks, curbs, gutters",
      "Site furnishings",
      "Concrete raft slab for Phase 2 building structure",
    ],
    photos: [
      { url: wgl2, alt: "Whistler Gateway Loop project photo 2" },
      { url: wgl1, alt: "Whistler Gateway Loop project photo 1" },
      { url: wgl3, alt: "Whistler Gateway Loop project photo 3" },
      { url: wgl4, alt: "Whistler Gateway Loop project photo 4" },
      { url: wgl5, alt: "Whistler Gateway Loop project photo 5" },
      { url: wgl6, alt: "Whistler Gateway Loop project photo 6" },
      { url: wgl7, alt: "Whistler Gateway Loop project photo 7" },
      { url: wgl8, alt: "Whistler Gateway Loop project photo 8" },
    ],
  },
  {
    slug: "westminster-pier-park",
    title: "Westminster Pier Park",
    owner: "City of New Westminster",
    location: "New Westminster, BC",
    consultant: "PWL Partnership",
    period: "January 2011 – February 2012",
    value: "$6,300,000.00",
    summary:
      "A multi-disciplinary waterfront park development along the Fraser River featuring civil, structural, architectural and landscape construction.",
    hideSummary: true,
    scope: [
      "16,600 LM of timber decking for pier",
      "1 structural steel pedestrian bridge (16 m)",
      "Electrical lighting throughout the pier and surrounding park area",
      "1,200 m2 of structural concrete",
      "2,615 LM steel guardrail",
      "Concession/washroom building",
      "Sierrascape retaining wall along the shoreline",
      "Site furniture",
      "3 play structures",
      "Deltalok wall",
      "Lytton Square timber structure",
      "Drainage",
      "Irrigation",
      "Fencing and railings",
    ],
    awards: [
      "2015 National Awards of Landscape Excellence",
      "2014 BC Landscape Awards of Excellence",
      "2012 Georgia Straight Best Make Over of a Community Space",
      "2012 Federation of Canadian Municipalities – Sustainable Communities Award in the Brownfield Category",
      "2012 REBGV Commercial Building Award",
      "2012 Canadian Association of Municipal Administrators – Innovation and Administrative Excellence in Converting a Contaminated Brownfield into a Useable Greenfield",
      "2011 Canadian Urban Institute for Sustainable Remediation Technologies – National Brownie Award",
    ],
    photos: [
      { url: wpp1, alt: "Westminster Pier Park project photo 1" },
      { url: wpp2, alt: "Westminster Pier Park project photo 2" },
      { url: wpp3, alt: "Westminster Pier Park project photo 3" },
      { url: wpp4, alt: "Westminster Pier Park project photo 4" },
      { url: wpp5, alt: "Westminster Pier Park project photo 5" },
      { url: wpp6, alt: "Westminster Pier Park project photo 6" },
    ],
  },
  {
    slug: "town-centre-park-lake-loop",
    title: "Town Centre Park – Lake Loop Landscape Construction",
    owner: "City of Coquitlam",
    location: "Coquitlam, BC",
    consultant: "PWL Partnership",
    period: "February 2022 – July 2022",
    value: "$1,333,394.00",
    summary:
      "Excavation and off-site disposal, asphalt paving, tree removals, storm servicing, electrical works, aggregate and stone paving, and concrete bands, pads, seating and walls.",
    hideSummary: true,
    scope: [
      "1,958 m3 of excavation and off-site disposal",
      "Asphalt paving",
      "Site furnishings",
      "Supply & install of growing medium for lawn spaces and horticultural beds",
      "Concrete bands, pads, seating, walls, and other structures",
      "Stone paving",
      "Electrical works",
    ],
    photos: [
      { url: tcp1, alt: "Town Centre Park Lake Loop project photo 1" },
      { url: tcp2, alt: "Town Centre Park Lake Loop project photo 2" },
      { url: tcp3, alt: "Town Centre Park Lake Loop project photo 3" },
      { url: tcp4, alt: "Town Centre Park Lake Loop project photo 4" },
      { url: tcp5, alt: "Town Centre Park Lake Loop project photo 5" },
    ],
  },
  {
    slug: "town-centre-park-tournament-site",
    title: "Town Centre Park Tournament Site",
    owner: "City of Coquitlam",
    location: "Coquitlam, BC",
    period: "September 2007 – October 2008",
    value: "$14,000,000.00",
    summary:
      "Four lit artificial turf surfaces plus track and field facilities, with over 420,000 square feet of turf built to make the site a premier year-round tournament facility in British Columbia.",
    hideSummary: true,
    scope: [
      "23,000 m3 of common excavation – off site",
      "16,000 m3 of common excavation – on site",
      "8,000 LM of storm pipe",
      "4,700 tonnes of asphalt",
      "2,300 m2 asphalt path",
      "1,900 m2 of concrete paving",
      "Artificial fields",
      "Chain link fencing",
    ],
    photos: [
      { url: tct1, alt: "Town Centre Park Tournament Site project photo 1" },
      { url: tct2, alt: "Town Centre Park Tournament Site project photo 2" },
      { url: tct4, alt: "Town Centre Park Tournament Site project photo 4" },
      { url: tct5, alt: "Town Centre Park Tournament Site project photo 5" },
      { url: tct6, alt: "Town Centre Park Tournament Site project photo 6" },
      { url: tct7, alt: "Town Centre Park Tournament Site project photo 7" },
      { url: tct8, alt: "Town Centre Park Tournament Site project photo 8" },
      { url: tct9, alt: "Town Centre Park Tournament Site project photo 9" },
      { url: tct10, alt: "Town Centre Park Tournament Site project photo 10" },
      { url: tct11, alt: "Town Centre Park Tournament Site project photo 11" },
      { url: tct12, alt: "Town Centre Park Tournament Site project photo 12" },
      { url: tct13, alt: "Town Centre Park Tournament Site project photo 13" },
    ],
  },
  {
    slug: "killarney-park-track-and-field",
    title: "Killarney Park Track & Field Civil Works",
    owner: "City of Vancouver",
    location: "Vancouver, BC",
    consultant: "Core Group Consultants",
    period: "March 2025 – September 2026",
    value: "$8,285,500.00",
    summary:
      "Supply and installation of a complete irrigation system, a sand-based natural grass playing field, and sport field and pedestrian lighting, with concrete work, asphalt paving, drainage upgrades, outdoor exercise equipment, site furnishings and landscaping.",
    hideSummary: true,
    scope: [
      "Supply & install of irrigation systems",
      "Supply & install of sand base grass playing field",
      "Supply & install of sport field & pedestrian lighting",
      "Concrete work & asphalt paving",
      "Outdoor exercise equipment and site furnishings",
      "Supply & install of landscaping, including trees, plants, growing medium and hydraulic seeding",
      "Drainage improvements",
    ],
    photos: [
      { url: kil1, alt: "Aerial view of the Killarney Park natural grass field and track in Vancouver" },
    ],
  },
  {
    slug: "willoughby-community-park-fields",
    title: "Willoughby Community Park Fields & Site Improvements",
    owner: "Township of Langley",
    location: "Langley, BC",
    consultant: "Van der Zalm & Associates",
    period: "July 2018 – October 2020",
    value: "$10,226,100.00",
    summary:
      "Relocation and expansion of an existing synthetic turf field and installation of a second synthetic turf field, plus an approximately 375-vehicle asphalt parking lot with sidewalks, curb & gutter, underground services, lighting, retaining walls, landscaping, irrigation and erosion sediment control. The fields are the FIFA-certified official training ground for Vancouver FC.",
    hideSummary: true,
    scope: [
      "FIFA Certified",
      "40,000 m² place & grading excavated material",
      "40,000 MT base gravels",
      "Concrete walks, stairs, curbs, gutters",
      "15,000 m² asphalt",
      "400 face m lock block retaining wall",
      "25,000 m³ excavation",
      "Hard and soft landscape",
      "14,533 MT structural fill",
      "High mast netting system",
      "Fencing",
      "Electrical",
    ],
    photos: [
      { url: wf1, alt: "Willoughby Community Park synthetic turf fields" },
      { url: wf2, alt: "Willoughby Community Park fields and parking lot" },
      { url: wf3, alt: "Willoughby Community Park site improvements" },
      { url: wf4, alt: "Willoughby Community Park turf field" },
    ],
  },
  {
    slug: "latimer-pond",
    title: "Latimer Pond",
    owner: "Township of Langley",
    location: "Langley, BC",
    consultant: "ISL Engineering",
    period: "September 2016 – March 2017",
    value: "$1,951,000.00",
    summary:
      "Expansion of an existing, out-of-date detention pond, including storm sewer, headwalls, manholes, a flow control chamber, concrete box culvert, earthworks, road and site improvements, a tiered boulder retaining wall, clay berm, landscaping and an elevated wooden viewing platform.",
    hideSummary: true,
    scope: [
      "Concrete walks, curb & gutter",
      "Concrete storm sewer pipes",
      "PVC storm sewer",
      "Headwalls",
      "Manholes",
      "Flow control chamber culvert",
      "Tiered boulder retaining wall",
      "Excavation and removal of 17,910 m³ of soil",
      "Creek daylighting",
    ],
    photos: [
      { url: lat2, alt: "Elevated wooden viewing platform with a bench overlooking Latimer Pond" },
      { url: lat1, alt: "Aerial view of Latimer Pond with its tiered boulder walls and viewing platform" },
      { url: lat3, alt: "Planted tiered banks and outlet at Latimer Pond in Langley" },
    ],
  },
  {
    slug: "handsworth-secondary-turf-field",
    title: "STF and Washroom – Handsworth Secondary School",
    owner: "District of North Vancouver",
    location: "Handsworth Secondary School, North Vancouver, BC",
    consultant: "R.F. Binnie & Associates",
    period: "Current",
    value: "$5,173,800.00",
    summary:
      "Supply and installation of an artificial turf field at Handsworth Secondary School, including site preparation, demolition, earthworks, drainage, utilities, concrete and asphalt works, waterworks, landscaping and planting, electrical, fencing, sidewalks, stairs and handrails, and washroom buildings, plus site furnishings, players shelters and sport field equipment.",
    scope: [
      "Artificial turf field",
      "Earthworks",
      "Electrical",
      "Fencing",
      "Utility works",
      "Stairs & handrails",
      "Washroom building",
      "Player's shelters",
      "Site furnishings",
      "Sports field equipment",
    ],
    photos: [
      { url: hw1, alt: "New artificial turf field at Handsworth Secondary with lights and bleachers" },
      { url: hw2, alt: "Handsworth turf field and school with the North Shore mountains behind" },
      { url: hw3, alt: "Overhead drone view of the finished multi-sport turf field at Handsworth" },
    ],
  },
  {
    slug: "world-cup-26-field-of-play",
    title: "World Cup 26 – Field of Play Construction",
    owner: "Pavco",
    location: "BC Place, Vancouver, BC",
    consultant: "R.F. Binnie & Associates",
    period: "May 2026 – July 2026",
    value: "$7,200,000.00",
    hideSummary: true,
    summary:
      "Wilco is proud to have been awarded the prestigious contract to deliver the playing surface for the 2026 FIFA World Cup at BC Place, beating out international competition and joining an elite group of only five sportsfield contractors worldwide selected to work on this historic global event. Our scope covers the complete lifecycle of the temporary tournament field, from the DrainTalent and modular panel drainage systems through root zone preparation, full irrigation with pumps, and a vacuum and ventilation system with piping, equipment and a temporary modular enclosure. The work also includes FIFA Quality Pro synthetic turf around the field of play, FIFA-approved goals with foundations, and the unloading and installation of the hybrid sod playing surface, all subject to rigorous quality control testing and FIFA Quality Pro certification. After the tournament, Wilco will remove and dispose of all temporary systems, including the field protection structure, restoring BC Place to its original condition.",
    scope: [
      "Installation of DrainTalent and modular panel drainage systems",
      "Root zone preparation with sand and specialized materials",
      "Full irrigation system installation, including pumps",
      "Vacuum and ventilation system with piping, equipment and temporary modular enclosure",
      "Installation of FIFA Quality Pro synthetic turf around the field of play",
      "Supply and installation of FIFA-approved goals with foundations",
      "Handling and installation of hybrid sod playing surface",
      "Comprehensive quality control testing, including FIFA Quality Pro certification",
      "Post-tournament removal and offsite disposal of all temporary systems",
    ],
    photos: [
      {
        url: wc2,
        alt: "The completed natural grass pitch inside BC Place under stadium lighting",
      },
      {
        url: wc4,
        alt: "Grow lights arrayed across the World Cup pitch at BC Place seen from above",
      },
      {
        url: wc3,
        alt: "Interior of BC Place with the tournament pitch and retractable roof",
      },
    ],
  },
  {
    slug: "nat-bailey-stadium-field-replacement",
    title: "Nat Bailey Stadium Field Replacement",
    owner: "Diamond Baseball Holdings",
    location: "Vancouver, BC",
    consultant: "Populous",
    period: "October 2024 – April 2025",
    value: "$4,793,200",
    hideSummary: true,
    summary:
      "Demolition and full replacement of the ballpark's field infrastructure at the home of the Vancouver Canadians, including new backstops, fencing, dugouts, pathways and associated site works. The scope covered field grading, asphalt paving, topsoil and sod, sportsfield lighting civil works and environmental protection measures to improve the functionality, safety and accessibility of the facility, along with relocation of existing site amenities and coordination of all related civil and landscape improvements.",
    scope: [
      "4,500 m³ bulk excavation with offsite disposal",
      "Supply and install irrigation system",
      "9,230 m² of 100 mm clear crush drainage layer",
      "Chainlink fencing",
      "2,200 m² of 100 mm base gravels in warning track",
      "305 m² synthetic turf",
      "Install of blackstick pitcher's mound and bull pen",
      "3,700 MT USGA sand",
      "2,320 m perforated drainage",
    ],
    photos: [
      {
        url: nat2,
        alt: "Aerial view of Nat Bailey Stadium with the Vancouver skyline and North Shore mountains behind",
      },
      {
        url: nat3,
        alt: "Overhead view of the rebuilt infield, mound and warning track at Nat Bailey Stadium",
      },
    ],
  },
  {
    slug: "vancouver-house-offsite-roadworks",
    title: "Vancouver House Offsite Roadworks and Services",
    owner: "ICON West",
    location: "Vancouver, BC",
    consultant: "Dialog",
    period: "January 2018 – May 2021",
    value: "$9,000,000.00",
    summary:
      "A multi-year downtown Vancouver streetscape and servicing package surrounding Vancouver House, rebuilding roads, bike lanes, sidewalks and public terraces across five major streets.",
    scope: [
      "Roadworks along Granville Street, Rolston Street, Pacific Boulevard, Howe Street and Beach Street",
      "Bike lane construction",
      "Curb and gutter installation",
      "Sidewalk and asphalt paving",
      "Removal of existing hardscape and softscape",
      "Structural soil and irrigation installation",
      "Bike racks and tree grates",
      "On-site concrete stairs",
      "Concrete retaining walls",
      "Terrace furniture",
      "Line painting",
      "Crushed gravel pathways",
      "Sidewalk granite bands",
    ],
    photos: [
      {
        url: stairs1,
        alt: "Illuminated concrete stairs and planted terraces at Vancouver House at night",
      },
      {
        url: stairs2,
        alt: "Lit concrete stairs with stainless handrails on the Vancouver House plaza at night",
      },
      { url: vh3, alt: "Vancouver House podium deck with timber planters, boulders and curved benches" },
      { url: vh4, alt: "Lit stepped planters and stairs along the Vancouver House sidewalk" },
      { url: vh5, alt: "Stainless steel panel feature wall and handrail at Vancouver House" },
    ],
  },
  {
    slug: "reach-8-dyke",
    title: "Reach 8 Dyke",
    owner: "City of Burnaby",
    location: "Burnaby, BC",
    consultant: "Associated Engineering",
    period: "June 2019 – August 2021",
    value: "$6,576,900",
    summary:
      "Construction of approximately 950 m of new dyke through sensitive creekside terrain in Burnaby, combining flood protection structures, a new floodbox at Glenlyon Creek and a paved public trail.",
    scope: [
      "Construction of approximately 950 m of new dyke",
      "4 m wide dyke crest with 3:1 side slopes",
      "Lock-block retaining walls",
      "New floodbox at Glenlyon Creek",
      "Micropile and reinforced concrete watermain crossing",
      "Trail paving",
      "Culvert and storm sewer installation",
      "Signage and handrails",
      "Sand preload and ground improvements",
      "Associated civil and site servicing works",
    ],
    photos: [
      {
        url: dyke1,
        alt: "Lock-block dyke wall and concrete box culvert outlet beside a creek",
      },
      {
        url: dyke3,
        alt: "Aerial view of the new lock-block dyke curving through forest",
      },
      {
        url: dyke2,
        alt: "Newly built dyke crest trail base running between trees",
      },
    ],
  },
  {
    slug: "harewood-centennial-park",
    title: "Harewood Centennial Park Artificial Turf Fields – Civil Works",
    owner: "City of Nanaimo",
    location: "Nanaimo, BC",
    consultant: "R.F. Binnie & Associates",
    period: "May 2023 – May 2025",
    value: "$8,608,500",
    summary:
      "Demolition and construction of two synthetic football/soccer turf fields and backstop, including site preparation, removals, excavation and filling, permeable aggregate base, high-mast Musco LED field lighting, chain link fencing, players bench areas, asphalt and concrete pathways, plaza and spectator areas, soft landscaping, storm servicing, relocation of sanitary and water servicing, and prefabricated grandstands and media towers.",
    scope: [
      "11,800 m³ bulk excavation – offsite disposal",
      "18,450 MT imported engineered fill",
      "Permeable aggregate field structure",
      "High-mast Musco LED field lighting",
      "Chainlink fencing",
      "Aluminum bleachers",
      "Cast-in-place retaining walls",
      "Sanitary servicing",
      "Concrete works",
      "Filming tower",
    ],
    photos: [
      { url: harewood1, alt: "Harewood Centennial Park artificial turf fields" },
      { url: harewood2, alt: "Harewood Centennial Park field construction" },
    ],
  },
  {
    slug: "leigh-square-donald-pathway",
    title: "Civic Centre Phase 2 – Leigh Square and Donald Pathway",
    owner: "City of Port Coquitlam",
    location: "Port Coquitlam, BC",
    consultant: "R.F. Binnie & Associates",
    period: "August 2023 – April 2025",
    value: "$10,591,868.13",
    summary:
      "Renewal of Leigh Square at Shaughnessy Street and McAllister Avenue, including removal of existing hardscape and softscape, site grading, drainage and irrigation, precast concrete plaza paving, new trees, shrubs and sod, site furniture, lighting and electrical improvements, a new pavilion and fountain, and roadway improvements with curbs, asphalt, a multi-use pathway and an RRFB signal.",
    scope: [
      "3,150 m³ common excavation",
      "1,890 MT 75 mm crushed granular subbase",
      "2,483 m² plaza pavers and precast concrete plaza paving",
      "New pavilion and fountain",
      "Multi-use pathway and roadway improvements",
      "Drainage and irrigation",
      "Electrical, conduit, junction boxes and wiring",
      "Supply and install of kiosks and panels",
      "Site furnishings",
    ],
    photos: [
      { url: leigh2, alt: "Leigh Square pavilion and paving" },
      { url: leigh1, alt: "Leigh Square plaza renewal" },
      { url: leigh4, alt: "Leigh Square & Donald Pathway" },
      { url: leigh5, alt: "Leigh Square & Donald Pathway" },
    ],
  },
  {
    slug: "minoru-lakes-renewal",
    title: "Minoru Lakes Renewal",
    owner: "City of Richmond",
    location: "Richmond, BC",
    consultant: "ISL Engineering",
    period: "April 2022 – May 2023",
    value: "$9,324,100",
    summary:
      "Full renewal of Minoru Lakes including cast-in-place concrete structures, ornamental stone and rock mulch, metal fabrications, exterior finish carpentry, site furnishings, roadway lighting, clearing and grubbing, roadway excavation and embankment, geosynthetics, irrigation, culverts, storm sewers, waterworks, planting and landscape maintenance.",
    scope: [
      "450 m³ of cast-in-place concrete walls and structures",
      "600 m² of yellow cedar decking",
      "1,350 m² of stone surfacing",
      "20,000 m² of site grading",
      "10,000 m² of reshaped lake shore and bottom",
      "5,000 m² of new bentonite liner on lake shore",
      "19,300 MT of imported fill material",
      "11,500 m² of lawn install and 5,000 m² of planting beds",
      "500 lm of 300 mm recirculation forcemain and 400 lm of storm drainage",
      "Pump station",
    ],
    photos: [
      { url: minoru1, alt: "Minoru Lakes renewal shoreline and decking" },
      { url: minoru2, alt: "Minoru Lakes boardwalk and planting" },
      { url: minoru3, alt: "Minoru Lakes completed park" },
      { url: minoru5, alt: "Curved boardwalk with red benches beside the lake under willow trees at Minoru Lakes" },
      { url: minoru6, alt: "Red and timber benches along a new path and planting at Minoru Lakes" },
      { url: minoru7, alt: "Minoru Lakes renewal" },
    ],
  },
  {
    slug: "delbrook-lands-park",
    title: "New Delbrook Lands Park Construction",
    owner: "District of North Vancouver",
    location: "North Vancouver, BC",
    consultant: "Van der Zalm & Associates",
    period: "June 2024 – March 2026",
    value: "$5,473,400",
    summary:
      "Construction of a new community park including a washroom building, fencing and rails, tennis courts, site grading, excavation, drainage, site furnishings, outdoor gym equipment with safety surfacing, shade structure, picnic shelter, play equipment, spray park, concrete surfaces and stairs, landscaping, electrical, waterworks, asphalt, line painting and irrigation.",
    scope: [
      "Washroom building",
      "Tennis courts",
      "Spray park and play equipment",
      "Outdoor gym equipment and safety surfacing",
      "Concrete surfaces and stairs",
      "Fencing and rails",
      "Landscaping and irrigation",
      "Electrical and waterworks",
      "Asphalt and line painting",
      "Site furnishings",
    ],
    photos: [
      { url: delbrook1, alt: "Aerial view of Delbrook Lands playground and courts" },
      { url: delbrook4, alt: "Delbrook Lands Park" },
      { url: delbrook5, alt: "Delbrook Lands Park" },
      { url: delbrook6, alt: "Delbrook Lands Park" },
    ],
  },
  {
    slug: "north-delta-track-and-field",
    title: "North Delta Track and Field Facility & Civil Works",
    owner: "City of Delta",
    location: "Delta, BC",
    consultant: "Core Group Consultants",
    period: "June 2020 – June 2021",
    value: "$4,718,200.00",
    summary:
      "Removal and disposal of the existing gravel-based running track, sports infield and associated drainage, and construction of the civil infrastructure for a new competition-standard track and field facility with tennis courts, hammer cage, steeplechase, pole vault, discus, long and triple jump, natural turf soccer field, parking lot, paved walkways, field and pedestrian lighting, site services and landscaping.",
    scope: [
      "Removal and disposal of existing track and underground drainage",
      "Competition-standard track and field events areas",
      "Tennis courts",
      "Natural turf soccer field",
      "Parking lot",
      "Paved walkways and rubberized surface pathway",
      "Field and pedestrian lighting systems",
      "Soft and hard landscaping",
    ],
    photos: [
      { url: ndelta1, alt: "North Delta track and field facility" },
      { url: ndelta2, alt: "North Delta running track surfacing" },
      { url: ndelta3, alt: "North Delta soccer field and track" },
    ],
  },
  {
    slug: "bear-creek-track-renovation",
    title: "Bear Creek Track Renovation",
    owner: "City of Surrey",
    location: "Surrey, BC",
    consultant: "Stantec",
    period: "July 2024 – October 2025",
    value: "$2,710,000.00",
    summary:
      "Removal and disposal of the existing track surface and installation of new rubberized surfacing, including drainage works, new asphalt and grading, along with long and triple jump equipment, pole vault equipment and surfacing, steeplechase equipment, shot-put equipment, hammer cage and concrete surfacing.",
    scope: [
      "7,054 m² rubberized surfacing",
      "Asphalt paving",
      "Drainage works",
      "Irrigation",
      "Steeplechase equipment",
      "Long and triple jump equipment",
      "Pole vault equipment",
      "Shot-put equipment and hammer cage",
    ],
    photos: [
      { url: bear1, alt: "Bear Creek running track renovation" },
      { url: bear2, alt: "Bear Creek rubberized track surfacing" },
    ],
  },
  {
    slug: "aberdeen-neighbourhood-park",
    title: "Aberdeen Neighbourhood Park – Phase 2",
    owner: "City of Richmond",
    location: "Richmond, BC",
    consultant: "Van der Zalm & Associates",
    period: "May 2021 – July 2022",
    value: "$3,306,900",
    summary:
      "Construction of a Chinese garden shelter, playground surfacing with resilient rubber and engineered wood fibre, site furnishings and play equipment, site grading, excavation, hardscaping, a washroom building, pavilion, electrical works and an irrigation system.",
    scope: [
      "Chinese garden shelter",
      "Washroom building",
      "Pavilion",
      "Playground surfacing and play equipment",
      "Site landscaping",
      "Excavation and site grading",
      "Electrical works",
      "Irrigation works",
      "Landscape and civil works",
    ],
    photos: [
      { url: aberdeen1, alt: "Aberdeen Neighbourhood Park shelter and plaza" },
      { url: aberdeen2, alt: "Aberdeen Neighbourhood Park playground" },
      { url: aberdeen3, alt: "Aberdeen Neighbourhood Park landscaping" },
      { url: aberdeen4, alt: "Angular white canopy shade structure on the Aberdeen Park plaza" },
      { url: aberdeen5, alt: "Aberdeen Park playground with tower slides and a nest swing" },
    ],
  },
  {
    slug: "cottonwood-park-phase-1b",
    title: "Cottonwood Park – Phase 1B",
    owner: "City of Coquitlam",
    location: "Coquitlam, BC",
    consultant: "Van der Zalm & Associates",
    period: "April 2021 – July 2022",
    value: "$2,511,800.00",
    summary:
      "Park construction including bulk excavation and offsite disposal, structural fill, sand field base, concrete paving, parkour concrete features, growing medium, fencing, a multi-purpose sport court, trees, shrubs, sod and hydroseed, an irrigation system, and water and storm servicing including a water fountain and soakaway pit.",
    scope: [
      "9,000 m³ of excavation and offsite disposal",
      "5,400 m³ of structural fill",
      "Sand field base and multi-purpose sport court",
      "Parkour concrete features",
      "Water and storm servicing",
      "Soccer/softball field fencing",
      "Trees, shrubs, sod and hydroseed",
      "Irrigation system",
      "Electrical",
      "Site furnishings",
    ],
    photos: [
      { url: cotton1, alt: "Cottonwood Park sport court and fields" },
      { url: cotton2, alt: "Cottonwood Park parkour concrete features" },
      { url: cotton3, alt: "Cottonwood Park landscaping and pathways" },
      { url: cotton4, alt: "Aerial view of the Cottonwood Park sport court, fitness area and new grass field" },
    ],
  },
  {
    slug: "lynn-canyon-parking-improvements",
    title: "Lynn Canyon Park Parking & Circulation Improvements",
    owner: "District of North Vancouver",
    location: "North Vancouver, BC",
    consultant: "R.F. Binnie & Associates",
    period: "November 2019 – October 2020",
    value: "$1,908,500.00",
    summary:
      "Rehabilitation of the existing parking lot and improvements to vehicle circulation at the main entrance of Lynn Canyon Park, including improvements to the park entrance at the end of Peters Road, removal and replacement of the existing entry gate, asphalt paving, sidewalk, and concrete curb and gutter.",
    scope: [
      "Tree removal, clearing and grubbing",
      "Common excavation – offsite disposal",
      "2,170 MT granular subbase",
      "Asphalt paving, curb and gutter",
      "Park entrance gate",
      "Manholes",
      "Green rainwater infrastructure",
      "Painted pavement markings and signage",
    ],
    photos: [
      { url: lynn2, alt: "Lynn Canyon Park entrance works" },
      { url: lynn1, alt: "Lynn Canyon Park parking lot improvements" },
      { url: lynn3, alt: "Lynn Canyon Park paved circulation area" },
    ],
  },
  {
    slug: "new-brighton-park-shoreline",
    title: "New Brighton Park Shoreline Habitat Restoration",
    owner: "Vancouver Fraser Port Authority",
    location: "Vancouver, BC",
    consultant: "Moffatt & Nichol",
    period: "September 2016 – March 2017",
    value: "$1,056,700.00",
    summary:
      "Situated on the south side of Burrard Inlet, this project restored fish and wildlife habitat and increased public access to nature, balancing a healthy environment with future port development. It was developed in collaboration with the Musqueam, Squamish and Tsleil-Waututh First Nations.",
    scope: [
      "19,500 m³ earthworks",
      "Over 800 tonnes of rock works",
      "1,115 m² of concrete and granular paths",
      "12,174 m² hydroseeding",
      "Creek daylighting",
      "Fenced off-leash dog area",
      "Viewing decks",
      "Detailed park amenities",
    ],
    photos: [
      { url: brighton1, alt: "New Brighton Park restored shoreline" },
      { url: brighton4, alt: "Boardwalk and benches at New Brighton Park at dusk with the North Shore mountains" },
      { url: brighton5, alt: "Boardwalk bench and interpretive signs beside the New Brighton Park wetland" },
      { url: brighton6, alt: "Lupines and boardwalk at New Brighton Park shoreline on a sunny day" },
    ],
  },
];
