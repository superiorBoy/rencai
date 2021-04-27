<template>
	<view class="body">
		<view class="head">
			<view class="head_back"> <image src="../../static/index_img/xq_close.png" mode=""  @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">关键词</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body">
			<view class="guanjian_tishi hei_26">
				选择你的求职喜好，我们将为您更精准的推荐工作
			</view>
			<view class="guanjian_sousuo">
				<image src="../../static/index_img/guanjian_sousuo.png" mode=""></image>
				<input type="text" value="" placeholder="搜索关键词" class="hei_30" v-model="sou_txt" confirm-type="search" @confirm="confirm" />
			</view>
			<view class="guanjian_body hei_26">
				<view class="guanjian_title hei_38_bold">
					常用设计软件
				</view>
				<view class="guanjian_list">
					<view class="guanjian_item" v-for="(item,index) in ruanjian_arry" @click="ruanjian(item)" :class="{ ruanjia_on: checkedArrey.indexOf(item) != -1 }">
						{{item}}
					</view>
				</view>
				<view class="guanjian_title hei_38_bold">
					UI设计内容
				</view>
				<view class="guanjian_list">
					<view class="guanjian_item" v-for="item in shiji_arry" @click="ruanjian(item)" :class="{ ruanjia_on: checkedArrey.indexOf(item) != -1 }">
						{{item}}
					</view>
				</view>
				<view class="guanjian_title hei_38_bold">
					交互设计常用软件
				</view>
				<view class="guanjian_list">
					<view class="guanjian_item" v-for="item in jiaohu_arry" @click="ruanjian(item)" :class="{ ruanjia_on: checkedArrey.indexOf(item) != -1 }">
						{{item}}
					</view>
				</view>
			</view>
			
		</view>
		<view class="guanzi_bottom">
			<button type="" class="hui_30 qiangchu" @click="qingchu">清除</button>
			<button type="" class="bai_30 queding" @click="queding">确定</button>
		</view>
		
		<!-- 弹出层 联系-->
		<uni-popup id="popup_tishi" ref="popup_tishi" type="center">
			<view class="tan_tishi">
				<view class="tan_tishi_txt hui_26">
					选择关键词，可进行职位筛选，我们将为
					您匹配更精准的职位
				</view>
				<view class="tan_tishi_bottom lan_30" @click="tan_queding">
					好的，我知道了
				</view>
			</view>
		</uni-popup>
		
		
		
	</view>
</template>

<script>
	
export default {

	data() {
		return {
			ruanjian_arry:['AI','PS','Flash','AE','Axure','DW','HTML','Fw','CDR'],
			shiji_arry:['界面设计','图标设计','切图和标注'],
			jiaohu_arry:['AI','PS','Flash','Axure','U3D','SketchUp'],
			sou_txt:'',
			xuan_num:0,
			checkedArrey:[]
			
			
		};
	},
	onReady() {
		this.$refs.popup_tishi.open();
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		confirm(){
			console.log(this.sou_txt)
		},
		tan_queding() {
			this.$refs.popup_tishi.close();
		},
		ruanjian(item){
			if (this.checkedArrey.indexOf(item) == -1) {
				
				if(this.checkedArrey.length>=3){
					uni.showToast({
						title: '最多选择3项',
						duration: 2000,
						icon: 'none'
					});
					
				}else{
				this.checkedArrey.push(item); //选中添加到数组里
					
				}
				
			} else {
				this.checkedArrey.splice(this.checkedArrey.indexOf(item), 1); //取消
			}
		},
		queding(){
			console.log(this.checkedArrey)
		},
		qingchu(){
			this.checkedArrey=[]
		}
		
	}
};
</script>

<style>
.head {
	background-color: #ffffff;
	border-bottom: 2rpx solid #f5f5f5;
}
.zi_body {
	
	padding-left: 30rpx;
	padding-right: 30rpx;
	padding-bottom: 140rpx;
}
.head_back image{
	width: 30rpx;
	height: 30rpx;
}
.guanjian_tishi{
	line-height: 110rpx;
}
.guanjian_sousuo{
	display: flex;
	align-items: center;
	margin-bottom: 50rpx;
}
.guanjian_sousuo image{
	width: 38rpx;
		height: 38rpx;
		margin-right: 25rpx;
}
.guanjian_sousuo input{
	min-width: 600rpx;
}
.guanjian_title{
	margin: 30rpx 0;
}
.guanjian_list{
	display: flex;
	align-items: center;
	flex-wrap: wrap;
}
.guanjian_item{
		width: 210rpx;
		height: 88rpx;
		background-color: #f4f4f4;
		border-radius: 5rpx;
		line-height: 88rpx;
		text-align: center;
		margin: 0 30rpx 24rpx 0;
}
.guanjian_item:nth-child(3n){
	margin-right: 0;
}
.guanzi_bottom{
	position: fixed;
	bottom: 0 ;
	height: 140rpx;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
	box-sizing: border-box;
	box-shadow: 0rpx -4rpx 5rpx 0rpx 
			rgba(213, 213, 213, 0.24);
			background-color: #FFFFFF;
}
button{
	margin: 0;
	padding: 0;
}
.qiangchu{
		width: 210rpx;
		height: 80rpx;
		background-color: #f5f5f5;
		border-radius: 10rpx;
}
.queding{
	width: 460rpx;
		height: 80rpx;
		background-color: #00c6c9;
		border-radius: 10rpx;
}
.tan_tishi{
	width: 540rpx;
		height: 292rpx;
		background-color: #ffffff;
		border-radius: 5rpx;
		padding-top: 60rpx;
		box-sizing: border-box;
}
.tan_tishi_txt{
	padding: 0 36rpx;
	line-height: 40rpx;
}
.tan_tishi_bottom{
	margin-top: 60rpx;
	line-height: 96rpx;
	border-top: 2rpx solid #E5E5E5;
	text-align: center;
}

.ruanjia_on{
	color:#00c6c9 ;
	background-color: #e9f4f4;
}
</style>
