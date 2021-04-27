<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">面试详情</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body">
			<view class="main_xq_top">
				<view class="main_xq_left">
					<view class="hei_38_bold ">与 张珊珊 的面试</view>
					<view class="hei_30 mian_zhuangtai">面试超时未接受</view>
				</view>
				<view class="gong_tx">
					<image src="@/static/qy_img/tx.png" mode="" class="tx"></image>
					<image src="@/static/qy_img/nan.png" mode="" class="xingbie"></image>
				</view>
			</view>
			<view class="mian_bottom">
				
			
			<view class="mian_xq_list hei_24">
				<view class="mian_xq_item">
					<image src="../../static/qy_img/mian_xq1.png" mode=""></image>
					<view class="">
						在线简历
					</view>
				</view>
				<view class="mian_xq_item">
					<image src="../../static/qy_img/mian_xq2.png" mode=""></image>
					<view class="">
						附件简历
					</view>
				</view>
				<view class="mian_xq_item">
					<image src="../../static/qy_img/mian_xq3.png" mode=""></image>
					<view class="">
						聊天
					</view>
				</view>
				<view class="mian_xq_item">
					<image src="../../static/qy_img/mian_xq4.png" mode=""></image>
					<view class="">
						电话
					</view>
				</view>
			</view>
			
			<view class="mian_xq_bottom_list hei_24">
				<view class="mian_xq_bottom_item">
					<image src="../../static/qy_img/time.png" mode="" style="width:24rpx ;height: 24rpx;"></image>2021-01-26 11:00
				</view>
				<view class="mian_xq_bottom_item">
					<image src="../../static/qy_img/job.png" mode=""style="width:22rpx ;height: 22rpx;"></image>产品经理，10-15K
				</view>
				<view class="mian_xq_bottom_item">
				<image src="../../static/qy_img/dizhi.png" mode=""style="width:20rpx ;height: 26rpx;"></image>	杭州 滨江区 恒生大厦A座 3588号111层
				</view>
				
			</view>
			
			</view>
			<view class="yao_btn">
			 <button type="" class="bai_30 yaoyue" @click="go_yaoyue()">重新邀约</button>
				
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
		},
		go_yaoyue(){
			uni.navigateTo({
				url:'mian_yaoqing'
			})
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
	
}
.gong_tx {
	width: 110rpx;
	height: 110rpx;
	border-radius: 100%;
	position: relative;
}
.tx {
	width: 100%;
	height: 100%;
}
.xingbie {
	width: 24rpx;
	height: 24rpx;
	position: absolute;
	top: 0;
	right: 0;
}
.main_xq_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 38rpx 30rpx;
	border-bottom: 2rpx solid #f5f5f5;
}
.mian_zhuangtai{
	margin-top: 30rpx;
}
.mian_xq_list{
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2rpx solid #f5f5f5;
	padding: 0 30rpx 0 20rpx;
}
.mian_bottom{
	padding: 0 30rpx;
	position: relative;
	padding-bottom: 40rpx;
}
.mian_xq_item{
	
	text-align: center;
	padding: 30rpx 0 ;
}
.mian_xq_item image{
	width: 50rpx;
		height: 50rpx;
		margin-bottom: 10rpx;
}
.mian_xq_bottom_item{
	margin-top: 50rpx;
	display: flex;
	align-items: center;
}
.mian_xq_bottom_item image{
	margin-right: 30rpx;
}
.yao_btn{
	position: fixed;
	bottom: 0;
	width: 100%;
	padding: 0 30rpx;
	padding-bottom: 40rpx;
	box-sizing: border-box;
}
.yaoyue{
	
		height: 80rpx;
		background-color: #00c6c9;
		border-radius: 10rpx;
	
		
		
}
</style>
