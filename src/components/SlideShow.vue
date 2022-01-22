<template>
  <div class="moon">
    <!-- content slide show -->
    <div class="slide">
      <transition name="slide-fade" mode="out-in">
        <img
          :key="activeSlide.id"
          :src="activeSlide.im"
          :alt="activeSlide.info"
          style="max-width: -webkit-fill-available;"
        />
      </transition>
      <div class="tex">
        <vue-typer
          :text="activeSlide.content"
          :repeat="Infinity"
          :pre-type-delay="1000"
          :type-delay="100"
          :pre-erase-delay="2000"
          :erase-delay="100"
          erase-style="backspace"
          caret-animation="phase"
        ></vue-typer>
      </div>
    </div>
    <!-- controls right and left-->
    <div class="prev" v-on:click="showSlide(-1)">&#10094;</div>
    <div class="next" v-on:click="showSlide(1)">&#10095;</div>
  </div>
</template>

<script>
import table1 from "../assets/images/table1.jpg";
import man1 from "../assets/images/man1.jpg";
import laptop1 from "../assets/images/laptop1.jpg";
export default {
  name: "SlideShow",

  data: function() {
    return {
      table1: table1,
      man1: man1,
      laptop1: laptop1,
      slides: [
        {
          id: 0,
          info: "laptop",
          content: `Sites suitable for all devices`,
          im: man1,
          text: "caption 1"
        },
        {
          id: 1,
          info: "phone",
          content: `Modern designs that fit your style`,
          im: laptop1,
          text: "caption 2"
        },
        {
          id: 2,
          info: "table",
          content: `Make the site more smooth`,
          im: table1,
          text: "caption 3"
        }
      ],
      slideIndex: 0,
      show: true
    };
  },
  methods: {
    //  to change the slide
    showSlide(step) {
      var currentIndex = this.slideIndex;
      if (step + currentIndex > this.slides.length - 1 && step > 0) {
        this.slideIndex = 0;
      } else if (step + currentIndex < 0 && step < 0) {
        this.slideIndex = this.slides.length - 1;
      } else {
        this.slideIndex = currentIndex + step;
      }
    }
  },

  computed: {
    activeSlide() {
      return this.slides[this.slideIndex];
    }
  }
};
</script>
<style>
.moon {
  background-color: #b3a2a2;
  padding-bottom: 50px;
  padding-top: 100px;
  position: relative;
}

.slide .tex {
  position: absolute;
  background: rgba(75, 38, 55, 1);
  border-radius: 20px;
  padding: 20px;
  top: 55%;
  left: 50%;
  transform: translateY(-50%);

  transform: translate(-50%, -50%);
}
/*
.slide .targ {
  color: #e9e3f3;
  position: absolute;
  font-family: "Raleway", sans-serif;
  top: 57%;
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-top: 33px solid rgb(75, 38, 55, 1);
  left: 62%;
  margin: auto;

  transform: translate(-50%, -50%);
}*/
.slide {
  text-align: center;
}
.slide img {
  border-radius: 30px;
  margin-left: auto;
  margin-right: auto;
  max-height: 720px;
  display: flex;

  -webkit-box-shadow: 0px 0px 20px 0px rgba(75, 38, 55, 0.75);
  -moz-box-shadow: 0px 0px 20px 0px rgba(75, 38, 55, 0.75);
  box-shadow: 0px 0px 20px 0px rgba(75, 38, 55, 0.75);
}

.prev,
.next {
  cursor: pointer;
  text-align: center;
  padding: 21px;
  display: flex;
  position: absolute;
  top: 54%;
  -ms-transform: translateY(-50%);
  margin: 0;
  transform: translateY(-50%);
  font-size: 33px;
  cursor: pointer;
  -webkit-box-shadow: 0px 8px 16px 2px rgba(75, 38, 55, 0.75);
  -moz-box-shadow: 0px 8px 16px 2px rgba(75, 38, 55, 0.75);
  box-shadow: 0px 8px 16px 2px rgba(75, 38, 55, 0.75);
  align-items: center;
  height: 200px;
  color: #7d2941;
  font-weight: bold;
  font-size: 35px;
  transition: 0.6s ease;
  border-radius: 0 50px 50px 0;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  color: #4b2637;
  border-radius: 50px 0 0 50px;
  -webkit-box-shadow: 0px 8px 16px 2px rgba(75, 38, 55, 0.75);
  -moz-box-shadow: 0px 8px 16px 2px rgba(75, 38, 55, 0.75);
  box-shadow: 0px 8px 16px 2px rgba(75, 38, 55, 0.75);
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover {
  color: aliceblue;
  background-color: #7d2941;
}
.next:hover {
  color: aliceblue;
  background-color: #4b2637;
}
/*vue typer */
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-8deg);
  }
  50% {
    transform: rotateZ(8deg);
  }
}
.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret {
  background-color: #e9e3f3;
  padding: 2.5px;
}

.vue-typer {
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 35px;
}
.vue-typer .custom.char.typed {
  color: #e9e3f3;
}
.vue-typer .custom.char.selected {
  color: #e9e3f3;
  background-color: transparent;
}
/* On smaller screens */
@media only screen and (max-width: 750px) {
  .slide .tex {
    top: 55%;
  }
  .vue-typer .custom.caret {
    padding: 1.6px;
  }
  .vue-typer {
    font-size: 20px;
  }
}
@media only screen and (max-width: 550px) {
  .moon {
    padding-bottom: 25px;
    padding-top: 80px;
  }
  .prev,
  .next {
    font-size: 25px;
    top: 55%;

    height: 130px;
  }

  .slide img {
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 20px;
    display: flex;
  }
  .vue-typer .custom.caret {
    padding: 1.1px;
  }
  .vue-typer {
    font-size: 13px;
    padding: 0;
  }
}
@media only screen and (max-width: 360px) {
  .prev,
  .next {
    top: 58%;
    font-size: 25px;
    height: 80px;
  }
  .slide .tex {
    top: 58%;
  }
  .vue-typer .custom.caret {
    padding: 1px;
  }
  .vue-typer {
    font-size: 13px;
    padding: 0;
  }
}
/* transform fade photo in slide*/
.slide-fade-enter-active {
  transition: all 1s ease;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
