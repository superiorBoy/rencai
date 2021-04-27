<template>
	<view class="body">
		<view class="head">
			<view class="head_back hei_38_bold"><image src="../../static/qy_img/back.png" mode="" @click="navigateBack"></image></view>
			<view class="head_center hei_38_bold">发布职位</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body">
			
			<view class="fabu_list hei_28">
				<view class="fabu_item">
					<text class="fabu_item_left">职位名称</text>
					<view class="fabu_item_right">
						<input type="text" value="" placeholder="请输入职位名称" class="hei_28" v-model="zhiwei"/>
					</view>
				</view>
				<view class="fabu_item">
					<text class="fabu_item_left">招聘部门</text>
					<view class="fabu_item_right">
						<input type="text" value="" placeholder="请输入招聘部门" class="hei_28" v-model="bumen"/>
					</view>
				</view>
			    <picker mode="selector" :range="hangye_arry" @change="hangye_change" >
				<view class="fabu_item">
					<text class="fabu_item_left">所属行业</text>
					<view class="fabu_item_right" :class="['',hangye==''?'qian_28':'hei_28']">
							{{hangye?hangye:'请选择' }}
							<image src="../../static/qy_img/hei_right.png" mode=""></image>
					</view>
				</view>
				</picker>
				<picker mode="selector" :range="leixing_arry" @change="leixing_change" >
				<view class="fabu_item">
					<text class="fabu_item_left">职位类型</text>
					<view class="fabu_item_right" :class="['',leixing==''?'qian_28':'hei_28']">
						{{leixing?leixing:'请选择' }}
						<image src="../../static/qy_img/hei_right.png" mode=""></image>
					</view>
				</view>
				</picker>
				<pickerAddress @change="city_change">
				<view class="fabu_item">
					<text class="fabu_item_left">工作地区</text>
					<view class="fabu_item_right" :class="['',city==''?'qian_28':'hei_28']">
						{{city?city:'请选择' }}
						<image src="../../static/qy_img/hei_right.png" mode=""></image>
					</view>
				</view>
				</pickerAddress>
				<view class="fabu_item">
					<text class="fabu_item_left">招聘人数</text>
					<view class="fabu_item_right ">
						<input type="text" value="" placeholder="0代表若干"  class="hei_28" style="padding-right: 10rpx;" v-model="renshu"/>
						 人
					</view>
				</view>
				<picker mode="selector" :range="xinzi_arry" @change="xinzi_change" >
				<view class="fabu_item">
					<text class="fabu_item_left">薪资待遇</text>
					<view class="fabu_item_right" :class="['',xinzi==''?'qian_28':'hei_28']">
						{{xinzi?xinzi:'请选择' }}
						<image src="../../static/qy_img/hei_right.png" mode=""></image>
					</view>
				</view>
				</picker>
				<picker mode="selector" :range="youhuo_arry" @change="youhuo_change" >
				<view class="fabu_item">
					<text class="fabu_item_left">职位诱惑</text>
					<view class="fabu_item_right"  :class="['',youhuo==''?'qian_28':'hei_28']">
						{{youhuo?youhuo:'请选择' }}
						<image src="../../static/qy_img/hei_right.png" mode=""></image>
					</view>
				</view>
				</picker>
				<view class="fabu_item">
					<text class="fabu_item_left">职位描述</text>
					<view class="fabu_item_right">
						<input type="text" value="" placeholder="请描述" class="hei_28" v-model="miaoshu"/>
						<image src="../../static/qy_img/hei_right.png" mode=""></image>
					</view>
				</view>
				<picker mode="selector" :range="xueli_arry" @change="xueli_change" >
				<view class="fabu_item">
					<text class="fabu_item_left">学历</text>
					<view class="fabu_item_right" :class="['',xueli==''?'qian_28':'hei_28']">
						{{xueli?xueli:'请选择' }}
						<image src="../../static/qy_img/hei_right.png" mode=""></image>
					</view>
				</view>
				</picker>
				<picker mode="selector" :range="jingyan_arry" @change="jingyan_change" >
				<view class="fabu_item">
					<text class="fabu_item_left">相关经验</text>
					<view class="fabu_item_right" :class="['',jingyan==''?'qian_28':'hei_28']">
						{{jingyan?jingyan:'请选择' }}
						<image src="../../static/qy_img/hei_right.png" mode=""></image>
					</view>
				</view>
				</picker>
				<picker mode="selector" :range="xingbie_arry" @change="xingbie_change" >
				<view class="fabu_item">
					<text class="fabu_item_left">性别</text>
					<view class="fabu_item_right" :class="['',xingbie==''?'qian_28':'hei_28']">
						{{xingbie?xingbie:'请选择' }}
						<image src="../../static/qy_img/hei_right.png" mode=""></image>
					</view>
				</view>
				</picker>
				<picker mode="selector" :range="yuyan_arry" @change="yuyan_change" >
				<view class="fabu_item">
					<text class="fabu_item_left">语言</text>
					<view class="fabu_item_right" :class="['',yuyan==''?'qian_28':'hei_28']">
						{{yuyan?yuyan:'请选择' }}
						<image src="../../static/qy_img/hei_right.png" mode=""></image>
					</view>
				</view>
				</picker>
				<picker mode="selector" :range="nianling_arry" @change="nianling_change" >
				<view class="fabu_item">
					<text class="fabu_item_left">年龄</text>
					<view class="fabu_item_right" :class="['',nianling==''?'qian_28':'hei_28']">
						{{nianling?nianling:'请选择' }}
						<image src="../../static/qy_img/hei_right.png" mode=""></image>
					</view>
				</view>
				</picker>
				
			</view>
				  <button type="" class="fabu_btn bai_30" @click="fabu">确认发布</button>
			
			
		</view>
	</view>
