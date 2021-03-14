<template>
	<view class="body">
		<view class="zhuye_body">
			<zhuyetop></zhuyetop>

			<view class="zhuye_tab qian_30">
				<text class="zhuye_tab_active">个人信息</text>
				<text>职位</text>
				<text>动态</text>
			</view>
			<view class="zhuye_xinxi_body" style="padding-bottom: 1000px;">
<view class="padding">
	

				<view class="xinxi_title hei_30_bold">个人标签</view>
				<view class="bianqian">
					<!-- <text>1111</text> -->
					<view class="lan_24 chiangjian_biaoqian">+创建标签</view>
				</view>
				<view class="xinxi_title hei_30_bold">
					<text>工作经历</text>
					<image src="../../static/qy_img/zhuye_jia.png" mode="" class="zhuye_jia"></image>
				</view>
				</view>
				<view class="xinxi_gonzuo">
					<view class="xinxi_gonzuo_title lan_26">
						<text>50位招聘者想看你的在职工作体验</text>
						<text class="bai_22 gongzuo_tianxie">去填写</text>
					</view>
				</view>
				<view class="padding">
					
				<view clas s="xinxi_gongzuo_list">
					<view class="xinxi_gongzuo_item">
						<image src="../../static/qy_img/zhuye_gongsi.png" mode="" class="zhuye_gongsi"></image>
						<view class="xinxi_gongzuo_item_left">
							<view class="xinxi_gongzuo_item_left_r">
								<view class="xinxi_gongzuo_item_left_r_name">
									<text class="hei_30_bold xinxi_jingli_gongsi">杭州红盟网络科技有限公司</text> 
									<text class="jingli_zhuangtai lan_20">在职</text>
								</view>
								<view class="hui_26">
									招聘者
								</view>
							</view>
						<image src="../../static/qy_img/hei_right.png" mode="" class="go_r" ></image>
						</view>
					</view>
				</view>	
				
				<view class="xinxi_add">
					<view class="xinxi_add_left">
						<view class="hei_30_bold">
							添加工作经历
						</view>
						<view class="hei_26 xinxi_add_txt">
							让大家更快认识你
						</view>
						<image src="../../static/qy_img/zhuye_jia.png" mode="" class="zhuye_jia"></image>
					</view>
					<view class="xinxi_add_right">
						<image src="../../static/qy_img/add_gongzuo.png" mode="widthFix"></image>
					</view>
				</view>	
				
				<view class="xinxi_jiaoyu">
					<view class="xinxi_title hei_30_bold">
						<text>教育经历</text>
						<image src="../../static/qy_img/zhuye_jia.png" mode="" class="zhuye_jia"></image>
					</view>
				</view>
				<view class="xinxi_huoban">
					<view class="xinxi_title hei_30_bold">
						<text>工作伙伴</text>
						<image src="../../static/qy_img/zhuye_jia.png" mode="" class="zhuye_jia"></image>
					</view>
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
		return {};
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
		}
	}
};
</script>

<style>
.head {
	background-color: #ffffff;
	border-bottom: 2rpx solid #f5f5f5;
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
	
.padding{
	padding: 0 30rpx;
}
.xinxi_add_right image{
	width: 294rpx;
		height: 195rpx;
}
.xinxi_add{
	height: 250rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 0rpx 7rpx 0rpx 
			rgba(0, 0, 0, 0.17);
		border-radius: 10rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 17rpx 0 50rpx;
		margin-bottom: 35rpx;
}
.xinxi_add_txt{
	margin: 20rpx 0 20rpx;
}
.go_r{
		width: 11rpx;
		height: 21rpx;
		position: relative;
		top: 10rpx;
}
.xinxi_gongzuo_item{
	display: flex;
	align-items: flex-start;
	margin: 30rpx 0;
}
.xinxi_jiaoyu{
	border-top: 2rpx solid #dedede;
	border-bottom: 2rpx solid #dedede;
}
	.xinxi_gongzuo_item_left{
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		width: 84%;
	}
	.xinxi_gongzuo_item_left image{
		vertical-align: text-top;
	}
	.xinxi_gongzuo_item_left_r_name{
		margin-bottom: 4rpx;
		display: flex;
		align-items: center;
	}
.zhuye_gongsi{
		width: 80rpx;
		height: 80rpx;
		background-color: #f5f5f5;
		border-radius: 10rpx;
		margin-right: 30rpx;

}
.xinxi_jingli_gongsi{
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 230rpx;
	display: inline-block;
}
.jingli_zhuangtai{
		height: 30rpx;
		background-color: #edffff;
		border-radius: 5rpx;
		line-height: 30rpx;
		margin-left: 4rpx;
		padding: 0 8rpx;
}
</style>
