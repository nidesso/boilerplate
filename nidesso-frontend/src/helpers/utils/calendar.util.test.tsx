import { schedule } from '../../models/schedule/schedule';
import { generateSchedule } from './calendar.util';
import { mod } from './math.util';

const testSchedule: schedule = {
  duration: [
    { start: "0815", end: "0900" },
    { start: "0910", end: "0955" },
    { start: "1015", end: "1100" },
    { start: "1110", end: "1155" },
    { start: "1330", end: "1415" },
    { start: "1425", end: "1510" },
    { start: "1530", end: "1615" },
  ],
  lessons: [
    [
      { active: true, name: 'Fach' },
      { active: true, name: 'Fach' },
      { active: true, name: 'Fach' },
      { active: true, name: 'Fach' },
      { active: false, name: 'Fach' },
      { active: false, name: 'Fach' },
      { active: false, name: 'Fach' },
    ],
    [
      { active: false, name: 'Fach' },
      { active: true, name: 'Fach' },
      { active: false, name: 'Fach' },
      { active: false, name: 'Fach' },
      { active: true, name: 'Fach' },
      { active: true, name: 'Fach' },
      { active: true, name: 'Fach' },
    ],
    [
      { active: false, name: 'Fach' },
      { active: true, name: 'Fach' },
      { active: true, name: 'Fach' },
      { active: true, name: 'Fach' },
      { active: true, name: 'Fach' },
      { active: true, name: 'Fach' },
      { active: false, name: 'Fach' },
    ],
    [
      { active: false, name: 'Fach' },
      { active: false, name: 'Fach' },
      { active: false, name: 'Fach' },
      { active: false, name: 'Fach' },
      { active: false, name: 'Fach' },
      { active: false, name: 'Fach' },
      { active: false, name: 'Fach' },
    ],
    [
      { active: true, name: 'Fach' },
      { active: true, name: 'Fach' },
      { active: true, name: 'Fach' },
      { active: true, name: 'Fach' },
      { active: false, name: 'Fach' },
      { active: false, name: 'Fach' },
      { active: false, name: 'Fach' },
    ],
  ]
}

describe("Schedule Util", () => {
  test("Should generate a lesson plan from monday", () => {
    const lessonPlan = generateSchedule(testSchedule, new Date('2023-01-02'), new Date('2023-01-04'));

    expect(lessonPlan.length).toEqual(3);
    lessonPlan.forEach(lessons => expect(lessons.length).toEqual(testSchedule.duration.length));
    lessonPlan.forEach((lessons, idx) => lessons.forEach((lesson, id) => {
      expect(lesson.active).toEqual(testSchedule.lessons[idx][id].active);
      expect(lesson.name).toEqual(testSchedule.lessons[idx][id].name);
      expect(lesson.canActivate).toEqual(testSchedule.lessons[idx][id].active);
    }));
  });

  test("Should generate a lesson plan from wednesday over the weekend", () => {
    const lessonPlan = generateSchedule(testSchedule, new Date('2023-01-04'), new Date('2023-01-09'));

    expect(lessonPlan.length).toEqual(4);
    lessonPlan.forEach(lessons => expect(lessons.length).toEqual(testSchedule.duration.length));
    lessonPlan.forEach((lessons, idx) => lessons.forEach((lesson, id) => {
      expect(lesson.active).toEqual(testSchedule.lessons[mod((idx + 2), 5)][id].active);
      expect(lesson.name).toEqual(testSchedule.lessons[mod((idx + 2), 5)][id].name);
      expect(lesson.canActivate).toEqual(testSchedule.lessons[mod((idx + 2), 5)][id].active);
    }));
  });

  test("Should generate a long lesson plan", () => {
    const lessonPlan = generateSchedule(testSchedule, new Date('2023-01-06'), new Date('2023-01-31'));

    expect(lessonPlan.length).toEqual(18);
    lessonPlan.forEach(lessons => expect(lessons.length).toEqual(testSchedule.duration.length));
    lessonPlan.forEach((lessons, idx) => lessons.forEach((lesson, id) => {
      expect(lesson.active).toEqual(testSchedule.lessons[mod((idx + 4), 5)][id].active);
      expect(lesson.name).toEqual(testSchedule.lessons[mod((idx + 4), 5)][id].name);
      expect(lesson.canActivate).toEqual(testSchedule.lessons[mod((idx + 4), 5)][id].active);
    }));
  });

  test("Should fail if generated for start on saturday", () => {
    expect(() => generateSchedule(testSchedule, new Date('2023-01-07'), new Date('2023-01-09'))).toThrow('Start date cannot be saturday or sunday')
  });

  test("Should fail if generated for start on sunday", () => {
    expect(() => generateSchedule(testSchedule, new Date('2023-01-08'), new Date('2023-01-09'))).toThrow('Start date cannot be saturday or sunday')
  });

  test("Should fail if generated for end on saturday", () => {
    expect(() => generateSchedule(testSchedule, new Date('2023-01-02'), new Date('2023-01-07'))).toThrow('End date cannot be saturday or sunday')
  });

  test("Should fail if generated for end on sunday", () => {
    expect(() => generateSchedule(testSchedule, new Date('2023-01-02'), new Date('2023-01-08'))).toThrow('End date cannot be saturday or sunday')
  });

  test("Should fail if generated with start after end", () => {
    expect(() => generateSchedule(testSchedule, new Date('2023-01-09'), new Date('2023-01-07'))).toThrow('Start date has to be before the end date')
  });
});