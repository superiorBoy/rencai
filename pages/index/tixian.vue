<template>

	<view class="body">
		<view class="head">
			<view class="head_back">
				<image src="../../static/qy_img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">账号提现</view>
			<view class=" head_right hei_30_bold">
            
			</view>
		</view>

		<view class="zi_body ">

		
			<view class="tixian_body">
				<view class="tixian_list hei_30 dis_sp">
					<view class="tixian_list_left">
						可提现余额
					</view>
					<text>￥{{yue}}</text>
				</view>
				<view class="tixian_list hei_30">
					<view class="tixian_list_left">
						用户姓名
					</view>
					<input type="text" value="" placeholder="请输入姓名" class="hei_28" v-model="name" />
				</view>
				<view class="tixian_list hei_30">
					<view class="tixian_list_left">
						支付宝
					</view>
					<input type="text" value="" placeholder="请输入支付宝账号" class="hei_28" v-model="zhifubao" />
				</view>
				<view class="tixian_list hei_30">
					<view class="tixian_list_left">
						提现金额
					</view>
					<text class="hei_30">￥</text><input type="number" value="" class="hei_28" placeholder="请输入充值金额" v-model="jine"/>
					<text class=" all" @click="all">全部</text>
				</view>
				<text class="tishi qian_26">*提现金额不能少于1元</text>

				<button type="" class="tixian_btn bai_30" @click="save">立即提现</button>


				<view class="tixian_shuoming hei_30">
					提现说明
					<view class="tixian_shuoming_bottom hui_26">
						<view class="">
							1.由于提现金额将存入你登录绑定的个人账号里，请确认您的个人账号已完成实名认证，否则无法成功提现；
						</view>
						<view class="">2.每个账户每次最少提现1元，每日最大提现次数3次；</view>
						<view class="">3.提现申请后，请耐心等待平台处理，平台将在2小时内将提现金额存入你的支付宝里；</view>
						<view class="">4.平台提现成功后，你可以通过账单进行查询；</view>
						<view class="">5.在提现过程中有任何疑问，请随时联系我们的客服。</view>
					</view>
				</view>

			</view>

		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				zhifubao: '',
				jine: '',
				yue: '0.00',
				name:''
			}
		},
		created() {},
		onLoad(option) {
           this.$http
			.post({
				url: '/userapi/user/user'
			})
			.then(res => {
				this.yue=res.data.user.rmb
				this.name=res.data.user.nickname
			});
	
		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},

			all() {
				this.jine = this.yue
			},
			save() {
              if (this.zhifubao == '') {
					uni.showToast({
						title: '请填写支付宝账号',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.jine == '') {
					uni.showToast({
						title: '请填写体现金额',
						duration: 2000,
						icon: "none"
					});
					return false
				}
				if(this.jine<1){
					uni.showToast({
						title: '金额不得少于1元',
						duration: 2000,
						icon: "none"
					});
					return false
				}
				this.$http
					.post({
						url: '/userapi/user/tixian',
						data:{
							alipayuser:this.zhifubao,
							rmb:this.jine,
							myname:this.name	
						}
					})
					.then(res => {
							if(res.code==0){
								uni.showToast({
									title: '提交成功',
									duration: 2000
								});
								this.zhifubao=''
								this.jine=''
							}
						console.log(res.data)
					
					});

				console.log(this.zhifubao, this.jine)
			}

		}
	}
</script>

<style>
	.head {
		/* border-bottom: 2rpx solid #E8E8E8; */
	}

	.tixian_body {
		padding: 0 30rpx;
	}


	.tixian_list {
		padding: 35rpx 0;
		border-bottom: 2rpx solid #E8E8E8;
		display: flex;
		align-items: center;
	}

	.tixian_list_left {
		width: 150rpx;
	}

	.tixian_list input {
		width: 400rpx;
	}

	.jine {
		font-size: 60rpx;
		color: #FFFFFF;
		font-weight: bold;
	}

	.all {
		position: absolute;
		right: 30rpx;
		color: #fa6a43;
		
	}

	.tishi {
		margin-top: 10rpx;
		display: inline-block;
	}

	.tixian_btn {
		height: 88rpx;
			background-color: #00c6c9;
		border-radius: 44rpx;
		line-height: 88rpx;
		margin: 150rpx 0 200rpx;
	}

	.tixian_shuoming_bottom {
		margin-top: 20rpx;
		margin-bottom: 50rpx;
		line-height: 40rpx;
	}
	.dis_sp{
		justify-content: space-between;
	}
	.tixian_shuoming{
		
		padding-bottom: 30rpx;
	}
	.tixian_shuoming view{
		line-height: 44rpx;
	}
</style>
