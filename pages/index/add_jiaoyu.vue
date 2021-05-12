<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">添加教育经历</view>
			<view class=" head_right hei_30_bold"><text @click="baocun">保存</text></view>
		</view>

		<view class="zi_body">
			<view class="geren_list">
				<view class="geren_item">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">学校</view>
						<view class="hei_32"><input type="text" value="" v-model="xuexiao" placeholder="请输入" class="hei_34" /></view>
					</view>
					<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>

				<picker :range="xueli_arry" @change="xueli_change" mode="selector" :range-key="'name'">
					<view class="geren_item">
						<view class="geren_item_top">
							<view class="hui_26 geren_item_title">学历</view>
							<view :class="xueli ? 'hei_34' : 'qian_34'">{{ xueli ? xueli : '请选择' }}</view>
						</view>
						<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
					</view>
				</picker>
				<picker mode="selector" :range="zhuanye_arry" @change="zhuanye_change">
					<view class="geren_item">
						<view class="geren_item_top">
							<view class="hui_26 geren_item_title">专业</view>
							<view :class="zhuanye ? 'hei_34' : 'qian_34'">{{ zhuanye ? zhuanye : '请选择' }}</view>
						</view>
						<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
					</view>
				</picker>
				<rangeDatePick :show="isShow" start="1900-01" end="2200-12" @change="shijian_change" @showchange="showchange" @cancel="bindCancel" fields="month"></rangeDatePick>
				<view class="geren_item" @click="tan_shijian">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">时间段</view>
						<view :class="shijian ? 'hei_34' : 'qian_34'">{{ shijian ? shijian : '请选择' }}</view>
					</view>
					<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>

				<view class="geren_item">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">在校经历</view>
						<view class="hei_32"><input type="text" value="" v-model="jingli" placeholder="请输入" class="hei_34" /></view>
					</view>
					<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
			</view>
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
			xuexiao: '',
			xueli_arry: [],
			xueli: '',
			zhuanye: '',
			zhuanye_arry: ['1', '2', '3', '4'],
			jingli: '',
			shijian: '',
			isShow: false,
			xueli_obj: {},
			xueli_id: ''
		};
	},
	onLoad() {
		this.huoqu_xueli();
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		huoqu_xueli() {
			this.$http
				.post({
					url: '/userapi/index/edu'
				})
				.then(res => {
					if (res.code == 0) {
						this.xueli_obj = res.data;
						var array = [];
						for (var key in res.data) {
							array.push({ name: res.data[key], id: key });
						}
						this.xueli_arry = array;
					}
				});
		},
		xueli_change(e) {
			console.log(e);
			this.xueli_id = this.xueli_arry[e.detail.value].id;
			this.xueli = this.xueli_arry[e.detail.value].name;
		},
		zhuanye_change(e) {
			this.zhuanye = this.zhuanye_arry[e.detail.value];
		},
		tan_shijian() {
			this.isShow = true;
		},
		shijian_change(e) {
			console.log(e);
			this.shijian = e[0] + ' - ' + e[1];
		},
		bindCancel() {},
		showchange() {
			this.isShow = !this.isShow;
		},
		baocun() {
			console.log(this.xueli_id);
		}
	}
};
</script>

<style>
.head {
	background-color: #ffffff;
	border-bottom: 2rpx solid #f5f5f5;
}
.head_center {
	width: 60%;
}
.zi_body {
}

.geren_list {
	padding: 0 30rpx;
}
.geren_item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 172rpx;
	border-bottom: 2rpx solid #f5f5f5;
}
.geren_item input {
	width: 560rpx;
}
.geren_tx {
	align-items: flex-end;
	padding-bottom: 30rpx;
	padding-top: 25rpx;
	height: auto;
}
.geren_item_left {
	max-width: 80%;
}
.tx {
	width: 120rpx;
	height: 120rpx;
	border-radius: 100%;
}
.go_right {
	width: 12rpx;
	height: 22rpx;
	position: relative;
	top: 20rpx;
}
.geren_item_title {
	margin-bottom: 20rpx;
}
.tishi {
	display: flex;
	align-items: center;
	margin-top: 10rpx;
}
.tishi image {
	width: 24rpx;
	height: 24rpx;
	margin-right: 8rpx;
}
</style>
