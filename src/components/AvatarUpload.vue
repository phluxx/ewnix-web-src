<template>
  <div class="content">
    <div class="form-container">
      <h2>Avatar Upload</h2>
<form @submit.prevent="handleSubmit" action="https://gokarashta.ewnix.net/upload" method="post">
    <!-- Username Input -->
    <label for="username">Username:</label><br>
    <input type="text" id="username" v-model="username" required><br><br>
    
    <!-- Password Input -->
    <label for="password">Password:</label><br>
    <input type="password" id="password" v-model="password" required><br><br>
    
    <!-- Image Upload -->
    <input type="file" id="image" @change="handleFileUpload" accept="image/*" required style="display: none;">
    <label for="image" class="image-label">Choose Image</label><br><br>
    
    <!-- Submit Button -->
    <button type="submit" class="upload-button">Upload Avatar</button>
  </form>
<div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      image: null,
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result; // Base64 encoded string
      };

      reader.readAsDataURL(file);
    },
    async handleSubmit() {
      try {
        const payload = {
          username: this.username,
          password: this.password,
          image: this.image,
        };

        const response = await axios.post('https://gokarashta.ewnix.net/upload', payload);
        if (response.data === 'Avatar uploaded!') {
          this.successMessage = 'Avatar uploaded!';
          this.errorMessage = '';
        } else {
          this.successMessage = '';
          this.errorMessage = 'Authentication failed.';
        }
      } catch (error) {
        this.successMessage = '';
        this.errorMessage = 'An error occurred. Please try again later.';
      }
    },
  }
}
</script>


<style scoped>
.upload-button {
  box-sizing: border-box;
  margin: 0;
  background-color: rgba(76, 175, 80, 0.8);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 150px;
  height: 40px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  font-size: 16px;
}

.upload-button:hover {
  background-color: #4CAF50;
}

.image-label {
  box-sizing: border-box;
  margin: 0;
  background-color: rgba(76, 175, 80, 0.8);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 150px;
  height: 40px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  font-size: 16px;
}

.image-label:hover {
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

.success {
  color: green;
}

.error {
  color: red;
}
</style>

