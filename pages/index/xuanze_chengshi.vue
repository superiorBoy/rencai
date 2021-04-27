<template>
	<view class="body">


		<view class="zi_body">
			<citySelect @back_city="back_city"></citySelect>
		</view>
	</view>
</template>

<script>
	import citySelect from '@/components/linzq-citySelect/linzq-citySelect.vue';
export default {
	components: {
		citySelect
	
	},
	data() {
		return {
		};
	},
	onLoad() {},
	mounted() {
		
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		oncity() {
			var that = this
			
		},
		back_city(e){
			 
				 
console.log(e.cityName)  
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
	
}
.wei_shimimg {
	display: flex;
	align-items: flex-start;
	padding: 40rpx;
	box-sizing: border-box;
	height: 166rpx;
	background-color: #ffffff;
	box-shadow: 0rpx 0rpx 18rpx 0rpx rgba(0, 7, 0, 0.11);
	border-radius: 10rpx;
	margin-top: 20rpx;
	justify-content: space-between;
}
.wei_shimimg_left image {
	width: 27rpx;
	height: 31rpx;
	margin-right: 17rpx;
}
.wei_shimimg_title {
	display: flex;
	align-items: center;
	margin-bottom: 16rpx;
}
.geren_list {
	padding: 0 30rpx;
}
.geren_item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 172rpx;
	border-bottom: 2rpx solid #f5f5f5;
}
.geren_item input{
	width: 560rpx;
	}
.geren_tx {
	align-items: flex-end;
	padding-bottom: 30rpx;
	padding-top: 25rpx;
	height: auto;
}
.geren_item_left {
	max-width: 80%;
}
.tx {
	width: 120rpx;
	height: 120rpx;
	border-radius: 100%;
}
.go_right {
	width: 12rpx;
	height: 22rpx;
	position: relative;
	top: 20rpx;
}
.geren_item_title {
	margin-bottom: 10rpx;
}
.tishi {
	display: flex;
	align-items: center;
	margin-top: 10rpx;
}
.tishi image {
	width: 24rpx;
	height: 24rpx;
	margin-right: 8rpx;
}
</style>
