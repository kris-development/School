import { JetView } from "webix-jet";
import { diaryDataMon } from "models/diary_model";


import "webix/photo";
import "webix/tinymce/tinymce";


export default class HomeWorkView extends JetView {
    config() {
        // if (!webix.env.touch && webix.env.scrollSize)
            webix.CustomScroll.init();
        return {
            view: "window",
            id: "homework_window",
            head: {
                cols: [
                    { template: "Домашнее задание", type: "header", borderless: true },
                    {
                        view: "icon", icon: "mdi mdi-fullscreen", click: function () {
                            if ($$("homework_window").config.fullscreen) {
                                webix.fullscreen.exit();
                                this.define({ icon: "mdi mdi-fullscreen" });
                                $$("homework_window").setPosition(267, 27);
                                $$("homework_window").resize();
                            } else {
                                webix.fullscreen.set($$("homework_window"));
                                this.define({ icon: "mdi mdi-fullscreen-exit" });
                                $$("homework_window").setPosition(0, 0);
                                $$("homework_window").resize();
                            }
                            this.refresh();
                        }
                    },
                    {
                        view: "icon", icon: "wxi-close", click: function () {
                            $$("homework_window").hide();
                        }
                    }
                ]
            },
            css: "myStyleHeader",
            position: "center",
            height: 700,
            width: 1000,
            move: true,
            modal: true,
            on: {
                "onBeforeShow": function () {
                    this.getBody().queryView("tabbar").setValue("task_information_datatable_tabbar");
                    if ($$("homework_window").config.fullscreen) {
                        $$("homework_window").setPosition(0, 0);
                        $$("homework_window").resize();
                    } else {
                        $$("homework_window").setPosition(267, 27);
                        $$("homework_window").resize();
                    }                 
                }
            },
            body: {
                rows: [
                    {
                        view: "tabbar",
                        multiview: true,
                        css: "myStyleInfoWinTabbar",
                        value: "task_information_datatable_tabbar",
                        options: [
                            { value: "Задание", id: "task_information_datatable_tabbar" },
                            { value: "Материал", id: "material_information_tabbar" },
                            { value: "Справочник", id: "additional_information_tabbar" },
                        ]
                    },
                    {
                        animate: {
                            type: "slide",
                            direction: "top"
                        },
                        fitBiggest: true,
                        cells: [
                            {
                                view: "datatable",
                                id: "task_information_datatable_tabbar",
                                css: "myStyleDataTable",
                                fixedRowHeight: false,
                                scrollX: false,
                                rowLineHeight: 25, rowHeight: 25,
                                columns: [
                                    { id: "hw_diary", header: "Задание", fillspace: true },
                                    { id: "hw_diary_status", header: "Статус", width: 160 },
                                    { id: "grade", header: "Оценка", },
                                    { id: "deadline", map: "(date)#deadline#", header: "Срок", width: 130 },
                                ],
                                on: {
                                    "onresize": function () {
                                        $$("task_information_datatable_tabbar").adjustRowHeight("hw_diary");
                                    }    
                                }, 
                            },
                            {
                                id: "material_information_tabbar",
                                rows: [
                                    {
                                        view: "tabbar",
                                        // id: "",
                                        multiview: true,
                                        css: "myStyleMaterialBtn",
                                        value: "reading_material_tabbar",
                                        options: [
                                            { value: "Необходимая литература", id: "reading_material_tabbar" },
                                            { value: "Видео материал", id: "video_material_accordion_tabbar" }
                                        ]
                                    },
                                    {
                                        cells: [
                                            {
                                                id: "reading_material_tabbar",
                                                cols: [
                                                    {
                                                        view: "form",
                                                        id: "material_form",
                                                        css: "myStyleForm",
                                                        gravity: 3,
                                                        height: 575,
                                                        margin: 10,
                                                        cols: [
                                                            {
                                                                rows: [
                                                                    {
                                                                        view: "toolbar",
                                                                        css: "myStyleBookSearch",
                                                                        height: 60,
                                                                        elements: [

                                                                            { view: "label", label: "Список книг", localId: "label" },

                                                                            {
                                                                                view: "text",
                                                                                id: "book_search_label",
                                                                                hidden: true,
                                                                                placeholder: "Поиск",
                                                                                css: "myStyleBookSearch"
                                                                            },

                                                                            {
                                                                                view: "icon", icon: "wxi-search",
                                                                                state: "closed", localId: "search_icon",
                                                                                tooltip: "Поиск",
                                                                                click: function () {
                                                                                    if (this.config.state === "closed") {
                                                                                        this.$scope.$$("label").hide();
                                                                                        this.$scope.$$("book_search_label").show();
                                                                                        this.$scope.$$("book_search_label").focus();
                                                                                        this.config.state = "open";
                                                                                    }
                                                                                    else if (this.config.state === "open") {
                                                                                        this.$scope.$$("label").show();
                                                                                        this.$scope.$$("book_search_label").hide();
                                                                                        this.config.state = "closed";
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                    },
                                                                    {
                                                                        view: "list",
                                                                        id: "material_list",
                                                                        select: true,
                                                                        height: 472,
                                                                        css: "myStyleBookList",
                                                                        template: "<strong>#author#</strong><div>Название: #book_title#</div>",
                                                                        type: {
                                                                            height: 70
                                                                        },
                                                                        data: diaryDataMon,
                                                                        // ready: function () {
                                                                        //     $$("material_list").select($$("material_list").getFirstId()); //Доделать функцию
                                                                        // }
                                                                    }
                                                                ]
                                                            }, 
                                                            {
                                                                rows: [
                                                                    { view: "text", css: "myStyleLabel", readonly: true, label: "Автор", labelPosition: "top", name: "author" },
                                                                    { view: "text", css: "myStyleLabel", readonly: true, label: "Название книги", labelPosition: "top", name: "book_title" },
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
                                                    }
                                                ]
                                            },
                                            {
                                                id: "video_material_accordion_tabbar",
                                                view: "accordion",
                                                css: "myStyleVideoMaterial",
                                                type: "space",
                                                rows: [
                                                    {
                                                        view: "accordionitem",
                                                        header: "Видео-урок 1",
                                                        headerHeight: 50,
                                                        headerAlt: "Видео-урок 1 скрыт",
                                                        body: {
                                                            view: "video",
                                                            src: [
                                                                "http://cdn.webix.com/demodata/movie.ogv",
                                                                "http://cdn.webix.com/demodata/movie.mp4"
                                                            ],
                                                            autoplay: false,
                                                        }
                                                    },
                                                    {
                                                        view: "accordionitem",
                                                        header: "Видео-урок 2",
                                                        headerAlt: "Видео-урок 2 скрыт",
                                                        body: {
                                                            view: "video",
                                                            src: [
                                                                "http://cdn.webix.com/demodata/movie.ogv",
                                                                "http://cdn.webix.com/demodata/movie.mp4"
                                                            ],
                                                            autoplay: false,
                                                        },
                                                        collapsed: true
                                                    },
                                                    {
                                                        view: "accordionitem",
                                                        header: "Видео-урок 3",
                                                        headerAlt: "Видео-урок 3 скрыт",
                                                        body: {
                                                            view: "video",
                                                            src: [
                                                                "http://cdn.webix.com/demodata/movie.ogv",
                                                                "http://cdn.webix.com/demodata/movie.mp4"
                                                            ],
                                                            autoplay: false,
                                                        },
                                                        collapsed: true
                                                    },
                                                    {
                                                        view: "accordionitem",
                                                        header: "Видео-урок 4",
                                                        headerAlt: "Видео-урок 4 скрыт",
                                                        body: {
                                                            view: "video",
                                                            src: [
                                                                "http://cdn.webix.com/demodata/movie.ogv",
                                                                "http://cdn.webix.com/demodata/movie.mp4"
                                                            ],
                                                            autoplay: false,
                                                        },
                                                        collapsed: true
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                id: "additional_information_tabbar"
                            }
                        ]
                    }
                ]
            }
        }     
    }

    init() {
        $$("task_information_datatable_tabbar").sync(diaryDataMon);

        $$("material_list").sync(diaryDataMon);
        $$("material_form").bind("material_list");
        $$("book_search_label").attachEvent("onTimedKeyPress", function () {
            let value = $$("book_search_label").getValue().toLowerCase();
            let __lastId = $$("homework_window").__lastId;
            if (value) {
                $$("material_list").filter(function (obj) {
                    return obj.author.toLowerCase().indexOf(value) !== -1;
                });
            } else {
                $$("material_list").filter(obj => obj.id == __lastId);
            }
        });
    }
}