</template>

<script>
	import pickerAddress from '@/components/pickerAddress/pickerAddress.vue';
export default {
	components: {
		pickerAddress
	},
	data() {
		return {
			zhiwei:'',
			bumen:'',
			hangye:'',
			hangye_arry:['aaa','bbb','ccc','ddd'],
			leixing:'',
			leixing_arry:['aaa','bbb','ccc','ddd'],
            city:'',
			renshu:'',
			xinzi:'',
			xinzi_arry:['100-200','200-400','300-600','400-800'],
			youhuo:'',
			youhuo_arry:['aaa','bbb','ccc','ddd'],
			miaoshu:'',
			xueli:'',
			xueli_arry:['博士','硕士','本科','大专','中专','高中','初中','小学'],
			jingyan:'',
			jingyan_arry:['不限','1-3年','3-5年','5-10年','10年以上'],
			xingbie:'',
			xingbie_arry:['不限','男','女'],
			yuyan:'',
			yuyan_arry:['不限','汉语','英语'],
			nianling:'',
			nianling_arry:['不限','18-25','25-30','30以上'],
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
		city_change(e){
			console.log(e)
			this.city=e.data[0]+'-'+e.data[1]+'-'+e.data[2]
		},
		xinzi_change(e){
			this.xinzi=this.xinzi_arry[e.detail.value]
		},
		youhuo_change(e){
			this.youhuo=this.youhuo_arry[e.detail.value]
		},
		xueli_change(e){
			this.xueli=this.xueli_arry[e.detail.value]
		},
		jingyan_change(e){
			this.jingyan=this.jingyan_arry[e.detail.value]
		},
		xingbie_change(e){
			this.xingbie=this.xingbie_arry[e.detail.value]
		},
		yuyan_change(e){
			this.yuyan=this.yuyan_arry[e.detail.value]
		},
		nianling_change(e){
			this.nianling=this.nianling_arry[e.detail.value]
		},
		fabu(){
			var dizhi=this.city.split('-')
			var data={
				zhiwei:this.zhiwei,
				bumen:this.bumen,
				hangye:this.hangye,
				leixing:this.leixing,
				sheng:dizhi[0],
				shi:dizhi[1],
				qu:dizhi[2],
				renshu:this.renshu,
				xinzi:this.xinzi,
				youhuo:this.youhuo,
				miaoshu:this.miaoshu,
				xueli:this.xueli,
				jingyan:this.jingyan,
				xingbie:this.xingbie,
				yuyan:this.yuyan,
				nianling:this.nianling
				
			}
			uni.navigateTo({
				url:'fabu_success'
			})
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
	
	padding-bottom: 50rpx;
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
</style>
