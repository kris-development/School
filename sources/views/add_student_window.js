import { JetView } from "webix-jet";


import "webix/photo";


export default class AddStudentView extends JetView {
    config() {
        webix.CustomScroll.init();
        return {
            view: "window",
            id: "super_add_student_window",
            head: {
                cols: [
                    { template: "Добавление литературы", type: "header", borderless: true },
                    {
                        view: "icon", icon: "wxi-close", click: function () {
                            $$("super_add_student_window").hide();
                        }
                    },
                ]
            },
            css: "myStyleHeader",
            position: "center",
            height: 600,
            width: 900,
            move: true,
            modal: true,
            on: {
                "onBeforeShow": function () {
                    $$("super_add_student_window").setPosition(317, 160);
                    $$("super_add_student_window").resize();
                }
            },
            body: {
                view: "form",
                id: "super_add_student_form",
                css: "myStyleForm",
                width: 900,
                rows: [
                    {
                        cols: [
                            {
                                cols: [
                                    {
                                        rows: [
                                            { view: "text", css: "myStyleLabel", label: "Имя", labelPosition: "top", name: "fName_student", width: 250 },
                                            { view: "text", css: "myStyleLabel", label: "Фамилия", labelPosition: "top", name: "lName_student", width: 250 },
                                            { view: "text", css: "myStyleLabel", label: "Дата Рождения", labelPosition: "top", name: "birthDay_student", width: 250 },
                                        ]
                                    },

                                    {
                                        rows: [
                                            { view: "text", css: "myStyleLabel", label: "Город", labelPosition: "top", name: "city_student", width: 250 },
                                            { view: "text", css: "myStyleLabel", label: "Адрес", labelPosition: "top", name: "address_student", width: 250 },
                                            { view: "text", css: "myStyleLabel", label: "Контактный телефон", labelPosition: "top", name: "phone_student", width: 250 },
                                            { view: "text", css: "myStyleLabel", label: "Электронный адрес", labelPosition: "top", name: "email_student", width: 250 },
                                        ]
                                    },
                                ]
                            },
                            {},
                            {
                                rows: [
                                    {
                                        view: "photo",
                                        name: "photo",
                                        css: "form_photo",
                                        width: 250,
                                        height: 250,
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
                    },
                    { height: 20 },
                    {
                        cols: [
                            {},
                            { view: "button", value: "Добавить", /*click: '$$("super_add_homework_form").save()',*/ css: "myStyleSaveBtn", width: 130 },
                            {},
                        ]
                    }
                ],
            }
        }
    }
    init() {

    }
}