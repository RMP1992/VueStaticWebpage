<template>
  <div class="second-banner">
    <div class="left-banner">
      <img class="s-banner" :src="banner" />
    </div>
    <div class="right-banner">
      <h2 class="s-title">
        We are a social change charity, helping people to improve their lives
        through digital.
      </h2>
      <p class="s-paragraph">
        We tackle the most pressing issues of our time, working with partners in
        thousands of communities across the UK and further afield.
      </p>
      <button class="learn-more-btn">Learn more about us</button>
    </div>
  </div>
</template>
<style>
.second-banner {
  display: flex;
  flex-direction: row;
}
.right-banner {
  width: 50vw;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: rgb(41, 121, 97);
  color: #fff;
}
.left-banner {
  width: 50vw;
}
.s-banner {
  width: inherit;
  height: 25.5rem;
}
.s-title {
  font-size: 2rem;
}
.learn-more-btn {
  background-color: inherit;
  width: 14rem;
  color: #fff;
  padding: 0.7rem 0;
  border-radius: 20px;
  font-weight: 700;
  border: 2px solid #fff;
  margin-top: 2rem;
}
.s-paragraph {
  font-size: 1.2rem;
}
</style>
<script>
import charity2 from "../assets/charity2.jpg";
export default {
  data: function () {
    return {
      banner: charity2,
    };
  },
  name: "SecondBanner",
};
</script>
