<template>
    <div class="row">
    <ul class="col s12 m12">
    <the-resource
      class='card blue-grey lighten-2'
        v-for="resource in storedResources"
        :key="resource.id"
        :title="resource.title"
        :description="resource.description"
        :link="resource.url"
      />
    </ul>
  </div>    
</template>


<script>
import TheResource from './TheResource.vue';

export default {
    name: "learning-resources",
    components: { TheResource },
    props : {
        storedResources : {
            type: Array,
            required: true
        } 
    },
}
</script>


<style lang="css">
    .card {
  background-color: #42b9834f;
    max-width: 50vw;
    margin: 20px auto;
    border-radius: 7px;
    box-shadow: 0 -3px 3px 2px gray;
    padding-bottom: .7em;

}

</style>