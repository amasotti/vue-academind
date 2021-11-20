<template>
<teleport to='body'>
<div @click="$emit('closeDialog')">
<dialog open>
  <header>
    <slot name="header">
      <h2>{{title}}</h2>
    </slot>
  </header>

  <section>
    <slot name="dialogBody">
      This is the default message in the body.
    </slot>
  </section>

    <footer @click="$emit('closeDialog')">
      <i id="closeIcon" class="fa-solid fa-circle-xmark"></i>
  </footer>
  </dialog>  
  </div>
  </teleport>
</template>
<script>

export default {
  props: {
    title: {
      required: false,
      type: String
    }
  },
  emits: ['closeDialog'],
}

</script>


<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 40vh;
  left: 10%;
  width: 80%;
  height: max-content;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
}

header {
  background-color: #10b96a;
  color: white;
  width: 100%;
  padding: 1rem;
}

footer {
  background-color: #83e0b5;
  color: white;
  width: 100%;
  padding: .3rem;
  text-align: center;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

#closeIcon {
  font-size: 1rem;
}

footer:hover {
  background: #10b96a;
  cursor: pointer;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}


</style>