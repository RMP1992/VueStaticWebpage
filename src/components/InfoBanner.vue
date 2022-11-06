<template>
  <div class="info-banner">
    <div class="intro">
      <h2 class="intro-title">What do we do?</h2>
      <p>
        You might not have heard of us, but we're the people behind the
        following impactful programmes.
      </p>
    </div>
    <div class="card-wrapper">
      <div class="card" v-for="(item, i) in items" :key="i">
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-text">{{ item.text }}</p>
        <button class="card-cta info-cta">{{ item.cta }}</button>
      </div>
    </div>
    <button class="secondary-cta info-cta">More about what we do</button>
  </div>
</template>
<style>
.info-banner {
  background-color: rgb(34, 94, 129);
  color: #fff;
  padding: 2rem 5rem;
}
.intro {
  display: flex;
  text-align: left;
  flex-direction: column;
  margin: 1rem 0 1rem;
}
.intro-title {
  margin: 0;
}
.card-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card {
  background-color: #fff;
  color: #000;
  padding: 2rem;
}
.info-cta {
  border-radius: 24px;
  padding: 0.7rem 1.2rem;
  border-width: 1px;
  background-color: #fff;
  color: rgb(187, 30, 43);
  font-weight: 700;
}
.secondary-cta {
  border: none;
  margin: 2rem 0 0;
}
</style>
<script>
export default {
  data: function () {
    return {
      items: [
        {
          title: "Get online week",
          text: "Lorem ipsum dolor sit amet",
          cta: "Read more",
        },
        {
          title: "Learn my way",
          text: "Lorem ipsum dolor sit amet",
          cta: "Read more",
        },
        {
          title: "Make it click",
          text: "Lorem ipsum dolor sit amet",
          cta: "Read more",
        },
        {
          title: "Digital you",
          text: "Lorem ipsum dolor sit amet",
          cta: "Read more",
        },
      ],
    };
  },
  name: "InfoBanner",
};
</script>
