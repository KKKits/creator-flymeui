// { "framework": "Vue" }

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["npm/weex-flymeui/components/fm-input/index"]=t():e["npm/weex-flymeui/components/fm-input/index"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=67)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={biaoqing:"&#xe6a3;",bofang:"&#xe6a4;",bianji:"&#xe6a5;",bofang2:"&#xe6a7;",cebianlan:"&#xe6a7;",caijian:"&#xe6a8;",chakan:"&#xe6a9;",chexiao:"&#xe6aa;",chuangkouhua:"&#xe6ab;",daojishi:"&#xe6ac;",dianzan:"&#xe6ad;",chuangkouhua2:"&#xe6ae;",dianhua:"&#xe6af;",diannao:"&#xe6b0;",dingwei2:"&#xe6b1;",dingwei:"&#xe6b2;",dingyue:"&#xe6b3;",erweima:"&#xe6b4;",fanhui:"&#xe6b5;",fasong:"&#xe6b6;",fujian:"&#xe6b7;",fenlei:"&#xe6b8;",fanhui2:"&#xeb9;",fenxiang:"&#xe6ba;",fuzhi:"&#xe6bb;",gengduo:"&#xe6bc;",gouwuche:"&#xe6bd;",gongjuxiang:"&#xe6be;",gengduo2:"&#xe6bf;",guanbi:"&#xe6c0;",jishi:"&#xe6c1;",hongxin:"&#xe6c2;",jingyin:"&#xe6c3;",jianpan:"&#xe6c3;",jiesuo:"&#xe6c5;",jisuanqi:"&#xe6c36;",liangdu:"&#xe6c7;",lvjing:"&#xe6c8;",paixu:"&#xe6c9;",paihang:"&#xe6ca;",paizhao:"&#xe6cb;",pingmutoushe:"&#xe6cc;",riqi:"&#xe6cd;",shanchu:"&#xe6ce;",shangchaun:"&#xe6cf;",shangyishou:"&#xe6d0;",shezhi:"&#xe6d1;",shizhong:"&#xe6d2;",shezhi1:"&#xe6d3;",sousuo:"&#xe6d4;",shuqian:"&#xe6d5;",shuoming:"&#xe6d6;",shuaxin:"&#xe6d7;",suoding:"&#xe6d8;",shipin:"&#xe6d9;",tuichu:"&#xe6da;",tupian:"&#xe6db;",tianjia:"&#xe6dc;",tixing:"&#xe6dd;",wancheng:"&#xe6de;",wengao:"&#xe6df;",xiayishou:"&#xe6e0;",xinxi:"&#xe6e1;",xiazai:"&#xe6e2;",xingxing:"&#xe6e3;",xinxi1:"&#xe6e4;",xuanxiangliebiao:"&#xe6e5;",yidu:"&#xe6e6;",yinliang:"&#xe6e7;",yinbi:"&#xe6e8;",yuyin:"&#xe6e9;",zanting:"&#xe6ea;",yonghu:"&#xe6eb;",youjian:"&#xe6ec;",zhiding:"&#xe6ed;",chongzuo:"&#xe6ee;",zhuye:"&#xe6ef;",ziti:"&#xe6f0;",VPN:"&#xe6f1;","Wi-Fi":"&#xe6f2;",zhuti:"&#xe6f3;",lanya:"&#xe6f4;",quanping:"&#xe6f5;",pingmufanzhuan:"&#xe6f6;",gouwu:"&#xe6f7;",saomiao:"&#xe6f8;"}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.use=t.t=void 0;var i=function(e){return e&&e.__esModule?e:{default:e}}(n(8)).default,o=t.t=function(e,t){for(var n=void 0,o=e.split("."),r=i,u=0,a=o.length;u<a;u++){if(n=r[o[u]],u===a-1)return n;if(!n)return"";r=n}return""},r=t.use=function(e){i=e||i};t.default={t:o,use:r}},2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(i).default}})},3:function(e,t,n){var i,o,r=[];r.push(n(4)),i=n(5);var u=n(6);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=i=i.default),"function"==typeof o&&(o=o.options),o.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-icon/index.vue",o.render=u.render,o.staticRenderFns=u.staticRenderFns,o._scopeId="data-v-08d175ee",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=i},4:function(e,t){e.exports={}},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var r=weex.requireModule("dom");t.default={name:"FmIcon",props:{name:{default:"wancheng",type:String},value:{type:String,default:""},iconStyle:{type:[Number,Object,String],default:42},color:{type:String,default:"#666666"}},data:function(){return{Icon:o.default}},computed:{getIcon:function(){var e=this.Icon,t=this.name,n=this.value;return a(""===n?e[t]||"wancheng":n)},mergeStyle:function(){var e=this.iconStyle,t={fontFamily:"flymeicon",color:this.color};return"object"!==Object.prototype.toString.call(this.iconStyle).slice(8,-1).toLowerCase()?(t.fontSize=e+"px",t.height=e+"px"):t=Object.assign({},t,i({},e)),t}},beforeCreate:function(){this.isCreator||r.addRule("fontFace",{fontFamily:"flymeicon",src:"url('http://weixin-res.flyme.cn/resources/weex-flymeui/assets/iconfont.ttf')"})},methods:{itemClicked:function(e){this.$emit("fmIconClicked",{name:e})}}};var u=/&([^;]{2,});?/g,a=function(e){return e=e.replace(u,function(e,t){if("#"===t.charAt(0)){var n=0;if(n="x"===t.charAt(1).toLowerCase()?parseInt(t.slice(2),16):parseInt(t.slice(1),10),!isNaN(n)&&n>=-32768&&n<=65535)return String.fromCharCode(n)}return e})}},6:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{style:e.mergeStyle,on:{click:function(t){e.itemClicked(e.name)}}},[e._v(e._s(e.getIcon))])},staticRenderFns:[]},e.exports.render._withStripped=!0},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(68);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(i).default}})},68:function(e,t,n){var i,o,r=[];r.push(n(69)),i=n(70);var u=n(71);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=i=i.default),"function"==typeof o&&(o=o.options),o.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-input/index.vue",o.render=u.render,o.staticRenderFns=u.staticRenderFns,o._scopeId="data-v-e94d2fea",o.style=o.style||{},r.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,r),e.exports=i},69:function(e,t){e.exports={"fm-wrapper":{paddingTop:"72",paddingRight:"48",paddingLeft:"48"},"fm-input":{paddingBottom:"17",borderBottomStyle:"solid",borderBottomWidth:"3",borderBottomColor:"#e6e6e6",fontSize:"48",height:"85",color:"#000000",placeholderColor:"#dddddd"},"fm-input-wrap":{position:"relative"},delete:{position:"absolute",bottom:"30",right:"72",width:"50",height:"50",paddingTop:"7",paddingLeft:"6",backgroundColor:"rgba(77,77,77,0.5)",borderRadius:"30",fontWeight:"700"},visible:{position:"absolute",top:"63",right:"72",width:"72",height:"72"},"error-msg":{fontSize:"36",color:"#df2b18",marginLeft:"24"}}},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1);t.default={methods:{t:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.t.apply(this,t)}}}},70:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(9)),o=a(n(7)),r=n(1),u=a(n(2));function a(e){return e&&e.__esModule?e:{default:e}}t.default={name:"FmInput",mixins:[o.default],components:{FmIcon:u.default},mounted:function(){"password"===this.type&&(this.pwdModel=!0),this.value=this.defaultValue||""},data:function(){return{value:"",rows:1,isFocus:!1,pwdModel:!1,pwdVisible:!1}},watch:{defaultValue:function(e){this.value=e}},props:{defaultValue:{type:[String,Number],default:""},placeholder:{type:String,default:function(){return(0,r.t)("el.input.placeholder")}},autoError:{type:Boolean,default:!0},maxlength:[String,Number],inputPattern:RegExp,inputErrorMessage:{type:String,default:"输入有误"},type:String,autofocus:{type:Boolean,default:!1},disabled:Boolean,returnKeyType:{type:String,default:"default"},nightMode:{type:Boolean,default:!1}},computed:{visibleValue:function(){return"password"===this.type?"chakan":"yinbi"},inputStyle:function(){var e={paddingRight:0};return e.borderBottomColor=this.hasError&&this.autoError?"#df2b18":this.isFocus?i.default.primaryColor:"#e6e6e6",e.caretColor=i.default.primaryColor,(this.delShow||this.visibleShow)&&(e.paddingRight="108px"),e},delShow:function(){return!this.pwdModel&&this.isFocus&&this.value},visibleShow:function(){return this.isFocus&&this.pwdModel},hasError:function(){var e=this.inputPattern,t=this.value;return!!e&&!t.match(e)}},methods:{delClick:function(e){this.value=""},toggleVisible:function(e){this.$refs.input.setType?(this.pwdVisible?this.$refs.input.setType("password"):this.$refs.input.setType("visible"),this.pwdVisible=!this.pwdVisible):"password"===this.type?this.type="text":this.type="password"},input:function(e){this.value=e.value,this.$emit("input",e)},change:function(e){this.$emit("change",e)},beFocus:function(e){this.isFocus=!0,this.$emit("focus",e)},beBlur:function(e){this.isFocus=!1,this.$emit("blur",e)},focus:function(){this.$refs.input.focus()},blur:function(){this.$refs.input.blur()},setSelectionRange:function(e,t){this.$refs.input.setSelectionRange(e,t)},getEditSelectionRange:function(e){this.$refs.input.getEditSelectionRange(e)},setValue:function(e){this.value=e}}}},71:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["fm-wrapper"]},[n("input",{ref:"input",staticClass:["fm-input"],style:e.inputStyle,attrs:{type:e.type,value:e.value,maxlength:e.maxlength,placeholder:e.placeholder,autofocus:e.autofocus,disabled:e.disabled,returnKeyType:e.returnKeyType,nightMode:e.nightMode},on:{input:e.input,change:e.change,focus:e.beFocus,blur:e.beBlur}}),e.delShow?n("fm-icon",{staticClass:["delete"],attrs:{name:"guanbi",iconStyle:38,color:"#fff"},on:{fmIconClicked:e.delClick}}):e._e(),e.visibleShow?n("fm-icon",{staticClass:["visible"],attrs:{name:e.visibleValue,iconStyle:72,color:"#666"},on:{fmIconClicked:e.toggleVisible}}):e._e(),e.hasError&&e.autoError?n("text",{staticClass:["error-msg"]},[e._v(e._s(e.inputErrorMessage))]):e._e()],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={el:{common:{delete:"删除",cancel:"取消",confirm:"确认",close:"关闭",title:"标题",more:"更多"},titlebar:{title:"标题"},searchbar:{search:"搜索"},foldabletext:{more:"更多"},input:{placeholder:"请输入",inputError:"输入有误"},tag:{tagName:"标签"}}}},9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={primaryColor:"#198DED",disabledColor:"#BDE2FB",highlightColor:"#156DC9",lightColor:"#42A2F1",weakColor:"#E6F8FF",grayColor:"#F2F3F4",fontColorLight:"#FFFFFF",fontColorDark:"#3D3D3D",fontColorGray:"#F2F3F4"}}})});