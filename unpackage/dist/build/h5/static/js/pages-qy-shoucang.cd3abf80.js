(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-qy-shoucang"],{"222d":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{tab_arry:["全部","沟通中","待沟通"],active:0,zhiwei:!0}},onLoad:function(){},methods:{navigateBack:function(){uni.navigateBack()},qiehuan:function(i){this.active=i}}};t.default=a},2583:function(i,t,e){i.exports=e.p+"static/img/tx.0c468bb5.png"},"3ed0":function(i,t,e){"use strict";e.r(t);var a=e("222d"),n=e.n(a);for(var o in a)"default"!==o&&function(i){e.d(t,i,(function(){return a[i]}))}(o);t["default"]=n.a},5214:function(i,t,e){"use strict";var a;e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var n=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("v-uni-view",{staticClass:"body"},[a("v-uni-view",{staticClass:"head"},[a("v-uni-view",{staticClass:"head_back"},[a("v-uni-image",{attrs:{src:e("c8ff"),mode:""},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.navigateBack.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"head_center hei_38_bold"},[i._v("收藏")]),a("v-uni-view",{staticClass:" head_right hei_30_bold"})],1),a("v-uni-view",{staticClass:"tab_top hui_26"},i._l(i.tab_arry,(function(t,e){return a("v-uni-text",{class:["",e==i.active?"zhiwei_active":""],on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.qiehuan(e)}}},[i._v(i._s(t))])})),1),a("v-uni-view",{staticClass:"tab_body"},[a("v-uni-view",{staticClass:"shoucang_list"},i._l(10,(function(t){return a("v-uni-view",{staticClass:"shoucang_item"},[a("v-uni-view",{staticClass:"shoucang_item_top"},[a("v-uni-view",{staticClass:"xingqu_item_top_left"},[a("v-uni-image",{staticClass:"tx",attrs:{src:e("2583"),mode:""}}),a("v-uni-image",{staticClass:"xingbie",attrs:{src:e("e087"),mode:""}})],1),a("v-uni-view",{staticClass:"shoucang_item_top_right"},[a("v-uni-view",{},[i._v("张珊珊"),a("v-uni-text",{staticClass:"hui_24 xingqu_item_yaoqiu"},[a("v-uni-text",[i._v("1年以内")]),a("v-uni-text",[i._v("大专")]),i._v("6-8K")],1)],1),a("v-uni-view",{staticClass:"hei_24 xingqu_item_gongsi"},[i._v("智享体育文化"),a("v-uni-text",{staticClass:"xingqu_item_zhiwei"},[i._v("前台")])],1)],1)],1),a("v-uni-view",{staticClass:"shoucang_item_jineng qian_26"},[i._v("能够负责前台电话转接、日常接待，包括来访者、面试者、 贵宾等人员的接待等；前台环境维护，确保前台环境干净...")]),a("v-uni-view",{staticClass:"shoucang_item_bottom qian_24"},[a("v-uni-text",[i._v("2021年01月24日 15:20")]),a("v-uni-text",[i._v("沟通中")])],1)],1)})),1)],1)],1)},o=[]},"5e98":function(i,t,e){var a=e("7a81");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=e("4f06").default;n("1b212901",a,!0,{sourceMap:!1,shadowMode:!1})},"7a81":function(i,t,e){var a=e("24fb");t=a(!1),t.push([i.i,'uni-page-body[data-v-6158e00b]{background-color:#f8f8f8}.head[data-v-6158e00b]{background-color:#fff}.tab_top[data-v-6158e00b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?10?% %?38?% %?14?%;background-color:#fff;position:fixed;top:%?100?%;width:100%;box-sizing:border-box;z-index:9;border-bottom:%?2?% solid #f3f3f3}.zhiwei_active[data-v-6158e00b]{position:relative}.zhiwei_active[data-v-6158e00b]::before{content:"";display:inline-block;position:absolute;bottom:%?-14?%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);width:%?25?%;height:%?6?%;background-color:#00c6c9;border-radius:%?3?%}.tab_body[data-v-6158e00b]{padding-top:%?160?%}.xingqu_item_top_left[data-v-6158e00b]{width:%?84?%;height:%?84?%;border-radius:100%;position:relative;margin-right:%?30?%}.tx[data-v-6158e00b]{width:100%;height:100%}.xingbie[data-v-6158e00b]{width:%?24?%;height:%?24?%;position:absolute;top:0;right:0}.xingqu_item_yaoqiu[data-v-6158e00b]{margin-left:%?20?%}.xingqu_item_yaoqiu uni-text[data-v-6158e00b]{margin-right:%?20?%;position:relative}.xingqu_item_yaoqiu uni-text[data-v-6158e00b]::before{content:"";display:inline-block;width:%?4?%;height:%?4?%;background-color:#666;border-radius:100%;position:absolute;right:%?-10?%;top:50%}.shoucang_item_top[data-v-6158e00b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.shoucang_item_bottom[data-v-6158e00b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-top:%?2?% solid #e9e9e9}.xingqu_item_zhiwei[data-v-6158e00b]{margin-left:%?20?%;position:relative}.xingqu_item_zhiwei[data-v-6158e00b]::before{content:"";display:inline-block;width:%?4?%;height:%?4?%;background-color:#666;border-radius:100%;position:absolute;left:%?-10?%;top:50%}.xingqu_item_gongsi[data-v-6158e00b]{margin-top:%?10?%}.shoucang_item[data-v-6158e00b]{padding:%?25?% %?30?% 0;margin-bottom:%?20?%;background-color:#fff}.shoucang_item_jineng[data-v-6158e00b]{margin:%?20?% 0;line-height:%?40?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}body.?%PAGE?%[data-v-6158e00b]{background-color:#f8f8f8}',""]),i.exports=t},a7f1:function(i,t,e){"use strict";var a=e("5e98"),n=e.n(a);n.a},ba61:function(i,t,e){"use strict";e.r(t);var a=e("5214"),n=e("3ed0");for(var o in n)"default"!==o&&function(i){e.d(t,i,(function(){return n[i]}))}(o);e("a7f1");var b,c=e("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"6158e00b",null,!1,a["a"],b);t["default"]=s.exports},c8ff:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAApCAMAAAAGRilxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQyOEMzNjFEN0JDRDExRUJBMUJCODhBMDU3QkNFQkQxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQyOEMzNjFFN0JDRDExRUJBMUJCODhBMDU3QkNFQkQxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDI4QzM2MUI3QkNEMTFFQkExQkI4OEEwNTdCQ0VCRDEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDI4QzM2MUM3QkNEMTFFQkExQkI4OEEwNTdCQ0VCRDEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4U06nyAAAAhFBMVEUzMzOVlZVJSUlBQUGRkZGJiYlFRUU8PDxLS0uGhoZAQECQkJA5OTlQUFA9PT11dXU/Pz81NTVCQkKOjo5sbGyEhIRcXFxvb29XV1dSUlKNjY1NTU1ISEhUVFSTk5OHh4dbW1s7OztGRkZOTk46OjpHR0eXl5dKSkpZWVmZmZlVVVUAAAASUPCfAAAALHRSTlP/////////////////////////////////////////////////////////AMfWCYwAAADFSURBVHjabNPpDoMgEATgpdVabe193/c17/9+XTAxugM/v2wGGIIgshyEcSeyZh6IX8QBLS+rUcOJ14TY6xyG83qzJjuvjtjrC4bT5nGllQDL3/bVpDGbWD7ZGqRuB8Rec8suUqTgHKtXQkIaK50VslL+MCNTHzKjr/5jxlY9Y8aMcqoT99TvzCH/yYyO+ogZb/UDc5jvMaNUL5ixV+8yY1J7u+mN+o057HtlxqPKoee6qB8jX8r3U0Z+WiEyjTDGC/wFGADTS3o7UQaEmQAAAABJRU5ErkJggg=="},e087:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlCQzczNkYwNzczMDExRUJCMDkyOTAzMEY1QUM2NEZFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlCQzczNkYxNzczMDExRUJCMDkyOTAzMEY1QUM2NEZFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUJDNzM2RUU3NzMwMTFFQkIwOTI5MDMwRjVBQzY0RkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUJDNzM2RUY3NzMwMTFFQkIwOTI5MDMwRjVBQzY0RkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4rst6FAAABI1BMVEVSiPX///9VivXz9/5mlvaux/q2zftWi/VUifVllfZTifXs8v6Irfhbjvb6+/9cj/ZxnfeGrPj+///3+f3p8P7x9fbu8vT5+/tdj/asxvr4+vt3ovenwvp3ofeStPmbuvm3zvtajvV7pPeGq/i/0/v9/v6jwPrw8/X+/v7u8/753MfJ2vz88eX1+Pn8/f16pPdvnPfD1fz4+vptm/f+/v/n7v6yyvv77uGJrviTtfnv8/VekPanw/q+0vvW4/3w9PX4+fr64svN3fyUtfnz9vz87+bl7f7t8/7L3PywyPrp7/yAqPiKrvjN3PxsmvbA1Pv3+f/6+vpqmPbS4Pz59PT769x1oPeXt/n64cbV4v3r8f72+f73+fpynvetx/q80fv///96KZHxAAAAYXRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AroBvMQAAATtJREFUeNpsktWWwjAQQGeaGoUCLVBBF1lg3d3d3T3//xUbaZE9Oy+d3HsymUwDVAb2IgIQYaI7qmEvODqJlBCYLtchino5jbHAfBYGIptHKaaTCRiKRBK5KOZK8CdKrBrQda0HTIWFyRKNiXmSibnq8nZdZjIEwWv1S1ykUhOICstGEAqrMd4IeI0bIRwEX5V4bQnx+BTbKSFUhFFD8BD3q9UrfAApDCZszu9R9Ba6X8/vlhT+NScHRGw0yFnUIDv8kiftbQne5uSXHe5t8eRljBcA62RZCtburrjgLNb4uoYzgvML0o44tuXqjYa++CM38JGwIVZYqoS3iB+bpuAVMUS6I8du2rY1NHZKV87//1GU7j1qQYyD79xU/zEcjR/qTVVR1KZOOsWBV0Lp5OvTXbfrF7zPCPwKMAAwezoc/qxi4gAAAABJRU5ErkJggg=="}}]);