<template>
	<view class="body">
		<view class="head">
			<view class="head_back"></view>
			<view class="head_center bai_38">前端工程师</view>
			<view class=" head_right bai_22">
				<image src="../../static/index_img/index_jia.png" mode="" class="index_jia"></image><text>|</text> 
				<image src="../../static/index_img/index_sousuo.png" mode=""class="index_sousuo"></image>
			</view>
		</view>
		<view class="index_shaixuan hei_26" v-if="!zanwu">
			<view class="index_shaixuan_left">
				<view class="index_shaixuan_left_item">推荐</view>
				<view class="index_shaixuan_left_item">
					附近
					
				</view>
				<view class="index_shaixuan_left_item">最新<text class="bai_20">15</text></view>
			</view>
			<view class="index_shaixuan_right hui_24">
				<pickerAddress2 @change="city_change">
					<view class="index_shaixuan_right_item">{{ city }}</view>
				</pickerAddress2>
				<view class="index_shaixuan_right_item" @click="shaixuan">
					筛选
					<text class="hongdian"></text>
				</view>
				<view class="index_shaixuan_right_item" @click="shaixuan">
					关键词
					<text class="hongdian"></text>
				</view>
			</view>
		</view>
		<view class=" index_body">
			<view class="index_list" >
				<view class="index_item" v-for="item in 5">
					<view class="index_item_top" >
						<view class="index_item_top_left" >
							<view class="index_item_zhiwie hei_34_bold" >
								WEB前端工程师
							</view>
							<view class="index_item_yaoqiu hui_24" >
									<text>1-3年</text><text>大专</text><text>移动端</text><text>客户端</text>
							</view>
							<view class="index_item_guimo hei_26" >
								浙江大华科技 <text>已上市</text>  1000-9999人
							</view>
						</view>
					         <text class="lan_30">12-24K</text>
					</view>
					<view class="index_item_bottom" >
						<view class="index_item_bottom_left hei_24" >
						<view class="zhao_tx">
							<image src="../../static/index_img/hr.png" mode="" class="zhao_tx_img"></image>
							<image src="../../static/index_img/renzheng.png" mode=""class="zhao_tx_renzheng"></image>
						</view>	高女士 <text  class="yuandian"></text> HR
						</view>	
						<text class="qian_24">杭州</text>
					</view>	
				</view>
			</view>

		</view>
		
	</view>
</template>

<script>

import pickerAddress2 from '@/components/wangding-pickerAddress/wangding-pickerAddress.vue';
//#ifdef H5
import $ from '@/common/jquery-3.4.1.min.js';
import { loadBMap } from '@/common/map.js';
//#endif
export default {
	components: {
		pickerAddress2
	},
	data() {
		return {
			zanwu: false,
			city: '',
			
		};
	},
	onLoad() {
		// #ifdef H5
		window.initBaiduMapScript = () => {
			// console.log(BMap);
			this.getlocation();
		};
		loadBMap('initBaiduMapScript');
		// #endif
	},
	//下拉刷新
	onPullDownRefresh: function() {
		console.log('下拉刷新');
		uni.showToast({
			title: '已刷新',
			duration: 2000,
			icon: 'none'
		});
		uni.stopPullDownRefresh();
	},
	methods: {
		//上拉加载
		onReachBottom() {
			console.log('上拉加载');
			uni.showToast({
				title: '没有更多内容了',
				duration: 2000,
				icon: 'none'
			});
			uni.stopPullDownRefresh();
		},
		fabu() {
			uni.navigateTo({
				url: 'fabu_zhiwei'
			});
		},
		shaixuan() {
			uni.navigateTo({
				url: 'shaixuan'
			});
		},
		city_change(e) {
			console.log(e);
			this.city = e.data[1];
		},
		go_chat() {
			uni.navigateTo({
				url: 'chat'
			});
		},
		// 获取经纬度
		getlocation() {
			const that = this;
			this.$nextTick(function() {
				try {
					const geolocation = new BMap.Geolocation();
					geolocation.getCurrentPosition(function(r) {
						$.ajax({
							url: '//api.map.baidu.com/geocoder/v2/?ak=eIxDStjzbtH0WtU50gqdXYCz&output=json&pois=1&location=' + r.latitude + ',' + r.longitude,
							type: 'GET',
							async: false, //设置同步。ajax默认异步
							dataType: 'jsonp',
							jsonp: 'callback', //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
							jsonpCallback: 'callback', //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
							timeout: 5000,
							contentType: 'application/json; charset=utf-8',
							success: function(res) {
								console.log(res);
								that.city = res.result.addressComponent.city;
								uni.setStorage({
									key: 'dizhi',
									data: {
										sheng: res.result.addressComponent.province,
										shi: res.result.addressComponent.city,
										qu: res.result.addressComponent.district
									}
								});
							}
						});
					});
				} catch (e) {
					console.log(e);
				}
			});
		}
	}
};
</script>

