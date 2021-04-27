<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">预览简历</view>
			<view class=" head_right hei_30_bold"><text>下载简历</text></view>
		</view>

		<view class="zi_body">
			<view class="padding_30">
				<view class="jianli_name">
					<view class="jianli_name_left">
						<view class="jianli_name_txt">张晓梅</view>
						<view class="hei_30">前端开发工程师 聚光科技</view>
					</view>
					<view class="jianli_name_right">
						<image src="../../static/index_img/nv_tx.png" mode="" class="tx"></image>
						<image src="../../static/qy_img/nv.png" mode="" class="sex"></image>
					</view>
				</view>

				<view class="jianjie hei_30">
					<view class="jianjie_title ">离职-随时到岗</view>
					<view class="jianjie_center">
						<text>
							<image src="../../static/qy_img/nianxian.png" mode="" style="width: 30rpx;height: 28rpx;"></image>
							3年经验
						</text>
						<text>
							<image src="../../static/qy_img/xueli.png" mode="" style="width: 34rpx;height: 28rpx;"></image>
							大专
						</text>
						<text>
							<image src="../../static/qy_img/shengri.png" mode="" style="width: 28rpx;height: 30rpx;"></image>
							24岁
						</text>
					</view>
					<view class="jianjie_youshi hei_28">
						本人性格开朗、稳重、有活力，待人热情、真诚]对待销售工作认真负责，善于沟通、协调有较强的组织能力与团队精神；活泼开朗、乐观上进、有爱心并善于施教并行；上进心强、勤于学习能不断提高自身的能力与综合素质。
					</view>
				</view>

				<view class="jianli_qiwang">
					<view class="jianli_youshi_top hei_30 jianli_qiwang_top">
						<text class="landian"></text>
						<text>求职期望</text>
					</view>

					<view class="jianli_qiwang_bottom" @click="go_qiwang">
						<view class="jianli_qiwang_bottom_zhiwei hei_30_bold">
							<text>前端开发工程师，杭州</text>
							<text class="lan_30_bold">25-50K</text>
						</view>

						<view class="jianli_qiwang_bottom_jieshao hei_30">行业不限</view>
					</view>
				</view>
			</view>
			<view class="jianli_jingli">
				<view class="jingli_title hei_28_bold "><text>工作经历</text></view>
				<view class="jingli_list">
					<view class="qian_24">2019/09—至今[1年3个月]</view>
					<view class="hei_28_bold jianli_gangwei">销售主管</view>
					<view class="hui_28">浙江慧才人力资源有限公司</view>
					<view class="qian_24 jianli_guimo">互联网/电子商务 | 私营企业 | 50-200人</view>
					<view class="qian_24">工作描述：</view>
					<view class="miaoshi hei_26">
						<view class=" miaoshi_list">
							<text></text>
							见客户时，衣着整洁、大方自信、跟客户打招呼时， 声音要宏亮；
						</view>
						<view class=" miaoshi_list">
							<text></text>
							见到客户时，要利用从大到小的“问题漏斗”方式询问 客户的需求，不要马上向客户灌输本公司产品情况，因为 这样无异于向客户灌输“信息垃圾”。
						</view>
						<view class=" miaoshi_list">
							<text></text>
							向客户介绍产品和公司销售政策时，一定要先谈要点， 然后围绕要点再展开谈，让客户始终感觉到你说得有条有 理；
						</view>
					</view>
				</view>

				<view class="jingli_list">
					<view class="qian_24">2019/09—至今[1年3个月]</view>
					<view class="hei_28_bold jianli_gangwei">销售主管</view>
					<view class="hui_28">浙江慧才人力资源有限公司</view>
					<view class="qian_24 jianli_guimo">互联网/电子商务 | 私营企业 | 50-200人</view>
					<view class="qian_24">工作描述：</view>
					<view class="miaoshi hei_26">
						<view class=" miaoshi_list">
							<text></text>
							见客户时，衣着整洁、大方自信、跟客户打招呼时， 声音要宏亮；
						</view>
						<view class=" miaoshi_list">
							<text></text>
							见到客户时，要利用从大到小的“问题漏斗”方式询问 客户的需求，不要马上向客户灌输本公司产品情况，因为 这样无异于向客户灌输“信息垃圾”。
						</view>
						<view class=" miaoshi_list">
							<text></text>
							向客户介绍产品和公司销售政策时，一定要先谈要点， 然后围绕要点再展开谈，让客户始终感觉到你说得有条有 理；
						</view>
					</view>
				</view>

				<view class="jingli_list">
					<view class="qian_24">2019/09—至今[1年3个月]</view>
					<view class="hei_28_bold jianli_gangwei">销售主管</view>
					<view class="hui_28">浙江慧才人力资源有限公司</view>
					<view class="qian_24 jianli_guimo">互联网/电子商务 | 私营企业 | 50-200人</view>
					<view class="qian_24">工作描述：</view>
					<view class="miaoshi hei_26">
						<view class=" miaoshi_list">
							<text></text>
							见客户时，衣着整洁、大方自信、跟客户打招呼时， 声音要宏亮；
						</view>
						<view class=" miaoshi_list">
							<text></text>
							见到客户时，要利用从大到小的“问题漏斗”方式询问 客户的需求，不要马上向客户灌输本公司产品情况，因为 这样无异于向客户灌输“信息垃圾”。
						</view>
						<view class=" miaoshi_list">
							<text></text>
							向客户介绍产品和公司销售政策时，一定要先谈要点， 然后围绕要点再展开谈，让客户始终感觉到你说得有条有 理；
						</view>
					</view>
				</view>
			</view>

			<view class="jiaoyu">
				<view class="jiaoyu_title hei_28_bold ">教育经历</view>
				<view class="jingli_list duan_after">
					<view class="qian_24">2012/09-2016/6</view>
					<view class="hei_28_bold jiaoyu_xuexiao">杭州工商大学</view>
					<view class="hui_28">本科 | 市场营销</view>
				</view>
			</view>

			<view class="jiaoyu">
				<view class="jiaoyu_title hei_28_bold ">项目经验</view>
				<view class="jingli_list">
					<view class="qian_24">2012/09-2016/6</view>
					<view class="hei_28_bold jianli_gangwei">杭州工商大学</view>
					<view class="hui_28">本科 | 市场营销</view>
					<view class="qian_24 xiangmu_gongsi">所属公司：</view>
					<view class="hei_26">杭州宣品文化传媒有限公司</view>
					<view class="qian_24 xiangmu_miaoshu">项目描述：</view>
					<view class="hei_28 jiangyan_miaoshu">
						参与“乔布广场”、“乔布一号街”项目的全国范围招商 工作； 通过论坛发帖、跟帖、QQ群发信息等网络渠道进行招 商网络宣传推广；
						利用知名论坛、专业招商网、综合信息网等网络资源 （赶集、阿里巴巴、黄页等）寻找有需求的客户
					</view>
					<view class="qian_24 xiangmu_zeren">责任描述：</view>
					<view class="miaoshi hei_26">
						<view class=" miaoshi_list">
							<text></text>
							每天电话拜访30-50位客户，记录客户情况需求等信 息，并陪同预约客户逛商铺；
						</view>
						<view class=" miaoshi_list">
							<text></text>
							对意向客户进行跟踪拜访，洽谈合作，签订相关合同
						</view>
						<view class=" miaoshi_list">
							<text></text>
							平均月签3-5个铺面，掌握近1000位客户需求信息 及联系方式（全国性品牌140个）
						</view>
					</view>
				</view>
			</view>

			<view class="yuyan">
				<view class="jiaoyu_title hei_28_bold ">语言能力</view>
				<view class="jingli_list duan_after">
					<view class="hei_26">英语</view>
					<view class="jindu lan_24" style="width: 50%;">良好</view>
				</view>
			</view>

			<view class="yuyan">
				<view class="jiaoyu_title hei_28_bold ">技能专长</view>
				<view class="jingli_list">
					<view class="hei_26">WORD</view>
					<view class="jindu lan_24" style="width: 100%;">精通</view>
				</view>
				<view class="jingli_list duan_after">
					<view class="hei_26">POWERPOINT</view>
					<view class="jindu lan_24" style="width: 80%;">良好</view>
				</view>
			</view>

			<view class="jiaoyu">
				<view class="jiaoyu_title hei_28_bold ">荣誉证书</view>
				<view class="jingli_list duan_after">
					<view class="qian_24">2018/04</view>
					<view class="hei_28_bold rongyu_dengji">大学英语四级</view>
				</view>
			</view>

			<view class="jiaoyu bianqian">
				<view class="jiaoyu_title hei_28_bold ">特长标签</view>
				<view class="bianqian_list lan_26">
					<text>诚实守信</text>
					<text>经验丰富</text>
					<text>技术精悍</text>
				</view>
			</view>

			<view class="jiaoyu">
				<view class="jiaoyu_title hei_28_bold ">其他信息</view>
				<view class="jingli_list duan_after">
					<view class="hei_26_bold">职业目标</view>
					<view class="qian_24 zhiye_mubiao">
						从个人的角度来看，水往低处流，人往高处走。只要没有违反 职业道德、劳动合同的相关条款规定和相关法律规定，销售人
						员在发展到一定程度后换一个环境和空间都是一条不错的路子。
					</view>
				</view>
			</view>
			
			
			<view class="jiaoyu zuopin">
				<view class="jiaoyu_title hei_28_bold ">我的作品</view>
				<view class="zuopin_list ">
					<image src="../../static/index_img/zuopin.png" mode=""></image>
				</view>
			</view>
			
			<view class="jiaoyu fujian">
				<view class="jiaoyu_title hei_28_bold ">附件简历</view>
				<view class="jianli_list hei_28_bold">
					<image src="../../static/index_img/pdf_icon.png" mode=""></image>
					张晓梅-销售总监简历
				</view>
			</view>
			
			
			
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
	border-bottom: 2rpx solid #f5f5f5;
}
.zi_body {
	padding-bottom: 50rpx;
}

