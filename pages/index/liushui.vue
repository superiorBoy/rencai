<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">流水明细</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body">
			<view class="mingxi_top">
	
					<view class="mingxi_top_left hei_24" @click="tan_shijian">
						{{ shijian ? shijian : '选择时间' }}
						<image src="../../static/index_img/xaingxia.png" mode=""></image>
					</view>
				<view class="mingxi_top_right qian_28">账户余额￥100.00</view>
			</view>
			<rangeDatePick :show="isShow" start="1900-01" end="2200-12" @change="shijian_change" @showchange="showchange" @cancel="bindCancel" fields="month"></rangeDatePick>
					
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
			<view class="tishi qian_24">仅展示最近一个月的消息</view>
		</view>
	</view>
</template>

<script>
import rangeDatePick from '@/components/pyh-rdtpicker/pyh-rdtpicker.vue';
export default {
	components: {
		rangeDatePick
	},

	data() {
		return {
			page: 0,
			is_all: false,
			liushui_list: [],
			shijian: '',
		    isShow:false
			
		};
	},
	created() {},
	//下拉刷新
	onPullDownRefresh: function() {
		this.page=0
		this.is_all=false
		this.liushui_list=[]
		this.zhuanchang_txt=''
		
		
	},
	// stopPullDownRefresh:function(){

	// },
	onShow() {},
	onLoad() {
		// this.huoqu_liushui()
	},
	methods: {
		//上拉加载
		onReachBottom() {},
		navigateBack() {
			uni.navigateBack();
		},
		huoqu_liushui() {
			// 获取流水记录

			if (this.zhuanchang_txt != '') {
				this.liushui_list = [];
			}

			this.$http
				.post({
					url: '/userapi/user/liushui',
					data: {
						page: this.page,
						grade: this.zhuanchang_txt,
						riqi: this.shijian
					}
				})
				.then(res => {
					this.liushui_list = this.liushui_list.concat(res.data.bill);

					if (res.data.bill.length < 10) {
						this.is_all = true;
					}
					this.leixing = res.data.grade;
				});
		},
		
		tan_shijian() {
			this.isShow = true;
		},
		shijian_change(e) {
			console.log(e);
			this.shijian = e[0] + ' - ' + e[1];
			this.huoqu_liushui();
		},
		bindCancel() {},
		showchange() {
			this.isShow = !this.isShow;
		},
		
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
.mingxi_top {
	padding: 0 30rpx;
	height: 100rpx;
	background-color: #f5f5f5;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.mingxi_top_left {
	min-width: 170rpx;
	padding: 0 20rpx;
	height: 56rpx;
	background-color: #ffffff;
	border-radius: 28rpx;
	border: solid 2rpx #dadada;
	display: flex;
	align-items: center;
	justify-content: center;
}
.mingxi_top_left image {
	width: 12rpx;
	height: 9rpx;
	margin-left: 16rpx;
}
.money {
	color: #fa6a43;
	font-size: 28rpx;
}
.tishi {
	text-align: center;
	margin: 48rpx 0;
}
</style>
