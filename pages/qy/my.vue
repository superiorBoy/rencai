<template>
	<view class="body">
		<view class="tabber_body my_body">
			<view class="my_top_body">
				
			
			<view class="my_top">
				<view class="my_top_left">
					<image src="../../static/qy_img/tx.png" mode="" class="ls_tx" ></image>
					<view class="my_top_left_r" >
						<view class="my_name ">
							 <text class="bai_40_bold">张珊珊</text>
							<view class="renzheng_xinxi bai_20" >
							 <text>已认证</text>	<text>已实名</text>
							</view>
						</view>
						<view class=" bai_20"><text>草根技术</text> <text class="zhiwei">人事经理</text></view>
					</view>
					<!-- <view class="my_top_weoienglu hei_26" >
						<navigator url="login" class="go_denglu">登录</navigator>
						<navigator url="../index/zhuce?state=2" class="go_denglu">注册</navigator>
					</view> -->
				</view>
				<view class="my_top_right bai_24" >编辑 <image src="../../static/qy_img/my_r.png" mode="" ></image></view>
			</view>
			<view class="my_ziliao">
				<view class="my_ziliao_item" >
					<view class="my_ziliao_item_top bai_34">20</view>
					<view class="my_ziliao_item_bottom bai_22">沟通过</view>
				</view>
				<view class="my_ziliao_item" >
					<view class="my_ziliao_item_top bai_34">6</view>
					<view class="my_ziliao_item_bottom bai_22">面试</view>
				</view>
			
				<view class="my_ziliao_item" >
					<view class="my_ziliao_item_top bai_34">12</view>
					<view class="my_ziliao_item_bottom bai_22">收藏</view>
				</view>
				<view class="my_ziliao_item" >
					<view class="my_ziliao_item_top bai_34">8</view>
					<view class="my_ziliao_item_bottom bai_22">录用</view>
				</view>
			</view>
			<view class="tongzhi">
				<image src="../../static/qy_img/kaitong.png" mode="widthFix"></image>
			</view>
			
			
			</view>

			

			<view class="my_bottom">
		
		<view class="my_zhiwei">

			<view class="my_zhiwei_item hei_24" @click="tiaozhuan('zhiwei_guanli')">
				<image src="../../static/qy_img/my_top1.png" mode=""></image>
				<view class="">
					职位管理
				</view>
			</view>
			<view class="my_zhiwei_item hei_24">
				<image src="../../static/qy_img/my_top2.png" mode=""></image>
				<view class="">
					发布职位
				</view>
			</view>
			<view class="my_zhiwei_item hei_24">
				<image src="../../static/qy_img/my_top3.png" mode=""></image>
				<view class="">
					公司资料
				</view>
				<image src="../../static/qy_img/dai_wanshan.png" mode="" class="dai_wanshan"></image>
			</view>
			<view class="my_zhiwei_item hei_24">
				<image src="../../static/qy_img/my_top4.png" mode=""></image>
				<view class="">
					个人资料
				</view>
				<image src="../../static/qy_img/dai_wanshan.png" mode="" class="dai_wanshan"></image>
			</view>
		</view>
		
		<view class="my_caozuo">
			<view class="my_caozuo_item">
				<image src="../../static/qy_img/my_sousuo.png" mode="" style="width: 55rpx;height: 44rpx;"></image>
				<view class="my_caozuo_item_right">
					<view class="hei_26_bold ">
						搜索找人
					</view>
					<view class="qian_22 my_caozuo_item_title">
						寻找优秀的高端人才
					</view>
				</view>
			</view>
			<view class="my_caozuo_item">
				<image src="../../static/qy_img/my_zhiwei.png" mode=""style="width: 42rpx;height: 44rpx;"></image>
				<view class="my_caozuo_item_right">
					<view class="hei_26_bold ">
						职位置顶
					</view>
					<view class="qian_22 my_caozuo_item_title">
						紧急招聘岗位优先展示
					</view>
				</view>
			</view>
		</view>
				
           <view class="my_guanli zhanghao_guanli">
					<view class="my_title hei_30_bold">在线工具</view>
					<view class="my_list">
						<navigator url="geren_xinxi" class="zhanghao_item">
							<image src="../../static/qy_img/zaixian1.png" mode="" style="width: 74rpx;height: 74rpx;"></image>
							<view class="hui_24 ">群发消息</view>
						</navigator>
						<view class="zhanghao_item" >
							<image src="../../static/qy_img/zaixian2.png" mode="" style="width: 74rpx;height: 74rpx;"></image>
							<view class="hui_24 ">招聘道具</view>
						</view>
						<view class="zhanghao_item" >
							<image src="../../static/qy_img/zaixian3.png" mode="" style="width: 74rpx;height: 74rpx;"></image>
							<view class="hui_24 ">招聘数据</view>
						</view>
						<view class="zhanghao_item">
							<image src="../../static/qy_img/zaixian4.png" mode="" style="width: 74rpx;height:74rpx;"></image>
							<view class="hui_24 ">切换身份</view>
						</view>
					</view>
				</view>
					
				<view class="my_guanli zhanghao_guanli">
					<view class="my_title hei_30_bold">账号中心</view>
					<view class="my_list">
						<navigator url="geren_xinxi" class="zhanghao_item">
							<image src="../../static/qy_img/zhanghao1.png" mode="" style="width: 40rpx;height: 32rpx;margin-bottom: 26rpx;"></image>
							<view class="hui_24 ">个人信息</view>
						</navigator>
						<view class="zhanghao_item" >
							<image src="../../static/qy_img/zhanghao2.png" mode="" style="width: 39rpx;height: 40rpx;"></image>
							<view class="hui_24 ">流水明细</view>
						</view>
						<view class="zhanghao_item" >
							<image src="../../static/qy_img/zhanghao3.png" mode="" style="width: 40rpx;height: 39rpx;"></image>
							<view class="hui_24 ">账号提现</view>
						</view>
						<view class="zhanghao_item">
							<image src="../../static/qy_img/zhanghao4.png" mode="" style="width: 40rpx;height:40rpx;"></image>
							<view class="hui_24 ">修改密码</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<tabBar :currentPage="currentPage" ref="ls_mainindex"></tabBar>
	</view>
