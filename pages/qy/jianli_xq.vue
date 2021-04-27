<template>
	<view class="body">
		<view class="head">
			<view class="head_back hei_38_bold">
				<image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image>
				简历详情
			</view>
			<view class="head_center hei_38_bold"></view>
			<view class=" head_right hei_30_bold">
				<image src="../../static/qy_img/shoucang.png" mode="" class="shoucang"></image>
				<image src="../../static/qy_img/fenxiang.png" mode="" style="width: 34rpx;height: 36rpx;"></image>
			</view>
		</view>

		<view class="zi_body">
			<view class="gongsi_zhiwei_body">
				<view class="jianli_xinxi">
					<view class="jianli_name">
						<view class="jianli_name_left">
							<view class="hei_38_bold">张珊珊</view>
							<view class="hei_30 gangwei">
								前端开发工程师
								<text>聚光科技</text>
							</view>
						</view>
						<view class="gong_tx">
							<image src="@/static/qy_img/tx.png" mode="" class="tx"></image>
							<image src="@/static/qy_img/nv.png" mode="" class="xingbie"></image>
						</view>
					</view>
					<view class="techang hui_24">
						<text>需求分析</text>
						<text>后端</text>
						<text>用户研究</text>
					</view>
				</view>

				<view class="gongsi_zhiwei">
					<view class="gongsi_zhiwei_top">
						<text class="hei_28">离职-随时到岗</text>
						<text class="qian_26">一个小时前活跃</text>
					</view>
					<view class="gongsi_zhiwei_bottom hei_26">
						<text>
							<image src="../../static/qy_img/nianxian.png" mode="" style="width: 26rpx;height: 24rpx;"></image>
							3年
						</text>
						<text>
							<image src="../../static/qy_img/xueli.png" mode="" style="width: 29rpx;height: 24rpx;"></image>
							大专
						</text>
						<text>
							<image src="../../static/qy_img/shengri.png" mode="" style="width: 24rpx;height: 26rpx;"></image>
							24岁
						</text>
					</view>
				</view>
				<view class="zhiwei_yaoqiu hei_26">
					<view class="">1.3年以上相关工作经验</view>
					<view class="">2.熟练掌握Vue、React其中之一,有webApp开发经验</view>
					<view class="">3.有Nodejs服务端开发经验</view>
					<view class="">4.有个人博客/网站,并在GitHub、Stack Overflow等开源社区</view>
					<view class="">5.精通react、redux，或Vue、NodeJs等主流框架进行SPA</view>
					<view class="">6.学习能力强, 能够快速熟悉新技术，良好的文档阅读能力</view>
					<view class="">7.思路清晰，积极主动，具备良好的沟通能力和团队协作精神。</view>
				</view>
				
				<view class="jianli_title hei_30">
				<text></text>	求职期望
				</view>
				<view class="qiwang">
					<view class="qiwang_left hei_30_bold">
						<text>前端开发工程师</text>,<text>杭州</text>
					</view>
					<text class="lan_30">12-24K</text>
				</view>
				<view class="hangye hei_30">
					行业不限
				</view>
				<view class="jianli_title hei_30">
				<text></text>	岗位经验
				</view>
				<view class="jingyan hei_26">
					web前端  2年7个月
				</view>
				
			</view>

			<view class="gongsi_bottom">
				<button type="" class="hui_30 bianji">不合适</button>
				<button type="" class="bai_30 guanbi">关闭职位</button>
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
	
}
.head_back {
	display: flex;
	align-items: center;
}
.head_back image {
	margin-right: 30rpx;
}
.shoucang {
	width: 38rpx;
	height: 38rpx;
	margin-right: 30rpx;
}
.gongsi_zhiwei_body {
	padding: 0 30rpx 180rpx;
}
.jianli_name {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.zhiwei_yaoqiu view {
	margin-bottom: 10rpx;
	line-height: 40rpx;
}

.gong_tx {
	width: 110rpx;
	height: 110rpx;
	border-radius: 100%;
	position: relative;
}
.tx {
	width: 100%;
	height: 100%;
}
.xingbie {
	width: 24rpx;
	height: 24rpx;
	position: absolute;
	top: 0;
	right: 0;
}
.jianli_xinxi {
	padding: 30rpx 0 10rpx;
	border-bottom: 2rpx solid #e9e9e9;
}
.techang{
	display: flex;
	flex-wrap: wrap;
}
.techang text{
	height: 44rpx;
		background-color: #f5f5f5;
		border-radius: 5rpx;
		display: inline-block;
		line-height: 44rpx;
		padding: 0 8rpx;
		margin: 0 20rpx 20rpx 0;
}
.gangwei{
	margin: 20rpx 0;
}
.gangwei text{
	margin-left: 20rpx;
	position: relative;
}
.gangwei text::before{
	content: '';
	display: inline-block;
		width: 6rpx;
		height: 6rpx;
	border-radius: 100%;
		background-color: #666666;
		position: absolute;
		left: -12rpx;
		top: 18rpx;	
}
.gongsi_zhiwei_top{
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.gongsi_zhiwei{
	padding: 20rpx 0 0;
}

.gongsi_zhiwei_bottom{
	display: flex;
	align-items: center;
	margin: 40rpx 0 30rpx;
}
.gongsi_zhiwei_bottom text{
	margin-right: 36rpx;
	display: flex;
	align-items: center;
}
.gongsi_zhiwei_bottom text image{
	margin-right: 10rpx;
}
.jianli_title{
	height: 100rpx;
	border-top: 2rpx solid #e9e9e9;
	display: flex;
	align-items: center;
}
.jianli_title text{
	display: inline-block;
	width: 10rpx;
		height: 10rpx;
		background-color: #00c6c9;
		margin-right: 6rpx;
		border-radius: 100%;
}

.qiwang{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20rpx;
}
.hangye{
margin-bottom: 30rpx;	
}
.jingyan{
		width: 262rpx;
		height: 64rpx;
		background-color: #f6f6f6;
		border-radius: 5rpx;
		line-height: 64rpx;
		margin-bottom: 20rpx;
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
	border-radius: 0;
	line-height: 80rpx;
	box-sizing: border-box;
	width: 50%;
}
.bianji {
	background-color: #f4f4f4;
}
.guanbi {
	background-color: #00c6c9;
}
</style>
