const app = Vue.createApp({
  data() {
    return {
      desiredClass: "",
      visibility: true,
      finalClass: "",
      secondDesiredClass: ""
    };
  },
  methods: {
    calcClass() {
      this.visibility = !this.visibility;
      this.finalClass = this.desiredClass + " " + (this.visibility ? "visible" : "visible");
      console.log(`${this.finalClass}`);
    }
  }
});

app.mount("#assignment");
