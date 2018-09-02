<template>
	<ul class='slideUl' @click='changed'>
		<li v-for='i in allImage' :style="{backgroundImage:'url('+i+')',backgroundSize:'cover'}" :class='allClass[$index]'>

		</li>
	</ul>	
</template>
<script>
export default {
	props:['slide'],
	methods:{
		changed(){
			this.allClass.push(this.allClass.shift());
		}
	},
	data(){
		return {
			allImage:[],
			allClass:[]
		}
	},
	ready(){
		this.allImage = this.slide.image;
		for(var i = 0;i < this.allImage.length;i++){
			this.allClass.push('s'+i);
		}

	}
	
}

</script>

<style>
.slideUl{height:300px;position:relative;}
.slideUl li{width:230px;height:150px;position:absolute;left:50%;top:0;transition:.5s;transform:perspective(800px)}
.slideUl .s3{margin-left:-75px;z-index:5;}
.slideUl .s2{transform:perspective(800px) translate(-150px) rotateY(30deg) ;margin-left:-75px;z-index:4;opacity:0.8}
.slideUl .s1{transform:perspective(800px) translate(-300px) rotateY(60deg) ;margin-left:-75px;z-index:3;opacity:0.5}
.slideUl .s0{transform:perspective(800px) translate(-450px) rotateY(90deg) ;margin-left:-75px;z-index:3;opacity:0}
.slideUl .s4{transform:perspective(800px) translate(150px) rotateY(-30deg) ;margin-left:-75px;z-index:4;opacity:0.8}
.slideUl .s5{transform:perspective(800px) translate(300px) rotateY(-60deg) ;margin-left:-75px;z-index:3;opacity:0.5}
.slideUl .s6{transform:perspective(800px) translate(450px) rotateY(-90deg) ;margin-left:-75px;z-index:3;opacity:0}


</style>