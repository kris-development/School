import { JetView } from "webix-jet";
import { users, groups, teachers, journal, courses, months, getUserFromJournal,getGradeFromUserJournal } from "models/modelschool";



export default class scoolView extends JetView {
    config() {
        let self = this;
        const theme = this.app.config.theme;

        return {
            view: "datatable",
            id: "dtJournal",
            columns: [
                { id: "id", header: "#", css: "rank", width: 50 },
                {
                    id: "name",
                    header: "Предметы",
                    adjust: true,
                }
            ]
        }
    }
    init() {
        let self = this;
        this.$$("dtJournal").user_id = 1; //указывает юзера из модели journal
        let d = new Date();
        let m = d.getMonth() + 1;
        let itemM = months.getItem(m); //Получает число(id)-месяц из модели months

        if (itemM) {
            let columns = $$("dtJournal").config.columns;
            let journalUser = getUserFromJournal(this.$$("dtJournal").user_id);

            for (let i = itemM.dayCount; i > 0; i--) { //itemM.dayCount получет дни из модели months
                columns.splice(2, 0, { // добавляем колонки в datatable
                    id: i,
                    header: i.toString(),
                    adjust: true,
                    template: (obj) => {
                        let grade = getGradeFromUserJournal(journalUser, obj.id, i, m, 2020);
                        console.log("100000", obj.id)
                        return (grade) ? grade : "";
                    }
                });
            }
        }
        

        this.$$("dtJournal").refreshColumns();

        
        this.$$("dtJournal").sync(courses);

    }

}