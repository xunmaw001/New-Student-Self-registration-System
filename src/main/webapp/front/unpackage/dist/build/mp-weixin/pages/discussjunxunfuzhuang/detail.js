(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/discussjunxunfuzhuang/detail"],{"08e8":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,s,a,u,r){try{var i=t[u](r),o=i.value}catch(c){return void e(c)}i.done?n(o):Promise.resolve(o).then(s,a)}function r(t){return function(){var n=this,e=arguments;return new Promise((function(s,a){var r=t.apply(n,e);function i(t){u(r,s,a,i,o,"next",t)}function o(t){u(r,s,a,i,o,"throw",t)}i(void 0)}))}}var i={data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url},SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(t){var n=this;return r(s.default.mark((function e(){return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.id=t.id,t.userid&&(n.userid=t.userid);case 2:case"end":return e.stop()}}),e)})))()},onShow:function(n){var e=this;return r(s.default.mark((function n(){var a,u,r;return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.init(),a=t.getStorageSync("nowTable"),n.next=4,e.$api.session(a);case 4:u=n.sent,e.user=u.data,e.btnColor=e.btnColor.sort((function(){return.5-Math.random()})),r=t.getStorageSync("discussdiscussjunxunfuzhuangCleanType"),r&&(t.removeStorageSync("discussdiscussjunxunfuzhuangCleanType"),e.mescroll.num=1,e.upCallback(e.mescroll));case 9:case"end":return n.stop()}}),n)})))()},destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","discussjunxunfuzhuang"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onAcrossTap:function(n,e,s,a,u){if(t.setStorageSync("crossTable","discussjunxunfuzhuang"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",s),t.setStorageSync("statusColumnValue",u),t.setStorageSync("tips",a),""!=s&&!s.startsWith("[")){var r=t.getStorageSync("crossObj");for(var i in r)if(i==s&&r[i]==u)return void this.$utils.msg(a)}this.$utils.jump("../".concat(n,"/add-or-update?cross=true"))},init:function(){var t=this;return r(s.default.mark((function n(){var e;return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$api.info("discussjunxunfuzhuang",t.id);case 2:e=n.sent,t.detail=e.data;case 4:case"end":return n.stop()}}),n)})))()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var n=this;return r(s.default.mark((function e(){var a;return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$api.list("discussdiscussjunxunfuzhuang",{page:t.num,limit:10,refid:n.id});case 2:a=e.sent,1==t.num&&(n.commentList=[]),n.commentList=n.commentList.concat(a.data.list),0==a.data.list.length&&(n.hasNext=!1),t.endSuccess(t.size,n.hasNext);case 7:case"end":return e.stop()}}),e)})))()},onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(n){var e=this;n=e.$base.url+n,t.downloadFile({url:n,success:function(t){200===t.statusCode&&(e.$utils.msg("下载成功"),window.open(n))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=this;return r(s.default.mark((function n(){return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$utils.jump("../discussdiscussjunxunfuzhuang/add-or-update?refid=".concat(t.id));case 1:case"end":return n.stop()}}),n)})))()},onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=this;return r(s.default.mark((function n(){return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.detail.sfsh){n.next=3;break}return t.$utils.msg("请选择审核状态"),n.abrupt("return");case 3:if(t.detail.shhf){n.next=6;break}return t.$utils.msg("请填写审核回复"),n.abrupt("return");case 6:return"通过"==t.detail.sfsh&&(t.detail.sfsh="是"),"不通过"==t.detail.sfsh&&(t.detail.sfsh="否"),n.next=10,t.$api.update("discussjunxunfuzhuang",t.detail);case 10:t.$utils.msg("审核成功"),t.$refs.popup.close();case 12:case"end":return n.stop()}}),n)})))()},onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};n.default=i}).call(this,e("543d")["default"])},"3ea4":function(t,n,e){"use strict";(function(t){e("fd65");s(e("66fd"));var n=s(e("d1de"));function s(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"5e3b":function(t,n,e){"use strict";e.r(n);var s=e("08e8"),a=e.n(s);for(var u in s)"default"!==u&&function(t){e.d(n,t,(function(){return s[t]}))}(u);n["default"]=a.a},"78f2":function(t,n,e){"use strict";var s=e("dfaf"),a=e.n(s);a.a},d1de:function(t,n,e){"use strict";e.r(n);var s=e("df12"),a=e("5e3b");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("78f2");var r,i=e("f0c5"),o=Object(i["a"])(a["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],r);n["default"]=o.exports},df12:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return s}));var s={mescrollUni:function(){return Promise.all([e.e("common/vendor"),e.e("components/mescroll-uni/mescroll-uni")]).then(e.bind(null,"cbea"))},uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"f028"))}},a=function(){var t=this,n=t.$createElement;t._self._c},u=[]},dfaf:function(t,n,e){}},[["3ea4","common/runtime","common/vendor"]]]);