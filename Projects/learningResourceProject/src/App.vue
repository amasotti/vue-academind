<template>
<div>
  <navbar></navbar>
  <div style="height: 20px;"></div>
  <h1>Welcome to the learning resource project</h1>

  <div id="btnDiv" @click="toggleResource()">
  <button class="btn" type="button">{{btnLabel}}</button>  
  </div>
  

  <learning-resources v-if="showResource" :storedResources="storedResources" />
  <add-resource v-if="!showResource"/>

  <footer style="width:100vw; height:200px;"></footer>
  </div>
</template>

<script>
import AddResource from './components/AddResource.vue';
import LearningResources from './components/Resources/LearningResources.vue';
import Navbar from "./components/Utils/TheNavbar.vue"

export default {
  components: {
    Navbar,
    LearningResources,
    AddResource
  },
  data() {
    return {
      showResource : false,
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
  },
  computed: {
    btnLabel() {
      if (this.showResource) return 'Add Resource';
      return 'Show Resource';
    }
  },
  provide() {
    return {
      resources: this.storedResources, 
      addResource: this.addResource
    }
  },
  methods : {
    toggleResource() {
      console.log("he he clicked")
      this.showResource = !this.showResource;
    }, 
    addResource(newResource) {
      this.storedResources.unshift(newResource);
      console.warn("Added new Resource");
    } 
  }
}
</script>


<style scoped>

* {
  margin: 0;
  z-index: -1;
}


h1 {
  text-align: center;
  color: #4fc08d;
}

.btn-group {
  justify-content: space-around;
}

#btnDiv {
  display: flex;
  align-self: center;
  align-content: center;
  justify-content: center;
}

button {
  text-align: center;
  background : #4fc08d;
  padding: 1em 2em;
  border: none;
  border-radius: 5px;
}

button:hover {
  box-shadow: 3px 0 3px 2px silver;
}

</style>
