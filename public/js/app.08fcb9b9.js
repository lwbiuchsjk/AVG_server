(function(t){function e(e){for(var i,o,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"49b2":function(t,e,n){"use strict";var i=n("a3ec"),r=n.n(i);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=n("5c96"),a=n.n(r),o=(n("0fae"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),i("Stage")],1)}),s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"grid-content grid-auto-middle bg-purple-dark"},[t._l(t.question_content,(function(e,i){return n("div",{key:i},[n("div",{staticClass:"question"},[t._v(t._s(e))])])})),n("div",{staticStyle:{margin:"30px"},attrs:{id:"sendButton"}},[n("el-button",{on:{click:t.sendMessage}},[t._v("提交调查结果")])],1),n("div",{attrs:{id:"hero_answer"}},[n("span",[t._v(t._s(t.getHero))])]),n("div",{attrs:{id:"timeline_Answer"}},[n("span",[t._v(t._s(t.getTimeline))])]),n("el-row",{attrs:{gutter:50}},[n("el-col",{attrs:{span:16}},[n("div",{staticClass:"grid-content grid-updown-shift bg-purple-light grid-left-shift hero"},[n("el-row",[n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-left-shift text-left-shift doc_name"},[t._v(t._s(t.doc_content))])]),n("el-col",{attrs:{span:16}},[n("div",{staticClass:"hero grid-right-shift"},[t._v(t._s(t.hero_content))])])],1),n("el-row",t._l(t.docName,(function(e,i){return n("div",{key:i,staticClass:"hero"},[n("el-row",[n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-left-shift text-left-shift"},[n("el-link",{staticClass:"drama",attrs:{type:"primary"},on:{click:function(n){return t.checkDoc(e.text)}}},[t._v(t._s(e.text))])],1)]),n("el-col",{attrs:{span:16}},[n("div",{staticClass:"grid-right-shift"},[n("el-select",{attrs:{select:"1"},model:{value:t.docName[i].hero,callback:function(e){t.$set(t.docName[i],"hero",e)},expression:"docName[index].hero"}},[n("el-option",{attrs:{disabled:"",value:""}},[t._v("请选择人物")]),t._l(t.sendList,(function(e){return n("el-option",{key:e.id,attrs:{name:"selectText",value:e.text}},[t._v(t._s(e.text))])}))],2)],1)])],1)],1)})),0)],1)]),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content grid-updown-shift bg-purple-light grid-right-shift timeline"},[n("div",{staticClass:"timeline"},[t._v(t._s(t.timeline_content))]),n("div",{staticClass:"grid-sub-auto-middle"},t._l(t.docName,(function(e,i){return n("el-select",{key:i,staticClass:"timeline",attrs:{select:"1"},model:{value:t.timelineAnswer[i],callback:function(e){t.$set(t.timelineAnswer,i,e)},expression:"timelineAnswer[index]"}},[n("el-option",{attrs:{disabled:"",value:""}},[t._v("共7篇文档")]),n("el-option",[t._v(t._s("……我再想想……"))]),t._l(t.docName,(function(e,i){return n("el-option",{key:i,attrs:{value:e.text,disabled:-1!=t.timelineAnswer.indexOf(e.text)}},[t._v(t._s(e.text))])}))],2)})),1)])])],1)],2)])],1)],1)},c=[],d=(n("ac1f"),n("5319"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("bc3a")),u=n.n(d),f=u.a.create({baseURL:"/api/",timeout:5e3}),p=f;function v(t){return p({url:"/next-move",method:"get",params:{index:t}})}function h(t,e){return p({url:"/get-Answer",method:"get",params:{hero:t,timeline:e}})}var m={name:"Stage",data:function(){return{question_content:["请为每个文档选择正确的调查对象。","然后按照文档内容实际发生时间，梳理时间线。"],hero_content:"调查对象",timeline_content:"时间线",doc_content:"点击查看文档",options:[{text:"选项一",data:"1"},{text:"选项二",data:"2"},{text:"选项三",data:"3"},{text:"选项四",data:"4"}],input:"hello",sendList:[{text:"欧阳志保",id:"guy"},{text:"青晓燕",id:"girl"},{text:"欧阳文光",id:"dad"}],docName:[{text:"调查5",hero:""},{text:"调查7",hero:""},{text:"调查8",hero:""},{text:"调查12",hero:""},{text:"调查14",hero:""},{text:"调查24",hero:""},{text:"调查36",hero:""}],getHero:" ",getTimeline:" ",timelineAnswer:["","","","","","",""],fileName:" "}},methods:{next:function(t){var e=this,n=t.target.dataset["index"];v(n).then((function(t){e.options=t.data.options}))},sendMessage:function(){var t=this;h(this.docName,this.timelineAnswer).then((function(e){if(t.getHero=e.data.hero,t.getTimeline=e.data.timeline,t.fileName=e.data.fileName,""!=t.fileName&&void 0!=t.fileName){var n="/api/".replace("/api/","/")+t.fileName;console.log(n),window.open(n)}}))},checkDoc:function(t){var e="/api/".replace("/api/","/file/")+t+".pdf";console.log(e),window.open(e)}},mounted:function(){}},g=m,_=(n("49b2"),n("2877")),x=Object(_["a"])(g,l,c,!1,null,"48a95540",null),b=x.exports,w={name:"App",components:{Stage:b}},y=w,k=(n("034f"),Object(_["a"])(y,o,s,!1,null,null,null)),C=k.exports;i["default"].config.productionTip=!1,i["default"].use(a.a),new i["default"]({render:function(t){return t(C)}}).$mount("#app")},"85ec":function(t,e,n){},a3ec:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.08fcb9b9.js.map