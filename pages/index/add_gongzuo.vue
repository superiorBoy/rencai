<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">添加工作经历</view>
			<view class=" head_right hei_30_bold"><text @click="save">保存</text></view>
		</view>

		<view class="zi_body">
			<view class="shiming_list hei_26">
				<view class="shiming_list_top hui_26">公司名称</view>
				<view class="shiming_list_bottom">
					<view class="shiming_list_left"><input type="text" value="" placeholder="请输入" class="hei_34" v-model="name" /></view>
					<image src="../../static/qy_img/go_right.png" mode=""></image>
				</view>
			</view>
			<view class="shiming_list hei_26" @click="go_hangye">
				<view class="shiming_list_top hui_26">所在行业</view>
				<view class="shiming_list_bottom">
					<view class="shiming_list_left qian_34">请选择</view>
					<image src="../../static/qy_img/go_right.png" mode=""></image>
				</view>
			</view>
			<view class="shiming_list hei_26">
				<view class="shiming_list_top hui_26">在职时间</view>
				<view class="shiming_list_bottom_shijian">
					<picker mode="date" @change="time_change" fields="month">
						<view :class="['zhuanchang_xuan', str_time ? 'hei_34' : 'qian_34']">{{ str_time ? str_time : '请选择' }}</view>
					</picker>
					<text class="hengxian"></text>
					<picker @change="time_change2" :range="time_arry"  mode="multiSelector" @columnchange="nian_change">
						<view :class="['zhuanchang_xuan zhuanchang_xuan_end', end_time ? 'hei_34' : 'qian_34']">{{ end_time ? end_time : '请选择' }}</view>
					</picker>
				</view>
			</view>
			<view class="shiming_list hei_26">
				<view class="shiming_list_top hui_26">职位类型</view>
				<view class="shiming_list_bottom">
					<view class="shiming_list_left qian_34">请选择</view>
					<image src="../../static/qy_img/go_right.png" mode=""></image>
				</view>
			</view>
			<view class="shiming_list hei_26">
				<view class="shiming_list_top hui_26">工作内容</view>
				<view class="shiming_list_bottom">
					<view class="shiming_list_left"><input type="text" value="" placeholder="请输入" class="hei_34" v-model="neirong" /></view>
					<image src="../../static/qy_img/go_right.png" mode=""></image>
				</view>
			</view>
			<view class=" qian_26 xuantian">以下为选填项</view>
			<view class="shiming_list hei_26">
				<view class="shiming_list_top hui_26">工作业绩</view>
				<view class="shiming_list_bottom">
					<view class="shiming_list_left"><input type="text" value="" placeholder="选填 请输入" class="hei_34" v-model="yeji"/></view>
					<image src="../../static/qy_img/go_right.png" mode=""></image>
				</view>
			</view>
			<view class="shiming_list hei_26">
				<view class="shiming_list_top hui_26">所属部门</view>
				<view class="shiming_list_bottom">
					<view class="shiming_list_left"><input type="text" value="" placeholder="选填 请输入" class="hei_34" v-model="bumen"/></view>
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
			neirong: '',
			yeji: '',
			bumen:'',
			id: '',
			time_arry: [['至今']]
		};
	},
	created() {},
	onLoad(option) {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},

		time_change(data) {
			var qian_shijian = Number(data.detail.value.substring(0, 4));
			this.time_arry = [];
			var shijian_arry = [];
			for (var i = 0; i < 100; i++) {
				shijian_arry.push(qian_shijian + i);
			}
			this.time_arry[0] = ['至今'].concat(shijian_arry);
			this.time_arry.push(['至今', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
			this.str_time = data.detail.value;
		},
		time_change2(data) {
			console.log(data);
			if (data.detail.value[0] == 0) {
				this.end_time = '至今';
			} else {
				this.end_time = this.time_arry[0][data.detail.value[0]] + '-' + this.time_arry[1][data.detail.value[1]];
			}
		},
		nian_change(data) {
			if (data.detail.value != 0) {
				this.time_arry[1] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
			} else {
				this.time_arry[1] = ['至今', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
			}
		},
		go_hangye(){
			
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
					title: '请填写公司名称',
					duration: 2000,
					icon: 'none'
				});
				return false;
			} else if (this.neirong == '') {
				uni.showToast({
					title: '请填写工作内容',
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
	padding: 42rpx 0rpx 0;
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
