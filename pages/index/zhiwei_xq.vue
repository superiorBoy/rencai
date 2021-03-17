<template>
	<view class="body">
		<view class="head">
			<view class="head_back hei_38_bold">
				<image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image>
				职位详情
			</view>
			<view class="head_center hei_38_bold"></view>
			<view class=" head_right hei_30_bold">
				<image src="../../static/qy_img/shoucang.png" mode="" class="shoucang"></image>
				<image src="../../static/qy_img/fenxiang.png" mode="" style="width: 34rpx;height: 36rpx;"></image>
			</view>
		</view>

		<view class="zi_body">
			<view class="gongsi_zhiwei_body">
				<view class="gongsi_zhiwei">
					<view class="gongsi_zhiwei_top">
						<text class="hei_38_bold">web前端工程师</text>
						<text class="lan_30">10-15K</text>
					</view>
					<view class="gongsi_zhiwei_bottom hei_26">
						<text>
							<image src="../../static/qy_img/gongsi_dizhi.png" mode="" style="width: 22rpx;height: 26rpx;"></image>
							杭州
						</text>
						<text>
							<image src="../../static/qy_img/nianxian.png" mode="" style="width: 26rpx;height: 24rpx;"></image>
							3-5年
						</text>
						<text>
							<image src="../../static/qy_img/xueli.png" mode="" style="width: 29rpx;height: 24rpx;"></image>
							本科
						</text>
					
					</view>
				</view>
				<navigator url="zhiwei_xq_tx" class="zhiwei_hr">

					<view class="zhiwei_hr_left">
					<image src="../../static/index_img/hr_tx.png" mode=""></image>
					<view class="zhiwei_hr_right">
						<view class="zhiwei_hr_right_top"><text class="hei_30_bold">李胜贤</text><text class="qian_26">一个小时前活跃</text></view>
						<view class="qian_22 zhiwei_hr_right_bottom"> 聚光科技 <text></text>  HR</view>
					</view>
					</view>
					<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
					
              </navigator>
				<view class="zhiwei_xq">
					<view class="zhiwei_xq_title hei_34_bold">职位详情</view>
					<view class="zhiwei_txt hui_24">
						<text>需求分析</text><text>后端</text><text>用户研究</text><text>Nodejs</text>
						<text>ES规范</text><text>前端框架</text><text>混合架构</text><text>小程序</text>
						<text>移动端</text><text>Vuex框架</text>
					</view>
					<view class="miaoshu hei_28">
						职位描述
					</view>
					<view class="zhiwei_yaoqiu hui_26">
						
						<view class="">1、负责电商业务H5、小程序、Web、Node等前端开发工作</view>
						<view class="">2、参与前端组件库、多端异构、脚手架等基础设施建设</view>
						<view class="">3、参与前端页面性能优化、体验优化、稳定性建设；</view>
						<view class="">4、参与新技术探索、推进系统架构的演化。</view>
					</view>
				</view>

				<view class="shu_gongsi">
					
					<view class="shu_gongsi_body">
						<image src="../../static/qy_img/gongsi.png" mode=""></image>
						<view class="shu_gongsi_body_right">
							<view class="hei_30 gongsi_name">杭州小马科技股份有限公司</view>
							<view class="hei_26">
								<text class="guimo">100~500人</text>
								电子商务
							</view>
						</view>
					</view>
					<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>

				 
				<view class="dizhi_body">
					<view class="dizhi_map"><image src="../../static/qy_img/ditu.png" mode=""></image></view>
					<view class="dizhi_txt hei_24">
						
						杭州市江干区宏程国际大厦1203-3室
						
						
					</view>
				</view>
				<view class="tishi">
					<view class="hong_28 tishi_title">
						<image src="../../static/index_img/jinggao.png" mode=""></image>温馨提示
					</view>
					<view class="tishi_txt hei_26">
						该网站承诺名下所有职位不向您收费，如有不实，请立即举报。
					</view>
				</view>
				<view class="jingzheng">
					<view class="jingzheng_title">
						<text class="hei_34_bold">你的竞争力分析</text>
						<view class="jingzheng_title_right qian_26">
							使用竞争力分析器 <image src="../../static/qy_img/go_right.png" mode=""></image>
						</view>
					</view>
					<view class="jingzheng_body hei_28">
						三个月内共  <image src="../../static/index_img/mohu.png" mode="" class="mohu"></image>   位招聘者沟通，你的竞争力排名第<image src="../../static/index_img/mohu.png" mode="" class="mohu"></image>  位你处在<image src="../../static/index_img/mohu.png" mode="" class="mohu"></image> 位置
					</view>
					<view class="jingzheng_img">
						<image src="../../static/index_img/jingzheng_img.png" mode=""></image>
						<view class="jingzheng_img_bottom qian_24">
							<text>一般</text><text>良好</text><text>优秀</text><text>极好</text>
						</view>
					</view>
				</view>
			</view>

			<view class="gongsi_bottom">
				
				<button type="" class="bai_30 goutong">立即沟通</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
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
.zi_body {
	padding-top: 100rpx;
}
.head_back {
	display: flex;
	align-items: center;
}
.head_back image {
	margin-right: 30rpx;
}
.gongsi_zhiwei_body {
	padding: 0 30rpx 180rpx;
}

