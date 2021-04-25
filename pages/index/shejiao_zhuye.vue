<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">社交主页</view>
			<view class=" head_right hei_30_bold"><text @click="save">保存</text> </view>
		</view>

		<view class="zi_body">

		<view class="hei_26 zhuye_title">
			建议添加能突出你个人实力的主页 
		</view>
		<view class="shuru">
			<input type="text" value="" class="qian_26" placeholder="请输入主页链接" v-model="shuru"/>
		</view>
		<view class="hei_26">
			如：微博、GitHub、Dribble、LOFTER、个人主页
		</view>
		
		
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			shuru:''
		};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		save(){
			
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
}
.zhuye_title{
	line-height: 130rpx;
}
.shuru input{
	width: 100%;
	
}
.shuru{
	padding-bottom: 50rpx;
border-bottom: 2rpx solid #f5f5f5;
margin-bottom: 40rpx;
}
</style>
