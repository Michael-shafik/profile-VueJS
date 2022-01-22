<template>
  <div class="ab-us">
    <div
      class="us container"
      title="
        NanoSoft is a global IT services company focusing on software
        development, IT consulting and provides offshore outsourcing solutions
        to enterprises worldwide. At Nanosoft we believe that in order to
        benefit from offshore outsourcing, it is imperative that you continue to
        control the system."
    ></div>
    <div class="line-us">
      <div class="containr left">
        <div class="content">
          <h2>Our company</h2>
          <p>
             NanoSoft is a global IT services company focusing on
            software development.
          </p>
        </div>
      </div>
      <div class="containr right">
        <div class="content">
          <h2>Our Mission</h2>
          <p>
            Our mission is very clear - provide best and fully tested products
            and solutions for our customers.
          </p>
        </div>
      </div>
    </div>
    <div id="card">
      <div id="avatar"></div>
      <div id="profile">
        <h3>Michael shafik</h3>
        <h6>Web Developer</h6>
      </div>
    </div>
  </div>
</template>

<style>
/*4b2637-7D2941-E9E3F3-B3A2A2*/
.ab-us {
  background-color: #e9e3f3;
}
.us {
  height: 700px;
  text-align: center;
  background: url("../assets/images/about-us.png?v=2");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 70% auto;
  background-color: #e9e3f3;
  max-width: -webkit-fill-available;
  max-height: -webkit-fill-available;
}
/*text on the top page 
.us p {
  padding: 30px;
  font-family: "Varela Round", sans-serif;
  font-size: 3vw;
  color: #7d2941;
    opacity: .5;
    

}

/*div container */
.ab-us .line-us {
  width: -webkit-fill-available;
  margin: 0 auto;
  position: relative;
  padding-bottom: 40px;
}
/*line to  the us after then content */
.line-us::after {
  content: "";
  position: absolute;
  width: 6px;
  background-color: #4b2637;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}
/* Container around content */
.containr {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}
/* The circles on the timeline */
.containr::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  right: -15px;
  background-color: #e9e3f3;
  border: 4px solid#B3A2A2;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}
/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 20px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid#4b2637;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #4b2637;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 20px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid #4b2637;
  border-width: 10px 10px 10px 0;
  border-color: transparent #4b2637 transparent transparent;
}
/* Fix the circle for containers on the right side */
.right::after {
  left: -15px;
}
/* The content */
.content {
  padding: 20px 30px;
  background-color: #4b2637;
  position: relative;
  border-radius: 6px;
}
.content h2,
.content p {
  color: #e9e3f3;
  font-family: "Varela Round", sans-serif;
}
#card {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
  text-align: center;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  background-size: cover;
  background-position: center center;
  position: relative;
  left: 0;
  right: 0;
  margin: auto;
  box-shadow: 0px 30px 30px -20px rgba(0, 0, 0, 1),
    inset 0 0 0 1000px rgba(44, 43, 41, 0.6);
  transition: all 0.4s cubic-bezier(0.37, 0.26, 0.109, 0.2);
}

#card:hover {
  box-shadow: 0px 30px 30px -20px rgba(0, 0, 0, 0.9),
    inset 0 0 0 1000px rgba(44, 43, 41, 0.4);
}

#card:hover #avatar {
  animation: none;
  box-shadow: 0;
  width: 175px;
  height: 175px;
}

#card:hover #profile {
  opacity: 1;
  bottom: 0;
}

#profile {
  transition: all 0.5s cubic-bezier(0.37, 0.26, 0.35, 1);
  opacity: 0;
  position: absolute;
  bottom: 20px;
  width: 100%;
}

#profile h3 {
  color: #e9e3f3;
  padding: 0;
  margin: 0;
}

#profile h6 {
  color: #e9e3f3;
  padding: 0;
  margin: 5px 0 40px 0;
  font-size: 0.9em;
}

#avatar {
  transition: all 0.4s cubic-bezier(0.37, 0.26, 0.35, 1);
  animation: circlenAn 4s infinite;
  width: 150px;
  height: 150px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: url("../assets/images/avatar.jpg?v=2");
  background-size: cover;
  background-position: center center;
  border-radius: 100%;
  box-shadow: 0px 30px 30px -25px rgba(0, 0, 0, 0.6);
}

@keyframes circlenAn {
  0% {
    box-shadow: 0px 30px 30px -25px rgba(0, 0, 0, 0.6),
      0px 0px 0px 0px rgba(74, 67, 61, 1), 0px 0px 0px 0px rgba(74, 67, 61, 0.7),
      0px 0px 0px 0px rgba(74, 67, 61, 0.5);
  }
  100% {
    box-shadow: 0px 30px 30px -25px rgba(0, 0, 0, 0.6),
      0px 0px 0px 70px rgba(74, 67, 61, 0),
      0px 0px 0px 200px rgba(74, 67, 61, 0),
      0px 0px 0px 300px rgba(74, 67, 61, 0);
  }
}
@media screen and (max-width: 600px) {
  .us {
    height: 350px;
  }
  /* Place the timelime to the left */
  .line-us::after {
    left: 31px;
  }

  /* Full-width containers */
  .containr {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  /* Make sure that all arrows are pointing leftwards */
  .containr::before {
    left: 60px;
    border: medium solid #4b2637;
    border-width: 10px 10px 10px 0;
    border-color: transparent #4b2637 transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after,
  .right::after {
    left: 15px;
  }

  /* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
  /* res text */
  .content h2 {
    font-size: 3vmax;
  }
  .content p {
    font-size: 2vmax;
  }
  /* card in small screen */
  #card {
    width: 175px;
    height: 175px;
  }
  #card:hover #avatar {
    width: 110px;
    height: 110px;
  }
  #avatar {
    width: 90px;
    height: 90px;
  }
  #profile h3 {
    font-size: 3.5vw;
  }

  #profile h6 {
    font-size: 2.5vw;
  }
}
</style>

<script>
export default {
  name: "AboutUs"
};
</script>
