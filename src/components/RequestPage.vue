<template>
  <div class="content">
    <div class="form-container">
      <h2>Request Access</h2>
      <form @submit.prevent="submitRequest">
        <label for="username">Username:</label><br>
        <input v-model="username" type="text" id="username" required pattern="[A-Za-z][A-Za-z0-9-_]*"><br><br>

        <label for="email">E-mail:</label><br>
        <input v-model="email" type="email" id="email" required><br><br>

        <button type="submit" class="request-button">Request Access!</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
    };
  },
  methods: {
    submitRequest() {
      // Perform request logic here
      console.log('Username:', this.username);
      console.log('Email:', this.email);
      // Send to backend
    },
  },
};
</script>

<style scoped>
.request-button {
  background-color: rgba(76, 175, 80, 0.8);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.request-button:hover {
  background-color: #4CAF50;
}

.content {
  display: flex;
  justify-content: center;
  margin: auto;
}

.form-container {
  text-align: center;
  width: 100%;
  max-width: 400px; /* Adjust this as needed */
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>

