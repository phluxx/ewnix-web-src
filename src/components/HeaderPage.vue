<template>
  <div class="header">
    <h1>Ewnix Chat Server</h1>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  mounted() {
    document.title = 'Ewnix Chat';
  },
}
</script>

<style scoped>
/* Header CSS */
.header {
  background-color: rgba(76, 175, 80, 0.8);
  color: white;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 30px;
}
</style>

