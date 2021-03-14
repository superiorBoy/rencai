<template>
	<view class="body">
		<view class="head">
			<view class="head_back hei_38_bold"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">基本信息</view>
			<view class=" head_right hei_30">
				<text  @click="fabu">预览</text></view>
		</view>

		<view class="zi_body">
			<view class="fabu_list hei_28">
			<view class="wanshan_title hei_30_bold">
				基本信息 
			</view>
				<view class="fabu_item">
					<text class="fabu_item_left hei_30_bold"><text class="hong_30 hongxing">*</text>公司名称</text>
					<view class="fabu_item_right">
						<input type="text" value="" placeholder="请输入公司名称" class="hei_28" v-model="gongsi_name"/>
					</view>
				</view>
				<view class="fabu_item">
					<text class="fabu_item_left hei_30_bold">公司品牌</text>
					<view class="fabu_item_right">
						<input type="text" value="" placeholder="请输入公司品牌" class="hei_28" v-model="gongsi_pinpai"/>
					</view>
				</view>
				<picker mode="selector" :range="leixing_arry" @change="leixing_change" >
				<view class="fabu_item">
					<text class="fabu_item_left hei_30_bold"><text class="hong_30 hongxing">*</text>公司性质</text>
					<view class="fabu_item_right" :class="['',leixing==''?'qian_28':'hei_28']">
						{{leixing?leixing:'请选择' }}
						<image src="../../static/qy_img/hei_right.png" mode=""></image>
					</view>
				</view>
				</picker>
			    <picker mode="selector" :range="hangye_arry" @change="hangye_change" >
				<view class="fabu_item">
					<text class="fabu_item_left hei_30_bold"><text class="hong_30 hongxing">*</text>所属行业</text>
					<view class="fabu_item_right" :class="['',hangye==''?'qian_28':'hei_28']">
							{{hangye?hangye:'请选择' }}
							<image src="../../static/qy_img/hei_right.png" mode=""></image>
					</view>
				</view>
				</picker>
				
  <picker mode="date"  @change="nianfen_change" fields="year" >
				<view class="fabu_item">
					<text class="fabu_item_left hei_30_bold"><text class="hong_30 hongxing">*</text>成立年份</text>
					<view class="fabu_item_right" :class="['',nianfen==''?'qian_28':'hei_28']">
							{{nianfen?nianfen:'请选择成立年份 ' }}
							<image src="../../static/qy_img/hei_right.png" mode=""></image>
					</view>
				</view>
				</picker>
				<picker mode="selector" :range="renshu_arry" @change="renshu_change" >
				<view class="fabu_item">
					<text class="fabu_item_left hei_30_bold"><text class="hong_30 hongxing">*</text>员工数量</text>
					<view class="fabu_item_right " :class="['',renshu==''?'qian_28':'hei_28']">
						{{renshu?renshu:'请选择员工数量范围' }}
						<image src="../../static/qy_img/hei_right.png" mode=""></image>
					</view> 
				</view>
				</picker>
				<picker mode="selector" :range="youhuo_arry" @change="youhuo_change" >
				<view class="fabu_item">
					<text class="fabu_item_left hei_30_bold"><text class="hong_30 hongxing">*</text>公司诱惑</text>
					<view class="fabu_item_right"  :class="['',youhuo==''?'qian_28':'hei_28']">
						{{youhuo?youhuo:'请选择职位诱惑' }}
						<image src="../../static/qy_img/hei_right.png" mode=""></image>
					</view>
				</view>
				</picker>
				<view class="fabu_item">
					<text class="fabu_item_left hei_30_bold"><text class="hong_30 hongxing">*</text>公司简介</text>
					<view class="fabu_item_right">
						<input type="text" value="" placeholder="请输入公司简介" class="hei_28" v-model="jianjie"/>
						<image src="../../static/qy_img/hei_right.png" mode=""></image>
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
			gongsi_name:'',
			gongsi_pinpai:'',
			hangye:'',
			hangye_arry:['aaa','bbb','ccc','ddd'],
			leixing:'',
			leixing_arry:['aaa','bbb','ccc','ddd'],
            city:'',
			renshu:'',
			renshu_arry:['100-200','200-400','300-600','400-800'],
			youhuo:'',
			youhuo_arry:['aaa','bbb','ccc','ddd'],
			jianjie:'',
			nianfen:''
		};
	},
	
	onLoad() {},
	methods: {
		navigateBack() {
			uni.navigateBack()
		},
		hangye_change(e){
			console.log(e.detail.value)
			this.hangye=this.hangye_arry[e.detail.value]
		},
		leixing_change(e){
			console.log(e.detail.value)
			this.leixing=this.leixing_arry[e.detail.value]
		},
		nianfen_change(e){
			this.nianfen=e.detail.value
		},
		renshu_change(e){
			this.renshu=this.renshu_arry[e.detail.value]
		},
		youhuo_change(e){
			this.youhuo=this.youhuo_arry[e.detail.value]
		},

		nianling_change(e){
			this.nianling=this.nianling_arry[e.detail.value]
		},
		fabu(){
			
			var data={
				gongsi_name:this.gongsi_name,
				gongsi_pinpai:this.gongsi_pinpai,
				hangye:this.hangye,
				xingzhi:this.leixing,
				hangye:this.hangye,
				nianfen:this.nianfen,
				renshu:this.renshu,
				youhuo:this.youhuo,
				jianjie:this.jianjie,
				
			}
			
			console.log(data)
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
	padding-bottom: 50rpx;
}
.wanshan_title{
	line-height: 120rpx;
	border-bottom: 2rpx solid #e8e8e8 ;
}
.fabu_list{
	padding: 0 30rpx;
}
.fabu_item{
	display: flex;
	align-items: center;
	height: 100rpx;
	border-bottom: 2rpx solid #e8e8e8 ;
	justify-content: space-between;
}

.fabu_item_right image{
		width: 14rpx;
		height: 24rpx;
		margin-left: 15rpx;
}
.fabu_item_right input{
	text-align: right;
}
.fabu_item_right{
	display: flex;
	align-items: center;
}	
.fabu_btn{
		height: 80rpx;
		background-color: #00c6c9;
		line-height: 80rpx;
		margin: 80rpx 0 0;
		border-radius: 0 !important;
}
.hongxing{
	vertical-align: middle;
	margin-right: 2rpx;
}
</style>
