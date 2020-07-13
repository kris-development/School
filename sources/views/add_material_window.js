import { JetView } from "webix-jet";


import "webix/photo";


export default class AddMaterialView extends JetView {
    config() {
        webix.CustomScroll.init();
        return {
            view: "window",
            id: "super_add_material_window",
            head: {
                cols: [
                    { template: "Добавление литературы", type: "header", borderless: true },
                    {
                        view: "icon", icon: "wxi-close", click: function () {
                            $$("super_add_material_window").hide();
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
                    $$("super_add_material_window").setPosition(317, 160);
                    $$("super_add_material_window").resize();
                }
            },
            body: {
                view: "form",
                id: "super_add_material_form",
                css: "myStyleForm",
                width: 900,
                rows: [
                    {
                        cols: [
                            {
                                rows: [
                                    { view: "text", id: "", css: "myStyleLabel", label: "Автор:", labelPosition: "top", name: "author", width: 500 },
                                    { view: "text", id: "", css: "myStyleLabel", label: "Название книги:", labelPosition: "top", name: "book_title", width: 500 },
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