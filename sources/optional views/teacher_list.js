import { JetView } from "webix-jet";
import { teacherData } from "models/teacher_data"



export default class Teacher extends JetView {
	config() {
		
		return {
			view: "datatable",
			id: "teacherTable",
			css: "webix_header_border webix_data_border",
			columns: [
				{ id: "fName", header: ["Имя", { content: "textFilter", colspan: 2, }], adjust: true, },
				{ id: "lName", header: "Фамилия", adjust: true, },
				{ id: "course", header: ["Предмет", { content: "selectFilter" }], sort: "text", adjust: true, fillspace: true, },
			],			
		}
	}
	init() {
		$$("teacherTable").sync(teacherData);
	}
	
}
