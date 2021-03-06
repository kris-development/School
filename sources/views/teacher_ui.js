import { JetView } from "webix-jet";
import "webix/photo";
import "webix/tinymce/tinymce";
import HomeWorkTeacherView from "views/super_homework_information";

import AddStudentView from "views/add_student_window";

import { diaryDataMon } from "models/diary_model";
import { diaryDataTue } from "models/diary_model";
import { diaryDataWed } from "models/diary_model";
import { diaryDataThur } from "models/diary_model";
import { diaryDataFri } from "models/diary_model";
import { diaryDataSat } from "models/diary_model";


import { journalData1 } from "models/diary_model";
import { journalData2 } from "models/diary_model";
import { journalData3 } from "models/diary_model";
import { journalData4 } from "models/diary_model";
import { scheduleData } from "models/diary_model";
import { classmatesData } from "models/diary_model";
import { teacherDiaryData } from "models/diary_model";

export default class TeacherView extends JetView {
    config() {
        webix.CustomScroll.init();

        return {
            rows: [
                {
                    template: "<b>Учет учителя</b><br><br>", height: 70,
                    css: "myStyleTemplate"
                },

                {
                    view: "tabbar",
                    multiview: true,
                    css: "myStyleTopTabbar",
                    value: "super_student_dataview_tabbar",
                    options: [
                        { value: "Дневник", id: "super_student_dataview_tabbar" },
                        { value: "Журнал", id: "super_student_grade_datatable_tabbar" },
                        { value: "Расписание", id: "super_student_schedule_datatable_tabbar" },
                        { value: "Ученики", id: "super_student_list_tabbar" },
                        // { value: "Учителя", id: "super_teacher_list_tabbar" },
                    ]
                },

                {
                    animate: {
                        type: "slide",
                        direction: "top"
                    },
                    fitBiggest: true,
                    cells: [
                        //Дневник==============================================================================================================================================
                        {
                            id: "super_student_dataview_tabbar",
                            rows: [
                                {
                                    view: "tabbar",
                                    multiview: true,
                                    css: "myStyleWeekD",
                                    value: "dMonday_teacher_tabbar_dataview",
                                    options: [
                                        { value: "Понедельник", id: "dMonday_teacher_tabbar_dataview" },
                                        { value: "Вторник", id: "dTuesday_teacher_tabbar_dataview" },
                                        { value: "Среда", id: "dWednesday_teacher_tabbar_dataview" },
                                        { value: "Четверг", id: "dThursday_teacher_tabbar_dataview" },
                                        { value: "Пятница", id: "dFriday_teacher_tabbar_dataview" },
                                        { value: "Суббота", id: "dSaturday_teacher_tabbar_dataview" },
                                    ]
                                },
                                {
                                    cells: [
                                        {
                                            view: "dataview",
                                            id: "dMonday_teacher_tabbar_dataview",
                                            height: 540,
                                            css: "myDiaryStyle",
                                            template: "<div class='overall'> <div class='course'>#course_diary#</div><div class='schedule'>Время: #scheduleMon#</div><div class='homework'>Домашнее задание: #hw_diary_status#</div><div class='wrapper'><button class='Descbtn'>Подробнее</button></div> </div>",
                                            onClick: {
                                                "Descbtn": function (ev, id) {
                                                    $$("super_task_information_datatable").filter(obj => obj.id == id); //ФИЛЬТРАЦИЯ ДОМАШНЕГО ЗАДАНИЯ
                                                    $$("super_material_list").filter(obj => obj.id == id); //ФИЛЬТРАЦИЯ СПИСКА С УЧЕБНИКАМИ
                                                    $$("super_task_information_datatable").adjustRowHeight("hw_diary");
                                                    $$("super_homework_window").__lastId = id;
                                                    $$("super_homework_window").show();
                                                }
                                            },
                                            type: {
                                                width: "auto",
                                                height: 270,
                                            },
                                            xCount: 3
                                        },
                                        {
                                            view: "dataview",
                                            id: "dTuesday_teacher_tabbar_dataview",
                                            height: 540,
                                            css: "myDiaryStyle",
                                            template: "<div class='overall'> <div class='course'>#course_diary#</div><div class='schedule'>Время: #scheduleTue#</div><div class='homework'>Домашнее задание: #hw_diary_status#</div><div class='wrapper'><button class='Descbtn'>Подробнее</button></div> </div>",
                                            onClick: {
                                                "Descbtn": function (ev, id) {
                                                    $$("super_task_information_datatable").filter(obj => obj.id == id); //ФИЛЬТРАЦИЯ ДОМАШНЕГО ЗАДАНИЯ
                                                    $$("super_material_list").filter(obj => obj.id == id); //ФИЛЬТРАЦИЯ СПИСКА С УЧЕБНИКАМИ
                                                    $$("super_task_information_datatable").adjustRowHeight("hw_diary");
                                                    $$("super_homework_window").__lastId = id;
                                                    $$("super_homework_window").show();
                                                }
                                            },
                                            type: {
                                                width: "auto",
                                                height: 270,
                                            },
                                            xCount: 3
                                        },
                                        {
                                            view: "dataview",
                                            id: "dWednesday_teacher_tabbar_dataview",
                                            height: 540,
                                            css: "myDiaryStyle",
                                            template: "<div class='overall'> <div class='course'>#course_diary#</div><div class='schedule'>Время: #scheduleWed#</div><div class='homework'>Домашнее задание: #hw_diary_status#</div><div class='wrapper'><button class='Descbtn'>Подробнее</button></div> </div>",
                                            onClick: {
                                                "Descbtn": function (ev, id) {
                                                    $$("super_task_information_datatable").filter(obj => obj.id == id); //ФИЛЬТРАЦИЯ ДОМАШНЕГО ЗАДАНИЯ
                                                    $$("super_material_list").filter(obj => obj.id == id); //ФИЛЬТРАЦИЯ СПИСКА С УЧЕБНИКАМИ
                                                    $$("super_task_information_datatable").adjustRowHeight("hw_diary");
                                                    $$("super_homework_window").__lastId = id;
                                                    $$("super_homework_window").show();
                                                }
                                            },
                                            type: {
                                                width: "auto",
                                                height: 270,
                                            },
                                            xCount: 3
                                        },
                                        {
                                            view: "dataview",
                                            id: "dThursday_teacher_tabbar_dataview",
                                            height: 540,
                                            css: "myDiaryStyle",
                                            template: "<div class='overall'> <div class='course'>#course_diary#</div><div class='schedule'>Время: #scheduleThur#</div><div class='homework'>Домашнее задание: #hw_diary_status#</div><div class='wrapper'><button class='Descbtn'>Подробнее</button></div> </div>",
                                            onClick: {
                                                "Descbtn": function (ev, id) {
                                                    $$("super_task_information_datatable").filter(obj => obj.id == id); //ФИЛЬТРАЦИЯ ДОМАШНЕГО ЗАДАНИЯ
                                                    $$("super_material_list").filter(obj => obj.id == id); //ФИЛЬТРАЦИЯ СПИСКА С УЧЕБНИКАМИ
                                                    $$("super_task_information_datatable").adjustRowHeight("hw_diary");
                                                    $$("super_homework_window").__lastId = id;
                                                    $$("super_homework_window").show();
                                                }
                                            },
                                            type: {
                                                width: "auto",
                                                height: 270,
                                            },
                                            xCount: 3
                                        },
                                        {
                                            view: "dataview",
                                            id: "dFriday_teacher_tabbar_dataview",
                                            height: 540,
                                            css: "myDiaryStyle",
                                            template: "<div class='overall'> <div class='course'>#course_diary#</div><div class='schedule'>Время: #scheduleFri#</div><div class='homework'>Домашнее задание: #hw_diary_status#</div><div class='wrapper'><button class='Descbtn'>Подробнее</button></div> </div>",
                                            onClick: {
                                                "Descbtn": function (ev, id) {
                                                    $$("super_task_information_datatable").filter(obj => obj.id == id); //ФИЛЬТРАЦИЯ ДОМАШНЕГО ЗАДАНИЯ
                                                    $$("super_material_list").filter(obj => obj.id == id); //ФИЛЬТРАЦИЯ СПИСКА С УЧЕБНИКАМИ
                                                    $$("super_task_information_datatable").adjustRowHeight("hw_diary");
                                                    $$("super_homework_window").__lastId = id;
                                                    $$("super_homework_window").show();
                                                }
                                            },
                                            type: {
                                                width: "auto",
                                                height: 270,
                                            },
                                            xCount: 3
                                        },
                                        {
                                            view: "dataview",
                                            id: "dSaturday_teacher_tabbar_dataview",
                                            height: 540,
                                            css: "myDiaryStyle",
                                            template: "<div class='overall'> <div class='course'>#course_diary#</div><div class='schedule'>Время: #scheduleSat#</div><div class='homework'>Домашнее задание: #hw_diary_status#</div><div class='wrapper'><button class='Descbtn'>Подробнее</button></div> </div>",
                                            onClick: {
                                                "Descbtn": function (ev, id) {
                                                    $$("super_task_information_datatable").filter(obj => obj.id == id); //ФИЛЬТРАЦИЯ ДОМАШНЕГО ЗАДАНИЯ
                                                    $$("super_material_list").filter(obj => obj.id == id); //ФИЛЬТРАЦИЯ СПИСКА С УЧЕБНИКАМИ
                                                    $$("super_task_information_datatable").adjustRowHeight("hw_diary");
                                                    $$("super_homework_window").__lastId = id;
                                                    $$("super_homework_window").show();
                                                }
                                            },
                                            type: {
                                                width: "auto",
                                                height: 270,
                                            },
                                            xCount: 3
                                        },
                                    ]
                                }
                            ]
                        },
                        //=====================================================================================================================================================

                        //Личный журнал========================================================================================================================================
                        {
                            id: "super_student_grade_datatable_tabbar",
                            rows: [
                                {
                                    cols: [
                                        {
                                            view: "combo",
                                            id: "comboFormList_teacher",
                                            placeholder: "Выберите класс",
                                            inputWidth: 220,
                                            // value: 1,
                                            options: [
                                                { id: 1, value: "1" },
                                                { id: 2, value: "2" },
                                                { id: 3, value: "3" },
                                                { id: 4, value: "4" },
                                                { id: 5, value: "5" },
                                                { id: 6, value: "6" },
                                                { id: 7, value: "7" },
                                                { id: 8, value: "8" },
                                                { id: 9, value: "9" },
                                                { id: 10, value: "10" },
                                                { id: 11, value: "11" },
                                            ]
                                        },
                                        {
                                            view: "combo",
                                            id: "comboStudentsList_teacher",
                                            placeholder: "Выберите ученика",
                                            inputWidth: 220,
                                            // value: 1,
                                            options: [
                                                { id: 1, value: "Ученик1" },
                                                { id: 2, value: "Ученик2" },
                                                { id: 3, value: "Ученик3" },
                                                { id: 4, value: "Ученик4" }
                                            ]
                                        },
                                        {
                                            view: "combo",
                                            id: "comboGradeList_teacher",
                                            placeholder: "Выберите предмет",
                                            inputWidth: 220,
                                            // value: 1,
                                            options: [
                                                { id: "Алгебра", value: "Алгебра" },
                                                { id: "Физика", value: "Физика" },
                                                { id: "Русский Язык", value: "Русский Язык" },
                                                { id: "Английский Язык", value: "Английский Язык" },
                                                { id: "Биология", value: "Биология" },
                                                { id: "История", value: "История" },
                                                { id: "Геометрия", value: "Геометрия" },
                                            ]
                                        },
                                    ]                                   
                                },
                                {
                                    view: "tabbar",
                                    css: "myStyleWeekD",
                                    multiview: true,
                                    value: "quarter1_teacher_tabbar_datatable",
                                    options: [
                                        { value: "I четверть", id: "quarter1_teacher_tabbar_datatable" },
                                        { value: "II четверть", id: "quarter2_teacher_tabbar_datatable" },
                                        { value: "III четверть", id: "quarter3_teacher_tabbar_datatable" },
                                        { value: "IV четверть", id: "quarter4_teacher_tabbar_datatable" },
                                    ],
                                },
                                {
                                    cells: [
                                        {
                                            view: "datatable",
                                            id: "quarter1_teacher_tabbar_datatable",
                                            leftSplit: 1,
                                            css: "myStyleJournal",
                                            height: 505,
                                            type: "space",
                                            editable: true,
                                            editaction: "dblclick",
                                            columns: [
                                                { id: "course_journal", header: [{ text: "Предмет" }], adjust: true },

                                                { editor: "text", id: "gr01", header: [{ content: "columnGroup", closed: true, batch: "сентябрь", groupText: "Сентябрь", colspan: 30, }, 1], width: 150, minWidth: 150 },
                                                { editor: "text", id: "gr02", batch: "сентябрь", header: [{}, 2], width: 150 },
                                                { editor: "text", id: "gr03", batch: "сентябрь", header: [{}, 3], width: 150 },
                                                { editor: "text", id: "gr04", batch: "сентябрь", header: [{}, 4], width: 150 },
                                                { editor: "text", id: "gr05", batch: "сентябрь", header: [{}, 5], width: 150 },
                                                { editor: "text", id: "gr06", batch: "сентябрь", header: [{}, 6], width: 150 },
                                                { editor: "text", id: "gr07", batch: "сентябрь", header: [{}, 7], width: 150 },
                                                { editor: "text", id: "gr08", batch: "сентябрь", header: [{}, 8], width: 150 },
                                                { editor: "text", id: "gr09", batch: "сентябрь", header: [{}, 9], width: 150 },
                                                { editor: "text", id: "gr10", batch: "сентябрь", header: [{}, 10], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 11], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 12], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 13], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 14], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 15], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 16], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 17], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 18], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 19], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 20], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 21], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 22], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 23], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 24], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 25], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 26], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 27], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 28], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 29], width: 150 },
                                                { editor: "text", id: "", batch: "сентябрь", header: [{}, 30], width: 150 },

                                                { editor: "text", id: "gr11", header: [{ content: "columnGroup", closed: true, batch: "октябрь", groupText: "Октябрь", colspan: 25, }, 1], width: 150, minWidth: 150 },
                                                { editor: "text", id: "gr12", batch: "октябрь", header: [{}, 2], width: 150 },
                                                { editor: "text", id: "gr13", batch: "октябрь", header: [{}, 3], width: 150 },
                                                { editor: "text", id: "gr14", batch: "октябрь", header: [{}, 4], width: 150 },
                                                { editor: "text", id: "gr15", batch: "октябрь", header: [{}, 5], width: 150 },
                                                { editor: "text", id: "gr16", batch: "октябрь", header: [{}, 6], width: 150 },
                                                { editor: "text", id: "gr17", batch: "октябрь", header: [{}, 7], width: 150 },
                                                { editor: "text", id: "gr18", batch: "октябрь", header: [{}, 8], width: 150 },
                                                { editor: "text", id: "gr19", batch: "октябрь", header: [{}, 9], width: 150 },
                                                { editor: "text", id: "gr20", batch: "октябрь", header: [{}, 10], width: 150 },
                                                { editor: "text", id: "", batch: "октябрь", header: [{}, 11], width: 150 },
                                                { editor: "text", id: "", batch: "октябрь", header: [{}, 12], width: 150 },
                                                { editor: "text", id: "", batch: "октябрь", header: [{}, 13], width: 150 },
                                                { editor: "text", id: "", batch: "октябрь", header: [{}, 14], width: 150 },
                                                { editor: "text", id: "", batch: "октябрь", header: [{}, 15], width: 150 },
                                                { editor: "text", id: "", batch: "октябрь", header: [{}, 16], width: 150 },
                                                { editor: "text", id: "", batch: "октябрь", header: [{}, 17], width: 150 },
                                                { editor: "text", id: "", batch: "октябрь", header: [{}, 18], width: 150 },
                                                { editor: "text", id: "", batch: "октябрь", header: [{}, 19], width: 150 },
                                                { editor: "text", id: "", batch: "октябрь", header: [{}, 20], width: 150 },
                                                { editor: "text", id: "", batch: "октябрь", header: [{}, 21], width: 150 },
                                                { editor: "text", id: "", batch: "октябрь", header: [{}, 22], width: 150 },
                                                { editor: "text", id: "", batch: "октябрь", header: [{}, 23], width: 150 },
                                                { editor: "text", id: "", batch: "октябрь", header: [{}, 24], width: 150 },
                                                { editor: "text", id: "", batch: "октябрь", header: [{}, 25], width: 150 },
                                            ]
                                        },
                                        {
                                            view: "datatable",
                                            id: "quarter2_teacher_tabbar_datatable",
                                            leftSplit: 1,
                                            css: "myStyleJournal",
                                            height: 505,
                                            editable: true,
                                            editaction: "dblclick",
                                            columns: [
                                                { id: "course_journal", header: [{ text: "Предмет" }], adjust: true },

                                                { editor: "text", id: "gr01", header: [{ content: "columnGroup", closed: true, batch: "ноябрь", groupText: "Ноябрь", colspan: 26, }, 5], width: 150, minWidth: 150 },
                                                { editor: "text", id: "gr02", batch: "ноябрь", header: [{}, 6], width: 150 },
                                                { editor: "text", id: "gr03", batch: "ноябрь", header: [{}, 7], width: 150 },
                                                { editor: "text", id: "gr04", batch: "ноябрь", header: [{}, 8], width: 150 },
                                                { editor: "text", id: "gr05", batch: "ноябрь", header: [{}, 9], width: 150 },
                                                { editor: "text", id: "gr06", batch: "ноябрь", header: [{}, 10], width: 150 },
                                                { editor: "text", id: "gr07", batch: "ноябрь", header: [{}, 11], width: 150 },
                                                { editor: "text", id: "gr08", batch: "ноябрь", header: [{}, 12], width: 150 },
                                                { editor: "text", id: "gr09", batch: "ноябрь", header: [{}, 13], width: 150 },
                                                { editor: "text", id: "gr10", batch: "ноябрь", header: [{}, 14], width: 150 },
                                                { editor: "text", id: "", batch: "ноябрь", header: [{}, 15], width: 150 },
                                                { editor: "text", id: "", batch: "ноябрь", header: [{}, 16], width: 150 },
                                                { editor: "text", id: "", batch: "ноябрь", header: [{}, 17], width: 150 },
                                                { editor: "text", id: "", batch: "ноябрь", header: [{}, 18], width: 150 },
                                                { editor: "text", id: "", batch: "ноябрь", header: [{}, 19], width: 150 },
                                                { editor: "text", id: "", batch: "ноябрь", header: [{}, 20], width: 150 },
                                                { editor: "text", id: "", batch: "ноябрь", header: [{}, 21], width: 150 },
                                                { editor: "text", id: "", batch: "ноябрь", header: [{}, 22], width: 150 },
                                                { editor: "text", id: "", batch: "ноябрь", header: [{}, 23], width: 150 },
                                                { editor: "text", id: "", batch: "ноябрь", header: [{}, 24], width: 150 },
                                                { editor: "text", id: "", batch: "ноябрь", header: [{}, 25], width: 150 },
                                                { editor: "text", id: "", batch: "ноябрь", header: [{}, 26], width: 150 },
                                                { editor: "text", id: "", batch: "ноябрь", header: [{}, 27], width: 150 },
                                                { editor: "text", id: "", batch: "ноябрь", header: [{}, 28], width: 150 },
                                                { editor: "text", id: "", batch: "ноябрь", header: [{}, 29], width: 150 },
                                                { editor: "text", id: "", batch: "ноябрь", header: [{}, 30], width: 150 },

                                                { editor: "text", id: "gr11", header: [{ content: "columnGroup", closed: true, batch: "декабрь", groupText: "Декабрь", colspan: 27, }, 1], width: 150, minWidth: 150 },
                                                { editor: "text", id: "gr12", batch: "декабрь", header: [{}, 2], width: 150 },
                                                { editor: "text", id: "gr13", batch: "декабрь", header: [{}, 3], width: 150 },
                                                { editor: "text", id: "gr14", batch: "декабрь", header: [{}, 4], width: 150 },
                                                { editor: "text", id: "gr15", batch: "декабрь", header: [{}, 5], width: 150 },
                                                { editor: "text", id: "gr16", batch: "декабрь", header: [{}, 6], width: 150 },
                                                { editor: "text", id: "gr17", batch: "декабрь", header: [{}, 7], width: 150 },
                                                { editor: "text", id: "gr18", batch: "декабрь", header: [{}, 8], width: 150 },
                                                { editor: "text", id: "gr19", batch: "декабрь", header: [{}, 9], width: 150 },
                                                { editor: "text", id: "gr20gr01", batch: "декабрь", header: [{}, 10], width: 150 },
                                                { editor: "text", id: "", batch: "декабрь", header: [{}, 11], width: 150 },
                                                { editor: "text", id: "", batch: "декабрь", header: [{}, 12], width: 150 },
                                                { editor: "text", id: "", batch: "декабрь", header: [{}, 13], width: 150 },
                                                { editor: "text", id: "", batch: "декабрь", header: [{}, 14], width: 150 },
                                                { editor: "text", id: "", batch: "декабрь", header: [{}, 15], width: 150 },
                                                { editor: "text", id: "", batch: "декабрь", header: [{}, 16], width: 150 },
                                                { editor: "text", id: "", batch: "декабрь", header: [{}, 17], width: 150 },
                                                { editor: "text", id: "", batch: "декабрь", header: [{}, 18], width: 150 },
                                                { editor: "text", id: "", batch: "декабрь", header: [{}, 19], width: 150 },
                                                { editor: "text", id: "", batch: "декабрь", header: [{}, 20], width: 150 },
                                                { editor: "text", id: "", batch: "декабрь", header: [{}, 21], width: 150 },
                                                { editor: "text", id: "", batch: "декабрь", header: [{}, 22], width: 150 },
                                                { editor: "text", id: "", batch: "декабрь", header: [{}, 23], width: 150 },
                                                { editor: "text", id: "", batch: "декабрь", header: [{}, 24], width: 150 },
                                                { editor: "text", id: "", batch: "декабрь", header: [{}, 25], width: 150 },
                                                { editor: "text", id: "", batch: "декабрь", header: [{}, 26], width: 150 },
                                                { editor: "text", id: "", batch: "декабрь", header: [{}, 27], width: 150 },
                                            ]
                                        },
                                        {
                                            view: "datatable",
                                            id: "quarter3_teacher_tabbar_datatable",
                                            leftSplit: 1,
                                            css: "myStyleJournal",
                                            height: 505,
                                            editable: true,
                                            editaction: "dblclick",
                                            columns: [
                                                { id: "course_journal", header: [{ text: "Предмет" }], adjust: true },

                                                { editor: "text", id: "gr01", header: [{ content: "columnGroup", closed: true, batch: "январь", groupText: "Январь", colspan: 23, }, 9], width: 150, minWidth: 150 },
                                                { editor: "text", id: "gr02", batch: "январь", header: [{}, 10], width: 150 },
                                                { editor: "text", id: "gr03", batch: "январь", header: [{}, 11], width: 150 },
                                                { editor: "text", id: "gr04", batch: "январь", header: [{}, 12], width: 150 },
                                                { editor: "text", id: "gr05", batch: "январь", header: [{}, 13], width: 150 },
                                                { editor: "text", id: "gr06", batch: "январь", header: [{}, 14], width: 150 },
                                                { editor: "text", id: "gr07", batch: "январь", header: [{}, 15], width: 150 },
                                                { editor: "text", id: "gr08", batch: "январь", header: [{}, 16], width: 150 },
                                                { editor: "text", id: "gr09", batch: "январь", header: [{}, 17], width: 150 },
                                                { editor: "text", id: "gr10", batch: "январь", header: [{}, 18], width: 150 },
                                                { editor: "text", id: "", batch: "январь", header: [{}, 19], width: 150 },
                                                { editor: "text", id: "", batch: "январь", header: [{}, 20], width: 150 },
                                                { editor: "text", id: "", batch: "январь", header: [{}, 21], width: 150 },
                                                { editor: "text", id: "", batch: "январь", header: [{}, 22], width: 150 },
                                                { editor: "text", id: "", batch: "январь", header: [{}, 23], width: 150 },
                                                { editor: "text", id: "", batch: "январь", header: [{}, 24], width: 150 },
                                                { editor: "text", id: "", batch: "январь", header: [{}, 25], width: 150 },
                                                { editor: "text", id: "", batch: "январь", header: [{}, 26], width: 150 },
                                                { editor: "text", id: "", batch: "январь", header: [{}, 27], width: 150 },
                                                { editor: "text", id: "", batch: "январь", header: [{}, 28], width: 150 },
                                                { editor: "text", id: "", batch: "январь", header: [{}, 29], width: 150 },
                                                { editor: "text", id: "", batch: "январь", header: [{}, 30], width: 150 },
                                                { editor: "text", id: "", batch: "январь", header: [{}, 31], width: 150 },

                                                { editor: "text", id: "gr11", header: [{ content: "columnGroup", closed: true, batch: "февраль", groupText: "Февраль", colspan: 29, }, 1], width: 150, minWidth: 150 },
                                                { editor: "text", id: "gr12", batch: "февраль", header: [{}, 2], width: 150 },
                                                { editor: "text", id: "gr13", batch: "февраль", header: [{}, 3], width: 150 },
                                                { editor: "text", id: "gr14", batch: "февраль", header: [{}, 4], width: 150 },
                                                { editor: "text", id: "gr15", batch: "февраль", header: [{}, 5], width: 150 },
                                                { editor: "text", id: "gr16", batch: "февраль", header: [{}, 6], width: 150 },
                                                { editor: "text", id: "gr17", batch: "февраль", header: [{}, 7], width: 150 },
                                                { editor: "text", id: "gr18", batch: "февраль", header: [{}, 8], width: 150 },
                                                { editor: "text", id: "gr19", batch: "февраль", header: [{}, 9], width: 150 },
                                                { editor: "text", id: "gr20", batch: "февраль", header: [{}, 10], width: 150 },
                                                { editor: "text", id: "", batch: "февраль", header: [{}, 11], width: 150 },
                                                { editor: "text", id: "", batch: "февраль", header: [{}, 12], width: 150 },
                                                { editor: "text", id: "", batch: "февраль", header: [{}, 13], width: 150 },
                                                { editor: "text", id: "", batch: "февраль", header: [{}, 14], width: 150 },
                                                { editor: "text", id: "", batch: "февраль", header: [{}, 15], width: 150 },
                                                { editor: "text", id: "", batch: "февраль", header: [{}, 16], width: 150 },
                                                { editor: "text", id: "", batch: "февраль", header: [{}, 17], width: 150 },
                                                { editor: "text", id: "", batch: "февраль", header: [{}, 18], width: 150 },
                                                { editor: "text", id: "", batch: "февраль", header: [{}, 19], width: 150 },
                                                { editor: "text", id: "", batch: "февраль", header: [{}, 20], width: 150 },
                                                { editor: "text", id: "", batch: "февраль", header: [{}, 21], width: 150 },
                                                { editor: "text", id: "", batch: "февраль", header: [{}, 22], width: 150 },
                                                { editor: "text", id: "", batch: "февраль", header: [{}, 23], width: 150 },
                                                { editor: "text", id: "", batch: "февраль", header: [{}, 24], width: 150 },
                                                { editor: "text", id: "", batch: "февраль", header: [{}, 25], width: 150 },
                                                { editor: "text", id: "", batch: "февраль", header: [{}, 26], width: 150 },
                                                { editor: "text", id: "", batch: "февраль", header: [{}, 27], width: 150 },
                                                { editor: "text", id: "", batch: "февраль", header: [{}, 28], width: 150 },
                                                { editor: "text", id: "", batch: "февраль", header: [{}, 29], width: 150 },

                                                { editor: "text", id: "gr21", header: [{ content: "columnGroup", closed: true, batch: "март", groupText: "Март", colspan: 20, }, 1], width: 150, minWidth: 150 },
                                                { editor: "text", id: "gr22", batch: "март", header: [{}, 2], width: 150 },
                                                { editor: "text", id: "gr23", batch: "март", header: [{}, 3], width: 150 },
                                                { editor: "text", id: "gr24", batch: "март", header: [{}, 4], width: 150 },
                                                { editor: "text", id: "gr25", batch: "март", header: [{}, 5], width: 150 },
                                                { editor: "text", id: "gr26", batch: "март", header: [{}, 6], width: 150 },
                                                { editor: "text", id: "gr27", batch: "март", header: [{}, 7], width: 150 },
                                                { editor: "text", id: "gr28", batch: "март", header: [{}, 8], width: 150 },
                                                { editor: "text", id: "gr29", batch: "март", header: [{}, 9], width: 150 },
                                                { editor: "text", id: "gr30gr01", batch: "март", header: [{}, 10], width: 150 },
                                                { editor: "text", id: "", batch: "март", header: [{}, 11], width: 150 },
                                                { editor: "text", id: "", batch: "март", header: [{}, 12], width: 150 },
                                                { editor: "text", id: "", batch: "март", header: [{}, 13], width: 150 },
                                                { editor: "text", id: "", batch: "март", header: [{}, 14], width: 150 },
                                                { editor: "text", id: "", batch: "март", header: [{}, 15], width: 150 },
                                                { editor: "text", id: "", batch: "март", header: [{}, 16], width: 150 },
                                                { editor: "text", id: "", batch: "март", header: [{}, 17], width: 150 },
                                                { editor: "text", id: "", batch: "март", header: [{}, 18], width: 150 },
                                                { editor: "text", id: "", batch: "март", header: [{}, 19], width: 150 },
                                                { editor: "text", id: "", batch: "март", header: [{}, 20], width: 150 },
                                            ]
                                        },
                                        {
                                            view: "datatable",
                                            id: "quarter4_teacher_tabbar_datatable",
                                            leftSplit: 1,
                                            css: "myStyleJournal",
                                            height: 505,
                                            editable: true,
                                            editaction: "dblclick",
                                            columns: [
                                                { id: "course_journal", header: [{ text: "Предмет" }], adjust: true },

                                                { editor: "text", id: "gr01", header: [{ content: "columnGroup", closed: true, batch: "апрель", groupText: "Апрель", colspan: 30, }, 1], width: 150, minWidth: 150 },
                                                { editor: "text", id: "gr02", batch: "апрель", header: [{}, 2], width: 150 },
                                                { editor: "text", id: "gr03", batch: "апрель", header: [{}, 3], width: 150 },
                                                { editor: "text", id: "gr04", batch: "апрель", header: [{}, 4], width: 150 },
                                                { editor: "text", id: "gr05", batch: "апрель", header: [{}, 5], width: 150 },
                                                { editor: "text", id: "gr06", batch: "апрель", header: [{}, 6], width: 150 },
                                                { editor: "text", id: "gr07", batch: "апрель", header: [{}, 7], width: 150 },
                                                { editor: "text", id: "gr08", batch: "апрель", header: [{}, 8], width: 150 },
                                                { editor: "text", id: "gr09", batch: "апрель", header: [{}, 9], width: 150 },
                                                { editor: "text", id: "gr10", batch: "апрель", header: [{}, 10], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 11], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 12], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 13], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 14], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 15], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 16], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 17], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 18], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 19], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 20], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 21], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 22], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 23], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 24], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 25], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 26], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 27], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 28], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 29], width: 150 },
                                                { editor: "text", id: "", batch: "апрель", header: [{}, 30], width: 150 },

                                                { editor: "text", id: "gr11", header: [{ content: "columnGroup", closed: true, batch: "май", groupText: "Май", colspan: 29, }, 1], width: 150, minWidth: 150 },
                                                { editor: "text", id: "gr12", batch: "май", header: [{}, 2], width: 150 },
                                                { editor: "text", id: "gr13", batch: "май", header: [{}, 3], width: 150 },
                                                { editor: "text", id: "gr14", batch: "май", header: [{}, 4], width: 150 },
                                                { editor: "text", id: "gr15", batch: "май", header: [{}, 5], width: 150 },
                                                { editor: "text", id: "gr16", batch: "май", header: [{}, 6], width: 150 },
                                                { editor: "text", id: "gr17", batch: "май", header: [{}, 7], width: 150 },
                                                { editor: "text", id: "gr18", batch: "май", header: [{}, 8], width: 150 },
                                                { editor: "text", id: "gr19", batch: "май", header: [{}, 9], width: 150 },
                                                { editor: "text", id: "gr20", batch: "май", header: [{}, 10], width: 150 },
                                                { editor: "text", id: "", batch: "май", header: [{}, 11], width: 150 },
                                                { editor: "text", id: "", batch: "май", header: [{}, 12], width: 150 },
                                                { editor: "text", id: "", batch: "май", header: [{}, 13], width: 150 },
                                                { editor: "text", id: "", batch: "май", header: [{}, 14], width: 150 },
                                                { editor: "text", id: "", batch: "май", header: [{}, 15], width: 150 },
                                                { editor: "text", id: "", batch: "май", header: [{}, 16], width: 150 },
                                                { editor: "text", id: "", batch: "май", header: [{}, 17], width: 150 },
                                                { editor: "text", id: "", batch: "май", header: [{}, 18], width: 150 },
                                                { editor: "text", id: "", batch: "май", header: [{}, 19], width: 150 },
                                                { editor: "text", id: "", batch: "май", header: [{}, 20], width: 150 },
                                                { editor: "text", id: "", batch: "май", header: [{}, 21], width: 150 },
                                                { editor: "text", id: "", batch: "май", header: [{}, 22], width: 150 },
                                                { editor: "text", id: "", batch: "май", header: [{}, 23], width: 150 },
                                                { editor: "text", id: "", batch: "май", header: [{}, 24], width: 150 },
                                                { editor: "text", id: "", batch: "май", header: [{}, 25], width: 150 },
                                                { editor: "text", id: "", batch: "май", header: [{}, 26], width: 150 },
                                                { editor: "text", id: "", batch: "май", header: [{}, 27], width: 150 },
                                                { editor: "text", id: "", batch: "май", header: [{}, 28], width: 150 },
                                                { editor: "text", id: "", batch: "май", header: [{}, 29], width: 150 },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        //=====================================================================================================================================================

                        //Расписание===========================================================================================================================================
                        {
                            id: "super_student_schedule_datatable_tabbar",
                            rows: [
                                {
                                    view: "combo",
                                    id: "comboSchedule_teacher",
                                    placeholder: "Выберите день недели",
                                    inputWidth: 230,
                                    options: [
                                        { id: "Понедельник", value: "Понедельник" },
                                        { id: "Вторник", value: "Вторник" },
                                        { id: "Среда", value: "Среда" },
                                        { id: "Четверг", value: "Четверг" },
                                        { id: "Пятница", value: "Пятница" },
                                        { id: "Суббота", value: "Суббота" },
                                    ],
                                },

                                {
                                    view: "datatable",
                                    id: "info_schedule_teacher_datatable",
                                    css: "myStyleSchedule",
                                    editable: true,
                                    editaction: "dblclick",
                                    columns: [
                                        { editor: "text", id: "course_schedule", header: [{ text: "Предмет:", css: { "text-align": "center" } }], adjust: true },
                                        { editor: "text", id: "timeStart_schedule", header: [{ text: "Время", css: { "text-align": "center" }, colspan: 2 }, { text: "Начало:" }], adjust: true, fillspace: true },
                                        { editor: "text", id: "timeEnd_schedule", header: [{}, { text: "Конец:" }], adjust: true, fillspace: true },
                                        { editor: "text", id: "fName_schedule", header: [{ text: "Преподаватель", css: { "text-align": "center" }, colspan: 2 }, { text: "Имя:" }], adjust: true, fillspace: true },
                                        { editor: "text", id: "lName_schedule", header: [{}, { text: "Фамилия:" }], adjust: true, fillspace: true }
                                    ],
                                    // on: {
                                    // 	onCollectValues: function (id, req) {
                                    // 		if (id == "weekday") {
                                    // 			req.values = [
                                    // 				{ id: "Понедельник", value: "Понедельник" },
                                    // 				{ id: "Вторник", value: "Вторник" },
                                    // 				{ id: "Среда", value: "Среда" },
                                    // 				{ id: "Четверг", value: "Четверг" },
                                    // 				{ id: "Пятница", value: "Пятница" },
                                    // 				{ id: "Суббота", value: "Суббота" },
                                    // 			]
                                    // 		}
                                    // 	}
                                    // },
                                }
                            ]
                        },
                        //=====================================================================================================================================================

                        //Справочник учеников=============================================================================================================================
                        {
                            id: "super_student_list_tabbar",
                            cols: [
                                {
                                    rows: [
                                        {
                                            view: "tabbar",
                                            css: "myStyleWeekD",
                                            multiview: true,
                                            value: "super_group_student_tabbar",
                                            options: [
                                                { value: "Информация", id: "super_group_student_tabbar", width: 170, },
                                            ]
                                        },

                                        {
                                            cells: [
                                                {
                                                    id: "super_group_student_tabbar",
                                                    cols: [
                                                        {
                                                            view: "form",
                                                            id: "super_group_student_form",
                                                            css: "myStyleForm",
                                                            gravity: 3,
                                                            height: 575,
                                                            margin: 10,
                                                            rows: [
                                                                {
                                                                    cols: [
                                                                        {
                                                                            view: "combo",
                                                                            id: "comboFormList_teacher_info",
                                                                            placeholder: "Выберите класс",
                                                                            inputWidth: 220,
                                                                            options: [
                                                                                { id: 1, value: "1" },
                                                                                { id: 2, value: "2" },
                                                                                { id: 3, value: "3" },
                                                                                { id: 4, value: "4" },
                                                                                { id: 5, value: "5" },
                                                                                { id: 6, value: "6" },
                                                                                { id: 7, value: "7" },
                                                                                { id: 8, value: "8" },
                                                                                { id: 9, value: "9" },
                                                                                { id: 10, value: "10" },
                                                                                { id: 11, value: "11" },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    cols: [
                                                                        {
                                                                            css: "myStyleBookList",
                                                                            rows: [
                                                                                {
                                                                                    view: "toolbar",
                                                                                    css: "myStyleBookSearch",
                                                                                    height: 60,
                                                                                    elements: [

                                                                                        { view: "label", label: "Список учеников", localId: "label" },

                                                                                        {
                                                                                            view: "text",
                                                                                            id: "super_text_input_label_search_student",
                                                                                            hidden: true,
                                                                                            placeholder: "Поиск по имени"
                                                                                        },

                                                                                        {
                                                                                            view: "icon", icon: "wxi-search",
                                                                                            state: "closed", localId: "search_icon",
                                                                                            tooltip: "Поиск",
                                                                                            click: function () {
                                                                                                if (this.config.state === "closed") {
                                                                                                    this.$scope.$$("label").hide();
                                                                                                    this.$scope.$$("super_text_input_label_search_student").show();
                                                                                                    this.$scope.$$("super_text_input_label_search_student").focus();
                                                                                                    this.config.state = "open";
                                                                                                }
                                                                                                else if (this.config.state === "open") {
                                                                                                    this.$scope.$$("label").show();
                                                                                                    this.$scope.$$("super_text_input_label_search_student").hide();
                                                                                                    this.config.state = "closed";
                                                                                                }
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            view: "icon", icon: "wxi-plus-circle",
                                                                                            click: function () {
                                                                                                $$("super_add_student_window").show();
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            view: "icon", icon: "wxi-trash",
                                                                                            click: function () {
                                                                                                let selectedId = $$("super_student_list").getSelectedId();

                                                                                                if (selectedId) {
                                                                                                    $$("super_student_list").remove(selectedId);
                                                                                                } else {
                                                                                                    webix.alert("Выберите книгу для удаления");
                                                                                                }
                                                                                            }
                                                                                        },
                                                                                    ],
                                                                                },
                                                                                {
                                                                                    view: "list",
                                                                                    id: "super_student_list",
                                                                                    css: "myStyleBookList",
                                                                                    select: true,
                                                                                    height: 400,
                                                                                    width: 350,
                                                                                    template: "<strong>#fName_student# #lName_student#</strong>",
                                                                                    type: {
                                                                                        height: 70
                                                                                    },
                                                                                },
                                                                            ],
                                                                        },
                                                                        {
                                                                            width: 20,
                                                                        },
                                                                        {
                                                                            rows: [
                                                                                {
                                                                                    cols: [
                                                                                        {
                                                                                            rows: [
                                                                                                { view: "text", id: "super_fName_student_label_id", css: "myStyleLabel", label: "Имя", labelPosition: "top", name: "fName_student", },
                                                                                                { view: "text", id: "super_lName_student_label_id", css: "myStyleLabel", label: "Фамилия", labelPosition: "top", name: "lName_student", },
                                                                                                { view: "text", id: "super_birthDate_student_label_id", css: "myStyleLabel", label: "Дата Рождения", labelPosition: "top", name: "birthDay_student", },
                                                                                            ]
                                                                                        },

                                                                                        {
                                                                                            rows: [
                                                                                                { view: "text", id: "super_city_student_label_id", css: "myStyleLabel", label: "Город", labelPosition: "top", name: "city_student", },
                                                                                                { view: "text", id: "super_address_student_label_id", css: "myStyleLabel", label: "Адрес", labelPosition: "top", name: "address_student", },
                                                                                                { view: "text", id: "super_phone_student_label_id", css: "myStyleLabel", label: "Контактный телефон", labelPosition: "top", name: "phone_student", },
                                                                                                { view: "text", id: "super_email_student_label_id", css: "myStyleLabel", label: "Электронный адрес", labelPosition: "top", name: "email_student", },
                                                                                            ]
                                                                                        },
                                                                                    ]
                                                                                },
                                                                                { height: 20 },
                                                                                {
                                                                                    cols: [
                                                                                        {},
                                                                                        { view: "button", value: "Сохранить", /*click: '$$("super_add_homework_form").save()',*/ css: "myStyleSaveBtn", width: 130 },
                                                                                        {},
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },                                   
                                                                        {
                                                                            rows: [
                                                                                {
                                                                                    view: "photo",
                                                                                    name: "photo",
                                                                                    css: "form_photo",
                                                                                    width: 290,
                                                                                    height: 330,
                                                                                    borderless: true,
                                                                                },
                                                                                {
                                                                                    cols: [
                                                                                        {
                                                                                            css: "myStyleSaveBtn",
                                                                                            view: "uploader", value: "Загрузить изображение",
                                                                                            name: "files", accept: "image/png, image/gif, image/jpg",
                                                                                            //link: "mylist", upload: "https://docs.webix.com/samples/server/upload"
                                                                                        },
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                    ]
                                                                }
                                                            ]                                                           
                                                        },
                                                    ],
                                                }
                                            ],
                                        }
                                    ],
                                },
                            ]
                        },
                        //=====================================================================================================================================================

                        //Справочник учителя===================================================================================================================================
                        // {
                        //     id: "super_teacher_list_tabbar",
                        //     cols: [
                        //         {
                        //             rows: [
                        //                 {
                        //                     view: "tabbar",
                        //                     css: "myStyleWeekD",
                        //                     multiview: true,
                        //                     value: "super_information_teacher_tabbar",
                        //                     options: [
                        //                         { value: "Информация", id: "super_information_teacher_tabbar" },
                        //                     ]
                        //                 },

                        //                 {
                        //                     cells: [
                        //                         {
                        //                             id: "super_information_teacher_tabbar",
                        //                             cols: [
                        //                                 {
                        //                                     view: "form",
                        //                                     id: "super_group_teacher_form",
                        //                                     css: "myStyleForm",
                        //                                     gravity: 3,
                        //                                     height: 575,
                        //                                     margin: 10,
                        //                                     cols: [
                        //                                         {
                        //                                             rows: [
                        //                                                 {
                        //                                                     view: "toolbar",
                        //                                                     height: 60,
                        //                                                     elements: [

                        //                                                         { view: "label", label: "Список преподавателей", localId: "label" },

                        //                                                         {
                        //                                                             view: "text",
                        //                                                             id: "super_text_input_label_search_teacher",
                        //                                                             hidden: true,
                        //                                                             placeholder: "Поиск по имени"
                        //                                                         },

                        //                                                         {
                        //                                                             view: "icon", icon: "wxi-search",
                        //                                                             state: "closed", localId: "search_icon",
                        //                                                             tooltip: "Поиск",
                        //                                                             click: function () {
                        //                                                                 if (this.config.state === "closed") {
                        //                                                                     this.$scope.$$("label").hide();
                        //                                                                     this.$scope.$$("super_text_input_label_search_teacher").show();
                        //                                                                     this.$scope.$$("super_text_input_label_search_teacher").focus();
                        //                                                                     this.config.state = "open";
                        //                                                                 }
                        //                                                                 else if (this.config.state === "open") {
                        //                                                                     this.$scope.$$("label").show();
                        //                                                                     this.$scope.$$("super_text_input_label_search_teacher").hide();
                        //                                                                     this.config.state = "closed";
                        //                                                                 }
                        //                                                             }
                        //                                                         }
                        //                                                     ],
                        //                                                 },
                        //                                                 {
                        //                                                     view: "list",
                        //                                                     id: "super_teacher_list",
                        //                                                     css: "myStyleBookList",
                        //                                                     select: true,
                        //                                                     height: 455,
                        //                                                     template: "<strong>#fName_teacher# #lName_teacher#</strong>",
                        //                                                     type: {
                        //                                                         height: 70
                        //                                                     },
                        //                                                 }
                        //                                             ]
                        //                                         },
                        //                                         {
                        //                                             rows: [
                        //                                                 { view: "text", id: "super_fName_teacher_label_id_2", css: "myStyleLabel", readonly: true, label: "Имя", labelPosition: "top", name: "fName_teacher" },
                        //                                                 { view: "text", id: "super_lName_teacher_label_id_2", css: "myStyleLabel", readonly: true, label: "Фамилия", labelPosition: "top", name: "lName_teacher" },
                        //                                                 { view: "text", id: "super_birthDate_teacher_label_id_2", css: "myStyleLabel", readonly: true, label: "Дата Рождения", labelPosition: "top", name: "birthDay_teacher" },
                        //                                                 { view: "text", id: "super_course_teacher_label_id_2", css: "myStyleLabel", readonly: true, label: "Предмет", labelPosition: "top", name: "course_teacher" },


                        //                                             ]
                        //                                         },

                        //                                         {
                        //                                             rows: [
                        //                                                 { view: "text", id: "super_city_teacher_label_id_2", css: "myStyleLabel", readonly: true, label: "Город", labelPosition: "top", name: "city_teacher" },
                        //                                                 { view: "text", id: "super_address_teacher_label_id_2", css: "myStyleLabel", readonly: true, label: "Адрес", labelPosition: "top", name: "address_teacher" },
                        //                                                 { view: "text", id: "super_phone_teacher_label_id_2", css: "myStyleLabel", readonly: true, label: "Контактный телефон", labelPosition: "top", name: "phone_teacher" },
                        //                                                 { view: "text", id: "super_email_teacher_label_id_2", css: "myStyleLabel", readonly: true, label: "Электронный адрес", labelPosition: "top", name: "email_teacher" },
                        //                                             ]
                        //                                         },

                        //                                         {
                        //                                             view: "photo",
                        //                                             name: "photo",
                        //                                             css: "form_photo",
                        //                                             width: 250,
                        //                                             height: 330,
                        //                                             borderless: true,
                        //                                         },
                        //                                     ]
                        //                                 },
                        //                             ],
                        //                         },
                        //                     ]
                        //                 }
                        //             ]
                        //         },
                        //     ]
                        // }
                        //=====================================================================================================================================================
                    ]
                },
            ]
        }
    }
    init() {
        this.HomeWorkTeacherView = this.ui(HomeWorkTeacherView);

        this.AddStudentView = this.ui(AddStudentView);

        $$("dMonday_teacher_tabbar_dataview").sync(diaryDataMon);

        $$("dTuesday_teacher_tabbar_dataview").sync(diaryDataTue);

        $$("dWednesday_teacher_tabbar_dataview").sync(diaryDataWed);

        $$("dThursday_teacher_tabbar_dataview").sync(diaryDataThur);

        $$("dFriday_teacher_tabbar_dataview").sync(diaryDataFri);

        $$("dSaturday_teacher_tabbar_dataview").sync(diaryDataSat);




        $$("quarter1_teacher_tabbar_datatable").sync(journalData1);
        $$("quarter1_teacher_tabbar_datatable").registerFilter($$("comboGradeList_teacher"), { columnId: "course_journal" }, {
            getValue: function (obj) {
                return obj.getValue();
            }
        });
        $$("comboGradeList_teacher").attachEvent("onChange", function () {
            $$("quarter1_teacher_tabbar_datatable").filterByAll();
        });


        $$("quarter2_teacher_tabbar_datatable").sync(journalData2);
        $$("quarter2_teacher_tabbar_datatable").registerFilter($$("comboGradeList_teacher"), { columnId: "course_journal" }, {
            getValue: function (obj) {
                return obj.getValue();
            }
        });
        $$("comboGradeList_teacher").attachEvent("onChange", function () {
            $$("quarter2_teacher_tabbar_datatable").filterByAll();
        });


        $$("quarter3_teacher_tabbar_datatable").sync(journalData3);
        $$("quarter3_teacher_tabbar_datatable").registerFilter($$("comboGradeList_teacher"), { columnId: "course_journal" }, {
            getValue: function (obj) {
                return obj.getValue();
            }
        });
        $$("comboGradeList_teacher").attachEvent("onChange", function () {
            $$("quarter3_teacher_tabbar_datatable").filterByAll();
        });


        $$("quarter4_teacher_tabbar_datatable").sync(journalData4);
        $$("quarter4_teacher_tabbar_datatable").registerFilter($$("comboGradeList_teacher"), { columnId: "course_journal" }, {
            getValue: function (obj) {
                return obj.getValue();
            }
        });
        $$("comboGradeList_teacher").attachEvent("onChange", function () {
            $$("quarter4_teacher_tabbar_datatable").filterByAll();
        });


        $$("info_schedule_teacher_datatable").sync(scheduleData);
        $$("info_schedule_teacher_datatable").registerFilter($$("comboSchedule_teacher"), { columnId: "weekday_schedule" }, {
            getValue: function (obj) {
                return obj.getValue();
            }
        });
        $$("comboSchedule_teacher").attachEvent("onChange", function () {
            $$("info_schedule_teacher_datatable").filterByAll();
        });



        $$("super_student_list").sync(classmatesData);
        $$("super_group_student_form").bind("super_student_list");
        //добавить фильтрацию


        // $$("super_teacher_list").sync(teacherDiaryData);
        // $$("super_group_teacher_form").bind("super_teacher_list");
		//добавить фильтрацию
    }
}