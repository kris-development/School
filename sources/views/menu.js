import { JetView, plugins } from "webix-jet";

export default class MenuView extends JetView {
	config() {
		return {
			width: 200,
			localId: "side:menu",
			view: "sidebar",
			css: "myStyleLeftBar",
			data: [
				{ value: "Дневник", id: "diary_ui", icon: "wxi-pencil" },
				{ value: "Учет учителя", id: "teacher_ui", icon: "wxi-eye" },		
			]
		};
	}
	init(sidebar) {
		this.use(plugins.Menu, this.$$("side:menu"));
		this.on(this.app, "menu:toggle", () => this.$$("side:menu").toggle());
		sidebar.getPopup().attachEvent("onBeforeShow", () => false);
	}
}