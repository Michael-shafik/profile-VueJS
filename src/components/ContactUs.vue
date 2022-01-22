<template>
  <div class="contact">
    <!-- <button @click="more()" type="button" class="btn btn-secondary">
    </button> -->
    <div class="c-us">
      <br />
      <br />
      <h1 class="text-h">Contact us via</h1>
      <div class="cot container">
        <div class="row">
          <div class="col-md-12">
            <div class="main-timeline">
              <div class="timeline">
                <i class="fa fa-facebook-f"></i>
                <a
                  href="https://www.facebook.com/100002599181283/"
                  target="_blank"
                  title="facebook"
                  class="timeline-content"
                >
                  <h3 class="title">Facebook</h3>
                  <p class="description">
                    we will are hapy to call us for our services, Contact us at
                    any time through our facebook page
                  </p>
                </a>
              </div>
              <div class="timeline">
                <i class="fa fab fa-discord"></i>
                <div
                  @click="copyed2"
                  title="copy discord"
                  class="timeline-content"
                >
                  <h3 class="title">Discord</h3>
                  <p class="description">
                    we will are hapy to call us for our services, Contact us at
                    any time through our Discord account
                  </p>
                </div>
              </div>
              <div class="timeline">
                <i class="fa fab fa-google-plus-g"></i>
                <a
                  href="https://mail.google.com/mail/u/0/#chats/FMfcgxwDrlWwttJGlwPcKvSskKcSGwXs"
                  title="gmail"
                  target="_blank"
                  class="timeline-content"
                >
                  <h3 class="title">Google Plus</h3>
                  <p class="description">
                    we will are hapy to call us for our services, Contact us at
                    any time through our Gmail account
                  </p>
                </a>
              </div>
              <div class="timeline">
                <i class="fa fa-whatsapp"></i>
                <div
                  @click="copyed"
                  title="copy WhatsApp"
                  class="timeline-content"
                >
                  <h3 class="title">Whats App</h3>
                  <p class="description">
                    we will are hapy to call us for our services, Contact us at
                    any time through our Whatsapp number
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--content sources for phones and screen small than 638px -->
      <div class="frame container">
        <a
          href="https://www.facebook.com/100002599181283/"
          target="_blank"
          class="btn"
        >
          <i class="fab fa-facebook-f" style="color: #3b5998"></i>
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#chats/FMfcgxwDrlWwttJGlwPcKvSskKcSGwXs"
          target="_blank"
          class="btn"
        >
          <i class="fab fa-google-plus-g" style="color: #00acee"></i>
        </a>
        <a @click="copyed2" class="btn">
          <i class="fab fa-discord" style="color: #ea4c89"></i>
        </a>
        <a @click="copyed" class="btn">
          <i class="fab fa-whatsapp" style="color: #0e76a8"></i>
        </a>
      </div>
      <br />
      <br />
    </div>
  </div>
</template>

<style>
/*4b2637-7D2941-E9E3F3-B3A2A2*/
.c-us {
  background-color: #e9e3f3;
  text-align: center;
}
/*.c-us img {
/*  background: url("https://blush.ly/F7xodrzZF/p?bg=e9e3f3");
  background-size: cover;*/ /*
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-height: 720px;

  max-width: -webkit-fill-available;
}
*/
.c-us .text-h {
  color: #7d2941;
  font-family: "Varela Round", sans-serif;
  font-size: 5vmax;
  position: relative;
  top: 70px;
  padding-bottom: 40px;
}

.main-timeline {
  padding-top: 50px;
  top: 116px;
  font-family: "Varela Round", sans-serif;
  overflow: hidden;
  position: relative;
}

.main-timeline::before {
  content: "";
  width: 7px;
  height: 130px;
  background: #b3a2a2;
  margin: 0 auto;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
}

.main-timeline .timeline {
  width: 50%;
  float: left;
  padding: 20px 60px;
  border-top: 7px solid#B3A2A2;
  border-right: 7px solid#B3A2A2;
  border-radius: 0 30px 0 0;
  position: relative;
  right: -3.5px;
}

.main-timeline .fa {
  display: block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  background: #3578e5;
  border: 1px solid white;
  border-radius: 50%;
  color: white;
  text-align: center;
  font-size: 26px;
  box-shadow: 0 0 0 2px#3578E5;
  position: absolute;
  top: -30px;
  left: 0;
}
.main-timeline .svg-inline--fa {
  padding: 9px;
}
.main-timeline .timeline-content {
  display: block;
  padding: 30px 10px 10px;
  border-radius: 20px;
  cursor: pointer;
  background: #3578e5;
  color: white;
  position: relative;
}

.main-timeline .timeline-content:hover {
  text-decoration: none;
  color: white;
}

.main-timeline .timeline-content::before,
.main-timeline .timeline-content::after {
  content: "";
  display: block;
  width: 10px;
  height: 50px;
  border-radius: 10px;
  background: #3578e5;
  border: 1px solid white;
  position: absolute;
  top: -35px;
  left: 50px;
}

