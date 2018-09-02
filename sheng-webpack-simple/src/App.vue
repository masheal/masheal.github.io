<template>
  <div id="app">
    <tab class="outNode"></tab>
  </div>
</template>

<script>
import tab from './tab.vue'

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style>
body {font-family: Helvetica, sans-serif;}
*{margin: 0;padding: 0;list-style-type: none;}
.outNode{width: 490px;height: 290px;border: 1px solid black;position: absolute;margin-left: 50%;transform: translateX(-50%);margin-top: 50px;}
</style>
