export const teacherData = new webix.DataCollection({
    data: [
        { id: 1, photo: "cyril", fName: "Владимир", lName: "Петров", position: "учитель", course: "Алгебра", weekday: "Четверг", timeStart: "14:00", timeEnd: "16:00", },
        { id: 2, photo: "rolando", fName: "Виталий", lName: "Алексеев", position: "учитель", course: "Химия", weekday: "Понедельник", timeStart: "10:00", timeEnd: "12:00", },
        { id: 3, photo: "tommie", fName: "Анатолий", lName: "Дмитриев", position: "учитель", course: "Физкультура", weekday: "Вторник", timeStart: "9:45", timeEnd: "11:30" },
        { id: 4, photo: "ruthanne", fName: "Надежда", lName: "Леонидова", position: "учитель", course: "История", weekday: "Среда", timeStart: "14:35", timeEnd: "16:00" },
        { id: 5, photo: "tyree", fName: "Болеслав", lName: "Петров", position: "учитель", course: "Английский язык", weekday: "Четверг", timeStart: "9:00", timeEnd: "12:00" },
        { id: 6, photo: "xavier", fName: "Николай", lName: "Колобов", position: "учитель", course: "Биология", weekday: "Пятница", timeStart: "13:00", timeEnd: "14:45" },
        { id: 7, photo: "tomika", fName: "Алина", lName: "Крюкова", position: "учитель", course: "Геометрия", weekday: "Вторник", timeStart: "12:10", timeEnd: "14:35" },
        { id: 8, photo: "omega", fName: "Зоя", lName: "Линник", position: "учитель", course: "Русский язык", weekday: "Суббота", timeStart: "8:45", timeEnd: "11:30" },
        { id: 9, photo: "micaela", fName: "Вероника", lName: "Чернова", position: "учитель", course: "Алгебра", weekday: "Пятница", timeStart: "9:10", timeEnd: "11:00" },
        { id: 10, photo: "paola", fName: "Рената", lName: "Трофимова", position: "учитель", course: "Физика", weekday: "Вторник", timeStart: "15:00", timeEnd: "17:00" },
    ]
});


export const studentData = new webix.DataCollection({
    data: [
        { id: 1, photo: "1", fName: "Петр", lName: "Петров", position: "ученик", form: "1а", },
        { id: 2, photo: "2", fName: "Алексей", lName: "Алексеев", position: "ученик", form: "2б", },
        { id: 3, photo: "3", fName: "Дмитрий", lName: "Дмитриев", position: "ученик", form: "1а", },
        { id: 4, photo: "4", fName: "Леонид", lName: "Леонидов", position: "ученик", form: "7б", },
        { id: 5, photo: "5", fName: "Харитон", lName: "Маслов", position: "ученик", form: "8а", },
        { id: 6, photo: "6", fName: "Чарльз", lName: "Никонов", position: "ученик", form: "9а", },
        { id: 7, photo: "7", fName: "Вероника", lName: "Суворова", position: "ученик", form: "8а", },
        { id: 8, photo: "8", fName: "Кристина", lName: "Семенова", position: "ученик", form: "11а", },
        { id: 9, photo: "9", fName: "Елена", lName: "Кузьмина", position: "ученик", form: "2б", },
        { id: 10, photo: "10", fName: "Ева", lName: "Петренко", position: "ученик", form: "1а", },
    ]
});


export const testGradeData = new webix.DataCollection({
    data: [
        //Класс(журнал)===============
        [
            //ученик(оценки)========
            {
                id: 1,
                form: "1а",
                fName: "Петр",
                lName: "Петров",
                photo: "1",
                grade: { 
                    course: "Алгебра", 
                    teacher: { fName: "user1", lName: "user2" },
                    date: [
                        { 
                            month: "Январь",
                            day1: [4, 5],
                            day2: [5],
                            day3: [4],
                            day4: ["Н"],
                            day5: [],
                            day6: [4],
                            day7: [5],
                        },
                        {
                            month: "Февраль",
                            day1: ["Н"],
                            day2: [4],
                            day3: [4],
                            day4: [],
                            day5: ["Н"],
                            day6: [4],
                            day7: [3, 5],
                        }
                    ]
                }
            },
            //======================
        ],
        //============================
    ]
});


