<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">面试记录</view>
			<view class=" head_right hei_30_bold"><image src="../../static/qy_img/tixing.png" mode="" style="width: 36rpx;height:40rpx ;"></image></view>
		</view>
		<view class="tab_top hui_26">
			<text v-for="(item, index) in tab_arry" :class="['', index == active ? 'zhiwei_active' : '']" @click="qiehuan(index)">{{ item }}</text>
		</view>

		<view class="tab_body">
			<view class="mian_riqi hei_32_bold">2021年01月28日</view>
			<view class="mian_list">
				<view class="mian_item" @click="go_xq()">
					<view class="mian_item_left">
						<view class="mian_item_tx">
							<image src="@/static/qy_img/tx.png" mode="" class="tx"></image>
							<image src="@/static/qy_img/nan.png" mode="" class="xingbie"></image>
						</view>
						<view class="mian_item_zhiwu">
							<view class="hei_28_bold mian_item_margin">张珊珊</view>
							<view class="qian_24">面试 <text class="mian_zhiwu">前端开发工程师</text> 8-15K</view>
						</view>
					</view>
					<view class="mian_item_right">
						<view class="hui_22 mian_item_margin">已备注</view>
						<view class="qian_22">14:30</view>
					</view>
				</view>
				<view class="mian_item" @click="go_xq()">
					<view class="mian_item_left">
						<view class="mian_item_tx">
							<image src="@/static/qy_img/tx.png" mode="" class="tx"></image>
							<image src="@/static/qy_img/nan.png" mode="" class="xingbie"></image>
						</view>
						<view class="mian_item_zhiwu">
							<view class="hei_28_bold mian_item_margin">张珊珊</view>
							<view class="qian_24">面试 <text class="mian_zhiwu">前端开发工程师</text> 8-15K</view>
						</view>
					</view>
					<view class="mian_item_right">
						<view class="hui_22 mian_item_margin">已超时</view>
						<view class="qian_22">14:30</view>
					</view>
				</view>
				<view class="mian_item" @click="go_xq()">
					<view class="mian_item_left">
						<view class="mian_item_tx">
							<image src="@/static/qy_img/tx.png" mode="" class="tx"></image>
							<image src="@/static/qy_img/nan.png" mode="" class="xingbie"></image>
						</view>
						<view class="mian_item_zhiwu">
							<view class="hei_28_bold mian_item_margin">张珊珊</view>
							<view class="qian_24">面试 <text class="mian_zhiwu">前端开发工程师</text> 8-15K</view>
						</view>
					</view>
					<view class="mian_item_right">
						<view class="hui_22 mian_item_margin">已拒绝</view>
						<view class="qian_22">14:30</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tab_arry: ['线下面试', '视频面试'],
			active: 0
		};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack()
		},
		qiehuan(index) {
			this.active = index;
		},
		go_xq(){
			uni.navigateTo({
				url:'mian_xq'
			})
		}
	}
};
</script>

<style>
.head {
	background-color: #ffffff;
}
.tab_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10rpx 38rpx 14rpx;
	background-color: #ffffff;
	position: fixed;
	top: 100rpx;
	width: 100%;
	box-sizing: border-box;
	z-index: 9;
	border-bottom: 2rpx solid #f3f3f3;
}
.tab_top text {
	width: 50%;
	text-align: center;
}
.zhiwei_active {
	position: relative;
}
.zhiwei_active::before {
	content: '';
	display: inline-block;
	position: absolute;
	bottom: -14rpx;
	left: 50%;
	transform: translate(-50%, 0);
	width: 46rpx;
	height: 6rpx;
	background-color: #00c6c9;
	border-radius: 3rpx;
}
.tab_body {
	padding-top: 160rpx;
}
.mian_riqi {
	height: 86rpx;
	background-color: #f8f8f8;
	line-height: 86rpx;
	padding-left: 37rpx;
}
.mian_item_tx {
	width: 84rpx;
	height: 84rpx;
	border-radius: 100%;
	position: relative;
	margin-right: 30rpx;
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
.mian_list {
	padding: 0 30rpx;
}
.mian_item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2rpx solid #e9e9e9;
	padding: 30rpx 0;
}
.mian_item_left {
	display: flex;
	align-items: center;
}
.mian_item_margin {
	margin-bottom: 10rpx;
}
.mian_zhiwu{
	margin: 0 16rpx 0 16rpx;
	position: relative;
}
.mian_zhiwu::before{
	content: '';
	display: inline-block;
		width: 4rpx;
		height: 4rpx;
		background-color: #999999;
		position: absolute;
		top: 16rpx;
		right: -10rpx;
}
</style>
