<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">职位管理</view>
			<view class=" head_right hei_30_bold"></view>
		</view>
		<view class="tab_top hui_26">
			<text v-for="(item, index) in tab_arry" :class="['', index == active ? 'zhiwei_active' : '']" @click="qiehuan(index)">{{ item }}</text>
		</view>
		
		<view class="tab_body" >
			<view class="zhiwei_list" v-if="zhiwei">
				<view class="zhiwei_list_item" >
					<view class="zhiwei_list_item_left">
						<view class="zhiwei_list_item_zhiwu hei_30_bold">
							PHP开发工程师
						</view>
						<view class="zhiwei_list_item_yaoqiu qian_26">
							<text class="yaoqiu_txt">杭州 <text class="yuandian"></text>  西兴</text><text class="yaoqiu_txt">大专</text><text class="yaoqiu_txt">1-3年</text><text>9-13K</text>
						</view>
					</view>
					<text class="hei_22">待开放</text>
				</view>
				<view class="zhiwei_list_item" v-for="item in 10">
					<view class="zhiwei_list_item_left">
						<view class="zhiwei_list_item_zhiwu qian_30_bold">
							PHP开发工程师
						</view>
						<view class="zhiwei_list_item_yaoqiu qian_26">
							<text class="yaoqiu_txt">杭州 <text class="yuandian"></text>  西兴</text><text class="yaoqiu_txt">大专</text><text class="yaoqiu_txt">1-3年</text><text>9-13K</text>
						</view>
					</view>
					<text class="qian_22">已关闭</text>
				</view>
			</view>
			<view class="no_zhiwei" v-if="!zhiwei">
				<image src="../../static/qy_img/no_zhiwei.png" mode=""></image>
				<view class="hui_30 no_zhiwei_line">
					目前没有在线职位
				</view>
				<view class="qian_24">
					发布职位才能获取精准的人才推荐
				</view>
				<button type="" class="bai_30">发布新职位</button>
			</view>
			
		</view>
		

		
	</view>
</template>

<script>

export default {
	
	data() {
		return {
			tab_arry: ['全部','待开放', '开放中', '已关闭'],
			active:0,
			zhiwei:true
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
	}
};
</script>

<style>

.head {
	background-color: #FFFFFF;
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
.zhiwei_active{
	position: relative;
}
.zhiwei_active::before{
	content: '';
	display: inline-block;
	position: absolute;
	bottom: -14rpx;
	left: 50%;
	transform: translate(-50%,0);
	width: 25rpx;
		height: 6rpx;
		background-color: #00c6c9;
		border-radius: 3rpx;
		
}
.tab_body{
	padding-top: 160rpx;
	
}
.zhiwei_list{
	padding: 0 30rpx;
	background-color: #FFFFFF;
}
.zhiwei_list_item{
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	border-bottom: 2rpx solid #f3f3f3;
	padding: 36rpx 0 36rpx;
}
.zhiwei_list_item_yaoqiu{
	margin-top:10rpx;
}
.yaoqiu_txt{
	margin-right: 24rpx;
	position: relative;
}
.yaoqiu_txt::before{
	content: '';
	display: inline-block;
	height: 24rpx;
	width: 2rpx;
	position: absolute;
	right: -12rpx;
	top: 6rpx;
	background-color: #999999;
}
.yuandian{
	display: inline-block;
	width: 4rpx;
		height: 4rpx;
		background-color: #999999;
		margin: 0 8rpx;
		position: relative;
		top: -8rpx;
}
.no_zhiwei{
	text-align: center;
}
.no_zhiwei image{
	width: 366rpx;
		height: 199rpx;
		margin-top: 270rpx;
}
.no_zhiwei_line{
	margin: 120rpx 0 20rpx;
}
.no_zhiwei button{
	width: 450rpx;
		height: 80rpx;
		background-color: #00c6c9;
		border-radius: 10rpx;
		margin-top: 100rpx;
}
</style>
