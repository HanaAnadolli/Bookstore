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
            ><router-link class="nav-link" v-bind:to="item.path">{{ item.name }}</router-link></li>
        </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar",
    data() {
      return {
        isCollapsed: true,
        menuItems:[
            {path:'/' , name: 'Home'},
            {path:'/shop' , name: 'Shop'},
            {path:'/info' , name: 'Information'},
            {path:'/createContacts' , name: 'Contact us'},
            {path:'login' , name: 'Login'}
            

        ]
      };
    },
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
</style>
