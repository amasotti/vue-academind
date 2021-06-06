<template>
  <section>
    <div>
      <h3>{{ fullName }}</h3>
      <base-badge v-for="role in roles" :type="role" :caption="role.toUpperCase()" :key="role.id"></base-badge>
    </div>
    <p>{{ infoText }}</p>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'roles', 'id'],
};
</script>

<style>
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>