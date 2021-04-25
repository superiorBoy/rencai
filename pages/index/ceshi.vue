<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">ceshi</view>
			<view class=" head_right hei_30_bold"><text @click="baocun">保存</text></view>
		</view>

		<view class="zi_body">
			    <picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="bindDateChange">
			        <view class="picker">
			          当前选择: {{date}}
			        </view>
			    </picker>
		</view>
	</view>
</template>

<script>
	
export default {

	data() {
		return {
			date:''
		};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		bindDateChange(data){
			console.log(data)
		}
	}
};
</script>

<style>
.head {
	background-color: #ffffff;
	border-bottom: 2rpx solid #f5f5f5;
}
.head_center{
	width: 60%;
}

</style>
