<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">求职意向</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body">
		
			
				<view class="fujian_title ">
					<text class="fujian_title_txt">想找什么工作？</text>
					<text><text class="lan_36_bold">1</text><text class="qian_36">/</text>3</text>
				</view>
				<view class="hui_28 fujian_title_tishi">
					添加多个求职期望，可获得更多精准高薪工作机会
				</view>
		
		<view class="gangwei_list">
			<view class="gangwei_item">
				<view class="gangwei_item_left">
					<view class="hei_32 gangwei_item_left_title">
						[杭州] 销售顾问
					</view>
					<view class="hui_24">
						8-10k  |  医疗健康、电子商务、互联网金融 
					</view>
				</view>
				<view class="gangwei_item_right lan_20">
					<text>设置偏好</text>
					<image src="../../static/qy_img/go_right.png" mode=""></image>
				</view>
				
			</view>
		</view>
	
	<view  >
		<navigator url="qiuzhi_qiwang" class="add_qiwang lan_34">
	<image src="../../static/index_img/add_fujian.png" mode=""></image>	继续添加求职期望
	</navigator>
	</view>

<view class="zhuangtai" @click="open()">
<view class="zhuangtai_left hei_34_bold">
	求职状态
</view>
	<view class="zhuangtai_right hui_28">
		{{zhuangtai==1?'离职-随时到岗':zhuangtai==2?'在职-月内到岗':zhuangtai==3?'在职-考虑机会':'在职-暂不考虑'}}
		<image src="../../static/qy_img/go_right.png" mode=""></image>
	</view>
</view>


		</view>
		
		
<uni-popup ref="popup" type="bottom">
	
	<view class="tan_zhuangtai">
		<view class="tan_zhuangtai_top">
		<view class="tan_zhuangtai_title hui_30">
			求职状态
		</view>
		<view class="tan_zhuangtai_list hui_34" @click="xuan_zhuangtai(1)">
			离职-随时到岗
		</view>
		<view class="tan_zhuangtai_list hui_34" @click="xuan_zhuangtai(2)">
			在职-月内到岗
		</view>
		<view class="tan_zhuangtai_list hui_34" @click="xuan_zhuangtai(3)">
			在职-考虑机会
		</view>
		<view class="tan_zhuangtai_list hui_34" @click="xuan_zhuangtai(4)">
			在职-暂不考虑
		</view>

		</view>
		<view class="tan_zhuangtai_quxiao hui_34" @click="quxiao">
			取消
		</view>
	</view>
	
	
</uni-popup>		
		
		
	</view>
</template>

<script>
	
export default {

	data() {
		return {
zhuangtai:1
		};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		xuan_zhuangtai(index){
			this.zhuangtai=index
			this.$refs.popup.close()
		},
	     open(){
	             // 通过组件定义的ref调用uni-popup方法
	             this.$refs.popup.open()
	          },
			  quxiao(){
				  this.$refs.popup.close()
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
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.fujian_title_txt{
	font-size: 50rpx;
	
}
.fujian_title{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 50rpx;
}
.fujian_title_tishi{
	margin-top: 20rpx;
}
.gangwei_item_right image{
		width: 11rpx;
		height: 20rpx;
}
.gangwei_item_right text{
	display: inline-block;
		height: 36rpx;
		background-color: #E5F9F9;
		border-radius: 5rpx;
		line-height: 36rpx;
		padding: 0 14rpx;
		margin-right: 22rpx;
}
.gangwei_item{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 50rpx 0;
}
.gangwei_item_left_title{
	margin-bottom: 10rpx;
}
.add_qiwang{
	height: 136rpx;
		border: dashed 4rpx #00c6c9;
		display: flex;
		align-items: center;
		justify-content: center;
}
.add_qiwang image{
		width: 36rpx;
		height: 36rpx;
		margin-right: 18rpx;
}
.zhuangtai_right image{
		width: 11rpx;
		height: 20rpx;
		margin-left: 20rpx;
}
.zhuangtai{
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 154rpx;
	border-bottom: 2rpx solid #e8e8e8;
}
.tan_zhuangtai{
	padding: 0 30rpx;
	text-align: center;
	padding-bottom: 30rpx;
}
.tan_zhuangtai_top{
	background-color: #FFFFFF;
		border-radius: 10rpx;
}
.tan_zhuangtai_title{
	line-height: 88rpx;
	
}
.tan_zhuangtai_list{
	line-height: 116rpx;
	border-top: 2rpx solid #e8e8e8;
}
.tan_zhuangtai_quxiao{
	margin-top: 20rpx;
	line-height: 116rpx;
	background-color: #FFFFFF;
	border-radius: 10rpx;
}
</style>
