<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">聊天设置</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body">
			<view class="shezhi_top">
				<view class="shezhi_top_left">
					<image src="../../static/index_img/hr_tx.png" mode=""></image>
					<view class="shezhi_top_left_name">
						<view class="hei_30_bold shezhi_name">张女士</view>
						<view class="qian_28">大明食品·招聘者</view>
					</view>
				</view>
				<image src="../../static/qy_img/hei_right.png" mode="" class="hei_right"></image>
			</view>
			<view class="shezhi_center hei_30">
				<navigator url="shezhi_beizhu" class="shezhi_list">
					<text>设置备注</text>
					<image src="../../static/qy_img/hei_right.png" mode="" class="hei_right"></image>
				</navigator>
				<view class="shezhi_list">
					<text>置顶联系人</text>
					<switch checked="true" @change="zhiding_change" color="#00c6c9" />
				</view>
				<view class="shezhi_list">
					<text>查看个人竞争力分析</text>
					<image src="../../static/qy_img/hei_right.png" mode="" class="hei_right"></image>
				</view>
			</view>
			<view class="shezhi_bottom hei_30">
				<view class="shezhi_list">
					<text>对TA的职位不感兴趣</text>
					<switch checked="true" @change="xingqu_change" color="#00c6c9" />
				</view>
				<view class="shezhi_list">
					<text>将对方加入黑名单</text>
					<switch checked="true" @change="lahei_change" color="#00c6c9" />
				</view>
				<view class="shezhi_list">
					<text>举报对方</text>
					<image src="../../static/qy_img/hei_right.png" mode="" class="hei_right"></image>
				</view>
			</view>

			<button type="" class="hei_30 del">删除联系人</button>
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
		zhiding_change(e) {
			console.log(e);
		},
		xingqu_change(e) {
			console.log(e);
		},
		lahei_change(e) {
			console.log(e);
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
	padding-bottom: 30rpx;
}
.shezhi_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 210rpx;
	border-bottom: 2rpx solid #ebebeb;
}
.shezhi_top_left image {
	width: 104rpx;
	height: 104rpx;
	border-radius: 100%;
	margin-right: 28rpx;
}
.shezhi_top_left {
	display: flex;
	align-items: center;
}
.hei_right {
	width: 12rpx;
	height: 21rpx;
}
.shezhi_name {
	margin-bottom: 10rpx;
}
.shezhi_center {
	border-bottom: 2rpx solid #ebebeb;
	margin-bottom: 16rpx;
	padding: 20rpx 0;
}
.shezhi_list {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100rpx;
}
.del {
	height: 88rpx;
	background-color: #f4f4f4;
	border-radius: 10rpx;
	line-height: 88rpx;
	margin-top: 80rpx;
}
</style>
