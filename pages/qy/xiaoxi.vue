<template>
	<view class="body">
		<view class="head">
			<view class="head_back"></view>
			<view class="head_center bai_30">
				<text  :class="['goutong_txt',qiehuan_active==1?'bai_38_bold':'']" @click="qiehuan(1)">沟通</text>
				<text  :class="['',qiehuan_active==2?'bai_38_bold':'']" @click="qiehuan(2)">对我感兴趣</text>
			</view>
			<view class=" head_right hei_30_bold"></view>
		</view>
		<view class="shaixuan_body" v-if="qiehuan_active==1">
			<view class="shaixuan hui_24">
				<view :class="['', tab_active == index ? 'hei_24_bold' : '']" v-for="(item, index) in tab" @click="tab_qiehuan(index)">
					{{ item.text }}
					<text v-if="item.new"></text>
				</view>
			</view>
		</view>
		<view class="tabber_body xiaoxi_body" v-if="qiehuan_active==1">
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
		<view class="tabber_body zi_body" v-if="qiehuan_active==2">
			
			<view class="xingqu_list">
				<view class="xingqu_item" v-for=" item in 5">
					<view class="xingqu_item_top">
						<view class="xingqu_item_top_left">
							<image src="@/static/qy_img/tx.png" mode="" class="tx"></image>
							<image src="@/static/qy_img/nan.png" mode="" class="xingbie"></image>
						</view>
						<view class="xingqu_item_top_right">
							<view >
								<text class="hei_30_bold">胡一天</text> <text class="hui_26 xingqu_item_yaoqiu"> <text>1年以内</text>  <text>大专</text>  6-8K</text>
							</view>
							<view class="hei_26 xingqu_item_gongsi">
								智享体育文化 <text class="xingqu_item_zhiwei">前台</text>
							</view>
						</view>
					</view>
					<view class="xingqu_item_jainjie qian_26">
						我的性格活泼开朗，善良大方，诚实有责任心，有较强的人际交往能力。
					</view>
					<view class="xingqu_item_bottom qian_26">
						收藏了我的职位 <text class="lan_26">web前端</text>
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
			tab_active: 2,
			qiehuan_active:2
		};
	},
	onLoad() {},
	methods: {
		tab_qiehuan(index) {
			this.tab_active = index;
		},
		qiehuan(index){
			this.qiehuan_active=index
		}
	}
};
</script>

<style>
page{
	background-color: #f8f8f8;
}
.head {
	background-color: #00c6c9;
}
.tabber_body {
	padding-bottom: 100rpx;
}
.zi_body{
	padding-top: 100rpx;
	
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
	background-color: #FFFFFF;
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
.xingqu_item_top_left{
		width: 84rpx;
		height: 84rpx;
		border-radius: 100%;
		position: relative;
		margin-right: 30rpx;
}
.tx{
	width: 100%;
	height: 100%;
}
.xingbie{
	width: 24rpx;
	height: 24rpx;
	position: absolute;
	top: 0;
	right: 0;
}
.xingqu_item_bottom{
	border-top: 2rpx solid #e9e9e9;
	line-height: 80rpx;
}
	
.xingqu_item{
	padding:24rpx 30rpx 0 30rpx;
	margin-bottom: 20rpx;
	background-color: #FFFFFF;
}
.xingqu_item_top{
	display: flex;
	align-items: center;
}
.xingqu_item_jainjie{
	margin: 16rpx 0;
	line-height: 40rpx;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}
.xingqu_item_bottom text{
	margin-left: 8rpx;
}
.xingqu_item_zhiwei{
	margin-left: 20rpx;
	position: relative;
}
.xingqu_item_zhiwei::before{
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
.xingqu_item_yaoqiu{
	margin-left: 20rpx;
}
.xingqu_item_yaoqiu text{
	margin-right: 20rpx;
	position: relative;
}
.xingqu_item_yaoqiu text::before{
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
.xingqu_item_gongsi{
	margin-top: 10rpx;
}
</style>
