<template>
	<view class="body">
		<view class="head">
			<view class="head_back"></view>
			<view class="head_center bai_38">前端工程师</view>
			<view class=" head_right hei_30_bold"></view>
		</view>
		<view class="index_shaixuan hei_26" v-if="!zanwu">
			<view class="index_shaixuan_left">
				<view class="index_shaixuan_left_item">推荐</view>
				<view class="index_shaixuan_left_item">
					精选
					<text class="bai_20">15</text>
				</view>
				<view class="index_shaixuan_left_item">最新</view>
			</view>
			<view class="index_shaixuan_right hui_24">
				<pickerAddress2 @change="city_change">
					<view class="index_shaixuan_right_item">{{ city }}</view>
				</pickerAddress2>
				<view class="index_shaixuan_right_item" @click="shaixuan">
					筛选
					<text class="hongdian"></text>
				</view>
			</view>
		</view>
		<view class="tabber_body index_body">
			<view class="index_list" v-if="!zanwu">
				<view class="index_item" v-for="item in 10" @click="go_chat()">
					<view class="index_item_top">
						<view class="index_item_top_left">
							<view class="index_item_name hei_34_bold">李雪夏</view>
							<view class="index_item_yaoqiu hui_24">
								<text>1年以内</text>
								<text>大专</text>
								<text>8-12K</text>
							</view>
						</view>
						<view class="index_item_top_left_right">
							<image src="@/static/qy_img/tx.png" mode="" class="index_item_top_tx"></image>
							<image src="@/static/qy_img/nan.png" mode="" class="xingbie"></image>
						</view>
					</view>
					<view class="index_item_zhiwu hei_26">
						<image src="@/static/qy_img/zhiwu.png" mode=""></image>
						浙江大华科技
						<text></text>
						产品经理（软件系统方向）
					</view>
					<view class="index_item_techang hui_24">
						<text>需求分析</text>
						<text>后端</text>
						<text>用户研究</text>
					</view>
					<view class="index_item_miaoshu hui_26">
						<view class="index_item_miaoshu_left">做过3年的前端页面开发。有一年的产品需求分析经验，有很好的逻辑分析能力，能快速解决业务需求</view>
						<image src="@/static/qy_img/close.png" mode="" class="close"></image>
					</view>
				</view>
			</view>

			<view class="zanwu" v-if="zanwu">
				<image src="../../static/qy_img/zhiwei_zanwu.png" mode="widthFix"></image>
				<view class="hui_30">目前没有在线职位</view>
				<view class="qian_24 zanwu_txt">发布职位才能获取精准的人才推荐</view>

				<button type="" class="bai_30" @click="fabu">发布新职位</button>
			</view>
		</view>
		<tabBar :currentPage="currentPage" ref="ls_mainindex"></tabBar>
	</view>
</template>

<script>
import tabBar from '@/components/tabbar/tabbar.vue';
import pickerAddress2 from '@/components/wangding-pickerAddress/wangding-pickerAddress.vue';
//#ifdef H5
import $ from '@/common/jquery-3.4.1.min.js';
import { loadBMap } from '@/common/map.js';
//#endif
export default {
	components: {
		tabBar,
		pickerAddress2
	},
	data() {
		return {
			currentPage: 'qy/index',
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
.tabber_body {
	padding-bottom: 100rpx;
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
.index_item_top_left_right {
	width: 84rpx;
	height: 84rpx;
	border-radius: 100%;
	position: relative;
}
.index_item_top_tx {
	width: 100%;
	height: 100%;
}
.xingbie {
	position: absolute;
	top: 0;
	right: 0rpx;
	width: 24rpx;
	height: 24rpx;
}
.index_item_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 25rpx;
}
.index_list {
}
.index_item {
	margin-bottom: 20rpx;
	background-color: #ffffff;
	padding: 30rpx 30rpx;
	border-bottom: 20rpx solid #f8f8f8;
}
.index_item_yaoqiu {
	margin-top: 10rpx;
}
.index_item_yaoqiu text {
	position: relative;
	margin-right: 36rpx;
}
.index_item_yaoqiu text::before {
	content: '';
	display: inline-block;
	width: 2rpx;
	height: 25rpx;
	background-color: #333;
	position: absolute;
	right: -18rpx;
	top: 6rpx;
}
.index_item_yaoqiu text:last-child::before {
	content: none;
}
.index_item_zhiwu {
	display: flex;
	align-items: center;
}
.index_item_zhiwu image {
	width: 27rpx;
	height: 25rpx;
	margin-right: 15rpx;
}
.index_item_zhiwu text {
	display: inline-block;
	width: 4rpx;
	height: 4rpx;
	background-color: #333333;
	border-radius: 100%;
	margin: 0 10rpx;
}
.index_item_techang {
	margin: 30rpx 0 20rpx;
}
.index_item_techang text {
	display: inline-block;
	height: 44rpx;
	background-color: #f5f5f5;
	border-radius: 5rpx;
	padding: 0 8rpx;
	line-height: 44rpx;
	margin-right: 20rpx;
}
.close {
	width: 16rpx;
	height: 16rpx;
	position: relative;
	top: -8rpx;
}
.index_item_miaoshu {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	line-height: 40rpx;
}
.index_item_miaoshu_left {
	width: 95%;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}
.zanwu {
	text-align: center;
}
.zanwu image {
	width: 366rpx;
	height: 199rpx;
	margin: 200rpx 0 130rpx;
}
.zanwu button {
	width: 450rpx;
	height: 80rpx;
	background-color: #00c6c9;
	border-radius: 10rpx;
	line-height: 80rpx;
}
.zanwu_txt {
	margin: 20rpx 0 100rpx;
}
</style>
