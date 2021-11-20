<template>
  <section id="userinfo-section">
    <div>
      <h5>{{ fullName }}</h5>
      <base-badge class="badge" v-for="role in roles" :type="role" :caption="role.toUpperCase()" :key="role.id"></base-badge>
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

.badge {
  margin: 13px;
}

section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
  margin: 0 auto;

}



h5 {
  padding: 0px 20px;
}

p {
  padding: 0px 20px;
}
</style>