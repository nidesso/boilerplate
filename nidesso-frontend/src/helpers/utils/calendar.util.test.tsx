import { Schedule } from '../../models/schedule/schedule';
import { calculateBusinessDays, generateSchedule } from './calendar.util';

const testSchedule: Schedule = {
  id: '0',
  teacherId: '1',
  description: 'Severin schedule',
  duration: [
    { startTime: "0815", endTime: "0900" },
    { startTime: "0910", endTime: "0955" },
    { startTime: "1015", endTime: "1100" },
    { startTime: "1110", endTime: "1155" },
    { startTime: "1330", endTime: "1415" },
    { startTime: "1425", endTime: "1510" },
    { startTime: "1530", endTime: "1615" },
  ],
  lessons: [
    { dayCode: 0, lessonCode: 0, name: 'Fach' },
    { dayCode: 0, lessonCode: 1, name: 'Fach' },
    { dayCode: 0, lessonCode: 2, name: 'Fach' },
    { dayCode: 1, lessonCode: 4, name: 'Fach' },
    { dayCode: 1, lessonCode: 5, name: 'Fach' },
    { dayCode: 1, lessonCode: 6, name: 'Fach' },
    { dayCode: 2, lessonCode: 0, name: 'Fach' },
    { dayCode: 2, lessonCode: 1, name: 'Fach' },
    { dayCode: 2, lessonCode: 5, name: 'Fach' },
    { dayCode: 2, lessonCode: 6, name: 'Fach' },
    { dayCode: 4, lessonCode: 2, name: 'Fach' },
    { dayCode: 4, lessonCode: 3, name: 'Fach' },
    { dayCode: 4, lessonCode: 4, name: 'Fach' },
    { dayCode: 4, lessonCode: 5, name: 'Fach' },
  ]
}

describe("Calculate business days", () => {
  test("Should calculate a week without weekends", () => {
    const startDate = new Date('2023-01-02');
    const endDate = new Date('2023-01-06');

    const bdays = calculateBusinessDays(startDate, endDate);

    expect(bdays).toEqual(5);
  });

  test("Should calculate days with weekend", () => {
    const startDate = new Date('2023-01-05');
    const endDate = new Date('2023-01-10');

    const bdays = calculateBusinessDays(startDate, endDate);

    expect(bdays).toEqual(4);
  });

  test("Should calculate days with 2 weekends", () => {
    const startDate = new Date('2023-01-06');
    const endDate = new Date('2023-01-19');

    const bdays = calculateBusinessDays(startDate, endDate);

    expect(bdays).toEqual(10);
  });

  test("Should calculate days with month change", () => {
    const startDate = new Date('2023-01-27');
    const endDate = new Date('2023-02-02');

    const bdays = calculateBusinessDays(startDate, endDate);

    expect(bdays).toEqual(5);
  });

  test("Should calculate days with wrong input", () => {
    const startDate = new Date('2023-01-16');
    const endDate = new Date('2023-01-05');

    const bdays = calculateBusinessDays(startDate, endDate);

    expect(bdays).toEqual(0);
  });
});

