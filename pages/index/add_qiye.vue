<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">新增企业</view>
			<view class=" head_right hei_30_bold"></view>
		</view>
		<view class=" index_shaixuan qiye_sousuo hui_26">
			<view class="qiye_sousuo_left">
				<view class="qiye_sousuo_left_left">
					<image src="../../static/index_img/guanjian_sousuo.png" mode="" class="sousuo_icon"></image>
					<input type="text" value="" placeholder="输入您想要屏蔽的公司" class="hei_26" confirm-type="search" @confirm="sousuo" v-model="sousuo_txt" />
				</view>
				<image src="../../static/qy_img/tan_close.png" mode="" class="qingchu_icon" v-if="sousuo_txt"></image>
			</view>
			<text @click="sousuo" v-if="!xianshi">搜索</text>
			<text @click="quxiao" v-if="xianshi">取消</text>
		</view>
		<view class="chat_body">
			<view class="sou_tishi" v-if="!xianshi">
				<view class="hei_28_bold sou_tishi_title">搜索方式如下</view>
				<view class="hui_26">支持使用公司的简称或全称进行搜索</view>
			</view>

			<view class="xianshi_body" v-if="xianshi">
				<view class="xianshi_body_top">
					<view class="xianshi_list" v-for="(item, index) in list" @click="seletedStatus(item.value)">
						<checkbox :value="item.value" :checked="checkList.includes(String(item.value))" />
						<view class="xianshi_list_right">
							<view class="hei_26 xianshi_list_name">{{ item.name }}</view>
							<view class="qian_24">
								简称：
								<text class="lan_24">{{ item.jiancheng }}</text>
							</view>
						</view>
					</view>
				</view>
				<view class="xianshi_body_bottom">
					<view class="xianshi_left">
						<label class="radio hei_28">
							<checkbox value="" :checked="seletedAll" @tap="_seletedAll" />
							<text>全选</text>
						</label>
					</view>
					<view class="xianshi_right bai_28" @click="queding">屏蔽所选公司</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			sousuo_txt: '',
			xianshi: false,
			seletedAll: false,
			checkList: [], //选中值
			list: [
				{
					value: '1',
					name: '郑州字节跳动智能科技有限公司',
					jiancheng: '字节跳动'
				},
				{
					value: '2',
					name: '泰州字节跳动网络科技有限公司',
					jiancheng: '字节跳动'
				},
				{
					value: '3',
					name: '广州字节跳动科技有限公司',
					jiancheng: '字节跳动'
				},
				{
					value: '4',
					name: '北京字节跳动科技有限公司',
					jiancheng: '今日头条'
				},
				{
					value: '5',
					name: '北京字节跳动科技有限公司',
					jiancheng: '字节跳动'
				},

				{
					value: '6',
					name: '天津字节跳动科技有限公司',
					jiancheng: '字节跳动'
				}
			]
		};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		sousuo() {
			console.log(this.sousuo_txt);
			this.xianshi=true
		},
		seletedStatus(e) {
			// this.checkList = e;
			// console.log(this.checkList);

			if (this.checkList.indexOf(e) == -1) {
				this.checkList.push(e); //选中添加到数组里
			} else {
				this.checkList.splice(this.checkList.indexOf(e), 1); //取消
			}

			if (this.checkList.length === this.list.length) {
				this.seletedAll = true;
			}
		},
		_seletedAll() {
			if (!this.seletedAll) {
				this.seletedAll = true;
				this.checkList = [];
				this.list.map(item => {
					this.checkList.push(item.value);
				});
				console.log(this.checkList);
				console.log('true');
			} else {
				this.seletedAll = false;
				this.checkList = [];
				console.log('false');
			}
		},
		queding() {
			console.log(this.checkList);
		},
		quxiao(){
			this.xianshi=false
			this.sousuo_txt=''
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
}

.qiye_sousuo {
	position: fixed;
	height: 120rpx;
	box-shadow: 0px 0px 10px 0px rgba(241, 241, 241, 0.92);
	display: flex;
	align-items: center;
	padding: 0 30rpx;
	width: 100%;
}
.qiye_sousuo_left {
	width: 594rpx;
	height: 60rpx;
	background-color: #f3f3f3;
	border-radius: 30rpx;
	margin-right: 26rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 20rpx;
	box-sizing: border-box;
}
.qiye_sousuo_left input {
	width: 80%;
}
.qiye_sousuo_left_left {
	display: flex;
	align-items: center;
	width: 90%;
}
.sousuo_icon {
	width: 25rpx;
	height: 25rpx;
	margin: 0 16rpx 0 28rpx;
}
.sou_tishi {
	margin-top: 40rpx;
}
.sou_tishi_title {
	margin-bottom: 10rpx;
}
.qingchu_icon {
	width: 24rpx;
	height: 24rpx;
}
.xianshi_list {
	display: flex;
	align-items: flex-start;
	padding: 30rpx 0;
	border-bottom: 2rpx solid #efefef;
}
.xianshi_list_right {
	margin-left: 18rpx;
}
.xianshi_list_name {
	margin-bottom: 10rpx;
}
.xianshi_body_bottom {
	height: 100rpx;
	background-color: #ffffff;
	box-shadow: 0rpx -3rpx 7rpx 0rpx rgba(0, 0, 0, 0.07);
	position: fixed;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
}
.xianshi_left {
	/* width: 63%; */
}
.xianshi_right {
	width: 280rpx;
	height: 100%;
	line-height: 100rpx;
	text-align: center;
	background-color: #00c6c9;
}
.xianshi_left text {
	margin-left: 14rpx;
	vertical-align: middle;
}
</style>
