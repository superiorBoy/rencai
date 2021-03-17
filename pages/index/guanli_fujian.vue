<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">管理附件</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body">
		<view class="fujian_body">
			<view class="jianli_body">
				<view class="fujian_title hei_36_bold">
					<text class="hei_34_bold">文件简历</text>
					<text><text class="lan_36_bold">1</text><text class="qian_32">/</text>3</text>
				</view>
				<view class="jianli_list_body">
				<view class="jianli_list">
					
					<view class="jianli_list_left">
						<image src="../../static/index_img/pdf.png" mode=""></image>
						<view class="jianli_list_left_r">
						<view class="hei_28 jianli_name">
							张智科求职简历.PDF
						</view>
						<view class="qian_24 jianli_shijian">
						<text class="jianli_size">234.0KB</text>	   2020.01.02 12:30上传 <text class="lan_20 jiexi">可解析</text>
						</view>
						</view>
					</view>
					
				</view>
				</view>
				<view class="up_jianli_txt">
				<view class="lan_34_bold up_jianli">
					<image src="../../static/index_img/add_fujian.png" mode=""></image>上传简历/作品集
				</view>
				</view>
			</view>
		<view class="jianli_body shipin_body">
			<view class="fujian_title hei_36_bold">
				<text class="hei_34_bold">视频附件</text>
				<text><text class="lan_36_bold">0</text><text class="qian_32">/</text>3</text>
			</view>
			<view class="hei_28">
				可以拍摄自我介绍或是才艺展示
			</view>
			<view class="jianli_list">
				
				<!-- <view class="">
				<view class="jianli_list">
					
					<view class="jianli_list_left">
						<image src="../../static/index_img/pdf.png" mode=""></image>
						<view class="jianli_list_left_r">
						<view class="hei_28 jianli_name">
							张智科求职简历.PDF
						</view>
						<view class="qian_24 jianli_shijian">
						<text class="jianli_size">234.0KB</text>	   2020.01.02 12:30上传 <text class="lan_20 jiexi">可解析</text>
						</view>
						</view>
					</view>
					
				</view>
				</view> -->
			</view>
			<view class="up_jianli_txt ">
				<view class="lan_34_bold up_jianli up_shipin">
					<image src="../../static/index_img/add_fujian.png" mode=""></image>上传视频
				</view>
			</view>
			
		</view>
			
		<view class="hei_34_bold qiye_jianli">
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
			
			<view class=" qian_24 tishi">
				 <image src="../../static/index_img/fujian_tishi.png" mode=""></image>  附件简历在企业向你索取且经你同意，或是你主动发送时才会
				提供给对方，企业将你转发给同事时，可能会将附件简历一并转
				发。
			</view>
			
		</view>

		</view>
	</view>
</template>

<script>
	
export default {

	data() {
		return {

		};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
	
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
}
.fujian_body{
	padding: 0 30rpx 50rpx;
}
.fujian_title{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 60rpx 0 30rpx;
}
.shipin_body .fujian_title{
	margin-bottom: 20rpx;
}
.jianli_list_body{
	border-bottom: 2rpx solid #e8e8e8;
	padding-bottom: 42rpx;
}
.jianli_list_left{
	display: flex;
	align-items: center;
}
.jianli_list_left image{
		width: 74rpx;
		height: 76rpx;
		margin-right: 18rpx;
}
.up_jianli_txt{
	padding: 0 10rpx;
}
.jianli_name{
	margin-bottom: 16rpx;
}
.jianli_size{
	margin-right: 20rpx;
}
.jiexi{
	background-color: #e5f9f9;
		height: 36rpx;
		
		border-radius: 5rpx;
		display: inline-block;
		padding: 0 10rpx;
		margin-left: 15rpx;
}
.up_jianli{
	width: 100%;
		height: 88rpx;
		border: 4rpx dashed #00c6c9;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 50rpx;
}
.up_shipin{
	margin-top: 40rpx;
}
.up_jianli image{
		width: 36rpx;
		height: 36rpx;
		margin-right: 20rpx;
}
.hei_right{
		width: 11rpx;
		height: 20rpx;
}
.qiye_jianli{
	margin: 86rpx 0 32rpx;
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
