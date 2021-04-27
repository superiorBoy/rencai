<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center ">
				<view class="hei_30_bold">张珊珊</view>
				<view class="zhiwei hei_24">大明食品·招聘者</view>
			</view>
			<view class=" head_right hei_30_bold"><image src="../../static/index_img/sandian.png" mode="" style="width: 34rpx;height: 6rpx;"></image></view>
		</view>
		<view class="chat_tab hui_22">
			<view class="chat_tab_item" >
				<image src="../../static/index_img/chat_top_shouji.png" mode="" style="width: 26rpx;height: 40rpx;"></image>

				<view class="">打电话</view>
			</view>
			<view class="chat_tab_item" >
				<image src="../../static/index_img/chat_top_weixin.png" mode="" style="width: 40rpx;height: 33rpx;"></image>

				<view class="">换微信</view>
			</view>
			<view class="chat_tab_item" >
				<image src="../../static/index_img/chat_top_jianli.png" mode="" style="width: 34rpx;height: 40rpx;"></image>

				<view class="">发简历</view>
			</view>
			<view class="chat_tab_item" >
				<image src="../../static/index_img/chat_top_xingqu.png" mode="" style="width: 38rpx;height: 38rpx;"></image>
				<view class="">不感兴趣</view>
			</view>
		</view>
		<view class="daimian" v-if="is_daimian">
			<view class="daimian_left hui_26">
				<image src="../../static/qy_img/daimian.png" mode=""></image>
				面试待接受
			</view>
			<text class="chakan lan_26" @click="mianshi_xq">查看</text>
		</view>

		<view class="chat_body " @click="tan_hide()">
			<view class="zhanwei" v-if="is_daimian"></view>
			<!-- 有待面试时显示 -->

			<view class="time qian_20">13:52</view>

			<view class="geren_xinxi">
				<view class="geren_xinxi_zhiwei">
					<text class="hei_30_bold">WEB前端工程师</text>
					<text class="lan_30">12-24K</text>
				</view>
				<view class="hei_26 xinxi_gongsi">大明食品 未融资</view>
				<view class="xinxi_yaoqiu hei_24">
					<view class="geren_xinxi_dizhi">
						<text>杭州市</text>
						<text>拱墅区</text>
						万达广场
					</view>
					<text class="nianxian">1-3年</text>
					<text class="xueli">大专</text>
				</view>
				<view class="xinxi_hr hei_24">
					<view class="geren_xinxi_tx">
						<image src="../../static/index_img/hr.png" mode="" class="xinxi_hr_tx"></image>
						<image src="../../static/index_img/renzheng.png" mode="" class="xinxi_hr_renzheng"></image>
					</view>
					<text>高女士</text>
					HR
				</view>
				<view class="geren_xinxi_bottom qian_26">3月2日 11:05由你发起的沟通</view>
			</view>

			<view class="message chat_my">
				<view class="message_chat_body">
					<view class="message_chat_txt">你好，我对贵公司的这个职位很感兴 趣，可以聊聊吗？</view>
					<view class="zhuangtai qian_20">已读</view>
				</view>
				<image src="../../static/qy_img/tx.png" mode="" class="chat_tx"></image>
			</view>
			<view class="message chat_left">
				<image src="../../static/index_img/hr.png" mode="" class="chat_tx"></image>
				<view class="message_chat_body">
					<view class="message_chat_txt">好的</view>
					<view class="zhuangtai qian_20">送达</view>
				</view>
			</view>
		</view>

		<view class="chat_bottom">
			<view class="chat_xiang">
				<view class="chat_xiang_left hei_26">
					你可能想
					<text class="lan_26 xiang_txt">同意招聘者直接获取简历</text>
				</view>
				<image src="../../static/index_img/lan_close.png" mode=""></image>
			</view>
			<view class="chat_bottom_top">
				<button type="" class="cahngyongyu bai_24" v-if="!is_changyong" @click="tan_changyong">常用语</button>
				<image src="../../static/index_img/changyong_icon.png" mode=""v-if="is_changyong" style="width: 56rpx;height: 56rpx;" @click="close_changyong"></image>
				<input type="text" value="" placeholder="新信息" class="hei_28" v-model="chat_txt" confirm-type="send" @confirm="send" />
				<view class="chat_bottom_top_right">
					<image src="../../static/qy_img/biaoqing.png" mode="" @tap="showEmj"></image>
					<image src="../../static/qy_img/jia.png" mode="" @click="jia"></image>
				</view>
			</view>
			<view class="chat_bottom_body">
				<emotion @emotion="handleEmj" v-if="isShowEmj"></emotion>
				<view class="changyong" v-if="is_changyong">
					<view class="changyong_list hei_28">
						<view class="changyong_item" v-for="(item,index) in changyong_arry">
							<view class="changyong_item_left" :class="index==zhankai_index?'wenzi_zhan':''" @click="xuan_changyong(item.text)">
								{{item.text}}
							</view>
							<text class="lan_28" @click="zhankai(index)">{{index==zhankai_index?'':'展开'}}</text>
						</view>
					</view>
					<view class="changyong_bottom hei_30_bold">
						<view class="changyong_add" @click="add_changyong">
							<image src="../../static/index_img/chat_tianjia.png" mode=""></image>添加
						</view>
						<view class="changyong_guanli" @click="go_guanli">
							<image src="../../static/index_img/chat_guanli.png" mode=""></image>管理
						</view>
					</view>	
				</view>
				<view class="chuangkou hei_24" v-if="chuangkou">
					<swiper
						:indicator-dots="false"
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
									<view class="swiper_item_txt">图片</view>
								</view>
								<view class="swiper_item">
									<image src="../../static/qy_img/chuangkou_yuyin.png" mode="" style="width: 59rpx;height: 45rpx;"></image>
									<view class="swiper_item_txt">语音</view>
								</view>
								<view class="swiper_item">
									<view class="swiper_item_top">
										<image src="../../static/qy_img/chuangkou_dianhua.png" mode="" style="width:46rpx;height: 46rpx;"></image>
										<text class="bai_22">new</text>
									</view>
									<view class="swiper_item_txt">语音通话</view>
								</view>
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
			is_daimian: false,
			isShowEmj: false,
			is_changyong:false,
			chat_txt: '',
			chuangkou: false,
			changyong_arry:[
				{"text":'您好，看了贵公司的招聘要求，我觉得我可以胜任这份工作，希望可以聊聊，简历已发你，望查收！'},
				{"text":'您好，我对贵公司的职位很感兴趣，我觉得我能胜任当前职位，简历已发送，望查收~'},
				{"text":'简历已发送，如果不合适还请你直点下，哪点需要改进，在这先谢谢了'}
						],
			zhankai_index:-1
		};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		go_guanli(){
			uni.navigateTo({
				url:'guanli_changyong'
			})
		},
		add_changyong(){
			uni.navigateTo({
				url:'add_changyong'
			})
		},
		change() {},
        zhankai(index){
			
			this.zhankai_index=index
		},
          xuan_changyong(item){
			  this.chat_txt=item
		  },
		  tan_changyong(){
			this.is_changyong=true
			  this.isShowEmj=false
			  this.chuangkou=false
		  },
		  close_changyong(){
			  this.is_changyong=false
		  },
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
				this.is_changyong=false
			} else {
				this.emojiIcon = 'cuIcon-emoji';
			}

			this.isShowEmj = bool;
			this.$emit('show');
		},
		tan_hide() {
			this.isShowEmj = false;
			this.chuangkou = false;
			this.is_changyong=false
		},
		
		send() {
			console.log(this.chat_txt);
			var txt = this.replace_em(this.chat_txt);
		},
		jia() {
			this.chuangkou = !this.chuangkou;
			this.isShowEmj = false;
			this.is_changyong=false
		},
		go_richeng() {
			uni.navigateTo({
				url: 'mian_richeng'
			});
		},
		jianli_xq() {
			uni.navigateTo({
				url: 'jianli_xq'
			});
		},
		mianshi_xq() {
			uni.navigateTo({
				url: 'mian_xq'
			});
		}
	}
};
</script>

