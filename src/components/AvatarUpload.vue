<template>
  <div class="content">
    <div class="form-container">
      <h2>Avatar Upload</h2>
<form @submit.prevent="handleSubmit">
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
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result; // this will be a Base64 encoded string
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

        const response = await axios.post('/your-endpoint-here', payload);
        console.log(response.data);
      } catch (error) {
        console.error("There was an error!", error);
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
  line-height: 60px;
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
  line-height: 60px;
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

