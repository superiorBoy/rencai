<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">全部面试</view>
			<view class=" head_right lan_30_bold"></view>
		</view>

		<view class="zi_body">
			
			<view class="mianshi_bianji">
				<view class="mianshi_title hei_36_bold">
					待标记
				</view>
				<view class="mianshi_list">
					<view class="mianshi_item">
						<image src="../../static/index_img/gongsi1.png" mode=""></image>
						<view class="mianshi_item_right">
							<view class="hei_30 mianshi_item_gongsi">
								<text>杭州市九创精密机械有限公司</text>
							</view>
							<view class="qian_24 mianshi_item_bottom">
								<text class="">面试 Web前端 13-18K·13薪</text>
								<text>2021年3月20日</text>
							</view>
						</view>
					</view>
					<view class="mianshi_item">
						<image src="../../static/index_img/gongsi1.png" mode=""></image>
						<view class="mianshi_item_right">
							<view class="hei_30 mianshi_item_gongsi">
								<text>杭州市九创精密机械有限公司</text>
							</view>
							<view class="qian_24 mianshi_item_bottom">
								<text class="">面试 Web前端 13-18K·13薪</text>
								<text>2021年3月20日</text>
							</view>
						</view>
					</view>
				</view>
			</view>	
<view class="mianshi_bianji">
				<view class="mianshi_title hei_36_bold">
					已结束
				</view>
				<view class="mianshi_list">
					<view class="mianshi_item">
						<image src="../../static/index_img/gongsi2.png" mode=""></image>
						<view class="mianshi_item_right">
							<view class="hei_30 mianshi_item_gongsi">
								<text>浙江爱嘉母婴护理有限公司</text>
								<text class="hei_26">已取消</text>
							</view>
							<view class="qian_24 mianshi_item_bottom">
								<text class="">面试 Web前端 13-18K·13薪</text>
								<text>2021年3月20日</text>
							</view>
						</view>
					</view>
					<view class="mianshi_item">
						<image src="../../static/qy_img/gongsi.png" mode=""></image>
						<view class="mianshi_item_right">
							<view class="hei_30 mianshi_item_gongsi">
								<text>杭州森语国际贸易有限公司</text>
								<text class="hei_26">完成</text>
							</view>
							<view class="qian_24 mianshi_item_bottom">
								<text class="">面试 Web前端 9-12K·15薪</text>
								<text>2021年3月20日</text>
							</view>
						</view>
					</view>
					<view class="mianshi_item">
						<image src="../../static/qy_img/gongsi.png" mode=""></image>
						<view class="mianshi_item_right">
							<view class="hei_30 mianshi_item_gongsi">
								<text>浙江子轩教育科技有限公司</text>
								<text class="hei_26">完成</text>
							</view>
							<view class="qian_24 mianshi_item_bottom">
								<text class="">面试 Web前端 10-15K</text>
								<text>2021年3月20日</text>
							</view>
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
	
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.mianshi_item image{
		width: 90rpx;
		height: 91rpx;
		background-color: #ffffff;
		border-radius: 15rpx;
		margin-right: 20rpx;
}
.mianshi_item{
	display: flex;
	align-items: center;
	border-bottom: 2rpx solid #f2f2f2;
	padding: 26rpx 0;
}
.mianshi_item:last-child{
	border: none;
}
.mianshi_title{
	line-height: 90rpx;
}
.mianshi_item_gongsi{
	margin-bottom: 10rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.mianshi_item_bottom{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.mianshi_item_right{
	width: 570rpx;
}
</style>
