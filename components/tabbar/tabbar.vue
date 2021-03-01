<template>
	<view class="tabBar">
		<view v-for="(item, index) in tabBar" :key="item.url" class="tabbar_item" :class="{ active: item.url == currentPage }" @click="navTo(item, index)">
			<image v-if="item.url == currentPage" :src="item.imgClick" mode=""></image>

			<image v-else :src="item.imgNormal" mode=""></image>
            <text v-if="index==2&&num>0" class="weidu">{{num}}</text>
			<view class="text">{{ item.text }}</view>
		</view>
	</view>
	
</template>

<script>
export default {
	props: {
		currentPage: {
			type: String,
			default: 'index'
		}

	},
	data() {
		return {
			tabBar: [
				{
					url: 'qy/index',
					text: '找人',
					imgNormal: '/static/qy_img/tabber1_no.png',
					imgClick: '/static/qy_img/tabber1_on.png'
				},
				{
					url: 'qy/search',
					text: '搜索',
					imgNormal: '/static/qy_img/tabber2_no.png',
					imgClick: '/static/qy_img/tabber2_on.png'
				},
				
				{
					url: 'qy/xiaoxi',
					text: '消息',
					imgNormal: '/static/qy_img/tabber3_no.png',
					imgClick: '/static/qy_img/tabber3_on.png'
				},
				{
					url: 'qy/search',
					text: '我的',
					imgNormal: '/static/qy_img/tabber4_no.png',
					imgClick: '/static/qy_img/tabber4_on.png'
				}
			],
			
			num:10,
			
			
		};
	},
	mounted() {
		
		
	},
	created() {
		
	},
	methods: {
		navTo(item, index) {
			let _this = this;
			console.log(item.url);

			if (item.url !== _this.currentPage) {
				var isUrl = `/pages/${item.url}`;
				
					uni.redirectTo({
						url: isUrl
					});
				
				
			} else {
				/* this.$parent.toTop() */
			}
		},
		
		
		
	}
};
</script>

<style>
.tabBar {
	width: 100vw;
	height: 116upx;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	z-index: 998;
	background-color: white;
	color: 999;
	border-left: 1px solid #eeeeee;
	border-top: 1px solid #eeeeee;
	border-right: 1px solid #eeeeee;
	display: flex;
	justify-content: space-around;
	
	
	box-sizing: border-box;
	overflow: hidden;
	max-width: 750px;
}
.tabBar .tabbar_item {
	width: 25%;
	font-size: 12px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	color: #666666;
}
.tabBar .active {
	/* border-left: $isBorder;
                border-top: $isBorder; */
	background: white;
	color: #00c6c9;
}

.tabBar image {
	width: 42upx;
	height:42upx;
	margin-left: 5upx;
	margin-bottom: 8rpx;
}
.weidu{
	    width: auto;
	    height: 32rpx;
	    line-height: 32rpx;
	    border-radius: 32rpx;
	    min-width:32rpx;
	    padding: 0 8rpx 0 6rpx;
	    font-size: 18rpx;
	    text-align: center;
	    white-space: nowrap;
		position: absolute;
		top: 8rpx;
		right: 24%;
		box-sizing: border-box;
		background-color:#f43a51 ;
		color: #FFFFFF;
}
</style>
