<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">求职期望</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">
			<view class="bianqian_top">
				<view class="bianqian_top_left">
					<view class="hei_48_bold bianqian_top_title">添加个人标签</view>
					<view class="hui_30">挑选一些符合你形象的标签吧~</view>
				</view>
				<view class="bianqian_top_right hei_26_bold">
					<text class="lan_26">{{xuan_num}}</text>
					/8
				</view>
			</view>
			<view class="bianqian_list hei_26">
				<text v-for="(item, index) in bianqian_arry" @click="xuan_biaoqian(index)" :class="{ checkedYes: checkedArrey.indexOf(index) != -1 }">{{ item }}</text>
			</view>
			<view class="zidingyi lan_26" @click="tan_add">+自定义</view>
		</view>
		
		<view class="kaiqi_btn"><button class="kaiqi bai_30" :class="xuan_num>0?'bianlan':''">开启我的个人主页</button></view>
	
	<!-- 弹出层 -->
	<uni-popup id="popup_add" ref="popup_add" type="center">
		<view class="tan_add">
			<input type="text" value="" placeholder="请输入" class="hei_26" v-model="add_txt"/>
			<view class="tan_add_bottom">
				<view type="default" class="add_queding lan_28" @click="tan_add_queding">确定</view>
				<view type="default" class="add_quxiao qian_28" @click="tan_add_quxiao">取消</view>
				</view>	
		</view>
	</uni-popup>
	
	
	
	</view>
</template>

<script>
export default {
	data() {
		return {
			bianqian_arry: [
				'抗压能力',
				'诚实守信',
				'阳光',
				'户外运动',
				'宅',
				'执行能力',
				'吃苦耐劳',
				'学习能力',
				'亲和力',
				'稳重',
				'适应能力',
				'团队管理',
				'退伍军人',
				'靠谱',
				'工作认真',
				'善于沟通',
				'自律',
				'积极主动',
				'勤奋',
				'团队意识',
				'专注',
				'乐观开朗'
			],
			biao_index: 0,
			xuan_num:0,
			checkedArrey: [],
			add_txt:''
		};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		tan_add() {
			this.$refs.popup_add.open();
		},
		tan_add_queding() {
			if(this.add_txt==''){
				uni.showToast({
					title: '请输入',
					duration: 2000,
					icon: 'none'
				});
				
			}else{
				this.$refs.popup_add.close();
				this.bianqian_arry.push(this.add_txt)
				this.add_txt=''
			}
		
		},
		tan_add_quxiao() {
			this.$refs.popup_add.close();
		},
		xuan_biaoqian(index) {
			
			if (this.checkedArrey.indexOf(index) == -1) {
				// console.log(index); //打印下标
				if(this.xuan_num>=8){
					uni.showToast({
						title: '最多选择8项',
						duration: 2000,
						icon: 'none'
					});
					
				}else{
				this.checkedArrey.push(index); //选中添加到数组里
					
				}
				
			} else {
				this.checkedArrey.splice(this.checkedArrey.indexOf(index), 1); //取消
			}
			this.xuan_num=this.checkedArrey.length
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
	padding-left: 30rpx;
	padding-right: 30rpx;
	box-sizing: border-box;
	padding-bottom: 200rpx;
}
.bianqian_top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 60rpx 0 70rpx;
}
.bianqian_top_title {
	margin-bottom: 20rpx;
}
.bianqian_top_right {
	position: relative;
	top: -20rpx;
}
.bianqian_list text {
	height: 62rpx;
	background-color: #f4f4f4;
	border-radius: 10rpx;
	display: inline-block;
	margin: 0 20rpx 20rpx 0;
	line-height: 62rpx;
	padding: 0 30rpx;
	box-sizing: border-box;
	border: 2rpx solid #f4f4f4;
}
.zidingyi {
	width: 166rpx;
	height: 66rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
	border: solid 2rpx #00c6c9;
	line-height: 66rpx;
	text-align: center;
}
.kaiqi {
	height: 80rpx;
	background-color: #9eedea;
	border-radius: 10rpx;
	line-height: 80rpx;
	width: 100%;
	
}
.kaiqi_btn {
	position: fixed;
	bottom: 0;
	width: 100%;
	box-sizing: border-box;
	padding: 0 30rpx 30rpx;
	background-color: #FFFFFF;
}
.checkedYes {
	color: #00c6c9;
	border: 2rpx solid #00c6c9 !important;
	box-sizing: border-box;
}
.bianlan{
		background-color: #00c6c9;
}
.tan_add{
	background-color: #FFFFFF;
	padding: 30rpx 30rpx 0;
	height: 200rpx;
	box-sizing: border-box;
}
.tan_add input{
	height: 30rpx;
}
.tan_add_bottom{
	margin-top:40rpx;
	display: flex;
	align-items: center;
	border-top: 2rpx solid #EEEEEE;
}
.add_queding {
	width: 50%;
	text-align: center;
    border-right: 2rpx solid #EEEEEE;
	line-height: 90rpx;
	
}
.add_quxiao {
	width: 50%;
	text-align: center;
	line-height: 90rpx;
}
</style>
