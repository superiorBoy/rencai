<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">{{title==1?'登录':'注册'}}</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body">
			<view class="deng_title qian_30">请选择{{title==1?'登录':'注册'}}身份</view>
			<view class="xuanze">
				<view class="xuanze_list">
					<navigator url="zhuce?type=1" class="xuanze_item">
						<image src="../../static/index_img/geren_zhice.png" mode=""></image>
						<view class="hei_30">个人注册</view>
					</navigator>
					<navigator url="login?type=1" class="xuanze_item">
						<image src="../../static/index_img/geren_login.png" mode=""></image>
						<view class="hei_30">个人登录</view>
					</navigator>
				</view>
				<view class="xuanze_list">
					<navigator url="zhuce?type=2" class="xuanze_item">
						<image src="../../static/index_img/qiye_zhuce.png" mode=""></image>
						<view class="hei_30">企业注册</view>
					</navigator>
					<navigator url="login?type=2" class="xuanze_item">
						<image src="../../static/index_img/qiye_login.png" mode=""></image>
						<view class="hei_30">企业登录</view>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title:1
		};
	},
	onLoad(option) {
		if(option.title){
			this.title=option.title
		}
	},
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
.zi_body {
}
.deng_title {
	text-align: center;
	margin: 10rpx 0 80rpx;
}
.xuanze_item {
	text-align: center;
}
.xuanze_item image {
	width: 80rpx;
	height: 80rpx;
	margin-bottom: 16rpx;
}
.xuanze_list {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 90rpx;
}
.xuanze_item:first-child {
	margin-right: 148rpx;
}
</style>
