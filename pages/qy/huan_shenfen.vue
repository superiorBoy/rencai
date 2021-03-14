<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">身份切换</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body">
			
			<view class="zhuangtai hei_28_bold">
				当前状态：我要招人
			</view>
			<view class="zhuanhuan">
				<image src="../../static/qy_img/shenfen_zhuanhuan.png" mode="widthFix"></image>
			</view>
			<button type="" class="bai_30" @click="qiehuan">切换至我要找工作</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			

		};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack()
		},
		qiehuan(){
			
		}
	
	}
};
</script>

<style>

.head {
	background-color: #ffffff;
	
}
.zi_body {
	padding-top: 100rpx;
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.zhuangtai{
	text-align: center;
	margin-top: 140rpx;
}
.zhuanhuan{
	text-align: center;
	
}
.zhuanhuan image{
		width: 477rpx;
		height: 423rpx;
		margin: 130rpx 0 144rpx;
}
.zi_body button{
		height: 88rpx;
		background-color: #00c6c9;
		border-radius: 44rpx;
		line-height: 88rpx;
}
</style>
