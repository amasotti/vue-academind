<template>
<div>
  <div>
    Welcome to vue
  </div>

<div v-for="resource in storedResources" :key="resource.id">
    <resource-item :resource="resource"/>
</div>
  

</div>
</template>


<script>

import ResourceItem from './components/learningResources/ResourceItem.vue';

export default {
  components: {
    ResourceItem
  },
  data() {
    return {
      storedResources: [
        {
          id: 'vue-official',
          title: 'Vuejs documentation',
          description: 'The official guide and API docs to vue js',
          link: 'https://vuejs.org'
        },
        {
          id: 'google-search',
          title: 'Google Search Engine',
          description: 'The best friend of a programmer',
          link: 'https://google.de'
        },

      ]
    }
  }
}
</script>


<style scoped>

</style>
