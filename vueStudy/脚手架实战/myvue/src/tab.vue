<template>
	<div class='outNode' @mouseover='over' @mouseout='out'>
		<ul>
			<li v-for='i in allImage' :style='{backgroundImage:"url("+i+")",backgroundSize:cover}' v-show='needIndex==$index?true:false' transition='fade'></li>
		</ul>
		<ol class='tabHover' :style='{width:allImage.length*30+"px"}'>
			<li v-for='i in allImage' :class='needIndex==$index?"active":""'></li>
		</ol>
		<div class='mini' :style='{width:allImage.length*84+"px",bottom:bottomN+"px"}'>
			<img :src='i' v-for='i in allImage' width=77 height=46 @click='needIndex=$index'>
		</div>
	</div>
</template>
<script>
export default {
	props:['tab'],
	data(){
		return {
			allImage:[],
			needIndex:'',
			bottomN:'',
			interval:''
		}
	},
	methods:{
		over(){
			this.bottomN = 0;
			clearInterval(this.interval)
		},
		out(){
			this.bottomN=-56;
			clearInterval(this.interval);
			this.interval = setInterval(()=>{
				this.needIndex++;
				this.needIndex == this.allImage.length && (this.needIndex = 0);
			},1000);
		}
	},
	ready(){
		this.allImage = this.tab.image;
		this.needIndex = this.tab.index;
		this.bottomN = this.tab.bottomNode;
		this.interval = this.tab.interval;
		clearInterval(this.interval);
		this.interval = setInterval(()=>{
			this.needIndex++;
			this.needIndex == this.allImage.length && (this.needIndex = 0);
		},1000);
	}
}

</script>

<style>
.fade-transition{
	transition:.7s;
	opacity:1;
}
.fade-leave{
	opacity:0;
}
.fade-enter{
	opacity:0;
}

.outNode{
	width:495px;height:290px;
	position:relative;
	overflow:hidden;
}

.outNode ul{
	width:100%;height:100%;position:absolute;
}
.outNode ul li{
	width:100%;height:100%;left:0;top:0;position:absolute;
}
.tabHover{height:20px;position:absolute;z-index:10;bottom:7px;left:50%;transform:translateX(-50%)}
.tabHover li{width:6px;height:6px;background:white;margin:7px 12px;float:left;border-radius:50%;transition:0.8s;cursor:pointer}
.tabHover li.active{background:#ff0002;}
.mini{
	transition:.8s;
	height:56px;position:absolute;z-index:11;bottom:0px;left:50%;transform:translateX(-50%);background:rgba(255,255,255,0.7);
}
.mini img{float:left;margin:4px 3.5px 6px;}
</style>