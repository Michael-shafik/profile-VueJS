<template>
  <div class="home">
    <SlideShow />
    <BlobComp />
    <CardsComp />
    <Footer
      v-on:copyed="textcopy('01157780865')"
      v-on:copyed2="textcopy('Ahmedmohamed4#3686')"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import SlideShow from "@/components/SlideShow.vue";
import BlobComp from "@/components/BlobComp.vue";
import CardsComp from "@/components/CardsComp.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    SlideShow,
    BlobComp,
    CardsComp,
    Footer
  },
  methods: {
    textcopy: function(text) {
      let create = document.createElement("textarea");
      // answer
      let ans = "";
      create.value = text;
      create.id = "cp";
      document.body.appendChild(create);
      // select the text
      create.select();
      // try or catch
      try {
        // the command copy
        let yes = document.execCommand("copy");
        if (yes) ans = "Text copyed !";
        else ans = "Unable to copy!";
      } catch (er) {
        ans = "Unsupported Browser !";
      }
      document.body.removeChild(create);
      alert(ans);
    }
  }
};
</script>
