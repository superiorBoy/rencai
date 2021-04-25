<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">求职期望</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body">
			<view class="qiuzhi_top">
				<view class="hei_48_bold qiuzhi_top_title">添加求职期望</view>
				<view class="hui_30">求职期望不同，推荐的职位也会不同</view>
			</view>
			<view class="leixing hei_30">
				<view class="leixing_left">求职类型</view>
				<view class="leixing_right lan_30">
					<text :class="leixing_on == 1 ? 'leixing_active' : ''" @click="xuan_leixing(1)">全职</text>
					<text :class="leixing_on == 2 ? 'leixing_active' : ''" @click="xuan_leixing(2)">兼职</text>
				</view>
			</view>
			<pickerAddress2 @change="change">
				<view class="shiming_list hei_28">
					<view class="shiming_list_top ">工作城市</view>
					<view class="shiming_list_bottom">
						<view class="shiming_list_left " :class="dizhi ? 'hei_36' : 'qian_36'">{{ dizhi ? dizhi : '请选择' }}</view>
						<image src="../../static/qy_img/go_right.png" mode=""></image>
					</view>
				</view>
			</pickerAddress2>
			<view class="shiming_list hei_28">
				<view class="shiming_list_top ">期望职位</view>
				<view class="shiming_list_bottom">
					<view class="shiming_list_left qian_36">请选择期望职位</view>
					<image src="../../static/qy_img/go_right.png" mode=""></image>
				</view>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_top ">期望行业</view>
				<view class="shiming_list_bottom">
					<view class="shiming_list_left qian_36">请选择期望行业</view>
					<image src="../../static/qy_img/go_right.png" mode=""></image>
				</view>
			</view>
			<picker mode="multiSelector" :range="xinxi_arry" @change="xuan_xinzi" @columnchange="xinzi_change">
				<view class="shiming_list hei_28">
					<view class="shiming_list_top ">期望要求</view>
					<view class="shiming_list_bottom">
						<view class="shiming_list_left " :class="xinzi ? 'hei_36' : 'qian_36'">{{ xinzi ? xinzi : '请选择薪资要求' }}</view>
						<image src="../../static/qy_img/go_right.png" mode=""></image>
					</view>
				</view>
			</picker>

			<button class="bai_36">保存</button>
		</view>
	</view>
</template>

<script>
import pickerAddress2 from '@/components/wangding-pickerAddress/wangding-pickerAddress.vue';
export default {
	components: {
		pickerAddress2
	},
	data() {
		return {
			leixing_on: 1,
			dizhi: '',
			xinzi: '',
			xinxi_arry: [['1K'], ['请选择']]
		};
	},
	created() {},
	onLoad(option) {
		var qian_xinxi = [];
		for (var i = 1; i < 20; i++) {
			qian_xinxi.push(i + 'K');
		}
		this.xinxi_arry[0] = qian_xinxi;
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		change(data) {
			// this.dizhi = data.data[0] + '-' + data.data[1];
			this.dizhi = data.data[1];
		},

		xuan_leixing(index) {
			this.leixing_on = index;
		},
		xinzi_change(data) {
			console.log(data.detail.value);
			if (data.detail.column == 0) {
				var qian = parseInt(this.xinxi_arry[0][data.detail.value]);
				this.xinxi_arry[1] = [];
				var hou = [];
				for (var i = 1; i < 20; i++) {
					hou.push(qian + i + 'K');
				}
				this.xinxi_arry[1] = hou;
			}
		},
		xuan_xinzi(data) {
			console.log(data.detail.value[1]);
			if (this.xinxi_arry[1][data.detail.value[1]] == '请选择') {
				uni.showToast({
					title: '请选择最高薪资',
					duration: 2000,
					icon: 'none'
				});

				return false;
			} else {
				this.xinzi = this.xinxi_arry[0][data.detail.value[0]] + '-' + this.xinxi_arry[1][data.detail.value[1]];
			}
		},
		go_hangye() {},
		save() {
			// this.$http
			// 	.post({
			// 		url: '/lawyer/user/zx_geren',
			// 		data: {
			// 			state: 11,
			// 			shijian: this.time,
			// 			shijian2: this.end_time,
			// 			jigou: this.jigou,
			// 			zhiwu: this.zhiwu,
			// 			lyinfoid: this.id
			// 		}
			// 	})
			// 	.then(res => {
			// 		if (res.code == 0) {
			// 			uni.showToast({
			// 				title: '操作成功',
			// 				duration: 2000
			// 			});
			// 			setTimeout(function() {
			// 				uni.navigateBack();
			// 			}, 2000);
			// 		}
			// 	});
		}
	}
};
</script>
<style>
.head {
	border-bottom: 2rpx solid #e8e8e8;
}
.zi_body {
	padding-left: 30rpx;
	padding-right: 30rpx;
	padding-bottom: 100rpx;
}
.qiuzhi_top {
	margin: 60rpx 0 40rpx;
}
.qiuzhi_top_title {
	margin-bottom: 10rpx;
}
.leixing {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 160rpx;
	border-bottom: 2rpx solid #e8e8e8;
}
.leixing_right {
	width: 288rpx;
	height: 64rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
	border: solid 2rpx #00c6c9;
}
.leixing_right text {
	width: 50%;
	display: inline-block;
	line-height: 64rpx;
	text-align: center;
}
.leixing_active {
	color: #ffffff;
	background-color: #00c6c9;
}
.zi_body button {
	height: 80rpx;
	background-color: #00c6c9;
	border-radius: 10rpx;
	line-height: 80rpx;
	margin-top: 110rpx;
}
.shiming_list {
	height: 180rpx;
	border-bottom: 2rpx solid #e8e8e8;
	position: relative;
	padding: 40rpx 0rpx 0;
	box-sizing: border-box;
}
.shiming_list_top {
}
.shiming_list input {
	width: 500rpx;
	text-align: right;
}
.shiming_list_left {
	width: 300rpx;
}
.shiming_list_bottom {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 16rpx;
}
.shiming_list_left input {
	text-align: left;
}
.shiming_list_bottom image {
	width: 13rpx;
	height: 23rpx;
}
.hengxian {
	display: inline-block;
	width: 30rpx;
	height: 4rpx;
	background-color: #666666;
}
.xuantian {
	padding-left: 30rpx;
	margin: 44rpx 0 0;
}
.shiming_list_bottom_shijian {
	display: flex;
	align-items: center;
	margin-top: 10rpx;
	height: 50rpx;
}
.shiming_list_bottom_shijian text {
	margin: 0 130rpx 0 150rpx;
}

</style>