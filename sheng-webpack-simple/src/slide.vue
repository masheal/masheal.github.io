<template>
    <ul class="slide">
        <li v-for='i in imgs' :style='{backgroundImage:"url("+i+")",backgroundSize:"cover"}'></li>
    </ul>
</template>

<script>
export default {
    props:['slide'],
    data () {
        return {
            imgs:[]
        }
    },
    methods: {
        
    },
    ready () {
        this.imgs = this.slide.img
    }
}
</script>

<style>
.slide{width: 490px;height: 290px;border: 1px solid black;position: relative;margin-left: 50%;transform: translateX(-50%);margin-top: 50px;overflow: hidden;}
.slide li {width:230px;height:150px;position: absolute;left: 50%;transform: translateX(-50%);top: 25%;}
</style>
