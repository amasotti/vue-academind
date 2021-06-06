<template>
  <li>
    <span v-if="favoriteTag"
      ><img style="width: 20px" src="../assets/star.png" alt="Favorite" /></span
    >&nbsp; {{ name }} &ndash; <em>{{ role }}</em>
  </li>
  <button @click="toggleDetails">
    {{ details ? "Hide" : "Show" }} Details
  </button>
  <button @click="toogleFavorite">Favorite</button>
  <button @click="deleteFriend">Delete</button>
  <div class="lista" v-if="details">
    <p>
      <strong>{{ phone }}</strong>
    </p>
    <p>{{ city }}</p>
  </div>
  <div>
    &nbsp; <br />
    &nbsp;
  </div>
</template>


<script>
export default {
  // Props validation
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: String,
    city: {
      type: String,
      required: false,
      default: "Göttingen",
    },
    role: String,
    isFavorite: { Boolean, required: false, default: false },
  },
  // Emits, more for clarity purpose. It also works if emits are declared only below in the workflow
  emits: {
      'toggle-favorite' : function(id) {
          // emit a toogle-favorite event, that will be handled by a function 
          // receiving an id as value. We could exploit this space to validate the arguments:
          if (!id) {
              console.error("Id in toggle-favorite is missing!!! We need that.")
              return false
          } else {
              return true
          }
      },
      'delete-friend' : function(id) {
        if (id) {
          return true
        }
      }
  },
  data() {
    return {
      details: false,
      favoriteTag: this.$props.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.details = !this.details;
    },
    toogleFavorite() {
        this.favoriteTag = !this.favoriteTag;
        this.$emit("toggle-favorite", this.id);
      
    },
    deleteFriend() {
      this.$emit("delete-friend", this.id);
    }
  },
};
</script>



<style scoped>
button {
  background-color: rgba(45, 216, 116, 0.89);
  border-radius: 5px;
  padding: 8px;
}
</style>