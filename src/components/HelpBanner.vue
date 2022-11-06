<template>
  <div class="help-banner">
    <div class="top-container">
      <h2>How can we help you?</h2>
      <p>
        Let us know who you are and what you're looking for, and we'll help get
        you to the right place.
      </p>
    </div>
    <div class="cta-container">
      <p class="cta-paragraph">
        I am <span>an Individual<i class="fas fa-chevron-down"></i></span> and I
        want
        <span>want to learn<i class="fas fa-chevron-down"></i></span>
      </p>
      <button class="cta">Start now</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "HelpBanner",
};
</script>
<style>
.help-banner {
  padding: 0 5rem;
  background-color: lightgray;
  height: 18rem;
}
.top-container {
  display: flex;
  text-align: left;
  flex-direction: column;
}
.top-container h2 {
  font-size: 2rem;
}
.cta-paragraph span {
  color: rgb(34, 94, 129);
  padding-bottom: 0.2rem;
  border-bottom: 0.15rem solid rgb(34, 94, 129);
}
.cta-paragraph {
  font-weight: 600;
  font-size: 1.5rem;
}
.cta-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-top: 1.5rem;
}
.cta {
  background-color: rgb(187, 30, 43);
  border-radius: 25px;
  width: 7rem;
  height: 2.4rem;
  margin: 0 1rem;
  border: none;
  color: #fff;
}
</style>
