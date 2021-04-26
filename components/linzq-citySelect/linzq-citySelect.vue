<template>
	<div>
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">选择城市</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<scroll-view class="calendar-list" scroll-y="true" :scroll-into-view="scrollIntoId">
			<div class="header">
				<image src="../../static/index_img/xiaoxi_sou.png" mode=""></image>
				<input class="input" @input="onInput" placeholder="搜索城市名或拼音" v-model="searchValue" />
			</div>
			<view v-if="disdingwei" id="hot">
				<!-- 定位模块 -->
				<view class="dingwei hei_30">
					<view class="dingwei_Tips hui_30">
						<image src="../../static/qy_img/dizhi.png" mode=""></image>
						您所在地区
					</view>
					<view class="dingwei_city">
						<view class="dingwei_city_one">{{ position }}</view>
						<!-- <view class="dingweis_div" @click="getWarpweft">
							
							<text>{{po_tips}}</text>
						</view> -->
					</view>
				</view>

				<!-- 最近模块 -->
				<view class="dingwei hei_30" v-if="Visit.length >= 0">
					<view class="dingwei_Tips">历史访问目的地</view>
					<view class="dingwei_city dingwei_city_zuijin">
						<view class="dingwei_city_one " v-for="(item, index) in Visit" v-if="index < 2" @click="back_city(item)">{{ item.cityName }}</view>
					</view>
				</view>

				<!-- 热门城市 -->
				<view class="dingwei hei_30">
					<view class="dingwei_Tips">热门城市</view>
					<view class="dingwei_city dingwei_city_zuijin">
						<view class="dingwei_city_one " v-for="(item, index) in hotCity" @click="back_city(item)">{{ item.cityName }}</view>
					</view>
				</view>
			</view>

			<!-- 城市列表 -->
			<view v-if="searchValue == ''" v-for="(item, index) in list" :id="getId(index)" :key="index">
				<view class="letter-header">{{ getId(index) }}</view>
				<view class="city_list">
					<view class="dingwei_city_one hei_30" v-for="(city, i) in item" :key="i" @click="back_city(city)">
						<text class="city">{{ city.cityName }}</text>
					</view>
				</view>
			</view>
			<!-- 搜索结果 -->
			<view class="city_list">
				<view class="dingwei_city_one hei_30" v-for="(item, index) in searchList" @click="back_city(item)">
					<text class="city">{{ item.cityName }}</text>
				</view>
			</view>
		</scroll-view>

		<!-- 右侧字母 -->
		<view class="letters" v-if="searchValue == ''">
			<!-- <view class="letters-item" @click="scrollTo('hot')">最近</view> -->
			<view class="letters-item" v-for="item in letter" :key="item" @click="scrollTo(item)">{{ item }}</view>
		</view>

		<!-- 选中之后字母 -->
		<view class="mask" v-if="showMask">
			<view class="mask-r">{{ selectLetter }}</view>
		</view>
	</div>
</template>

<script>
import Citys from '../city.js';
export default {
	components: {},
	props: {},

	computed: {
		hotCity() {
			return Citys.hotCity;
		},

		citys() {
			return Citys.cities;
		}
	},

	data() {
		return {
			statusBarHeight: this.statusBarHeight,
			ImgUrl: this.ImgUrl,
			letter: [],
			selectLetter: '',
			searchValue: '',
			scrollIntoId: '',
			list: [],
			tId: null,
			searchList: [],
			showMask: false,
			disdingwei: true,
			Visit: [], //最近访问
			position: '杭州',
			longitude: '', //经度
			latitude: '', //纬度
			seconds: 3,
			po_tips: '重新定位'
		};
	},

	created() {
		//获取存储的最近访问
		var that = this;
		uni.getStorage({
			key: 'Visit_key',
			success: function(res) {
				that.Visit = res.data;
			}
		});
		//获取定位 经度纬度
		that.getWarpweft();
		//获取city.js 的程序字母
		var mu = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'w', 'x', 'y', 'z'];
		var tmp = [];
		for (var i = 0; i < mu.length; i++) {
			var item = mu[i];
			for (var j = 0; j < this.citys.length; j++) {
				var py = this.citys[j].py;
				if (py.substring(0, 1) == item) {
					if (tmp.indexOf(item) == -1) {
						this.list[i] = [this.citys[j]];
						tmp.push(item);
						this.letter.push(item.toUpperCase());
					} else {
						this.list[i].push(this.citys[j]);
					}
				}
			}
		}
	},
	methods: {
		getId(index) {
			return this.letter[index];
		},

		scrollTo(letter) {
			this.showMask = true;
			this.selectLetter = letter == 'hot' ? '最' : letter;
			setTimeout(() => {
				this.showMask = false;
			}, 300);
			this.scrollIntoId = letter;
		},

		query(source, text) {
			let res = [];
			var self = this;
			res = source.filter(item => {
				const arr = [];
				let isHave = false;
				Object.keys(item).forEach(prop => {
					const itemStr = item[prop];
					self.isString(itemStr) &&
						itemStr.split(',').forEach(val => {
							arr.push(val);
						});
				});
				arr.some(val => {
					isHave = new RegExp('^' + text).test(val);
					return isHave;
				});
				return isHave;
			});
			console.log(JSON.stringify(res));
			return res;
		},

		isString(obj) {
			return typeof obj === 'string';
		},

		onInput(e) {
			const value = e.target.value;
			console.log(value);
			if (value !== '' && this.citys && this.citys.length > 0) {
				const queryData = this.query(this.citys, String(value).trim());
				this.searchList = queryData;
				this.disdingwei = false;
			} else {
				this.searchList = [];
				this.disdingwei = true;
			}
		},

		back_city(item) {
			if (item) {
				this.$emit('back_city', item);
				//unshift 把数据插入到首位，与push相反
				this.Visit.unshift(item);
				this.searchValue = '';
				this.disdingwei = true;
				var arr = this.Visit;
				//数组去重
				function distinct(arr) {
					let newArr = [];
					for (let i = 0; i < arr.length; i++) {
						if (newArr.indexOf(arr[i]) < 0) {
							newArr.push(arr[i]);
						}
					}
					return newArr;
				}
				this.Visit = distinct(arr);
				// console.log(this.Visit, '---最近访问');
				uni.setStorage({
					key: 'Visit_key',
					data: this.Visit
				});
			} else {
				this.$emit('back_city', 'no');
			}
		},
		getWarpweft() {
			var that = this;
			that.po_tips = '定位中...';
			let countdown = setInterval(() => {
				that.seconds--;
				uni.getLocation({
					type: 'wgs84',
					success: function(res) {
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
						that.longitude = res.longitude;
						that.latitude = res.latitude;
					}
				});
				if (that.seconds <= 0) {
					that.seconds = 3;
					that.po_tips = '重新定位';
					clearInterval(countdown);
				}
			}, 1000);
		}
	}
};
</script>

