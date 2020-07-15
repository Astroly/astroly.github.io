<template>
    <div class="contact"> 
        <h1>Contact Me</h1>
        <div class="card" style="width: 18rem;">
        <div class="card-body">
         <p class="card-text"><img class="img" src="../assets/gmail.png" alt="" width="50 px" height="50 px"> nitipon000@gmail.com</p>
         <p class="card-text"><img class="img" src="../assets/phone.png" alt="" width="50 px" height="50 px">+668 2245 4815</p>
         <p class="card-text"><img class="img" src="../assets/line.png" alt="" width="50 px" height="50 px"><a href="http://line.me/ti/p/~best.ntp" >best.ntp</a></p>
         <p class="card-text"><img class="img" src="../assets/facebook.png" alt="" width="50 px" height="50 px"><a href="https://facebook.com/nitipon.numlamun" >Nitipon Numlamun</a></p>
         <p class="card-text"><img class="img" src="../assets/instagram.png" alt="" width="50 px" height="50 px"><a href="https://instagram.com/best.ntp" >best.ntp</a></p>   
        </div>
        </div>
        <div class="card" style="width: 18rem;">
        <div class="card-body">
         <p class="card-text-2"><img class="img" src="../assets/home.png" alt="" width="50 px" height="50 px"> 24 Village No.6 Bangprom Bangkontee Samutsongkhram 75120 Thailand</p>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name :'Contactpage'
    }
</script>

<style scoped>
    .contact{
        /* background-color: #515353; */
        height: 100vh;
    }
    .card{
    margin: auto;
    padding: 10px;
    
    background-color: #f0f8ff8f;
    box-shadow:5px 10px 5px #726f6f3d;
}
.card-text{
    text-align: left;
}
h1{
  text-shadow: 5px 5px #726f6f21;
}
.img{
    border: 10px #726f6f21;
}
</style>