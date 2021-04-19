<template>
	<view class="body">
		<view class=" my_body">
			<view class="my_top_body">
				
			
			<view class="my_top">
				<view class="my_top_left">
					
					<view class="my_top_left_r" >
						<view class="my_name ">
							 <text class="bai_40_bold">张珊珊</text>
							<view class="bai_24 my_name_jianli">
								<image src="../../static/index_img/my_jianli.png" mode=""></image>我的在线简历
							</view>
						</view>
						
					</view>
					<!-- <view class="my_top_weoienglu bai_26" >
						<navigator url="login" class="go_denglu">登录</navigator>
						<navigator url="../index/zhuce?state=2" class="go_denglu">注册</navigator>
					</view> -->
				</view>
				<view class="my_top_right bai_24" ><image src="../../static/qy_img/tx.png" mode="" class="tx"></image> <image src="../../static/qy_img/nan.png" mode="" class="xingbie"></image></view>
			</view>
			<view class="my_ziliao">
				<view class="my_ziliao_item" @click="tiaozhuan('xiaoxi')">
					<view class="my_ziliao_item_top bai_34">20</view>
					<view class="my_ziliao_item_bottom bai_22">沟通过</view>
				</view>
				<view class="my_ziliao_item" @click="tiaozhuan('mian_richeng')">
					<view class="my_ziliao_item_top bai_34">6</view>
					<view class="my_ziliao_item_bottom bai_22">待面试</view>
				</view>
			
				<view class="my_ziliao_item" @click="tiaozhuan('shoucang')">
					<view class="my_ziliao_item_top bai_34">12</view>
					<view class="my_ziliao_item_bottom bai_22">已投递</view>
				</view>
				<view class="my_ziliao_item" >
					<view class="my_ziliao_item_top bai_34">8</view>
					<view class="my_ziliao_item_bottom bai_22">收藏</view>
				</view>
			</view>
			<view class="tongzhi">
				<image src="../../static/index_img/kaitong.png" mode=""></image>
			</view>
			
			</view>

			<view class="my_bottom">
		
		<view class="my_zhiwei">

			<view class="my_zhiwei_item hei_24" @click="tiaozhuan('zhiwei_guanli')">
				<image src="../../static/index_img/my_top1.png" mode="" style="width: 68rpx;height: 68rpx;"></image>
				<view class="my_zhiwei_item_bottom">
					简历管理
				</view>
			</view>
			
			<view class="my_zhiwei_item hei_24" @click="tiaozhuan('fabu_zhiwei')">
				<image src="../../static/index_img/my_top2.png" mode="" style="width: 80rpx;height: 68rpx;"></image>
				<view class="my_zhiwei_item_bottom">
					求职意向
				</view>
			</view>
			<view class="my_zhiwei_item hei_24" @click="tiaozhuan('liaotian_shezhi')">
				<image src="../../static/index_img/my_top3.png" mode="" style="width: 70rpx;height: 78rpx;"></image>
				<view class="my_zhiwei_item_bottom">
					隐私设置
				</view>
				
			</view>
			<view class="my_zhiwei_item hei_24" @click="tiaozhuan('zhuye')">
				<image src="../../static/index_img/my_top4.png" mode=""style="width: 68rpx;height: 72rpx;"></image>
				<view class="my_zhiwei_item_bottom">
					个人主页
				</view>
				
			</view>
		</view>
		
		<view class="my_caozuo">
			<view class="my_caozuo_item" @click="tiaozhuan('search')">
				<image src="../../static/index_img/my_shuaxin.png" mode="" style="width: 45rpx;height: 52rpx;"></image>
				<view class="my_caozuo_item_right">
					<view class="hei_26_bold ">
						简历刷新
					</view>
					<view class="qian_22 my_caozuo_item_title">
						提升简历的活跃度
					</view>
				</view>
			</view>
			<view class="my_caozuo_item" @click="tiaozhuan('zhiding')">
				<image src="../../static/index_img/my_jingzheng.png" mode=""style="width: 56rpx;height: 52rpx;"></image>
				<view class="my_caozuo_item_right">
					<view class="hei_26_bold ">
						竞争力分析
					</view>
					<view class="qian_22 my_caozuo_item_title">
						了解行业的竞争
					</view>
				</view>
			</view>
		</view>
				
           <view class="my_guanli">
					<view class="my_title hei_30_bold">面试管理</view>
					<view class="my_list">
						<navigator url="geren_xinxi" class="zhanghao_item">
							<image src="../../static/index_img/my_mianshi1.png" mode=""  ></image>
							
							<view class="hui_24 ">我的消息</view>
						</navigator>
						<view class="zhanghao_item" >
							<image src="../../static/index_img/my_mianshi2.png" mode="" ></image>
							
							<view class="hui_24 ">面试记录</view>
						</view>
						<view class="zhanghao_item" >
							<image src="../../static/index_img/my_mianshi3.png" mode=""  ></image>
							
							<view class="hui_24 ">浏览记录</view>
						</view>
						<view class="zhanghao_item" @click="tiaozhuan('huan_shenfen')">
							<image src="../../static/index_img/my_mianshi4.png" mode=""  ></image>
							
							<view class="hui_24 ">切换身份</view>
						</view>
					</view>
				</view>
					
				<view class=" zhanghao_guanli">
					<view class="my_title hei_30_bold">账号中心</view>
					<view class="my_list">
						<navigator url="geren_xinxi" class="zhanghao_item" @click="tiaozhuan('geren')">
							<image src="../../static/index_img/my_zhanghu1.png" mode="" style="width: 34rpx;height: 38rpx;"></image>
							<view class="hui_24 ">个人信息</view>
						</navigator>
						<view class="zhanghao_item" >
							<image src="../../static/index_img/my_zhanghu2.png" mode="" style="width: 38rpx;height: 36rpx;"></image>
							<view class="hui_24 ">实名认证</view>
						</view>
						<view class="zhanghao_item" >
							<image src="../../static/index_img/my_zhanghu3.png" mode="" style="width: 37rpx;height: 37rpx;"></image>
							<view class="hui_24 ">我的钱包</view>
						</view>
						<view class="zhanghao_item">
							<image src="../../static/index_img/my_zhanghu4.png" mode="" style="width:33rpx;height:37rpx;"></image>
							<view class="hui_24 ">修改密码</view>
						</view>
					</view>
				</view>
				<view class="my_guanli tuiguang_guanli">
					<view class="my_title hei_30_bold">推广管理</view>
					<view class="my_list">
						<navigator url="geren_xinxi" class="zhanghao_item" @click="tiaozhuan('geren')">
							<image src="../../static/index_img/tuiguang1.png" mode=""></image>
							<view class="hui_24 ">邀请好友</view>
						</navigator>
						<view class="zhanghao_item" >
							<image src="../../static/index_img/tuiguang2.png" mode="" ></image>
							<view class="hui_24 ">我的奖励</view>
						</view>
						<view class="zhanghao_item" >
							<image src="../../static/index_img/tuiguang3.png" mode="" ></image>
							<view class="hui_24 ">我的团队</view>
						</view>
						<view class="zhanghao_item">
							<image src="../../static/index_img/tuiguang4.png" mode="" ></image>
							<view class="hui_24 ">APP下载</view>
						</view>
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
			
		};
	},
	onLoad() {},
	methods: {
		tiaozhuan(url){
			uni.navigateTo({
				url:url
			})
		},
		
	}
};
</script>

