<template>
    <div class="navbar">
                <div class="dummyLinks">
                    <a href="/home">Homepage</a>
                    <a href="/resources">Resources</a>
                </div>

                <div id="dummy-header">USEFUL RESOURCES</div>
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
    margin: 0 -8px;
    padding-bottom: 20px;
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

#dummy-header {
    justify-self: center;
    text-align: center;
    color: #ffff;
    font-weight: bolder;
}

</style>