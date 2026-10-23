export interface TimelineMilestone {
  id: string;
  year: number;
  date: string;
  title: string;
  decade: '1950s' | '1960s' | '1970s' | '1990s' | '2000s-2010s' | '2020s';
  category: 'Moon Mission' | 'Space Milestone';
  image: string;
  story: string;
  keyFacts: string[];
  vehicle: string;
  countryOrOrg: string;
}

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    id: 'luna-2',
    year: 1959,
    date: 'September 13, 1959',
    title: 'Luna 2 Reaches the Moon',
    decade: '1950s',
    category: 'Moon Mission',
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80',
    story: 'The Soviet spacecraft Luna 2 became the first human-made object to make direct contact with another celestial body. Traveling across 384,000 kilometers of cislunar space, it successfully impacted the Moon in the Palus Putredinis region east of Mare Imbrium.',
    keyFacts: [
      'First artificial object to reach the Moon',
      'Confirmed the Moon has no detectable global magnetic field',
      'Carried Soviet pennants and commemorative spheres to the lunar surface',
      'Prompted global awe and kicked the Cold War Space Race into high gear'
    ],
    vehicle: 'Luna 8K72 rocket & Luna 2 probe',
    countryOrOrg: 'Soviet Union (USSR)'
  },
  {
    id: 'gagarin-space',
    year: 1961,
    date: 'April 12, 1961',
    title: 'Yuri Gagarin — First Human in Space',
    decade: '1960s',
    category: 'Space Milestone',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    story: 'Cosmonaut Yuri Gagarin launched aboard Vostok 1 from Baikonur Cosmodrome, completing a single orbit around Earth in 108 minutes. His flight proved that human beings could survive the violent forces of launch, weightlessness, and re-entry.',
    keyFacts: [
      'First human spaceflight in history',
      'Completed one full orbit around Earth at an altitude of 327 km',
      'Gagarin’s famous exclamation at launch: "Poyekhali!" ("Let\'s go!")',
      'Galvanized President John F. Kennedy to announce the Apollo Moon landing goal weeks later'
    ],
    vehicle: 'Vostok-K rocket & Vostok 3KA capsule',
    countryOrOrg: 'Soviet Union (USSR)'
  },
  {
    id: 'apollo-8-milestone',
    year: 1968,
    date: 'December 24, 1968',
    title: 'Apollo 8 Orbits the Moon',
    decade: '1960s',
    category: 'Moon Mission',
    image: 'https://images-assets.nasa.gov/image/as08-14-2383/as08-14-2383~orig.jpg',
    story: 'Frank Borman, Jim Lovell, and Bill Anders became the first human beings to escape Earth’s gravity, travel to the Moon, and enter lunar orbit. They witnessed the majestic sight of Earth rising above the barren lunar landscape, capturing the photo that sparked the modern environmental movement.',
    keyFacts: [
      'First crewed mission to circle another celestial body',
      'Spent 20 hours orbiting the Moon across 10 complete orbits',
      'Broadcast live Christmas Eve reading of Genesis to an estimated 1 billion viewers',
      'William Anders captured the immortal "Earthrise" photograph'
    ],
    vehicle: 'Saturn V (SA-503) & Apollo CSM',
    countryOrOrg: 'NASA (United States)'
  },
  {
    id: 'apollo-11-milestone',
    year: 1969,
    date: 'July 20, 1969',
    title: 'Apollo 11 Lands Humans on the Moon',
    decade: '1960s',
    category: 'Moon Mission',
    image: 'https://images-assets.nasa.gov/image/as11-40-5903/as11-40-5903~orig.jpg',
    story: 'Neil Armstrong and Buzz Aldrin guided the Lunar Module Eagle to a historic landing at Tranquility Base. An estimated 650 million people watched via grainy television as Armstrong set foot on the dust, speaking immortal words for humanity.',
    keyFacts: [
      'First human landing on another celestial world',
      'Collected 21.5 kg of lunar soil and rock samples',
      'Left an iconic stainless steel plaque: "We came in peace for all mankind"',
      'Returned safely after 8 days, splashing down in the Pacific Ocean'
    ],
    vehicle: 'Saturn V & Apollo LM "Eagle"',
    countryOrOrg: 'NASA (United States)'
  },
  {
    id: 'apollo-17-milestone',
    year: 1972,
    date: 'December 11–14, 1972',
    title: 'Apollo 17: Final Apollo Lunar Landing',
    decade: '1970s',
    category: 'Moon Mission',
    image: 'https://images-assets.nasa.gov/image/as17-134-20384/as17-134-20384~orig.jpg',
    story: 'Commander Gene Cernan and geologist Harrison "Jack" Schmitt spent over 3 days exploring Taurus-Littrow. Schmitt discovered orange volcanic glass, unlocking insights into ancient lunar volcanic explosions. Cernan left the last human footprints of the 20th century.',
    keyFacts: [
      'Longest crewed stay on the Moon (75 hours)',
      'Traversed 35.7 km using the Lunar Roving Vehicle',
      'Collected 110.5 kg of precious samples',
      'Remains the most recent time human boots walked on the Moon'
    ],
    vehicle: 'Saturn V & Apollo LM "Challenger"',
    countryOrOrg: 'NASA (United States)'
  },
  {
    id: 'clementine-prospector',
    year: 1994,
    date: '1994 & 1998',
    title: 'Renewed Robotic Exploration: Water Hints',
    decade: '1990s',
    category: 'Moon Mission',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
    story: 'After two dormant decades, NASA and the Department of Defense sent the Clementine and Lunar Prospector spacecraft. Using bistatic radar and neutron spectrometers, they detected strong signatures of water ice in permanently shadowed polar craters.',
    keyFacts: [
      'Mapped the entire lunar surface in 11 multispectral wavelengths',
      'Discovered compelling indications of water ice at lunar poles',
      'Ended a 22-year drought of American lunar missions',
      'Revolutionized scientific views of the Moon as a resource-rich destination'
    ],
    vehicle: 'Titan IIG & Athena II rockets',
    countryOrOrg: 'NASA / US DoD'
  },
  {
    id: 'international-era',
    year: 2008,
    date: '2007–2019',
    title: 'International Lunar Renaissance',
    decade: '2000s-2010s',
    category: 'Moon Mission',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    story: 'New spacefaring nations journeyed to the Moon. Japan (Kaguya), China (Chang\'e missions), India (Chandrayaan-1), and NASA (LRO & LCROSS) unlocked definitive proof of lunar surface water molecules and landed rovers on the far side of the Moon.',
    keyFacts: [
      'Chandrayaan-1 (India) confirmed Moon water molecules in 2008',
      'NASA\'s LCROSS impacted a crater and kicked up direct water vapor ice plumes in 2009',
      'China\'s Chang\'e 4 made the first-ever soft landing on the lunar far side in 2019',
      'NASA\'s Lunar Reconnaissance Orbiter (LRO) created ultra-high-resolution 3D topographic maps'
    ],
    vehicle: 'PSLV, Long March 3B, Atlas V',
    countryOrOrg: 'ISRO, CNSA, JAXA, NASA'
  },
  {
    id: 'artemis-future',
    year: 2024,
    date: '2022–2027+',
    title: 'Artemis Era & Commercial Lunar Landers',
    decade: '2020s',
    category: 'Moon Mission',
    image: 'https://images-assets.nasa.gov/image/art001e000672/art001e000672~orig.jpg',
    story: 'Humanity enters an unprecedented chapter: returning to the Moon sustainably with commercial landers (CLPS), international partnerships, the Gateway space station, and the Artemis human landing missions targeting the South Pole.',
    keyFacts: [
      'Artemis I launched the monster SLS rocket and flew Orion 268,563 miles from Earth',
      'Intuitive Machines Odysseus completed the first private commercial lunar soft landing in 2024',
      'Artemis II planned for 2026 to send 4 astronauts on a deep-space lunar flyby',
      'Artemis III targeting human surface return at the Lunar South Pole with SpaceX Starship HLS'
    ],
    vehicle: 'NASA SLS, Orion, SpaceX Starship, Blue Moon',
    countryOrOrg: 'NASA & Global Artemis Accords Partners'
  }
];
