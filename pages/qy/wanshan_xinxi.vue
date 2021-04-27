<template>
	<view class="body">
		<view class="head">
			<view class="head_back hei_38_bold"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">完善信息</view>
			<view class=" head_right hei_30"><text @click="fabu">预览</text></view>
		</view>

		<view class="zi_body">
			<view class="fabu_list ">
				<view class="wanshan_title hei_30">
					<text>完善程度{{ baifen }}%</text>
					<text class="lan_28 ">邀请同事来编辑</text>
				</view>
				<view class="jindu"><text :style="{ width: baifen + '%' }"></text></view>
				<view class="wanshan_xinxi_top hei_30_bold" @click="go_zhankai">
					<text>基本信息 4/6</text>
					<image src="../../static/qy_img/hei_right.png" mode="" :class="['', zhankai ? 'xuanzhuan' : '']"></image>
				</view>

				<view class="zhankai" v-if="zhankai">
					<view class="fabu_item">
						<text class="fabu_item_left hei_30_bold">公司介绍</text>
						<view class="fabu_item_right hei_30">
							未完善
							<image src="../../static/qy_img/hei_right.png" mode=""></image>
						</view>
					</view>

					<view class="fabu_item">
						<text class="fabu_item_left hei_30_bold">公司福利</text>
						<view class="fabu_item_right hei_30"><image src="../../static/qy_img/hei_right.png" mode=""></image></view>
					</view>
					<view class="fabu_item">
						<text class="fabu_item_left hei_30_bold">公司相册</text>
						<view class="fabu_item_right hei_30">
							未完善
							<image src="../../static/qy_img/hei_right.png" mode=""></image>
						</view>
					</view>
					<view class="fabu_item">
						<text class="fabu_item_left hei_30_bold">公司视频</text>
						<view class="fabu_item_right hei_30">
							未添加
							<image src="../../static/qy_img/hei_right.png" mode=""></image>
						</view>
					</view>
					<view class="fabu_item">
						<text class="fabu_item_left hei_30_bold">产品介绍</text>
						<view class="fabu_item_right hei_30">
							未添加
							<image src="../../static/qy_img/hei_right.png" mode=""></image>
						</view>
					</view>
					<view class="fabu_item">
						<text class="fabu_item_left hei_30_bold">高管介绍</text>
						<view class="fabu_item_right hei_30">
							未添加
							<image src="../../static/qy_img/hei_right.png" mode=""></image>
						</view>
					</view>
					<view class="fabu_item">
						<text class="fabu_item_left hei_30_bold">工作体验</text>
						<view class="fabu_item_right hei_30">
							未添加
							<image src="../../static/qy_img/hei_right.png" mode=""></image>
						</view>
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
			baifen: 10,
			zhankai: true
		};
	},

	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		go_zhankai() {
			this.zhankai = !this.zhankai;
		},

		fabu() {
			var data = {
				
			};

			console.log(data);
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
	
	padding-bottom: 50rpx;
}
.wanshan_title {
	line-height: 90rpx;

	display: flex;
	align-items: center;
	justify-content: space-between;
}
.fabu_list {
	padding: 0 30rpx;
}
.fabu_item {
	display: flex;
	align-items: center;
	height: 100rpx;
	border-bottom: 2rpx solid #e8e8e8;
	justify-content: space-between;
}

.fabu_item_right image {
	width: 14rpx;
	height: 24rpx;
	margin-left: 15rpx;
}
.wanshan_xinxi_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100rpx;
	border-bottom: 2rpx solid #e8e8e8;
}
.wanshan_xinxi_top image {
	width: 14rpx;
	height: 24rpx;
}
.fabu_item_right input {
	text-align: right;
}
.fabu_item_right {
	display: flex;
	align-items: center;
}
.fabu_btn {
	height: 80rpx;
	background-color: #00c6c9;
	line-height: 80rpx;
	margin: 80rpx 0 0;
	border-radius: 0 !important;
}
.hongxing {
	vertical-align: middle;
	margin-right: 2rpx;
}
.jindu {
	height: 40rpx;
	background-color: #f8f8f8;
	border-radius: 5rpx;
	margin-bottom: 30rpx;
}
.jindu text {
	height: 40rpx;
	background-color: #f43a51;
	border-radius: 5rpx;
	display: inline-block;
}
.xuanzhuan {
	transform: rotate(90deg);
	-ms-transform: rotate(90deg); /* IE 9 */
	-moz-transform: rotate(90deg); /* Firefox */
	-webkit-transform: rotate(90deg); /* Safari 和 Chrome */
	-o-transform: rotate(90deg); /* Opera */
}
</style>
