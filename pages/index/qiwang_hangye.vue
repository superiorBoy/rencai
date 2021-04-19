<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">期望行业</view>
			<view class=" head_right lan_30_bold"><text @click="baocun">保存</text></view>
		</view>

		<view class="zi_body">
			<view class="qiwang_body">
				<view class="qiwang_top">
					<view class="qiwang_top_xuan">
						<text class="yixuan_txt">已选行业</text>
						<view class="hei_36_bold">
							<text class="lan_36">{{xuan_num}}</text>/3
						</view>
					</view>
					<text class="hui_30">请选择行业，最多3个</text>
				</view>

				<view class="qiwang_item">
					<view class="qiwang_item_title hei_30">
						<text>推荐</text>
						<image src="../../static/index_img/xuan_xiangxia.png" mode=""></image>
					</view>
					<view class="qiwang_list">
						<text>电子商务</text>
						<text>互联网</text>
						<text>移动互联网</text>
					</view>
				</view>
				<view class="qiwang_item">
					<view class="qiwang_item_title hei_30">
						<text>互联网/IT/电子/通信</text>
						<image src="../../static/index_img/xuan_xiangxia.png" mode=""></image>
					</view>
					<view class="qiwang_list">
						<text v-for="(item,index) in hangye_arry" :class="{ checkedYes: checkedArrey.indexOf(item) != -1 }" @click="xuan_hangye(item)">{{ item }}</text>
					</view>
				</view> 
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			hangye_arry: [
				'电子商务',
				'游戏',
				'媒体',
				'广告营销',
				'数据服务',
				'医疗健康',
				'生活服务',
				'O2O',
				'旅游',
				'分类信息',
				'音乐/视频/阅读',
				'在线教育',
				'社交网络',
				'人力资源服务',
				'企业服务',
				'信息安全',
				'新零售',
				'智能硬件',
				'移动互联网',
				'互联网',
				'计算机软件',
				'计算机硬件',
				'计算机服务',
				'通信/网络设备',
				'运营商/增值服务',
				'电子/半导体/集成电路'
			],
			checkedArrey:[],
			xuan_num:0
		};
	},
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		xuan_hangye(item) {
			
			if (this.checkedArrey.indexOf(item) == -1) {
				// console.log(index); //打印下标
				if(this.xuan_num>=3){
					uni.showToast({
						title: '最多选择8项',
						duration: 2000,
						icon: 'none'
					});
					
				}else{
				this.checkedArrey.push(item); //选中添加到数组里
					
				}
				
			} else {
				this.checkedArrey.splice(this.checkedArrey.indexOf(item), 1); //取消
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
}
.qiwang_body {
	padding: 0 30rpx;
}
.qiwang_top_xuan {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin-bottom: 20rpx;
}
.yixuan_txt {
	font-size: 48rpx;
	font-weight: bold;
}
.qiwang_top {
	margin: 60rpx 0 56rpx;
}
.qiwang_item_title{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.qiwang_item_title image {
	width: 19rpx;
	height: 11rpx;
}
.qiwang_list {
	padding-bottom: 20rpx;
}
.qiwang_list text {
	height: 68rpx;
	background-color: #f4f4f4;
	display: inline-block;
	padding: 0 30rpx;
	margin: 0 20rpx 20rpx 0;
}
.checkedYes{
	background-color: #e9f4f4;
	color: #00c6c9;
}
</style>
