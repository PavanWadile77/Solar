export type CelestialBody = {
  id: string;
  name: string;
  type: 'star' | 'planet';
  order: number;
  descriptor: string;
  introduction: string;
  facts: string[];
  color: string;
  gradient: string;
  size: number; // relative visual size for the explorer
  distance: number; // relative distance for the explorer
  orbitSpeed: number; // relative orbit speed
};

export const celestialBodies: CelestialBody[] = [
  {
    id: 'sun',
    name: 'Sun',
    type: 'star',
    order: 0,
    descriptor: 'The heart of our solar system',
    introduction: 'The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest particles of debris in its orbit.',
    facts: [
      'Accounts for 99.86% of the mass in the solar system.',
      'Surface temperature is about 5,500 degrees Celsius.',
      'Light from the Sun takes 8 minutes and 20 seconds to reach Earth.'
    ],
    color: '#FFD700',
    gradient: 'radial-gradient(circle at 30% 30%, #fff, #FFD700 40%, #ff8c00 80%, #8b0000)',
    size: 90,
    distance: 0,
    orbitSpeed: 0
  },
  {
    id: 'mercury',
    name: 'Mercury',
    type: 'planet',
    order: 1,
    descriptor: 'The swift planet',
    introduction: 'The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth\'s Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth.',
    facts: [
      'Has no moons or rings.',
      'A year on Mercury is just 88 Earth days.',
      'Temperatures fluctuate from 430°C during the day to -180°C at night.'
    ],
    color: '#B0C4DE',
    gradient: 'radial-gradient(circle at 30% 30%, #fff, #B0C4DE 50%, #708090)',
    size: 8,
    distance: 60,
    orbitSpeed: 4.1
  },
  {
    id: 'venus',
    name: 'Venus',
    type: 'planet',
    order: 2,
    descriptor: 'Earth\'s toxic twin',
    introduction: 'Venus is the second planet from the Sun and is Earth\'s closest planetary neighbor. It\'s one of the four inner, terrestrial planets, and its thick atmosphere traps heat in a runaway greenhouse effect.',
    facts: [
      'The hottest planet in our solar system.',
      'Spins backwards compared to most other planets.',
      'Has a surface pressure 90 times that of Earth.'
    ],
    color: '#DEB887',
    gradient: 'radial-gradient(circle at 30% 30%, #fff, #DEB887 50%, #8B4513)',
    size: 14,
    distance: 90,
    orbitSpeed: 1.6
  },
  {
    id: 'earth',
    name: 'Earth',
    type: 'planet',
    order: 3,
    descriptor: 'Our home planet',
    introduction: 'Our home planet is the third planet from the Sun, and the only place we know of so far that\'s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface.',
    facts: [
      'The only planet known to harbor life.',
      'Its atmosphere is 78% nitrogen and 21% oxygen.',
      'Has one moon and no rings.'
    ],
    color: '#4E55D8',
    gradient: 'radial-gradient(circle at 30% 30%, #fff, #4E55D8 40%, #000080)',
    size: 16,
    distance: 130,
    orbitSpeed: 1
  },
  {
    id: 'mars',
    name: 'Mars',
    type: 'planet',
    order: 4,
    descriptor: 'The red planet',
    introduction: 'Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.',
    facts: [
      'Home to Olympus Mons, the largest volcano in the solar system.',
      'Has two small moons, Phobos and Deimos.',
      'Often appears red due to iron oxide (rust) on its surface.'
    ],
    color: '#CD5C5C',
    gradient: 'radial-gradient(circle at 30% 30%, #ffc0cb, #CD5C5C 50%, #800000)',
    size: 9,
    distance: 170,
    orbitSpeed: 0.53
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    type: 'planet',
    order: 5,
    descriptor: 'The giant planet',
    introduction: 'Jupiter has a long history of surprising scientists. It is more than twice as massive as all the other planets combined. The giant planet\'s Great Red Spot is a centuries-old storm bigger than Earth.',
    facts: [
      'The largest planet in our solar system.',
      'Has a faint ring system and 95 recognized moons.',
      'Rotates completely in about 10 hours.'
    ],
    color: '#DAA520',
    gradient: 'linear-gradient(to bottom, #DAA520 0%, #D2691E 20%, #DAA520 40%, #F5DEB3 60%, #D2691E 80%, #DAA520 100%)',
    size: 56,
    distance: 250,
    orbitSpeed: 0.08
  },
  {
    id: 'saturn',
    name: 'Saturn',
    type: 'planet',
    order: 6,
    descriptor: 'The ringed jewel',
    introduction: 'Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular or as complicated as Saturn\'s.',
    facts: [
      'Has the most extensive ring system of any planet.',
      'Could float in water because it is mostly made of gas.',
      'Has 146 known moons.'
    ],
    color: '#F4A460',
    gradient: 'linear-gradient(to bottom, #F5DEB3 0%, #F4A460 30%, #D2B48C 70%, #F4A460 100%)',
    size: 46,
    distance: 330,
    orbitSpeed: 0.03
  },
  {
    id: 'uranus',
    name: 'Uranus',
    type: 'planet',
    order: 7,
    descriptor: 'The tilted planet',
    introduction: 'Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope and rotates on its side.',
    facts: [
      'Rotates at a nearly 90-degree angle from the plane of its orbit.',
      'An ice giant with a blue-green color from methane gas.',
      'Has 13 faint rings.'
    ],
    color: '#87CEEB',
    gradient: 'radial-gradient(circle at 30% 30%, #fff, #87CEEB 60%, #4682B4)',
    size: 24,
    distance: 400,
    orbitSpeed: 0.012
  },
  {
    id: 'neptune',
    name: 'Neptune',
    type: 'planet',
    order: 8,
    descriptor: 'The windy world',
    introduction: 'Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. More than 30 times as far from the Sun as Earth, Neptune is the only planet not visible to the naked eye.',
    facts: [
      'The first planet located through mathematical calculations.',
      'Has winds that can reach up to 1,200 miles per hour.',
      'Takes 165 Earth years to orbit the Sun once.'
    ],
    color: '#4169E1',
    gradient: 'radial-gradient(circle at 30% 30%, #fff, #4169E1 50%, #00008B)',
    size: 22,
    distance: 460,
    orbitSpeed: 0.006
  }
];
