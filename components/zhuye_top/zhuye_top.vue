<template>

			<view class="zhuye_body_top">
				<view class="zhuye_top_body">
					<view class="zhuye_top_caozuo">
						<image src="../../static/qy_img/bai_back.png" mode="" style="width: 22rpx;height: 41rpx;" @click="navigateBack()"></image> 
						<image src="../../static/qy_img/bai_fenxiang.png" mode="" style="width:35rpx;height: 36rpx;"></image>
					</view>
					<view class="zhuye_top_tx">
						<image src="../../static/qy_img/tx.png" mode=""></image>
						<view class="bianji bai_22">
							编辑个人资料
						</view>
					</view>
					<view class="zhuye_top_name bai_30_bold">
						张晓梅
					</view>
					<view class="zhuye_top_gongsi bai_24">
						<view class="zhuye_top_gongsi_left">
							杭州红盟网络科技有限公司
						</view>  <text></text>
						  招聘者
					</view>
					<view class="zhuye_top_guanzhu bai_26">
						<view class="zhuye_top_guanzhu_item">
							<text>0</text>我关注的
						</view>
						<view class="zhuye_top_guanzhu_item">
							<text>0</text>关注我的
						</view>
						<view class="zhuye_top_guanzhu_item">
							<text>0</text>获赞
						</view>
					</view>
				</view>
			</view>


</template>

<script>
	
export default {
	components: {
		
	},
	data() {
		return {
			
	
		};
	},

	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack()
		},
		
	}
};
</script>

<style>

.zhuye_body_top{
		height: 515rpx;
		background: url(../../static/qy_img/zhuye_bg.png) no-repeat;
		background-size: 100% 100%;
		position: relative;
}
.zhuye_top_body{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.6);
}
.zhuye_top_caozuo{
	justify-content: space-between;
	display: flex;
	align-items: center;
	height: 150rpx;
}
.zhuye_top_body{
	padding:  0 30rpx;
	box-sizing: border-box;
}
.zhuye_top_tx{
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	margin-bottom: 30rpx;
}
.zhuye_top_tx image{
		width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
}
.zhuye_top_tx .bianji{
		width: 168rpx;
		height: 46rpx;
		border-radius: 23rpx;
		border: solid 1rpx #ffffff;
		line-height: 46rpx;
		text-align: center;
}
.zhuye_top_gongsi{
	display: flex;
	align-items: center;
	margin: 27rpx 0 46rpx;
	}
	.zhuye_top_gongsi text{
		width: 2rpx;
		height: 22rpx;
		display: inline-block;
		background-color: #FFFFFF;
		margin: 0 16rpx 0 10rpx;
	}
	.zhuye_top_gongsi_left{
		
		position: relative;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		width: 200rpx;
		}
.zhuye_top_guanzhu{
	display: flex;
	align-items: center;
}
.zhuye_top_guanzhu_item{
	margin-right: 63rpx;
}
.zhuye_top_guanzhu_item text{
	margin-right: 20rpx;
}
</style>
