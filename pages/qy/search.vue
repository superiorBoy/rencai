<template>
	<view class="body">
		<view class="head">
			<view class="head_back"></view>
			<view class="head_center bai_38">人才库</view>
			<view class=" head_right hei_30_bold"></view>
		</view>
		<view class="search">
			<view class="search_left">
				<view class="search_left_leixing hui_26">
					软件工程师
					<image src="@/static/qy_img/search_down.png" mode=""></image>
				</view>
				<view class="search_left_input">
					<image src="@/static/qy_img/search.png" mode=""></image>
					<input type="text" value="" placeholder="请输入关键词" class="hei_26" />
				</view>
			</view>
			<text class="bai_28">搜索</text>
		</view>
		<view class="tabber_body index_body">
			<view class="search_title hei_30_bold">
				<text>最近搜索</text>
				<image src="@/static/qy_img/del.png" mode=""></image>
			</view>
			<view class="zuijin_search hui_24">
				<text>vue</text>
				<text>java</text>
				<text>前端开发工程师</text>
				<text>.net</text>
				<text>web</text>
				<text>后端开发工程师杭州</text>
				<text>前端</text>
			</view>
			<view class="search_title hei_30_bold"><text>热门推荐</text></view>
			<view class="search_hot hui_24">
				<text>.NET</text>
				<text>Node.js</text>
				<text>U3D开发</text>
				<text>Flash开发</text>
				<text>全栈开发</text>
				<text>前端开发</text>
				<text>web前端</text>
				<text>小程序</text>
				<text>移动端</text>
				<text>pc端</text>
				<text>IOS</text>
				<text>typescript</text>
				<text>JavaScript</text>
				<text>Linux</text>
				<text>node.js</text>
				<text>cocos2d-x</text>
				<text>Windows</text>
				<text>Android</text>
				<text>HTML</text>
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
			currentPage: 'qy/search'
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style>
.head {
	background-color: #00c6c9;
}
.tabber_body {
	padding-bottom: 100rpx;
}
.index_body {
	padding-top: 182rpx;
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.search {
	position: fixed;
	top: 100rpx;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #00c6c9;
	padding: 0 30rpx 22rpx;
}
.search_left {
	display: flex;
	align-items: center;
	width: 83%;
	height: 60rpx;
	background-color: #fbfbfb;
	border-radius: 30rpx;
	padding-left: 32rpx;
}
.search_left_input {
	display: flex;
	align-items: center;
	border-left: 2rpx solid #d2d2d2;
}
.search_left_leixing {
	display: flex;
	align-items: center;
}
.search_left_leixing image {
	width: 12rpx;
	height: 8rpx;
	margin: 4rpx 24rpx 0 14rpx;
}
.search_left_input image {
	width: 30rpx;
	height: 31rpx;
	margin-right: 8rpx;
	margin-left: 32rpx;
}
.search_title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	line-height: 76rpx;
	margin-top: 26rpx;
}
.search_title image {
	width: 22rpx;
	height: 22rpx;
}
.zuijin_search text {
	display: inline-block;
	height: 50rpx;
	background-color: #f6f6f6;
	border-radius: 5rpx;
	padding: 0 20rpx;
	margin: 0 20rpx 20rpx 0;
	line-height: 50rpx;
}
.search_hot text {
	display: inline-block;
	height: 50rpx;
	background-color: #f6f6f6;
	border-radius: 5rpx;
	padding: 0 20rpx;
	margin: 0 20rpx 20rpx 0;
	line-height: 50rpx;
}
</style>
