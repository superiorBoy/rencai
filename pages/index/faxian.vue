<template>
	<view class="body">
		<view class="head">
			<view class="head_back bai_38_bold">发现</view>
			<view class="head_center bai_38"><image src="../../static/index_img/faxian_sousuo.png" mode=""></image>
			<input type="text" value="" placeholder="搜索职位/公司/内容" v-model="sou_txt" confirm-type="search" @confirm="confirm"class="hei_26" placeholder-style="color:#fff"/>
			</view>
			<view class=" head_right hei_30_bold">
				<image src="../../static/index_img/faxian_tongzhi.png" mode="" class="tongzhi"></image>
				<image src="../../static/index_img/hr.png" mode="" class="faxian_tx"></image>
			</view>
		</view>
<view class="faxian_tab_body ">
	<view class="faxian_tab hui_28">
		<view class="faxian_tab_item" :class="faxian_tab_index==1?'hei_28_bold':''" @click="tab_qiehuan(1)">
			关注
		</view>
		<view class="faxian_tab_item":class="faxian_tab_index==2?'hei_28_bold':''"@click="tab_qiehuan(2)">
			推荐
			<text class="hongdian"></text>
		</view>
		<view class="faxian_tab_item":class="faxian_tab_index==3?'hei_28_bold':''"@click="tab_qiehuan(3)">
			问答
		</view>
		<view class="faxian_tab_item":class="faxian_tab_index==4?'hei_28_bold':''"@click="tab_qiehuan(4)">
			职测
		</view>
	</view>
</view>
<view class="faxian_body ">
	<view class="zanwu">
		<image src="../../static/index_img/faxian_zanwu.png" mode="widthFix"></image>
		<view class="qian_28">
			关注你感兴趣的人和话题
		</view>
		<view class="qian_28 zanwu_txt">
			他们的更新会出现在这里
		</view>
		<button type="" class="bai_28">去关注</button>
	</view>
</view>
		
	</view>
</template>

<script>

export default {
	components: {
		
	},
	data() {
		return {
			sou_txt:'',
			faxian_tab_index:1
		};
	},
	onLoad() {},
	methods: {
		
		confirm(){
			console.log(this.sou_txt)
		},
		tab_qiehuan(index){
			this.faxian_tab_index=index
		}
		
	}
};
</script>

<style>
.head {
	background-color: #00c6c9;
}

.index_body {
	padding-top: 182rpx;
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.head_back{
	width: 20%;
}
.head_center image{
		width: 23rpx;
		height: 24rpx;
		margin-right: 8rpx;
}
.head_center{
		width: 374rpx;
		height: 56rpx;
		background-color: #5bdadc;
		border-radius: 28rpx;
		display: flex;
		padding: 0 0 0 55rpx;
		box-sizing: border-box;
		align-items: center;
}
.head_center input{
	width: 234rpx;
	
}
.tongzhi {
		width: 34rpx;
		height: 39rpx;
		margin-right: 26rpx;
}
.faxian_tx{
		width: 50rpx;
		height: 50rpx;
		border-radius: 100%;
}
.head_right{
	width: 20%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}
.faxian_body{
	padding-top: 190rpx;
}

.faxian_tab_body{
	position: fixed;
	top: 100rpx;
	width: 100%;
}
.faxian_tab{
height: 90rpx;
	display: flex;
	align-items: center;
	padding: 0 30rpx;
	border-bottom: 2rpx solid #f3f3f3;
}
.faxian_tab .faxian_tab_item{
	margin-right: 50rpx;
	position: relative;
}
.hongdian{
		width: 12rpx;
		height: 12rpx;
		background-color: #f43a51;
		border-radius: 100%;
		display: inline-block;
		position: absolute;
		left: 54rpx;
		top: 0;
}
.zanwu{
	text-align: center;
}
.zanwu image{
		width: 366rpx;
		height: 199rpx;
		margin: 190rpx 0 90rpx;
}
.zanwu button{
		width: 210rpx;
		height: 68rpx;
		background-color: #00c6c9;
		border-radius: 34rpx;
		line-height: 68rpx;
}
	
.zanwu_txt{
	margin: 6rpx 0 60rpx;
}
</style>
