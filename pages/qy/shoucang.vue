<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">收藏</view>
			<view class=" head_right hei_30_bold"></view>
		</view>
		<view class="tab_top hui_26">
			<text v-for="(item, index) in tab_arry" :class="['', index == active ? 'zhiwei_active' : '']" @click="qiehuan(index)">{{ item }}</text>
		</view>

		<view class="tab_body">
			<view class="shoucang_list">
				<view class="shoucang_item" v-for="item in 10">
					<view class="shoucang_item_top">
						<view class="xingqu_item_top_left">
							<image src="@/static/qy_img/tx.png" mode="" class="tx"></image>
							<image src="@/static/qy_img/nan.png" mode="" class="xingbie"></image>
						</view>

						<view class="shoucang_item_top_right">
							<view class="">
								张珊珊
								<text class="hui_24 xingqu_item_yaoqiu">
									<text>1年以内</text>
									<text>大专</text>
									6-8K
								</text>
							</view>
							<view class="hei_24 xingqu_item_gongsi">
								智享体育文化
								<text class="xingqu_item_zhiwei">前台</text>
							</view>
						</view>
					</view>
					<view class="shoucang_item_jineng qian_26">能够负责前台电话转接、日常接待，包括来访者、面试者、 贵宾等人员的接待等；前台环境维护，确保前台环境干净...</view>
					<view class="shoucang_item_bottom qian_24">
						<text>2021年01月24日 15:20</text>
						<text>沟通中</text>
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
			tab_arry: ['全部', '沟通中', '待沟通'],
			active: 0,
			zhiwei: true
		};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack()
		},
		qiehuan(index) {
			this.active = index;
		}
	}
};
</script>

<style>
page {
	background-color: #f8f8f8;
}
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
	width: 25rpx;
	height: 6rpx;
	background-color: #00c6c9;
	border-radius: 3rpx;
}
.tab_body {
	
}
.xingqu_item_top_left {
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
.xingqu_item_yaoqiu {
	margin-left: 20rpx;
}
.xingqu_item_yaoqiu text {
	margin-right: 20rpx;
	position: relative;
}
.xingqu_item_yaoqiu text::before {
	content: '';
	display: inline-block;
	width: 4rpx;
	height: 4rpx;
	background-color: #666666;
	border-radius: 100%;
	position: absolute;
	right: -10rpx;
	top: 50%;
}
.shoucang_item_top {
	display: flex;
	align-items: center;
}
.shoucang_item_bottom {
	display: flex;
	align-items: center;
	height: 80rpx;
	justify-content: space-between;
	border-top: 2rpx solid #e9e9e9;
}
.shoucang_list {

}
.xingqu_item_zhiwei {
	margin-left: 20rpx;
	position: relative;
}
.xingqu_item_zhiwei::before {
	content: '';
	display: inline-block;
	width: 4rpx;
	height: 4rpx;
	background-color: #666666;
	border-radius: 100%;
	position: absolute;
	left: -10rpx;
	top: 50%;
}
.xingqu_item_gongsi {
	margin-top: 10rpx;
}
.shoucang_item {
	padding: 25rpx 30rpx 0;
	margin-bottom: 20rpx;
	
	background-color: #ffffff;
}
.shoucang_item_jineng {
	margin: 20rpx 0;
	line-height: 40rpx;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}
</style>
