export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
export type Visibility = "great" | "good" | "ok" | "poor";

export interface DiaryEntry {
  id: number;
  date: string;
  wather: Weather;
  visibiliity: Visibility;
  comment: string;
}

interface SpecialDiaryEntry extends DiaryEntry {
    flightNumber:number
}

// type SpecialDiaryEntry2 = DiaryEntry &{
//     flightNumber:number

// }