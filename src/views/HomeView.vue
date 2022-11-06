<template>
  <div class="home">
    <HeroBannerVue />
    <SecondBanner />
    <HelpBanner />
    <InfoBanner />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBannerVue from "@/components/HeroBanner.vue";
import SecondBanner from "@/components/SecondBanner.vue";
import HelpBanner from "@/components/HelpBanner.vue";
import InfoBanner from "@/components/InfoBanner.vue";

export default {
  components: {
    HeroBannerVue,
    SecondBanner,
    HelpBanner,
    InfoBanner,
  },
  name: "HomeView",
};
</script>
