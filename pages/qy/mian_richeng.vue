<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">面试日程</view>
			<view class=" head_right hei_30_bold"><navigator url="mian_jilu">面试记录</navigator></view>
		</view>

		<view class="zi_body">
			<view class="riqi_list">
				<view class="riqi_item" v-for="(item, index) in check" @click="xaun_riqi(item.date)">
					<view class="hei_26 xingqi">{{ item.week }}</view>
					<view class="qian_26">{{ index == 0 ? '今天' : jiequ(item.date) }}</view>
				</view>
			</view>

			<view class="richeng_list" v-if="is_mianshi">
				<view class="richeng_item">
					<view class="richeng_item_left">
						<view class="qian_24">01月24日</view>
						<view class="hei_32_bold richeng_item_time">11:30</view>
					</view>
					<view class="richeng_item_right">
						<view class="richeng_item_right_top">
							<text class="hei_32_bold">张红霞</text>
							<text class="qian_24">已超时</text>
						</view>
						<view class="qian_24">面试 前端开发工程师 8-15K</view>
					</view>
				</view>
				<view class="richeng_item">
					<view class="richeng_item_left">
						<view class="qian_24">01月24日</view>
						<view class="hei_32_bold richeng_item_time">11:30</view>
					</view>
					<view class="richeng_item_right">
						<view class="richeng_item_right_top">
							<text class="qian_32_bold">张红霞</text>
							<text class="qian_24">已拒绝</text>
						</view>
						<view class="qian_24">面试 前端开发工程师 8-15K</view>
					</view>
				</view>
				<view class="richeng_item">
					<view class="richeng_item_left">
						<view class="qian_24">01月24日</view>
						<view class="hei_32_bold richeng_item_time">11:30</view>
					</view>
					<view class="richeng_item_right">
						<view class="richeng_item_right_top">
							<text class="hei_32_bold">张红霞</text>
							<text class="qian_24"></text>
						</view>
						<view class="hui_24">面试 前端开发工程师 8-15K</view>
					</view>
				</view>
			</view>

			<view class="no_mianshi" v-if="!is_mianshi">
				<image src="../../static/qy_img/no_mianshi.png" mode=""></image>
				<view class=" qian_26">暂无待面试，过去面试请查看面试记录</view>
				<navigator url="mian_jilu" class="yao_btn"><button type="" class="bai_30 yaoyue">查看面试记录</button></navigator>
			</view>
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			check: [],
			is_mianshi: true
		};
	},
	onLoad() {
		this.getTimeandWeek();
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		// 这个方法是获取 今天往后七天的日期和星期(往前几天的话减号就行了)
		getTimeandWeek() {
			//获取当前时间
			var now = new Date();
			//往后几天就循环几次
			for (let i = 0; i < 7; i++) {
				//24 * 3600 * 1000 就是计算一天的时间
				var date = new Date(now.getTime() + i * 24 * 3600 * 1000);
				var year = date.getFullYear();
				var month = date.getMonth() + 1;

				var day = date.getDate();
				var dt2 = new Date(now.getTime() + i * 24 * 3600 * 1000);
				var weekDay = ['日', '一', '二', '三', '四', '五', '六'];
				//把七天的时间和星期添加到数组中
				this.check.push({
					date: year + '-' + month + '-' + day,
					week: weekDay[dt2.getDay()],
					checked: false
				});
			}
		},
		jiequ(date) {
			console.log(date);
			var new_date = date.split('-');
			return new_date[2];
		},
		xaun_riqi(date) {
			console.log(date);
		}
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
}
.head_right {
	position: relative;
	top: 10rpx;
}
.richeng_item {
	display: flex;
	align-items: flex-start;
	margin-bottom: 20rpx;
	justify-content: space-between;
}
.richeng_item_right {
	background-color: #f9f9f9;
	width: 72%;
	padding: 30rpx 22rpx 30rpx 45rpx;
	border-left: 6rpx solid #e5e5e5;
}

.richeng_item_right_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 8rpx;
}
.richeng_list {
	padding: 20rpx 30rpx 0;
}
.richeng_item_time {
	margin-top: 10rpx;
}
.riqi_list {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
	height: 160rpx;
	box-shadow: 0rpx 3rpx 9rpx 0rpx rgba(117, 117, 117, 0.11);
}
.xingqi {
	margin-bottom: 16rpx;
}
.riqi_item {
	text-align: center;
}
.no_mianshi {
	text-align: center;
	padding-bottom: 40rpx;
}
.no_mianshi image {
	width: 366rpx;
	height: 199rpx;
	margin: 250rpx 0 140rpx;
}
.yao_btn {
	position: fixed;
	bottom: 0;
	width: 100%;
	padding: 0 30rpx;
	padding-bottom: 40rpx;
	box-sizing: border-box;
}
.yaoyue {
	height: 80rpx;
	background-color: #00c6c9;
	border-radius: 10rpx;
}
</style>
