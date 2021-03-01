<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("./common/font.css");
	/*每个页面公共css */
.head{
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	width: 100%;
	padding: 0rpx 30rpx;
	height: 100rpx;
	background-color: #FFFFFF;
	z-index: 99;
	box-sizing: border-box;
	align-items: center;
}

.head_back,.head_center,.head_right{width: 33%;}
.head_center{text-align: center;}
.head_right{text-align: right;}
.head_back image{width: 22rpx;height: 41rpx;}

</style>
