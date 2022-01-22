<template>
  <div class="about">
    <BlogComp />
    <Footer />
  </div>
</template>

<script>
import BlogComp from "@/components/BlogComp.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Blog",
  components: {
    BlogComp,
    Footer
  }
};
</script>
