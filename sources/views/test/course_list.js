import { JetView } from "webix-jet";
import { teacherData } from "models/user_db";


export default class CourseView extends JetView {
	config() {
		
		return {				
			view: "datatable",
			id: "courseTable",
			css: "webix_header_border webix_data_border",
			columns: [
				{ id: "course", header: [{ text: "Предмет", css: { "text-align": "center" }, rowspan: 2 }, "", { content: "selectFilter" }], adjust: true, },
				{ id: "weekday", header: [{ text: "Расписание", css: { "text-align": "center" }, colspan: 3 }, "День недели", { content: "selectFilter" }], adjust: true, fillspace: true, },
				{ id: "timeStart", header: ["", { text: "Время", css: { "text-align": "center" }, colspan: 2 }, "Начало"], adjust: true, fillspace: true, },
				{ id: "timeEnd", header: ["", "", "Конец"], adjust: true, fillspace: true, },
				{ id: "fName", header: [{ text: "Преподаватель", css: { "text-align": "center" }, colspan: 2 }, "Имя", { content: "textFilter", colspan: 2 }], sort: "text", adjust: true, },
				{ id: "lName", header: ["", "Фамилия"], sort: "text", adjust: true, fillspace: true, },						
			],
			on: {
				onCollectValues: function (id, req) {
					if (id == "weekday") {
						req.values = [
							{ id: "Понедельник", value: "Понедельник" },
							{ id: "Вторник", value: "Вторник" },
							{ id: "Среда", value: "Среда" },
							{ id: "Четверг", value: "Четверг" },
							{ id: "Пятница", value: "Пятница" },
							{ id: "Суббота", value: "Суббота" },
						]
					}
				}
			},		
		}
	}
	init() {
		$$("courseTable").sync(teacherData);
	}
	
}
