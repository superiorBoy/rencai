<template>
	<view class="body">
		<view class="head">
			<view class="head_back hei_38_bold"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">发布成功</view>
			<view class=" head_right hei_30_bold"><image src="../../static/qy_img/fenxiang.png" mode="" style="width: 34rpx;height: 36rpx;"></image></view>
		</view>

		<view class="zi_body">
			<view class="fabu_success">
				<view class="fabu_success_top">
					<image src="../../static/qy_img/fabu_success.png" mode="widthFix"></image>
					<view class="hei_38_bold">
						发布成功！
					</view>
				</view>
				<view class="fabu_success_bottom">
					<view class="fabu_success_center">
					<view class="fabu_success_center_title hei_26_bold">
						提升职位曝光度，吸引更多优质人才投递！
					</view>	
					<view class="hui_24 fabu_success_body_title">
						提升曝光秘籍：
					</view>
					<view class="fabu_success_center_body hui_24">
						<view class="fabu_success_center_body_left">
							<view class="fabu_success_list">
								<text></text>刷新职位
							</view>
							<view class="fabu_success_list">
								<text></text>及时处理沟通消息、简历
							</view>
						</view>	
						<view class="fabu_success_center_body_right">
							<view class="fabu_success_list">
								<text></text>分享职位到朋友圈
							</view>
							<view class="fabu_success_list">
								<text></text>使用招聘道具
							</view>
						</view>	
					</view>	
					</view>
					<view class="fabu_success_bottom_btn">
						<button type="" class="bai_30">一键邀约人才</button>
						<view class="lan_30">
							查看已发职位
						</view>
					</view>
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
			uni.navigateBack()
		}
	
	}
};
</script>

<style>

.head {
	background-color: #ffffff;
	
}
.zi_body {
	
	
}
.fabu_success_top {
	text-align: center;
}
.fabu_success_top image{
	width: 389rpx;
	margin-top: 100rpx;
	margin-bottom: 30rpx;
}
.fabu_success_center{
	height: 320rpx;
		background-color: #ffffff;
		border-radius: 5rpx;
		margin-top: 110rpx;
		border: solid 1rpx #e3e3e3;
		padding: 0 42rpx;
}
.fabu_success_center_title {
	line-height: 112rpx;
	border-bottom: 2rpx solid #e3e3e3;
}
.fabu_success_body_title{
	line-height: 90rpx;
	}
.fabu_success_bottom{
	padding: 0 50rpx;
}
	
.fabu_success_bottom_btn{
	text-align: center;
}
.fabu_success_bottom_btn button{
	height: 80rpx;
		background-color: #00c6c9;
		border-radius: 10rpx;
		line-height: 80rpx;
		margin: 56rpx 0 40rpx;
}
.fabu_success_list{
	display: flex;
	align-items: center;
	margin-bottom: 20rpx;
}
.fabu_success_list text{
		width: 6rpx;
		height: 6rpx;
		background-color: #666666;
		border-radius: 100%;
		margin-right: 7rpx;
		display: inline-block;
}
.fabu_success_center_body{
	display: flex;
}
.fabu_success_center_body_left{
	width: 60%;
}
</style>
