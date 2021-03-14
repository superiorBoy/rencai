<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">面试邀请</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body">
			<view class="yao_top">
				<view class="yao_top_list hei_32_bold">邀请张珊珊参加面试</view>
				<view class="yao_top_list">
					<text class="hei_30_bold">web前端开发工程师</text>
					<view class="yao_top_gai qian_28">
						修改职位
						<image src="../../static/qy_img/go_right.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="yao_fangshi hui_26">
				<view :class="['yao_fangshi_item', yao_fangshi == 1 ? 'yao_fanshi_active' : '']" @click="xuan_fangshi(1)">
					<image :src="yao_fangshi == 1 ? '../../static/qy_img/lan_dizhi.png' : '../../static/qy_img/dizhi.png'" mode="" style="width: 18rpx;height: 22rpx;"></image>
					线下面试
				</view>
				<view :class="['yao_fangshi_item', yao_fangshi == 2 ? 'yao_fanshi_active' : '']" @click="xuan_fangshi(2)">
					<image :src="yao_fangshi == 2 ? '../../static/qy_img/shipin_on.png' : '../../static/qy_img/shipin_no.png'" mode="" style="width: 22rpx;height: 16rpx;"></image>
					视频面试
				</view>
			</view>
			<view class="yao_dizhi">
				<view class="yao_dizhi_left">
					<view class="hui_26">联系人：王先生 18726903250</view>
					<view class="qian_24 yao_dizhi_left_xx">杭州滨江区优迈科技园25层</view>
				</view>
				<image src="../../static/qy_img/go_right.png" mode=""></image>
			</view>
			<view class="content"></view>
			<view class="xuan_riqi">
				<picker mode="time" :value="time" @change="bindTimeChange"><view class="xuan_riqi_title hei_30_bold">请选择时间</view></picker>
				<ren-calendar ref="ren" :markDays="markDays" :headerBar="false" @onDayClick="onDayClick" :time="time"></ren-calendar>
			</view>
			<view class="beizhu">
				<view class="hei_30_bold beizhu_title">备注</view>
				<textarea value="" placeholder="请备注..." class="hei_24" maxlength="-1" v-model="beizhu" />
			</view>
			<view class="yao_bottom">
				<view class="qian_24">确认发送将同时向候选人发送面试邀请邮件</view>
				<button type="" class="bai_30" @click="fasong">确认发送</button>
			</view>
		</view>
	</view>
</template>

<script>
import RenCalendar from '@/components/ren-calendar/ren-calendar.vue';
export default {
	data() {
		return {
			yao_fangshi: 1,
			beizhu: '',
			curDate: '',
			markDays: [],
			time: ''
		};
	},
	created() {},
	onReady() {
		let today = this.$refs.ren.getToday().date;
		this.curDate = today;
		this.markDays.push(today);
		this.time=this.getTime()
	},
	onLoad(option) {
		if(option.state){
			this.yao_fangshi=option.state
		}
	},
	onShow() {
		
		
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		xuan_fangshi(index) {
			this.yao_fangshi = index;
		},
		fasong() {
			console.log(this.curDate, this.time, this.beizhu,this.yao_fangshi);
		},
		onDayClick(data) {
			this.curDate = data.date;
		},
		bindTimeChange(e) {
			this.time = e.target.value;
			console.log(this.time);
		},
		getTime(){
		var date = new Date(),
		year = date.getFullYear(),
		month = date.getMonth() + 1,
		day = date.getDate(),
		hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
		minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
		second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
		month >= 1 && month <= 9 ? (month = "0" + month) : "";
		day >= 0 && day <= 9 ? (day = "0" + day) : "";
		// var timer = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
		var timer =  hour + ':' + minute ;
		return timer;
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
	padding-top: 100rpx;
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.yao_top {
	height: 170rpx;
	background-color: #f9fafc;
	box-shadow: 0rpx 0rpx 3rpx 0rpx rgba(39, 39, 39, 0.11);
	border-radius: 5rpx;
	margin-top: 18rpx;
	padding: 0 15rpx 0 22rpx;
}
.yao_top_list {
	height: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.yao_top_list:first-child {
	border-bottom: 2rpx solid #eeeeee;
}
.yao_top_gai image {
	width: 10rpx;
	height: 20rpx;
	margin-left: 13rpx;
}
.yao_fangshi {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 30rpx 0;
}
.yao_fangshi_item {
	width: 330rpx;
	height: 74rpx;
	background-color: #ffffff;
	box-shadow: 0rpx 0rpx 3rpx 0rpx rgba(39, 39, 39, 0.31);
	border-radius: 5rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	/* border: 2rpx solid  #DDDDDD; */
}
.yao_fangshi_item image {
	margin-right: 12rpx;
}
.yao_fanshi_active {
	color: #00c6c9;
	border: 2rpx solid #00c6c9;
	box-sizing: border-box;
}
.yao_dizhi image {
	width: 10rpx;
	height: 20rpx;
}
.yao_dizhi_left {
	max-width: 90%;
}
.yao_dizhi {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #f9fafc;
	box-shadow: 0rpx 0rpx 3rpx 0rpx rgba(39, 39, 39, 0.11);
	border-radius: 5rpx;
	padding: 30rpx 26rpx;
}
.yao_dizhi_left_xx {
	margin-top: 10rpx;
}
.beizhu {
	padding: 24rpx;
	background-color: #f9fafc;
	box-shadow: 0rpx 0rpx 3rpx 0rpx rgba(39, 39, 39, 0.11);
	border-radius: 5rpx;
	height: 228rpx;
	box-sizing: border-box;
}
.beizhu_title {
}
.beizhu textarea {
	padding-top: 10rpx;
	height: 130rpx;
	width: 100%;
}
.xuan_riqi {
	margin: 32rpx 0;
	padding-bottom: 20rpx;
	background-color: #f9fafc;
	box-shadow: 0rpx 0rpx 3rpx 0rpx rgba(39, 39, 39, 0.11);
	border-radius: 5rpx;
	padding: 0 24rpx 0;
}
.xuan_riqi_title {
	line-height: 110rpx;
}
.yao_bottom {
	margin: 45rpx 0 50rpx;
	text-align: center;
}
.yao_bottom button {
	height: 80rpx;
	background-color: #00c6c9;
	border-radius: 10rpx;
	line-height: 80rpx;
	margin-top: 20rpx;
}
</style>
