<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">个人信息</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body">
			
			<view class="geren_list">
				<view class="geren_item">
				<text>头像</text>
				<image src="../../static/qy_img/tx.png" mode="" class="tx"></image>
				</view>
				<view class="geren_item">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">
							姓名
						</view>
						<view class="hei_32">
							王大志
						</view>
					</view>	
				<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
				<view class="geren_item">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">
							手机号码
						</view>
						<view class="hei_32">
							151****0020
						</view>
					</view>	
				<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
				<view class="geren_item">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">
							微信号
						</view>
						<view class="hei_32">
							wangdazhi1876
						</view>
					</view>	
				<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
				<view class="geren_item">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">
							电子邮箱
						</view>
						<view class="hei_32">
							wangdazhi1876@qq.com
						</view>
					</view>	
				<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
				<view class="geren_item">
					<view class="geren_item_left">
						<view class="hui_26 geren_item_title">
							我的公司
						</view>
						<view class="hei_32">
							杭州智趣计算机科技有限公司
						</view>
					</view>	
				<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
				<view class="geren_item">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">
							我的职务
						</view>
						<view class="hei_32">
							招聘者
						</view>
					</view>	
				<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
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
			uni.navigateBack()
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
	padding-top: 100rpx;
}
.geren_list{

	padding: 0 30rpx;
}
.geren_item{
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 168rpx;
	border-bottom: 2rpx solid #f5f5f5;
}
.geren_item_left{
	max-width: 80%;
}
.tx{
	width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
}
.go_right{
		width: 12rpx;
		height: 22rpx;
		position: relative;
		top: 20rpx;
}
.geren_item_title{
	margin-bottom: 10rpx;
}
</style>
