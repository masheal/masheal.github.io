<template>
  <div id="app">
    <div class='tab'>
      <Tab :tab='tabNode'></Tab>
    </div>
    <div class='tab'>
      <Sildetab :slide='Sildetab'></Sildetab>
    </div>
    
  </div>
</template>

<script>
import Tab from './tab.vue'

import Sildetab from './sildetab.vue'

export default {
  data () {
    return {
      tabNode:{
        image:['./src/img/1.jpg','./src/img/2.jpeg','./src/img/3.jpg','./src/img/4.jpg','./src/img/5.jpg'],
        index:0,
        bottomNode:-56,
        interval:null
      },
      Sildetab:{
        image:['./src/img/1.jpg','./src/img/2.jpeg','./src/img/3.jpg','./src/img/4.jpg','./src/img/5.jpg','./src/img/6.jpeg','./src/img/7.jpeg']
      }
    }
  },
  components:{
    Tab,Sildetab
  }
}
</script>

<style>
*{margin:0;padding:0;list-style:none;}

body {
  font-family: Helvetica, sans-serif;
}
.tab{}
</style>
