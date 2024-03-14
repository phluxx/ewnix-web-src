<template>
  <div class="menu">
    <ul>
      <li @click="navigateTo('/')"><router-link to="/">Home</router-link></li>
      <li @click="navigateTo('/about')"><router-link to="/about">About</router-link></li>
      <li @click="navigateTo('/staff')"><router-link to="/staff">Staff</router-link></li>
      <li @click="navigateTo('/signup')"><router-link to="/signup">Sign Up</router-link></li>
      <li @click="navigateTo('https://webchat.ewnix.net')"><a href="https://webchat.ewnix.net">Chat Now</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    navigateTo(route) {
      window.location.href = route; 
    },
  },
};
</script>

<style scoped>
/* Menu CSS */
.menu {
  float: right;
  width: 200px;
}
.menu a {
  color: white;
  text-decoration: none;
}
.menu ul {
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
}
.menu li {
  margin-bottom: 10px;
  background-color: rgba(76, 175, 80, 0.8);
  color: white;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}
.menu li:hover {
  background-color: #388E3C;
  cursor: pointer;
}
</style>

