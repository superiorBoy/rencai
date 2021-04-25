<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/index_img/xq_close.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">上传简历</view>
			<view class=" head_right lan_30_bold"></view>
		</view>

		<view class="zi_body">
			<view class="up_list">
				<view class="up_item">
					<image src="../../static/index_img/up_jianli.png" mode=""></image>
				<view class="up_item_title hei_40_bold">
					上传简历
				
				</view>
				<view class="up_item_txt hui_28">
					通过简历展示你的基本资料及经历
				
				</view>
				
				<view class="baozhi qian_28">
					RESUME
				</view>
				</view>
				<navigator url="zuopin" class="up_item">
			
					<image src="../../static/index_img/up_zuopin.png" mode=""></image>
				<view class="up_item_title hei_40_bold">
					上传作品集
				
				</view>
				<view class="up_item_txt hui_28">
					90%的设计岗位都需要提供作品集
				
				</view>
				
				<view class="baozhi qian_28">
					PORTFOLIO
				</view>
			
				</navigator>
			</view>
		
			
			
	
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		}
	}
};
</script>

<style>
.head {
	background-color: #ffffff;

}
.head_back image{
	width: 34rpx;
	height: 34rpx;
}
.zi_body {
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.up_item{
		height: 374rpx;
		background-color: #ffffff;
		box-shadow: 2rpx 4rpx 32rpx 0rpx 
			rgba(169, 169, 169, 0.22);
		border-radius: 5rpx;
		position: relative;
		padding:40rpx ;
		box-sizing: border-box;
		margin-bottom: 60rpx;
		
}
.baozhi{
	position: absolute;
	right: 40rpx;
	top: 40rpx;
}
.up_list{
	margin-top: 50rpx;
}
.up_item image{
	width: 86rpx;
	height: 100rpx;
}
.up_item_title{
	margin: 40rpx 0 30rpx;
}
.baozhi::before{
	position: absolute;
	content: '';
	display: inline-block;
	width: 28rpx;
		height: 2rpx;
		background-color: #cdcdcd;
		bottom: -6rpx;
		right: 0;
}
</style>