<style>
.head {
	background-color: #ffffff;
}
.chat_body {
	padding-left: 30rpx;
	padding-right: 30rpx;
	background-color: #f8f8f8;
	position: relative;
	padding-bottom: 200rpx;
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
	line-height: 76rpx;
}
.geren_xinxi {
	/* height: 451rpx; */
	background-color: #ffffff;
	box-shadow: 0rpx 0rpx 9rpx 0rpx rgba(117, 117, 117, 0.11);
	border-radius: 10rpx;
	padding: 40rpx 24rpx 0;
	box-sizing: border-box;
	margin-bottom: 30rpx;
}
.geren_xinxi_zhiwei {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.geren_xinxi_tx {
	width: 50rpx;
	height: 50rpx;
	border-radius: 100%;
	position: relative;
	margin-right: 22rpx;
	position: relative;
}
.xinxi_hr_tx {
	width: 100%;
	height: 100%;
}
.xinxi_hr_renzheng {
	width: 25rpx;
	height: 24rpx;
	position: absolute;
	bottom: 0;
	right: 0;
}
.xinxi_gongsi {
	margin: 23rpx 0 27rpx;
}
.xinxi_yaoqiu {
	display: flex;
	align-items: center;
}
.geren_xinxi_dizhi {
	height: 44rpx;
	line-height: 44rpx;
	background-color: #f5f5f5;
	padding: 0 16rpx;
}
.geren_xinxi_dizhi text {
	margin-right: 10rpx;
}
.nianxian,
.xueli {
	height: 44rpx;
	background-color: #f5f5f5;
	border-radius: 5rpx;
	display: inline-block;
	padding: 0 16rpx;
	line-height: 44rpx;
	margin-left: 20rpx;
}
.xinxi_hr {
	display: flex;
	align-items: center;
	margin: 30rpx 0 26rpx;
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
	height: 90rpx;
	line-height: 94rpx;
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
.chat_xiang {
	height: 107rpx;
	border-bottom: 2rpx solid #dbdbdb;
	margin-bottom: 30rpx;
	padding: 0 30rpx;
	display: flex;
	align-items: center;

	justify-content: space-between;
}
.chat_xiang image {
	width: 18rpx;
	height: 19rpx;
}
.xiang_txt {
	height: 64rpx;
	background-color: #e7f7f7;
	border-radius: 32rpx;
	line-height: 64rpx;
	padding: 0 20rpx 0 30rpx;
	margin-left: 35rpx;
	display: inline-block;
}
.chat_bottom {
	position: fixed;
	bottom: 0;
	left: auto;
	right: auto;
	padding: 25rpx 0 0;
	width: 100%;
	margin: 0 auto;
	box-sizing: border-box;
	background-color: #ffffff;
}
.chat_bottom_top {
	padding: 0 30rpx 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	box-sizing: border-box;
	border-bottom: 2rpx solid #dbdbdb;
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
	/* padding-top: 20rpx; */
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
.swiper_item_txt {
	position: absolute;
	left: 50%;
	bottom: 0;
	transform: translate(-50%, 0);
	width: 100%;
}
.swiper {
	height: 190rpx;
	padding-top: 20rpx;
}

.swiper_item_top {
	position: relative;
}
.swiper_item_top text {
	display: inline-block;
	padding: 0 6rpx;
	height: 30rpx;
	background-color: #f43a51;
	border-radius: 15rpx;
	line-height: 30rpx;
	position: absolute;
	top: -18rpx;
	right: 14rpx;
}

.tan_biaoji {
	/* height: 513rpx; */
	background-color: #ffffff;
	padding: 50rpx 30rpx 0;
	border-radius: 20rpx 20rpx 0rpx 0rpx;
	box-sizing: border-box;
}
.tan_biaoji_title {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.tan_biaoji_title image {
	width: 28rpx;
	height: 29rpx;
}
.tan_biaoji_list {
	display: flex;
	align-items: center;
	padding: 48rpx 0;
}
.tan_biaoji_list1 {
	border-bottom: 2rpx solid #d9d9d9;
}
.tan_biaoji_list image {
	width: 86rpx;
	height: 86rpx;
}
.tan_biaoji_list_right {
	margin-left: 32rpx;
}
.tan_biaoji_list:first-child {
	border-bottom: 2rpx solid #d9d9d9;
	margin-bottom: 50rpx;
	padding-bottom: 48rpx;
}
.tan_biaoji_list_title {
	margin-bottom: 8rpx;
}

.yao_xq_title {
	height: 80rpx;
	background-color: #00c6c9;
	line-height: 80rpx;
	padding-left: 30rpx;
	border-radius: 10rpx 10rpx 0rpx 0rpx;
}
.yao_xq {
	background-color: #ffffff;
	border-radius: 10rpx;
	width: 600rpx;
	margin-right: 18rpx;
}
.yao_xq_body {
	padding: 0 30rpx 34rpx;
}
.yao_xq_center_list {
	margin-top: 20rpx;
}
.yao_xq_center_list text {
	margin-left: 34rpx;
}
.yao_xq_bottom {
	background-color: #f8f8f8;
	border-radius: 5rpx;
	margin-top: 36rpx;
	padding: 30rpx 30rpx 20rpx;
}
.yao_xq_bottom_list {
	margin-bottom: 12rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.yao_xq_bottom_list_left text {
	margin-right: 20rpx;
	position: relative;
}
.yao_xq_bottom_list_left text::before {
	position: absolute;
	content: '';
	display: inline-block;
	width: 2rpx;
	height: 22rpx;
	background-color: #999999;
	top: 6rpx;
	right: -10rpx;
}
.yao_xq_bottom_list_left text:last-child::before {
	content: none;
}
.gai_shijian {
	text-align: center;
	line-height: 104rpx;
}
.tan_jianli {
	width: 536rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
	width: 536rpx;
	height: 225rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
}
.tan_jianli_title {
	line-height: 130rpx;
	padding-left: 40rpx;
}
.tan_jianli_bottom {
	display: flex;
	align-items: center;
	height: 94rpx;
	border-top: 2rpx solid #c6c6c6;
}
.tan_jianli_queding {
	width: 50%;
	text-align: center;

	line-height: 90rpx;
	border-right: 2rpx solid #eeeeee;
}
.tan_jianli_quxiao {
	width: 50%;
	text-align: center;
	line-height: 90rpx;
}
.tan_mian {
	background-color: #ffffff;
	border-radius: 20rpx 20rpx 0rpx 0rpx;
	padding: 55rpx 30rpx 40rpx;
	box-sizing: border-box;
}
.tan_mian_title {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.tan_mian_title image {
	width: 28rpx;
	height: 29rpx;
}
.tan_mian_bottom {
	display: flex;
	align-items: center;
	margin-top: 40rpx;
}
.tan_mian_bottom_item {
	width: 50%;
	text-align: center;
}
.tan_mian_bottom_item image {
	width: 110rpx;
	height: 110rpx;
	margin-bottom: 10rpx;
}
.chat_my_yao_xq {
	align-items: flex-start;
}

.changyong_item_left{
	max-width: 610rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.wenzi_zhan{
	white-space: normal;
}
.changyong_list{
	padding: 0 30rpx;
	}
.changyong_item{
	display: flex;
	align-items: flex-start;
	padding: 50rpx 0rpx 40rpx;
	border-bottom: 2rpx solid #f3f3f3;
	justify-content: space-between;
}
.changyong_bottom{
display: flex;
	align-items: center;
	height: 170rpx;
}

.changyong_add,.changyong_guanli{
	width: 50%;
	display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
}
.changyong_add::before{
	content: '';
	display: inline-block;
		width: 2rpx;
		height: 34rpx;
		background-color: #e4e4e4;
		position: absolute;
		right: 0;
}
.changyong_add image{
	width: 27rpx;
	height: 30rpx;	
	margin-right: 20rpx;
}
.changyong_guanli image{
	width: 34rpx;
		height: 30rpx;
	margin-right: 16rpx;
}
</style>
