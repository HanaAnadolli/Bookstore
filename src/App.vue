<template>
  <Header />
  <v-container fluid class="grey lighten-5">
    <router-view />
  </v-container>
</template>

<script>
import Header from './components/Header.vue'


export default ({
  components: {
    Header,
  }
})
</script>


<style>

*{
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
