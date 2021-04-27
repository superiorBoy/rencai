<template>
	<view class="body">
		<view class="head">
			<view class="head_back hei_38_bold"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">编辑置顶</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body">
			<view class="fabu_list hei_28">
				<picker mode="selector" :range="zhiwei_arry" @change="zhiwei_change">
					<view class="fabu_item">
						<text class="fabu_item_left">置顶职位</text>
						<view class="fabu_item_right" :class="['', zhiwei == '' ? 'qian_28' : 'hei_28']">
							{{ zhiwei ? zhiwei : '请选择' }}
							<image src="../../static/qy_img/hei_right.png" mode=""></image>
						</view>
					</view>
				</picker>
				<pickerAddress2 @change="city_change">
					<view class="fabu_item">
						<text class="fabu_item_left">置顶地区</text>
						<view class="fabu_item_right" :class="['', city == '' ? 'qian_28' : 'hei_28']">
							{{ city ? city : '请选择' }}
							<image src="../../static/qy_img/hei_right.png" mode=""></image>
						</view>
					</view>
				</pickerAddress2>
				<picker mode="selector" :range="qixian_arry" @change="qixian_change">
					<view class="fabu_item">
						<text class="fabu_item_left">置顶期限</text>
						<view class="fabu_item_right" :class="['', qixian == '' ? 'qian_28' : 'hei_28']">
							{{ qixian ? qixian : '请选择' }}
							<image src="../../static/qy_img/hei_right.png" mode=""></image>
						</view>
					</view>
				</picker>

				<timeSelector showType="dateToTime" @btnConfirm="btnConfirm">
					<view class="fabu_item">
						<text class="fabu_item_left">开始时间</text>
						<view class="fabu_item_right" :class="['', kaishi == '' ? 'qian_28' : 'hei_28']">
							{{ kaishi ? kaishi : '请选择' }}
							<image src="../../static/qy_img/hei_right.png" mode=""></image>
						</view>
					</view>
				</timeSelector>
				<timeSelector showType="dateToTime" @btnConfirm="jieshu_ding">
					<view class="fabu_item">
						<text class="fabu_item_left">结束时间</text>
						<view class="fabu_item_right" :class="['', jieshu == '' ? 'qian_28' : 'hei_28']">
							{{ jieshu ? jieshu : '请选择' }}
							<image src="../../static/qy_img/hei_right.png" mode=""></image>
						</view>
					</view>
				</timeSelector>

				<button type="" class="fabu_btn bai_30" @click="fabu">保存修改</button>
			</view>
		</view>
	</view>
</template>

<script>
import pickerAddress2 from '@/components/wangding-pickerAddress/wangding-pickerAddress.vue';
import timeSelector from '@/components/wing-time-selector/wing-time-selector.vue';
export default {
	components: {
		pickerAddress2,
		timeSelector
	},
	data() {
		return {
			zhiwei: '',
			zhiwei_arry: ['aaa', 'bbb', 'ccc', 'ddd'],
			city: '',
			qixian: '',
			qixian_arry: ['1天', '2天', '3天', '1周'],
			kaishi: '',
			jieshu: ''
		};
	},

	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		zhiwei_change(e) {
			console.log(e.detail.value);
			this.zhiwei = this.zhiwei_arry[e.detail.value];
		},
		city_change(e) {
			console.log(e);
			this.city = e.data[0] + '-' + e.data[1];
		},
		qixian_change(e) {
			console.log(e.detail.value);
			this.qixian = this.qixian_arry[e.detail.value];
		},

		btnConfirm(e) {
			console.log(e);
			this.kaishi = e.key;
		},

		jieshu_ding(e) {
			this.jieshu = e.key;
		},

		fabu() {
			var dizhi = this.city.split('-');
			var data = {
				zhiwei: this.zhiwei,
				sheng: dizhi[0],
				shi: dizhi[1],
				qixian: this.qixian,
				kaishi: this.kaishi,
				jieshu: this.jieshu
			};

			console.log(data);
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
	
	padding-bottom: 50rpx;
}
.fabu_list {
	padding: 0 30rpx;
}
.fabu_item {
	display: flex;
	align-items: center;
	height: 100rpx;
	border-bottom: 2rpx solid #f5f5f5;
	justify-content: space-between;
}
.fabu_item_right image {
	width: 14rpx;
	height: 24rpx;
	margin-left: 15rpx;
}
.fabu_item_right input {
	text-align: right;
}
.fabu_item_right {
	display: flex;
	align-items: center;
}
.fabu_btn {
	height: 88rpx;
	background-color: #00c6c9;
	border-radius: 44rpx;
	line-height: 88rpx;
	margin-top: 540rpx;
}
</style>