.main-timeline .timeline-content::after {
  left: auto;
  right: 50px;
}

.main-timeline .title {
  font-size: 24px;
  margin: 0;
}

.main-timeline .description {
  font-size: 15px;
  letter-spacing: 1px;
  margin: 0 0 5px 0;
}

.main-timeline .timeline:nth-child(2n) {
  border-right: none;
  border-left: 7px solid #b3a2a2;
  border-radius: 30px 0 0 0;
  right: auto;
  left: -3.5px;
}

.main-timeline .timeline:nth-child(2n) .fa {
  left: auto;
  right: 0;
}

.main-timeline .timeline:nth-child(2) {
  margin-top: 120px;
}

.main-timeline .timeline:nth-child(odd) {
  margin: -20px 0 30px 0;
}

.main-timeline .timeline:nth-child(even) {
  margin-bottom: 100px;
}

.main-timeline .timeline:nth-child(3) {
  margin-top: -130px;
}

.main-timeline .timeline:nth-child(2n) .timeline-content,
.main-timeline .timeline:nth-child(2n) .timeline-content:before,
.main-timeline .timeline:nth-child(2n) .timeline-content:after,
.main-timeline .timeline:nth-child(2n) .fa {
  background: #7289da;
}

.main-timeline .timeline:nth-child(2n) .fa {
  box-shadow: 0 0 0 2px#7289da;
}

.main-timeline .timeline:nth-child(3n) .timeline-content,
.main-timeline .timeline:nth-child(3n) .timeline-content:before,
.main-timeline .timeline:nth-child(3n) .timeline-content:after,
.main-timeline .timeline:nth-child(3n) .fa {
  background: #d93025;
}

.main-timeline .timeline:nth-child(3n) .fa {
  box-shadow: 0 0 0 2px #d93025;
}

.main-timeline .timeline:nth-child(4n) .timeline-content,
.main-timeline .timeline:nth-child(4n) .timeline-content:before,
.main-timeline .timeline:nth-child(4n) .timeline-content:after,
.main-timeline .timeline:nth-child(4n) .fa {
  background: #00af9c;
}

.main-timeline .timeline:nth-child(4n) .fa {
  box-shadow: 0 0 0 2px #00af9c;
}
/*the class for fram */

.c-us .frame {
  display: none;
  top: 50px;
  flex-direction: row;
  background-color: #e9e3f3;
  justify-content: space-around;
  align-items: center;
  height: 150px;
  min-width: 150px;
  padding: 16px;
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001;
  transition: box-shadow 0.6s cubic-bezier(0.79, 0.21, 0.06, 0.81);
  border-radius: 10px;
  z-index: 1;
  position: relative;
}

.c-us .frame .btn {
  height: 50px;
  width: 50px;
  border-radius: 3px;
  background: #e0e5ec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001;
  transition: box-shadow 0.6s cubic-bezier(0.79, 0.21, 0.06, 0.81);
  font-size: 16px;
  color: rgba(42, 52, 84, 1);
  text-decoration: none;
}
/* for icon size */
div.contact > div > div.frame.container > a:nth-child(1) > svg {
  width: 30px;
  height: 30px;
}
div.contact > div > div.frame.container > a:nth-child(2) > svg {
  width: 30px;
  height: 50px;
}
div.contact > div > div.frame.container > a:nth-child(3) > svg {
  width: 30px;
  height: 40px;
}
div.contact > div > div.frame.container > a:nth-child(4) > svg {
  width: 30px;
  height: 40px;
}
.c-us .frame .btn:active {
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
}

/*to hide the content out side the div*/
@media screen and (max-width: 638px) {
  .c-us .cot {
    display: none;
  }
  .c-us .frame {
    display: flex;
  }
  .c-us {
    padding-bottom: 50px;
  }
}

@media screen and (max-width: 350px) {
  .c-us .frame {
    height: 90px;
    min-width: 100px;
  }
  .c-us .frame .btn {
    height: 40px;
    width: 40px;
  }
  .c-us .text-h {
    font-size: 12vmin;
  }
  div.contact > div > div.frame.container > a:nth-child(1) > svg {
    width: 20px;
    height: 20px;
  }
  div.contact > div > div.frame.container > a:nth-child(2) > svg {
    width: 25px;
    height: 40px;
  }
  div.contact > div > div.frame.container > a:nth-child(3) > svg {
    width: 20px;
    height: 30px;
  }
  div.contact > div > div.frame.container > a:nth-child(4) > svg {
    width: 20px;
    height: 30px;
  }
}
</style>
<script>
export default {
  name: "ContactUs",
  methods: {
    more: function() {
      this.$emit("more");
    },
    copyed: function() {
      this.$emit("copyed");
    },
    copyed2: function() {
      this.$emit("copyed2");
    }
  }
};
</script>
