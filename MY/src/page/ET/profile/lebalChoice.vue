<template>
    <div class="profile_page">
        <head-top  :head-title="profiletitle" >
        	<span class="saveLebals" slot="save" @click="save">保存</span>
        </head-top>
        
        <section class="lebalContent">
            <p class="littleTip">关注一些你感兴趣的话题吧！</p>
            <div class="lebals">
            	<div class="singleLebal" v-for="(lebal,index) in lebals">
            		<span class="lebalChoice" :class="{chosed:lebal.isChosed}" @click="choiceLebals(lebal,index)">{{lebal.name}}</span>
            	</div>
            </div>
            
        </section>
        <section class="choiceBtn">
        	<span @click="goNextPage">跳过</span>
        	<span @click="focusAll">全部关注</span>
        </section>
    </div>
</template>

<script>
import headTop from 'src/components/header/head_ET'
export default {
    data(){
        return{
            profiletitle: '热门话题推荐',
            username: '张三',  //用户名
            lebals:[
            	{name:"孕前",isChosed:false},//isChosed判断标签是否被选中
            	{name:"孕中",isChosed:false},
            	{name:"孕后",isChosed:false},
            	{name:"孕前",isChosed:false},
            	{name:"辅食",isChosed:false},
            	{name:"保健",isChosed:false},
            	{name:"食谱",isChosed:false},
            	{name:"新生儿期",isChosed:false},
            	{name:"幼儿期",isChosed:false},
            	{name:"婴儿期",isChosed:false},
            	{name:"中餐",isChosed:false},
            	{name:"西餐",isChosed:false},
            	{name:"粗粮",isChosed:false},
            	{name:"营养调理",isChosed:false},
            	{name:"饮食禁忌",isChosed:false},
            	{name:"宝宝辅食",isChosed:false},
            	{name:"面部",isChosed:false},
            	{name:"毛发",isChosed:false},
            	{name:"身体",isChosed:false},
            	{name:"口腔",isChosed:false},
            	{name:"女性",isChosed:false},
            	{name:"清洁",isChosed:false},
            	{name:"两性",isChosed:false},
            	{name:"推拿",isChosed:false},
            	{name:"拔罐",isChosed:false},
            	{name:"洗浴",isChosed:false},
            	{name:"针灸",isChosed:false},
            	{name:"保健操",isChosed:false},
            ],
            labelsData:[],
            postLebals:[]
        }
    },
    mounted(){

    },
    components:{
        headTop,
    },
    computed:{

    },

    methods:{
		choiceLebals(label,index){
			//console.log(value)
			label.isChosed=!label.isChosed
			if(label.isChosed==true){//将亮色标签添加进labelsData数组
    			this.labelsData.push({"labelName":label.name})
    			
    		}else if(label.isChosed==false){//将该亮色标签从数组中删除
    			for(var i=0;i<this.labelsData.length;i++){
    				if(this.labelsData[i].labelName==label.name){
    					this.labelsData.splice(i,1)
    				}
    			}
    		}
    		//console.log(this.labelsData)
		},
		goNextPage(){
			this.$router.push({path: '/ETmeInfoprofile'})
		},
		focusAll(){
			this.postLebals=[]
			var labelsData=this.lebals
			for(var i=0;i<labelsData.length;i++){
				this.postLebals.push(labelsData[i].name)
			}
			var searchLebals=this.postLebals.join("|");
			console.log(searchLebals)
			this.labelsData=[]
		},
		save(){//点击保存保存亮色按钮图标值
			this.postLebals=[]
			var labelsData=this.labelsData
			for(var i=0;i<labelsData.length;i++){
				this.postLebals.push(labelsData[i].labelName)
			}
			var searchLebals=this.postLebals.join("|");
			console.log(searchLebals)
			this.labelsData=[]
		}
    }

}

</script>

<style lang="scss" scoped>
   @import 'src/style/mixin';
   /*body{background: #fff!important;}*/
    .profile_page{
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .saveLebals{position:absolute;right: .3rem; top: .5rem;font-size: .8rem;color: #fff;font-weight: 600;}
    .lebalContent{position: relative;top: 1.95rem; background: #fff;padding: .5rem .5rem;}
    .littleTip{text-align: center;font-size: .6rem;}
    .lebals{padding: 1rem .7rem 0;height: 21rem;overflow: hidden;overflow-y: scroll;margin-top: 1rem;}
    .singleLebal{display: inline-block;width: 33%;text-align: left;margin-bottom: 1rem;}
    .lebalChoice{border: 1px solid #ff9191;border-radius: 1rem;font-size: .6rem;padding: .2rem .8rem;color:#ff9191 ;}
    .chosed{background: #ff9191;color: #fff;}
    .choiceBtn{width: 100%;position: fixed;bottom: 0;background: #fff;padding: 1rem .8rem  1.5rem;}
    .choiceBtn span{float: right;display: inline-block;font-size: .7rem;margin-right: 1rem;color: #666;}
</style>
