const app = Vue.createApp({
  data() {
    return {
      number: 0,
      result: ""
    };
  },
  methods: {
    addFive() {
      this.number += 5;
    },
    addOne() {
      this.number += 1;
    },
    Minus2() {
      this.number -= 2;
    }
  },
  computed: {
    check37() {
      if (this.number < 37) {
        this.result = "Not there yet";
        return this.result;
      } else if (this.number > 37) {
        this.result = "Too much";
        return this.result;
      } else {
        return this.number;
      }
    }
  },
  watch: {
    number() {
      /* setTimeout(() => {
        if (this.number === 37) {
          alert("🏆 You won!");
          this.number = 1;
        } else {
          console.log(`Counter started`);
          this.number = 0;
        }
      }, 5000); */
      if (this.number > 50) {
        this.number = 0;
        alert("Overflow");
      }
      if (this.number === 37) {
        this.number = 0;
        alert("Well done!");
      }
    }
  }
});

app.mount("#assignment");
