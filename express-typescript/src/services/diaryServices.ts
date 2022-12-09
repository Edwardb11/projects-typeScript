import {
  DiaryEntry,
  NonSensitiveInfoDiaryEntry,
  Weather,
  Visibility,
} from "../types";
// import diaryData from "./_diaries";
import diaryData from "./diaries.json";

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = (): DiaryEntry[] => diaries;

// export const findById = (id: number): DiaryEntry | undefined => {
//   const entry = diaries.find((d) => d.id === id);
//   return entry;
// };

export const findById = (
  id: number
): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  if (entry != null) {
    const { comment, ...resOfDiary } = entry;
    return resOfDiary;
  }
  return undefined;
};

export const getEntriesWithoutSenstitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
      return {
        id,
        date,
        weather,
        visibility,
      };
    });
  };

export const addDiary = (
  date: string,
  weather: Weather,
  visibility: Visibility,
  comment: string
): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    date,
    weather,
    visibility,
    comment,
  };
  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};
