const app = Vue.createApp({
  data() {
    return {
      name: "Antonio",
      age: 29,
      mypic:
        "https://www.planetware.com/wpimages/2020/01/germany-in-pictures-beautiful-places-to-photograph-black-forest.jpg",
    };
  },
  methods: {
    ranNum() {
      return Math.random().toFixed(2);
    },
    doHover() {
      console.log("You hovered a button");
    },
  },
});

app.mount("#assignment");
