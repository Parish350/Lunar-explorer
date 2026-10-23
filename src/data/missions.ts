export interface Mission {
  id: string;
  name: string;
  year: number;
  dateStr: string;
  type: 'Crewed' | 'Uncrewed';
  category: 'Lunar Flyby' | 'Lunar Landing' | 'Lunar Orbit' | 'Impact / Probe';
  status: 'Completed' | 'Active' | 'Planned';
  agency: string;
  image: string;
  badge?: string;
  shortDescription: string;
  fullStory: string;
  achievements: string[];
  crew?: { name: string; role: string; photo?: string }[];
  duration?: string;
  spacecraft: string;
  landingSite?: string;
  significance: string;
  funFact: string;
}

export const MISSIONS: Mission[] = [
  {
    id: 'apollo-8',
    name: 'Apollo 8',
    year: 1968,
    dateStr: 'Dec 21–27, 1968',
    type: 'Crewed',
    category: 'Lunar Orbit',
    status: 'Completed',
    agency: 'NASA',
    image: 'https://images-assets.nasa.gov/image/as08-14-2383/as08-14-2383~orig.jpg', // Earthrise
    shortDescription: 'First crewed spacecraft to leave low Earth orbit, reach the Moon, and orbit it 10 times.',
    fullStory: 'Apollo 8 was humanity’s first journey beyond low Earth orbit. Launched on December 21, 1968, aboard the mammoth Saturn V rocket, Frank Borman, James Lovell, and William Anders traversed 240,000 miles to circle the Moon on Christmas Eve. During their broadcast, they read from Genesis and took the iconic "Earthrise" photograph, permanently transforming our perspective of our home planet.',
    achievements: [
      'First humans to leave low Earth orbit and travel to the Moon',
      'First humans to see Earth as a whole planet from deep space',
      'Captured the legendary "Earthrise" photograph',
      'Completed 10 lunar orbits over 20 hours'
    ],
    crew: [
      { name: 'Frank Borman', role: 'Commander' },
      { name: 'James Lovell', role: 'Command Module Pilot' },
      { name: 'William Anders', role: 'Lunar Module Pilot' }
    ],
    duration: '6 days, 3 hours',
    spacecraft: 'Apollo Command/Service Module (CSM-103)',
    significance: 'Paved the definitive operational path for the Apollo 11 lunar landing.',
    funFact: 'William Anders was actually assigned to photograph lunar geology targets when he spotted Earth rising over the lunar horizon through the window.'
  },
  {
    id: 'apollo-11',
    name: 'Apollo 11',
    year: 1969,
    dateStr: 'Jul 16–24, 1969',
    type: 'Crewed',
    category: 'Lunar Landing',
    status: 'Completed',
    agency: 'NASA',
    image: 'https://images-assets.nasa.gov/image/as11-40-5903/as11-40-5903~orig.jpg', // Buzz Aldrin on Moon
    shortDescription: 'The historic first crewed landing on the Moon with Neil Armstrong and Buzz Aldrin.',
    fullStory: 'On July 20, 1969, the Apollo 11 Lunar Module "Eagle" touched down in the Sea of Tranquility. Neil Armstrong declared, "Houston, Tranquility Base here. The Eagle has landed." Hours later, Armstrong stepped onto the lunar surface with the historic words: "That\'s one small step for [a] man, one giant leap for mankind." Buzz Aldrin joined him for 2 hours and 15 minutes of exploration.',
    achievements: [
      'First humans to walk on the lunar surface',
      'Collected 21.55 kg (47.5 lb) of lunar material and core samples',
      'Deployed the Early Apollo Scientific Experiments Package (EASEP)',
      'Safely returned to Earth after 8 days in space'
    ],
    crew: [
      { name: 'Neil Armstrong', role: 'Commander' },
      { name: 'Buzz Aldrin', role: 'Lunar Module Pilot' },
      { name: 'Michael Collins', role: 'Command Module Pilot' }
    ],
    duration: '8 days, 3 hours (2h 31m surface EVA)',
    spacecraft: 'Command Module Columbia & Lunar Module Eagle',
    landingSite: 'Sea of Tranquility (Mare Tranquillitatis)',
    significance: 'Fulfilled President John F. Kennedy\'s goal to land a man on the Moon and return him safely to Earth before the decade was out.',
    funFact: 'The Eagle landed with barely 25 seconds of descent propellant remaining after Armstrong navigated past a boulder-strewn crater manually.'
  },
  {
    id: 'apollo-12',
    name: 'Apollo 12',
    year: 1969,
    dateStr: 'Nov 14–24, 1969',
    type: 'Crewed',
    category: 'Lunar Landing',
    status: 'Completed',
    agency: 'NASA',
    image: 'https://images-assets.nasa.gov/image/as12-49-7278/as12-49-7278~orig.jpg', // Surveyor 3 and Apollo 12 astronaut
    shortDescription: 'Second crewed lunar landing demonstrating pinpoint landing accuracy next to Surveyor 3.',
    fullStory: 'Apollo 12 lifted off on November 14, 1969, during a thunderstorm, surviving two lightning strikes during launch. Pete Conrad and Alan Bean executed a precision landing within walking distance (just 160 meters) of the robotic Surveyor 3 spacecraft, which had landed on the Moon 2.5 years earlier. Conrad famously stepped down saying: "Whoopee! Man, that may have been a small one for Neil, but that\'s a long one for me!"',
    achievements: [
      'First pinpoint precision lunar landing',
      'Retrieved pieces of the robotic Surveyor 3 probe to study long-term space exposure',
      'Conducted two lunar EVAs totaling over 7.5 hours',
      'Deployed the first full Apollo Lunar Surface Experiments Package (ALSEP)'
    ],
    crew: [
      { name: 'Charles "Pete" Conrad Jr.', role: 'Commander' },
      { name: 'Alan L. Bean', role: 'Lunar Module Pilot' },
      { name: 'Richard F. Gordon Jr.', role: 'Command Module Pilot' }
    ],
    duration: '10 days, 4 hours (7h 45m surface EVA)',
    spacecraft: 'Command Module Yankee Clipper & Lunar Module Intrepid',
    landingSite: 'Ocean of Storms (Oceanus Procellarum)',
    significance: 'Proved NASA could land targeted missions anywhere on the Moon, enabling future landings in rugged highlands.',
    funFact: 'When lightning struck the Saturn V at T+36 seconds, EECOM controller John Aaron famously instructed the crew: "Try SCE to AUX", saving the mission.'
  },
  {
    id: 'apollo-13',
    name: 'Apollo 13',
    year: 1970,
    dateStr: 'Apr 11–17, 1970',
    type: 'Crewed',
    category: 'Lunar Flyby',
    status: 'Completed',
    agency: 'NASA',
    image: 'https://images-assets.nasa.gov/image/as13-59-8500/as13-59-8500~orig.jpg', // Damaged service module
    shortDescription: 'The "successful failure" where teamwork and ingenuity brought three astronauts home safely.',
    fullStory: 'Two days into the mission, an oxygen tank in the Service Module exploded 200,000 miles from Earth. Astronaut Jim Lovell uttered the famous call: "Houston, we\'ve had a problem here." With oxygen, electrical power, and water bleeding away, the Moon landing was aborted. The crew used the Lunar Module "Aquarius" as a lifeboat, swung around the far side of the Moon, and worked with mission control engineers to improvise carbon dioxide scrubbers and re-entry trajectories.',
    achievements: [
      'Safely returned all three crew members following a catastrophic explosion',
      'Set the record for the farthest humans have ever traveled from Earth (400,171 km)',
      'Engineered emergency lithium hydroxide adapter using duct tape and flight manual covers',
      'Demonstrated ultimate mission control teamwork under extreme crisis'
    ],
    crew: [
      { name: 'James A. Lovell Jr.', role: 'Commander' },
      { name: 'John L. Swigert Jr.', role: 'Command Module Pilot' },
      { name: 'Fred W. Haise Jr.', role: 'Lunar Module Pilot' }
    ],
    duration: '5 days, 22 hours',
    spacecraft: 'Command Module Odyssey & Lunar Module Aquarius',
    significance: 'Celebrated as NASA’s finest hour in operational crisis management and human survival in deep space.',
    funFact: 'Jack Swigert was added to the crew only 48 hours before launch when original CMP Ken Mattingly was exposed to German measles.'
  },
  {
    id: 'apollo-15',
    name: 'Apollo 15',
    year: 1971,
    dateStr: 'Jul 26–Aug 7, 1971',
    type: 'Crewed',
    category: 'Lunar Landing',
    status: 'Completed',
    agency: 'NASA',
    image: 'https://images-assets.nasa.gov/image/as15-88-11866/as15-88-11866~orig.jpg', // Rover at Hadley Rille
    shortDescription: 'First extended scientific "J-mission" debuting the Lunar Roving Vehicle.',
    fullStory: 'Apollo 15 was the first of the intensive scientific "J-missions". David Scott and James Irwin spent three days on the lunar surface at Hadley-Apennine, exploring towering mountains and the deep gorge of Hadley Rille. Equipped with the electric Lunar Roving Vehicle (LRV), the astronauts traveled 27.9 kilometers across the Moon, gathering samples including the famous "Genesis Rock" (an anorthosite crust sample dating back ~4.5 billion years).',
    achievements: [
      'First deployment of the Lunar Roving Vehicle ("Moon Buggy")',
      'Discovered the Genesis Rock, dating back to the primordial lunar crust',
      'Spent 18.5 hours across three moonwalks',
      'Conducted Galileo\'s gravity experiment dropping a falcon feather and a hammer simultaneously'
    ],
    crew: [
      { name: 'David R. Scott', role: 'Commander' },
      { name: 'James B. Irwin', role: 'Lunar Module Pilot' },
      { name: 'Alfred M. Worden', role: 'Command Module Pilot' }
    ],
    duration: '12 days, 7 hours (18h 33m surface EVA)',
    spacecraft: 'Command Module Endeavour & Lunar Module Falcon',
    landingSite: 'Hadley-Apennine region',
    significance: 'Vastly expanded human mobility on other worlds and collected ancient samples revealing the Moon\'s primordial volcanic history.',
    funFact: 'David Scott tested Galileo’s theory of equal acceleration in a vacuum on live television by dropping a 0.03 kg falcon feather and 1.32 kg geological hammer: they struck the lunar soil at the exact same instant.'
  },
  {
    id: 'apollo-17',
    name: 'Apollo 17',
    year: 1972,
    dateStr: 'Dec 7–19, 1972',
    type: 'Crewed',
    category: 'Lunar Landing',
    status: 'Completed',
    agency: 'NASA',
    image: 'https://images-assets.nasa.gov/image/as17-134-20384/as17-134-20384~orig.jpg', // Gene Cernan with lunar rover
    shortDescription: 'The final Apollo mission to land humans on the Moon, including the first scientist-astronaut.',
    fullStory: 'Launched under the night sky on December 7, 1972, Apollo 17 concluded humanity\'s first era of lunar exploration. Eugene Cernan and geologist Harrison "Jack" Schmitt spent more than three days in the Taurus-Littrow valley. They traveled 35.7 km in their rover and collected 110.5 kg of lunar samples, including unique orange volcanic glass beads that proved past explosive lunar volcanism.',
    achievements: [
      'Longest total lunar surface stay (75 hours)',
      'Greatest distance traveled on the lunar surface by astronauts (35.7 km)',
      'Largest quantity of lunar samples returned (110.5 kg / 243.6 lb)',
      'Harrison Schmitt became the first professional scientist (geologist) to walk on the Moon'
    ],
    crew: [
      { name: 'Eugene A. Cernan', role: 'Commander' },
      { name: 'Harrison H. Schmitt', role: 'Lunar Module Pilot (Geologist)' },
      { name: 'Ronald E. Evans', role: 'Command Module Pilot' }
    ],
    duration: '12 days, 13 hours (22h 4m surface EVA)',
    spacecraft: 'Command Module America & Lunar Module Challenger',
    landingSite: 'Taurus-Littrow Valley',
    significance: 'Marked the conclusion of Apollo and established records that have stood for more than five decades.',
    funFact: 'Before re-entering the Lunar Module for the final time, Eugene Cernan traced his daughter Tracy’s initials ("TDC") into the lunar dust, where they remain untouched today.'
  },
  {
    id: 'artemis-1',
    name: 'Artemis I',
    year: 2022,
    dateStr: 'Nov 16–Dec 11, 2022',
    type: 'Uncrewed',
    category: 'Lunar Flyby',
    status: 'Completed',
    agency: 'NASA / ESA',
    image: 'https://images-assets.nasa.gov/image/art001e000672/art001e000672~orig.jpg', // Orion Earth and Moon
    shortDescription: 'Flawless maiden flight of the Space Launch System (SLS) and uncrewed Orion spacecraft.',
    fullStory: 'Artemis I was the inaugural integrated test flight of NASA\'s deep-space exploration system: the mega Space Launch System (SLS) rocket and Orion spacecraft. Launching from Pad 39B at Kennedy Space Center on November 16, 2022, Orion traveled 1.4 million miles, entering a distant retrograde orbit around the Moon and surpassing the Apollo 13 record for distance traveled by a human-rated spacecraft (reaching 268,563 miles from Earth).',
    achievements: [
      'Maiden launch of the SLS rocket, generating 8.8 million pounds of thrust',
      'Orion completed distant retrograde lunar orbit 40,000 miles above the Moon',
      'Set new distance record for a human-rated spacecraft: 268,563 miles from Earth',
      'Successful skip re-entry test and splashdown in the Pacific Ocean'
    ],
    duration: '25 days, 10 hours',
    spacecraft: 'Space Launch System (SLS) Block 1 & Orion Spacecraft',
    significance: 'Demonstrated Orion’s thermal protection shield, navigation, and deep-space life-support reliability under actual lunar flight conditions.',
    funFact: 'Orion carried three sensor-laden mannequins nicknamed Commander Moonikin Campos, Helga, and Zohar to measure vibration and radiation levels for future human crews.'
  },
  {
    id: 'artemis-2',
    name: 'Artemis II',
    year: 2025,
    dateStr: 'Targeted: April 2026 (Verified NASA status)',
    type: 'Crewed',
    category: 'Lunar Flyby',
    status: 'Planned',
    agency: 'NASA / CSA',
    image: 'https://images-assets.nasa.gov/image/jsc2023e020272/jsc2023e020272~orig.jpg', // Artemis II Crew portrait
    shortDescription: 'First crewed mission of the Artemis program, sending four astronauts on a 10-day lunar flyby.',
    fullStory: 'Artemis II will be the first crewed test flight of NASA\'s Artemis campaign. Four astronauts will launch aboard the SLS rocket on a 10-day mission. Rather than entering lunar orbit, Orion will fly a lunar free-return trajectory that swings the crew approximately 4,600 miles past the far side of the Moon before natural orbital mechanics slingshot them back toward Earth.',
    achievements: [
      'First humans to journey around the Moon in over 50 years',
      'First woman, first person of colour, and first non-American (Canadian) to fly beyond low Earth orbit',
      'Comprehensive in-flight checkout of Orion life-support systems with human occupants',
      'High-bandwidth optical communications and live 4K deep-space broadcasting'
    ],
    crew: [
      { name: 'Reid Wiseman', role: 'Commander (NASA)' },
      { name: 'Victor Glover', role: 'Pilot (NASA)' },
      { name: 'Christina Hammock Koch', role: 'Mission Specialist 1 (NASA)' },
      { name: 'Jeremy Hansen', role: 'Mission Specialist 2 (CSA)' }
    ],
    duration: 'Approximately 10 days (Planned)',
    spacecraft: 'SLS Block 1 Crew & Orion Spacecraft',
    significance: 'Paves the way for the first human surface return on Artemis III and establishes international lunar partnership in practice.',
    funFact: 'Christina Koch already holds the record for the longest continuous spaceflight by a woman (328 days aboard the ISS).'
  },
  {
    id: 'artemis-3',
    name: 'Artemis III',
    year: 2026,
    dateStr: 'Targeted: Mid-2027 (Verified NASA status)',
    type: 'Crewed',
    category: 'Lunar Landing',
    status: 'Planned',
    agency: 'NASA / Commercial Partners',
    image: 'https://images-assets.nasa.gov/image/art001e000494/art001e000494~orig.jpg', // Lunar horizon Orion
    shortDescription: 'Humanity’s historic return to the lunar surface, landing near the resource-rich Lunar South Pole.',
    fullStory: 'Artemis III will mark humanity\'s return to the surface of the Moon for the first time since 1972. Orion will launch four astronauts into lunar orbit and rendezvous with SpaceX\'s Starship Human Landing System (HLS). Two astronauts will transfer into Starship HLS to land near the Moon\'s South Pole—a rugged, permanently shadowed region containing massive reserves of water ice essential for sustained future exploration.',
    achievements: [
      'First humans to walk on the lunar South Pole',
      'First woman and next person to set foot on the lunar surface',
      'Exploration of permanently shadowed lunar craters and cold traps',
      'First human extraction and sample collection of volatile lunar water ice'
    ],
    duration: 'Approximately 30 days total (~6.5 days on lunar surface)',
    spacecraft: 'Orion Spacecraft & SpaceX Starship HLS',
    landingSite: 'Lunar South Pole Candidate Regions (e.g., Shackleton crater rim, Malapert Mountain)',
    significance: 'Opens the era of permanent, sustainable deep-space human presence and establishes the foundation for eventual human missions to Mars.',
    funFact: 'Temperatures inside the permanently shadowed craters of the lunar south pole can drop to -246°C (-410°F), making them among the coldest places in the entire solar system!'
  }
];
