<template>
  <Header />
    <div class="signup-container">
      <h2 class="title">Sign Up</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <button :disabled="loading" type="submit">Sign Up</button>
          <p>Already have an account? <router-link to="/login">Login</router-link></p>
        </div>
      </form>
    </div>
  </template>
  
<script>
// import {getAuth, createUserWithEmailAndPassword, updateProfile, signOut} from 'firebase/auth'
import Header from '@/components/Header.vue';

export default {
  components:{
    Header
  },
    data() {
      return {
        username: '',
        email: '',
        password: '',
        loading: false
      };
    },
    methods: {
      async handleRegister() {
        this.loading = true
        await this.$store.dispatch('registerUser', {
          username: this.username, 
          email: this.email, 
          password: this.password,
        })
        
        this.loading = false;
        this.$router.push('login');
        
      }
    },
  };
  </script>
  
<style scoped>
  .signup-container {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .title{
    color: #b6594c
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
  
  input[type="text"],
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

  .form-group > button:disabled{
    cursor: not-allowed;
    background-color: #90aeb2;
  }
  
  button[type="submit"]:hover {
    background-color: #37514d;
  }

</style>
  