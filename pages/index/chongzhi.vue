<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">账户充值</view>
			<view class=" head_right hei_30_bold">
				
				</view>
		</view>

		<view class="zi_body ">
		
			<view class="tixian_body">
				<view class="hei_30_bold chong_txt">充值金额（元）</view>
				<view class="jine_shuru hei_30">
					￥
					<input type="number" value="" placeholder="请输入充值金额" class="hei_28" v-model="number" />
				</view>

				<view class="fangshi_txt hei_30_bold">支付方式</view>
				<view class="fangshi">
					<view class="fangshi_list " @click="radio(1)">
						<view class="fangshi_left hei_28">
							<image src="../../static/index_img/weixin_pay.png" mode=""></image>
							微信支付
						</view>
						<label class="radio"><radio value="1" :checked="zhifu == 1" /></label>
					</view>
					<view class="fangshi_list" @click="radio(2)">
						<view class="fangshi_left hei_28">
							<image src="../../static/index_img/zhifubao_pay.png" mode=""></image>
							支付宝支付
						</view>
						<label class="radio"><radio value="2" :checked="zhifu == 2" /></label>
					</view>
				</view>
				<button type="" class="tixian_btn bai_30" @click="save">确认充值</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			number: '',
			yue: '0.00',
			zhifu: '2',
			apppaytype: '',
			is_click:true
		};
	},
	created() {},
	onLoad(option) {
		// this.huoqu_pay_fs();
	},
	onShow() {
		this.number = '';
		// this.huoqu_yue();
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		huoqu_pay_fs() {
			this.$http
				.post({
					url: '/mapi/index/getapppaytype'
				})
				.then(res => {
					if (res.code == 0) {
						this.apppaytype = res.data.zhan.apppaytype;
					}
				});
		},
		all() {
			this.jine = this.yue;
		},
		// huoqu_yue() {
		// 	// 获取用户信息
		// 	this.$http
		// 		.post({
		// 			url: '/mapi/user/user'
		// 		})
		// 		.then(res => {
		// 			this.yue = res.data.user.rmb;
		// 		});
		// },
		save() {
			if (this.number == '') {
				uni.showToast({
					title: '请填写充值金额',
					duration: 2000,
					icon: 'none'
				});
				return false;
			}

			if (this.apppaytype == 1) {
			        this.h5_pay()
			} else {
				
				// #ifdef H5
				   this.h5_pay()
				// #endif
				// #ifdef APP-PLUS
				this.app_pay();
				// #endif
			}

			console.log(this.number, this.zhifu);
		},
   h5_pay(){
	   var that=this
	   if(this.is_click){
		   that.is_click=false
		   setTimeout(function(){
		   	that.is_click=true
		   },3000)
		   
		   this.$http
		   	.post({
		   		url: '/userapi/user/chongzhih5',
		   		data: {
		   			paymoney: that.number
		   		}
		   	})
		   	.then(res => {
		   		if (res.code == 0) {
		   			// #ifdef H5
		   				that.$http.jspost(res.data.response)
		   			// #endif
		   			// #ifdef APP-PLUS
		   			plus.runtime.openURL('' + res.data.response);
		   			// #endif
		   
		   		}
		   
		   console.log(res);
		   });
	   }else{
		   uni.showToast({
		   	title: '稍后操作',
		   	duration: 2000,
			icon:'none'
		   });
	   }
   },
		app_pay() {
			this.$http
				.post({
					url: '/userapi/user/chongzhi',
					data: {
						paymoney: this.number
					}
				})
				.then(res => {
					var that = this;
					if (res.code == 0) {
						uni.requestPayment({
							provider: 'alipay',
							orderInfo: res.data.response,
							success: function(res) {
								console.log('success:' + JSON.stringify(res));
								uni.showToast({
									title: '支付成功',
									duration: 2000
								});
								that.number = '';
								that.huoqu_yue();
							},
							fail: function(err) {
								uni.showToast({
									title: '支付失败',
									duration: 2000,
									icon: 'none'
								});
								console.log('fail:' + JSON.stringify(err));
							}
						});
					}

					console.log(res);
				});
		},
		radio(i) {
			this.zhifu = i;
		}
	}
};
</script>

<style>
.head {
	/* border-bottom: 2rpx solid #e8e8e8; */
}

.tixian_body {
	padding: 0 30rpx;
}


.jine {
	font-size: 60rpx;
	color: #ffffff;
	font-weight: bold;
}

.tixian_btn {
	height: 88rpx;
		background-color: #00c6c9;
	border-radius: 44rpx;
	line-height: 88rpx;
	margin: 260rpx 0 50rpx;
}

.jine_shuru {
	display: flex;
	border-bottom: 2rpx solid #f7f7f7;
	padding-bottom: 8rpx;
}
.chong_txt {
	margin: 30rpx 0 36rpx;
}
.fangshi_txt {
	margin: 70rpx 0 0rpx;
	padding-bottom: 40rpx;
	border-bottom: 2rpx solid #eeeeee;
}
.fangshi_left image {
	width: 41rpx;
	height: 41rpx;
	margin-right: 20rpx;
}
.fangshi_list {
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	height: 120rpx;
	border-bottom: 2rpx solid #eeeeee;
}
</style>
