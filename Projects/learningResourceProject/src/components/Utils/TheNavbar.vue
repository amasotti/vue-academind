<template>
    <div class="navbar">
                <div class="dummyLinks">
                    <a href="/home">Homepage</a>
                    <a href="/resources">Resources</a>
                </div>
    </div>
</template>



<script>
export default {
    name: "Navbar"
}
</script>


<style lang="css" scoped>
    
.navbar {
    position: relative;
    top: -10px;
    margin: 0;
    margin-left: -8px;
    height: 60px;
    width: 100vw;
    background: #34495e;
}

.dummyLinks {
    padding-top: 20px;
    margin: 0 auto;
    display:grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    justify-content: space-evenly;
}

a {
    text-decoration: none;
    color: white;
}

</style>