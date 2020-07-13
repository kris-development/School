import { JetView } from "webix-jet";
import { studentData } from "models/student_data";



export default class Student extends JetView {
	config() {
		
		return {
			view: "datatable",
			id: "studentTable",
			css: "webix_header_border webix_data_border",
			columns: [
				{ id: "fName", header: ["Имя", { content: "textFilter", colspan: 2, }], sort: "text", adjust: true, },
				{ id: "lName", header: "Фамилия", sort: "text", adjust: true, },
				{ id: "form", header: ["Класс", { content: "selectFilter" }], adjust: true, fillspace: true, },
			],
			on: {
				onCollectValues: function (id, req) {
					if (id == "form") {
						req.values = [
							{ id: "1а", value: "1а" },
							{ id: "1б", value: "1б" },
							{ id: "2а", value: "2а" },
							{ id: "2б", value: "2б" },
							{ id: "3а", value: "3а" },
							{ id: "3б", value: "3б" },
							{ id: "4а", value: "4а" },
							{ id: "4б", value: "4б" },
							{ id: "5а", value: "5а" },
							{ id: "5б", value: "5б" },
							{ id: "6а", value: "6а" },
							{ id: "6б", value: "6б" },
							{ id: "7а", value: "7а" },
							{ id: "7б", value: "7б" },
							{ id: "8а", value: "8а" },
							{ id: "8б", value: "8б" },
							{ id: "9а", value: "9а" },
							{ id: "9б", value: "9б" },
							{ id: "10а", value: "10а" },
							{ id: "10б", value: "10б" },
							{ id: "11а", value: "11а" },
							{ id: "11б", value: "11б" },
						]
					}
				}
			},
		}
	}
	init() {
		$$("studentTable").sync(studentData);
	}
	
}
