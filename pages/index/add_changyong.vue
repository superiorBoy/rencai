<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">添加常用语</view>
			<view class=" head_right hei_30_bold"><text @click="baocun">完成</text></view>
		</view>

		<view class="zi_body">
			<view class="add_body">
				<textarea
					value=""
					placeholder="输入您的常用回复，请不要填写QQ、微信等联系方式
或广告信息，否则系统将封禁您的账号"
					v-model="text"
					class="hei_28"
					@input="bianhua"
					maxlength="200"
					placeholder-style="color:#d7d7d7"
				/>
				<view class="num hei_28">
					<text class="lan_28">{{ shuru_num }}</text>
					/200
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			text: '',
			shuru_num: 0
		};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},

		baocun() {
			console.log(this.text);
		},
		bianhua() {
			this.shuru_num = this.text.length;
		}
	}
};
</script>

<style>
.head {
	background-color: #ffffff;
}
.zi_body {
	
}
.add_body {
	padding: 30rpx 30rpx;
}
.add_body textarea {
	width: 100%;
	height: 460rpx;
	line-height: 40rpx;
}
.num {
	text-align: right;
	line-height: 75rpx;
	border-bottom: 2rpx solid #ebebeb;
}
</style>
