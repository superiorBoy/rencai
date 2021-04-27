<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">我的在线简历</view>
			<view class=" head_right hei_30_bold">
				<navigator url="yulan_jianli">预览</navigator>
				
			</view>
		</view>

		<view class="zi_body">
			<view class="jianli_top">
				<view class="jianli_top_title">
					<view class="jianli_top_yincang hei_30_bold">
						<image src="../../static/index_img/geren_shiming.png" mode=""></image>
						简历已隐藏
					</view>
					<text class="lan_28">前往隐私设置</text>
				</view>
				<view class=" hui_28 jianli_top_txt">除了与你沟通的人外，将不会有更多的招聘者和 猎头/中介等经纪人看到你的简历</view>
			</view>
			<navigator url="geren" class="jianli_name">
				<view class="jianli_name_left">
					<view class="jianli_name_txt">
						张晓梅
						<image src="../../static/index_img/hei_bianji.png" mode=""></image>
					</view>
					<view class="qian_30">5年工作经验 · 26岁 · 本科</view>
				</view>
				<view class="jianli_name_right">
					<image src="../../static/index_img/nv_tx.png" mode="" class="tx"></image>
					<image src="../../static/qy_img/nv.png" mode="" class="sex"></image>
				</view>
			</navigator>
			<navigator url="youshi" class="jianli_youshi">
				<view class="jianli_youshi_top hei_36_bold">
					<text>个人优势</text>
					<image src="../../static/index_img/hei_bianji.png" mode=""></image>
				</view>
				<view class="jianli_youshi_bottom hui_28">熟练掌握各种前端技术，包括HTML、CSS、JavaScript、Node.js 等；深入了解 JavaScript 语言...</view>
			</navigator>

			<view class="jianli_qiwang">
				<view class="jianli_youshi_top hei_36_bold jianli_qiwang_top">
					<text>求职期望</text>
					<image src="../../static/index_img/jianli_tianjia.png" mode="" @click="go_qiwang"></image>
				</view>

				<view class="jianli_qiwang_bottom" @click="go_qiwang">
					<view class="jianli_qiwang_bottom_zhiwei hei_30_bold">
						<text>前端开发工程师 25-50K</text>
						<image src="../../static/qy_img/go_right.png" mode=""></image>
					</view>

					<view class="jianli_qiwang_bottom_jieshao hui_28">杭州 医疗健康、电子商务、互联网金融</view>
				</view>
			</view>

			<view class="jianli_jingli">
				<view class="jianli_youshi_top hei_36_bold jianli_qiwang_top">
					<text>工作经历</text>

					<image src="../../static/index_img/jianli_tianjia.png" mode="" @click="go_gongzuo()"></image>
				</view>

				<view class="jianli_qiwang_bottom" @click="go_gongzuo()">
					<view class="jianli_qiwang_bottom_zhiwei ">
						<text class="hei_30_bold">杭州金科网络科技有限公司</text>
						<view class="qian_28 jingli_time">
							2018.01-2021-01
							<image src="../../static/qy_img/go_right.png" mode=""></image>
						</view>
					</view>
					<view class="hui_30 jingli_bumen">前端开发工程师 产品研发部</view>

					<view class="jianli_jingli_body hui_30">
						<view class="">内容:1.扎实的编程能力,熟悉基本的数据结构和算法</view>
						<view class="">2.熟练掌握Vue/React的原理,了解实现的关键技术</view>
						<view class="">3.对于工程化,平台化有一定的思考,并有所实践</view>
					</view>
					<view class="jianli_jingli_bianqian hui_26">
						<text>Javascript</text>
						<text>Angular</text>
						<text>React.js</text>
					</view>
				</view>
			</view>

			<view class="jianli_jingli">
				<view class="jianli_youshi_top hei_36_bold jianli_qiwang_top">
					<text>项目经历</text>

					<image src="../../static/index_img/jianli_tianjia.png" mode="" @click="go_xiangmu()"></image>
				</view>

				<view class="jianli_qiwang_bottom" @click="go_xiangmu()">
					<view class="jianli_qiwang_bottom_zhiwei ">
						<text class="hei_30_bold">十荟团</text>
						<view class="qian_28 jingli_time">
							2018.01-2021-01
							<image src="../../static/qy_img/go_right.png" mode=""></image>
						</view>
					</view>
					<view class="hui_30 jingli_bumen">前端开发工程师</view>

					<view class="jianli_xiamgmu_body hui_30">
						内容：1、负责前端代码的编写，实现界面效果、交 互和功能；2、按产品设计需求完成项目开发迭代， 主动实现性能优化和提升用户体验。
					</view>
				</view>
			</view>

			<view class="jianli_jingli jianli_jiaoyu">
				<view class="jianli_youshi_top hei_36_bold jianli_qiwang_top">
					<text>教育经历</text>
					<image src="../../static/index_img/jianli_tianjia.png" mode="" @click="go_jiaoyu"></image>
				</view>

				<view class="jianli_qiwang_bottom" @click="go_jiaoyu">
					<view class="jianli_qiwang_bottom_zhiwei ">
						<text class="hei_30_bold">浙江工商大学</text>
						<view class="qian_28 jingli_time">
							2018.01-2021-01
							<image src="../../static/qy_img/go_right.png" mode=""></image>
						</view>
					</view>
					<view class="hui_30 jiaoyu_xueli">本科·计算机科学与技术</view>
				</view>
			</view>

			<view class="hei_36_bold zidingyi">自定义添加</view>
			<navigator url="add_zhengshu" class="ziding_body">
				<view class="ziding_body_left">
					<view class="hei_36_bold ziding_body_title">资格证书</view>
					<view class="hui_28 ziding_body_bottom">尽可能选择有含金量的证书，证明你的 专业程度</view>
				</view>
				<image src="../../static/index_img/jianli_tianjia.png" mode=""></image>
			</navigator>
			<navigator url="zuopin" class="ziding_body">
				<view class="ziding_body_left">
					<view class="hei_36_bold ziding_body_title">设计作品</view>
					<view class="hui_28 ziding_body_bottom">快速展示你的作品，提供求职效率</view>
				</view>
				<image src="../../static/index_img/jianli_tianjia.png" mode=""></image>
			</navigator>

			<navigator url="shejiao_zhuye" class="ziding_body">
				<view class="ziding_body_left">
					<view class="hei_36_bold ziding_body_title">社交主页</view>
					<view class="hui_28 ziding_body_bottom">突出你个人实力的主页</view>
				</view>
				<image src="../../static/index_img/jianli_tianjia.png" mode=""></image>
			</navigator>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	created() {},

	onShow() {},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		go_qiwang() {
			uni.navigateTo({
				url: 'qiuzhi_qiwang'
			});
		},
		go_gongzuo() {
			uni.navigateTo({
				url: 'add_gongzuo'
			});
		},
		go_xiangmu() {
			uni.navigateTo({
				url: 'add_xiangmu'
			});
		},
		go_jiaoyu() {
			uni.navigateTo({
				url: 'add_jiaoyu'
			});
		},
		go_jiaoyu() {
			uni.navigateTo({
				url: 'add_jiaoyu'
			});
		}
	},
	filters: {
		timeStamp: function(value) {
			if (value == null) {
				return 'null';
			}
			var i = (value + '').length;
			while (i++ < 13) value = value + '0';
			value = Number(value);
			var date = new Date(value);
			//date.setTime(value);
			var month = date.getMonth() + 1;
			var hours = date.getHours();
			if (hours < 10) hours = '0' + hours;
			var minutes = date.getMinutes();
			if (minutes < 10) minutes = '0' + minutes;
			var time = date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + hours + ':' + minutes;
			return time;
		}
	}
};
</script>

