export interface QuizQuestion {
  id: number;
  question: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  options: string[];
  correctIndex: number;
  explanation: string;
  didYouKnow: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Who was the first human being to step onto the surface of the Moon?",
    difficulty: "Beginner",
    options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
    correctIndex: 1,
    explanation: "Neil Armstrong became the first human to step onto the lunar surface on July 20, 1969, uttering the famous words: 'That's one small step for [a] man, one giant leap for mankind.'",
    didYouKnow: "Buzz Aldrin followed Neil onto the Moon roughly 19 minutes later, describing the desolate scene as 'magnificent desolation'."
  },
  {
    id: 2,
    question: "Approximately how much of Earth's surface gravity does the Moon have?",
    difficulty: "Beginner",
    options: ["About one-half (1/2)", "About one-tenth (1/10)", "About one-sixth (1/6)", "Exactly the same as Earth"],
    correctIndex: 2,
    explanation: "The Moon has approximately one-sixth (~16.6%) of Earth's gravity because it has much less mass and a smaller radius.",
    didYouKnow: "If you weigh 60 kilograms on Earth, you would weigh only about 10 kilograms on the Moon!"
  },
  {
    id: 3,
    question: "Why do we always see the same face of the Moon from Earth?",
    difficulty: "Beginner",
    options: [
      "The Moon does not rotate on its axis at all",
      "The Moon's rotation period matches its orbital period around Earth (tidal locking)",
      "Earth's magnetic field freezes the Moon in place",
      "Clouds on Earth block the far side"
    ],
    correctIndex: 1,
    explanation: "Because of tidal locking (synchronous rotation), the Moon takes approximately 27.3 days both to rotate once on its axis and to orbit Earth once.",
    didYouKnow: "Humans never saw the far side of the Moon until the Soviet Luna 3 probe sent back the first photographs in October 1959."
  },
  {
    id: 4,
    question: "Which Apollo mission was called NASA's 'successful failure' after an oxygen tank exploded en route to the Moon?",
    difficulty: "Intermediate",
    options: ["Apollo 11", "Apollo 13", "Apollo 8", "Apollo 1"],
    correctIndex: 1,
    explanation: "Apollo 13 suffered an oxygen tank explosion in its Service Module on April 13, 1970. The crew used the Lunar Module 'Aquarius' as a lifeboat and safely returned to Earth.",
    didYouKnow: "The famous quote in reality was 'Houston, we've had a problem here', spoken first by Jack Swigert and then repeated by Jim Lovell."
  },
  {
    id: 5,
    question: "On which mission was the first electric Lunar Roving Vehicle ('Moon Buggy') driven across the Moon?",
    difficulty: "Intermediate",
    options: ["Apollo 11", "Apollo 12", "Apollo 14", "Apollo 15"],
    correctIndex: 3,
    explanation: "Apollo 15 in 1971 debuted the Lunar Roving Vehicle (LRV), allowing astronauts David Scott and James Irwin to explore 27.9 kilometers around Hadley Rille.",
    didYouKnow: "The lunar rover had four electric motors—one inside the hub of each wheel—giving it all-wheel drive on loose regolith."
  },
  {
    id: 6,
    question: "Who was the only trained scientist (a geologist) to walk on the Moon during the Apollo program?",
    difficulty: "Intermediate",
    options: ["Harrison 'Jack' Schmitt", "Eugene Cernan", "Alan Shepard", "Pete Conrad"],
    correctIndex: 0,
    explanation: "Dr. Harrison Schmitt was a professional geologist who walked on the Moon on Apollo 17 in December 1972, discovering unique orange volcanic glass beads.",
    didYouKnow: "Schmitt helped train the earlier Apollo fighter-pilot astronauts in field geology before being selected to fly on the final Apollo landing mission."
  },
  {
    id: 7,
    question: "What is the primary target region on the Moon for NASA's Artemis III crewed landing?",
    difficulty: "Intermediate",
    options: ["Sea of Tranquility", "Ocean of Storms", "Lunar South Pole", "Tycho Crater Rim"],
    correctIndex: 2,
    explanation: "Artemis III targets the Lunar South Pole because its permanently shadowed craters contain large deposits of water ice crucial for rocket fuel and life support.",
    didYouKnow: "Permanently shadowed craters at the lunar poles can reach temperatures as low as -246°C (-410°F), making them some of the coldest places in the entire solar system!"
  },
  {
    id: 8,
    question: "What famous experiment did Commander David Scott conduct on the Moon during Apollo 15 to test Galileo's theory of gravity?",
    difficulty: "Advanced",
    options: [
      "He swung a pendulum to measure Earth's orbital perturbation",
      "He dropped a falcon feather and a geology hammer simultaneously in a vacuum",
      "He launched a ball with a miniature cannon to measure escape velocity",
      "He burned magnesium to test whether flames can exist in vacuum"
    ],
    correctIndex: 1,
    explanation: "David Scott dropped a 0.03 kg falcon feather and a 1.32 kg hammer at the same time. In the vacuum of the Moon with no air resistance, both hit the ground at the exact same instant.",
    didYouKnow: "Scott remarked on live TV: 'How about that? This proves that Mr. Galileo was correct in his findings!'"
  },
  {
    id: 9,
    question: "At approximately what rate is the Moon currently spiraling away from Earth due to tidal friction?",
    difficulty: "Advanced",
    options: ["About 3.8 millimetres per year", "About 3.8 centimetres per year", "About 3.8 metres per year", "The Moon is actually moving closer to Earth"],
    correctIndex: 1,
    explanation: "Laser retroreflectors placed on the Moon by Apollo astronauts allow scientists to measure the Moon's distance to millimeter precision, confirming it recedes by ~3.8 cm (1.5 in) per year.",
    didYouKnow: "Because energy is transferred to push the Moon into a higher orbit, Earth's daily rotation is also slowing down by about 2 milliseconds per century."
  },
  {
    id: 10,
    question: "What was the name of the uncrewed flight test in 2022 that sent the Orion capsule 268,563 miles from Earth?",
    difficulty: "Beginner",
    options: ["Apollo 18", "Artemis I", "Constellation X", "Lunar Gateway 1"],
    correctIndex: 1,
    explanation: "Artemis I was the maiden flight of NASA's Space Launch System (SLS) rocket and Orion capsule in late 2022, breaking Apollo 13's record for the farthest distance traveled by a human-rated spacecraft.",
    didYouKnow: "Orion flew for 25.5 days and successfully endured a scorching 2,800°C (5,000°F) atmospheric re-entry before splashing down safely in the Pacific Ocean."
  },
  {
    id: 11,
    question: "What causes shallow 'moonquakes' that can last up to 10 to 30 minutes on the Moon?",
    difficulty: "Advanced",
    options: [
      "Volcanoes erupting liquid lava under the surface",
      "The dry, rigid structure of lunar rock with no water to dampen seismic waves",
      "Constant collision with active tectonic plates",
      "Atmospheric storms shaking the regolith"
    ],
    correctIndex: 1,
    explanation: "Unlike Earth, where moisture and weathered rock dampen seismic energy within minutes, the Moon is extremely dry and rigid, vibrating like a tuning fork when struck by tidal stresses or meteorites.",
    didYouKnow: "Apollo seismometers recorded shallow moonquakes reaching magnitude 5.5 that vibrated continuously for over 10 minutes!"
  },
  {
    id: 12,
    question: "Which country made history in 2019 by landing the Chang'e 4 spacecraft on the far side of the Moon for the first time?",
    difficulty: "Intermediate",
    options: ["United States", "China", "India", "Russia"],
    correctIndex: 1,
    explanation: "China's Chang'e 4 mission made history in January 2019 with the first-ever robotic soft landing on the lunar far side, using the Queqiao relay satellite in halo orbit to communicate with Earth.",
    didYouKnow: "Because direct radio signals from Earth cannot penetrate the Moon, a dedicated communications relay satellite placed at the Earth-Moon L2 Lagrange point was required."
  }
];
