<template>
	<view class="body">
		<view class="zhuye_body">
			<view class="zhuye_body_top">
				<view class="zhuye_top_body">
					<view class="zhuye_top_caozuo">
						<image src="../../static/qy_img/bai_back.png" mode="" style="width: 22rpx;height: 41rpx;" @click="navigateBack()"></image> 
						<image src="../../static/qy_img/bai_fenxiang.png" mode="" style="width:35rpx;height: 36rpx;"></image>
					</view>
					<view class="zhuye_top_tx">
						<image src="../../static/index_img/hr.png" mode=""></image>
						<view class="bianji bai_22">
							+ 关注
						</view>
					</view>
					<view class="zhuye_top_name bai_30_bold">
						张女士
					</view>
					<view class="zhuye_top_gongsi bai_24">
						<view class="zhuye_top_gongsi_left">
							大明食品
						</view>  <text></text>
						  招聘者
					</view>
					<view class="zhuye_top_guanzhu bai_26">
						<view class="zhuye_top_guanzhu_item">
							<text>0</text>ta关注
						</view>
						<view class="zhuye_top_guanzhu_item">
							<text>0</text>关注ta
						</view>
						<view class="zhuye_top_guanzhu_item">
							<text>0</text>赞
						</view>
					</view>
				</view>
			</view>

			<view class="zhuye_tab qian_30">
				<text :class="['', tab_active == 1 ? 'zhuye_tab_active' : '']" @click="qiehuan(1)">个人信息</text>
				<text :class="['', tab_active == 2 ? 'zhuye_tab_active' : '']" @click="qiehuan(2)">职位</text>
				<text :class="['', tab_active == 3 ? 'zhuye_tab_active' : '']" @click="qiehuan(3)">动态</text>
			</view>

			<!-- 主页信息 -->
			<view class="zhuye_xinxi_body" v-if="tab_active == 1">
				
				
				<view class="padding">
					<view class="xinxi_title hei_30_bold">
						<text>工作经历</text>
						
					</view>
					<view class="xinxi_gongzuo_list">
						<view class="xinxi_gongzuo_item">
							<image src="../../static/qy_img/zhuye_gongsi.png" mode="" class="zhuye_gongsi"></image>
							<view class="xinxi_gongzuo_item_left">
								<view class="xinxi_gongzuo_item_left_r">
									<view class="xinxi_gongzuo_item_left_r_name">
										<text class="hei_30_bold xinxi_jingli_gongsi">大明食品</text>
										<text class="jingli_zhuangtai lan_20">在职</text>
									</view>
									<view class="hui_26">产品经理</view>
								</view>
								
							</view>
						</view>
					</view>

				

				
					<view class="xinxi_huoban">
						<view class="xinxi_title hei_30_bold">
							<text>工作伙伴</text>
						</view>
						
						<view class="no_huoban qian_26">
							<view class="xiangkan hei_30_bold">
								<image src="../../static/index_img/xiangkan.png" mode=""></image>想看
							</view>
							<view class="no_huoban_txt ">
								他还没有填写工作伙伴
							</view>
							<view class="">
								点击[想看]邀请招聘者来完善吧
							</view>
						</view>
					</view>

					
				</view>
			</view>

			<!-- 主页职位 -->
			<view class="zhuye_zhiwei" v-if="tab_active == 2">
				<view class="zhiwei_list">
					<view class="zhiwei_item" v-for="item in 5">
						<view class="zhiwei_item_top">
							<view class="zhiwei_name hei_30_bold"><text>PHP开发工程师</text><text class="lan_32">11-20K</text></view>
							<view class="zhiwei_yaoqiu qian_26">
								<text>1-3年</text>
								<text>大专</text>
								<text>系统集成</text>
								<text>政府项目</text>
								<text>智慧城市</text>
							</view>
						</view>
					
					</view>
				</view>
			</view>

			<!-- 主页动态 -->
			<view class="zhuye_dongtai" v-if="tab_active == 3">
				<!-- <view class="dongtai_list">
					<view class="dongtai_item" v-for="item in 5">
						<view class="dongtai_item_top">
							<image src="../../static/qy_img/tx.png" mode=""></image>
							<view class="dongtai_item_top_right">
								<view class="hei_24 dongtai_item_top_name">
									高女士
									<text class="dongtai_yuandian"></text>
									HR
								</view>
								<view class="qian_20">2021年02月04日 15:20</view>
							</view>
						</view>
						<view class="dongtai_item_bottom hei_30_bold">
							发布了一条
							<text class="lan_30_bold">PHP开发工程师</text>
							的招聘信息
						</view>
					</view>
				</view> -->
				<view class="no_dongtai">
					<image src="../../static/index_img/no_dongtai.png" mode="widthFix"></image>
					<view class="qian_30">
						暂无发布内容~
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import zhuyetop from '@/components/zhuye_top/zhuye_top.vue';
export default {
	components: {
		zhuyetop
	},
	data() {
		return {
			tab_active: 2
		};
	},
	// onPageScroll(e){

	//     if(e.scrollTop>100){
	// 		console.log('11')
	// 	}

	//     },
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		qiehuan(index) {
			this.tab_active = index;
		}
	}
};
</script>

