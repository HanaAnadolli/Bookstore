<template>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <b-navbar-brand>
            <router-link to="/">
                <img src="@/assets/logo.png" class="logo" alt="Logo">
            </router-link>
        </b-navbar-brand>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="!isCollapsed" aria-label="Toggle navigation" @click="isCollapsed = !isCollapsed">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ 'show': !isCollapsed }">
          <ul class="navbar-nav">
            <li class="nav-item"
                v-for="item in menuItems"
                v-bind:key="item.path"
            ><router-link class="nav-link" v-bind:to="item.path">{{ item.name }}</router-link>
          </li>
          <li class="nav-item" v-if="user">
            Welcome {{user.email }}
            <button class="logout" @click="handleLogout">Logout</button>
          </li>
          <li class="nav-item" v-else>
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
        </ul>
        </div>
        </div>
    </nav>
  </template>
  
  <script>
import { mapState } from 'vuex';
import { getAuth, signOut } from '@firebase/auth';
  export default {
    name: "Navbar",
    data() {
      return {
        isCollapsed: true,
        menuItems:[
            {path:'/' , name: 'Home'},
            {path:'/shop' , name: 'Shop'},
            {path:'/info' , name: 'Information'},
            {path:'/createContacts' , name: 'Contact us'}
        ]
      };
    },
    methods:{
      async handleLogout(){
        await signOut(getAuth());
      }
    },
    computed: {
      ...mapState(['user'])
    }
  };
  </script>

<style>
    .navbar{
        background-color: #eee6de;
    }
    .logo{
        width: 300px;
        height: 100px ;
    }

    .logout{
      background-color: #be845e;
      border: 1px solid #be845e;
      border-radius: 5px;
      color: white;
      padding: 10px;
    }

    .logout:hover{
      background-color: #dd8e75;
      border: 1px solid #dd8e75;
    }
    
    .controlss{
      display: flex;
    }
</style>
  