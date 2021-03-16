<script>
	var timer_id = 0;
	if (typeof window != 'undefined') {
		
	if (window.innerWidth > 750) {
	window.innerWidth = 750;
	timer_id = setInterval(function() {
		
	//适配尺寸
	var el = document.querySelector('html');
	var n = Number(el.style.fontSize.replace('px', ''));
	console.log(n)
	if (n > 30) {
	el.style.fontSize = '30px';
	}
	clearInterval(timer_id);
	}, 100);
	}
	}
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
view,page,div{
	max-width: 750px;
}
page,.uni-tabbar{
	margin: 0 auto;
}
.uni-tabbar__icon{
	height: 20px !important;
	width: 20px !important;
}
	
/* app沉浸式配置	 */
/* APP-PLUS */
/* #ifdef APP-PLUS */
  .head{
	  
  } 
  .zi_body{
	  
  } 
  .tab_body{
	  
  }
  .index_body{
	  
  }
  .chat_body{
	  
  }
  .faxian_body{
	  
  }
  .liaotian_body{
	  
  }
  .xiaoxi_hudong_body{
	  
  }
   
/* #endif */



</style>