export const gradeData = new webix.DataCollection({
    data: [
        { id: 1, fName: "Петр", lName: "Петров", form: "11", course: "Алгебра", grade01: 5, grade02: 5, grade03: "Н", grade04: 5, grade05: "Н" },
        { id: 2, fName: "Алексей", lName: "Алексеев", form: "11", course: "Алгебра", grade01: "Н", grade02: 4, grade03: 4, grade04: 3, grade05: 2 },
        { id: 3, fName: "Дмитрий", lName: "Дмитриев", form: "11", course: "Алгебра", grade01: 4, grade02: "Н", grade03: 5, grade04: 4, grade05: "Н" },
        { id: 4, fName: "Леонид", lName: "Леонидов", form: "11", course: "Алгебра", grade01: 3, grade02: 2, grade03: 4, grade04: 3, grade05: 5 },
        { id: 5, fName: "Харитон", lName: "Маслов", form: "11", course: "Алгебра", grade01: 5, grade02: 3, grade03: 3, grade04: 2, grade05: "Н" },
        { id: 6, fName: "Чарльз", lName: "Никонов", form: "11", course: "Алгебра", grade01: 5, grade02: 4, grade03: 3, grade04: 3, grade05: 4 },
        { id: 7, fName: "Вероника", lName: "Суворова", form: "11", course: "Алгебра", grade01: 2, grade02: 4, grade03: 4, grade04: 4, grade05: 5 },
        { id: 8, fName: "Кристина", lName: "Семенова", form: "11", course: "Алгебра", grade01: 3, grade02: 4, grade03: 4, grade04: 4, grade05: 4 },
        { id: 9, fName: "Елена", lName: "Кузьмина", form: "11", course: "Алгебра", grade01: 5, grade02: 2, grade03: 5, grade04: 5, grade05: 3 },
        { id: 10, fName: "Ева", lName: "Петренко", form: "11", course: "Алгебра", grade01: 4, grade02: 3, grade03: 2, grade04: "Н", grade05: 3 },
    ]
});

export const diaryMondayData = new webix.DataCollection({
    data: [
        { 
            id: 1, 
            course1: "Алгебра",
            hw: "Some text",
            grade: "5",
            comment: "Some text",
            date: "01/09/2020"   
        },
        {
            id: 2,
            course1: "Физкультура",
            hw: "Some text",
            grade: "4",
            comment: "Some text",
            date: "01/09/2020" 
        },
        {
            id: 3,
            course1: "Английский язык",
            hw: "Some text",
            grade: "3",
            comment: "Some text",
            date: "01/09/2020" 
        },
        {
            id: 4,
            course1: "Биология",
            hw: "Some text",
            grade: "2",
            comment: "Some text",
            date: "01/09/2020" 
        },
        {
            id: 5,
            course1: "История",
            hw: "Some text",
            grade: "4",
            comment: "Some text",
            date: "01/09/2020" 
        },
        {
            id: 6,
            course1: "Физика",
            hw: "Some text",
            grade: "5",
            comment: "Some text",
            date: "01/09/2020" 
        }
    ]
});


export const diaryTuesdayData = new webix.DataCollection({
    data: [
        {
            id: 1,
            course2: "Геометрия",
            hw: "Some text",
            grade: "5",
            comment: "Some text",
            date: "02/09/2020"
        },
        {
            id: 2,
            course2: "Русский язык",
            hw: "Some text",
            grade: "4",
            comment: "Some text",
            date: "02/09/2020"
        },
        {
            id: 3,
            course2: "Физика",
            hw: "Some text",
            grade: "3",
            comment: "Some text",
            date: "02/09/2020"
        },
        {
            id: 4,
            course2: "Химия",
            hw: "Some text",
            grade: "2",
            comment: "Some text",
            date: "02/09/2020"
        },
        {
            id: 5,
            course2: "Английский язык",
            hw: "Some text",
            grade: "4",
            comment: "Some text",
            date: "02/09/2020"
        },
        {
            id: 6,
            course2: "Литература",
            hw: "Some text",
            grade: "5",
            comment: "Some text",
            date: "02/09/2020"
        }
    ]
});

