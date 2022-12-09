import { DiaryEntry, NonSensitiveInfoDiaryEntry } from "../types";
// import diaryData from "./_diaries";
import diaryData from "./diaries.json";

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  return entry;
};

export const getEntriesWithoutSenstitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, visibiliity, wather }) => {
      return {
        id,
        date,
        wather,
        visibiliity,
      };
    });
  };

export const addEntry = (): undefined => undefined;
