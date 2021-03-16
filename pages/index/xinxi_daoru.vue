<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">信息导入</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body daoru_body">
			<view class="daoru_top">
				<view class="hei_48_bold daoru_top_title">
					导入个人信息
				</view>
				<view class="hui_30">
					以下信息将被展示在个人主页中
				</view>
			</view>
			<view class="daoru_title hei_34_bold">
				工作经历
			</view>
			<view class="jingli_list">
				<view class="jingli_item" v-for='item in 3'>
					<view class="jingli_item_left">
						<checkbox :value="1" />
						<image src="../../static/index_img/daoru_gongsi.png" mode=""></image>
					</view>	
					<view class="jingli_item_right">
						<view class="hei_30_bold jingli_item_name">
							浙江银盾科技有限公司
						</view>
						<view class="hui_26">
							web前端开发工程师
						</view>
					</view>
				</view>
			</view>
		<view class="daoru_title hei_34_bold">
			教育经历
		</view>
			<view class="jiaoyu_list">
				<view class="jiaoyu_item">
					
						<view class="jiaoyu_item_left">
							<checkbox :value="1" />
							<image src="../../static/index_img/daxue.png" mode=""></image>
						</view>	
						<view class="jiaoyu_item_right">
							<view class="hei_30_bold jiaoyu_item_name">
								北京大学
							</view>
							<view class="hui_26">
								智能科学与技术
							</view>
						</view>
				
				</view>
			</view>
			
			<view class="daoru_bottom">
				<view class="tiaoguo lan_30">
					跳过
				</view>
				<view class="xiayibu bai_30" @click="xiayibu">
					下一步
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
		},
		xiayibu(){
			
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
.daoru_top{
	margin: 60rpx 0 0rpx;
}
.daoru_title{
	line-height: 150rpx;
}
.daoru_top_title{
	margin-bottom: 20rpx;
}
.jingli_item_left{
	display: flex;
	align-items: center;
}
.jingli_item_left image{
		width: 86rpx;
		height: 86rpx;
		background-color: #f4f4f4;
		border-radius: 10rpx;
		margin: 0 36rpx;
}
.jingli_item{
	display: flex;
	align-items: center;
	margin-bottom: 60rpx;
}
.jiaoyu_item{
	display: flex;
	align-items: center;
	margin-bottom: 60rpx;
}
.jiaoyu_item_left{
	display: flex;
	align-items: center;
}
.jiaoyu_item image{
		width: 105rpx;
		height: 104rpx;
		border-radius: 100%;
		margin: 0 28rpx;
}
.jingli_item_name{
	margin-bottom: 18rpx;
}
.jiaoyu_item_name{
	margin-bottom: 20rpx;
}
.jingli_list,.jiaoyu_list{
	border-bottom: 2rpx solid #e8e8e8;
}
.daoru_bottom{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 156rpx 0 0rpx;
	padding-bottom: 30rpx;
}
.tiaoguo{
		width: 210rpx;
		height: 80rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		border: solid 1rpx #00c6c9;
		line-height: 80rpx;
		text-align: center;
		box-sizing: border-box;
}
.xiayibu{
		width: 460rpx;
		height: 80rpx;
		background-color: #00c6c9;
		border-radius: 10rpx;
		line-height: 80rpx;
		text-align: center;
}
</style>
