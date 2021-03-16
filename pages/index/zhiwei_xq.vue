<template>
	<view class="body">
		<view class="head">
			<view class="head_back hei_38_bold"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image>公司详情</view>
			<view class="head_center hei_38_bold"></view>
			<view class=" head_right hei_30_bold"><image src="../../static/qy_img/fenxiang.png" mode="" style="width: 34rpx;height: 36rpx;"></image></view>
		</view>

		<view class="zi_body">
			<view class="gongsi_zhiwei_body">
				
			
			<view class="gongsi_zhiwei">
				<view class="gongsi_zhiwei_top">
					<text class="hei_38_bold">web前端工程师</text>
					<text class="lan_30">10-15K</text>
				</view>
				<view class="gongsi_zhiwei_bottom hei_26">
					<text ><image src="../../static/qy_img/gongsi_dizhi.png" mode=""style="width: 22rpx;height: 26rpx;"></image>杭州 长河</text>
					<text ><image src="../../static/qy_img/xueli.png" mode="" style="width: 29rpx;height: 24rpx;"></image>本科</text>
					<text ><image src="../../static/qy_img/nianxian.png" mode=""style="width: 26rpx;height: 24rpx;"></image>3-5年</text>
				</view>
			</view>
			<view class="quanyi">
				<image src="../../static/qy_img/gongsi_xing.png" mode=""></image>
				<view class="quanyi_right">
					<view class="hei_26_bold quanyi_right_title">
						普通职位 招聘中
					</view>
					<view class="qian_22">
						平台赠送基础权益发布，当前科免费开放
					</view>
				</view>
			</view>
			
			<view class="zhiwei_xq">
				<view class="zhiwei_xq_title hei_34_bold">
					职位详情
				</view>
				<view class="zhiwei_txt hui_24">
					<text>前端开发</text><text>后端开发</text>
				</view>
				<view class="zhiwei_yaoqiu hui_26">
					<view class="">1.3年以上相关工作经验</view>
					<view class="">2.熟练掌握Vue、React其中之一,有webApp开发经验</view>
					<view class="">3.有Nodejs服务端开发经验</view>
					<view class="">4.有个人博客/网站,并在GitHub、Stack Overflow等开源社区</view>
					<view class="">5.精通react、redux，或Vue、NodeJs等主流框架进行SPA</view>
				</view>
			</view>
			
			<view class="shu_gongsi">
				<view class="shu_gongsi_title hei_34_bold">
					所属公司
				</view>
				<view class="shu_gongsi_body">
					<image src="../../static/qy_img/gongsi.png" mode=""></image>
					<view class="shu_gongsi_body_right">
						<view class="hei_30 gongsi_name">
							杭州小马科技股份有限公司
						</view>
						<view class="hei_26">
							<text class="guimo">100~500人</text>   电子商务
						</view>
					</view>
				</view>
			</view>
			
			<view class="dizhi_title hei_34_bold">
				工作地址
			</view>
			<view class="dizhi_body">
				
				<view class="dizhi_map">
					<image src="../../static/qy_img/ditu.png" mode=""></image>
				</view>
				<view class="dizhi_txt">
					<view class="hei_28_bold">
						工作地点
					</view>
					<view class="dizhi_txt_dizhi hei_24">
						<text>杭州市江干区剧院路358-396号宏程国际...</text>
						<image src="../../static/qy_img/go_right.png" mode=""></image>
					</view>
					<view class="ditie qian_24">
						<image src="../../static/qy_img/ditie.png" mode=""></image>距离二号线江津路550米
					</view>
				</view>
			</view>
			
			</view>
			
			
			<view class="gongsi_bottom">
				<button type="" class="lan_30 bianji" >编辑</button>
				<button type="" class="bai_30 guanbi">关闭职位</button>
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
		navigateBack() {
			uni.navigateBack()
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
	padding-top: 100rpx;
	
}
.head_back{
	display: flex;
	align-items: center;
}
.head_back image{
	margin-right: 30rpx;
}
.gongsi_zhiwei_body{
	padding: 0 30rpx 180rpx;
}
.quanyi{
	padding: 36rpx 0 32rpx 29rpx;
	display: flex;
	align-items: center;
		box-shadow: 0rpx 0rpx 13rpx 0rpx 
			rgba(198, 198, 198, 0.26);
		border-radius: 10px;
		margin: 54rpx 0 70rpx;
}
.quanyi image{
	width: 52rpx;
		height: 56rpx;
		margin-right: 24rpx;
		
}
.quanyi_right_title{
	margin-bottom: 10rpx;
}
.gongsi_zhiwei{
	margin-top: 30rpx;
}
.gongsi_zhiwei_top{
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin-bottom: 20rpx;
}
.gongsi_zhiwei_bottom{
	display: flex;
	align-items: center;
	
}
.gongsi_zhiwei_bottom text{
	margin-right: 78rpx;
	display: flex;
	align-items: center;
}
.gongsi_zhiwei_bottom text image{
	margin-right: 10rpx;
}
.zhiwei_txt{
	display: flex;
	flex-wrap: wrap;
	margin-top: 30rpx;
	margin-bottom: 14rpx;
}
.zhiwei_txt text{
	display: inline-block;
	margin-right: 16rpx;
		height: 44rpx;
		background-color: #f6f6f6;
		border-radius: 5rpx;
		line-height: 44rpx;
		padding: 0 18rpx;
		margin-bottom: 10rpx;
}
.zhiwei_yaoqiu view{
	margin-bottom: 10rpx;
	line-height: 40rpx;
}
.shu_gongsi_body{
	display: flex;
	align-items: center;
	margin: 30rpx 0 70rpx;
	
}
.gongsi_name{
	margin-bottom: 10rpx;
}
.shu_gongsi_body image{
		width: 84rpx;
		height: 84rpx;
		border-radius: 5rpx;
		margin-right: 26rpx;
}
.shu_gongsi{
	margin-top: 60rpx;
}
.dizhi_body{
	height: 427rpx;
		
		border-radius: 10rpx;
		position: relative;
		margin-bottom: 20rpx;
		position: relative;
		margin-top: 40rpx;
}
.dizhi_map{
	width: 100%;
	height: 100%;
}
.dizhi_map image{
	width: 100% ;
	height: 100%;
}
.dizhi_txt{
		width: 581rpx;
		height: 212rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 0rpx 7rpx 0rpx 
			rgba(0, 157, 159, 0.36);
			border-radius: 10rpx;
			position: absolute;
			bottom: 136rpx;
			left: 50%;
			transform: translate(-50%,0);
			padding:30rpx ;
			box-sizing: border-box;
			
}
.dizhi_txt::before{
	content: '';
	display: inline-block;
	width: 20rpx;
	height: 20rpx;
	background-color: #FFFFFF;
	position: absolute;
	bottom: -10rpx;
	left: 48%;
	transform: translate(-50%,0);
	transform: rotate(45deg);
}
.ditie{
	display: flex;
	align-items: center;
	
}
.ditie image{
	width: 28rpx;
		height: 28rpx;
		margin-right: 14rpx;
}
.dizhi_txt_dizhi{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 12rpx 0 20rpx;
}
.dizhi_txt_dizhi image{
	width: 12rpx;
		height: 22rpx;
}
.dizhi_txt_dizhi text{
	max-width: 90%;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.gongsi_bottom{
	height: 180rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	bottom: 0;
	width: 100%;
	background-color: #FFFFFF;
}
.gongsi_bottom button{
		height: 80rpx;
		
		border-radius: 10rpx;
		line-height: 80rpx;
		box-sizing: border-box;
}
.bianji{
	width: 20%;
		border: solid 1rpx #aaddde;
		background-color: #FFFFFF;
}
.guanbi{
	width: 68%;
		background-color: #00c6c9;
}
.guimo {
	margin-right: 30rpx;
	position: relative;
}
.guimo::before {
	content: '';
	display: inline-block;
	width: 6rpx;
	height: 6rpx;
	background-color: #666666;
	position: absolute;
	top: 14rpx;
	right: -16rpx;
	border-radius: 100%;
}

</style>
