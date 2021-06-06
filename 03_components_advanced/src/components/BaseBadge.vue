<template>
  <span class="badge" :class="classes">{{ caption }}</span>
</template>

<script>
export default {
  props: ['type', 'caption'],
  computed: {
    classes() {
      return {
        'badge--admin': this.type === 'admin',
        'badge--author': this.type === 'author',
        'badge--dev': this.type === 'dev',
        'badge--creator': this.type === 'creator',
      };
    },
  },
};
</script>

<style>
.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  background-color: #ccc;
  color: #0fbfdc;
}

.badge--admin {
  background-color: #0ea16d;
  color: white;
}

.badge--author {
  background-color: #1256e8;
  color: white;
}
.badge--dev {
  background-color: #7b0ab8;
  color: white;
}
.badge--creator {
  background-color: #b80a1e;
  color: white;
}
</style>