.jianli_name_txt {
	font-size: 50rpx;
	font-weight: bold;
	margin-bottom: 20rpx;
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
	right: -8rpx;
}
.jianli_name {
	height: 200rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2rpx solid #e8e8e8;
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

	margin-bottom: 30rpx;
}

.jianli_qiwang {
	padding: 40rpx 0;
	border-bottom: 2rpx solid #e8e8e8;
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
	margin-top: 30rpx;
}
.jianli_jingli {
	padding: 20rpx 30rpx 0rpx;
	border-bottom: 20rpx solid #f3f3f3;
}

.jianjie {
	border-bottom: 2rpx solid #f3f3f3;
	padding-bottom: 30rpx;
}
.jianjie_center text {
	margin-right: 60rpx;
}
.jianjie_center image {
	margin-right: 10rpx;
}
.jianjie_title {
	line-height: 120rpx;
}
.jianjie_youshi {
	line-height: 46rpx;
	padding: 30rpx 0 0;
}
.landian {
	display: inline-block;
	width: 14rpx;
	height: 14rpx;
	background-color: #00c6c9;
	border-radius: 100%;
	margin-right: 14rpx;
}
.padding_30 {
	padding: 0 30rpx;
}
.jingli_title {
	margin-bottom: 20rpx;
}
.jingli_list {
	padding-left: 28rpx;
	position: relative;
	margin-bottom: 30rpx;
}
.jingli_list::before {
	content: '';
	display: inline-block;
	width: 30rpx;
	height: 30rpx;
	background: url(../../static/index_img/yulan_before.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	left: -15rpx;
	border-radius: 100%;
	z-index: 2;
}
.jingli_list::after {
	content: '';
	display: inline-block;
	width: 4rpx;
	height: 100%;
	background-color: #f0f0f0;

	position: absolute;
	left: 0;
	top: 30rpx;
	z-index: 1;
}
.jingli_list:last-child::after {
	height: 94%;
}
.miaoshi_list {
	line-height: 44rpx;
}
.miaoshi_list text {
	width: 14rpx;
	height: 14rpx;
	background-color: #333333;
	display: inline-block;
	border-radius: 100%;
	vertical-align: middle;
	margin-right: 20rpx;
}
.jianli_guimo {
	margin: 12rpx 0;
}
.jianli_gangwei {
	margin: 12rpx 0;
}
.miaoshi {
	margin-top: 12rpx;
}
.jiaoyu_title {
	line-height: 100rpx;
}
.jiaoyu,
.yuyan {
	padding: 0 30rpx;
	border-bottom: 20rpx solid #f3f3f3;
}
.xiangmu_gongsi,
.xiangmu_miaoshu,
.xiangmu_zeren
 {
	margin: 10rpx 0;
}
.jiaoyu_xuexiao{
	margin: 10rpx 0 10rpx;
}

.jindu {
	height: 40rpx;
	background-color: #e5f9f9;
	border-radius: 20rpx;
	line-height: 40rpx;
	text-align: right;
	padding-right: 18rpx;
	box-sizing: border-box;
	margin: 20rpx 0;
}
.bianqian_list {
	display: flex;
	justify-content: space-between;
}
.bianqian_list text {
	display: inline-block;
	width: 216rpx;
	height: 60rpx;
	background-color: #f7f7f7;
	border-radius: 10rpx;
	line-height: 60rpx;
	text-align: center;
}
.bianqian {
	padding-bottom: 40rpx;
}
.zuopin_list{
	text-align: center;
}
.zuopin_list image{
		width: 500rpx;
		height: 363rpx;
}
.jianli_list image{
		width: 36rpx;
		height: 41rpx;
		margin-right: 15rpx;
		vertical-align: middle;
}
.fujian{
	padding-bottom: 20rpx;
	border-bottom: none;
}
.zhiye_mubiao{
	margin-top: 10rpx;
	line-height: 44rpx;
}
.duan_after:last-child::after{
	height: 76%;
}
.jiangyan_miaoshu{
	line-height: 44rpx;
}
.rongyu_dengji{
	margin: 20rpx 0 0;
}
</style>
