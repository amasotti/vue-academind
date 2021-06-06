<template>
  <dialog open>
    <h2>Be careful!</h2>
    <slot></slot>
    <br>
    <button class="btn btn-danger" @click="this.$emit('exit')">Exit</button>&nbsp;
    <button class="btn btn-info" @click="this.$emit('continue')">Continue</button>
  </dialog>
</template>

<script>
export default {
  emits: ['exit', 'continue']
}
</script>


<style>
dialog {
  position: fixed;
  top: 40vh;
  margin: auto;
  width: 40%;
  background-color: rgba(39, 186, 134);
  border-radius: 13px;
  font-family: "DejaVu Sans", sans-serif;
  box-shadow: 0 3px 5px rgba(0,0,0,.23);
  padding: 3rem;
  z-index: 3;
  border: 0;
}
</style>