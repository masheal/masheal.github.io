<template>
    <div class="outNode" @mouseover='over' @mouseout='out'>
        <ul>
            <li v-for='i in imgs' :style='{backgroundImage:"url("+i+")",backgroundSize:"cover"}' v-show='index==$index?true:false' transition='fade'></li>
        </ul>
        <ol class="tabHover" :style='{width:imgs.length*30+"px"}'>
            <li v-for='i in imgs' :class='index==$index?"active":""' @click='add($index)'></li>
        </ol>
        <div class="mini" :style='{width:imgs.length*84+"px",bottom:bottomN+"px",opacity:opacityN}'>
            <img :src='i' v-for='i in imgs' width=77 height=46 transition='mini' @click='index=$index'>
        </div>
    </div>
</template>

<script>
export default {
    props:['tab'],
    data () {
        return {
            imgs:[],
            index:'',
            bottomN:'',
            opacityN:'',
            interval:''
        }
    },
    methods: {
        over () {
            this.bottomN = 0
            this.opacityN = 1
            clearInterval(this.interval)
        },
        out () {
            this.bottomN = -56
            this.opacityN = 0
            clearInterval(this.interval)
            this.interval = setInterval(()=>{
                this.index++
                this.index == this.imgs.length && (this.index = 0)
            },3000)
        },
        add (i) {
            this.index = i
        }
    },
    ready () {
        this.imgs = this.tab.img
        this.index = this.tab.index
        this.bottomN = this.tab.bottomNode
        this.opacityN = this.tab.opacityN
        clearInterval(this.interval)
        this.interval = setInterval(()=>{
            this.index++
            this.index == this.imgs.length && (this.index = 0)
        },3000)
    }
}
</script>

<style>
.outNode{width: 490px;height: 290px;border: 1px solid black;position: absolute;margin-left: 50%;transform: translateX(-50%);margin-top: 50px;overflow: hidden;}
.outNode ul {width: 100%;height: 100%;}
.outNode ul li {width: 100%;height: 100%;position: absolute;}
.tabHover {height: 20px; position: absolute;left: 50%;transform: translateX(-50%);z-index: 10;bottom: 10px;background: rgba(255, 255, 255, 0.3);border-radius: 10px;}
.tabHover li {height: 6px;width: 6px;border-radius: 50%;float: left;margin:7px 12px;cursor: pointer;background: white;}
.tabHover li.active {background: #ff0002;} 
.fade-transition {opacity: 1;transition: 1s;}
.fade-enter {opacity: 0;}
.fade-leave {opacity: 0;}
.mini {height: 56px;position: absolute;bottom: 0;left: 50%;transform: translateX(-50%);z-index: 11;background:rgba(255,255,255,0.7);transition: 1s;}
.mini img {margin-top: 5px;margin:4px 3.5px 6px;cursor: pointer;}
</style>