<style scoped>
.wrapper {
	padding: 0 30rpx;
}
.mask {
	position: absolute;
	bottom: 0upx;
	top: 83upx;
	left: 0upx;
	right: 0upx;
	width: 750upx;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0);
}

.mask-r {
	height: 120upx;
	width: 120upx;
	border-radius: 60upx;
	display: flex;
	background: rgba(0, 0, 0, 0.5);
	justify-content: center;
	align-items: center;
	font-size: 40upx;
	color: #ffffff;
}

.content {
	height: 100%;
	width: 100%;
	background-color: #ffffff;
}

.header {
	height: 64upx;
	display: flex;
	padding: 0 30rpx;
	align-items: center;
	justify-content: center;
	background-color: #f5f5f5;
	border-radius: 30rpx;
	margin-top: 20rpx;
}

.header image {
	width: 26rpx;
	height: 26rpx;
	margin: 0 20rpx 0 32rpx;
}

.back_div {
	width: 65upx;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.back_img {
	width: 35upx;
	height: 35upx;
}

.input {
	font-size: 28upx;
	width: 100%;

	border-radius: 40upx;
	height: 64rpx;

	line-height: 64rpx;

	box-sizing: border-box;
}

.title {
	font-size: 30upx;
	color: white;
}

.show {
	left: 0;
	width: 100%;
	transition: left 0.3s ease;
}

.hide {
	left: 100%;
	width: 100%;
	transition: left 0.3s ease;
}

.title {
	font-size: 30upx;
	color: white;
}

.calendar-list {
	position: absolute;

	bottom: 0upx;
	width: 100%;
	background-color: #ffffff;
	padding: 0 30rpx;
	box-sizing: border-box;
}

.letters {
	position: absolute;
	right: 30upx;
	bottom: 0px;
	width: 50upx;
	top: 260upx;
	color: #00c6c9;
	text-align: center;
	font-size: 22upx;
}

.letters-item {
	margin-bottom: 5upx;
}

.letter-header {
	line-height: 90rpx;
	font-size: 28rpx;
	color: #666666;
}

.city-div {
	width: 215rpx;
	height: 70rpx;
	background-color: #f4f4f4;
	border-radius: 5rpx;
}

.dingwei {
	width: 100%;

	box-sizing: border-box;
}

.dingwei_Tips {
	display: flex;
	align-items: center;
	margin: 30rpx 0;
}
.dingwei_Tips image {
	width: 20rpx;
	height: 25rpx;
	margin-right: 6rpx;
	vertical-align: middle;
}
.dingwei_city {
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}

.dingwei_city_one {
	width: 216rpx;
	height: 70rpx;
	background-color: #f4f4f4;
	border-radius: 5rpx;
	text-align: center;
	line-height: 70rpx;
	margin-right: 20rpx;
	margin-bottom: 20rpx;
}
.dingwei_city_one:nth-child(3n) {
	margin-right: 0;
}

.dingweis_div {
	display: flex;
	align-content: flex-end;
	align-items: center;
	font-size: 24upx;
	color: #fd5745;
}

.dingweis {
	width: 32upx;
	height: 32upx;
}

.dingwei_city_zuijin {
	display: flex;
	justify-content: flex-start;
}
.city_list {
	display: flex;
	align-items: center;
	/* justify-content: space-between; */
	flex-wrap: wrap;
}
</style>
