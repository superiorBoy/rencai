<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">筛选</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body shaixuan_body">
			<view class="shaixuan_title hei_30_bold">消息类型</view>
			<view class="leixing hui_28">
				<text v-for="(item, index) in leixng_arry" :class="['', leixing_on == index ? 'leixing_active' : '']" @click="xuan_leixing(index)">{{ item }}</text>
			</view>
			<view class="shaixuan_title hei_30_bold">消息类型</view>
			<view class="leixing hui_28">
				<text v-for="(item, index) in biaoji_arry" :class="['', biaoji_on == index ? 'biaoji_active' : '']" @click="xuan_biaoji(index)">{{ item }}</text>
			</view>
			<view class="shaixuan_bottom">
				<button type="" class="bai_30 queding" @click="queding">确定</button>
				<button type="" class="hei_30 quxiao" @click="quxiao">取消</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			leixng_arry: ['全部', '新招呼', '沟通中', '我发起的', '招聘者发起', '未读消息'],
			biaoji_arry: ['全部', '收藏TA', '不合适', '要过简历', '约过面试'],
			leixing_on: 0,
			biaoji_on: 0
		};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		xuan_leixing(index) {
			this.leixing_on = index;
		},
		xuan_biaoji(index) {
			this.biaoji_on = index;
		},
		queding() {},
		quxiao() {}
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
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.shaixuan_title {
	line-height: 110rpx;
}
.leixing text {
	display: inline-block;
	width: 212rpx;
	height: 66rpx;
	background-color: #f7f8f8;
	border-radius: 5rpx;
	line-height: 70rpx;
	text-align: center;
	margin-bottom: 24rpx;
	margin-right: 20rpx;
	box-sizing: border-box;
	border: solid 2rpx #f7f8f8;
}
.leixing text:nth-child(3n) {
	margin-right: 0;
}
.queding {
	width: 330rpx;
	height: 88rpx;
	background-color: #00c6c9;
	border-radius: 5rpx;
	line-height: 88rpx;
}
.shaixuan_bottom {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 280rpx;
}
button {
	margin: 0;
	padding: 0;
}
.quxiao {
	width: 330rpx;
	height: 88rpx;
	background-color: #e5e5e5;
	border-radius: 5rpx;
	line-height: 88rpx;
}
.leixing_active {
	border: solid 2rpx #00c6c9 !important;

	color: #00c6c9;
}
.biaoji_active {
	border: solid 2rpx #00c6c9 !important;

	color: #00c6c9;
}
</style>
