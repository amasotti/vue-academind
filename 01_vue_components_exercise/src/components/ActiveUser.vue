<template>
  <div class="container">
  <h3>Username:</h3> <p> {{usernameProp}} </p>
  <h4>Age: </h4> <p> {{ageProp}}</p>
  </div>
</template>





<script>
export default {
    props : ['usernameProp', 'ageProp'],
    
}
</script>


<style scoped>
.container {
  border: solid 1px silver;
  margin-block-start: 0px;
  padding-top: 30px;
}
h3 {
    paddding-top: 4px;
    font-weight: bold;
}

h4 {
    paddding-top: 4px;
    font-weight: bold;
}

</style>