const app = Vue.createApp({
    data() {
        return {
            newTask: "",
            tasks: [],
            listVisibility: true,
            buttonText: "Hide"
        }
    },
    methods: {
        addTask() {
            if (this.newTask) {
                this.tasks.push(this.newTask);
                this.newTask = "";
            } else {
                window.alert('You should fill in the field in order to add a task')
            }
        },
        toogleList() {
            this.listVisibility = !this.listVisibility;
        }
    },
    watch: {
        listVisibility() {
            if (this.listVisibility) {
                this.buttonText = "Hide";
            } else {
                this.buttonText = "Show";
            }
        }
    }
})
app.mount("#assignment");