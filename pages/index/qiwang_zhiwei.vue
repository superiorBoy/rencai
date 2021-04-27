<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">期望职位</view>
			<view class=" head_right lan_30_bold"><!-- <text @click="baocun">保存</text> --></view>
		</view>

		<view class="zi_body">
			<view class="qiwang_body">
				<view class="zhiwei_top">
					<view class="hei_38_bold zhiwei_top_title">想找哪些工作？</view>
					<view class="zhiwei_sousuo">
						<image src="../../static/index_img/guanjian_sousuo.png" mode=""></image>
						<input type="text" value="" placeholder="搜索职位名称" class="hei_30" confirm-type="search" @confirm="confirm" v-model="sou_txt" />
					</view>
				</view>
				<view class="zhiwei hei_28">
					<view class="zhiwei_left">
						<view class="zhiwei_fenlei" v-for="(item, index) in hangye_arry" :class="index == fenlei_on ? 'fenlei_active' : ''" @click="xuan_fenlei(index)">
							{{ item }}
						</view>
					</view>
					<view class="zhiwei_right">
						<view class="zhiwei_right_item hei_24">
							<view class="zhiwei_right_title hei_36_bold">后端开发</view>
							<view class="zhiwei_right_item_zhiwei">
								<view class="zhiwei_right_item_zhiwei_item" v-for="item in zhiwei_arry">{{ item }}</view>
							</view>
						</view>
						<view class="zhiwei_right_item hei_24">
							<view class="zhiwei_right_title hei_36_bold">移动开发</view>
							<view class="zhiwei_right_item_zhiwei">
								<view class="zhiwei_right_item_zhiwei_item">移动开发</view>
								<view class="zhiwei_right_item_zhiwei_item">Android</view>
							</view>
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
			hangye_arry: ['技术', '运营', '销售', '人事/财务/行政', '高级管理', '设计', '市场', '金融', '传媒', '教育培训', '产品', '房地产/建筑'],
			zhiwei_arry: [
				'Java',
				'PHP',
				'C',
				'C#',
				'.NET',
				'Hadoop',
				'Python',
				'Delphi',
				'VB',
				'Perl',
				'Ruby',
				'Node.js',
				'Golang',
				'Erlang',
				'语音/视频/图形11111',
				'数据采集',
				'全栈工程师',
				'GIS工程师'
			],
			checkedArrey: [],
			xuan_num: 0,
			zhankai_arry: [],
			fenlei_on: 0,
			sou_txt: ''
		};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		xuan_fenlei(index) {
			this.fenlei_on = index;
		},
		confirm() {
			console.log(this.sou_txt);
		}
	}
};
</script>

<style>
page {
	height: 100%;
	overflow: hidden;
}
.head {
	background-color: #ffffff;
}
.zi_body {
	height: 100%;
}
.qiwang_body {
	display: flex;
	flex-direction: column;
	height: 100%;
}
.zhiwei_top {
	padding: 0 30rpx;
}
.zhiwei_top_title {
	margin: 20rpx 0 26rpx;
}
.zhiwei_sousuo {
	height: 64rpx;
	background-color: #f5f5f5;
	border-radius: 30rpx;
	display: flex;
	align-items: center;
	padding-left: 24rpx;
	box-sizing: border-box;
}
.zhiwei_sousuo image {
	width: 30rpx;
	height: 30rpx;
	margin-right: 20rpx;
}
.zhiwei_sousuo input {
	width: 85%;
}
.zhiwei {
	border-top: 2rpx solid #e8e8e8;
	margin-top: 30rpx;
	flex: 1;
	height: 100%;
	display: flex;
}
.zhiwei_left {
	width: 240rpx;
	border-right: 2rpx solid #e8e8e8;
	height: 100%;
	overflow: auto;
	padding-left: 30rpx;
	box-sizing: border-box;
	padding-bottom: 150px;
}
.zhiwei_left::-webkit-scrollbar {
	display: none;
}
.zhiwei_right::-webkit-scrollbar {
	display: none;
}
.body {
	height: 100%;
	overflow: hidden;
}
.zhiwei_fenlei {
	height: 100rpx;
	line-height: 100rpx;
	position: relative;
}
.zhiwei_right {
	height: 100%;
	overflow: auto;
	padding: 0 20rpx 0 0;
	width: 500rpx;
	box-sizing: border-box;
	padding-bottom: 150px;
}
.zhiwei_right_title {
	line-height: 110rpx;
	padding-left: 20rpx;
}
.zhiwei_right_item_zhiwei {
	display: flex;
	flex-wrap: wrap;
}
.zhiwei_right_item_zhiwei_item {
	width: 220rpx;
	height: 70rpx;
	background-color: #f4f4f4;
	border-radius: 5rpx;
	text-align: center;
	line-height: 70rpx;
	margin-bottom: 20rpx;
	margin-left: 20rpx;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	padding: 0 20rpx;
	box-sizing: border-box;
}
.fenlei_active {
	color: #00c6c9;
}
.fenlei_active::before {
	content: '';
	display: inline-block;
	width: 6rpx;
	height: 40rpx;
	background-color: #00c6c9;
	position: absolute;
	left: -30rpx;
	top: 50%;
	transform: translate(0, -50%);
}
</style>
