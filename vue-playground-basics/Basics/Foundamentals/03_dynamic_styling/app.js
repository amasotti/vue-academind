const app = Vue.createApp({
  data() {
    return {
      boxA: false,
      boxB: false,
      boxC: false,
      boxCClass: false
    };
  },
  methods: {
    boxSelected(box) {
      switch (box) {
        case "A":
          this.boxA = !this.boxA;
          break;

        case "B":
          this.boxB = !this.boxB;
          break;

        case "C":
          this.boxC = !this.boxC;
          break;
      }
    }
  },
  watch: {
    boxC() {
      this.boxCClass = { activeDiv: this.boxC };
    }
  }
});

app.mount("#styling");
