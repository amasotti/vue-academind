const app = Vue.createApp({
  data() {
    return {
      placeholder: "OUTPUT",
      output2: "OUTPUT",
    };
  },
  methods: {
    alertMe() {
      alert("Did you invoke me?");
    },
    addToParagraph(e) {
      document.getElementById("outputP").textContent = e.target.value;
    },
    addOnEnter(e) {
      if (e.keyCode == 13 && e.key == "Enter" && e.code == "Enter") {
        this.output2 = e.target.value;
      }
    },
  },
});

app.mount("#assignment");
