(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3,21],{649:function(e,t,o){"use strict";o.r(t);o(119);var r={props:{type:"email",param:""},data:function(){return{disabled:!1,currency:this.$store.state.token.currency,text:"发送验证码"}},methods:{handleSend:function(){var e=this,t="";if("email"===this.type||"forgetEmail"===this.type){if(!isEmail(this.param))return this.$message.error("请输入正确的邮箱地址");t="email"===this.type?"/api/front/login/email/captcha":"/api/front/login/email/forget/password"}if("phone"===this.type){if(!this.param)return this.$message.error("请输入正确的手机号码");t="/api/front/login/sendCode"}this.$axios.post(t,this.param).then((function(t){e.afterSend()}))},afterSend:function(){var e=this;if(!this.disabled){this.disabled=!0;var t=60;this.text="剩余 ".concat(t," s");var o=setInterval((function(){t-=1,e.text="剩余 ".concat(t," s"),t<0&&(clearInterval(o),e.disabled=!1,e.text="重新发送")}),1e3)}}}},n=o(23),component=Object(n.a)(r,(function(){var e=this;return(0,e._self._c)("el-button",{attrs:{disabled:e.disabled},on:{click:e.handleSend}},[e._v(e._s(e.text))])}),[],!1,null,"770c6a84",null);t.default=component.exports},650:function(e,t,o){var content=o(671);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(3).default)("6917e2e7",content,!0,{sourceMap:!1})},670:function(e,t,o){"use strict";o(650)},671:function(e,t,o){var r=o(2)((function(i){return i[1]}));r.push([e.i,".content-main[data-v-54907588]{max-height:calc(100vh - 400px);overflow:auto}",""]),r.locals={},e.exports=r},674:function(e,t,o){var content=o(699);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(3).default)("291c1a24",content,!0,{sourceMap:!1})},676:function(e,t,o){"use strict";o.r(t);var r={data:function(){return{dialogVisible:!1,agreement:""}},mounted:function(){var e=this;this.$axios.get("/api/front/login/method/info").then((function(t){e.agreement=t.data.agreement}))},method:{show:function(){this.dialogVisible=!0}}},n=(o(670),o(23)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("client-only",[t("el-dialog",{staticClass:"hasLine",attrs:{visible:e.dialogVisible,"destroy-on-close":"",title:"用户协议 ",width:"800",draggable:""},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("div",{staticClass:"content-main",domProps:{innerHTML:e._s(e.agreement)}})])],1)}),[],!1,null,"54907588",null);t.default=component.exports},698:function(e,t,o){"use strict";o(674)},699:function(e,t,o){var r=o(2)((function(i){return i[1]}));r.push([e.i,".captcha[data-v-4ab46e2c]{flex:1;margin-right:10px}.toggle[data-v-4ab46e2c]{display:flex;justify-content:flex-end}.mt40[data-v-4ab46e2c]{margin-top:40px}.btns>div[data-v-4ab46e2c]{margin-top:24px;text-align:center}.btns>div[data-v-4ab46e2c]:first-child{margin-top:0}.btns .fullBtn[data-v-4ab46e2c]{width:100%}.agreement[data-v-4ab46e2c]{color:var(--use-color-primary);cursor:pointer}",""]),r.locals={},e.exports=r},731:function(e,t,o){"use strict";o.r(t);var r=function(e,t,o){if(!t)return o(new Error("请阅读并同意用户协议"));o()},n={data:function(){return{activeTabs:"email",formEmailData:{email:"",password:"",captcha:"",isAgree:!0},emailRules:{email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],captcha:[{required:!0,message:"请输入验证码",trigger:"blur"}],isAgree:[{required:!0,validator:r,trigger:"blur"}]},formPhoneData:{password:"",captcha:"",phone:"",countryCode:86,isAgree:!0},phoneRules:{phone:[{required:!0,message:"请输入手机号码",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],captcha:[{required:!0,message:"请输入验证码",trigger:"blur"}],isAgree:[{required:!0,validator:r,trigger:"blur"}]},phoneCaptcha:!1}},methods:{toggleFn:function(){this.phoneCaptcha=!this.phoneCaptcha},onSubmit:function(){var e=this;"email"===this.activeTabs?this.$refs.formEmailRef.validate((function(t){if(!t)return console.log("error submit!"),!1;e.$axios.post("/api/front/login/email",e.formEmailData).then((function(t){e.toggleMode()}))})):this.$refs.formPhoneRef.validate((function(t){if(!t)return console.log("error submit!"),!1;e.$axios.post("/api/front/login/mobile/password",e.formPhoneData).then((function(t){e.toggleMode()}))}))},toggleMode:function(){this.$emit("update","login")},showAgreement:function(){this.$refs.agreementRef.show()}}},l=(o(698),o(23)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("el-tabs",{staticClass:"loginTabs",model:{value:e.activeTabs,callback:function(t){e.activeTabs=t},expression:"activeTabs"}},[t("el-tab-pane",{attrs:{label:"邮箱",name:"email"}},[t("el-form",{ref:"formEmailRef",staticClass:"mt40",attrs:{size:"medium","label-position":"top",rules:e.emailRules,model:e.formEmailData}},[t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:e.formEmailData.email,callback:function(t){e.$set(e.formEmailData,"email",t)},expression:"formEmailData.email"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"验证码",prop:"captcha"}},[t("div",{staticClass:"flex"},[t("el-input",{staticClass:"captcha",attrs:{placeholder:"请输入验证码",clearable:""},model:{value:e.formEmailData.captcha,callback:function(t){e.$set(e.formEmailData,"captcha",t)},expression:"formEmailData.captcha"}}),e._v(" "),t("send-code",{attrs:{type:"email",param:e.formEmailData.email}})],1)]),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{placeholder:"请输入密码","show-password":"",clearable:""},model:{value:e.formEmailData.password,callback:function(t){e.$set(e.formEmailData,"password",t)},expression:"formEmailData.password"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"isAgree"}},[t("el-checkbox",{model:{value:e.formEmailData.isAgree,callback:function(t){e.$set(e.formEmailData,"isAgree",t)},expression:"formEmailData.isAgree"}},[e._v("我已阅读并同意"),t("span",{staticClass:"agreement",on:{click:function(t){return t.stopPropagation(),e.showAgreement.apply(null,arguments)}}},[e._v("《用户协议》")])])],1)],1)],1),e._v(" "),t("el-tab-pane",{attrs:{label:"手机号码",name:"phone"}},[t("el-form",{ref:"formPhoneRef",staticClass:"mt40",attrs:{size:"medium","label-position":"top",model:e.formPhoneData,rules:e.phoneRules}},[t("el-form-item",{attrs:{label:"手机号码",prop:"phone"}},[t("el-input",{staticClass:"countryWrapper",attrs:{placeholder:"请输入手机号码",clearable:""},scopedSlots:e._u([{key:"prefix",fn:function(){return[t("country-code-selector",{attrs:{countryCode:e.formPhoneData.countryCode},on:{"update:countryCode":function(t){return e.$set(e.formPhoneData,"countryCode",t)},"update:country-code":function(t){return e.$set(e.formPhoneData,"countryCode",t)}}})]},proxy:!0}]),model:{value:e.formPhoneData.phone,callback:function(t){e.$set(e.formPhoneData,"phone",t)},expression:"formPhoneData.phone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"验证码",prop:"captcha"}},[t("div",{staticClass:"flex"},[t("el-input",{staticClass:"captcha",attrs:{placeholder:"请输入验证码",clearable:""},model:{value:e.formPhoneData.captcha,callback:function(t){e.$set(e.formPhoneData,"captcha",t)},expression:"formPhoneData.captcha"}}),e._v(" "),t("send-code",{attrs:{type:"phone",param:e.formPhoneData.phone,countryCode:e.formPhoneData.countryCode}})],1)]),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{placeholder:"请输入密码","show-password":"",clearable:""},model:{value:e.formPhoneData.password,callback:function(t){e.$set(e.formPhoneData,"password",t)},expression:"formPhoneData.password"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"isAgree"}},[t("el-checkbox",{model:{value:e.formPhoneData.isAgree,callback:function(t){e.$set(e.formPhoneData,"isAgree",t)},expression:"formPhoneData.isAgree"}},[e._v("我已阅读并同意"),t("span",{staticClass:"agreement",on:{click:function(t){return t.stopPropagation(),e.showAgreement.apply(null,arguments)}}},[e._v("《用户协议》")])])],1)],1)],1)],1),e._v(" "),t("div",{staticClass:"btns"},[t("div",[t("el-button",{staticClass:"fullBtn",attrs:{size:"medium",type:"primary"},on:{click:e.onSubmit}},[e._v("注册")])],1),e._v(" "),t("div",[e._v("已有账户？"),t("el-button",{attrs:{type:"text"},on:{click:e.toggleMode}},[e._v("去登录")])],1)]),e._v(" "),t("agreement",{ref:"agreementRef"})],1)}),[],!1,null,"4ab46e2c",null);t.default=component.exports;installComponents(component,{SendCode:o(649).default,CountryCodeSelector:o(677).default,Agreement:o(676).default})}}]);