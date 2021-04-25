<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/bai_back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center bai_38_bold">升级会员</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body">
			<view class="huiyuan_vip">
				<view class="huiyuan_vip_title">开通专属VIP会员</view>
				<view class="huiyuan_vip_zunxiang">尊享6大特权</view>
				<view class="huiyuan_vip_bottom">尊享6大会员特权，求职效率提升至2~3倍</view>
			</view>
			
			<view class="huiyuan_body">
			
			<view class="huiyuan_title">
				<image src="../../static/index_img/huiyuan_left.png" mode=""></image>
			  <text>尊享6大会员权益</text>
				  <image src="../../static/index_img/huiyuan_right.png" mode=""></image>
			</view>
			<view class="huiyuan_quanyi">
				<view class="huiyuan_quanyi_item">
					<image src="../../static/index_img/huanyuan_quanyi1.png" mode=""></image>
					<view class="">
						简历刷新
					</view>
				</view>
				<view class="huiyuan_quanyi_item">
					<image src="../../static/index_img/huanyuan_quanyi2.png" mode=""></image>
					<view class="">
						竞争力分析
					</view>
				</view>
				<view class="huiyuan_quanyi_item">
					<image src="../../static/index_img/huanyuan_quanyi3.png" mode=""></image>
					<view class="">
						消息精准过滤
					</view>
				</view>
				<view class="huiyuan_quanyi_item">
					<image src="../../static/index_img/huanyuan_quanyi4.png" mode=""></image>
					<view class="">
						尊贵身份标识
					</view>
				</view>
				<view class="huiyuan_quanyi_item">
					<image src="../../static/index_img/huanyuan_quanyi5.png" mode=""></image>
					<view class="">
						专属数据报告
					</view>
				</view>
				<view class="huiyuan_quanyi_item">
					<image src="../../static/index_img/huanyuan_quanyi6.png" mode=""></image>
					<view class="">
						专属简历模板
					</view>
				</view>
				
		
				
			</view>
			<view class="huiyuan_title huiyuan_title_vip">
				<image src="../../static/index_img/huiyuan_left.png" mode=""></image>
			     <text><text class="qingxie">VIP</text> 专属特权</text>
				  <image src="../../static/index_img/huiyuan_right.png" mode=""></image>
			</view>
			
			<view class="huiyuan_tequan">
				<view class="huiyuan_tequan_top">
					<text>专属特权</text>
					<text>普通用户</text>
					<text>VIP用户</text>
				</view>
				<view class="huiyuan_tequan_bottom hei_26">
					<view class="huiyuan_tequan_bottom_list">
						<text>简历刷新</text>
						<text class="hui_26">2元/次</text>
						<text class="huiyuan_shuaxin">每天自动刷新</text>
					</view>
					<view class="huiyuan_tequan_bottom_list">
						<text>竞争力分析</text>
						<text class="hui_26">3元/次</text>
						<text class="huiyuan_shuaxin">每天自动刷新</text>
					</view>
					<view class="huiyuan_tequan_bottom_list">
						<text>消息精准过滤</text>
						<text class="hui_26"><image src="../../static/index_img/huiyuan_none.png" mode=""></image></text>
						<text class="huiyuan_shuaxin"><image src="../../static/index_img/huiyuan_duihao.png" mode=""></image></text>
					</view>
					<view class="huiyuan_tequan_bottom_list">
						<text>尊贵身份标识</text>
						<text class="hui_26"> <image src="../../static/index_img/huiyuan_none.png" mode=""></image></text>
						<text class="huiyuan_shuaxin"><image src="../../static/index_img/huiyuan_duihao.png" mode=""></text>
					</view>
					<view class="huiyuan_tequan_bottom_list">
						<text>专属数据报告</text>
						<text class="hui_26"> <image src="../../static/index_img/huiyuan_none.png" mode=""></image></text>
						<text class="huiyuan_shuaxin"><image src="../../static/index_img/huiyuan_duihao.png" mode=""></text>
					</view>
					<view class="huiyuan_tequan_bottom_list">
						<text>专属简历模板</text>
						<text class="hui_26"> <image src="../../static/index_img/huiyuan_none.png" mode=""></image></text>
						<text class="huiyuan_shuaxin"><image src="../../static/index_img/huiyuan_duihao.png" mode=""></text>
					</view>
				</view>
			</view>
			
			
			</view>
			
			<view class="huiyuan_bottom">
				<view class="huiyuan_bottom_left">
					￥<text>58</text>/月
					
				</view>
				<view class="huiyuan_bottom_right">
					￥<text>10</text>/周
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		}
	}
};
</script>

