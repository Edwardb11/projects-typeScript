// export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
// export type Visibility = "great" | "good" | "ok" | "poor";

import { Weather, Visibility } from "./enums";

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

// Filtrar datos en una interface haciendo un typo
// export type NonSensitiveInfoDiaryEntry = Pick<
//   DiaryEntry,
//   "id" | "date" | "wather" | "visibiliity"
// >;

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">;
export type NewDiaryEntry = Omit<DiaryEntry, "id">;

// interface SpecialDiaryEntry extends DiaryEntry {
//     flightNumber:number
// }

// type SpecialDiaryEntry2 = DiaryEntry &{
//     flightNumber:number

// }
