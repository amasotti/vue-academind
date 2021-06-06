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


section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>