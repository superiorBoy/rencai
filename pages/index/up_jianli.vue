<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">上传简历</view>
			<view class=" head_right lan_30_bold"></view>
		</view>

		<view class="zi_body">
			<view class="up_top">
				<view class="hei_34_bold">选择上传简历的方式</view>
				<view class="hui_28 up_top_text">
				简历建议使用 PDF 文件，也支持DOC、DOCX、
				</view>
				<view class="hui_28 ">
                       JPG、PNG格式，文件大小不超过8M
				</view>
			</view>
			<view class="up_list hei_30">
				<view class="up_item">
					<view class="up_item_left">
						<image src="../../static/index_img/up_saoma.png" mode=""></image>
						扫码上传
					</view>
					<view class="up_item_right"><image src="../../static/qy_img/go_right.png" mode=""></image></view>
				</view>
				<view class="up_item">
					<view class="up_item_left">
						<image src="../../static/index_img/up_shouji.png" mode=""></image>
						手机上传
					</view>
					<view class="up_item_right"><image src="../../static/qy_img/go_right.png" mode=""></image></view>
				</view>
				<view class="up_item">
					<view class="up_item_left">
						<image src="../../static/index_img/up_youxiang.png" mode=""></image>
						邮件上传
					</view>
					<view class="up_item_right"><image src="../../static/qy_img/go_right.png" mode=""></image></view>
				</view>
				<view class="up_item">
					<view class="up_item_left">
						<image src="../../static/index_img/up_qita.png" mode=""></image>
						从其他应用分享上传
					</view>
					<view class="up_item_right"><image src="../../static/qy_img/go_right.png" mode=""></image></view>
				</view>
			</view>
			
			<view class="hei_34_bold">
				使用专业级简历模板升级简历？
			</view>
			<view class="zhuanshu">
				
				<view class="zhuanshu_left">
					<image src="../../static/index_img/fujian_vip.png" mode=""></image>
					<view class="zhuanshu_left_r">
						<view class="zhuanshu_left_title">
							专属简历模版
						</view>	
						<view class="zhuanshu_left_txt">
							面试官专业好评  一键生成  款式多样
						</view>	
					</view>	
					
				</view>	
				<view class="zhuanshu_right">
					<image src="../../static/qy_img/hei_right.png" mode="" class="hei_right"></image>
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
	background-color: #ffffff;
	border-bottom: 2rpx solid #f5f5f5;
}
.zi_body {
	padding-top: 100rpx;
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.up_top {
	margin: 60rpx 0;
}
.up_top_text {
	margin-top: 40rpx;
	line-height: 40rpx;
}
.up_item_right image {
	width: 17rpx;
	height: 32rpx;
}
.up_item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100rpx;
	background-color: #ffffff;
	box-shadow: 0rpx 0rpx 9rpx 0rpx rgba(216, 216, 216, 0.34);
	border-radius: 5rpx;
	padding: 0 30rpx 0 40rpx;
	margin-bottom: 50rpx;
}
.up_item_left image {
	width: 70rpx;
	height: 70rpx;
	vertical-align: middle;
	margin-right: 34rpx;
}
.zhuanshu{
	display: flex;
	align-items: center;
		height: 160rpx;
		background-image: linear-gradient(180deg, 
			#fff4ec 0%, 
			#ffffff 100%), 
		linear-gradient(
			#a1a0a0, 
			#a1a0a0);
		background-blend-mode: normal, 
			normal;
		box-shadow: 0rpx 4rpx 5rpx 0rpx 
			rgba(213, 213, 213, 0.24);
		border-radius: 10rpx;
		justify-content: space-between;
		padding: 0 30rpx 0 36rpx;
		margin-bottom: 40rpx;
}
.zhuanshu_left{
	display: flex;
	align-items: center;
}
.zhuanshu_left image{
		width: 75rpx;
		height: 75rpx;
		margin-right: 30rpx;
}
.zhuanshu_left_title{
	font-size: 32rpx;
		color: #7e614d;
		font-weight: bold;
		margin-bottom: 10rpx;
}
.zhuanshu_left_txt{
	font-size: 26rpx;
	color: #a58874;
}
.tishi{
	line-height: 40rpx;
}
.tishi image{
		width: 22rpx;
		height: 27rpx;
		vertical-align: middle;
		margin-right: 4rpx;
}
</style>
