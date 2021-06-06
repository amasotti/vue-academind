const app = Vue.createApp({
    data() {
        return {
            goals: ["Finish the course",
                "Go to bed at a reasonable time",
                "Just testing CI on GitLab and github"],
            deletedGoals: [],
            additionalGoal: "",
            selectedIndex: null,
        };
    },
    methods: {
        newGoal() {
            if (this.additionalGoal !== "") {
                this.goals.push(this.additionalGoal);
                this.additionalGoal = "";
            }
        },
        removeGoal(index) {
            if (this.goals[index]) {
                this.deletedGoals.push(this.goals[index])
                this.goals.splice(index, 1)
            } else {
                alert(`There is no element with the index ${index}`)
            }
        },
        restoreGoal(index) {
            this.goals.push(this.deletedGoals[index]);
            this.deletedGoals.splice(index, 1);
        }
    },
});

app.mount('#user-goals');
