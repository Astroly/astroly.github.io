<template>
    <div class="about"> 
        <h1>This is about me </h1>
        <div class="img">
            <img src='../assets/PicProfile.png' alt="" width="150 px" height="150 px">
        </div>
    </div>
</template>

<script>
    export default {
        name :'Aboutpage'
    }
</script>

<style scoped>
    .about{
        
        height: 100vh;
        
    }
    img {
      border-radius: 50%;
     
      margin: 80px auto 0px;
      display: block;
      /* position: relative; */
      align-self: center;
    }
</style>