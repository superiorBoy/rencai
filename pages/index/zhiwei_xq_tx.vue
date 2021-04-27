<template>
	<view class="body">
		<view class="head">
			<view class="head_back"> <image src="../../static/index_img/xq_close.png" mode=""  @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold"></view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body">
			<view class="xq_body">
				<view class="xq_body_tx">
				<image src="../../static/index_img/hr_tx.png" mode="widthFix" class=""></image>
			</view>
			<view class="xq_name">
				李胜贤
			</view>
			<view class="xq_zhiwei hei_30">
				web前端开发工程师  <text></text>   镜迎科技
			</view>
			<navigator url="zhuye">
			<view class="xq_more hei_28">
				查看ta的更多内容 <image src="../../static/qy_img/go_right.png" mode=""></image>
			</view>
			</navigator>
			
			</view>
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
			uni.navigateBack();
		},
		
	}
};
</script>

<style>
.head {
	background-color: #ffffff;
	
}
.zi_body {
	
}
.head_back image{
	width: 30rpx;
	height: 30rpx;
}
.xq_body{
	padding: 0 30rpx;
}
.xq_body_tx{
	padding: 0 40rpx;
}
	
.xq_body_tx image{
	width: 100%;
}
.xq_name{
	font-size: 58rpx;
	font-weight: bold;
	margin: 90rpx 0 20rpx;
}
.xq_zhiwei text{
	display: inline-block;
		width: 6rpx;
		height: 6rpx;
		background-color: #666666;
		border-radius: 100%;
		margin: 0 10rpx;
		vertical-align: middle;
}
.xq_more{
	padding-top: 50rpx;
	border-top: 2rpx solid #eaeaea;
	margin-top:44rpx;
}
.xq_more image{
		width: 11rpx;
		height: 20rpx;
		margin-left: 30rpx;
}
</style>