<style>

page {
	/* background-color: #f7f7f7; */
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
	background-color: #00C6C9;
}
.my_top {
	display: flex;
	justify-content: space-between;
	padding: 30rpx 30rpx 40rpx;
	align-items: center;
	
}



.my_top_left_r {
	padding-top: 10rpx;
}

.my_name {

	margin-bottom: 10rpx;
}
.my_name image{
		width: 28rpx;
		height: 22rpx;
		margin-right: 10rpx;
}
.my_name_jianli{
	margin-top: 20rpx;
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
		width: 110rpx;
		height: 110rpx;
		position: relative;
		border: 100%;
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
	padding-bottom: 40rpx;
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
	margin-bottom: 30rpx;
		box-shadow: 0px 0px 16px 0px 
			rgba(158, 158, 158, 0.18);
		border-radius: 10px;
}


.my_list {
	display: flex;
	/* flex-wrap: wrap; */
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
		box-shadow: 0rpx 0rpx 16rpx 0rpx 
			rgba(158, 158, 158, 0.18);
		border-radius: 10rpx;
		
		padding: 0 30rpx 40rpx;
		
}
	

.zhanghao_guanli image{
	margin-bottom: 20rpx;
	
}

.my_guanli image{
		width: 74rpx;
		height: 74rpx;
	vertical-align: bottom;
	margin-bottom: 20rpx;
	 
}
.zhanghao_item {
	width: 25%;
	text-align: center;
}


	
.tx{
	width: 100%;
	height: 100%;
	border-radius: 100%;
}
.xingbie{
	position: absolute;
			width: 24rpx;
			height: 24rpx;
		right: 0;
		top: 0;
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



.tongzhi{
	text-align: center;
	padding: 0 30rpx;

}
.tongzhi image{
	width: 100%;
	height: 70rpx;
	position: relative;
	bottom: -8rpx;
}
.my_zhiwei{
	display: flex;
	margin: 40rpx 0 30rpx;
	justify-content: space-between;
}
.my_zhiwei_item{
	text-align: center;
	width: 98rpx;
	position: relative;
	height: 130rpx;
}
.my_zhiwei_item_bottom{
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 100%;
	transform: translate(-50%,0);
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
.tuiguang_guanli{
	margin-bottom: 30rpx;
	background-color: #ffffff;
		box-shadow: 0rpx 0rpx 16rpx 0rpx 
			rgba(158, 158, 158, 0.18);
		border-radius: 10rpx;
}
.tuiguang_guanli image{
	width: 78rpx;
		height: 79rpx;
		margin-bottom: 20rpx;
}
</style>
