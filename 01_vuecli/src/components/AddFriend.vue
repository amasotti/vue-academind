<template>
  <header>
    <h2>Add a new Friend</h2>
    <p><small>Use this form to add a new friend to the list</small></p>
  </header>
  <div class="container">
    <form @submit.prevent="passInfos">
      <div class="form-group">
        <label for="id">
          Friend ID
          <input
            type="number"
            class="form-control"
            min="2"
            max="100"
            placeholder="Friend ID"
            v-model="newFriend.id"
          />
        </label>
      </div>
      <div class="form-group">
        <label for="name"
          >Name:
          <input
            type="text"
            placeholder="Friend's name"
            class="form-control"
            required
            v-model="newFriend.name"
          />
        </label>
      </div>
      <div class="form-group">
        <label for="role"
          >Role:
          <input
            class="form-control"
            type="text"
            placeholder="Putzmann"
            v-model="newFriend.role"
          />
        </label>
        &nbsp;&nbsp;&nbsp;
        <label for="phone"
          >Phone:
          <input
            class="form-control"
            type="tel"
            name="phone"
            placeholder="+11 01587 987 789"
            v-model="newFriend.phone"
          />
        </label>
      </div>
      <div class="form-group">
        <label for="city"
          >City:
          <input
            class="form-control"
            type="text"
            name="city"
            id="form-city"
            placeholder="Göttingen"
            v-model="newFriend.city"
          />
        </label>
      </div>
      <br />
      <button type="submit" class="btn btn-primary">Submit!</button>
    </form>
  </div>
  <div class="dropdown-divider"></div>
</template>



<script>
export default {
  // My "Senf" feature
  props: ["availableFriends"],
  data() {
    return {
      newFriend: {
        id: null,
        name: null,
        role: null,
        city: null,
        phone: null,
      },
    };
  },
  emits: ["pushInfos"],
  methods: {
    passInfos() {
      let checkFreund = this.$props.availableFriends.find(
        (friend) => +friend.id === +this.newFriend.id
      );
      if (checkFreund) {
        console.warn(`Friend already present: ${checkFreund.name}`);
        alert(
          `The ID you specified is already occupied: ${checkFreund.name} has ID: ${checkFreund.id}`
        );
        this.newFriend.id = null;
      } else {
        this.$emit("pushInfos", this.newFriend);
      }
    },
  },
};
</script>

<style scoped>
header {
  margin: 2rem;
}

.form-control {
    padding: max-content;
}

.form-group {
    margin: 0;
    padding: 0;
    color: #0aa155;
    font-weight: bold;
}
</style>