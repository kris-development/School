import { JetView, plugins } from "webix-jet";
import { studentData } from "models/user_db";
import "webix/photo";
import "webix/tinymce/tinymce";


export default class StudentTabbarView extends JetView {
    config() {

        return {
            rows: [
                { template: "<b>Данные учеников</b><br><br>", height: 30 },
                {
                    cols: [
                        {
                            rows: [
                                {
                                    view: "tabbar",
                                    id: "studentTB",
                                    multiview: true,
                                    options: [
                                        { value: "Информация", id: "studentTabbar1", width: 170, },
                                    ]
                                },

                                {
                                    cells: [
                                        {
                                            view: "form",
                                            id: "studentTabbar1",
                                            rows: [
                                                {
                                                    view: "form",
                                                    id: "studentForm",
                                                    gravity: 3,
                                                    minWidth: 200,
                                                    margin: 10,
                                                    cols: [
                                                        {
                                                            rows: [
                                                                { view: "text", id: "fName(id)", label: "Имя", labelPosition: "top", name: "fName", placeholder: "Введите имя" },
                                                                { view: "text", id: "lName(id)", label: "Фамилия", labelPosition: "top", name: "lName", placeholder: "Введите фамилию" },
                                                                { view: "datepicker", id: "birthDate(id)", label: "Дата Рождения", labelPosition: "top", name: "", },
                                                                { view: "text", id: "form(id)", label: "Класс", labelPosition: "top", name: "form", placeholder: "" },
                                                                { view: "text", id: "formMaster(id)", label: "Классный руководитель", labelPosition: "top", name: "", placeholder: "" },
                                                            ]
                                                        },

                                                        {
                                                            rows: [
                                                                { view: "text", id: "city(id)", label: "Город", labelPosition: "top", name: "", placeholder: "Введите город" },
                                                                { view: "text", id: "address(id)", label: "Адрес", labelPosition: "top", name: "", placeholder: "Введите адрес" },
                                                                { view: "text", id: "phone(id)", label: "Контактный телефон", labelPosition: "top", name: "", placeholder: "Введите телефон" },
                                                                { view: "text", id: "email(id)", label: "Электронный адрес", labelPosition: "top", name: "", placeholder: "Введите email" },
                                                            ]
                                                        },

                                                        {
                                                            view: "photo",
                                                            name: "photo",
                                                            css: "form_photo",
                                                            width: 250,
                                                            height: 330,
                                                            borderless: true,
                                                        },
                                                    ]
                                                },

                                                {
                                                    view: "forminput",
                                                    labelWidth: 0,
                                                    body: {
                                                        rows: [
                                                            {
                                                                id: "notesBlock",
                                                                view: "tinymce-editor",
                                                                borderless: true,
                                                                name: "notes",
                                                                localId: "notes",
                                                                config: {
                                                                    menubar: false,
                                                                    plugins: "link",
                                                                    toolbar: "fontsizeselect | bold italic underline | alignleft aligncenter alignright alignjustify | link",
                                                                    content_style: "* { color:#475466; font-family:Roboto,sans-serif; font-size:15px; }"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },

                                                {
                                                    margin: 10,
                                                    cols: [
                                                        {},

                                                        {
                                                            view: "button", value: "Очистить", autowidth: true,
                                                            click: () => {
                                                                $$("notesBlock").setValue("");
                                                                $$("fName(id)").setValue("");
                                                                $$("lName(id)").setValue("");
                                                                $$("birthDate(id)").setValue("");
                                                                $$("form(id)").setValue("");
                                                                $$("formMaster(id)").setValue("");
                                                                $$("city(id)").setValue("");
                                                                $$("address(id)").setValue("");
                                                                $$("phone(id)").setValue("");
                                                                $$("email(id)").setValue("");
                                                            },
                                                            tooltip: "Нажмите чтобы очистить поля"
                                                        },

                                                        {
                                                            view: "button", value: "Сохранить", type: "form", autowidth: true,
                                                            tooltip: "Сохранить изменения",
                                                            click: () => {
                                                                //
                                                            }
                                                        }
                                                    ]
                                                }
                                            ],
                                        }
                                    ],
                                }
                            ],
                        },

                        {
                            rows: [
                                {
                                    view: "toolbar",
                                    width: 240,
                                    elements: [

                                        { view: "label", label: "Список учеников", localId: "label" },

                                        {
                                            view: "text",
                                            id: "list_input",
                                            css: "fltr",
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
                                                    this.$scope.$$("list_input").show();
                                                    this.$scope.$$("list_input").focus();
                                                    this.config.state = "open";
                                                }
                                                else if (this.config.state === "open") {
                                                    this.$scope.$$("label").show();
                                                    this.$scope.$$("list_input").hide();
                                                    this.config.state = "closed";
                                                }
                                            }
                                        }
                                    ],
                                    height: 42,
                                },

                                {
                                    view: "list",
                                    id: "studentList",
                                    width: 210,
                                    select: true,
                                    template: "<strong>#fName# #lName#</strong> <div style='padding-left:0px'> Класс: #form# </div>",
                                    type: {
                                        height: 60
                                    },
                                }
                            ],
                        },
                    ]
                }
            ]
        };
    }
    init() {
        $$("studentList").sync(studentData);
        $$("studentForm").bind("studentList");

        $$("list_input").attachEvent("onTimedKeyPress", function () {
            let value = this.getValue().toLowerCase();
            $$("studentList").filter(function (obj) {
                return obj.fName.toLowerCase().indexOf(value) !== -1;
            })
        });
    }
}