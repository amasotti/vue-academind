<template>
  <header>
    <h2>My friends</h2>
  </header>
  <ul>
    <friend-contact
    v-for="freund in friends"
    :key="freund.id"
    :id="freund.id"
    :role="freund.role"
    :name="freund.name"
    :phone="freund.phone"
    :city="freund.city"
    :is-favorite="freund.isFavorite"
    @toggle-favorite="changeFavorite"
    @delete-friend="deleteFriend"
    ></friend-contact>
  </ul>
  <hr>
  <add-friend :availableFriends="friends" @pushInfos="updateFriends"></add-friend>
  
</template>

<script>
import AddFriend from './components/AddFriend.vue';

export default {
  components: { AddFriend },
  data() {
      return {
          friends : [
              {
                  id: 1,
                  name : "Antonio",
                  role: "Web Manager",
                  phone: "+49 111222333",
                  isFavorite : true
              },
              {
                  id: 2,
                  name : "Paolo",
                  role: "Marketing counselor",
                  phone: "+49 111222333584",
                  isFavorite : true
              },
              {
                  id: 3,
                  name : "Axel",
                  role: "Big boss",
                  phone: "+49 888 9999 000",
                  city : "Hannover",
                  isFavorite: false
              },
          ]
      }
  },
  methods: {
      changeFavorite(freundId) {
          //alert(`You're changing the favorite status of friend with ID ${freundId}` )
          this.friends.find(friend => friend.id === freundId).isFavorite = !this.friends.find(friend => friend.id === freundId).isFavorite
      },
      updateFriends(data) {
          this.friends.push(data)
          //alert(` New friend added: ${data.name}`)
      },
      deleteFriend(data){
          this.friends = this.friends.filter(f => f.id !== data)
      },
        
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;

}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #2abd6e;
  color: rgb(255, 255, 255);
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 2em;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  /*margin: 1rem auto;*/
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #dbd3da;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app .lista {
  margin: auto;
  background: chartreuse;
}
</style>