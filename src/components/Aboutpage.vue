<template>
  <div class="about">
    <h1>This is about me</h1>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">

          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">It's me</h5>
              <img src="../assets/PicProfile.png" alt width="150 px" height="150 px" />
              <p class="card-text"> I am Nitipon Numlamun. <br />You can call "Best"</p>    
            </div>
          </div>

        </div>
        <div class="carousel-item">

          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Education</h5>
              <img src="../assets/graduation-cap.png" alt width="80 px" height="80 px" />
              <p class="card-text"> Bachelor of Science<br />Software Engineering <br />Prince of Songkla University Phuket campus</p>
            </div>
          </div>

        </div>
      </div>
      <a
        class="carousel-control-prev"  href="#carouselExampleControls"  role="button" data-slide="prev"  >
 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aboutpage"
};
</script>

<style scoped>
.about {
  height: 100vh;
}
img {
  border-radius: 50%;

  margin: 20px auto 0px;
  display: block;

  /* position: relative; */
  align-self: center;
}
.card {
  margin: auto;
  padding: 10px;
  background-color: #f0f8ff8f;
  box-shadow: 5px 10px 5px #726f6f3d;
}
h1 {
  text-shadow: 5px 5px #726f6f21;
}
</style>