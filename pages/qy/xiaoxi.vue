<template>
	<view class="body">
		<view class="head">
			<view class="head_back"></view>
			<view class="head_center bai_30">
				<text class="goutong_txt bai_38_bold">沟通</text>
				<text>对我感兴趣</text>
			</view>
			<view class=" head_right hei_30_bold"></view>
		</view>
		<view class="shaixuan_body">
			<view class="shaixuan hui_24">
				<view :class="['', tab_active == index ? 'hei_24_bold' : '']" v-for="(item, index) in tab" @click="tab_qiehuan(index)">
					{{ item.text }}
					<text v-if="item.new"></text>
				</view>
			</view>
		</view>
		<view class="tabber_body xiaoxi_body">
			<view class="goutong_list">
				<view class="goutong_item">
					<view class="goutong_item_left">
						<image src="@/static/qy_img/tx.png" mode=""></image>
						<text class="weidu bai_20">5</text>
					</view>
					<view class="goutong_item_right">
						<view class="goutong_item_right_top">
							<view class="goutong_item_right_top_name hui_24">
								<text class="hei_30_bold xiaoxi_name">胡晓燕</text>
								<text>前端开发</text>
							</view>
							<text class="qian_20">2021/01/21</text>
						</view>
						<view class="goutong_item_right_bottom qian_26">
							<text>你好</text>
							<text class="toudi lan_20">已投</text>
						</view>
					</view>
				</view>
				<view class="goutong_item" v-for="item in 5">
					<view class="goutong_item_left">
						<image src="@/static/qy_img/tx.png" mode=""></image>
						<text class="weidu bai_20">5</text>
					</view>
					<view class="goutong_item_right">
						<view class="goutong_item_right_top">
							<view class="goutong_item_right_top_name hui_24">
								<text class="hei_30_bold xiaoxi_name">胡晓燕</text>
								<text>前端开发</text>
							</view>
							<text class="qian_20">2021/01/21</text>
						</view>
						<view class="goutong_item_right_bottom qian_26">
							<text>【简历】2019年毕业/本科统招</text>
							<text class="toudi lan_20">已投</text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<tabBar :currentPage="currentPage" ref="ls_mainindex"></tabBar>
	</view>
</template>

<script>
import tabBar from '@/components/tabbar/tabbar.vue';
export default {
	components: {
		tabBar
	},
	data() {
		return {
			currentPage: 'qy/xiaoxi',
			tab: [
				{ text: '全部', new: false },
				{ text: '新消息', new: true },
				{ text: '沟通中', new: true },
				{ text: '通过初筛', new: false },
				{ text: '已约面试', new: false },
				{ text: '不合适', new: false }
			],
			tab_active: 0
		};
	},
	onLoad() {},
	methods: {
		tab_qiehuan(index) {
			this.tab_active = index;
		}
	}
};
</script>

<style>
.head {
	background-color: #00c6c9;
}
.tabber_body {
	padding-bottom: 100rpx;
}
.head_center {
	width: 50%;
}
.goutong_txt {
	margin-right: 33rpx;
}
.xiaoxi_body {
	padding-top: 196rpx;
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.shaixuan_body {
	padding: 0 30rpx;
	box-sizing: border-box;
	width: 100%;
	position: fixed;
	top: 100rpx;
	z-index: 9;
	background-color: #ffffff;
}
.shaixuan {
	height: 96rpx;
	display: flex;
	align-items: center;
	border-bottom: 2rpx solid #d2d2d2;
}
.shaixuan view {
	margin-right: 20rpx;
	position: relative;
}
.shaixuan view text {
	position: absolute;
	top: 0;
	right: -8rpx;
	display: inline-block;
	width: 12rpx;
	height: 12rpx;
	background-color: #f43a51;
	border-radius: 100%;
}
.goutong_list {
}
.goutong_item {
	padding: 26rpx 0 0rpx;
	display: flex;
}
.goutong_item_left {
	width: 84rpx;
	height: 84rpx;
	border-radius: 100%;
	position: relative;
}
.weidu {
	position: absolute;
	top: -6rpx;
	right: 0;
	padding: 0 6rpx;
	height: 26rpx;
	line-height: 26rpx;
	background-color: #f43a51;
	border-radius: 100%;
}
.goutong_item_left image {
	width: 100%;
	height: 100%;
}
.goutong_item_right {
	border-bottom: 2rpx solid #e9e9e9;
	width: 84%;
	margin-left: 30rpx;
	padding-bottom: 30rpx;
}
.goutong_item_right_top,
.goutong_item_right_bottom {
	display: flex;
	justify-content: space-between;
}
.goutong_item_right_top {
	margin-bottom: 10rpx;
}
.toudi {
	padding: 0 6rpx;
	height: 30rpx;
	background-color: #e5f9f9;
	border-radius: 2rpx;

	display: inline-block;
}
.xiaoxi_name {
	margin-right: 24rpx;
	position: relative;
}
.xiaoxi_name::before {
	content: '';
	display: inline-block;
	width: 4rpx;
	height: 4rpx;
	background-color: #999999;
	position: absolute;
	right: -12rpx;
	top: 20rpx;
	border-radius: 100%;
}
</style>
