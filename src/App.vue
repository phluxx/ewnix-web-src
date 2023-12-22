<template>
  <div>
    <HeaderPage />
    <MenuPage />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';
import MenuPage from './components/MenuPage.vue';

export default {
  components: {
    HeaderPage,
    MenuPage,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-image: url('https://f005.backblazeb2.com/file/ewnix-web/background.jpeg');
  background-size: cover;
  font-family: 'Poppins', Arial, sans-serif;
}
</style>

