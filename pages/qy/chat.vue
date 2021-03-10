<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center ">
				<view class="hei_30_bold">张珊珊</view>
				<view class="zhiwei hei_24">前端开发工程师</view>
			</view>
			<view class=" head_right hei_30_bold"><image src="../../static/qy_img/rili.png" mode="" style="width: 34rpx;height: 34rpx;"></image></view>
		</view>
		<view class="chat_tab hui_22">
			<view class="chat_tab_item">
				<image src="../../static/qy_img/chat_jianli.png" mode="" style="width: 26rpx;height: 30rpx;"></image>
				<view class="">求简历</view>
			</view>
			<view class="chat_tab_item">
				<image src="../../static/qy_img/chat_lianxi.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
				<view class="">联系方式</view>
			</view>
			<view class="chat_tab_item">
				<image src="../../static/qy_img/chat_mianshi.png" mode="" style="width: 34rpx;height: 30rpx;"></image>
				<view class="">面试TA</view>
			</view>
			<view class="chat_tab_item">
				<image src="../../static/qy_img/chat_luyong.png" mode="" style="width: 28rpx;height: 30rpx;"></image>
				<view class="">录用TA</view>
			</view>
			<view class="chat_tab_item">
				<image src="../../static/qy_img/chat_biaoji.png" mode="" style="width: 30rpx;height: 32rpx;"></image>
				<view class="">标记</view>
			</view>
		</view>
		<view class="daimian">
			<view class="daimian_left hui_26">
				<image src="../../static/qy_img/daimian.png" mode=""></image>
				面试待接受
			</view>
			<text class="chakan lan_26">查看</text>
		</view>

		<view class="chat_body " style="padding-bottom: 900px;" @click="tan_hide()">
			<view class="zhanwei"></view>
			<!-- 有待面试时显示 -->

			<view class="time qian_20">13:52</view>

			<view class="geren_xinxi">
				<view class="geren_xinxi_top">
					<view class="geren_xinxi_tx">
						<image src="../../static/qy_img/tx.png" mode="" class="tx"></image>
						<image src="../../static/qy_img/nan.png" mode="" class="xingbie"></image>
					</view>
					<view class="geren_xinxi_right">
						<view class="geren_xinxi_right_top lan_30">
							<text class="hei_28_bold">张珊珊</text>
							<text>12-24K</text>
						</view>
						<view class="geren_xinxi_right_bottom hei_24">
							<text>现任</text>
							浙江古茗科技有限公司 | web前端工程师
						</view>
					</view>
				</view>
				<view class="geren_xinxi_xue">
					<view class="geren_xinxi_xue_left hui_22">
						<text>
							<image src="../../static/qy_img/nianxian.png" mode="" style="width: 26rpx;height: 24rpx;"></image>
							3年
						</text>
						<text>
							<image src="../../static/qy_img/xueli.png" mode="" style="width: 28rpx;height: 24rpx;"></image>
							大专
						</text>
						<text>
							<image src="../../static/qy_img/shengri.png" mode="" style="width: 24rpx;height: 26rpx;"></image>
							24岁
						</text>
					</view>
					<view class="geren_xinxi_xue_right qian_22">
						<text>在职</text>
						-
						<text>考虑机会</text>
					</view>
				</view>
				<view class="geren_xinxi_jianjie hei_24">运用HTML、CSS、JavaScript、es6，对表现与数据分离、 web语义化等有深刻理解；精通react、redux，或Vue、...</view>
				<view class="geren_xinxi_bottom">
					<view class="gotong qian_24">1月25日 14:06你就以下职位发起沟通</view>
					<view class="lan_28 geren_gangwei">
						<text class="hei_26_bold">WEB前端工程师</text>
						10-15K
					</view>
				</view>
			</view>

			<view class="message chat_my">
				<view class="message_chat_body">
					<view class="message_chat_txt">HI，你好，我们公司正在招聘前端工程师， 有兴趣吗？发一份简历过来？</view>
					<view class="zhuangtai qian_20">已读</view>
				</view>
				<image src="../../static/qy_img/tx.png" mode="" class="chat_tx"></image>
			</view>
			<view class="message chat_left">
				<image src="../../static/qy_img/tx.png" mode="" class="chat_tx"></image>
				<view class="message_chat_body">
					<view class="message_chat_txt">好的，我这边马上发简历过去，请问可以去贵公司面试吗？</view>
					<view class="zhuangtai qian_20">送达</view>
				</view>
			</view>

			<view class="message chat_left send_html">
				<image src="../../static/qy_img/tx.png" mode="" class="chat_tx"></image>
				<view class="message_chat_body">
					<view class="message_chat_jianli">
						<view class="message_chat_jianli_top">
							<image src="../../static/qy_img/jianli.png" mode=""></image>
							<view class="message_chat_jianli_txt hei_26">对方想发送附件简历到您的邮箱，是否同意</view>
						</view>
						<view class="message_chat_jianli_bottom qian_28">
							<text class="lan_28" @click="tongyi_jianli">同意</text>
							<text @click="jvjue_jianli">拒绝</text>
						</view>
					</view>
				</view>
			</view>

			<view class="message chat_left">
				<image src="../../static/qy_img/tx.png" mode="" class="chat_tx"></image>
				<view class="message_chat_body">
					<view class="message_chat_txt">简历已发送给您</view>
					<view class="zhuangtai qian_20">送达</view>
				</view>
			</view>
			<view class="jianli_tishi qian_22">
				对方已投递简历，您可至邮箱中查看和下载。
				<text class="lan_22">未收到邮件？</text>
			</view>

			<view class="shou_jianli">
				<view class="shou_jianli_top">
					<image src="../../static/qy_img/jianli.png" mode=""></image>
					<view class="shou_jianli_right hei_26">张珊珊-3年WEB前端开发工程师.PDF</view>
				</view>
				<view class="shou_jianli_bottom lan_28">点击预览附件简历</view>
			</view>
			<view class="message chat_my">
				<view class="message_chat_body">
					<view class="message_chat_txt send_yaoqig">
						我发送了面试邀请
						<image src="../../static/qy_img/ren.png" mode=""></image>
					</view>
					<view class="zhuangtai qian_20">送达</view>
				</view>
				<image src="../../static/qy_img/tx.png" mode="" class="chat_tx"></image>
			</view>
		</view>

		<view class="chat_bottom">
			<view class="chat_bottom_top">
				<button type="" class="cahngyongyu bai_24">常用语</button>
				<input type="text" value="" placeholder="新信息" class="hei_28" v-model="chat_txt" confirm-type="send" @confirm="send" />
				<view class="chat_bottom_top_right">
					<image src="../../static/qy_img/biaoqing.png" mode="" @tap="showEmj"></image>
					<image src="../../static/qy_img/jia.png" mode="" @click="jia"></image>
				</view>
			</view>
			<view class="chat_bottom_body">
				<emotion @emotion="handleEmj" v-if="isShowEmj"></emotion>
				<view class="chuangkou hei_24" v-if="chuangkou">
					<swiper
						:indicator-dots="true"
						easing-function="default"
						:interval="5000"
						indicator-color="#dbdbdb"
						indicator-active-color="#434343"
						class="swiper"
						@change="swiperchang"
					>
						<swiper-item>
							<view class="swiper_item_list ">
								<view class="swiper_item">
									<image src="../../static/qy_img/chuangkou_tu.png" mode="" style="width: 53rpx;height: 46rpx;"></image>
									<view class="swiper_item_txt">
										图片
									</view>
								</view>
								<view class="swiper_item">
									<image src="../../static/qy_img/chuangkou_yuyin.png" mode="" style="width: 59rpx;height: 45rpx;"></image>
									<view class="swiper_item_txt">
									语音
									</view>
									</view>
								<view class="swiper_item">
									<image src="../../static/qy_img/chuangkou_zhuanfa.png" mode="" style="width: 59rpx;height: 45rpx;"></image>
									<view class="swiper_item_txt">
									转发TA
									</view>
									</view>
								<view class="swiper_item">
									<image src="../../static/qy_img/chuangkou_yuyin.png" mode="" style="width: 59rpx;height: 45rpx;"></image>
									<view class="swiper_item_txt">
									更换职位</view>
									</view>
								<view class="swiper_item">
									<image src="../../static/qy_img/chuangkou_yuyin.png" mode="" style="width: 59rpx;height: 45rpx;"></image>
									<view class="swiper_item_txt">
									发送地址</view>
									</view>
								<view class="swiper_item">
									<image src="../../static/qy_img/chuangkou_yuyin.png" mode="" style="width: 59rpx;height: 45rpx;"></image>
									<view class="swiper_item_txt">
									语音通话</view>
									</view>
								<view class="swiper_item">
									<image src="../../static/qy_img/chuangkou_yuyin.png" mode="" style="width: 59rpx;height: 45rpx;"></image>
									<view class="swiper_item_txt">
									视频通话</view>
									</view>
								<view class="swiper_item">
									<image src="../../static/qy_img/chuangkou_yuyin.png" mode="" style="width: 59rpx;height: 45rpx;"></image>
									<view class="swiper_item_txt">
									短信通知</view>
									</view>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper_item_list">
								<view class="swiper_item">
									<image src="../../static/qy_img/chuangkou_yuyin.png" mode="" style="width: 59rpx;height: 45rpx;"></image>
									<view class="swiper_item_txt">
									测试</view></view>
								<view class="swiper_item">
									<image src="../../static/qy_img/chuangkou_yuyin.png" mode="" style="width: 59rpx;height: 45rpx;"></image>
									<view class="swiper_item_txt">
									测试</view></view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import emotion from '@/components/bkhumor-emoji/index.vue';
