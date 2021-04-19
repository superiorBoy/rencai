<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">设置备注</view>
			<view class=" head_right hei_30_bold"><text @click="baocun">确定</text></view>
		</view>

		<view class="zi_body">
			
			<view class="add_body">
				<view class="hei_28 miaoshu_txt">
					描述
				</view>
				<textarea value="" placeholder="添加更多备注信息" v-model="text" class="hei_28"   placeholder-style="color:#d7d7d7"/>
                 <view class="tishi hei_28">
                 	注：备注仅您自己可见
                 </view>
			</view>
			
		</view>
	</view>
</template>

<script>
	
export default {

	data() {
		return {
		text:''
		};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		
		baocun(){
			console.log(this.text)
		},

	}
};
</script>

<style>
.head {
	background-color: #ffffff;
	
}
.zi_body {
	padding-top: 100rpx;
}
.add_body{
	padding: 30rpx 30rpx;
}
.miaoshu_txt{
	margin-bottom: 6rpx;
}
.add_body textarea{
	width: 100%;
	height: 250rpx;
	line-height: 40rpx;
	border-bottom: 2rpx solid #ebebeb;
}
.tishi{
	
	margin-top: 30rpx;
	
}
</style>
