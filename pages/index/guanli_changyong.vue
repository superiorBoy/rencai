<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold" >管理常用语6/15</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body">
			<view class="changyong_list">
				<view class="changyong_item" v-for="item in changyong_arry">
					<view class="changyong_item_top hei_28">
					{{item.text}}
					</view>
					<view class="changyong_bianji hui_28">
						<image src="../../static/index_img/hei_bianji.png" mode=""></image>编辑
					</view>
				</view>
			</view>
			
			<button class="add bai_30" @click="add_changyong">
				添加常用语
			</button>
		</view>
	</view>
</template>

<script>
	
export default {

	data() {
		return {

			changyong_arry:[
				{'text':'您好，看了贵公司的招聘要求，我觉得我可以胜任这份工作，希望可以聊聊，简历已发你，望查收！'},
				{'text':'您好，我对贵公司的职位很感兴趣，我觉得我能胜任当前职位，简历已发送，望查收~'},
				{'text':'简历已发送，如果不合适还请你直点下，哪点需要改进，在这先谢谢了'},
				{'text':'不好意思哈，我感觉和贵公司的职位不太匹配，在这预祝你找到合适的！'},
				{'text':'我可以去贵公司面试吗？'},
				{'text':'在吗？我对贵公司的web前端感兴趣，可以聊聊吗？'},
			]
		};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		add_changyong(){
			uni.navigateTo({
				url:'add_changyong'
			})
		}
	}
};
</script>

<style>
.head {
	background-color: #ffffff;
	
}
.zi_body {
	padding-top: 100rpx;
	padding-left: 30rpx;
	padding-right: 30rpx;
	padding-bottom: 30rpx;
}
.head_center{
	width: 60%;
}
.add{
		height: 88rpx;
		background-color: #00c6c9;
		border-radius: 10rpx;
		line-height: 88rpx;
		margin: 130rpx 0 0;
}
.changyong_item{
	padding:50rpx 0 0 ;
	border-bottom: 2rpx solid #ebebeb;
}
.changyong_bianji {
	height: 60rpx;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}
.changyong_bianji image{
		width: 27rpx;
		height: 27rpx;
		margin-right: 8rpx;
}
</style>
