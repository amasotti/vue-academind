<template>

  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot name="goalItem" :goal="goal"></slot>
      <p data-type="description">Some text</p>
    </li>
  </ul>
  <input type="text" placeholder="Your text" @keydown.enter="updateGoals" ref="newGoal">
</template>


<script>
export default {
  data() {
    return {
      goals : ['Finish this course', 'Implement an App', 'Sleep a bit']
    }
  },
  methods: {
    updateGoals() {
      this.goals.unshift(this.$refs.newGoal.value)
    }
  }
}
</script>


<style>
p[data-type="description"] {
  color: #0ea16d;
  font-style: oblique;
  font-family: Cantarell sans-serif;
}
</style>