<template>
  <div class="basecard-style">
    <slot></slot>
  </div>
</template>


<style scoped>

.basecard-style {
  margin: 2rem auto;
  padding: .4rem .5rem;
  max-width: max-content;
  border-radius: 12px;
  border: solid 1px #0ea16d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>