<style>
.head {
	/* border-bottom: 2rpx solid #f5f5f5; */
}
.zi_body {
	padding-left: 30rpx;
	padding-right: 30rpx;
	padding-bottom: 50rpx;
}
.head_center {
	width: 50%;
}
.jianli_top {
	height: 232rpx;
	background-color: #ffffff;
	box-shadow: 0rpx 0rpx 18rpx 0rpx rgba(0, 7, 0, 0.11);
	border-radius: 10rpx;
	margin-top: 10rpx;
	padding: 40rpx 34rpx 40rpx 40rpx;
	box-sizing: border-box;
}
.jianli_top_title {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.jianli_top_yincang image {
	width: 26rpx;
	height: 30rpx;
	margin-right: 16rpx;
	vertical-align: middle;
}
.jianli_top_txt {
	line-height: 44rpx;
	margin-top: 26rpx;
}
.jianli_name_txt {
	font-size: 50rpx;
	font-weight: bold;
	margin-bottom: 20rpx;
}
.jianli_name_txt image {
	width: 28rpx;
	height: 28rpx;
	margin-left: 46rpx;
	vertical-align: middle;
}
.jianli_name_right {
	width: 120rpx;
	height: 120rpx;
	position: relative;
}
.tx {
	width: 100%;
	height: 100%;
	border-radius: 100%;
}
.sex {
	width: 38rpx;
	height: 38rpx;
	position: absolute;
	top: -18rpx;
	right: -18rpx;
}
.jianli_name {
	height: 240rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2rpx solid #e8e8e8;
	margin-top: 20rpx;
}
.jianli_youshi {
	height: 280rpx;
	box-sizing: border-box;
	border-bottom: 2rpx solid #e8e8e8;
	padding-top: 60rpx;
}
.jianli_youshi_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 30rpx;
}
.jianli_youshi_top image {
	width: 28rpx;
	height: 28rpx;
}
.jianli_youshi_bottom {
	line-height: 50rpx;
}
.jianli_qiwang {
	padding: 60rpx 0;
	border-bottom: 2rpx solid #e8e8e8;
}
.jianli_qiwang_top image {
	width: 36rpx;
	height: 36rpx;
}
.jianli_qiwang_bottom_zhiwei {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.jianli_qiwang_bottom_zhiwei image {
	width: 14rpx;
	height: 23rpx;
}
.jianli_qiwang_bottom_jieshao {
	margin-top: 10rpx;
}
.jianli_jingli {
	padding: 60rpx 0 70rpx;
	border-bottom: 2rpx solid #e8e8e8;
}
.jingli_time image {
	margin-left: 16rpx;
}
.jingli_bumen {
	margin: 10rpx 0 10rpx;
}
.jianli_jingli_body {
	line-height: 42rpx;
	margin-bottom: 20rpx;
}
.jianli_xiamgmu_body {
	line-height: 42rpx;
}
.jianli_jingli_bianqian text {
	display: inline-block;
	height: 50rpx;
	background-color: #f6f6f6;
	border-radius: 5rpx;
	line-height: 50rpx;
	margin-right: 20rpx;
	padding: 0 20rpx;
}
.jiaoyu_xueli {
	margin-top: 10rpx;
}
.jianli_jiaoyu {
	padding-bottom: 50rpx;
}
.zidingyi {
	line-height: 148rpx;
}
.ziding_body {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 40rpx;
	box-shadow: 0rpx 0rpx 18rpx 0rpx rgba(0, 7, 0, 0.11);
	border-radius: 10rpx;
	margin-bottom: 30rpx;
}
.ziding_body image {
	width: 36rpx;
	height: 36rpx;
}
.ziding_body_left {
	max-width: 477rpx;
}
.ziding_body_title {
	margin-bottom: 22rpx;
}
.ziding_body_bottom {
	line-height: 44rpx;
}
</style>
