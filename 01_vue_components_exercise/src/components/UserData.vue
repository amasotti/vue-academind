<template>
    <section>
      <p>Use the following form to update the data of the active user</p>
    </section>
    <form class="form" @submit.prevent="readInput">
        <div class="form-group">
          <div class="row">
            <label for="username">
                Username: <input type="text" placeholder="Your username" v-model="username" required>
            </label>
            <label for="age">Age: <input type="number" min="10" max="99" placeholder="25" v-model="age" required></label>
          </div>
        </div>
        <button type="submit" class="btn btn-secondary form-control">Invia</button>
    </form>
</template>



<script>
export default {
    data() {
        return {
            username : null, 
            age: null,
        }
    },
    methods: {
        readInput() {
            this.$emit('pass-input', this.username, this.age)
            console.log(`Infos correctly passed from Userdata: ====> username: ${this.username}, age: ${this.age}`);
        }
    }
}
</script>