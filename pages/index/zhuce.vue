<template>
	<view>
		<view class="head">
			<view class="head_back" style="width: 10%;"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold zhuce_tab_center">
				<view class="zhuce_tab qian_30_bold">
					<view :class="['zhuce_tab_item', index == active-1 ? 'zhuce_tab_item_active' : '']" v-for="(tab, index) in tabs" @click="zhuce_qiehuan(index)">{{ tab }}</view>
				</view>
			</view>
			<view class="hei_30_bold head_right" style="width: 10%;"><navigator url="login">登录</navigator></view>
		</view>

		<view class="zi_body">
			<view class="yonghu_zhuce ">
				
				
				<view class="zhuce_list" v-if="active==2">
					<image src="../../static/index_img/shouji_icon.png"></image>
					<input type="text" value="" placeholder="请输入企业名称" v-model="shouji" class="hei_28"/>
				</view>
				<view class="zhuce_list"v-if="active==2">
					<image src="../../static/index_img/shouji_icon.png"></image>
					<input type="text" value="" placeholder="请输入联系人" v-model="shouji" class="hei_28"/>
				</view>
				
				<view class="zhuce_list">
					<image src="../../static/index_img/shouji_icon.png"></image>
					<input type="text" value="" :placeholder="active==1?'手机号码':'请输入电话号码'" v-model="shouji" class="hei_28"/>
				</view>
				<view class="zhuce_list zhuce_list_yanzheng">
					<view class="zhuce_list_left">
						<image src="../../static/index_img/duanxin_icon.png" mode="" class="yanzheng_icon"></image>
						<input type="text" placeholder="验证码" v-model="code"class="hei_28" />
					</view>
					<button @click="VerificationCode($event)" :class="['background_zhuti', isdisabled == true ? 'border' : '']" ref="yanzheng_btn" :disabled="isdisabled">
						{{ yan_txt }}
					</button>
				</view>
				
				<view class="zhuce_list"v-if="active==2">
					<image src="../../static/index_img/shouji_icon.png"></image>
					<input type="text" value="" placeholder="请输入用户名" v-model="name" class="hei_28"/>
				</view>
				
				<view class="zhuce_list">
					<image src="../../static/index_img/mima_icon.png" mode=""></image>
					<input :type="type1" value="" placeholder="请设置一个最少6位的密码" @input="mimashu" class="hei_28"/>
					<image :src="yan1_zhuangtai" mode="" @click="chakan(1)" :class="['yanjing', type1 == 'text' ? 'kai' : 'guan']"></image>
				</view>
				<view class="zhuce_list">
					<image src="../../static/index_img/mima_icon.png" mode=""></image>
					<input :type="type2" value="" placeholder="请再次输入密码" @input="agamimashu"class="hei_28" />
					<image :src="yan2_zhuangtai" mode="" @click="chakan(2)" :class="['yanjing', type2 == 'text' ? 'kai' : 'guan']"></image>
				</view>

				<view class="zhuce_list" v-if="active==1">
					<image src="../../static/index_img/yaoqing_icon.png" mode="" class="yaoqing_icon"></image>
					<input type="text" value="" placeholder="请输入邀请码(选填)" v-model="yaoqingma" class="hei_28"/>
				</view>

				<view class="xieyi qian_24">
					<checkbox :checked="isCheck" @click="checkBox($event)" class="xieyi_xuan" />
					我已阅读并同意
					<navigator url="xieyi" class="shenlan_24">《人才网协议》</navigator>
					
				</view>
			</view>
			<button type="" class="zhuce bai_30" @click="zhuce">立即注册</button>
			<view class="zhuce_tishi qian_24">
				已有账号？
				<navigator url="login" class="shenlan_24">请登录</navigator>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabs: ['个人注册', '企业注册'],
			active: 1,
			code: '',
			mima: '',
			agamima: '',
			yaoqingma: '',
			shouji: '',
			type1: 'password',
			type2: 'password',
			isCheck: true,
			yan_txt: '获取验证码',
			isdisabled: false,
			yan1_zhuangtai: '../../static/index_img/yanguan.png',
			yan2_zhuangtai: '../../static/index_img/yanguan.png',
			is_xinxi: '',
			dianji: true,
			name:'',
			qiyename:'',
			lianxiren:''
		};
	},
	onLoad(option) {
		// this.is_duanxin()
		
		if(option.type){
			this.active=option.type
		}
		 
	},

	methods: {
		zhuce_qiehuan(index) {
			this.active = index+1;
		},
		navigateBack() {
			uni.navigateBack();
		},
		is_duanxin() {
			this.$http
				.post({
					url: '/mapi/index/open_sms'
				})
				.then(res => {
					console.log(res);
					if (res.code == 0) {
						this.is_xinxi = res.data.open_sms;
					}
				});
		},
		btnCheck: function(e) {
			var that = this;
			var time = 60;
			var timer = setInterval(function() {
				if (time == 0) {
					clearInterval(timer);
					that.isdisabled = false;
					that.yan_txt = '获取验证码';
				} else {
					that.isdisabled = true;
					that.yan_txt = time + '秒重获取';
					time--;
				}
			}, 1000);
		},
		VerificationCode: function(e) {
			var reg = /^1[3456789]\d{9}$/;
			if (this.shouji == '') {
				uni.showToast({
					title: '请输入手机号码',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}
			if (!reg.test(this.shouji)) {
				uni.showToast({
					title: '手机号输入错误',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}

			this.$http
				.post({
					url: '/userapi/login/sendsms',
					data: {
						mobile: this.shouji
					}
				})
				.then(res => {
					console.log(res);
					if (res.code == 0) {
						this.btnCheck(e);
					}
				});
		},
		chakan(e) {
			if (e == 1) {
				if (this.type1 == 'password') {
					(this.type1 = 'text'), (this.yan1_zhuangtai = '../../static/index_img/yankai.png');
				} else {
					(this.type1 = 'password'), (this.yan1_zhuangtai = '../../static/index_img/yanguan.png');
				}
			} else {
				if (this.type2 == 'password') {
					(this.type2 = 'text'), (this.yan2_zhuangtai = '../../static/index_img/yankai.png');
				} else {
					(this.type2 = 'password'), (this.yan2_zhuangtai = '../../static/index_img/yanguan.png');
				}
			}
		},
		checkBox(e) {
			this.isCheck = !this.isCheck;
		},
		zhuce() {
			var that = this;
			console.log(this.active);

			if (this.shouji == '' || this.mima == '' || this.agamima == '') {
				uni.showToast({
					title: '请填写完整',
					duration: 2000,
					icon: 'none'
				});
				return false;
			} else if (this.mima != this.agamima) {
				uni.showToast({
					title: '两次密码不一致',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}

			if (!this.isCheck) {
				uni.showToast({
					title: '请同意用户协议和隐私政策',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}

			if (this.dianji) {
				this.dianji = false;
				if (this.active == 1) {
					var url = '/userapi/login/register';
					var data={
						mobile: this.shouji,
						password: this.mima,
						password1: this.agamima,
						code: this.code,
						randcode: this.yaoqingma
					}
				} else if (this.active == '1') {
					var url = '/lawyer/login/register';
					var data={
						mobile: this.shouji,
						password: this.mima,
						password1: this.agamima,
						code: this.code
						
					}
				}

				this.$http
					.post({
						url: url,
						data: data
					})
					.then(res => {
						console.log(res);
						if (res.code == 0) {
							// uni.removeStorageSync('user_chat_list');
							// uni.removeStorageSync('ls_chat_list');
							uni.setStorageSync("token",res.data.token)
							uni.switchTab({
								url: 'my'
							});
						}
						that.dianji = true;
					});

				console.log(this.shouji, this.mima, this.agamima);
			} else {
				
				
			}

			console.log(this.isCheck);
		},
		mimashu(e) {
			this.mima = e.target.value;
		},
		agamimashu(e) {
			this.agamima = e.target.value;
		},
		change(data) {
			console.log(data);
			this.dizhi = data.data.join('');
			console.log(data.data.join(''));
		}
	}
};
</script>

<style>
.zhuce_tab_center {
	display: flex;
	background-color: #f8f8f8;
	width: 344rpx;
	border-radius: 37px;
}
.zi_body{
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.zhuce_tab_item {
	line-height: 63rpx;
	text-align: center;
	width: 170rpx;
	height:63rpx;
}

.zhuce_tab_item_active {
	background-color: #1986fb;
	border-radius: 37rpx;
	color: #ffffff;
}

.zhuce_tab {
	display: flex;
}

.uni-input {
	font-size: 28rpx !important;
}

.zhuce_list {
	border-bottom: 2rpx #e8e8e8 solid;
	height: 110rpx;
	display: flex;
	align-items: center;
}

.yonghu_zhuce {
	
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

.diqu_icon {
	width: 27rpx !important;
	height: 28rpx !important;
}

.yanzheng_icon {
	width: 29rpx !important;
	height: 26rpx !important;
}

.yaoqing_icon {
	width: 31rpx !important;
	height: 29rpx !important;
}

.zhuce_list_yanzheng {
	justify-content: space-between;
	display: flex;
	align-items: center;
}
.kai {
	width: 29rpx !important;
	height: 19rpx !important;
}
.guan {
	width: 28rpx !important;
	height: 14rpx !important;
}
button {
	margin: 0;
	padding: 0;
}

.aaaaaa {
	min-width: 500rpx;
	display: inline-block;
}

.xieyi {
	margin: 76rpx 0 50rpx 0;
	text-align: center;
	display: flex;
	align-items: center;
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

.xuandizu_icon {
	width: 16rpx !important;
	height: 9rpx !important;
}
.border {
	border: 1px solid #999999 !important;
}
.xieyi_xuan {
	margin-right: 10rpx;
}
</style>
