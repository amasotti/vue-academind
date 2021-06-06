<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot name="goalItem" :goal="goal"></slot>
    </li>
  </ul>
</template>


<script>
export default {
  data() {
    return {
      goals : ['Finish this course', 'Implement an App', 'Sleep a bit']
    }
  }
}
</script>


