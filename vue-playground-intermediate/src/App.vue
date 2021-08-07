<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
<form>
  <label for="john">Enter something dude: </label>
 <input type="text" name="john" ref="mytext"/>
</form>
<button @click="updateText">Set text</button>
<p>You entered: </p>
<div id="wye" >
{{returnedText}}
</div>
<notes />
</div>


</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import notes from './components/refs.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,notes
  },
  data() {
    return {
      text : '',
      returnedText : null
    }
  },
  methods: {
    updateText() {
      console.dir(this.$refs.mytext)
      this.returnedText = this.$refs.mytext.value;
      this.$refs.mytext.size = 39;
    }
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: Jost, Avenir;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
