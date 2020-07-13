import { JetView } from "webix-jet";


import "webix/photo";
import "webix/tinymce/tinymce";


export default class AddHomeWorkView extends JetView {
    config() {
        webix.CustomScroll.init();
        return {
            view: "window",
            id: "super_add_homework_window",
            head: {
                cols: [
                    { template: "Добавление домашнего задания", type: "header", borderless: true },
                    {
                        view: "icon", icon: "mdi mdi-fullscreen", click: function () {
                            if ($$("super_add_homework_window").config.fullscreen) {
                                webix.fullscreen.exit();
                                this.define({ icon: "mdi mdi-fullscreen" });
                                $$("super_add_homework_window").setPosition(267, 27);
                                $$("super_add_homework_window").resize();
                            } else {
                                webix.fullscreen.set($$("super_add_homework_window"));
                                this.define({ icon: "mdi mdi-fullscreen-exit" });
                                $$("super_add_homework_window").setPosition(0, 0);
                                $$("super_add_homework_window").resize();
                            }
                            this.refresh();
                        }
                    },
                    {
                        view: "icon", icon: "wxi-close", click: function () {
                            $$("super_add_homework_window").hide();
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

                    if ($$("super_add_homework_window").config.fullscreen) {
                        $$("super_add_homework_window").setPosition(0, 0);
                        $$("super_add_homework_window").resize();
                    } else {
                        $$("super_add_homework_window").setPosition(317, 77);
                        $$("super_add_homework_window").resize();
                    }
                }
            },
            body: {
                view: "form",
                id: "super_add_homework_form",
                css: "myStyleForm",
                width: 900,
                rows: [
                    { view: "datepicker", id: "", css: "myStyleLabel", label: "Срок:", labelPosition: "top", name: "deadline", width: 150 },
                    { view: "tinymce-editor", id: "", css: "myStyleLabel", label: "Задания", labelPosition: "top", name: "hw_diary" },
                    {
                        cols: [
                            {},
                            { view: "button", value: "Сохранить", /*click: '$$("super_add_homework_form").save()',*/ css: "myStyleSaveBtn", width: 130 },
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