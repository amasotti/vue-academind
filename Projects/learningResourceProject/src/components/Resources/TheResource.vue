<template>
<div class="container-card">
  <div class="card-item" v-show="showCard">
      <li>
          <header>
              <h3 class="resource-title center align">{{title}}</h3>
              <a type="button" class="delete-btn" @click=this.delete>Hide</a>
          </header>
          <p class="res-desc">{{description}}</p>
          <nav>
              <a class="res-link" :href='link' target="_blank">View Resource</a>
          </nav>
      </li>
  </div>
  <div v-if="!showCard" class="reset-div">
      <p><em>{{title}} was hidden</em></p>
    <button class="reset-btn" @click=reset>Show it again</button>
  </div>
  </div>
</template>

<script>
export default {
name: 'resource',
  data() {
      return {
          showCard: true
      }
  },
  props: ['title', 'description', 'link'],
  methods: {
      delete() {
          this.showCard = !this.showCard;
      },
      reset() {
          this.showCard = !this.showCard;
      }
  }
}
</script>


<style  scoped>

li {
    list-style: none outside none;
}

header {
    display: flex;
    flex-direction: column;
    padding: 1em;
}

.resource-title {
    text-align: center;
    color: #34495e;
    font-family: "JetBrains Mono";
}


.delete-btn {
    background-color: rgb(214, 88, 88);
    padding: 1em 2em;
    border-radius: 8px;
    border: none;
    justify-self: center;
    align-self: center;
}

.res-desc {
    text-align: center;
    font-family: "Ubuntu Mono";
    color: #080a09;
}

nav {
    display: grid;
}

.res-link {
    text-align: center;
    justify-self: center;
    font-family: "Ubuntu Mono";
    text-decoration: none;
    cursor: pointer;
    color: #021f12;
}

.res-link:hover {
    color: #34495e;
}

.reset-btn {
        background-color: rgb(13, 121, 163);
    padding: 1em 2em;
    border-radius: 8px;
    border: none;
    justify-self: center;
    align-self: center;
}

.reset-div {
    align-content: center;
    text-align: center;
}


</style>