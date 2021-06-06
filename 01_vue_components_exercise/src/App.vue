<template>
<header class="card-header">
    <h1>Exercise 1 on Vue Components</h1>
</header>

<div class="container">
<div class="row">
<!-- Active User -->
<div class="col">
    <h2>Active User</h2>
    <div data-user="active">
    <active-user :usernameProp="name" :ageProp="age"></active-user>
    </div>
</div>

<!--  -->
<div class="col">
    <h2>UserData</h2>
    <user-data @pass-input="readInput"></user-data>
</div>
</div>
</div>
</template>




<script>
export default {
    data() {
        return {
            name : null,
            age: null
        }
    },
    methods: {
        readInput(name, age) {
            console.log(`Inside App.vue, property received: ${name}, ${age}`);
            this.name = name;
            this.age = age;
        }
    }
}
</script>


<style>
* {
    margin: 50px;
    font-family: 'Baloo Tammudu 2', cursive;
}

.card-header {
    margin: 0;
    background-color: #41b883;
    color: honeydew;
    text-align: center;
}

h2 {
    text-decoration: underline 4px #41b883;
}

div[data-user="active"] {
    color: #41b883;
    padding-top: 20px;
}
</style>