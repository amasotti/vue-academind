/*
The same as before but this time in Vue

STEPS:

1. Initialize a Vue object (available through CDN)
2. create a function called 'data' that returns some arbitrarly named
  variables corresponding to the DOM objects we'd like to take control over.

  No matter how these vars are named, they're bound to to HTML through
  the v-model directive. The value of v-model will search in the return of 
  the data function here below.

*/

Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
    rmGoal() {
      this.goals = [];
      this.enteredValue = "";
    },
  },
}).mount("#app");