describe("Schedule Util", () => {
  test("Should generate a lesson plan from monday", () => {
    const startDate = new Date('2023-01-02');
    const endDate = new Date('2023-01-04');
    const lessonPlan = generateSchedule(testSchedule, startDate, endDate);

    expect(lessonPlan.length).toEqual(3);
    lessonPlan.forEach(lessons => expect(lessons.length).toEqual(testSchedule.duration.length));

    const activeLessons = lessonPlan.map(lessons => lessons
      .filter(lesson => testSchedule.lessons.find(l => l.dayCode === lesson.dayCode && l.lessonCode === lesson.lessonCode)))
      .flatMap(l => l);

    const inactiveLessons = lessonPlan.map(lessons => lessons
      .filter(lesson => !testSchedule.lessons.find(l => l.dayCode === lesson.dayCode && l.lessonCode === lesson.lessonCode)))
      .flatMap(l => l);

    expect(activeLessons.length).toEqual(10);
    expect(inactiveLessons.length).toEqual(11);

    activeLessons
      .forEach((lesson) => {
        const testLesson = testSchedule.lessons.find(l => l.dayCode === lesson.dayCode && l.lessonCode === lesson.lessonCode)!;
        expect(lesson.isActive).toEqual(true);
        expect(lesson.name).toEqual(testLesson.name);
      });

    inactiveLessons
      .forEach((lesson) => {
        expect(lesson.isActive).toEqual(false);
        expect(lesson.name).toBeUndefined();
      });

    const currentDate = startDate;
    for (let i = 0; i < lessonPlan.length; i++) {
      const weekday = i % 5;
      lessonPlan[i].forEach((lesson, idx) => {
        expect(lesson.dayCode).toEqual(weekday);
        expect(lesson.lessonCode).toEqual(idx);
        expect(lesson.date).toEqual(currentDate);
      });

      // Increase the date
      currentDate.setDate(currentDate.getDate() + (weekday === 4 ? 3 : 1));
    }
  });

  test("Should generate a lesson plan from wednesday over the weekend", () => {
    const startDate = new Date('2023-01-04');
    const endDate = new Date('2023-01-09');
    const lessonPlan = generateSchedule(testSchedule, startDate, endDate);

    expect(lessonPlan.length).toEqual(4);
    lessonPlan.forEach(lessons => expect(lessons.length).toEqual(testSchedule.duration.length));

    const activeLessons = lessonPlan.map(lessons => lessons
      .filter(lesson => testSchedule.lessons.find(l => l.dayCode === lesson.dayCode && l.lessonCode === lesson.lessonCode)))
      .flatMap(l => l);

    const inactiveLessons = lessonPlan.map(lessons => lessons
      .filter(lesson => !testSchedule.lessons.find(l => l.dayCode === lesson.dayCode && l.lessonCode === lesson.lessonCode)))
      .flatMap(l => l);

    expect(activeLessons.length).toEqual(11);
    expect(inactiveLessons.length).toEqual(17);

    activeLessons
      .forEach((lesson) => {
        const testLesson = testSchedule.lessons.find(l => l.dayCode === lesson.dayCode && l.lessonCode === lesson.lessonCode)!;
        expect(lesson.isActive).toEqual(true);
        expect(lesson.name).toEqual(testLesson.name);
      });

    inactiveLessons
      .forEach((lesson) => {
        expect(lesson.isActive).toEqual(false);
        expect(lesson.name).toBeUndefined();
      });

    const currentDate = startDate;
    for (let i = 0; i < lessonPlan.length; i++) {
      const weekday = (i + 2) % 5;
      lessonPlan[i].forEach((lesson, idx) => {
        expect(lesson.dayCode).toEqual(weekday);
        expect(lesson.lessonCode).toEqual(idx);
        expect(lesson.date).toEqual(currentDate);
      });

      // Increase the date
      currentDate.setDate(currentDate.getDate() + (weekday === 4 ? 3 : 1));
    }
  });

  test("Should generate a long lesson plan", () => {
    const startDate = new Date('2023-01-06');
    const endDate = new Date('2023-01-31');
    const lessonPlan = generateSchedule(testSchedule, startDate, endDate);

    expect(lessonPlan.length).toEqual(18);
    lessonPlan.forEach(lessons => expect(lessons.length).toEqual(testSchedule.duration.length));

    const activeLessons = lessonPlan.map(lessons => lessons
      .filter(lesson => testSchedule.lessons.find(l => l.dayCode === lesson.dayCode && l.lessonCode === lesson.lessonCode)))
      .flatMap(l => l);

    const inactiveLessons = lessonPlan.map(lessons => lessons
      .filter(lesson => !testSchedule.lessons.find(l => l.dayCode === lesson.dayCode && l.lessonCode === lesson.lessonCode)))
      .flatMap(l => l);

    expect(activeLessons.length).toEqual(52);
    expect(inactiveLessons.length).toEqual(74);

    activeLessons
      .forEach((lesson) => {
        const testLesson = testSchedule.lessons.find(l => l.dayCode === lesson.dayCode && l.lessonCode === lesson.lessonCode)!;
        expect(lesson.isActive).toEqual(true);
        expect(lesson.name).toEqual(testLesson.name);
      });

    inactiveLessons
      .forEach((lesson) => {
        expect(lesson.isActive).toEqual(false);
        expect(lesson.name).toBeUndefined();
      });

    const currentDate = startDate;
    for (let i = 0; i < lessonPlan.length; i++) {
      const weekday = (i + 4) % 5;
      lessonPlan[i].forEach((lesson, idx) => {
        expect(lesson.dayCode).toEqual(weekday);
        expect(lesson.lessonCode).toEqual(idx);
        expect(lesson.date).toEqual(currentDate);
      });

      // Increase the date
      currentDate.setDate(currentDate.getDate() + (weekday === 4 ? 3 : 1));
    }
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