<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold"></view>
			<view class=" head_right hei_30_bold"><text @click="save">确定</text></view>
		</view>

		<view class="zi_body">
			<view class="youshi_top">
				<view class="youshi_top_title">
					我的优势
				</view>
				<view class="hui_28">
					一句话介绍自己，突出核心优势
				</view>
			</view>
			
			<view class="youshi_body">
				<textarea value="" placeholder="请输入" v-model="youshi" class="hei_30" maxlength="140" @input="bianhua"/>
		
			</view>
			
			<view class="qian_24 youshi_zishu">
				<text class="lan_24">{{yishu_num}}</text>/140
			</view>
			
			
		
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
                   youshi:'',
				   yishu_num:0
		};
	},
	created() {},
	onLoad(option) {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		bianhua() {
			this.yishu_num = this.youshi.length;
		},
		save() {
			if (this.youshi == '') {
				uni.showToast({
					title: '请填写优势',
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
	
}

.zi_body{
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.youshi_top{
	margin-top: 30rpx;
	margin-bottom: 50rpx;
}
.youshi_top_title{
	font-size: 56rpx;
	margin-bottom: 20rpx;
	font-weight: bold;
}
.youshi_zishu{
	text-align: right;
	margin-top: 30rpx;
}
.youshi_body{
	height: 700rpx;
	border-bottom: 2rpx solid #ebebeb;
}
.youshi_body textarea{
	width: 100%;
	height: 100%;
}
</style>
