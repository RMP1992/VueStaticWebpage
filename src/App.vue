<template>
  <SearchBarVue />
  <NavBarVue />

  <router-view />
</template>
<script>
import SearchBarVue from "./components/SearchBar.vue";
import NavBarVue from "./components/NavBar.vue";

export default {
  components: {
    SearchBarVue,
    NavBarVue,
  },
};
</script>
<style>
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