export default {
	components: {
		emotion
	},
	data() {
		return {
			isShowEmj: false,
			chat_txt: '',
			chuangkou: true
		};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		go_yaoyue() {
			uni.navigateTo({
				url: 'mian_yaoqing'
			});
		},
		tongyi_jianli() {},
		jvjue_jianli() {},
		replace_em(str) {
			str = str.replace(/\</g, '&lt;');
			str = str.replace(/\>/g, '&gt;');
			str = str.replace(/\n/g, '<br/>');
			str = str.replace(/\[em_([0-9]*)\]/g, '<img src="../../static/bkhumor-emoji/$1.gif" border="0" style="width:40rpx"/>');
			return str;
		},
		handleEmj(i) {
			console.log(i);
			if (i == '[em_75]') {
				//匹配最后一个表情符号并删除。
				this.chat_txt = this.chat_txt.replace(/(\[[^\]]+\]|[\s\S])$/, '');
			} else {
				this.chat_txt += i;
			}
		},
		showEmj() {
			let bool = !this.isShowEmj;
			if (bool) {
				this.emojiIcon = 'cuIcon-keyboard';
				this.bt_show = false;
				this.chuangkou = false;
			} else {
				this.emojiIcon = 'cuIcon-emoji';
			}

			this.isShowEmj = bool;
			this.$emit('show');
		},
		tan_hide() {
			this.isShowEmj = false;
			this.chuangkou = false;
		},
		send() {
			console.log(this.chat_txt);
			var txt = this.replace_em(this.chat_txt);
		},
		jia() {
			this.chuangkou = !this.chuangkou;
			this.isShowEmj = false;
		}
	}
};
</script>

