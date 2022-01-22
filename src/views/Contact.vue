<template>
  <div class="contact">
    <ContactUs
      v-on:copyed="textcopy('01157780865')"
      v-on:copyed2="textcopy('Ahmedmohamed4#3686')"
    />
    <Footer />
  </div>
</template>

<script>
import ContactUs from "@/components/ContactUs.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Contact",
  components: {
    ContactUs,
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
