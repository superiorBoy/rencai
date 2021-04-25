<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">添加项目经历</view>
			<view class=" head_right hei_30_bold"><text @click="save">保存</text></view>
		</view>

		<view class="zi_body">
			<view class="shiming_list hei_26">
				<view class="shiming_list_top hui_26">项目名称</view>
				<view class="shiming_list_bottom">
					<view class="shiming_list_left"><input type="text" value="" placeholder="请输入" class="hei_34" v-model="name" /></view>
					<image src="../../static/qy_img/go_right.png" mode=""></image>
				</view>
			</view>
			<view class="shiming_list hei_26">
				<view class="shiming_list_top hui_26">担任角色</view>
				<view class="shiming_list_bottom">
					<view class="shiming_list_left"><input type="text" value="" placeholder="请输入" class="hei_34" v-model="juese" /></view>
					<image src="../../static/qy_img/go_right.png" mode=""></image>
				</view>
			</view>

			<view class="shiming_list hei_26">
				<view class="shiming_list_top hui_26">项目时间</view>
				<view class="shiming_list_bottom_shijian">
					<picker mode="date" @change="time_change" fields="month">
						<view :class="['zhuanchang_xuan', str_time ? 'hei_34' : 'qian_34']">{{ str_time ? str_time : '开始时间' }}</view>
					</picker>
					<text class="hengxian"></text>
					<picker @change="time_change2" :start="str_time"   mode="date" fields="month">
						<view :class="['zhuanchang_xuan zhuanchang_xuan_end', end_time ? 'hei_34' : 'qian_34']">{{ end_time ? end_time : '结束时间' }}</view>
					</picker>
				</view>
			</view>

			<view class="shiming_list hei_26">
				<view class="shiming_list_top hui_26">项目描述</view>
				<view class="shiming_list_bottom">
					<view class="shiming_list_left"><input type="text" value="" placeholder="请输入" class="hei_34" v-model="miaoshu" /></view>
					<image src="../../static/qy_img/go_right.png" mode=""></image>
				</view>
			</view>
			
			<view class="shiming_list hei_26">
				<view class="shiming_list_top hui_26">项目业绩</view>
				<view class="shiming_list_bottom">
					<view class="shiming_list_left"><input type="text" value="" placeholder="请输入" class="hei_34" v-model="yeji"/></view>
					<image src="../../static/qy_img/go_right.png" mode=""></image>
				</view>
			</view>
			<view class="shiming_list hei_26">
				<view class="shiming_list_top hui_26">项目链接</view>
				<view class="shiming_list_bottom">
					<view class="shiming_list_left"><input type="text" value="" placeholder="请输入" class="hei_34" v-model="lianjie"/></view>
					<image src="../../static/qy_img/go_right.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			str_time: '',
			end_time: '',
			name: '',
			juese:'',
			miaoshu: '',
			yeji: '',
			lianjie:'',
		};
	},
	created() {},
	onLoad(option) {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},

		time_change(data) {
			this.str_time = data.detail.value;
		},
		time_change2(data) {
			this.end_time = data.detail.value;
		},

		save() {
			if (this.str_time == '请选择') {
				uni.showToast({
					title: '请选择时间',
					duration: 2000,
					icon: 'none'
				});
				return false;
			} else if (this.name == '') {
				uni.showToast({
					title: '请填写项目名称',
					duration: 2000,
					icon: 'none'
				});
				return false;
			} else if (this.juese == '') {
				uni.showToast({
					title: '请填写担任角色',
					duration: 2000,
					icon: 'none'
				});
				return false;
			} else if (this.miaoshu == '') {
				uni.showToast({
					title: '请填写项目描述',
					duration: 2000,
					icon: 'none'
				});
				return false;
			} else if (this.yeji == '') {
				uni.showToast({
					title: '请填写项目业绩',
					duration: 2000,
					icon: 'none'
				});
				return false;
			} else if (this.lianjie == '') {
				uni.showToast({
					title: '请填写项目链接',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}

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
.head_center {
	width: 50%;
}
.zi_body{
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.shiming_list {
	height: 178rpx;
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
.zhuanchang_xuan_end {
}
.zhuanchang_xuan {
	/* width: 500rpx; */
	padding-right: 30rpx;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: right;
	text-align: right;
}

.zhuanchang_xuan image {
	width: 13rpx;
	height: 23rpx;
	position: absolute;
	right: 30rpx;
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
	/* padding-left: 30rpx; */
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