<style>
.head {
	background-color: #00c6c9;
}

.index_body {
	padding-top: 182rpx;
}
.index_shaixuan {
	position: fixed;
	top: 100rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	width: 100%;
	padding: 0 30rpx;
	height: 84rpx;
	border-bottom: 2rpx solid #f3f3f3;
	background-color: #ffffff;
	z-index: 9;
}
.index_shaixuan_right {
	display: flex;
	align-items: center;
}
.index_shaixuan_left {
	display: flex;
	align-items: center;
}
.index_shaixuan_left_item {
	margin-right: 40rpx;
	position: relative;
}
.index_shaixuan_left_item text {
	height: 24rpx;
	background-color: #f43a51;
	border-radius: 12rpx;
	display: inline-block;
	position: absolute;
	line-height: 24rpx;
	left: 86%;
	top: -10rpx;
	padding: 0 6rpx;
}
.index_shaixuan_right_item {
	/* width: 94rpx; */
	background-color: #f5f5f5;
	height: 48rpx;
	border-radius: 5rpx;
	margin-left: 20rpx;
	line-height: 48rpx;
	text-align: center;
	position: relative;
	padding: 0 20rpx 0 10rpx;
}
.index_shaixuan_right_item::before {
	content: '';
	display: inline-block;
	width: 12rpx;
	height: 10rpx;
	background: url(../../static/qy_img/index_before.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	bottom: 7rpx;
	right: 7rpx;
}
.hongdian {
	display: inline-block;
	width: 12rpx;
	height: 12rpx;
	background-color: #f43a51;
	border-radius: 100%;
	position: absolute;
	top: 7rpx;
	right: 16rpx;
}
.index_jia{
		width: 36rpx;
		height: 36rpx;
}
.index_sousuo{
		width: 34rpx;
		height: 36rpx;
}
.head_right{
	display: flex;
	align-items: center;
	justify-content: flex-end;
}
.head_right text{
	margin: 0 24rpx;
	color: #86dad6;
}

.index_list {
}
.index_item {
	padding:30rpx 30rpx 0;
	border-bottom: 20rpx solid #f8f8f8;
}
.zhao_tx{
		width: 50rpx;
		height: 50rpx;
		border-radius: 100%;
		position: relative;
		margin-right: 20rpx;
	}
.zhao_tx_img {
	width: 100%;
	height: 100%;
}
.zhao_tx_renzheng{
		width: 24rpx;
		height: 24rpx;
		border-radius: 100%;
		position: absolute;
		bottom: 0;
		right: -10rpx;
}
.index_item_bottom{
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 110rpx;
}
.index_item_top{
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
}
.index_item_yaoqiu{
	margin: 30rpx 0 20rpx;
}
.index_item_yaoqiu text{
		height: 44rpx;
		background-color: #f5f5f5;
		border-radius: 5rpx;
		line-height: 44rpx;
		padding: 0 15rpx;
		margin-right: 10rpx;
		display: inline-block;
}
.index_item_bottom_left{
	display: flex;
	align-items: center;
}
.yuandian{
		width: 4rpx;
		height: 5rpx;
		background-color: #333333;
		border-radius: 100%;
		margin: 0 8rpx;
	}
	.index_item_guimo text{
		margin: 0 20rpx;
	}
</style>