<style>
.head {
	background-color: #ffffff;
}
.chat_body {
	padding-top: 220rpx;
	padding-left: 30rpx;
	padding-right: 30rpx;
	background-color: #f8f8f8;
	position: relative;
}
.zhiwei {
	transform: scale(0.9);
}
.chat_tab {
	position: fixed;
	top: 100rpx;
	height: 120rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 42rpx;
	width: 100%;
	background-color: #ffffff;
	box-sizing: border-box;
	z-index: 9;
}
.chat_tab_item {
	text-align: center;
}
.chat_tab_item image {
	margin-bottom: 6rpx;
}
.daimian {
	position: fixed;
	top: 220rpx;
	height: 70rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 40rpx 0 30rpx;
	width: 100%;
	box-sizing: border-box;
	z-index: 9;
	background-color: #ebf5f6;
}
.daimian_left {
	display: flex;
	align-items: center;
}
.daimian_left image {
	width: 40rpx;
	height: 36rpx;
	margin-right: 16rpx;
}
.chakan {
	display: inline-block;
	width: 86rpx;
	height: 44rpx;
	border-radius: 22rpx;
	border: solid 1rpx #00c6c9;
	line-height: 44rpx;
	text-align: center;
}
.zhanwei {
	height: 70rpx;
}
.time {
	text-align: center;
	line-height: 54rpx;
}
.geren_xinxi {
	/* height: 451rpx; */
	background-color: #ffffff;
	box-shadow: 0rpx 0rpx 9rpx 0rpx rgba(117, 117, 117, 0.11);
	border-radius: 10rpx;
	padding: 40rpx 24rpx;
	box-sizing: border-box;
	margin-bottom: 20rpx;
}
.geren_xinxi_top {
	display: flex;
	align-items: center;
}
.geren_xinxi_tx {
	width: 74rpx;
	height: 74rpx;
	border-radius: 100%;
	position: relative;
	margin-right: 22rpx;
}
.tx {
	width: 100%;
	height: 100%;
}
.xingbie {
	position: absolute;
	width: 24rpx;
	height: 24rpx;
	top: 0rpx;
	right: 0;
}
.geren_xinxi_right {
	width: 86%;
}
.geren_xinxi_right_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10rpx;
}

