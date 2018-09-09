<template>
    <ul class="slide">
        <li v-for='i in imgs' :style='{backgroundImage:"url("+i+")",backgroundSize:"cover"}' :class='allClass[$index]' @click='change($index)'></li>
    </ul>
</template>

<script>
export default {
    props:['slide'],
    data () {
        return {
            imgs:[],
            allClass:[],
            index:''
        }
    },
    methods: {
        change (thisIndex) {
            console.log(thisIndex,this.index)
            if (thisIndex > this.index) {
                this.allClass.push(this.allClass.shift())
            } else {
                this.allClass.unshift(this.allClass.pop())
            }
            this.index = thisIndex
        }
    },
    ready () {
        this.imgs = this.slide.img
        for(var i = 0; i < this.imgs.length; i++){
            this.allClass.push('s' + i)
        }
        this.index = this.slide.index
    }
}
</script>

<style>
.slide{width: 490px;height: 290px;position: relative;margin-left: 50%;transform: translateX(-50%);margin-top: 50px;overflow: hidden;}
.slide li {width:230px;height:150px;position: absolute;left: 50%;transform: translateX(-50%);top: 25%;transition: 0.5s;}
.slide .s0 {transform: perspective(800px) translate(-450px) rotateY(90deg);z-index: 2;opacity: 0.1;}
.slide .s1 {transform: perspective(800px) translate(-300px) rotateY(60deg);z-index: 3;opacity: 0.2;}
.slide .s2 {transform: perspective(800px) translate(-150px) rotateY(30deg);z-index: 4;opacity: 0.5;}
.slide .s3 {z-index: 5;opacity: 1;}
.slide .s4 {transform: perspective(800px) translate(-60px) rotateY(-30deg);z-index: 4;opacity: 0.5;}
.slide .s5 {transform: perspective(800px) translate(90px) rotateY(-60deg);z-index: 3;opacity: 0.2;}
.slide .s6 {transform: perspective(800px) translate(210px) rotateY(-90deg);z-index: 2;opacity: 0.1;}
</style>
