<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">个人信息</view>
			<view class=" head_right hei_30_bold"><text @click="baocun">保存</text></view>
		</view>

		<view class="zi_body">
			<view class="geren_list">
				<view class="wei_shimimg">
					<view class="wei_shimimg_left">
						<view class="hei_30_bold wei_shimimg_title">
							<image src="../../static/index_img/geren_shiming.png" mode=""></image>
							未认证实名信息
						</view>
						<view class="hei_30">实名可帮助你找回账号</view>
					</view>
					<text class="lan_28">去认证</text>
				</view>

				<view class="geren_item geren_tx" @click="up_zheng">
					<text>头像</text>
					<image :src="touxiang" mode="" class="tx" ></image>
				</view>
				<view class="geren_item">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">姓名</view>
						<view class="hei_32"><input type="text" value="" v-model="name" class="hei_32"/></view>
					</view>
					<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
				<picker mode="selector" :range="xingbie_arry" @change="xingbie_change" >
				<view class="geren_item">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">性别</view>
						<view class="hei_32">{{xingbie==1?'男':xingbie==2?'女':'请选择'}}</view>
					</view>
					<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
				</picker>
					<timeSelector showType="date" @btnConfirm="gongzuo_change">
				<view class="geren_item">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">参加工作时间</view>
						<view class="hei_32">{{worktime?worktime:'请选择'}}</view>
					</view>
					<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
				</timeSelector>
				<view class="geren_item">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">微信号</view>
						<view class="hei_32"><input type="text" value=""placeholder="请输入" v-model="weixin" class="hei_32"/></view>
					</view>
					<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
				<view class=" qian_26 tishi">
					<image src="../../static/index_img/tishi.png" mode=""></image>
					微信号只有在你主动与招聘者交换时候，才会告知对方
				</view>
				<timeSelector showType="date" @btnConfirm="chusheng_change">
				<view class="geren_item">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">出生年月</view>
						<view class="hei_32">{{birthday?birthday:'请选择'}}</view>
					</view>
					<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
             </timeSelector>
				<view class="geren_item">
					<view class="geren_item_top">
						<view class="hui_26 geren_item_title">邮箱</view>
						<view class="hei_32"> <input type="text" value="" placeholder="请输入" v-model="youxiang" class="hei_32"/></view>
					</view>
					<image src="../../static/qy_img/go_right.png" mode="" class="go_right"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import timeSelector from '@/components/wing-time-selector/wing-time-selector.vue';
export default {
	components: {
		timeSelector
	},
	data() {
		return {
			xingbie_arry:['男','女'],
			xingbie:'',
			worktime:'2017-06',
			birthday:'1990-01',
			weixin:'',
			youxiang:'',
			name:'',
			img_url:uni.getStorageSync("img_url"),
			user:''	,
			touxiang:''
			
		};
	},
	onLoad() {
		this.$http
			.post({
				url: '/userapi/user/user'
			})
			.then(res => {
				this.user=res.data.user
				this.name = res.data.user.nickname;
				this.birthday = res.data.user.birthday;
				this.worktime = res.data.user.worktime;
				this.weixin = res.data.user.weixin;
				this.youxiang = res.data.user.email;
				this.userid = res.data.user.userid;
				this.xingbie = res.data.user.sexid;
				this.touxiang=this.img_url+res.data.user.photourl
			});
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		xingbie_change(e){
			
			this.xingbie=e.detail.value+1
		},
		gongzuo_change(e) {
			this.worktime = e.key;
		},
		chusheng_change(e){
			this.birthday = e.key;
		},
		baocun(){
			var data={
				email:this.youxiang,
				nickname:this.name,
				weixin:this.weixin,
				sexid:this.xingbie,
				worktime:this.worktime,
				birthday:this.birthday,
				photourl:this.touxiang
			}
			
			this.$http
				.post({
					url: '/userapi/user/upuser',
					data:data
				})
				.then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: '修改成功',
							duration: 2000
						});
					}
				});
			
			
		},
		up_zheng() {
			let that = this;
			uni.chooseImage({
				success(res) {
					console.log(res);

					//#ifdef H5
					uni.request({
						url: res.tempFilePaths[0],
						method: 'GET',
						responseType: 'arraybuffer',
						success: ress => {
							let base64 = wx.arrayBufferToBase64(ress.data); //把arraybuffer转成base64
							base64 = 'data:image/jpeg;base64,' + base64; //不加上这串字符，在页面无法显示的哦
							that.touxiang = base64;

						}
					});
					//#endif
					//#ifdef APP-PLUS
					
					let path = that.getLocalFilePath(res.tempFilePaths[0]);
					plus.io.resolveLocalFileSystemURL(
						path,
						function(entry) {
							entry.file(
								function(file) {
									var fileReader = new plus.io.FileReader();
									fileReader.onload = function(data) {
										
										this.touxiang=data.target.result

									};
									fileReader.onerror = function(error) {
										console.log(error);
									};
									fileReader.readAsDataURL(file);
								},
								function(error) {
									console.log(error);
								}
							);
						},
						function(error) {
							console.log(error);
						}
					);
					
					//#endif
				}
			});
		},
		getLocalFilePath(path) {
			if (path.indexOf('_www') === 0 || path.indexOf('_doc') === 0 || path.indexOf('_documents') === 0 || path.indexOf('_downloads') === 0) {
				return path;
			}
			if (path.indexOf('file://') === 0) {
				return path;
			}
			if (path.indexOf('/storage/emulated/0/') === 0) {
				return path;
			}
			if (path.indexOf('/') === 0) {
				var localFilePath = plus.io.convertAbsoluteFileSystem(path);
				if (localFilePath !== path) {
					return localFilePath;
				} else {
					path = path.substr(1);
				}
			}
			return '_www/' + path;
		},
	}
};
</script>

<style>
.head {
	background-color: #ffffff;
	border-bottom: 2rpx solid #f5f5f5;
}
.zi_body {
	
}
.wei_shimimg {
	display: flex;
	align-items: flex-start;
	padding: 40rpx;
	box-sizing: border-box;
	height: 166rpx;
	background-color: #ffffff;
	box-shadow: 0rpx 0rpx 18rpx 0rpx rgba(0, 7, 0, 0.11);
	border-radius: 10rpx;
	margin-top: 20rpx;
	justify-content: space-between;
}
.wei_shimimg_left image {
	width: 27rpx;
	height: 31rpx;
	margin-right: 17rpx;
}
.wei_shimimg_title {
	display: flex;
	align-items: center;
	margin-bottom: 16rpx;
}
.geren_list {
	padding: 0 30rpx;
}
.geren_item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 172rpx;
	border-bottom: 2rpx solid #f5f5f5;
}
.geren_item input{
	width: 560rpx;
	}
.geren_tx {
	align-items: flex-end;
	padding-bottom: 30rpx;
	padding-top: 25rpx;
	height: auto;
}
.geren_item_left {
	max-width: 80%;
}
.tx {
	width: 120rpx;
	height: 120rpx;
	border-radius: 100%;
}
.go_right {
	width: 12rpx;
	height: 22rpx;
	position: relative;
	top: 20rpx;
}
.geren_item_title {
	margin-bottom: 10rpx;
}
.tishi {
	display: flex;
	align-items: center;
	margin-top: 10rpx;
}
.tishi image {
	width: 24rpx;
	height: 24rpx;
	margin-right: 8rpx;
}
</style>
