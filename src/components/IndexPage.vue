<template>
  <div class="content">
    <p>Welcome to the Ewnix Chat Server's home page!</p>
    <p>Ewnix is an LDAP-authenticated IRCv3 server aimed at bringing you the most unique, fun, and new IRCv3 features available today. To enroll, please <router-link class="content-link" to="/signup">click here</router-link> or select the appropriate menu item to your right. To learn more about us, please see the <router-link class="content-link" to="/about">About</router-link> page!</p>
	<p>We look forward to seeing you soon!</p>
  </div>
</template>
<style scoped>
.content {
  margin-top: 30px;
  margin-right: 220px;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
}

.content-link {
  color: rgba(76, 175, 80, 0.8);
  text-decoration: none;
  transition: color 0.3s;
}

.content-link:hover {
  color: #4CAF50;
  text-decoration: none;
}
</style>


