export const groups = new webix.DataCollection({
    data: [
        {
            id: 1,
            name: "Администраторы",
            right: "999",
        },
        {
            id: 2,
            name: "Пользователи",
            right: "333",
        },
        {
            id: 3,
            name: "Руководители",
            right: "555",
        }
    ]
})

export const users = new webix.DataCollection({
    data: [
        {
            id: 1,
            firstname: "Иван",
            lastname: "Иванов",
            gender: "male",
            group_id: 2,
            login: "ivan",
            pass: "123"
        },
        {
            id: 2,
            firstname: "Екатерина",
            lastname: "Ким",
            gender: "female",
            group_id: 2,
            login: "ivan",
            pass: "123"
        },
        {
            id: 3,
            firstname: "Серик",
            lastname: "Ибраев",
            gender: "male",
            group_id: 2,
            login: "ivan",
            pass: "123"
        },
    ]
})

export const teachers = new webix.DataCollection({
    data: [
        {
            id: 1,
            firstname: "Александр",
            lastname: "Пономарев",
            gender: "male",
            group_id: 2,
            login: "ivan",
            pass: "123"
        },
        {
            id: 2,
            firstname: "Вера",
            lastname: "Пушкина",
            gender: "female",
            group_id: 2,
            login: "ivan",
            pass: "123"
        },
        {
            id: 3,
            firstname: "Азамат",
            lastname: "Бергибаев",
            gender: "male",
            group_id: 2,
            login: "ivan",
            pass: "123"
        },
    ]
})

export const courses = new webix.DataCollection({
    data: [
        {
            id: 1,
            name: "Русский язык",
            value: "Русский язык"
        },
        {
            id: 2,
            name: "Математика",
            value: "Математика"
        },
        {
            id: 3,
            name: "Физика",
            value: "Физика"
        }
    ]
})

export const journal = new webix.DataCollection({
    data: [
        {
            id: 1,
            user_id: 1,
            teacher_id: 1,
            course_id: 1,
            date: "01-02-2020",
            grade: 5
        },
        {
            id: 2,
            user_id: 1,
            teacher_id: 2,
            course_id: 1,
            date: "02-02-2020",
            grade: 3
        },
        {
            id: 3,
            user_id: 1,
            teacher_id: 1,
            course_id: 1,
            date: "03-02-2020",
            grade: 4
        },
        {
            id: 4,
            user_id: 1,
            teacher_id: 2,
            course_id: 2,
            date: "04-02-2020",
            grade: 5
        },
        {
            id: 5,
            user_id: 1,
            teacher_id: 3,
            course_id: 3,
            date: "05-02-2020",
            grade: 5
        },
        {
            id: 6,
            user_id: 1,
            teacher_id: 1,
            course_id: 1,
            date: "06-02-2020",
            grade: 4
        },
        {
            id: 7,
            user_id: 1,
            teacher_id: 2,
            course_id: 2,
            date: "07-02-2020",
            grade: 3
        },
    ]
})
export const months = new webix.DataCollection({
    data: [
        {
            id: 1,
            name: "Январь",
            dayCount: 31
        },
        {
            id: 2,
            name: "Февраль",
            dayCount: 28
        },
        {
            id: 3,
            name: "Март",
            dayCount: 31
        },
        {
            id: 4,
            name: "Апрель",
            dayCount: 30
        },
        {
            id: 5,
            name: "Май",
            dayCount: 31
        },
        {
            id: 6,
            name: "Июнь",
            dayCount: 30
        },
        {
            id: 7,
            name: "Июль",
            dayCount: 31
        },
        {
            id: 8,
            name: "Август",
            dayCount: 31
        },
        {
            id: 9,
            name: "Сентябрь",
            dayCount: 30
        },
        {
            id: 10,
            name: "Октябрь",
            dayCount: 31
        },
        {
            id: 11,
            name: "Ноябрь",
            dayCount: 30
        },
        {
            id: 12,
            name: "Декабрь",
            dayCount: 31
        }
    ]
})

export function getUserFromJournal(user_id){
    let data = new webix.DataCollection();

    journal.data.each(function(obj) {
        if (obj.user_id == user_id){
            data.add(obj);
        }
    });
    return data;
}

export function getGradeFromUserJournal(collection, course_id, d, m, Y) {
    let myParse = webix.Date.strToDate("%d-%m-%Y");
    let grade = null;
    
    collection.data.each(function(obj) {
        let dt = myParse(obj.date);
        
        if (obj.course_id == course_id) {       
            if (dt.getDate() == d && dt.getMonth()+1 == m && dt.getFullYear() == Y) {
                grade = obj.grade;
                return;
            }
        }
    });
    return grade;
}