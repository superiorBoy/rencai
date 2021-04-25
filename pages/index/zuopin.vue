<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold"></view>
			<view class=" head_right hei_30_bold"><text>保存</text> </view>
		</view>

		<view class="zi_body">
		<view class="zuopin_top">
			<view class="zuopin_top_txt">
				设计作品
			</view>
			<view class="hui_28">
				上传展示自身优势的图片，让招聘者更了解你
			</view>
		</view>
		
		<view class="tu_list">
			
			<view class="tu_up" @click="up_tu">
				<image src="../../static/index_img/tu_jia.png" mode=""></image>
			</view>
		</view>
		<view class="zuopin_bottom hui_24">
			<view class="zuopin_bottom_title hei_24_bold">
				审核标准
			</view>
			<view class="zuopin_bottom_txt">
				1、上传的照片符合当前主题，无关图片将不予通过
			</view>
			<view class="zuopin_bottom_txt">
				2、图片不能包含有敏感信息
			</view>
			<view class="zuopin_bottom_txt">
				3、图片中不含微信、电话、邮箱等联系方式
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
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		up_tu() {
			let that = this
			uni.chooseImage({
				success(res) {
					console.log(res)
					that.zhiye_zhao = res.tempFilePaths[0];
				
				//#ifdef H5	
					
					uni.request({
						url: res.tempFilePaths[0],
						method: 'GET',
						responseType: 'arraybuffer',
						success: ress => {
							let base64 = wx.arrayBufferToBase64(ress.data); //把arraybuffer转成base64 
							base64 = 'data:image/jpeg;base64,' + base64 //不加上这串字符，在页面无法显示的哦
							// console.log(base64)
							that.zhiye_zhao = base64;
						}
					})
				//#endif	
				
				//#ifdef APP-PLUS
				let path = that.getLocalFilePath(res.tempFilePaths[0]);
				plus.io.resolveLocalFileSystemURL(path,function(entry) {
						entry.file(
							function(file) {
								var fileReader = new plus.io.FileReader();
								fileReader.onload = function(data) {
									// that.zhiye_zhao = data.target.result;	
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
			})
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

}

.zi_body {
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.zuopin_top_txt{
	font-size: 56rpx;
	margin: 10rpx 0 14rpx;

}
.tu_up{
		width: 210rpx;
		height: 210rpx;
		border-radius: 10rpx;
}
.tu_up image{
	width: 100%;
	height: 100%;
}
.tu_list{
	margin-top: 50rpx;
}
.zuopin_bottom_title{
	margin-bottom: 10rpx;
}
.zuopin_bottom_txt{
	margin-bottom: 10rpx;
}
.zuopin_bottom{
	position: fixed;
	bottom: 0;
	padding-bottom: 50rpx;
	width: 100%;
}
</style>
