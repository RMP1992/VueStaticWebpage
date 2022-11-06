<template>
  <div class="hero-banner">
    <div class="text-container">
      <h1 class="title">Get online week 2021</h1>
      <p class="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        nobis itaque quod, aliquam ad iure optio fugit placeat libero saepe
        veritatis nesciunt voluptatibus expedita corporis fugiat quos fuga
        assumenda repellat.
      </p>
      <button class="get-involved-btn">Get involved now!</button>
    </div>
  </div>
</template>
<style>
.hero-banner {
  background-image: url("../assets/charity.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 32rem;
  background-position: center;
}
.text-container {
  width: 50rem;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 4rem;
  color: #fff;
  background-color: rgb(34, 94, 129);
  width: 41rem;
  margin-top: 4rem;
}
.paragraph {
  font-size: 1.1rem;
  width: 35rem;
  display: flex;
  text-align: left;
  margin: 1rem 0 2rem 0;
  background-color: #fff;
  padding: 2rem 1.5rem;
  color: rgb(3, 129, 98);
  border-radius: 5px;
}
.get-involved-btn {
  width: 14rem;
  color: rgb(187, 30, 43);
  padding: 0.7rem 0;
  border-radius: 20px;
  font-weight: 700;
  border: none;
}
</style>
<script>
export default {
  name: "HeroBanner",
};
</script>