<style>
.head {
	background: url(../../static/index_img/huiyuan_tou_bg.png) no-repeat;
	background-size: 100% 100%;
}
page{
	background-color: #000000;
}
.zi_body {
	padding-bottom: 60rpx;
}
.huiyuan_vip {
	background: url(../../static/index_img/huiyuan_vip.png) no-repeat;
	background-size: 100% 100%;
	height: 800rpx;
	text-align: center;
	position: relative;
	padding-top: 30rpx;
	box-sizing: border-box;
}
.huiyuan_vip_title {
	font-size: 46rpx;
	color: #ffffff;
	margin-bottom: 20rpx;
}
.huiyuan_vip_zunxiang {
	font-size: 95rpx;
	color: #ffffff;
	background-image: -webkit-linear-gradient(bottom, rgb(220, 157, 95), rgb(255, 255, 255));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: bold;
}
.huiyuan_vip_bottom {
	font-size: 28rpx;
	color: #57270f;
	position: absolute;
	bottom: 80rpx;
	left: 50%;
	transform: translate(-50%, 0);
	width: 100%;
	font-weight: bold;
}
.huiyuan_title{
	display: flex;
	align-items: center;
	justify-content: center;
	height: 178rpx;
	font-size: 52rpx;
	background-image: -webkit-linear-gradient(bottom, rgb(220, 157, 95), rgb(255, 255, 255));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: bold;
}
.huiyuan_title_vip{
	background-image: -webkit-linear-gradient(bottom, rgb(163, 116, 86),rgb(247, 226, 192) );
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;	
}
.huiyuan_title image{
	width: 113rpx;
		height: 11rpx;
}
.huiyuan_title text{
	margin: 0 30rpx;
}
.huiyuan_body{
	padding: 0 30rpx;
}
.huiyuan_quanyi_item image{
	width: 104rpx;
		height: 104rpx;
		vertical-align: bottom;
		margin-bottom: 10rpx;
}
.huiyuan_quanyi_item{
text-align: center;	
width: 33.33%;


}
.huiyuan_quanyi{
		color: #fae2bf;
		font-size: 22rpx;
		display: flex;
		/* align-items: center; */
		flex-wrap: wrap;
		height: 493rpx;
			background-color: #24232a;
			border-radius: 20rpx;
			padding: 80rpx 0 0;
			box-sizing: border-box;
}
.qingxie{

	margin-left: 0rpx !important;
	margin-right: 12rpx !important;
	font-style:oblique;
	font-weight: bolder !important;
}
.huiyuan_tequan{
		height: 657rpx;
		background-color: #24232a;
		border-radius: 20rpx;

		;
}
.huiyuan_bottom{
		height: 100rpx;
		margin: 60rpx 0 0;
		display: flex;
		align-items: center;
		font-size: 26rpx;
        color: #e2b37e;
}
.huiyuan_bottom_left{
	height: 100%;
	width: 50%;
	background-color: #24232a;
	text-align: center;
	line-height: 100rpx;

}
.huiyuan_bottom_left text,.huiyuan_bottom_right text{
	font-size: 40rpx;
	background-image: -webkit-linear-gradient(bottom, rgb(163, 116, 86),rgb(247, 226, 192) );
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;	
}
.huiyuan_bottom_right{
	height: 100%;
	width: 50%;
		background-color: #37353e;
		text-align: center;
		line-height: 100rpx;
		
}
.huiyuan_tequan_top{
	height: 112rpx;
	display: flex;
	align-items: center;
		color: #f6e0bd;
		font-size: 26rpx;

}
.huiyuan_tequan_top text{
	width: 33.33%;
	text-align: center;
}
.huiyuan_tequan_bottom_list{
	height: 82rpx;
	display: flex;
	align-items: center;
		background-color: #f6f6f6;
}
.huiyuan_tequan_bottom_list text{
	width: 33.33%;
	text-align: center;
}
.huiyuan_tequan_bottom_list image{
	width: 41rpx;
		height: 41rpx;
	
}
.huiyuan_tequan_bottom_list:nth-child(2n){
	background-color: #ebebeb;
}
.huiyuan_shuaxin{
	color: #dfa178;
}

</style>
