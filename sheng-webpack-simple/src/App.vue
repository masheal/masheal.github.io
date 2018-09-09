<template>
  <div id="app">
    <div>
      <slide :slide='slideNode'></slide>
      <tab :tab='tabNode' ></tab>
    </div>
  </div>
</template>

<script>
import tab from './tab.vue'
import slide from './slide.vue'

export default {
  data () {
    return {
      tabNode:{
        img:['./src/images/1.jpg','./src/images/2.jpeg','./src/images/3.jpg','./src/images/4.jpg','./src/images/5.jpg'],
        index:0,
        bottomNode:-56,
        opacityN:1,
        interval:null
      },
      slideNode:{
        img:['./src/images/1.jpg','./src/images/2.jpeg','./src/images/3.jpg','./src/images/4.jpg','./src/images/5.jpg','./src/images/6.jpeg','./src/images/7.jpeg'],
        index:0
      }
    }
  },
  components:{
    tab,
    slide
  }
}
</script>

<style>
body {font-family: Helvetica, sans-serif;}
*{margin: 0;padding: 0;list-style-type: none;}
</style>
