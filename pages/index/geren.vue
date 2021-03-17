<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">个人信息</view>
			<view class=" head_right hei_30_bold"><text @click="baocun">保存</text></view>
		</view>

		<view class="zi_body">
			<view class="geren_list">
				<view class="wei_shimimg">
					<view class="wei_shimimg_left">
						<view class="hei_30_bold wei_shimimg_title">
							<image src="../../static/index_img/geren_shiming.png" mode=""></image>
							未认证实名信息
						</view>
						<view class="hei_30">实名可帮助你找回账号</view>
					</view>
					<text class="lan_28">去认证</text>
				</view>

				<view class="geren_item geren_tx">
					<text>头像</text>
					<image src="../../static/qy_img/tx.png" mode="" class="tx"></image>
				</view>
				<view class="geren_item">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">姓名</view>
						<view class="hei_32"><input type="text" value="" v-model="name" class="hei_32"/></view>
					</view>
					<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
				<picker mode="selector" :range="xingbie_arry" @change="xingbie_change" >
				<view class="geren_item">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">性别</view>
						<view class="hei_32">{{xingbie}}</view>
					</view>
					<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
				</picker>
					<timeSelector showType="yearToMonth" @btnConfirm="gongzuo_change">
				<view class="geren_item">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">参加工作时间</view>
						<view class="hei_32">{{gongzuo}}</view>
					</view>
					<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
				</timeSelector>
				<view class="geren_item">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">微信号</view>
						<view class="hei_32"><input type="text" value="" v-model="weixin" class="hei_32"/></view>
					</view>
					<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
				<view class=" qian_26 tishi">
					<image src="../../static/index_img/tishi.png" mode=""></image>
					微信号只有在你主动与招聘者交换时候，才会告知对方
				</view>
				<timeSelector showType="yearToMonth" @btnConfirm="chusheng_change">
				<view class="geren_item">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">出生年月</view>
						<view class="hei_32">{{chusheng}}</view>
					</view>
					<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
             </timeSelector>
				<view class="geren_item">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">邮箱</view>
						<view class="hei_32"> <input type="text" value="" v-model="youxiang" class="hei_32"/></view>
					</view>
					<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import timeSelector from '@/components/wing-time-selector/wing-time-selector.vue';
export default {
	components: {
		timeSelector
	},
	data() {
		return {
			xingbie_arry:['男','女'],
			xingbie:'女',
			gongzuo:'2017-06',
			chusheng:'1990-01',
			weixin:'wangdazhi1876',
			youxiang:'wangdazhi1876@qq.com',
			name:'张晓梅'
			
		};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		xingbie_change(e){
			this.xingbie=this.xingbie_arry[e.detail.value]
		},
		gongzuo_change(e) {
			this.gongzuo = e.key;
		},
		chusheng_change(e){
			this.chusheng = e.key;
		},
		baocun(){
			
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
.wei_shimimg {
	display: flex;
	align-items: flex-start;
	padding: 40rpx;
	box-sizing: border-box;
	height: 166rpx;
	background-color: #ffffff;
	box-shadow: 0rpx 0rpx 18rpx 0rpx rgba(0, 7, 0, 0.11);
	border-radius: 10rpx;
	margin-top: 20rpx;
	justify-content: space-between;
}
.wei_shimimg_left image {
	width: 27rpx;
	height: 31rpx;
	margin-right: 17rpx;
}
.wei_shimimg_title {
	display: flex;
	align-items: center;
	margin-bottom: 16rpx;
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
.geren_item input{
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
	margin-bottom: 10rpx;
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
