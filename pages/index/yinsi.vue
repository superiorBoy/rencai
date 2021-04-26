<template>
	<view>
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">隐私设置</view>
			<view class=" head_right hei_30_bold">
				<image src="../../static/index_img/wenhao.png" mode=""></image>
			</view>
		</view>

		<view class="zi_body">
			<view class="yinsi_title hei_28_bold">
				展示方式
			</view>
			<view class="xuan_fangshi">
				
		
			<view class="zhanshi_list qian_26" @click="radio(1)">
				<view class="zhanshi_list_left">
				<image src="../../static/index_img/nv_tx.png" mode=""></image>	<text class="name hei_26">张晓梅</text>（实名展示）
				</view>
				<view class="zhanshi_list_right">
						<radio value="1" :checked="xuan==1" />
				</view>
			</view>
			<view class="zhanshi_list qian_26" @click="radio(2)">
				<view class="zhanshi_list_left">
				<image src="../../static/index_img/nv_tx.png" mode=""></image>	<text class="name hei_26">张晓梅</text>（匿名展示）
				</view>
				<view class="zhanshi_list_right">
						<radio value="2" :checked="xuan==2" />
				</view>
			</view>
				</view>
			<view class="yinsi_title hei_28_bold">
				屏蔽企业
			</view>
			<view class="pingbi hui_28">
				<view class="pingbi_item">
					杭州字节跳动科技有限公司 <image src="../../static/qy_img/close.png"></image>
				</view>
				<view class="pingbi_item">
					杭州 <image src="../../static/qy_img/close.png"></image>
				</view>
				<view class="pingbi_item">
					杭州 <image src="../../static/qy_img/close.png"></image>
				</view>
				<view class="pingbi_item">
					杭州 <image src="../../static/qy_img/close.png"></image>
				</view>
				<view class="pingbi_item">
					杭州 <image src="../../static/qy_img/close.png"></image>
				</view>
			</view>
			<view class="xinzeng_bottom">
				
			<button type="" class="xinzeng bai_30">新增企业</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
xuan:1
		};
	},

	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		radio(index) {
			this.xuan=index
		},

	}
};
</script>

<style>
	.zi_body{
padding-bottom: 200rpx;
	}
.head_right image{
		width: 38rpx;
		height: 38rpx;
}
.yinsi_title{
	line-height: 110rpx;
	padding-left: 30rpx;
}
.zhanshi_list{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 38rpx;
}
.zhanshi_list_left image{
		width: 60rpx;
		height: 60rpx;
		border-radius: 100%;
		vertical-align: middle;
}
.zhanshi_list_left text{
	margin: 0 20rpx;
}
.xuan_fangshi{
	padding: 0 30rpx;
	border-bottom: 20rpx solid #f7f7f7;
}
.pingbi_item{
		height: 80rpx;
		background-color: #f8f8f8;
		border-radius: 40rpx;
		border: solid 2rpx #efefef;
		line-height: 80rpx;
		padding: 0 36rpx 0 40rpx;
		margin: 0 10rpx 20rpx 0;
}
.pingbi_item image{
		width: 24rpx;
		height: 24rpx;
		margin-left: 48rpx;
}
.pingbi{
	display: flex;
	align-items: center;
	padding: 0 30rpx;
	flex-wrap: wrap;
}
.xinzeng{
		height: 88rpx;
		background-color: #00c6c9;
		border-radius: 44rpx;
		line-height: 88rpx;
}
.xinzeng_bottom{
	padding: 0 30rpx;
	position: fixed;
	bottom: 50rpx;
	left: 0;
	box-sizing: border-box;
	width: 100%;
}
</style>
