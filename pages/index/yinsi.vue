<template>
	<view>
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">隐私设置</view>
			<view class=" head_right hei_30_bold"><image src="../../static/index_img/wenhao.png" mode="" @click="open()"></image></view>
		</view>

		<view class="zi_body">
			<view class="yinsi_title hei_28_bold">展示方式</view>
			<view class="xuan_fangshi">
				<view class="zhanshi_list qian_26" @click="radio(1)">
					<view class="zhanshi_list_left">
						<image src="../../static/index_img/nv_tx.png" mode=""></image>
						<text class="name hei_26">张晓梅</text>
						（实名展示）
					</view>
					<view class="zhanshi_list_right"><radio value="1" :checked="xuan == 1" /></view>
				</view>
				<view class="zhanshi_list qian_26" @click="radio(2)">
					<view class="zhanshi_list_left">
						<image src="../../static/index_img/nv_tx.png" mode=""></image>
						<text class="name hei_26">张晓梅</text>
						（匿名展示）
					</view>
					<view class="zhanshi_list_right"><radio value="2" :checked="xuan == 2" /></view>
				</view>
			</view>
			<view class="yinsi_title hei_28_bold">屏蔽企业</view>
			<view class="pingbi hui_28">
				<view class="pingbi_item">
					杭州字节跳动科技有限公司
					<image src="../../static/qy_img/close.png"></image>
				</view>
				<view class="pingbi_item">
					杭州
					<image src="../../static/qy_img/close.png"></image>
				</view>
				<view class="pingbi_item">
					杭州
					<image src="../../static/qy_img/close.png"></image>
				</view>
				<view class="pingbi_item">
					杭州
					<image src="../../static/qy_img/close.png"></image>
				</view>
				<view class="pingbi_item">
					杭州
					<image src="../../static/qy_img/close.png"></image>
				</view>
			</view>
			<navigator url="add_qiye"class="xinzeng_bottom">
			<button type="" class="xinzeng bai_30">新增企业</button>
				
			</navigator>
		</view>

		<uni-popup ref="popup" type="center">
			<view class="tan_shuoming_html ">
				<view class="tan_shuoming qian_26">
					<view class="tan_shuoming_top hei_30">隐私须知</view>
					<view class="tan_shuoming_title hei_26">匿名展示</view>
					<view class="tan_shuoming_body">选择匿名后，HR无法看到你的真实头像和姓名</view>
					<view class="tan_shuoming_title hei_26">屏蔽公司</view>
					<view class="tan_shuoming_body">
						<view class="">1.屏蔽公司后，此公司下的招聘者将不会在各个入 口看见您(包括已经建立联系的招聘者);</view>

						<view class="">2.您将不会在各个职位推荐入口看见此公司下的招 聘者发布的职位;</view>
						<view class="">3.您在各处查看此公司下招聘者的职位，将不会通 知招聘者;</view>
						<view class="">4.您在各处对此公司下招聘者感兴趣，将不会通知 招聘者;</view>
						<view class="">5.您无法与此公司下的招聘者建立新的沟通，如需 沟通，需先解除屏蔽;</view>
					</view>
					<view class="tan_shuoming_bottom lan_30" @click="quxiao()">确定</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			xuan: 1
		};
	},

	onLoad() {},

	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		radio(index) {
			this.xuan = index;
		},
		open() {
			// 通过组件定义的ref调用uni-popup方法
			this.$refs.popup.open();
		},
		quxiao() {
			this.$refs.popup.close();
		}
	}
};
</script>

<style>
.zi_body {
	padding-bottom: 200rpx;
}
.head_right image {
	width: 38rpx;
	height: 38rpx;
}
.yinsi_title {
	line-height: 110rpx;
	padding-left: 30rpx;
}
.zhanshi_list {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 38rpx;
}
.zhanshi_list_left image {
	width: 60rpx;
	height: 60rpx;
	border-radius: 100%;
	vertical-align: middle;
}
.zhanshi_list_left text {
	margin: 0 20rpx;
}
.xuan_fangshi {
	padding: 0 30rpx;
	border-bottom: 20rpx solid #f7f7f7;
}
.pingbi_item {
	height: 80rpx;
	background-color: #f8f8f8;
	border-radius: 40rpx;
	border: solid 2rpx #efefef;
	line-height: 80rpx;
	padding: 0 36rpx 0 40rpx;
	margin: 0 10rpx 20rpx 0;
}
.pingbi_item image {
	width: 24rpx;
	height: 24rpx;
	margin-left: 48rpx;
}
.pingbi {
	display: flex;
	align-items: center;
	padding: 0 30rpx;
	flex-wrap: wrap;
}
.xinzeng {
	height: 88rpx;
	background-color: #00c6c9;
	border-radius: 44rpx;
	line-height: 88rpx;
}
.xinzeng_bottom {
	padding: 0 30rpx;
	position: fixed;
	bottom: 50rpx;
	left: 0;
	box-sizing: border-box;
	width: 100%;
}

.tan_shuoming_top {
	margin: 40rpx 0 40rpx;
	text-align: center;
}
.tan_shuoming {
	padding: 20rpx 56rpx 0;
	box-sizing: border-box;
	background-color: #ffffff;
	box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(198, 198, 198, 0.42);
	border-radius: 10rpx;
}
.tan_shuoming_html {
	padding: 0 30rpx;
}
.tan_shuoming_body {
	padding-left: 20rpx;
	padding-bottom: 10rpx;
	line-height: 50rpx;
}
.tan_shuoming_title {
	margin: 20rpx 0 10rpx;
}
.tan_shuoming_bottom {
	line-height: 115rpx;
	border-top: 2rpx solid #efefef;
	text-align: center;
	margin-top: 40rpx;
}
</style>
