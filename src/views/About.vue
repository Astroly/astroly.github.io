<template>
  <div class="about">
    <Aboutpage />
  </div>
</template>

<script>
import Aboutpage from '@/components/Aboutpage.vue'
  export default {
    name : 'About',
    components:{
      Aboutpage
    }
  }
</script>

<style  scoped>
.about{
  height: 100vh;
}
</style>