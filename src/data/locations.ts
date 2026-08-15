export const locationData = {
  California: { cities: ['Los Angeles', 'San Diego', 'San Francisco', 'Berkeley'], colleges: ['UCLA', 'USC', 'UC Berkeley', 'San Diego State'] },
  'New York': { cities: ['New York City', 'Brooklyn', 'Buffalo', 'Ithaca'], colleges: ['NYU', 'Columbia University', 'Cornell University', 'Fordham University'] },
  Texas: { cities: ['Austin', 'Dallas', 'Houston', 'San Antonio'], colleges: ['UT Austin', 'Rice University', 'Texas A&M', 'University of Houston'] },
  Florida: { cities: ['Miami', 'Orlando', 'Tampa', 'Gainesville'], colleges: ['University of Florida', 'Florida State', 'University of Miami', 'UCF'] },
} as const;
export type StateName = keyof typeof locationData;
export const states = Object.keys(locationData) as StateName[];