.shoucang {
	width: 38rpx;
	height: 38rpx;
	margin-right: 30rpx;
}
.zhiwei_hr{
	display: flex;
	align-items: center;
	height: 180rpx;
	border-top: 2rpx solid #e9e9e9;
	border-bottom: 2rpx solid #e9e9e9;
	margin: 40rpx 0 40rpx;
	justify-content: space-between;
}
.zhiwei_hr_left{
	display: flex;
	align-items: center;
}
.zhiwei_hr_left image{
	width: 96rpx;
		height: 96rpx;
		border-radius: 100%;
		margin-right: 30rpx;
}
.zhiwei_hr_right_top{
	margin-bottom: 15rpx;
}
	
.zhiwei_hr_right_top text{
	margin-right: 32rpx;
}
.zhiwei_hr_right_bottom{
	display: flex;
	align-items: center;
}
.zhiwei_hr_right_bottom text{
	display: inline-block;
		width: 6rpx;
		height: 6rpx;
		background-color: #666666;
		border-radius: 100%;
		margin: 0 10rpx;
		
}
.go_right{
		width: 11rpx;
		height: 20rpx;
}

.gongsi_zhiwei {
	margin-top: 30rpx;
}
.gongsi_zhiwei_top {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin-bottom: 20rpx;
}
.gongsi_zhiwei_bottom {
	display: flex;
	align-items: center;
}
.gongsi_zhiwei_bottom text {
	margin-right: 78rpx;
	display: flex;
	align-items: center;
}
.gongsi_zhiwei_bottom text image {
	margin-right: 10rpx;
}
.zhiwei_txt {
	display: flex;
	flex-wrap: wrap;
	margin-top: 30rpx;
	margin-bottom: 14rpx;
}
.miaoshu{
	margin: 20rpx 0;
}
.zhiwei_txt text {
	display: inline-block;
	margin-right: 20rpx;
	height: 44rpx;
	background-color: #f6f6f6;
	border-radius: 5rpx;
	line-height: 44rpx;
	padding: 0 18rpx;
	margin-bottom: 20rpx;
}
.zhiwei_yaoqiu{
	padding: 0 0 30rpx;
	border-bottom: 2rpx solid #e9e9e9;
}
.zhiwei_yaoqiu view {
	margin-bottom: 10rpx;
	line-height: 40rpx;
}
.shu_gongsi{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 35rpx 0 45rpx;
}
.shu_gongsi_body {
	display: flex;
	align-items: center;
	
}
.gongsi_name {
	margin-bottom: 10rpx;
}
.shu_gongsi_body image {
	width: 84rpx;
	height: 84rpx;
	border-radius: 5rpx;
	margin-right: 26rpx;
}

.dizhi_body {
	height: 427rpx;

	border-radius: 10rpx;
	position: relative;
	margin-bottom: 20rpx;
	position: relative;
	margin-top: 40rpx;
}
.dizhi_map {
	width: 100%;
	height: 100%;
}
.dizhi_map image {
	width: 100%;
	height: 100%;
}
.dizhi_txt {
		/* height: 40rpx; */
	background-color: #ffffff;
		box-shadow: 0rpx 0rpx 7rpx 0rpx 
			rgba(87, 87, 87, 0.36);
	border-radius: 10rpx;
	position: absolute;
	bottom: 136rpx;
	left: 50%;
	transform: translate(-50%, 0);
	line-height: 40rpx;
	padding:0 34rpx;
	min-width: 400rpx;
}
.dizhi_txt::before {
	content: '';
	display: inline-block;
	width: 20rpx;
	height: 20rpx;
	background-color: #ffffff;
	position: absolute;
	bottom: -10rpx;
	left: 48%;
	transform: translate(-50%, 0);
	transform: rotate(45deg);
}
.ditie {
	display: flex;
	align-items: center;
}
.ditie image {
	width: 28rpx;
	height: 28rpx;
	margin-right: 14rpx;
}
.dizhi_txt_dizhi {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 12rpx 0 20rpx;
}
.dizhi_txt_dizhi image {
	width: 12rpx;
	height: 22rpx;
}
.dizhi_txt_dizhi text {
	max-width: 90%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.gongsi_bottom {
	height: 180rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	bottom: 0;
	width: 100%;
	background-color: #ffffff;
}
.gongsi_bottom button {
	height: 80rpx;

	border-radius: 10rpx;
	line-height: 80rpx;
	box-sizing: border-box;
}

.goutong {
	width: 100%;
	background-color: #00c6c9;
	border-radius: 0 !important;
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
.tishi{
	border-bottom: 2rpx solid #e9e9e9;
	padding-bottom: 30rpx;
}
.tishi_title{
	display: flex;
	align-items: center;
	height: 95rpx;
}
.tishi_title image{
		width: 26rpx;
		margin-right: 14rpx;
		height: 24rpx;
}
.tishi_txt{
	line-height: 42rpx;
}
.jingzheng_title{
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 140rpx;
}
.jingzheng_title_right{
	display: flex;
	align-items: center;
	
}
.jingzheng_title_right image{
		width: 11rpx;
		height: 20rpx;
		margin-left: 26rpx;
}
.jingzheng{
	margin-bottom: 60rpx;
}
.jingzheng_img image{
	width: 100%;
	height: 20rpx;margin-top: 30rpx;
}
.jingzheng_img_bottom{
	margin: 10rpx 0 0;
}
.jingzheng_img_bottom text{
	width: 25%;
	text-align: center;
	display: inline-block;
}
.mohu{
	width: 47rpx;
		height: 37rpx;
		vertical-align: middle;
}
</style>
