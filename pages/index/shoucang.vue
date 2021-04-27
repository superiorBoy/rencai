<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">我收藏的职位</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

	
		<view class="zi_body " >
			<view class="hudong_list">
				<view class="hudong_item" >
					<view class="hudong_item_zhiwei">
						<text class="qian_34_bold">WEB前端工程师</text>
						<text class="qian_30_bold">
							停止招聘
						</text>
					</view>
					<view class="hudong_item_gongsi qian_28">
						<text>浙江大华科技</text>
						
					</view>
					<view class="hudong_item_yaoqiu qian_24">
						<view>
							<text>杭州</text>

						</view>
						<view>3-5年</view>
						<view>本科</view>
					</view>
					<view class="hudong_item_bottom">
						<view class="hudong_item_bottom_left qian_24">
							<view class="zhao_tx">
								<image src="../../static/index_img/hr.png" mode="" class="zhao_tx_img"></image>
								<image src="../../static/index_img/renzheng.png" mode="" class="zhao_tx_renzheng"></image>
							</view>
							魏雨燕
							<text class="yuandian"></text>
							HR
						</view>
						
					</view>
				</view>
				<view class="hudong_item" v-for="item in 5">
					<view class="hudong_item_zhiwei">
						<text class="hei_34_bold">WEB前端工程师</text>
						<text class="lan_30_bold">
							12-24K ·<text class="duoxin">14薪</text>
						</text>
					</view>
					<view class="hudong_item_gongsi hei_28">
						<text>浙江大华科技</text>
						
					</view>
					<view class="hudong_item_yaoqiu hui_24">
						<view>
							<text>杭州</text>
							<text>余杭区</text>
							<text>五常</text>
						</view>
						<view>3-5年</view>
						<view>本科</view>
					</view>
					<view class="hudong_item_bottom">
						<view class="hudong_item_bottom_left hei_24">
							<view class="zhao_tx">
								<image src="../../static/index_img/hr.png" mode="" class="zhao_tx_img"></image>
								<image src="../../static/index_img/renzheng.png" mode="" class="zhao_tx_renzheng"></image>
							</view>
							魏雨燕
							<text class="yuandian"></text>
							招聘者
						</view>
						
					</view>
				</view>
			</view>
			<view class="tishi hei_26">
				仅显示最近一年的数据，最多200个~
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			currentPage: 'qy/xiaoxi',
			tab: [{ text: '对我感兴趣', new: false }, { text: '看过我', new: true }, { text: '新职位', new: false }],
			qiehuan_active: 1,
			tab_active: 2,
			shaixuan_bottom: 1,
			sou_txt:'',
			xiaoxi_tab_index:0,
			xiaoxi_tab: [{ text: '全部', new: false }, { text: '招呼', new: true }, { text: '沟通中', new: false }]
		};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		tab_qiehuan(index) {
			this.tab_active = index;
		},
		qiehuan(index) {
			this.qiehuan_active = index;
		},
		xuan_bottom(index) {
			this.shaixuan_bottom = index;
		},
		xiaoxi_tab_qiehuan(index){
			this.xiaoxi_tab_index=index
		},
		go_chat() {
			uni.navigateTo({
				url: 'chat'
			});
		},
		confirm(){
			console.log(this.sou_txt)
		}
	}
};
</script>

<style>

.head_center{
	width: 50%;
}
.tongzhi {
	width: 34rpx;
	height: 39rpx;
}

.zi_body {
	
	
}

