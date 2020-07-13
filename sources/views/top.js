import { JetView } from "webix-jet";
import MenuView from "views/menu";

export default class TopView extends JetView {
	config() {
		return {
			rows: [
				{
					view: "toolbar",
					css: "myStyleTopBar",
					height: 55,
					elements: [
						{
							paddingY: 7,
							rows: [
								{
									cols: [
										{
											view: "icon",
											icon: "mdi mdi-menu",
											click: () => this.app.callEvent("menu:toggle")
										},
										{
											view: "label", label: "Школа", css: "header_label"
										},
									]
								}
							]
						},
						{ width: 6 }
					]
				},
				{
					cols: [
						MenuView,
						{ $subview: true }
					]
				}
			]
		};
	}
	init() {
	}
}