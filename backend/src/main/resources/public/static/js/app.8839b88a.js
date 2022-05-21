(function(){"use strict";var e={545:function(e,s,o){var t=o(963),r=o(252);const n={class:"app"};function i(e,s,o,t,i,a){const c=(0,r.up)("navbar"),u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",n,[(0,r.Wm)(c),(0,r.Wm)(u)])}var a={},c=o(744);const u=(0,c.Z)(a,[["render",i]]);var l=u;const d={class:"btn"};function p(e,s,o,t,n,i){return(0,r.wg)(),(0,r.iD)("button",d,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])}var m={name:"custom-button"};const h=(0,c.Z)(m,[["render",p],["__scopeId","data-v-933a6bac"]]);var _=h;const f=["value"];function v(e,s,o,t,n,i){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.WI)(e.$slots,"default",{},void 0,!0),(0,r._)("input",{type:"text",class:"input",value:o.modelValue,onInput:s[0]||(s[0]=(...e)=>i.updateInput&&i.updateInput(...e))},null,40,f)],64)}var g={name:"custom-input",props:{modelValue:[String,Number]},methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const w=(0,c.Z)(g,[["render",v],["__scopeId","data-v-62c4c69a"]]);var C=w;function b(e,s,o,n,i,a){return o.show?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"dialog",onClick:s[1]||(s[1]=(0,t.iM)(((...e)=>a.hideDialog&&a.hideDialog(...e)),["stop"]))},[(0,r._)("div",{onClick:s[0]||(s[0]=(0,t.iM)((()=>{}),["stop"])),class:"dialog__content"},[(0,r.WI)(e.$slots,"default",{},void 0,!0)])])):(0,r.kq)("",!0)}var k={name:"custom-dialog",props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}}};const D=(0,c.Z)(k,[["render",b],["__scopeId","data-v-6592c971"]]);var y=D,L=o.p+"static/img/logo.d2676231.svg";const W=e=>((0,r.dD)("data-v-548a73af"),e=e(),(0,r.Cn)(),e),V={class:"header"},I=W((()=>(0,r._)("div",{class:"header__logo"},[(0,r._)("a",{href:"/",class:"header__logo-link"},[(0,r._)("img",{src:L,alt:"NAU Scheduler",class:"header__logo-pic"})])],-1))),j={class:"header__nav"},U={class:"header__list"},Z={class:"header__item"},O=(0,r.Uk)("Account"),$={class:"header__item"},F=(0,r.Uk)("courses"),z={class:"header__item"},R=(0,r.Uk)("schedule"),q=(0,r.Uk)(" Log in ");function x(e,s,o,t,n,i){const a=(0,r.up)("router-link"),c=(0,r.up)("custom-button"),u=(0,r.up)("login-form"),l=(0,r.up)("custom-dialog");return(0,r.wg)(),(0,r.iD)("div",V,[I,(0,r._)("nav",j,[(0,r._)("ul",U,[(0,r._)("li",Z,[(0,r.Wm)(a,{to:"/account",class:"header__link"},{default:(0,r.w5)((()=>[O])),_:1})]),(0,r._)("li",$,[(0,r.Wm)(a,{to:"/courses",class:"header__link"},{default:(0,r.w5)((()=>[F])),_:1})]),(0,r._)("li",z,[(0,r.Wm)(a,{to:"/schedule",class:"header__link"},{default:(0,r.w5)((()=>[R])),_:1})])])]),(0,r.Wm)(c,{class:"log-in-btn",onClick:i.showDialog},{default:(0,r.w5)((()=>[q])),_:1},8,["onClick"]),(0,r.Wm)(l,{show:n.dialogVisisble,"onUpdate:show":s[0]||(s[0]=e=>n.dialogVisisble=e)},{default:(0,r.w5)((()=>[(0,r.Wm)(u)])),_:1},8,["show"])])}const S={class:"log-in-form"},A=(0,r.uE)('<form action="" class="log-in-form__input-form" data-v-0d5c4ece><h1 class="log-in-form__title" data-v-0d5c4ece>log in form</h1><input type="text" class="log-in-form__field" placeholder="login" data-v-0d5c4ece><input type="password" class="log-in-form__field" placeholder="password" data-v-0d5c4ece><button class="log-in-form__submit" data-v-0d5c4ece>log in</button></form>',1),E=[A];function M(e,s,o,t,n,i){return(0,r.wg)(),(0,r.iD)("div",S,E)}var N={name:"LoginForm"};const P=(0,c.Z)(N,[["render",M],["__scopeId","data-v-0d5c4ece"]]);var B=P,H={name:"Navbar",components:{LoginFrom:B},data(){return{dialogVisisble:!1}},methods:{showDialog(){this.dialogVisisble=!0}}};const Y=(0,c.Z)(H,[["render",x],["__scopeId","data-v-548a73af"]]);var T=Y,K=[_,C,y,T],G=o(119);const J={class:"home"},Q=(0,r._)("div",{class:"wrapper"},[(0,r._)("div",{class:"intro"},[(0,r._)("h1",{class:"intro__title"},"Welcome to NAU Scheduler")])],-1),X=[Q];function ee(e,s,o,t,n,i){return(0,r.wg)(),(0,r.iD)("div",J,X)}var se={};const oe=(0,c.Z)(se,[["render",ee]]);var te=oe;const re=(0,r._)("h1",null,"work",-1),ne=(0,r._)("h1",null,"Course List page",-1),ie=(0,r.Uk)(" Create "),ae={key:1};function ce(e,s,o,t,n,i){const a=(0,r.up)("custom-button"),c=(0,r.up)("course-form"),u=(0,r.up)("custom-dialog"),l=(0,r.up)("courses-list");return(0,r.wg)(),(0,r.iD)("div",null,[re,ne,(0,r.Wm)(a,{onClick:i.showDialog},{default:(0,r.w5)((()=>[ie])),_:1},8,["onClick"]),(0,r.Wm)(u,{show:n.dialogVisisble,"onUpdate:show":s[0]||(s[0]=e=>n.dialogVisisble=e)},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{onCreate:i.createCourse},null,8,["onCreate"])])),_:1},8,["show"]),n.isLoading?((0,r.wg)(),(0,r.iD)("div",ae," Loading data.. ")):((0,r.wg)(),(0,r.j4)(l,{key:0,courses:n.courses,onRemove:i.removeCourse},null,8,["courses","onRemove"]))])}const ue=e=>((0,r.dD)("data-v-2cb1c20a"),e=e(),(0,r.Cn)(),e),le=ue((()=>(0,r._)("a",{class:"course-form__id"},"ID",-1))),de=ue((()=>(0,r._)("label",{class:"label"},"Name",-1))),pe=ue((()=>(0,r._)("label",{class:"label"},"Description",-1))),me=ue((()=>(0,r._)("label",{for:"professors",class:"label"},"Professors",-1))),he=ue((()=>(0,r._)("ul",{name:"professors"},[(0,r._)("li",null,"dldsjkljdk"),(0,r._)("li",null,"dldsjkljdk"),(0,r._)("li",null,"dldsjkljdk"),(0,r._)("li",null,"dldsjkljdk")],-1)));function _e(e,s,o,n,i,a){const c=(0,r.up)("custom-input");return(0,r.wg)(),(0,r.iD)("form",{onSubmit:s[0]||(s[0]=(0,t.iM)((()=>{}),["prevent"])),class:"course-form"},[le,(0,r.Wm)(c,{type:"text"},{default:(0,r.w5)((()=>[de])),_:1}),(0,r.Wm)(c,{type:"text"},{default:(0,r.w5)((()=>[pe])),_:1}),me,he,(0,r.WI)(e.$slots,"default",{},void 0,!0)],32)}var fe={components:{CustomInput:C},data(){return{course:{title:"",body:""}}},methods:{createCourse(){this.course.id=Date.now(),this.$emit("create",this.course),this.course={title:"",body:""}}}};const ve=(0,c.Z)(fe,[["render",_e],["__scopeId","data-v-2cb1c20a"]]);var ge=ve,we=o(577);const Ce=e=>((0,r.dD)("data-v-dd4c30ae"),e=e(),(0,r.Cn)(),e),be=Ce((()=>(0,r._)("h1",{class:"table-title"},"Courses",-1))),ke={class:"courses-table-headers"},De=Ce((()=>(0,r._)("a",{class:"course-id"},"ID",-1))),ye=Ce((()=>(0,r._)("a",{class:"course-name"},"Name",-1))),Le=Ce((()=>(0,r._)("a",{class:"course-desc"},"Description",-1))),We=Ce((()=>(0,r._)("a",{class:"course-professors"},"Professors",-1))),Ve=(0,r.Uk)("Create "),Ie={class:"form-btns"},je=(0,r.Uk)("Create "),Ue={class:"form-btns"},Ze=(0,r.Uk)("Save Changes "),Oe=(0,r.Uk)("Delete "),$e=["course"],Fe={class:"course-id"},ze={class:"course-name"},Re={class:"course-desc"},qe={class:"course-professors"},xe={key:1};function Se(e,s,o,t,n,i){const a=(0,r.up)("custom-button"),c=(0,r.up)("course-form"),u=(0,r.up)("side-form");return(0,r.wg)(),(0,r.iD)(r.HY,null,[be,(0,r._)("div",ke,[De,ye,Le,We,(0,r.Wm)(a,{class:"course-create",onClick:i.showCreate},{default:(0,r.w5)((()=>[Ve])),_:1},8,["onClick"]),(0,r.Wm)(u,{show:n.createVisible,"onUpdate:show":s[0]||(s[0]=e=>n.createVisible=e)},{default:(0,r.w5)((()=>[(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r._)("div",Ie,[(0,r.Wm)(a,{class:"course-update",onClick:i.updateCourse},{default:(0,r.w5)((()=>[je])),_:1},8,["onClick"])])])),_:1})])),_:1},8,["show"])]),(0,r.Wm)(u,{show:n.editVisible,"onUpdate:show":s[1]||(s[1]=e=>n.editVisible=e)},{default:(0,r.w5)((()=>[(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r._)("div",Ue,[(0,r.Wm)(a,{class:"course-update",onClick:i.updateCourse},{default:(0,r.w5)((()=>[Ze])),_:1},8,["onClick"]),(0,r.Wm)(a,{class:"course-delete",onClick:i.deleteCourse},{default:(0,r.w5)((()=>[Oe])),_:1},8,["onClick"])])])),_:1})])),_:1},8,["show"]),o.courses.length>0?((0,r.wg)(!0),(0,r.iD)(r.HY,{key:0},(0,r.Ko)(o.courses,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"courses-table",course:e,key:e.id},[(0,r._)("a",Fe,(0,we.zw)(e.id),1),(0,r._)("a",ze,(0,we.zw)(e.name),1),(0,r._)("a",Re,(0,we.zw)(e.description),1),(0,r._)("a",qe,(0,we.zw)(e.professors),1),(0,r._)("button",{class:"course-edit",onClick:s[2]||(s[2]=(...e)=>i.showEdit&&i.showEdit(...e))},"Edit ")],8,$e)))),128)):((0,r.wg)(),(0,r.iD)("h2",xe," Courses List is empty "))],64)}const Ae=(0,r._)("strong",null,"Name: ",-1),Ee=(0,r._)("strong",null,"Desc: ",-1),Me=(0,r.Uk)("Delete");function Ne(e,s,o,t,n,i){const a=(0,r.up)("custom-button");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",null,[(0,r._)("div",null,[Ae,(0,r.Uk)((0,we.zw)(o.course.name),1)]),(0,r._)("div",null,[Ee,(0,r.Uk)((0,we.zw)(o.course.description),1)])]),(0,r._)("div",null,[(0,r.Wm)(a,{onClick:s[0]||(s[0]=s=>e.$emit("remove",o.course))},{default:(0,r.w5)((()=>[Me])),_:1})])])}var Pe={components:{CustomButton:_},props:{course:{type:Object,required:!0}}};const Be=(0,c.Z)(Pe,[["render",Ne]]);var He=Be;function Ye(e,s,o,n,i,a){return o.show?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"side-form",onClick:s[1]||(s[1]=(0,t.iM)(((...e)=>a.hideDialog&&a.hideDialog(...e)),["stop"]))},[(0,r._)("div",{onClick:s[0]||(s[0]=(0,t.iM)((()=>{}),["stop"]))},[(0,r.WI)(e.$slots,"default",{},void 0,!0)])])):(0,r.kq)("",!0)}var Te={name:"SideForm",props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}}};const Ke=(0,c.Z)(Te,[["render",Ye],["__scopeId","data-v-b1982bbc"]]);var Ge=Ke,Je={components:{CustomButton:_,Course:He,CourseForm:ge,SideForm:Ge},props:{courses:{type:Array,required:!0}},data(){return{createVisible:!1,editVisible:!1}},methods:{showCreate(){this.createVisible=!0},showEdit(){this.editVisible=!0},createCourse(e){},updateCourse(e){},deleteCourse(e){}}};const Qe=(0,c.Z)(Je,[["render",Se],["__scopeId","data-v-dd4c30ae"]]);var Xe=Qe,es=o(669),ss=o.n(es),os={components:{CourseForm:ge,CoursesList:Xe},data(){return{courses:[],dialogVisisble:!1,isLoading:!1}},methods:{createCourse(e){this.courses.push(e),this.dialogVisisble=!1},removeCourse(e){this.courses=this.courses.filter((s=>s.id!==e.id))},showDialog(){this.dialogVisisble=!0},async fetchCourses(){try{this.isLoading=!0;const e=await ss().get("/api/courses");this.courses=e.data}catch(e){alert("error")}finally{this.isLoading=!1}}},mounted(){this.fetchCourses()}};const ts=(0,c.Z)(os,[["render",ce]]);var rs=ts;function ns(e,s,o,t,r,n){return null}var is={name:"AccountView"};const as=(0,c.Z)(is,[["render",ns]]);var cs=as;function us(e,s,o,t,r,n){return null}var ls={name:"ScheduleView"};const ds=(0,c.Z)(ls,[["render",us]]);var ps=ds;const ms={class:"course-view"},hs=(0,r._)("div",{class:"side-bar"},null,-1);function _s(e,s,o,t,n,i){const a=(0,r.up)("courses-list-items");return(0,r.wg)(),(0,r.iD)("div",ms,[hs,e.isLoading?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(a,{key:0,courses:e.courses,onRemove:i.removeCourse},null,8,["courses","onRemove"]))])}var fs=o(907);const vs={key:0},gs={key:1};function ws(e,s,o,t,n,i){const a=(0,r.up)("course-item");return o.courses.length>0?((0,r.wg)(),(0,r.iD)("div",vs,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.courses,(s=>((0,r.wg)(),(0,r.j4)(a,{course:s,key:s.id,onRemove:o=>e.$emit("remove",s)},null,8,["course","onRemove"])))),128))])):((0,r.wg)(),(0,r.iD)("h2",gs," Courses List is empty "))}const Cs=e=>((0,r.dD)("data-v-d3a7ab7c"),e=e(),(0,r.Cn)(),e),bs={class:"wrapper"},ks={class:"course"},Ds={class:"course__info"},ys={class:"course__name"},Ls={class:"course__description"},Ws=Cs((()=>(0,r._)("h2",{class:"course__professors"},"Professors",-1))),Vs=Cs((()=>(0,r._)("p",{class:"course__professors-list"}," Primrose Rubio, Aliqua fugiat, nostrud irure, irure cupidatat ",-1))),Is={class:"course__title-wrapper"},js={class:"course__title"};function Us(e,s,o,t,n,i){return(0,r.wg)(),(0,r.iD)("div",bs,[(0,r._)("div",ks,[(0,r._)("div",Ds,[(0,r._)("h1",ys,(0,we.zw)(o.course.name),1),(0,r._)("p",Ls,(0,we.zw)(o.course.description),1),Ws,Vs]),(0,r._)("div",Is,[(0,r._)("h1",js,(0,we.zw)(o.course.name),1)])])])}var Zs={components:{CustomButton:_},props:{course:{type:Object,required:!0}}};const Os=(0,c.Z)(Zs,[["render",Us],["__scopeId","data-v-d3a7ab7c"]]);var $s=Os,Fs={components:{CourseItem:$s},props:{courses:{type:Array,required:!0}}};const zs=(0,c.Z)(Fs,[["render",ws]]);var Rs=zs,qs={components:{CoursesListItems:Rs,CourseForm:ge,CoursesList:Xe},data(){return{dialogVisisble:!1}},methods:{...(0,fs.nv)({fetchCourses:"course/fetchCourses"}),createCourse(e){this.courses.push(e),this.dialogVisisble=!1},removeCourse(e){this.courses=this.courses.filter((s=>s.id!==e.id))},showDialog(){this.dialogVisisble=!0}},mounted(){this.fetchCourses()},computed:{...(0,fs.rn)({courses:e=>e.course.courses,isLoading:e=>e.course.isLoading})}};const xs=(0,c.Z)(qs,[["render",_s]]);var Ss=xs;const As={class:"course-table-view"},Es={key:1};function Ms(e,s,o,t,n,i){const a=(0,r.up)("courses-list");return(0,r.wg)(),(0,r.iD)("div",As,[e.isLoading?((0,r.wg)(),(0,r.iD)("div",Es," Loading data.. ")):((0,r.wg)(),(0,r.j4)(a,{key:0,courses:e.courses,onRemove:i.removeCourse},null,8,["courses","onRemove"]))])}var Ns={components:{CourseForm:ge,CoursesList:Xe},data(){return{editVisisble:!1}},methods:{...(0,fs.nv)({fetchCourses:"course/fetchCourses"}),createCourse(e){this.courses.push(e),this.dialogVisisble=!1},removeCourse(e){this.courses=this.courses.filter((s=>s.id!==e.id))},showDialog(){this.e=!0}},mounted(){this.fetchCourses()},computed:{...(0,fs.rn)({courses:e=>e.course.courses,isLoading:e=>e.course.isLoading})}};const Ps=(0,c.Z)(Ns,[["render",Ms]]);var Bs=Ps;const Hs=[{path:"/",component:te},{path:"/students",component:rs},{path:"/professors",component:rs},{path:"/groups",component:rs},{path:"/auditoriums",component:rs},{path:"/admin/courses",component:rs},{path:"/lectures",component:rs},{path:"/account",component:cs},{path:"/courses",component:Bs},{path:"/schedule",component:ps},{path:"/store",component:Ss}],Ys=(0,G.p7)({routes:Hs,history:(0,G.PO)("/")});var Ts=Ys;const Ks={state:()=>({courses:[],isLoading:!1}),getters:{},mutations:{setCourses(e,s){e.courses=s},setLoading(e,s){e.isLoading=s}},actions:{async fetchCourses({state:e,commit:s}){try{s("setLoading",!0);const e=await ss().get("/api/courses");s("setCourses",e.data)}catch(o){alert("error")}finally{s("setLoading",!1)}}},namespaced:!0};var Gs=(0,fs.MT)({modules:{course:Ks}});const Js=(0,t.ri)(l);Js.component("LoginForm",B),K.forEach((e=>{Js.component(e.name,e)})),Js.use(Gs).use(Ts).mount("#app")}},s={};function o(t){var r=s[t];if(void 0!==r)return r.exports;var n=s[t]={exports:{}};return e[t](n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(s,t,r,n){if(!t){var i=1/0;for(l=0;l<e.length;l++){t=e[l][0],r=e[l][1],n=e[l][2];for(var a=!0,c=0;c<t.length;c++)(!1&n||i>=n)&&Object.keys(o.O).every((function(e){return o.O[e](t[c])}))?t.splice(c--,1):(a=!1,n<i&&(i=n));if(a){e.splice(l--,1);var u=r();void 0!==u&&(s=u)}}return s}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[t,r,n]}}(),function(){o.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(s,{a:s}),s}}(),function(){o.d=function(e,s){for(var t in s)o.o(s,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){o.p="/"}(),function(){var e={143:0};o.O.j=function(s){return 0===e[s]};var s=function(s,t){var r,n,i=t[0],a=t[1],c=t[2],u=0;if(i.some((function(s){return 0!==e[s]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(c)var l=c(o)}for(s&&s(t);u<i.length;u++)n=i[u],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(l)},t=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(545)}));t=o.O(t)})();
//# sourceMappingURL=app.8839b88a.js.map