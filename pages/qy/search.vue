<template>
	<view class="body">
		<view class="head">
			<view class="head_back"></view>
			<view class="head_center bai_38">人才库</view>
			<view class=" head_right hei_30_bold"></view>
		</view>
		<view class="search">
			<view class="search_left">
				<picker mode="selector" :range="zhiwei_arry" @change="zhiwei_change">
				<view class="search_left_leixing hui_26">
					{{zhiwei}}
					<image src="@/static/qy_img/search_down.png" mode=""></image>
				</view>
				</picker>
				<view class="search_left_input">
					<image src="@/static/qy_img/search.png" mode=""></image>
					<input type="text" value="" placeholder="请输入关键词" class="hei_26" v-model="sou_txt"/>
				</view>
			</view>
			<text class="bai_28" @click="sousuo">搜索</text>
		</view>
		<view class="tabber_body index_body">
			<view class="search_title hei_30_bold">
				<text>最近搜索</text>
				<image src="@/static/qy_img/del.png" mode="" @click="del_jilu"></image>
			</view>
			<view class="zuijin_search hui_24">
				<text v-for="item in zuijin_arry" @click="dianji(item)">{{item}}</text>
			</view>
			<view class="search_title hei_30_bold"><text>热门推荐</text></view>
			<view class="search_hot hui_24">
				<text v-for="item in tuijian_arry" @click="dianji(item)">{{item}}</text>
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
			currentPage: 'qy/search',
			zhiwei:'软件工程师',
			zhiwei_arry: ['软件工程师', '后端工程师', 'UI', '产品经理'],
			sou_txt:'',
			zuijin_arry:['vue','java','前端开发工程师','.net','后端开发工程师杭州','前端'],
			tuijian_arry:['.NET','Node.js','U3D开发','Flash开发','全栈开发','前端开发',
			'web前端','小程序','移动端','pc端','IOS','typescript','JavaScript',
			'Linux','node.js','cocos2d-x','Windows','Android','HTML'],
		};
	},
	onLoad() {},
	methods: {
		zhiwei_change(e) {
			console.log(e.detail.value);
			this.zhiwei = this.zhiwei_arry[e.detail.value];
		},
		sousuo(){
			console.log(this.sou_txt)
		},
		dianji(item){
			console.log(item)
		},
		del_jilu(){
			console.log('删除搜索记录')
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
