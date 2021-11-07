<template>
<div>
  <navbar></navbar>
  <div style="height: 20px;"></div>
  <h1>Welcome to the learning resource project</h1>
  <div class="row">
    <ul class="col s12 m12">
      <learning-resources
      class='card blue-grey lighten-2'
        v-for="resource in storedResources"
        :key="resource.id"
        :title="resource.title"
        :description="resource.description"
        :link="resource.url"
      />
    </ul>
  </div>
  </div>
</template>

<script>
import LearningResources from "./components/Resources/LearningResources.vue";
import Navbar from "./components/Utils/TheNavbar.vue"

export default {
  components: {
    LearningResources,
    Navbar
  },
  data() {
    return {
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "Official vue.js documentation",
          url: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Search Google",
          description: "The never-missing search engine",
          url: "https://google.com",
        },
        {
          id: "stack-overflow",
          title: "Stack Overflow",
          description: "The bible",
          url: "https://stackoverflow.com",
        },
        {
          id: "quasar",
          title: "Quasar Documentation",
          description: "The official documentation for Quasar Framework",
          url: "https://quasar.dev/",
        },
      ],
    };
  }
};
</script>


<style scoped>

* {
  margin: 0;
  z-index: -1;
}


.card {
  background-color: #42b9834f;
    max-width: 50vw;
    margin: 20px auto;
    border-radius: 7px;
    box-shadow: 0 -3px 3px 2px gray;
    padding-bottom: .7em;

}

h1 {
  text-align: center;
  color: #4fc08d;
}

</style>
