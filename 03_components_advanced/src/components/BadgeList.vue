<template>
  <section>
    <h2>Available Badges</h2>
    <ul>
      <li>
        <base-badge type="admin" caption="ADMIN"></base-badge>
      </li>
      <li>
        <base-badge type="author" caption="AUTHOR"></base-badge>
      </li>
      <li>
        <base-badge type="dev" caption="DEVELOPER"></base-badge>
      </li>
      <li>
        <base-badge type="creator" caption="CREATOR"></base-badge>
      </li>
    </ul>
  </section>
</template>

<style scoped>
section h2 {
  margin: 0.5rem 0;
  color: #db0d0d;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>