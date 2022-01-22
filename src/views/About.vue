<template>
  <div class="about">
    <AboutUs />
    <Footer />
  </div>
</template>

<script>
import AboutUs from "@/components/AboutUs.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "About",
  components: {
    AboutUs,
    Footer
  }
};
</script>
