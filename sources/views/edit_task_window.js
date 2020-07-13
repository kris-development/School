import { JetView } from "webix-jet";


import "webix/photo";
import "webix/tinymce/tinymce";


export default class EditHomeWorkView extends JetView {
    config() {
        webix.CustomScroll.init();
        return {
            view: "window",
            id: "super_edit_homework_window",
            head: {
                cols: [
                    { template: "Добавление домашнего задания", type: "header", borderless: true },
                    {
                        view: "icon", icon: "mdi mdi-fullscreen", click: function () {
                            if ($$("super_edit_homework_window").config.fullscreen) {
                                webix.fullscreen.exit();
                                this.define({ icon: "mdi mdi-fullscreen" });
                                $$("super_edit_homework_window").setPosition(267, 27);
                                $$("super_edit_homework_window").resize();
                            } else {
                                webix.fullscreen.set($$("super_edit_homework_window"));
                                this.define({ icon: "mdi mdi-fullscreen-exit" });
                                $$("super_edit_homework_window").setPosition(0, 0);
                                $$("super_edit_homework_window").resize();
                            }
                            this.refresh();
                        }
                    },
                    {
                        view: "icon", icon: "wxi-close", click: function () {
                            $$("super_edit_homework_window").hide();
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

                    if ($$("super_edit_homework_window").config.fullscreen) {
                        $$("super_edit_homework_window").setPosition(0, 0);
                        $$("super_edit_homework_window").resize();
                    } else {
                        $$("super_edit_homework_window").setPosition(317, 77);
                        $$("super_edit_homework_window").resize();
                    }
                }
            },
            body: {
                view: "form",
                id: "super_edit_homework_form",
                css: "myStyleForm",
                width: 900,
                rows: [
                    { view: "datepicker", id: "", css: "myStyleLabel", label: "Срок:", labelPosition: "top", name: "deadline", width: 150 },
                    { 
                        view: "combo",
                        options: [
                            { id: 1, value: 2 },
                            { id: 2, value: 3 },
                            { id: 3, value: 4 },
                            { id: 4, value: 5 },
                        ], 
                        id: "", css: "myStyleLabel", label: "Оценка:", labelPosition: "top", name: "grade", width: 150
                    },
                    {
                        view: "combo",
                        options: [
                            { id: 1, value: "Выполнено" },
                            { id: 2, value: "Не выполнено" },
                        ], 
                        id: "", css: "myStyleLabel", label: "Статус:", labelPosition: "top", name: "hw_diary_status", width: 150
                    },
                    { view: "tinymce-editor", id: "", css: "myStyleLabel", label: "Задания", labelPosition: "top", name: "hw_diary" },
                    {
                        cols: [
                            {},
                            { view: "button", value: "Сохранить", /*click: '$$("addHwForm").save()',*/ css: "myStyleSaveBtn", width: 130 },
                            {},
                        ]
                    }
                ]
            }
        }
    }
    init() {
        
    }
}