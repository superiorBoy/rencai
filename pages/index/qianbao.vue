<template>
	<view class="body">
		
		
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">我的钱包</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body">
			
			<view class="qianbao_top">
				<view class="qianbao_top_money">
					100.00
				</view>
				<view class="qianbao_top_yue bai_30">
					<image src="../../static/index_img/bai_qianbao.png" mode=""></image>账户余额
				</view>
			</view>
			<view class="" style="padding: 0 30rpx;">
				<view class="qianbao_list hei_30">
					<view class="qianbao_list_left">
					<image src="../../static/index_img/qianbao_chongzhi.png"style="width: 36rpx;height: 48rpx;" mode=""></image>	充值
					</view>
					<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
				<view class="qianbao_list hei_30">
					<view class="qianbao_list_left">
					<image src="../../static/index_img/qianbao_tixian.png" mode="" style="width: 36rpx;height: 33rpx;"></image>	提现
					</view>
					<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
			</view>
		
			<view class="qianbao_mingxi qian_26">
				<text class="qian_30">流水明细</text>
				<view class="qianbao_mingxi_right">
					查看全部<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
			</view>
			<view class="liushui_list">
				<view class="liushui_item" v-for="item in 5">
					<view class="liushui_item_top">
						<text class="hei_28_bold">奖励</text>
						<text class="money">￥30</text>
					</view>
					<view class="liushui_item_center hui_26">
						<text>20210311090331110121</text>

						<text class="qian_24">2021-03-11 14:06:36</text>
					</view>
					<view class="liushui_item_bottom hui_20">备注：邀请好友获得奖励</view>
				</view>
			</view>
			<view class="tishi qian_24">
				仅展示最近一个月的消息
			</view>
		</view>
	</view>
</template>

<script>
import timeSelector from '@/components/wing-time-selector/wing-time-selector.vue';
export default {
	components: {
		timeSelector
	},

	data() {
		return {
			page: 0,
			is_all: false,
			liushui_list: [],
			shijian: ''
		};
	},
	created() {},
	//下拉刷新
	onPullDownRefresh: function() {
		// this.getList();
	},
	// stopPullDownRefresh:function(){

	// },
	onShow() {},
	onLoad() {},
	methods: {
		//上拉加载
		onReachBottom() {},
		navigateBack() {
			uni.navigateBack();
		},
		huoqu_liushui() {
			// 获取流水记录
		},
		// 选择时间
		gongzuo_change(e) {
			this.shijian = e.key;
		},
		queding_btn() {
			console.log(this.time, this.zhuanchang_txt);
			this.$refs.popup.close();
			this.huoqu_liushui();
		}
	},
	filters: {
		timeStamp: function(value) {
			if (value == null) {
				return 'null';
			}
			var i = (value + '').length;
			while (i++ < 13) value = value + '0';
			value = Number(value);
			var date = new Date(value);
			//date.setTime(value);
			var month = date.getMonth() + 1;
			var hours = date.getHours();
			if (hours < 10) hours = '0' + hours;
			var minutes = date.getMinutes();
			if (minutes < 10) minutes = '0' + minutes;
			var time = date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + hours + ':' + minutes;
			return time;
		}
	}
};
</script>

<style>
.zi_body {
	padding-top: 100rpx;
}
.head{
	background: url(../../static/index_img/qianbao_title_bg.png) no-repeat;
	background-size: 100% 100%;
}
.tab_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10rpx 38rpx;
	background-color: #ffffff;
	position: fixed;
	top: 100rpx;
	width: 100%;
	box-sizing: border-box;
	z-index: 9;
}

.head_right image {
	width: 40rpx;
	height: 41rpx;
}

.liushui_list {
	padding: 0 30rpx;
}
.liushui_item {
	border-bottom: 2rpx solid #e5e5e5;
	padding: 20rpx 0;
}
.liushui_item_top,
.liushui_item_center {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.liushui_item_center {
	margin: 13rpx 0 20rpx;
}


.money {
	color: #fa6a43;
	font-size: 28rpx;
}
.tishi{
	text-align: center;
	margin: 48rpx 0;
}

.qianbao_top{
	height: 240rpx;
	background: url(../../static/index_img/qianbao_bg.png) no-repeat;
	background-size: 100% 100%;
	text-align: center;
	padding-top: 70rpx;
	box-sizing: border-box;
}
.qianbao_top_money{
	font-size: 60rpx;
	color: #FFFFFF;
	margin-bottom: 10rpx;
}
.qianbao_top_yue image{
		width: 30rpx;
		height: 28rpx;
		margin-right: 10rpx;
}
.go_right{
	width: 10rpx;
		height: 18rpx;
}
.qianbao_list_left image{
	margin-right: 30rpx;
	vertical-align: middle;
}
.qianbao_list{
	display: flex;
	align-items: center;
	justify-content: space-between;
		border-bottom: 2rpx solid #e5e5e5;
		height: 120rpx;
	
}
.qianbao_list:last-child{
	border: none;
}
.qianbao_mingxi{
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 94rpx;
	padding: 0 30rpx;
		background-color: #f7f7f7;
}
.qianbao_mingxi image{
	margin-left: 14rpx;
}
</style>
