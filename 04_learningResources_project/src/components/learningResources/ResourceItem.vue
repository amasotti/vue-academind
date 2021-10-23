<template>
  <div class="container">
    <h3 class="resourceTitle">{{resource.title}}</h3>
    <hr>
    <div class="resourceDescription">
        <p>{{resource.description}}</p>
        <a :href="resource.link">Visit now!</a>
    </div>
  </div>
</template>


<script>
export default {
  name: 'resource-item',
  data() {

    return {
      
    }
  
  },
  props: [ 'resource']
}
</script>



<style scoped>

.container{
    position: relative;
    display: inline-flex;
    flex-direction: column;
    width: 50%;
    margin: 1rem 0;
    padding: 30px 30px;
    border: 1px solid rgba(0, 0, 0, .75);
    justify-content: center;
    text-align: center;
}
</style>