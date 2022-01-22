<template>
  <div id="app">
    <div class="nav-top" id="my-nav">
      <router-link to="/" id="i-brand">
        <img
          id="i-img"
          src="./assets/images/logoo.jpg"
          style="width:35px;height:35px;"
          alt="brand"
        />
        <span id="s-brand">NanoSoft Design</span>
      </router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/contact">Contact</router-link>
      <!-- <div class="dropdown">
        <button class="dropbtn">
          Dropdown
          <i class="fa fa-caret-down"></i>
        </button>
       <div class="dropdown-content">
          <router-link to="/our">Link 1</router-link>
          <router-link to="/our">Link 3</router-link>
          <router-link to="/our">Link 2</router-link>
        </div> 
      </div>-->
      <router-link to="/about">About Us</router-link>
      <a
        class="icon"
        @click="myFunction($event)"
        id="i-res"
        href="javascript:void(0)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background:new 0 0 512 512;"
          xml:space="preserve"
          width="27px"
          height="27px"
          class
        >
          <g>
            <g>
              <g>
                <path
                  d="M467,61H165c-24.82,0-45,20.19-45,45c0,24.82,20.18,45,45,45h302c24.81,0,45-20.18,45-45C512,81.19,491.81,61,467,61z"
                  data-original="#000000"
                  class="active-path"
                  data-old_color="#000000"
                  fill="#B3A2A2"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M467,211H165c-24.82,0-45,20.19-45,45c0,24.82,20.18,45,45,45h302c24.81,0,45-20.18,45-45C512,231.19,491.81,211,467,211z    "
                  data-original="#000000"
                  class="active-path"
                  data-old_color="#000000"
                  fill="#B3A2A2"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M467,361H165c-24.82,0-45,20.19-45,45c0,24.82,20.18,45,45,45h302c24.81,0,45-20.18,45-45C512,381.19,491.81,361,467,361z    "
                  data-original="#000000"
                  class="active-path"
                  data-old_color="#000000"
                  fill="#B3A2A2"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M45,61C20.18,61,0,81.19,0,106c0,24.82,20.18,45,45,45c24.81,0,45-20.18,45-45C90,81.19,69.81,61,45,61z"
                  data-original="#000000"
                  class="active-path"
                  data-old_color="#000000"
                  fill="#B3A2A2"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M45,211c-24.82,0-45,20.19-45,45c0,24.82,20.18,45,45,45c24.81,0,45-20.18,45-45C90,231.19,69.81,211,45,211z"
                  data-original="#000000"
                  class="active-path"
                  data-old_color="#000000"
                  fill="#B3A2A2"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M45,361c-24.82,0-45,20.19-45,45c0,24.82,20.18,45,45,45c24.81,0,45-20.18,45-45C90,381.19,69.81,361,45,361z"
                  data-original="#000000"
                  class="active-path"
                  data-old_color="#000000"
                  fill="#B3A2A2"
                />
              </g>
            </g>
          </g>
        </svg>
      </a>
    </div>
    <!--<transition
    enter-active-class="animated fadeInDown"
    leave-active-class="animated fadeDown">-->
    <router-view style="animation-duration: 0.5s"></router-view>
    <!--</transition>-->
  </div>
</template>

<style></style>
<script>
export default {
  methods: {
    myFunction: function() {
      var x = document.getElementById("my-nav");
      if (x.className === "nav-top") {
        x.className += " responsive";
      } else {
        x.className = "nav-top";
      }
    }
  }
};
</script>
