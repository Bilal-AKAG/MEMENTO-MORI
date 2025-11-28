export interface LifeData {
  weeksLived: number;
  weeksTotal: number;
  weeksRemaining: number;
  percentageLived: number;
  yearsLived: number;
  daysLived: number;
}

export interface ActivityStats {
  sleep: number;
  work: number;
  eating: number;
  bathroom: number;
  grooming: number;
  commute: number;
  chores: number;
  leisure: number;
}

export interface CountryLifeExpectancy {
  name: string;
  code: string;
  expectancy: number; // in years
}

export enum ActivityType {
  SLEEP = "Sleep",
  WORK = "Work",
  EATING = "Eating",
  BATHROOM = "Bathroom",
  GROOMING = "Hygiene",
  COMMUTE = "Commute",
  CHORES = "Chores",
  LEISURE = "Quality Time",
}
