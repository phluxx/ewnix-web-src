<template>
  <div class="content">
    <div class="form-container">
      <h2>Password Reset</h2>
      <form @submit.prevent="resetPassword">
        <!-- Username Input -->
        <label for="username">Username:</label><br>
        <input v-model="formData.username" type="text" id="username" name="username" required><br><br>
        
        <!-- Current Password Input -->
        <label for="currentPassword">Current Password:</label><br>
        <input v-model="formData.currentPassword" type="password" id="currentPassword" name="currentPassword" required><br><br>

	<!-- New Password Input -->
	<label for="newPasssword">New Password:</label><br>
	<input v-model="formData.newPassword" type="password" id="newPassword" name="newPassword" required><br><br>
	<label for="confirmNewPassword">Confirm New Password:</label><br>
	<input v-model="formData.confirmNewPassword" type="password" id="confirmNewPassword" name="confirmNewPassword" required><br><br>
        
        <!-- Submit Button -->
        <button type="submit" class="reset-button">Change Password</button>
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
      formData: {
        username: '',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      },
      errorMessage: '',
    };
  },
  methods: {
    async resetPassword() {
      if (this.formData.newPassword !== this.formData.confirmNewPassword) {
        this.errorMessage = "The new passwords do not match!";
        return;
      }

      try {
        const response = await axios.post('https://goldappwdreset.ewnix.net/reset', {
          username: this.formData.username,
          currentPassword: this.formData.currentPassword,
          newPassword: this.formData.newPassword,
        });

        if (response.status === 200) {
          alert("Password reset successful!");
          this.formData = {
            username: '',
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
          };
        }
      } catch (error) {
        console.error('There was an error:', error);
        this.errorMessage = "There was an error resetting the password. Please try again.";
      }
    },
  },
};
</script>

<style scoped>
.reset-button {
  background-color: rgba(76, 175, 80, 0.8);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  font-size: 16px;
}

.reset-button:hover {
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

.success-message {
  color: green;
}

.error-message {
  color: red;
}
</style>

