<template>
	<view class="body">
		<view class="head">
			<view class="head_back hei_38_bold"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">我的公司</view>
			<view class=" head_right hei_30_bold"><image src="../../static/qy_img/fenxiang.png" mode="" style="width: 34rpx;height: 36rpx;"></image></view>
		</view>

		<view class="zi_body">
			<view class="my_gongsi_top">
				<view class="my_gongsi_top_left">
					<view class="gongsi_name hei_38_bold">
						红盟网络
						<image src="../../static/qy_img/gongsi_renzheng.png" mode=""></image>
					</view>
					<view class="hei_30 gongsi_quancheng">杭州红盟网络科技有限公司</view>
					<view class="hui_26 gongsi_guimo">
						<text>电商/社交</text>
						<text>不需要融资</text>
						少于15人
					</view>
				</view>
				<view class="my_gongsi_top_right"><image src="../../static/qy_img/my_logo.png" mode=""></image></view>
			</view>
			<view class="gongsi_chengyuan">
				<view class="gongsi_chengyuan_title hei_28">公司成员</view>
				<view class="gongsi_chengyuan_body">
					<view class="gongsi_chengyuan_body_left">
						<image src="../../static/qy_img/tx.png" mode=""></image>
						<image src="../../static/qy_img/tx.png" mode=""></image>
						<image src="../../static/qy_img/tx.png" mode=""></image>
						<image src="../../static/qy_img/tx.png" mode=""></image>
					</view>
					<view class="gongsi_chengyuan_body_right qian_26">
						2人
						<image src="../../static/qy_img/go_right.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="gongsi_bottom">
				<view class="gongsi_title hei_30_bold">公司简介</view>
				<view class="hui_26 jianjie_body">
					红盟网络是中国领先电商导购媒体，注册用户已突破1.7亿。 红盟现有合作伙伴几乎涵盖了所有知名电商 ，包括天猫、淘 宝、京东、苏宁易购、携程、一号店、亚马逊、聚美优品等
					400多家电商网站，以及8000多个知名品牌店铺。目前返利 的移动端占比达70%。
				</view>
				<view class="gongsi_title hei_30_bold">一句话介绍</view>
				<view class="hui_26">网络技术开发，app开发，生活省钱</view>
				<view class="gongsi_title hei_30_bold">公司网址</view>
				<view class="hui_26">https://www.lagou.com/gongsi/117922710.html</view>
				<view class="gongsi_title hei_30_bold">公司地址</view>
				<view class="hui_26">浙江省杭州市江干区新城时代广场3幢1401</view>
		
			<view class="gongsi_caozuo lan_26">
				<view class="gongsi_caozuo_left">
					<image src="../../static/qy_img/gongsi_genghuan.png" mode=""></image>更换公司
				</view>
				<view class="gongsi_caozuo_right" @click="bianji">
					<image src="../../static/qy_img/gongsi_bianji.png" mode="" ></image>编辑公司信息
				</view>
				
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
		},
		bianji(){
			uni.navigateTo({
				url:'wanshan_xinxi'
			})
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
	
}
.my_gongsi_top_right image {
	width: 110rpx;
	height: 110rpx;
}
.my_gongsi_top {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	padding: 34rpx 30rpx;
}
.gongsi_chengyuan_title {
	border-top: 2rpx solid #e9e9e9;
	line-height: 90rpx;
}
.gongsi_name image {
	width: 29rpx;
	height: 38rpx;
	margin-left: 12rpx;
	vertical-align: middle;
}
.gongsi_chengyuan {
	padding: 0 30rpx 30rpx;
	border-bottom: 20rpx solid #f6f6f6;
}
.gongsi_chengyuan_body_right image {
	width: 11rpx;
	height: 20rpx;
	margin-left: 8rpx;
}
.gongsi_chengyuan_body_left image {
	width: 57rpx;
	height: 65rpx;
	border-radius: 100%;
	margin-right: 10rpx;
}
.gongsi_chengyuan_body {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.gongsi_guimo text {
	margin-right: 20rpx;
}
.gongsi_quancheng {
	margin: 24rpx 0 12rpx;
}
.gongsi_bottom {
	padding: 20rpx 30rpx 30rpx;
}
.gongsi_title {
	line-height: 80rpx;
}
.jianjie_body{
	line-height: 40rpx;
}
.gongsi_caozuo{
	display: flex;
	align-items: center;
	margin-top: 70rpx;
}
.gongsi_caozuo image{
	width: 24rpx;
	height: 24rpx;
	margin-right: 10rpx;
	vertical-align: middle;
}
.gongsi_caozuo view{
	width: 50%;
	text-align: center;
}
</style>
