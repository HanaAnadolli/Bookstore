<template>
  <Header />
  <div class="login-container">
    <h2 class="title">Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="form-group">
        <button type="submit">Login</button>
        <p>You dont have an account? <router-link to="/signup">Signup</router-link></p>

      </div>
    </form>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components:{
    Header
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async handleLogin() {
      this.$store.dispatch('loginUser', {
        email: this.email,
        password: this.password
      });

      this.$router.push('shop');
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.title{
  color: #b6594c;
}

form {
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input[type="email"],
input[type="password"] {
  padding: 0.5rem;
  border: 1px solid #be845e;
  border-radius: 4px;
  width: 100%;
}

button[type="submit"] {
  background-color: #90aeb2;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #37514d;
}
</style>