<style>
.head {
	background-color: #ffffff;
	border-bottom: 2rpx solid #f5f5f5;
}

.zhuye_body_top{
		height: 515rpx;
		background: url(../../static/qy_img/zhuye_bg.png) no-repeat;
		background-size: 100% 100%;
		position: relative;
}
.zhuye_top_body{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.6);
}
.zhuye_top_caozuo{
	justify-content: space-between;
	display: flex;
	align-items: center;
	height: 150rpx;
}
.zhuye_top_body{
	padding:  0 30rpx;
	box-sizing: border-box;
}
.zhuye_top_tx{
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	margin-bottom: 30rpx;
}
.zhuye_top_tx image{
		width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
}
.zhuye_top_tx .bianji{
		width: 168rpx;
		height: 46rpx;
		border-radius: 23rpx;
		border: solid 1rpx #ffffff;
		line-height: 46rpx;
		text-align: center;
}
.zhuye_top_gongsi{
	display: flex;
	align-items: center;
	margin: 27rpx 0 46rpx;
	}
	.zhuye_top_gongsi text{
		width: 2rpx;
		height: 22rpx;
		display: inline-block;
		background-color: #FFFFFF;
		margin: 0 16rpx 0 10rpx;
	}
	.zhuye_top_gongsi_left{
		
		position: relative;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		max-width: 200rpx;
		}
.zhuye_top_guanzhu{
	display: flex;
	align-items: center;
}
.zhuye_top_guanzhu_item{
	margin-right: 63rpx;
}
.zhuye_top_guanzhu_item text{
	margin-right: 20rpx;
}
.zhuye_tab {
	display: flex;
	justify-content: space-between;
	height: 90rpx;
	align-items: center;
	border-bottom: 2rpx solid #f2f2f2;
	line-height: 90rpx;
}
.zhuye_tab text {
	width: 33.33%;
	text-align: center;
	height: 100%;
}
.zhuye_tab_active {
	color: #00c6c9;
	font-weight: bold;
	position: relative;
}
.zhuye_tab_active::before {
	content: '';
	width: 31rpx;
	height: 4rpx;
	background-color: #00c6c9;
	border-radius: 2rpx;
	display: inline-block;
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0);
}
.xinxi_title {
	line-height: 106rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.zhuye_xinxi_body {
}
.bianqian {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	border-bottom: 2rpx solid #dedede;
	padding-bottom: 30rpx;
}
.bianqian text {
	width: 144rpx;
	border-radius: 5rpx;
	display: inline-block;
	height: 48rpx;
	line-height: 48rpx;
	text-align: center;
	border: solid 2rpx #666;
	box-sizing: border-box;
	margin: 0 20rpx 10rpx 0;
}
.chiangjian_biaoqian {
	width: 144rpx;
	border-radius: 5rpx;
	display: inline-block;
	height: 48rpx;
	line-height: 48rpx;
	box-sizing: border-box;
	justify-content: center;
	display: flex;
	margin-bottom: 10rpx;
	align-items: center;
	background-color: #ffffff;
	border: solid 2rpx #00c6c9 !important;
}
.zhuye_jia {
	width: 38rpx;
	height: 38rpx;
}
.xinxi_gonzuo_title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #edffff;
	height: 62rpx;
	padding: 0 30rpx;
}
.gongzuo_tianxie {
	height: 40rpx;
	background-color: #00c6c9;
	border-radius: 20rpx;
	line-height: 40rpx;
	display: inline-block;
	padding: 0 14rpx;
}