.geren_xinxi_right_bottom text {
	margin-right: 24rpx;
}
.geren_xinxi_xue {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.geren_xinxi_xue_left {
	display: flex;
	align-items: center;
	margin: 30rpx 0;
}
.geren_xinxi_xue_left text {
	margin-right: 40rpx;
	display: flex;
	align-items: center;
}
.geren_xinxi_xue_left text image {
	margin-right: 16rpx;
}
.geren_xinxi_jianjie {
	line-height: 40rpx;
	margin-bottom: 30rpx;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}
.geren_xinxi_bottom {
	padding-top: 20rpx;
	border-top: 2rpx solid #ebebeb;
}
.geren_gangwei {
	margin-top: 10rpx;
}
.geren_gangwei text {
	margin-right: 20rpx;
}

.chat_my {
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	font-size: 26rpx;
	color: #ffffff;
}
.chat_my .chat_tx {
	width: 76rpx;
	height: 76rpx;
	border-radius: 100%;
	margin-bottom: 36rpx;
}
.message_chat_body {
	max-width: 520rpx;
}
.chat_my .message_chat_txt {
	background-color: #00c6c9;
	border-radius: 10rpx 10rpx 0rpx 10rpx;
	margin-right: 16rpx;
	box-sizing: border-box;
	padding: 20rpx 10rpx 20rpx 20rpx;
	line-height: 40rpx;
}
.chat_my .zhuangtai {
	text-align: right;
	margin-top: 6rpx;
	padding-right: 16rpx;
}

.chat_left {
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	font-size: 26rpx;
	color: #333333;
}
.chat_left .chat_tx {
	width: 72rpx;
	height: 72rpx;
	border-radius: 100%;
	margin-bottom: 36rpx;
}

.chat_left .message_chat_txt {
	background-color: #ffffff;
	border-radius: 10rpx 10rpx 0rpx 10rpx;
	margin-left: 16rpx;
	box-sizing: border-box;
	padding: 20rpx 10rpx 20rpx 20rpx;
	line-height: 40rpx;
}
.chat_left .zhuangtai {
	text-align: left;
	margin-top: 6rpx;
	padding-left: 16rpx;
}
.message {
	margin-bottom: 30rpx;
}
.message_chat_jianli {
	width: 516rpx;
	height: 225rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
	margin-left: 16rpx;
	padding-top: 40rpx;
	box-sizing: border-box;
}
.send_html .chat_tx {
	margin-bottom: 0;
}
.message_chat_jianli_top image {
	width: 70rpx;
	height: 70rpx;
	border-radius: 10rpx;
	margin-right: 20rpx;
}
.message_chat_jianli_top {
	display: flex;
	align-items: center;
	margin-left: 28rpx;
}
.message_chat_jianli_txt {
	max-width: 70%;
	line-height: 42rpx;
}
.message_chat_jianli_bottom {
	border-top: 2rpx solid #c6c6c6;
	display: flex;
	align-items: center;
	padding: 15rpx 0;
	margin-top: 30rpx;
}
.message_chat_jianli_bottom text {
	width: 50%;
	text-align: center;
	display: inline-block;
}
.message_chat_jianli_bottom text:first-child {
	border-right: 2rpx solid #c6c6c6;
}
.jianli_tishi {
	text-align: center;
	margin-bottom: 30rpx;
}

.send_yaoqig {
	display: flex;
	align-items: center;
}
.send_yaoqig image {
	width: 42rpx;
	height: 38rpx;
	margin-left: 6rpx;
}
.shou_jianli {
	width: 516rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
	margin: 0 auto 88rpx;
	padding-top: 40rpx;
	box-sizing: border-box;
}

.shou_jianli image {
	width: 70rpx;
	height: 70rpx;
	border-radius: 10rpx;
}
.shou_jianli_top {
	display: flex;
	align-items: center;
	padding-left: 28rpx;
}
.shou_jianli_right {
	max-width: 70%;
	line-height: 42rpx;
	margin-left: 20rpx;
}
.shou_jianli_bottom {
	border-top: 2rpx solid #c6c6c6;
	line-height: 68rpx;
	text-align: center;
	margin-top: 30rpx;
}
.chat_bottom {
	position: fixed;
	bottom: 0;
	left: auto;
	right: auto;
	padding: 25rpx 0;
	width: 100%;
	margin: 0 auto;
	box-sizing: border-box;
	background-color: #ffffff;
}
.chat_bottom_top {
	padding: 0 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	box-sizing: border-box;
}
.chat_bottom_top button {
	margin: 0;
	padding: 0;
}
.chat_bottom_top input {
	width: 400rpx;
	margin-left: 30rpx;
}
.cahngyongyu {
	width: 96rpx;
	height: 50rpx;
	background-color: #00c6c9;
	border-radius: 5rpx;
	line-height: 50rpx;
}
.chat_bottom_top_right {
	display: flex;
	align-items: center;
}
.chat_bottom_top_right image {
	width: 50rpx;
	height: 50rpx;
	margin-left: 20rpx;
}
.chat_bottom_body {
	padding-top: 20rpx;
}
.swiper_item_list {
	display: flex;
	flex-wrap: wrap;
	margin-top: 28rpx;
}
.swiper_item {
	width: 25%;
	text-align: center;
	position: relative;
	height: 112rpx;
}
.swiper_item:nth-child(1),
.swiper_item:nth-child(2),
.swiper_item:nth-child(3),
.swiper_item:nth-child(4) {
	margin-bottom: 66rpx;
}
.swiper_item_txt{
	position: absolute;
	left: 50% ;
	bottom: 0;
	transform: translate(-50%,0);
	width: 100%;
}
.swiper{
	height: 380rpx;
}
</style>
