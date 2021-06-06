const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      sexM: false,
      sexF: false
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetName() {
      this.name = "";
    },
    resetCounter() {
      document.getElementById("result").style.background = "#4fc08d";
      this.counter = 0;
    },
    outputFullName() {
      console.log(`I am a normal method and I was invoked`);
      if ((!this.sexF && !this.sexM) || (this.sexF && this.sexM)) {
        return this.name;
      } else if (this.sexF && !this.sexM) {
        return "Liebe Frau " + this.name;
      } else {
        return "Lieber Herr " + this.name;
      }
    }
  },
  computed: {
    titledName() {
      console.log(`I am a computed method and I was invoked`);
      if ((!this.sexF && !this.sexM) || (this.sexF && this.sexM)) {
        return this.name;
      } else if (this.sexF && !this.sexM) {
        return "Liebe Frau " + this.name;
      } else {
        return "Lieber Herr " + this.name;
      }
    }
  },
  watch: {
    counter() {
      document.getElementById("result").style.background = "black";
    }
  }
});

app.mount("#events");
