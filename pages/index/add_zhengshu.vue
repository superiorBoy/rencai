<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">资格证书</view>
			<view class=" head_right hei_30_bold"><text @click="baocun">保存</text></view>
		</view>

		<view class="zi_body">
			<view class="qiwang_body">
				<view class="qiwang_top">
					<view class="qiwang_top_xuan">
						<text class="yixuan_txt">资格证书</text>
						<view class="hei_36_bold">
							<text class="lan_36">{{xuan_num}}</text>/30
						</view>
					</view>
					<view class="shuru_zhengshu">
						<input type="text" value="" placeholder="请选择或输入证书" class="hei_30" />
					</view>
					
				</view>


				<view class="qiwang_item">
					<view class="qiwang_item_title hei_30" @click="zhankai(1)" >
						<text>英语类</text>
						<image src="../../static/index_img/xuan_xiangxia.png" mode="" :class="{ xuanzhuan: zhankai_arry.indexOf(1) != -1 }"></image>
					</view>
					<view class="qiwang_list hui_26"  :class="{ zhankai_on: zhankai_arry.indexOf(1) != -1 }">
						<text v-for="(item,index) in hangye_arry" :class="{ checkedYes: checkedArrey.indexOf(item) != -1 }" @click="xuan_hangye(item)">{{ item }}</text>
					</view>
				</view>
				 <view class="qiwang_item">
				 	<view class="qiwang_item_title hei_30" @click="zhankai(2)" >
				 		<text>外语类</text>
				 		<image src="../../static/index_img/xuan_xiangxia.png" mode="" :class="{ xuanzhuan: zhankai_arry.indexOf(1) != -1 }"></image>
				 	</view>
				 	<view class="qiwang_list hui_26" :class="{ zhankai_on: zhankai_arry.indexOf(2) != -1 }">
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
				'大学英语四级',
				'大学英语六级',
				'雅思学士类高分者',
				'英语专业四级',
				'英语专业八级',
				'托福网考高分者',
				'TOEIC托业英语考试',
				'GRE',
				'GMAT',
				'BEC剑桥商务英语',
				'PETS全国英语等级考试',
				'CATTI英语翻译资格证书',
				'上海外语口译证书',
				'ETTBL商务英语笔译证书',
				'ETTBL商务英语口译证书',
				'TOEIC Bridge托业桥英语证书',
				'高等学校英语应用能力考试'

			],
			checkedArrey:[],
			xuan_num:0,
			zhankai_arry:[1,2]
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
				if(this.xuan_num>=30){
					uni.showToast({
						title: '最多选择30项',
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
		},
		zhankai(index){
			if (this.zhankai_arry.indexOf(index) == -1) {
				this.zhankai_arry.push(index); //选中添加到数组里
			} else {
				this.zhankai_arry.splice(this.zhankai_arry.indexOf(index), 1); //取消
			}
		}
	}
};
</script>

<style>
.head {
	background-color: #ffffff;
	
}

.qiwang_body {
	padding: 0 30rpx;
}
.qiwang_top_xuan {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin-bottom: 40rpx;
}
.yixuan_txt {
	font-size: 48rpx;
	font-weight: bold;
}
.qiwang_top {
	margin: 40rpx 0 10rpx;
	border-bottom: 2rpx solid #e9e9e9;
	padding-bottom: 46rpx;
}
.qiwang_item_title{
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	
}
.tuijian{
	height: 80rpx;
}
.qiwang_item_title image {
	width: 19rpx;
	height: 11rpx;
}
.qiwang_list {
	padding-bottom: 20rpx;
	display: none;
	
}
.qiwang_item_tuijian{
	padding: 0 !important;
}
.qiwang_list_tuijian{
	padding-bottom: 20rpx;
}
.qiwang_list_tuijian text{
	height: 68rpx;
	background-color: #f4f4f4;
	display: inline-block;
	padding: 0 30rpx;
	line-height: 68rpx;
	margin: 0 20rpx 20rpx 0;
}
.zhankai_on{
	display: flex;
	flex-wrap: wrap;
	margin-top: 26rpx;
	
}
.xuanzhuan{
	transform:rotate(180deg);

}
.qiwang_list text {
	height: 68rpx;
	background-color: #f4f4f4;
	display: inline-block;
	padding: 0 30rpx;
	line-height: 68rpx;
	margin: 0 20rpx 20rpx 0;
}
.checkedYes{
	background-color: #e9f4f4 !important;
	color: #00c6c9;
}
.qiwang_item{
	padding-bottom:40rpx;
	padding-top: 40rpx;
	border-bottom: 2rpx solid #e9e9e9;
}
.shuru_zhengshu input{
	width: 100%;
}
</style>
