export interface MoonFact {
  id: string;
  title: string;
  headline: string;
  shortExplanation: string;
  detailedExplanation: string;
  earthComparison: string;
  kidFriendlyQuote: string;
  iconName: string; // lucide icon identifier
  tag: 'Astronomy' | 'Geology' | 'Physics' | 'Orbit & Gravity';
  stat: string;
  statLabel: string;
}

export const MOON_FACTS: MoonFact[] = [
  {
    id: 'distance',
    title: 'Distance to Earth',
    headline: '384,400 Kilometres on Average',
    shortExplanation: 'The Moon orbits Earth in an elliptical path, averaging about 384,400 km (238,855 miles). That is roughly 30 Earth diameters away.',
    detailedExplanation: 'Because the orbit is an ellipse rather than a perfect circle, the Moon ranges from 363,300 km at its closest (perigee) to 405,500 km at its farthest (apogee). When a full Moon coincides with perigee, we experience a "Supermoon", appearing up to 14% larger and 30% brighter in the night sky.',
    earthComparison: 'You could fit all seven other planets in our solar system edge-to-edge between Earth and the Moon with room left over!',
    kidFriendlyQuote: 'If you drove a car at highway speed (100 km/h) nonstop to the Moon, it would take you about 160 days!',
    iconName: 'Ruler',
    tag: 'Astronomy',
    stat: '384,400 km',
    statLabel: 'Mean Orbital Distance'
  },
  {
    id: 'moonlight',
    title: 'Moonlight Source',
    headline: 'Moonlight is Reflected Sunlight',
    shortExplanation: 'The Moon produces no light of its own. It acts like a giant, imperfect mirror reflecting radiant energy from the Sun.',
    detailedExplanation: 'The lunar surface is actually quite dark, with an average albedo (reflectivity) of only about 0.12 (12%). This means the lunar surface reflects only about as much light as worn asphalt on Earth! It appears brilliant in our night sky solely because of the intense brightness of the Sun against the pitch-black backdrop of outer space.',
    earthComparison: 'Earth has an albedo of about 0.30 due to bright clouds and polar ice caps, making Earth look 3 to 4 times brighter from space than the Moon does.',
    kidFriendlyQuote: 'The Moon doesn’t have a lightbulb inside—it’s playing catch with sunlight and bouncing it right into your eyes!',
    iconName: 'Sun',
    tag: 'Physics',
    stat: '12%',
    statLabel: 'Lunar Surface Reflectivity (Albedo)'
  },
  {
    id: 'synchronous-rotation',
    title: 'Tidal Locking',
    headline: 'We Always See the Same Face',
    shortExplanation: 'The Moon rotates on its axis at the exact same rate that it orbits Earth (27.3 days), keeping the same side turned toward us.',
    detailedExplanation: 'This phenomenon is called synchronous rotation or tidal locking. Over billions of years, Earth\'s gravitational pull exerted tidal friction on the Moon\'s crust and interior, gradually slowing its rotation until its rotational period precisely matched its orbital period around Earth. The "dark side of the Moon" is a misnomer—it receives just as much sunlight as the near side, but humans never saw it until Luna 3 sent back photos in 1959.',
    earthComparison: 'Earth rotates every 24 hours while orbiting the Sun once every 365 days. If Earth were tidally locked to the Sun, one hemisphere would suffer perpetual boiling day while the other froze in eternal night.',
    kidFriendlyQuote: 'Imagine spinning around while holding hands with a friend. You are always facing each other—that is how the Moon dances with Earth!',
    iconName: 'RotateCw',
    tag: 'Orbit & Gravity',
    stat: '27.3 Days',
    statLabel: 'Orbital & Rotational Period'
  },
  {
    id: 'gravity',
    title: 'Lunar Gravity',
    headline: 'One-Sixth of Earth’s Gravity',
    shortExplanation: 'The Moon’s surface gravity is only about 16.6% (1/6th) as strong as Earth’s due to its smaller mass and radius.',
    detailedExplanation: 'The acceleration due to gravity on the Moon is roughly 1.62 m/s² compared to Earth’s 9.81 m/s². This enabled Apollo astronauts in bulky 80 kg (180 lb) spacesuits to leap effortlessly in graceful "bunny hops" across the regolith. However, low gravity also reduced surface traction, making quick stops and changes in direction challenging.',
    earthComparison: 'A person weighing 60 kg (132 lbs) on Earth weighs barely 10 kg (22 lbs) on the Moon!',
    kidFriendlyQuote: 'If you can jump 1 foot high on Earth, you could easily jump 6 feet high on the Moon—high enough to clear an adult\'s head!',
    iconName: 'Sparkles',
    tag: 'Physics',
    stat: '1.62 m/s²',
    statLabel: 'Surface Gravity (~1/6 of Earth)'
  },
  {
    id: 'extreme-temperatures',
    title: 'Extreme Temperatures',
    headline: 'From +120°C to -130°C and Below',
    shortExplanation: 'Without an insulating atmosphere, the Moon swings wildly between blazing heat in daytime and freezing cold at night.',
    detailedExplanation: 'During the two-week lunar daytime, surface rocks in direct sunlight reach blistering temperatures of +120°C (250°F)—hot enough to boil water instantly. During the equally long lunar night, temperatures plummet to -130°C (-200°F). In permanently shadowed polar craters, temperatures drop to an astonishing -246°C (-410°F), colder than Pluto!',
    earthComparison: 'Earth’s thick atmosphere and oceans act as a thermal buffer, keeping most global temperatures within a comfortable 50°C band.',
    kidFriendlyQuote: 'On the Moon, you would boil like soup in the sun and freeze like an ice pop in the shade—which is why spacesuits are super high-tech thermos bottles!',
    iconName: 'ThermometerSnowflake',
    tag: 'Astronomy',
    stat: '+120°C / -246°C',
    statLabel: 'Day / Deep Cold Polar Range'
  },
  {
    id: 'moonquakes',
    title: 'Seismic Activity',
    headline: 'The Moon Shakes with Moonquakes',
    shortExplanation: 'The Moon is not a completely dead rock—it experiences seismic tremors known as moonquakes.',
    detailedExplanation: 'Apollo astronauts placed seismometers that operated between 1969 and 1977, recording thousands of tremors. Deep moonquakes are caused by tidal stress from Earth’s gravitational tugging; thermal quakes are caused by the expansion of the crust when illuminated by sunlight; and shallow moonquakes can register up to magnitude 5.5 and reverberate like a tuning fork for over 10 minutes because the dry, rigid rock has no water to dampen vibrations.',
    earthComparison: 'Earthquakes usually finish in under a minute because moisture and fractured rocks absorb seismic energy quickly. A moonquake can ring for 10 to 30 minutes!',
    kidFriendlyQuote: 'When the Moon shakes, it rings like a gigantic crystal bell for minutes on end!',
    iconName: 'Activity',
    tag: 'Geology',
    stat: 'Up to M5.5',
    statLabel: 'Shallow Moonquake Magnitude'
  },
  {
    id: 'craters',
    title: 'Impact Craters',
    headline: 'Billions of Years Preserved in Dust',
    shortExplanation: 'The Moon’s surface is scarred by millions of craters that never erode because there is no wind, rain, or active plate tectonics.',
    detailedExplanation: 'Most lunar craters formed billions of years ago during the Late Heavy Bombardment, when leftover debris from solar system formation hammered the planets. Because the Moon has no atmosphere for weather and no active volcanic resurfacing today, impact structures—from tiny micrometeorite pits to the giant 2,500 km South Pole-Aitken basin—remain preserved exactly as they formed.',
    earthComparison: 'Earth suffered just as many impacts, but wind, rain, oceans, plants, and shifting tectonic plates erased virtually all of them over geological time.',
    kidFriendlyQuote: 'Footprints left by Apollo astronauts will still be sitting in the lunar dust hundreds of thousands of years from today!',
    iconName: 'Disc',
    tag: 'Geology',
    stat: '2,500 km',
    statLabel: 'South Pole-Aitken Basin Width'
  },
  {
    id: 'drifting-away',
    title: 'Receding Moon',
    headline: 'The Moon is Drifting Away from Earth',
    shortExplanation: 'The Moon is slowly spiraling outward into a higher orbit at a rate of approximately 3.8 centimetres (1.5 inches) per year.',
    detailedExplanation: 'This gradual migration is driven by tidal friction. Earth’s ocean tidal bulge, rotating slightly ahead of the Moon, pulls gravitational momentum forward onto the Moon, accelerating it into a wider orbit. As energy is transferred, Earth’s rotation is also slowing down by roughly 2 milliseconds every 100 years.',
    earthComparison: 'Billions of years ago, the Moon was much closer to Earth, looking gigantic in the sky and causing tidal waves hundreds of meters high!',
    kidFriendlyQuote: 'The Moon is slowly sneaking away from Earth at about the same speed that your fingernails grow each year!',
    iconName: 'MoveUpRight',
    tag: 'Orbit & Gravity',
    stat: '3.8 cm/yr',
    statLabel: 'Annual Orbital Drift'
  }
];
