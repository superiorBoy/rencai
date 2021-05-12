
let baseUrl = '';
let WebSocket_url=''
if (process.env.NODE_ENV == 'development') {

    baseUrl='/api'
	
	// #ifndef H5
	   // baseUrl='http://www.rc.xyz/'
	// #endif
	//#ifdef APP-PLUS
	  // baseUrl = 'http://www.xhlvshi.com' // 开发环境
	  // WebSocket_url='www.xhlvshi.com'
	  
	//#endif
	
} else {
        baseUrl = '' // 生产环境
	  //#ifdef APP-PLUS
	    // baseUrl = 'http://www.xhlvshi.com/' // 生产环境
		// WebSocket_url='www.xhlvshi.com'
	    
	  //#endif
}

function request(url,method,data,header={}){
  // uni.showLoading({
  //   title: '加载中...'
  // })
  
  if(data){
	  data.token=uni.getStorageSync("token")
  }else{
	  var data={
		  token:uni.getStorageSync("token")
	  }
  }
  
  return new Promise((resolve,reject) => {
	  
    uni.request({
      url: baseUrl + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
		'Token':uni.getStorageSync("token")
      },
      success: function(resp) {
        uni.hideLoading();
		if (resp.data.code == 0) {
			resolve(resp.data);
		}
		else if (resp.data.message == '请先登录' || resp.data.msg == '请先登录') {
			uni.navigateTo({
				url:'login?type=back'
			});
		}
		else {
			uni.showToast({
				title: resp.data.message,
				duration: 2000,
				icon: 'none'
			});
			resolve(resp.data);
		}
      },
      fail: function(resp) {
        uni.hideLoading();
        reject(resp);
      },
	  complete(end) {
		  uni.stopPullDownRefresh();
		  
	  	      }
    })
  })
}
 function  jspost(URL, PARAMS=[]) {
	 // #ifdef H5
      var temp = document.createElement("form");
      temp.action = URL;
      temp.method = "post";
      temp.target = "";//跳转到新页面
      temp.style.display = "none";
      for (var x in PARAMS) {
          var opt = document.createElement("textarea");
          opt.name = x;
          opt.value = PARAMS[x];
          temp.appendChild(opt);
      }
      document.body.appendChild(temp);
      temp.submit();
      return temp;
	  // #endif
  }


// 封装get方法
function get(obj) {
  return request(obj.url,'GET',obj.data)
}
// 封装post方法
function post(obj) {
  return request(obj.url,'POST',obj.data)
}



export default {
  request,
  get,
  post,
  baseUrl,
  WebSocket_url,
  jspost
}
