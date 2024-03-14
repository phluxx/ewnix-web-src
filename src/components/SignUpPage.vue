<template>
  <div class="signup-container">
    <h2>Sign Up</h2>
    Usernames must begin with a letter, can only contain letters, numbers, and the characters -_^<br>
    Passwords must be a minimum of 12 characters long.<br>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" @input="validateUsername">
        <span v-if="!isUsernameValid" class="error-message">Username is not valid</span>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" @input="validatePassword">
        <span v-if="!isPasswordValid" class="error-message">Password is not valid</span>
      </div>
      <div class="form-group">
        <label for="passwordVerify">Verify Password:</label>
        <input type="password" id="passwordVerify" v-model="passwordVerify" @input="validatePasswordVerify">
        <span v-if="!isPasswordVerifyValid" class="error-message">Passwords do not match</span>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" @input="validateEmail">
        <span v-if="!isEmailValid" class="error-message">Email is not valid</span>
      </div>
      <button type="submit" :style="{ backgroundColor: buttonColor }" :disabled="!isFormValid">Sign Up</button>
      <p v-if="registrationMessage" :class="{ 'success-message': isRegistrationSuccess, 'error-message': !isRegistrationSuccess }">{{ registrationMessage }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      passwordVerify: '',
      email: '',
      isUsernameValid: true,
      isPasswordValid: true,
      isPasswordVerifyValid: true,
      isEmailValid: true,
      buttonColor: 'rgba(76, 175, 80, 0.8)'
    };
  },
  computed: {
    isFormValid() {
      return this.isUsernameValid && this.isPasswordValid && this.isPasswordVerifyValid && this.isEmailValid;
    }
  },
  methods: {
    validateUsername() {
	    const regex = /^[a-zA-Z][a-zA-Z0-0\-_^]{0,31}$/;
	    this.isUsernameValid = regex.test(this.username) && !/\s/.test(this.username);
    },
    validatePassword() {
	    this.isPasswordValid = this.password.length >= 12 && !/\s/.test(this.password);
    },
    validatePasswordVerify() {
	    this.isPasswordVerifyValid = this.password === this.passwordVerify;
    },
    validateEmail() {
	    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	    this.isEmailValid = regex.test(this.email);
    },
    submitForm() {
	    const formData = {
		    username: this.username,
		    email: this.email,
		    password: this.password
	    };

	    fetch('https://auth.ewnix.net/api/v3/flows/executor/enrollment/', {
		    method: 'POST',
		    headers: {
			    'Content-Type': 'application/json'
		    },
		    body: JSON.stringify(formData)
	    })

		    .then(response => {
			    if (response.ok) {
				    this.registrationMessage = 'Your registration has been submitted. Please check your email to activate your account';
				    this.isRegistrationSuccess = true;
			    } else {
				    this.registrationMessage = 'An error occurred during registration. Please email support@ewnix.net for assistance.';
				    this.isRegistrationSuccess - false;
			    }
		    })
		    .catch(error => {
			    console.error('Error:', error);
			    this.registrationMessage = 'An error occurred during registration. Please try again later or email support@ewnix.net for assistance.';
			    this.isRegistrationSuccess = false;
		    });
    }
  }
};
</script>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-group {
  margin-bottom: 20px;
}

input {
  border-radius: 5px;
  padding: 5px;
  border: 1px solid #ccc;
}

.error-message {
  color: red;
}

button {
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #388E3C;
}
</style>

