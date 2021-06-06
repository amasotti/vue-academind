const myGoalfun = () => {
  const randomNum2 = Math.random();
  if (randomNum2 < 0.5) {
    return "External func less than 0.5";
  } else {
    return "External func more than 0.5";
  }
};

// Initialize the Vue App
const app = Vue.createApp({
  data() {
    return {
      goal: "Master Vue js",
      goals: ["Finish this course", "Render an array here", "Go to work"],
      myLink: "https://vuejs.org",
      myHtml: "<p><em>hello World</em></p>",
      newGoal: "",
      name: "",
      counter: 0
    };
  },
  methods: {
    outputGoal() {
      const randomNum = Math.random();
      if (randomNum < 0.8) {
        return "Less than 0.8 : You still have much to learn";
      } else {
        return "Well done! More than 80%";
      }
    },
    externalFun() {
      return myGoalfun();
    },
    addGoal() {
      this.goals.push(this.newGoal);
      this.newGoal = "";
      this.$refs.newGoal.focus();
    },
    rmGoal() {
      const itemList = document.getElementById("listitems");
      itemList.innerHTML = "";
      //this.goals = [];
      //this.goal = "";
      //console.log(app._component.data);
    },
    setName(e, lastName) {
      this.name = e.target.value + " " + lastName;
    },
    updateCounter() {
      this.counter++;
    },
    decreaseCounter() {
      if (this.counter > 0) {
        this.counter--;
      } else {
        console.log(`Counter is already at 0`);
      }
    }
  }
});

// Tell vue which part of the HTML page should control
app.mount("#user-goal");
