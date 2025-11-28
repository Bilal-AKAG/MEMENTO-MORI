import { ActivityStats, CountryLifeExpectancy, LifeData } from "../types";

// A simplified dataset of life expectancy (Years)
export const COUNTRY_DATA: CountryLifeExpectancy[] = [
  { name: "Global Average", code: "GLO", expectancy: 73.2 },
  { name: "Japan", code: "JPN", expectancy: 84.6 },
  { name: "Switzerland", code: "CHE", expectancy: 83.8 },
  { name: "Singapore", code: "SGP", expectancy: 83.6 },
  { name: "Australia", code: "AUS", expectancy: 83.4 },
  { name: "Spain", code: "ESP", expectancy: 83.6 },
  { name: "Italy", code: "ITA", expectancy: 83.5 },
  { name: "Israel", code: "ISR", expectancy: 83.0 },
  { name: "France", code: "FRA", expectancy: 82.7 },
  { name: "Canada", code: "CAN", expectancy: 82.4 },
  { name: "United Kingdom", code: "GBR", expectancy: 81.2 },
  { name: "United States", code: "USA", expectancy: 77.5 },
  { name: "Germany", code: "DEU", expectancy: 81.3 },
  { name: "China", code: "CHN", expectancy: 77.1 },
  { name: "Brazil", code: "BRA", expectancy: 75.9 },
  { name: "India", code: "IND", expectancy: 69.7 },
  { name: "Nigeria", code: "NGA", expectancy: 54.7 },
];

// Weekly hours distribution (Estimates)
export const WEEKLY_HOURS = {
  TOTAL: 168,
  SLEEP: 56, // 8h * 7
  WORK: 40, // Standard work week
  EATING: 10, // ~1.5h * 7
  BATHROOM: 2, // ~15-20min * 7
  GROOMING: 5, // Showers, prep
  COMMUTE: 8, // ~1h+ * 5
  CHORES: 10, // Cleaning, cooking, errands
  // LEISURE is the remainder
};

export const calculateLifeData = (
  birthDate: Date,
  expectancyYears: number,
): LifeData => {
  const now = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;
  const msPerWeek = msPerDay * 7;

  const diffTime = Math.abs(now.getTime() - birthDate.getTime());
  const weeksLived = Math.floor(diffTime / msPerWeek);
  const daysLived = Math.floor(diffTime / msPerDay);
  const yearsLived = Number((daysLived / 365.25).toFixed(2));

  const totalWeeks = Math.floor(expectancyYears * 52.1775);
  const weeksRemaining = Math.max(0, totalWeeks - weeksLived);
  const percentageLived = Math.min(100, (weeksLived / totalWeeks) * 100);

  return {
    weeksLived,
    weeksTotal: totalWeeks,
    weeksRemaining,
    percentageLived,
    yearsLived,
    daysLived,
  };
};

export const calculateActivityStats = (lifeData: LifeData): ActivityStats => {
  // We project these hours over the TOTAL lifespan to show the weight of existence
  const totalWeeks = lifeData.weeksTotal;

  const calculateTotalHours = (weeklyHours: number) => weeklyHours * totalWeeks;

  // Note: Work is usually only for ~45 years (approx 2340 weeks), not whole life
  // Adjusting work calculation to be more realistic (ages 20-65)
  const workWeeks = 45 * 52;

  return {
    sleep: calculateTotalHours(WEEKLY_HOURS.SLEEP),
    work: WEEKLY_HOURS.WORK * workWeeks, // Only during working years
    eating: calculateTotalHours(WEEKLY_HOURS.EATING),
    bathroom: calculateTotalHours(WEEKLY_HOURS.BATHROOM),
    grooming: calculateTotalHours(WEEKLY_HOURS.GROOMING),
    commute: calculateTotalHours(WEEKLY_HOURS.COMMUTE), // Assuming commute scales with work usually, but often continues for other reasons
    chores: calculateTotalHours(WEEKLY_HOURS.CHORES),
    leisure:
      WEEKLY_HOURS.TOTAL * totalWeeks -
      (calculateTotalHours(WEEKLY_HOURS.SLEEP) +
        WEEKLY_HOURS.WORK * workWeeks +
        calculateTotalHours(WEEKLY_HOURS.EATING) +
        calculateTotalHours(WEEKLY_HOURS.BATHROOM) +
        calculateTotalHours(WEEKLY_HOURS.GROOMING) +
        calculateTotalHours(WEEKLY_HOURS.COMMUTE) +
        calculateTotalHours(WEEKLY_HOURS.CHORES)),
  };
};

export const guessCountryFromTimezone = (): CountryLifeExpectancy => {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (tz.includes("Tokyo")) return COUNTRY_DATA.find((c) => c.code === "JPN")!;
  if (
    tz.includes("New_York") ||
    tz.includes("Los_Angeles") ||
    tz.includes("Chicago")
  )
    return COUNTRY_DATA.find((c) => c.code === "USA")!;
  if (tz.includes("London")) return COUNTRY_DATA.find((c) => c.code === "GBR")!;
  if (tz.includes("Berlin")) return COUNTRY_DATA.find((c) => c.code === "DEU")!;
  if (tz.includes("Paris")) return COUNTRY_DATA.find((c) => c.code === "FRA")!;
  if (tz.includes("Sydney")) return COUNTRY_DATA.find((c) => c.code === "AUS")!;
  if (tz.includes("Shanghai"))
    return COUNTRY_DATA.find((c) => c.code === "CHN")!;

  // Default fallback
  return COUNTRY_DATA.find((c) => c.code === "USA") || COUNTRY_DATA[0];
};