.padding {
	padding: 0 30rpx;
}
.xinxi_add_right image {
	width: 294rpx;
	height: 195rpx;
}
.xinxi_add {
	height: 250rpx;
	background-color: #ffffff;
	box-shadow: 0rpx 0rpx 7rpx 0rpx rgba(0, 0, 0, 0.17);
	border-radius: 10rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 17rpx 0 50rpx;
	margin-bottom: 35rpx;
}
.xinxi_add_txt {
	margin: 30rpx 0;
}
.go_r {
	width: 11rpx;
	height: 21rpx;
	position: relative;
	top: 10rpx;
}
.xinxi_gongzuo_list{
	border-bottom: 2rpx solid #F2F2F2;
}
.xinxi_gongzuo_item {
	display: flex;
	align-items: flex-start;
	margin: 30rpx 0;
}
.xinxi_jiaoyu {
	border-top: 2rpx solid #dedede;
	border-bottom: 2rpx solid #dedede;
}
.xinxi_gongzuo_item_left {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	width: 84%;
}
.xinxi_gongzuo_item_left image {
	vertical-align: text-top;
}
.xinxi_gongzuo_item_left_r_name {
	margin-bottom: 4rpx;
	display: flex;
	align-items: center;
}
.zhuye_gongsi {
	width: 80rpx;
	height: 80rpx;
	background-color: #f5f5f5;
	border-radius: 10rpx;
	margin-right: 30rpx;
}
.xinxi_jingli_gongsi {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 230rpx;
	display: inline-block;
}
.jingli_zhuangtai {
	height: 30rpx;
	background-color: #edffff;
	border-radius: 5rpx;
	line-height: 30rpx;
	margin-left: 4rpx;
	padding: 0 8rpx;
}
.zhuye_bottom_list:first-child {
	border-top: 2rpx solid #dedede;
}
.zhuye_bottom_list {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 106rpx;
	border-bottom: 2rpx solid #dedede;
}
.zhuye_bottom_list image {
	width: 35rpx;
	height: 36rpx;
}
/* 职位信息 */
.zhiwei_item {
	padding: 0 30rpx;
	
}
.zhiwei_item_bottom {
	height: 74rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-top: 2rpx solid #f3f3f3;
}

.zhiwei_item_bottom_left image {
	width: 50rpx;
	height: 50rpx;
	border-radius: 100%;
	margin-right: 10rpx;
	vertical-align: middle;
}
.zhiwei_item_top {
	padding: 30rpx 0;
}
.zhiwei_name {
	margin-bottom: 10rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.zhiwei_yaoqiu text {
	margin-right: 20rpx;
	position: relative;
}
.zhiwei_yaoqiu text::before{
	content: '';
	display: inline-block;
	width: 4rpx;
	height: 4rpx;
	border-radius: 100%;
	background-color: #666666;
	position: absolute;
	top: 16rpx;
  right: -10rpx;
}
.zhiwei_yaoqiu text:last-child::before{
	content: none;
}
.yuandian {
	display: inline-block;
	width: 4rpx;
	height: 4rpx;
	background-color: #999;
	border-radius: 100%;
	vertical-align: middle;
	margin-left: 6rpx;
}
.zhiwei_item_bottom_left .yuandian {
	margin: 0 10rpx;
}
/* 主页动态 */
.dongtai_item_top {
	display: flex;
	align-items: center;
}
.dongtai_item_top_name {
	margin-bottom: 6rpx;
}
.dongtai_item {
	padding: 0 30rpx;
	border-bottom: 20rpx solid #f8f8f8;
}
.dongtai_item_top {
	padding: 20rpx 0 0rpx;
}
.dongtai_item_top image {
	width: 50rpx;
	height: 50rpx;
	border-radius: 100%;
	margin-right: 10rpx;
}
.dongtai_item_bottom {
	line-height: 88rpx;
}
.dongtai_yuandian {
	display: inline-block;
	width: 4rpx;
	height: 4rpx;
	background-color: #999;
	border-radius: 100%;
	vertical-align: middle;
	margin: 0 10rpx;
}
.no_huoban{
	text-align: center;
	margin-top: 50rpx;
}
.xiangkan image{
			width: 33rpx;
			height: 33rpx;
			vertical-align: middle;
		margin-right: 8rpx;
}
.no_huoban_txt{
	margin: 30rpx 0 6rpx;
}
.no_dongtai{
	text-align: center;
}
.no_dongtai image{
		width: 366rpx;
		height: 199rpx;
		margin:106rpx 0 60rpx ;
}
</style>
