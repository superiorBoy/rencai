<template>
	<view>
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold ">登录</view>
			<view class="hei_30_bold head_right"><navigator url="zhuce">注册</navigator></view>
		</view>

		<view class="zi_body">
			<view class="yonghu_zhuce ">
				<view class="zhuce_list">
					<image src="../../static/index_img/shouji_icon.png"></image>
					<input type="text" value="" placeholder="手机号码" v-model="shouji" class="hei_28"/>
				</view>

				<view class="zhuce_list">
					<image src="../../static/index_img/mima_icon.png" mode=""></image>
					<input :type="type1" value="" placeholder="请设置一个最少6位的密码" @input="mimashu" class="hei_28"/>
					<image :src="yan1_zhuangtai" mode="" @click="chakan()" :class="['yanjing', type1 == 'text' ? 'kai' : 'guan']"></image>
				</view>
				<navigator url="forget" class="wangji_mima shenlan_28">忘记密码？</navigator>

				<view class="xieyi qian_24">
					<checkbox :checked="isCheck" @click="checkBox($event)" class="xieyi_xuan" />
					我已阅读并同意
					<navigator url="xieyi" class="shenlan_24">《人才网协议》</navigator>
				
				</view>
				<button type="" class="zhuce bai_30" @click="login">立即登录</button>
				<view class="zhuce_tishi qian_24">
					暂无账号？
					<navigator url="zhuce" class="shenlan_24">请注册</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			mima: '',
			shouji: '',
			type1: 'password',
			isCheck: true,
			yan1_zhuangtai: '../../static/index_img/yanguan.png',
			back: false,
			dianji: true,
			type:1
		};
	},
	onLoad(option) {
		if (option.type) {
			this.type=option.type
			
		}
		// this.$http
		// 	.post({
		// 		url: '/mapi/index/getlogincheck'
		// 	})
		// 	.then(res => {
		// 		if (res.data.logincheck == 1) {
		// 			this.isCheck = true;
		// 		}
		// 	});
	},
	methods: {
		navigateBack() {
			// uni.navigateBack();
			uni.reLaunch({
				url: 'my'
			});
		},
		checkBox(e) {
			this.isCheck = !this.isCheck;
		},
		chakan() {
			if (this.type1 == 'password') {
				(this.type1 = 'text'), (this.yan1_zhuangtai = '../../static/index_img/yankai.png');
			} else {
				this.type1 = 'password';
				this.yan1_zhuangtai = '../../static/index_img/yanguan.png';
			}
		},
		login() {
			if (!this.isCheck) {
				uni.showToast({
					title: '请同意用户协议和隐私政策',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}

			var that = this;
			if (this.dianji) {
				this.dianji = false;
				this.$http
					.post({
						url: '/userapi/login/login',
						data: {
							mobile: this.shouji,
							password: this.mima
						}
					})
					.then(res => {
						if (res.code == 0) {
                            uni.setStorageSync("token",res.data.token)
							if (res.data.grade == 2) {
								uni.reLaunch({
									url: '../ls/my'
								});
							} else {
								uni.switchTab({
									url: 'my'
								});
							}
						}
						console.log(res);
						setTimeout(function() {
							that.dianji = true;
						}, 500);
					});
			} else {
			}

			console.log(this.shouji, this.mima, this.isCheck);
		},

		mimashu(e) {
			this.mima = e.target.value;
		}
	}
};
</script>

<style>
.zhuce_list {
	border-bottom: 2rpx #e8e8e8 solid;
	height: 110rpx;
	display: flex;
	align-items: center;
}
.yonghu_zhuce {
	padding: 0 30rpx;
	font-size: 28rpx;
	color: #777777;
}

.zhuce_list image {
	width: 26rpx;
	height: 30rpx;
	margin-right: 30rpx;
}
.background_zhuti {
	width: 160rpx;
	height: 44rpx;
	border-radius: 22rpx;
	border: solid 2rpx #fc761f;
	background: none;
	line-height: 44rpx;
	color: #fc761f;
	font-size: 24rpx;
}
.zhuce_list_left {
	display: flex;
	align-items: center;
}
.yanjing {
	position: absolute;
	right: 30rpx;
	width: 27rpx !important;
	height: 19rpx !important;
	margin-right: 0 !important;
}
.zhuce_list input {
	width: 85% !important;
}
.yanzheng_icon {
	width: 29rpx !important;
	height: 26rpx !important;
}
button {
	margin: 0;
	padding: 0;
}

.xieyi {
	margin: 76rpx 0 50rpx 0;
	text-align: center;
	display: flex;
	justify-content: center;
}

.zhuce {
	height: 88rpx;
	background-color: #1986fb;
	border-radius: 44rpx;
	line-height: 88rpx;
}

.zhuce_tishi {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 40rpx;
}

.wangji_mima {
	text-align: right;
	margin-top: 30rpx;
}
.kai {
	width: 29rpx !important;
	height: 19rpx !important;
}
.guan {
	width: 28rpx !important;
	height: 14rpx !important;
}
.xieyi_xuan {
	margin-right: 10rpx;
}
</style>
