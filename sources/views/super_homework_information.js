import { JetView } from "webix-jet";
import { diaryDataMon } from "models/diary_model";

import AddHomeWorkView from "views/add_task_window";
import EditHomeWorkView from "views/edit_task_window";

import AddMaterialView from "views/add_material_window";


import "webix/photo";
import "webix/tinymce/tinymce";


export default class HomeWorkTeacherView extends JetView {
    config() {
        // if (!webix.env.touch && webix.env.scrollSize)
        webix.CustomScroll.init();

        let counter = 0;
        return {
            view: "window",
            id: "super_homework_window",
            head: {
                cols: [
                    { template: "Домашнее задание", type: "header", borderless: true },
                    {
                        view: "icon", icon: "mdi mdi-fullscreen", click: function () {
                            if ($$("super_homework_window").config.fullscreen) {
                                webix.fullscreen.exit();
                                this.define({ icon: "mdi mdi-fullscreen" });
                                $$("super_homework_window").setPosition(267, 27);
                                $$("super_homework_window").resize();
                            } else {
                                webix.fullscreen.set($$("super_homework_window"));
                                this.define({ icon: "mdi mdi-fullscreen-exit" });
                                $$("super_homework_window").setPosition(0, 0);
                                $$("super_homework_window").resize();
                            }
                            this.refresh();
                        }
                    },
                    {
                        view: "icon", icon: "wxi-close", click: function () {
                            $$("super_homework_window").hide();
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
                    this.getBody().queryView("tabbar").setValue("super_task_information_tabbar");
                    if ($$("super_homework_window").config.fullscreen) {
                        $$("super_homework_window").setPosition(0, 0);
                        $$("super_homework_window").resize();
                    } else {
                        $$("super_homework_window").setPosition(267, 27);
                        $$("super_homework_window").resize();
                    }
                }
            },
            body: {
                rows: [
                    {
                        view: "tabbar",
                        multiview: true,
                        css: "myStyleInfoWinTabbar",
                        value: "super_task_information_tabbar",
                        options: [
                            { value: "Задание", id: "super_task_information_tabbar" },
                            { value: "Материал", id: "super_material_information_tabbar" },
                            { value: "Справочник", id: "super_additional_information_tabbar" },
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
                                id: "super_task_information_tabbar",
                                rows: [
                                    {
                                        view: "toolbar",
                                        css: "myStyleDTableTeacher",
                                        height: 45,
                                        elements: [
                                            {},
                                            {
                                                view: "icon", icon: "wxi-plus-circle",
                                                click: function () {
                                                    $$("super_add_homework_window").show();
                                                }
                                            },
                                            {
                                                view: "icon", icon: "wxi-pencil",
                                                click: function () {
                                                    let selectedId = $$("super_task_information_datatable").getSelectedId();
                                                    let item = $$("super_task_information_datatable").getItem(selectedId);

                                                    if (selectedId) {
                                                        $$("super_edit_homework_window").show();
                                                        $$("super_edit_homework_form").elements["deadline"].setValue(item.deadline);
                                                        $$("super_edit_homework_form").elements["hw_diary"].setValue(item.hw_diary);
                                                    } else {
                                                        webix.alert("Выберите домашнее задание для редактирования");
                                                    }
                                                }
                                            },
                                            { 
                                                view: "icon", icon: "wxi-trash", 
                                                click: function () {
                                                    let selectedId = $$("super_task_information_datatable").getSelectedId();
                            
                                                    // await webix.ajax().del(`http://localhost:1337/question/${selectedId}`);

                                                    if (selectedId) {
                                                        $$("super_task_information_datatable").remove(selectedId);
                                                    } else {
                                                        webix.alert("Выберите домашнее задание для удаления");
                                                    }

                                                    // $$("super_task_information_datatable").clearAll();

                                                    // await $$("super_task_information_datatable").load("http://localhost:1337/question");

                                                    // $$("super_task_information_datatable").adjustRowHeight("hw_diary");
                                                    // $$("super_task_information_datatable").refresh();	
                                                } 
                                            }
                                        ]
                                    },
                                    {
                                        view: "datatable",
                                        id: "super_task_information_datatable",
                                        css: "myStyleDTableTeacher",
                                        select: true,
                                        fixedRowHeight: false,
                                        scrollX: false,
                                        rowLineHeight: 25, rowHeight: 25,
                                        editable: true,
                                        columns: [
                                            { id: "hw_diary", header: "Задание", fillspace: true },
                                            { id: "hw_diary_status", header: "Статус", width: 160 },
                                            { id: "grade", header: "Оценка", },
                                            { id: "deadline", map: "(date)#deadline#", header: "Срок", width: 130, },
                                        ],
                                        on: {
                                            "onresize": function () {
                                                $$("super_task_information_datatable").adjustRowHeight("hw_diary");
                                            }
                                        },
                                    }
                                ],
                            },
                            {
                                id: "super_material_information_tabbar",
                                rows: [
                                    {
                                        view: "tabbar",
                                        // id: "",
                                        multiview: true,
                                        css: "myStyleMaterialBtn",
                                        value: "super_reading_material_tabbar",
                                        options: [
                                            { value: "Необходимая литература", id: "super_reading_material_tabbar" },
                                            { value: "Видео материал", id: "super_video_material_tabbar" }
                                        ]
                                    },
                                    {
                                        cells: [
                                            {
                                                id: "super_reading_material_tabbar",    
                                                rows: [
                                                    {
                                                        view: "form",
                                                        id: "super_material_form",
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
                                                                                id: "super_book_search_label",
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
                                                                                        this.$scope.$$("super_book_search_label").show();
                                                                                        this.$scope.$$("super_book_search_label").focus();
                                                                                        this.config.state = "open";
                                                                                    }
                                                                                    else if (this.config.state === "open") {
                                                                                        this.$scope.$$("label").show();
                                                                                        this.$scope.$$("super_book_search_label").hide();
                                                                                        this.config.state = "closed";
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                view: "icon", icon: "wxi-plus-circle",
                                                                                click: function () {
                                                                                    $$("super_add_material_window").show();
                                                                                }
                                                                            },
                                                                            {
                                                                                view: "icon", icon: "wxi-trash",
                                                                                click: function () {
                                                                                    let selectedId = $$("super_material_list").getSelectedId();

                                                                                    if (selectedId) {
                                                                                        $$("super_material_list").remove(selectedId);
                                                                                    } else {
                                                                                        webix.alert("Выберите книгу для удаления");
                                                                                    }
                                                                                }
                                                                            },
                                                                        ],
                                                                    },
                                                                    {
                                                                        view: "list",
                                                                        id: "super_material_list",
                                                                        select: true,
                                                                        height: 472,
                                                                        css: "myStyleBookList",
                                                                        template: "<strong>#author#</strong><div>Название: #book_title#</div>",
                                                                        type: {
                                                                            height: 70
                                                                        },
                                                                        data: diaryDataMon,
                                                                        // ready: function () {
                                                                        //     $$("materialList_id").select($$("materialList_id").getFirstId()); //Доделать функцию
                                                                        // }
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                rows: [
                                                                    { view: "text", css: "myStyleLabel", label: "Автор", labelPosition: "top", name: "author" },
                                                                    { view: "text", css: "myStyleLabel", label: "Название книги", labelPosition: "top", name: "book_title" },
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
                                                                        width: 250,
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
                                                    },
                                                ]
                                            },
                                            {
                                                id: "super_video_material_tabbar",
                                                rows: [
                                                    {
                                                        view: "toolbar",
                                                        css: "myStyleDTableTeacher",
                                                        height: 45,
                                                        elements: [
                                                            {},
                                                            {
                                                                view: "icon", icon: "wxi-plus-circle",
                                                                click: function () {
                                                                    counter++;
                                                                    $$("super_video_material_accordion").addView({
                                                                        view: "accordionitem",
                                                                        header: "Видео-урок "+counter,
                                                                        headerHeight: 50,
                                                                        body: {
                                                                            view: "video",
                                                                            minHeight: 350,
                                                                            src: [
                                                                                "http://cdn.webix.com/demodata/movie.ogv",
                                                                                "http://cdn.webix.com/demodata/movie.mp4"
                                                                            ],
                                                                            autoplay: false,
                                                                        },
                                                                        collapsed: true,
                                                                    });
                                                                }
                                                            },
                                                            {
                                                                view: "icon", icon: "wxi-pencil",
                                                                click: function () {
                                                                    // let selectedId = $$("super_task_information_datatable").getSelectedId();
                                                                    // let item = $$("super_task_information_datatable").getItem(selectedId);

                                                                    // if (selectedId) {
                                                                    //     $$("super_edit_homework_window").show();
                                                                    //     $$("super_edit_homework_form").elements["deadline"].setValue(item.deadline);
                                                                    //     $$("super_edit_homework_form").elements["hw_diary"].setValue(item.hw_diary);
                                                                    // } else {
                                                                    //     webix.alert("Выберите домашнее задание для редактирования");
                                                                    // }
                                                                }
                                                            },
                                                            {
                                                                view: "icon", icon: "wxi-trash",
                                                                click: function () {
                                                                    if ($$("super_video_material_accordion").getChildViews().length) {
                                                                        let lastID = $$("super_video_material_accordion").getChildViews().slice(-1)[0].config.id;
                                                                        $$("super_video_material_accordion").removeView(lastID);
                                                                    }
                                                                    else webix.alert("Список пуст !");
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        view: "scrollview",
                                                        body: {
                                                            id: "super_video_material_accordion",
                                                            view: "accordion",
                                                            css: "myStyleVideoMaterial",
                                                            type: "space",
                                                            rows: [
                                                                { gravity: 0.00001 },
                                                                // {
                                                                //     view: "accordionitem",
                                                                //     header: "Видео-урок 1",
                                                                //     headerHeight: 50,
                                                                //     body: {
                                                                //         view: "video",
                                                                //         src: [
                                                                //             "http://cdn.webix.com/demodata/movie.ogv",
                                                                //             "http://cdn.webix.com/demodata/movie.mp4"
                                                                //         ],
                                                                //         autoplay: false,
                                                                //     }
                                                                // },
                                                                // {
                                                                //     view: "accordionitem",
                                                                //     header: "Видео-урок 2",
                                                                //     body: {
                                                                //         view: "video",
                                                                //         src: [
                                                                //             "http://cdn.webix.com/demodata/movie.ogv",
                                                                //             "http://cdn.webix.com/demodata/movie.mp4"
                                                                //         ],
                                                                //         autoplay: false,
                                                                //     },
                                                                //     collapsed: true
                                                                // },
                                                                // {
                                                                //     view: "accordionitem",
                                                                //     header: "Видео-урок 3",
                                                                //     body: {
                                                                //         view: "video",
                                                                //         src: [
                                                                //             "http://cdn.webix.com/demodata/movie.ogv",
                                                                //             "http://cdn.webix.com/demodata/movie.mp4"
                                                                //         ],
                                                                //         autoplay: false,
                                                                //     },
                                                                //     collapsed: true
                                                                // },
                                                                // {
                                                                //     view: "accordionitem",
                                                                //     header: "Видео-урок 4",
                                                                //     body: {
                                                                //         view: "video",
                                                                //         src: [
                                                                //             "http://cdn.webix.com/demodata/movie.ogv",
                                                                //             "http://cdn.webix.com/demodata/movie.mp4"
                                                                //         ],
                                                                //         autoplay: false,
                                                                //     },
                                                                //     collapsed: true
                                                                // }
                                                            ]
                                                        }
                                                    },
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                id: "super_additional_information_tabbar"
                            }
                        ]
                    }
                ]
            }
        }
    }

    init() {
        this.AddHomeWorkView = this.ui(AddHomeWorkView);
        this.EditHomeWorkView = this.ui(EditHomeWorkView);

        this.AddMaterialView = this.ui(AddMaterialView);

        $$("super_task_information_datatable").sync(diaryDataMon);

        $$("super_material_list").sync(diaryDataMon);
        $$("super_material_form").bind("super_material_list");
        $$("super_book_search_label").attachEvent("onTimedKeyPress", function () {
            let value = $$("super_book_search_label").getValue().toLowerCase();
            let __lastId = $$("super_homework_window").__lastId;
            if (value) {
                $$("super_material_list").filter(function (obj) {
                    return obj.author.toLowerCase().indexOf(value) !== -1;
                });
            } else {
                $$("super_material_list").filter(obj => obj.id == __lastId);
            }
        });
    }
}