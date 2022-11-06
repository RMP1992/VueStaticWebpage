<template>
  <div class="nav-container">
    <div class="logo-container">
      <img :src="image" />
    </div>
    <nav class="nav-bar">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/about">What we do</router-link>
      <router-link class="link" to="/digitaldivide"
        >The digital divide</router-link
      >
      <router-link class="link" to="/getinvolved">Get involved</router-link>
      <router-link class="link" to="/ournetwork">Our network</router-link>
      <router-link class="link" to="/insights">Insights</router-link>
    </nav>
  </div>
</template>
>
<script>
import logo from "@/assets/logo.png";
export default {
  data: function () {
    return {
      image: logo,
    };
  },
  name: "NavBar",
};
</script>
<style>
.nav-container {
  display: flex;
  justify-content: space-between;
  margin: 0 5rem;
}
.nav-bar {
  width: 38rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
}
.link {
  text-decoration: none;
}
.nav-container .nav-bar a.router-link-exact-active {
  color: #000;
}
</style>