</template>

<script>
import tabBar from '@/components/tabbar/tabbar.vue';
export default {
	components: {
		tabBar
	},
	data() {
		return {
			currentPage: 'qy/my'
		};
	},
	onLoad() {},
	methods: {
		tiaozhuan(url){
			uni.navigateTo({
				url:url
			})
		}
	}
};
</script>

<style>
.tabber_body {
	padding-bottom: 100rpx;
}
page {
	background-color: #f7f7f7;
}

.ls_tx {
	width: 110rpx;
	height: 110rpx;
	
	border-radius: 100%;
	margin-right: 32rpx;
}

.my_top_left {
	display: flex;
}
.my_top_body{
	background-color: #20c0bf;
}
.my_top {
	display: flex;
	justify-content: space-between;
	padding: 30rpx;
	align-items: center;
	
}



.my_top_left_r {
	padding-top: 10rpx;
}

.my_name {
	display: flex;
	align-items: center;
	margin-bottom: 10rpx;
}

.renzheng1 {
	margin-left: 10rpx;
}

.renzheng1,
.renzheng2 {
	width: 17rpx;
	height: 17rpx;
	margin-right: 10rpx;
}

.renzheng3 {
	width: 18rpx;
	height: 14rpx;
}

.my_top_right {
	margin-top: 5rpx;
}

.my_ziliao_item {
	text-align: center;
	width: 25%;
}
.my_ziliao_item_top{
	margin-bottom: 6rpx;
}
.my_ziliao {
	display: flex;
	justify-content: space-between;
	padding-bottom: 20rpx;
}

.my_title {
	height: 100rpx;
	line-height: 100rpx;
	border-bottom: solid 2rpx #e2e2e2;
	margin-bottom: 30rpx;
}

.my_guanli {
	background-color: #ffffff;
	margin-top: 20rpx;
	padding: 0 18rpx 40rpx;
}


.my_list {
	display: flex;
	flex-wrap: wrap;
}
.my_bottom {
	padding: 0 30rpx;
}
.ls_item {
	text-align: center;
	width: 33.33%;
	margin-bottom: 60rpx;
}

.ls_item image {
	width: 51rpx;
	height: 51rpx;
	margin-bottom: 30rpx;
}


.zhanghao_guanli {
	margin-bottom: 30rpx;
}

.zhanghao_item {
	width: 25%;
	text-align: center;
}

.zhanghao_item image {
	width: 40rpx;
	height: 39rpx;
	margin-bottom: 20rpx;
}
.my_top_weoienglu {
	display: flex;
	align-items: center;
}

.go_denglu {
	margin-right: 20rpx;
	border: 2rpx solid #eeeeee;
	border-radius: 6rpx;
	width: 120rpx;
	height: 50rpx;
	line-height: 50rpx;
	text-align: center;
}
.go_zhuce {
	border-radius: 6rpx;
	width: 120rpx;
	height: 50rpx;
	line-height: 50rpx;
	border: 2rpx solid #eeeeee;
	text-align: center;
}
.renzheng_xinxi{
	margin-left: 10rpx;
}
.renzheng_xinxi text{
		width: 76rpx;
			height: 34rpx;
			border-radius: 3rpx;
			border: solid 1rpx #f8f8f8;
		margin-right: -4rpx;
		padding: 0 4rpx;
		transform : scale(0.8);  
		display: inline-block;
		position: relative;
		top: 4rpx;
}
.zhiwei{
	position: relative;
	margin-left: 20rpx;
}
.zhiwei::before{
	content: '';
	display: inline-block;
		height: 25rpx;
		width: 2rpx;
		background-color: #FFFFFF;
		position: absolute;
		left: -10rpx;
		top: 6rpx;
}
.my_top_right image{
	width: 10rpx;
		height: 18rpx;
		margin-left: 9rpx;
}
.tongzhi{
	text-align: center;
	padding: 0 30rpx;

}
.tongzhi image{
	width: 100%;
	position: relative;
	bottom: -16rpx;
}
.my_zhiwei{
	display: flex;
	margin: 40rpx 0 30rpx;
}
.my_zhiwei_item{
	text-align: center;
	width: 25%;
	position: relative;
}
.my_zhiwei_item image{
	width: 60rpx;
		height: 61rpx;
		margin-bottom: 6rpx;
}
.dai_wanshan{
	position: absolute;
	top: -20rpx;
	right: 20rpx;
	width: 54rpx !important;
		height: 22rpx !important;
}
.my_caozuo{
	display: flex;
	justify-content: space-between;
}
.my_caozuo_item{
	width: 330rpx;
		height: 130rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 0rpx 29rpx 0rpx 
			rgba(136, 136, 136, 0.17);
		border-radius: 5rpx;
		display: flex;
		align-items: center;
		padding-left: 20rpx;
		box-sizing: border-box;
}
.my_caozuo_item_right{
	margin-left: 26rpx;
}
.my_caozuo_item_title{
	margin-top: 6rpx;
	transform : scale(0.9);  
	position: relative;
	left: -10rpx;
}
</style>
