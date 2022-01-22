<template>
  <div class="o-blog">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm col-md-6">
          <div class="pjt-card" data-aos="flip-left">
            <a href="" class="pjt-link">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="project1"
                class="img rounded"
              />
              <p>project 1</p></a
            >
          </div>
        </div>
        <div class="col-sm col-md-6">
          <div class="pjt-card" data-aos="flip-left">
            <a href="" class="pjt-link">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="project2"
                class="img rounded"
              />
              <p>project 2</p></a
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm col-md-6">
          <div class="pjt-card" data-aos="flip-left">
            <a href="" class="pjt-link">
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="project3"
                class="img rounded"
              />
              <p>project 3</p></a
            >
          </div>
        </div>
        <div class="col-sm col-md-6">
          <div class="pjt-card" data-aos="flip-left">
            <a href="" class="pjt-link">
              <img
                src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80"
                alt="project4"
                class="img rounded"
              />
              <p>project 4</p></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/*4b2637-7D2941-E9E3F3-B3A2A2*/

.o-blog {
  background-color: #e9e3f3;
  padding: 0;
  padding-top: 100px;
  justify-content: center;
  height: 100%;
  padding-bottom: 20px;
}

.pjt-card {
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pjt-link img {
  max-width: 400px;
  min-width: 400px;
  min-height: 250px;
  height: auto;
  max-height: 250px;
  box-shadow: 0px 30px 30px -20px rgba(0, 0, 0, 1),
    inset 0 0 0 1000px rgba(44, 43, 41, 0.6);
}
.pjt-link:hover {
  transform: translateY(5px);
  transition: 0.4s;
}

.pjt-link p {
  position: absolute;
  top: 50%;
  text-align: center;

  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Varela Round", sans-serif;
  color: #b3a2a2;
  background-color: #4b2637;
  opacity: 0.7;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 0;
  transition: 0.4s;

  font-size: 3vw;
}

@media screen and (max-width: 600px) {
  .pjt-card {
    margin-left: 0;
    margin-right: 0;
    padding: 0;
  }
  .pjt-link img {
    min-width: 0;
    min-height: 0;
    width: 250px;
    height: auto;
  }
  .pjt-link p {
    font-size: 6vw;
  }
}
</style>

<script>
export default {
  name: "BlogComp"
};
</script>
