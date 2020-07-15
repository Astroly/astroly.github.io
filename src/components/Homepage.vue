<template>
    <div class="home">
        <!-- <h1>Home Page</h1> -->
       <p class="line-1 anim-typewriter">Welcome to my Website :)</p>
    </div>
</template>

<script>
    export default {
        name : 'Homepage'
    }
</script>

<style scoped>

.home{
    /* background-color: brown; */
    height: 100vh;
    
   
}
/* Google Fonts */
@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);

/* Global */
html{
  /* min-height: 100%; */
  overflow: hidden;
}
body{
  height: calc(100vh - 8em);
  padding: 10em;
  color: rgba(255,255,255,.75);
  font-family: 'Anonymous Pro', monospace;  
  background-color: rgb(25,25,25);  
}
.line-1{
    position: relative;
    top: 30%;  
    width: 13em;
    margin: 0 auto;
    border-right: 2px solid rgba(255,255,255,.75);
    font-size: 24px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);    
    text-shadow: 5px 5px 2px #5c575756;
}

/* Animation */
.anim-typewriter{
  animation: typewriter 4s steps(44) 1s 1 normal both,
             blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter{
  from{width: 0;}
  to{width: 13em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}
</style>