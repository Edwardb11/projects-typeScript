export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
export type Visibility = "great" | "good" | "ok" | "poor";

export interface DiaryEntry {
  id: number;
  date: string;
  wather: Weather;
  visibiliity: Visibility;
  comment: string;
}

// Filtrar datos en una interface haciendo un typo
// export type NonSensitiveInfoDiaryEntry = Pick<
//   DiaryEntry,
//   "id" | "date" | "wather" | "visibiliity"
// >;

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">;

// interface SpecialDiaryEntry extends DiaryEntry {
//     flightNumber:number
// }

// type SpecialDiaryEntry2 = DiaryEntry &{
//     flightNumber:number

// }
