<template>
  <div class="Blob">
    <div class="wave-header">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#b3a2a2"
          fill-opacity="1"
          d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,101.3C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
    <div class="conter">
      <div class="text1">
        <h1 data-aos="flip-down">Wonderful ideas and designs for</h1>
      </div>
      <div class="text2">
        <h2 data-aos="flip-left">web pages</h2>
      </div>
      <img
        class="imgb"
        src="https://i.postimg.cc/L6fvvC3x/humanns.png"
        alt="characters"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "BlobComp",
  data: function() {
    return {};
  },
  methods: {}
};
</script>
<style>
.Blob {
  background-color: #7d2941;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.imgb {
  margin-left: auto;
  margin-right: auto;
  max-height: 720px;
  width: auto;

  max-width: -webkit-fill-available;
}
.wave-header {
  margin-bottom: -1px;
  margin-top: -1px;
}
.text1,
.text2 {
  text-align: center;
  text-transform: capitalize;
  padding-right: 30px;
  padding-left: 30px;
  padding-bottom: 30px;
}

.text1 h1 {
  display: inline-block;
  font-size: 3.5rem !important;
  font-family: "Raleway", sserifans-;
  color: #e9e3f3;
  padding: 6px;
}

.text2 h2 {
  display: inline-block;
  font-size: 3.5rem !important;
  font-family: "Raleway", sans-serif;
  color: #e9e3f3;
}

@media only screen and (max-width: 950px) {
  .text1 h1 {
    font-size: 3em !important;
    padding-right: 20px;
    padding-left: 20px;
  }
  .text2 h2 {
    font-size: 2.5em !important;
    padding-right: 15px;
    padding-left: 15px;
  }
}
@media only screen and (max-width: 750px) {
  .text1 h1 {
    font-size: 2em !important;
    padding-right: 15px;
    padding-left: 15px;
  }
  .text2 h2 {
    font-size: 1.7em !important;
    padding-right: 15px;
    padding-left: 15px;
  }
}
@media only screen and (max-width: 550px) {
  .text1 h1 {
    font-size: 1.7em !important;
    padding-right: 10px;
    padding-left: 10px;
  }
  .text2 h2 {
    font-size: 1.4em !important;
    padding-right: 10px;
    padding-left: 10px;
  }
}
</style>
