import { faker } from "@faker-js/faker";

export function generateCandidates(count = 40) {
  return Array.from({ length: count }, () => ({
    name: faker.person.fullName(),
    experience_years: faker.number.int({ min: 2, max: 15 }),
    skills: {
      leadership: faker.number.int({ min: 1, max: 10 }),
      safety_management: faker.number.int({ min: 1, max: 10 }),
      recycling_knowledge: faker.number.int({ min: 1, max: 10 })
    }
  }));
}
