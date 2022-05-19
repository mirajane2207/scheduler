(function(){"use strict";var e={686:function(e,o,t){var s=t(963),n=t(252);const r={class:"app"};function u(e,o,t,s,u,i){const a=(0,n.up)("navbar"),c=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(a),(0,n._)("div",r,[(0,n.Wm)(c)])],64)}var i=t.p+"static/img/logo.d2676231.svg";const a=e=>((0,n.dD)("data-v-c0e0bee0"),e=e(),(0,n.Cn)(),e),c={class:"header"},l=a((()=>(0,n._)("div",{class:"header__logo"},[(0,n._)("a",{href:"/",class:"header__logo-link"},[(0,n._)("img",{src:i,alt:"NAU Scheduler",class:"header__logo-pic"})])],-1))),d={class:"header__nav"},p={class:"header__list"},m={class:"header__item"},h=(0,n.Uk)("Account"),v={class:"header__item"},f=(0,n.Uk)("courses"),g={class:"header__item"},_=(0,n.Uk)("schedule"),w=a((()=>(0,n._)("button",{class:"log-in-btn"}," Log in",-1)));function C(e,o,t,s,r,u){const i=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",c,[l,(0,n._)("nav",d,[(0,n._)("ul",p,[(0,n._)("li",m,[(0,n.Wm)(i,{to:"/account",class:"header__link"},{default:(0,n.w5)((()=>[h])),_:1})]),(0,n._)("li",v,[(0,n.Wm)(i,{to:"/courses",class:"header__link"},{default:(0,n.w5)((()=>[f])),_:1})]),(0,n._)("li",g,[(0,n.Wm)(i,{to:"/schedule",class:"header__link"},{default:(0,n.w5)((()=>[_])),_:1})])])]),w])}const b={class:"btn"};function k(e,o,t,s,r,u){return(0,n.wg)(),(0,n.iD)("button",b,[(0,n.WI)(e.$slots,"default",{},void 0,!0)])}var y={name:"custom-button"},D=t(744);const L=(0,D.Z)(y,[["render",k],["__scopeId","data-v-365d05f6"]]);var V=L,W={name:"Navbar",components:{CustomButton:V}};const O=(0,D.Z)(W,[["render",C],["__scopeId","data-v-c0e0bee0"]]);var U=O,Z={components:{Navbar:U}};const I=(0,D.Z)(Z,[["render",u]]);var j=I;const x=["value"];function $(e,o,t,s,r,u){return(0,n.wg)(),(0,n.iD)("input",{type:"text",class:"input",value:t.modelValue,onInput:o[0]||(o[0]=(...e)=>u.updateInput&&u.updateInput(...e))},null,40,x)}var R={name:"custom-input",props:{modelValue:[String,Number]},methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const M=(0,D.Z)(R,[["render",$],["__scopeId","data-v-b8100cde"]]);var N=M;function A(e,o,t,r,u,i){return t.show?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"dialog",onClick:o[1]||(o[1]=(0,s.iM)(((...e)=>i.hideDialog&&i.hideDialog(...e)),["stop"]))},[(0,n._)("div",{onClick:o[0]||(o[0]=(0,s.iM)((()=>{}),["stop"])),class:"dialog__content"},[(0,n.WI)(e.$slots,"default",{},void 0,!0)])])):(0,n.kq)("",!0)}var B={name:"custom-dialog",props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}}};const S=(0,D.Z)(B,[["render",A],["__scopeId","data-v-7b4e1da8"]]);var q=S,F=[V,N,q],P=t(119);const T={class:"home"},z=(0,n._)("h1",null,"Welcome",-1),E=[z];function H(e,o,t,s,r,u){return(0,n.wg)(),(0,n.iD)("div",T,E)}var Y={};const K=(0,D.Z)(Y,[["render",H]]);var G=K;const J=(0,n._)("h1",null,"work",-1),Q=(0,n._)("h1",null,"Course List page",-1),X=(0,n.Uk)(" Create "),ee={key:1};function oe(e,o,t,s,r,u){const i=(0,n.up)("custom-button"),a=(0,n.up)("course-form"),c=(0,n.up)("custom-dialog"),l=(0,n.up)("courses-list");return(0,n.wg)(),(0,n.iD)("div",null,[J,Q,(0,n.Wm)(i,{onClick:u.showDialog},{default:(0,n.w5)((()=>[X])),_:1},8,["onClick"]),(0,n.Wm)(c,{show:r.dialogVisisble,"onUpdate:show":o[0]||(o[0]=e=>r.dialogVisisble=e)},{default:(0,n.w5)((()=>[(0,n.Wm)(a,{onCreate:u.createCourse},null,8,["onCreate"])])),_:1},8,["show"]),r.isLoading?((0,n.wg)(),(0,n.iD)("div",ee," Loading data.. ")):((0,n.wg)(),(0,n.j4)(l,{key:0,courses:r.courses,onRemove:u.removeCourse},null,8,["courses","onRemove"]))])}const te=(0,n._)("h4",null,"Create course",-1),se=(0,n.Uk)(" Create ");function ne(e,o,t,r,u,i){const a=(0,n.up)("custom-input"),c=(0,n.up)("custom-button");return(0,n.wg)(),(0,n.iD)("form",{onSubmit:o[2]||(o[2]=(0,s.iM)((()=>{}),["prevent"]))},[te,(0,n.Wm)(a,{modelValue:u.course.title,"onUpdate:modelValue":o[0]||(o[0]=e=>u.course.title=e),type:"text"},null,8,["modelValue"]),(0,n.Wm)(a,{modelValue:u.course.body,"onUpdate:modelValue":o[1]||(o[1]=e=>u.course.body=e),type:"text"},null,8,["modelValue"]),(0,n.Wm)(c,{onClick:i.createCourse},{default:(0,n.w5)((()=>[se])),_:1},8,["onClick"])],32)}var re={components:{CustomInput:N,CustomButton:V},data(){return{course:{title:"",body:""}}},methods:{createCourse(){this.course.id=Date.now(),this.$emit("create",this.course),this.course={title:"",body:""}}}};const ue=(0,D.Z)(re,[["render",ne]]);var ie=ue;const ae={key:0},ce=(0,n._)("h3",null,"Course List",-1),le={key:1};function de(e,o,t,s,r,u){const i=(0,n.up)("course");return t.courses.length>0?((0,n.wg)(),(0,n.iD)("div",ae,[ce,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.courses,(o=>((0,n.wg)(),(0,n.j4)(i,{course:o,key:o.id,onRemove:t=>e.$emit("remove",o)},null,8,["course","onRemove"])))),128))])):((0,n.wg)(),(0,n.iD)("h2",le," Courses List is empty "))}var pe=t(577);const me=(0,n._)("strong",null,"Name: ",-1),he=(0,n._)("strong",null,"Desc: ",-1),ve=(0,n.Uk)("Delete");function fe(e,o,t,s,r,u){const i=(0,n.up)("custom-button");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",null,[(0,n._)("div",null,[me,(0,n.Uk)((0,pe.zw)(t.course.name),1)]),(0,n._)("div",null,[he,(0,n.Uk)((0,pe.zw)(t.course.description),1)])]),(0,n._)("div",null,[(0,n.Wm)(i,{onClick:o[0]||(o[0]=o=>e.$emit("remove",t.course))},{default:(0,n.w5)((()=>[ve])),_:1})])])}var ge={components:{CustomButton:V},props:{course:{type:Object,required:!0}}};const _e=(0,D.Z)(ge,[["render",fe]]);var we=_e,Ce={components:{Course:we},props:{courses:{type:Array,required:!0}}};const be=(0,D.Z)(Ce,[["render",de]]);var ke=be,ye=t(669),De=t.n(ye),Le={components:{CourseForm:ie,CoursesList:ke},data(){return{courses:[],dialogVisisble:!1,isLoading:!1}},methods:{createCourse(e){this.courses.push(e),this.dialogVisisble=!1},removeCourse(e){this.courses=this.courses.filter((o=>o.id!==e.id))},showDialog(){this.dialogVisisble=!0},async fetchCourses(){try{this.isLoading=!0;const e=await De().get("/api/courses");this.courses=e.data}catch(e){alert("error")}finally{this.isLoading=!1}}},mounted(){this.fetchCourses()}};const Ve=(0,D.Z)(Le,[["render",oe]]);var We=Ve;function Oe(e,o,t,s,n,r){return null}var Ue={name:"AccountView"};const Ze=(0,D.Z)(Ue,[["render",Oe]]);var Ie=Ze;function je(e,o,t,s,n,r){return null}var xe={name:"ScheduleView"};const $e=(0,D.Z)(xe,[["render",je]]);var Re=$e;const Me=(0,n._)("h1",null,"Course List page",-1),Ne=(0,n.Uk)(" Create "),Ae={key:1};function Be(e,o,t,s,r,u){const i=(0,n.up)("custom-button"),a=(0,n.up)("course-form"),c=(0,n.up)("custom-dialog"),l=(0,n.up)("courses-list");return(0,n.wg)(),(0,n.iD)("div",null,[Me,(0,n.Wm)(i,{onClick:u.showDialog},{default:(0,n.w5)((()=>[Ne])),_:1},8,["onClick"]),(0,n.Wm)(c,{show:r.dialogVisisble,"onUpdate:show":o[0]||(o[0]=e=>r.dialogVisisble=e)},{default:(0,n.w5)((()=>[(0,n.Wm)(a,{onCreate:u.createCourse},null,8,["onCreate"])])),_:1},8,["show"]),e.isLoading?((0,n.wg)(),(0,n.iD)("div",Ae," Loading data.. ")):((0,n.wg)(),(0,n.j4)(l,{key:0,courses:e.courses,onRemove:u.removeCourse},null,8,["courses","onRemove"]))])}var Se=t(907),qe={components:{CourseForm:ie,CoursesList:ke},data(){return{dialogVisisble:!1}},methods:{...(0,Se.nv)({fetchCourses:"course/fetchCourses"}),...(0,Se.OI)({}),createCourse(e){this.courses.push(e),this.dialogVisisble=!1},removeCourse(e){this.courses=this.courses.filter((o=>o.id!==e.id))},showDialog(){this.dialogVisisble=!0}},mounted(){this.fetchCourses()},computed:{...(0,Se.rn)({courses:e=>e.course.courses,isLoading:e=>e.course.isLoading})}};const Fe=(0,D.Z)(qe,[["render",Be]]);var Pe=Fe;const Te=[{path:"/",component:G},{path:"/students",component:We},{path:"/professors",component:We},{path:"/groups",component:We},{path:"/auditoriums",component:We},{path:"/admin/courses",component:We},{path:"/lectures",component:We},{path:"/account",component:Ie},{path:"/courses",component:We},{path:"/schedule",component:Re},{path:"/store",component:Pe}],ze=(0,P.p7)({routes:Te,history:(0,P.PO)("/")});var Ee=ze;const He={state:()=>({courses:[],isLoading:!1}),getters:{},mutations:{setCourses(e,o){e.courses=o},setLoading(e,o){e.isLoading=o}},actions:{async fetchCourses({state:e,commit:o}){try{o("setLoading",!0);const e=await De().get("/api/courses");o("setCourses",e.data)}catch(t){alert("error")}finally{o("setLoading",!1)}}},namespaced:!0};var Ye=(0,Se.MT)({modules:{course:He}});const Ke=(0,s.ri)(j);F.forEach((e=>{Ke.component(e.name,e)})),Ke.use(Ye).use(Ee).mount("#app")}},o={};function t(s){var n=o[s];if(void 0!==n)return n.exports;var r=o[s]={exports:{}};return e[s](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(o,s,n,r){if(!s){var u=1/0;for(l=0;l<e.length;l++){s=e[l][0],n=e[l][1],r=e[l][2];for(var i=!0,a=0;a<s.length;a++)(!1&r||u>=r)&&Object.keys(t.O).every((function(e){return t.O[e](s[a])}))?s.splice(a--,1):(i=!1,r<u&&(u=r));if(i){e.splice(l--,1);var c=n();void 0!==c&&(o=c)}}return o}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[s,n,r]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var s in o)t.o(o,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:o[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,s){var n,r,u=s[0],i=s[1],a=s[2],c=0;if(u.some((function(o){return 0!==e[o]}))){for(n in i)t.o(i,n)&&(t.m[n]=i[n]);if(a)var l=a(t)}for(o&&o(s);c<u.length;c++)r=u[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(l)},s=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];s.forEach(o.bind(null,0)),s.push=o.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(686)}));s=t.O(s)})();
//# sourceMappingURL=app.a94d9cd0.js.map