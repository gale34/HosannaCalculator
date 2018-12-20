(function(t){function e(e){for(var r,s,o=e[0],l=e[1],u=e[2],m=0,d=[];m<o.length;m++)s=o[m],n[s]&&d.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],r=!0,o=1;o<i.length;o++){var l=i[o];0!==n[l]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var r={},n={app:0},a=[];function s(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=r,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/HosannaCalculator/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var r=i("64a9"),n=i.n(r);n.a},"1c95":function(t,e,i){},"1e74":function(t,e,i){},2666:function(t,e,i){},4041:function(t,e,i){"use strict";var r=i("1e74"),n=i.n(r);n.a},"56d7":function(t,e,i){"use strict";i.r(e);var r=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("HCHeader"),i("HCDefaultInput"),i("HCList"),i("HCInput"),i("HCFooter")],1)},a=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("h1",[t._v("Hosanna Calculator")])])}],l={},u=l,c=(i("6c10"),i("2877")),m=Object(c["a"])(u,s,o,!1,null,"2e9c4bf6",null);m.options.__file="HCHeader.vue";var d=m.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shadow"},[t._v("\n  금액\n  "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.total,expression:"total"}],staticClass:"inputBox",attrs:{type:"number",placeholder:"금액"},domProps:{value:t.total},on:{input:function(e){e.target.composing||(t.total=e.target.value)}}}),t._v("\n  리미트\n  "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.limit,expression:"limit"}],staticClass:"inputBox",attrs:{type:"number",disabled:0==t.isLimitUsed,placeholder:"리미트"},domProps:{value:t.limit},on:{input:function(e){e.target.composing||(t.limit=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.isLimitUsed,expression:"isLimitUsed"}],staticClass:"checkBox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isLimitUsed)?t._i(t.isLimitUsed,null)>-1:t.isLimitUsed},on:{change:function(e){var i=t.isLimitUsed,r=e.target,n=!!r.checked;if(Array.isArray(i)){var a=null,s=t._i(i,a);r.checked?s<0&&(t.isLimitUsed=i.concat([a])):s>-1&&(t.isLimitUsed=i.slice(0,s).concat(i.slice(s+1)))}else t.isLimitUsed=n}}})])},f=[],h={data(){return{total:0,limit:1e4,isLimitUsed:!0}},created(){this.total=this.$store.getters.getTotal,this.limit=this.$store.getters.getLimit,this.isLimitUsed=this.$store.getters.getLimitUsed},watch:{total(){this.$store.commit("changeTotal",this.total)},limit(){this.$store.commit("changeLimit",this.limit)},isLimitUsed(){this.$store.commit("changeLimitUsed")}}},v=h,g=(i("4041"),Object(c["a"])(v,p,f,!1,null,"61c2cb20",null));g.options.__file="HCDefaultInput.vue";var b=g.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",{staticClass:"fas fa-plus addBtn",on:{click:t.addMember}})])},L=[];function U(t,e){this.grade=t,this.count=e}var y={data(){return{}},methods:{addMember(){const t=new U(0,0);this.$store.commit("addMember",t)}}},M=y,C=(i("e51a"),Object(c["a"])(M,_,L,!1,null,null,null));C.options.__file="HCInput.vue";var x=C.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",t._l(this.$store.state.memberList,function(e,r){return i("li",{key:r,staticClass:"shadow"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.grade,expression:"member.grade",modifiers:{number:!0}}],staticClass:"inputBox",attrs:{type:"number"},domProps:{value:e.grade},on:{input:function(i){i.target.composing||t.$set(e,"grade",t._n(i.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" 학년\n      "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.count,expression:"member.count",modifiers:{number:!0}}],staticClass:"inputBox",attrs:{type:"number"},domProps:{value:e.count},on:{input:function(i){i.target.composing||t.$set(e,"count",t._n(i.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" 명\n      "),i("span",{staticClass:"removeBtn",on:{click:function(e){t.removeMember(r)}}},[i("i",{staticClass:"fas fa-trash-alt"})])])}),0)])},E=[],O={data(){return{}},created(){},methods:{removeMember(t){this.$store.commit("removeMember",t)}}},w=O,H=(i("8aa0"),Object(c["a"])(w,$,E,!1,null,null,null));H.options.__file="HCList.vue";var I=H.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("button",{on:{click:function(e){t.calculate()}}},[t._v("계산")])])},N=[],P=(i("ac6a"),i("55dd"),{data(){return{memberList:[],total:0,limit:0,isLimitUsed:!0,payUnit:1e3}},methods:{fetch(){this.memberList=this.$store.getters.getMemberList.slice(0),this.total=this.$store.getters.getTotal,this.limit=this.$store.getters.getLimit,this.isLimitUsed=this.$store.getters.getLimitUsed},calculate(){if(this.fetch(),0==this.memberList.length)return void alert("멤버가 등록되지 않았습니다.");let t;t=this.isLimitUsed?this.calculateRecur(this.memberList,this.total,this.limit):this.calculateRecur(this.memberList,this.total,Number.MAX_SAFE_INTEGER),"OVERFLOW. LIMIT_IS_NOT_VALID"===t?alert("리미트가 너무 낮아서 계산이 불가능 합니다. \n리미트를 사용하지 않거나 한도를 늘려주세요"):t.plus>=0?alert("학년 플러스 "+t.plus+"\n남는 잔액은 "+t.balance+"입니다."):alert("학년 마이너스 "+-1*t.plus+"\n남는 잔액은 "+t.balance+"입니다.")},calculateRecur(t,e,i){t.sort(this.compare);let r=this.getSubTotal(t,i),n=this.getNumOfPerson(t),a=n*this.payUnit,s=e-r;if(s>0){if(!this.validateLimit(t,s,i))return"OVERFLOW. LIMIT_IS_NOT_VALID";let r=s%a,n=(s-r)/a;if(0!=r&&(r=a-r,n+=1),(n+this.getMaxGrade(t))*this.payUnit<=i)return{plus:n,balance:r};{let r=this.reBasePlusMember(t,i,n);return e-=r,this.calculateRecur(t,e,i)}}if(0==s)return{plus:0,balance:0};{s=Math.abs(s);let r=s%a,n=(s-r)/a;if((this.getMinGrade(t)-n)*this.payUnit>=0)return{plus:-1*n,balance:r};{let r=this.reBaseMinusMember(t,n);return e-=r,this.calculateRecur(t,e,i)}}},compare(t,e){return t.grade<e.grade?-1:t.grade>e.grade?1:0},getSubTotal(t,e){let i=0;return t.forEach(t=>{1*t.grade*this.payUnit<=e?i+=t.grade*t.count*this.payUnit:i+=e*t.count}),i},getNumOfPerson(t){let e=0;return t.forEach(t=>{e+=1*t.count}),e},getMaxGrade(t){let e=Number.MIN_SAFE_INTEGER;return t.forEach(t=>{e=Math.max(e,t.grade)}),e},getMinGrade(t){let e=Number.MAX_SAFE_INTEGER;return t.forEach(t=>{e=Math.min(e,t.grade)}),e},reBasePlusMember(t,e,i){let r,n=0,a=0;for(r=t.length-1;r>=0;r--){if((1*t[r].grade+i)*this.payUnit<e)break;a+=1*t[r].count}return t.splice(r+1,t.length-(r+1)),n=a*e,n},reBaseMinusMember(t,e){let i,r=0;for(i=0;i<t.length;i++){if(t[i].grade-e>=0)break;r+=t[i].grade*t[i].count*this.payUnit}return t.splice(0,i),r},validateLimit(t,e,i){let r=0;return t.forEach(t=>{r+=(i-this.payUnit*t.grade)*t.count}),r>=e}}}),j=P,k=(i("59ec"),Object(c["a"])(j,T,N,!1,null,null,null));k.options.__file="HCFooter.vue";var S=k.exports,A={name:"app",components:{HCHeader:d,HCDefaultInput:b,HCInput:x,HCList:I,HCFooter:S}},B=A,R=(i("034f"),Object(c["a"])(B,n,a,!1,null,null,null));R.options.__file="App.vue";var F=R.exports,G=i("2f62");r["a"].use(G["a"]);const D=new G["a"].Store({state:{memberList:[],total:0,limit:1e4,isLimitUsed:!0},getters:{getMemberList(t){return t.memberList},getTotal(t){return t.total},getLimit(t){return t.limit},getLimitUsed(t){return t.isLimitUsed}},mutations:{addMember(t,e){t.memberList.push(e)},changeTotal(t,e){t.total=e},changeLimit(t,e){t.limit=e},changeLimitUsed(t){t.isLimitUsed=!t.isLimitUsed},removeMember(t,e){t.memberList.splice(e,1)}}});r["a"].config.productionTip=!1,new r["a"]({render:t=>t(F),store:D}).$mount("#app")},"59ec":function(t,e,i){"use strict";var r=i("2666"),n=i.n(r);n.a},"60ae":function(t,e,i){},"64a9":function(t,e,i){},"6c10":function(t,e,i){"use strict";var r=i("60ae"),n=i.n(r);n.a},"8aa0":function(t,e,i){"use strict";var r=i("c89d"),n=i.n(r);n.a},c89d:function(t,e,i){},e51a:function(t,e,i){"use strict";var r=i("1c95"),n=i.n(r);n.a}});
//# sourceMappingURL=app.117eb290.js.map