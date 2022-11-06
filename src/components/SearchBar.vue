<template>
  <div class="searchBar">
    <div class="bar">
      <button class="search-btn btn">
        <i class="fas fa-search"></i>Search
      </button>
      <div class="btn-container">
        <button class="learn-btn btn">Learn</button>
        <button class="donate-btn btn">Donate</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  mounted() {
    let script = document.createElement("script");
    script.setAttribute("src", "https://kit.fontawesome.com/a076d05399.js");
    document.head.appendChild(script);
  },
  name: "SearchBar",
};
</script>
<style>
.bar {
  border-bottom: solid rgb(206, 202, 202) 0.4px;
  height: 2rem;
  display: flex;
  justify-content: space-between;
}
.btn {
  font-weight: 800;
  height: inherit;
}
.search-btn {
  background-color: #fff;
  border: solid rgb(206, 202, 202) 0.4px;
  position: relative;
  left: 5rem;
  border-top: none;
  width: 7rem;
}
.btn-container {
  position: relative;
  right: 5rem;
  height: inherit;
}
.btn-container .btn {
  width: 5rem;
}
.learn-btn {
  background-color: #fff;
  border: 0.4px solid rgb(206, 202, 202);
  border-bottom: 3px solid rgb(0, 128, 43);
  border-top: none;
  height: 1.85rem;
}
.donate-btn {
  background-color: rgb(187, 30, 43);
  color: #fff;
  border: none;
}
i {
  margin-right: 0.5rem;
}
</style>