.goutong_txt {
	margin-right: 33rpx;
	position: relative;
}
.liao_hongdian{
	position: absolute;
	right: -4rpx;
	display: inline-block;
	width: 12rpx;
		height: 12rpx;
		background-color: #f43a51;
		border-radius: 100%;
		top: 0;
}
.shaixuan_body {
	box-sizing: border-box;
	width: 100%;
	position: fixed;
	top: 100rpx;
	z-index: 9;
	background-color: #ffffff;
}
.shaixuan {
	height: 80rpx;
	display: flex;
	align-items: center;
	border-bottom: 2rpx solid #f3f3f3;
	padding: 0 30rpx;
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
.shaixuan_bottom {
	padding: 0 30rpx;
	height: 90rpx;
	display: flex;
	align-items: center;
	border-bottom: 2rpx solid #f3f3f3;
}
.shaixuan_bottom text {
	display: inline-block;
	width: 103rpx;
	height: 56rpx;
	background-color: #ffffff;
	border-radius: 5rpx;
	border: solid 2rpx #ebebeb;
	line-height: 56rpx;
	text-align: center;
	margin-right: 16rpx;
}
.border {
	border: solid 2rpx #00c6c9 !important;
	color: #00c6c9;
}

.hudong_item {
	padding: 40rpx 30rpx 0;
	border-bottom: 20rpx solid #f8f8f8;
}
.hudong_item_bottom {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100rpx;
}
.hudong_item_bottom_left {
	display: flex;
	align-items: center;
}
.zhao_tx {
	width: 50rpx;
	height: 50rpx;
	border-radius: 100%;
	position: relative;
	margin-right: 20rpx;
}
.zhao_tx_img {
	width: 100%;
	height: 100%;
}
.zhao_tx_renzheng {
	width: 24rpx;
	height: 24rpx;
	border-radius: 100%;
	position: absolute;
	bottom: 0;
	right: -10rpx;
}
.yuandian {
	width: 4rpx;
	height: 5rpx;
	background-color: #333333;
	border-radius: 100%;
	margin: 0 10rpx;
}

.hudong_item_yaoqiu {
	display: flex;
	align-items: center;
}
.hudong_item_yaoqiu view {
	height: 45rpx;
	background-color: #f5f5f5;
	border-radius: 5rpx;
	line-height: 45rpx;
	margin-right: 16rpx;
	padding: 0 14rpx;
}
.hudong_item_yaoqiu view text {
	margin-right: 10rpx;
}
.hudong_item_gongsi {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 20rpx 0 30rpx;
}
.hudong_item_zhiwei {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.duoxin {
	margin-left: 10rpx;
}



.liaotian_top{
	position: fixed;
	top: 100rpx;
	width: 100%;
	box-sizing: border-box;
	height: 240rpx;
}
.liaotian_top_kaiqi{
	color: #ffaa32;
	font-size: 26rpx;
		height: 70rpx;
		background-color: #fff5ed;
		width: 100%;
		padding: 0 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
}
.liaotian_top_kaiqi_left image{
	margin-right: 36rpx;
		width: 18rpx;
		height: 17rpx;
		vertical-align: middle;
}
.liaotian_top_kaiqi button{
		width: 84rpx;
		height: 44rpx;
		background-color: #ffaa32;
		border-radius: 22rpx;
		line-height: 44rpx;
		padding: 0;
		margin: 0;
}
.liaotian_top_sousuo{
		width: 660rpx;
		height: 64rpx;
		background-color: #f5f5f5;
		border-radius: 32rpx;
		margin: 16rpx auto 0;
		display: flex;
		align-items: center;
		
}
.liaotian_top_sousuo image{
		width: 23rpx;
		height: 24rpx;
		margin: 0 18rpx;
}
.liaotian_top_sousuo input{
	width: 88%;
}
.lianxi_tab_body{
	padding: 0 30rpx;
}
.lianxi_tab{
	
	height: 90rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2rpx solid #f3f3f3;
}
.lianxi_tab_left {
	display: flex;
	align-items: center;
	
}
.lianxi_tab_left view{
	position: relative;
	margin-right: 50rpx;
}
.lianxi_tab_left text{
	position: absolute;
	top: 0;
	right: -8rpx;
	display: inline-block;
	width: 12rpx;
	height: 12rpx;
	background-color: #f43a51;
	border-radius: 100%;
}
.lianxi_tab_right{
		width: 140rpx;
		height: 56rpx;
		background-color: #ffffff;
		border-radius: 5rpx;
		border: solid 2rpx #ebebeb;
		line-height: 56rpx;
		text-align: center;
}
.liaotian_body{
	padding-top: 340rpx;
	background-color: #FFFFFF;
}
.xiaoxi_tx{
	width: 100rpx;
		height: 100rpx;
		border-radius: 100%;
		margin-right: 30rpx;
		position: relative;
}
.new_fabu{
	width: 12rpx;
		height: 12rpx;
		background-color: #f43a51;
		border-radius: 100%;
		position: absolute;
		top: 0;
		right: -16rpx;
		
}
.xiaoxi_num{
		padding: 0 10rpx;
		height: 32rpx;
		background-color: #f43a51;
		display: inline-block;
		border-radius: 32rpx;
		position: absolute;
		top: 0;
		right: 0;
		line-height: 32rpx;
		text-align: center;
}
.xiaoxi_list{
	padding: 20rpx 30rpx 0;
}
.xiaoxi_item{
	display: flex;
	align-items: center;
	padding: 20rpx 0;
}
.xiaoxi_tx image{
	width: 100%;
	height: 100%;
}
.xiaoxi_item_right{
	width: 80%;
}
.xiaoxi_title{
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	margin-bottom: 14rpx;
}
.fabu_gongsi{
	margin-right: 30rpx;
}
.xiaoxi_lianxi_title{
	text-align: center;
	line-height: 120rpx;
	background-color: #F8F8F8;
}
.xitong_tongzhi{
	margin-left: 18rpx;
}
.xiaoxi_gongsi_name{
	margin: 0 26rpx;
}
.xiaoxi_txt{
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.xiaoxi_name{
	 
}
.tishi{
	text-align: center;
	padding: 40rpx 0 100rpx;
}
</style>
