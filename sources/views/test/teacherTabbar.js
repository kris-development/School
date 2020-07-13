import { JetView, plugins } from "webix-jet";
import { teacherData } from "models/user_db";
import "webix/photo";
import "webix/tinymce/tinymce";


export default class TeacherTabbarView extends JetView {
    config() {

        return {
            rows: [
                { template: "<b>Данные преподавателей</b><br><br>", height: 30 },
                {
                    cols: [
                        {
                            rows: [
                                {
                                    view: "tabbar",
                                    id: "teacherTB",
                                    multiview: true,
                                    options: [
                                        { value: "Информация", id: "teacherTabbar1", width: 170, },
                                    ]
                                },

                                {
                                    cells: [
                                        {
                                            view: "form",
                                            id: "teacherTabbar1",
                                            rows: [
                                                {
                                                    view: "form",
                                                    id: "teacherForm",
                                                    gravity: 3,
                                                    minWidth: 200,
                                                    margin: 10,
                                                    cols: [
                                                        {
                                                            rows: [
                                                                { view: "text", id: "fName(id)", label: "Имя", labelPosition: "top", name: "fName", placeholder: "Введите имя" },
                                                                { view: "text", id: "lName(id)", label: "Фамилия", labelPosition: "top", name: "lName", placeholder: "Введите фамилию" },
                                                                { view: "datepicker", id: "birthDate(id)", label: "Дата Рождения", labelPosition: "top", name: "", },
                                                                { view: "text", id: "position(id)", label: "Должность", labelPosition: "top", name: "position", placeholder: "" },
                                                                { view: "text", id: "course(id)", label: "Предмет", labelPosition: "top", name: "course", placeholder: "Введите предмет" },


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
                                                                this.$$("notesBlock").setValue("");
                                                                this.$$("fName(id)").setValue("");
                                                                this.$$("lName(id)").setValue("");
                                                                this.$$("birthDate(id)").setValue("");
                                                                this.$$("position(id)").setValue("");
                                                                this.$$("course(id)").setValue("");
                                                                this.$$("city(id)").setValue("");
                                                                this.$$("address(id)").setValue("");
                                                                this.$$("phone(id)").setValue("");
                                                                this.$$("email(id)").setValue("");
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
                                        },
                                    ]
                                }
                            ]
                        },

                        {
                            rows: [
                                {
                                    view: "toolbar",
                                    width: 240,
                                    elements: [

                                        { view: "label", label: "Список преподавателей", localId: "label" },

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
                                    id: "teacherList",
                                    width: 210,
                                    select: true,
                                    template: "<strong>#fName# #lName#</strong> <div style='padding-left:0px'> Предмет: #course# </div>",
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
        $$("teacherList").sync(teacherData);
        $$("teacherForm").bind("teacherList");

        $$("list_input").attachEvent("onTimedKeyPress", function () {
            let value = this.getValue().toLowerCase();
            $$("teacherList").filter(function (obj) {
                return obj.fName.toLowerCase().indexOf(value) !== -1;  
            })
        });       
    }
}