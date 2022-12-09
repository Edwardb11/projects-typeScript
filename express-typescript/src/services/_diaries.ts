import { DiaryEntry, Visibility, Weather } from "../types";
const diaryData: DiaryEntry[] = [
  {
    id: 1,
    date: "2022-01-01",
    wather: Weather.Rainy,
    visibiliity: Visibility.Poor,
    comment: "Pretty scary flight, I'm glad I'm  alive",
  },
  {
    id: 2,
    date: "2022-01-10",
    wather: Weather.Sunny,
    visibiliity: Visibility.Ok,
    comment: "Everything went better that expected, I'm learning much",
  },
  {
    id: 3,
    date: "2022-01-15",
    wather: Weather.Windy,
    visibiliity: Visibility.Good,
    comment: "I'm gretting confident although I hit a flock of birds",
  },
  {
    id: 4,
    date: "2022-01-11",
    wather: Weather.Cloudy,
    visibiliity: Visibility.Poor,
    comment: "I almost failed the landing but i survived",
  },
];

export default diaryData;
