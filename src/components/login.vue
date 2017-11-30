<template>
    <div id="login">
        <div id="login-header">
            <span class="logo">
                <router-link to="/index"></router-link>
            </span>
            <span class="tips">
                依《网络安全法》相关要求，即日起美丽说会员登陆需绑定手机。为保障您的账户安全及正常使用，如您尚未绑定，请尽快完成绑定，感谢您的理解和支持!
            </span>
        </div>
        <div id="M-PC-login-content">
            <div class="lg-left">
                <div class="lg-model">
                    <div class="normal"><a href="javascript:;" :class="isNormalLogin?'active':''" @click="isNormalLogin=true;isShowNotice = false;">普通登录</a></div>
                    <div class="phone"><a href="javascript:;" :class="isNormalLogin?'':'active'" @click="isNormalLogin=false;isShowNotice = false;">手机无密码登录</a></div>
                </div>
                <div class="form-about">
                    <div class="form-info" v-if="isShowNotice">{{noticeInfo}}</div>
                    <div class="normal-login" v-if="isNormalLogin">
                        <input type="text" placeholder="用户名/邮箱/手机号" v-model="userName" @blur="checkName()" @focus="isShowNotice = false"/>
                        <input type="password" placeholder="密码" v-model="userPwd" @blur="checkPwd()" @focus="isShowNotice = false"/>
                    </div>
                    <div class="tel-login" v-if="!isNormalLogin">
                        <input type="text" class="tel-num" placeholder="手机号码" v-model="userPhone" @blur="checkName()" @focus="isShowNotice = false"/>
                        <button class="get-pwd" @click="getActivePwd()">获取动态密码</button>
                        <input type="password" class="tel-pwd" placeholder="动态密码" v-model="userActivePwd" @blur="checkPwd()" @focus="isShowNotice = false"/>
                    </div>
                    <div class="form-login">
                        <button @click="doLogin()">登录</button>
                    </div>
                    <div class="form-login-other">
                        <a href="javascript:;" class="qq"><img src="../assets/img/login/qq_19x19.png"/>QQ登录</a>
                        <a href="javascript:;" class="weixin"><img src="../assets/img/login/weixin_18x19.png"/></em>微信登录</a>
                    </div>
                    <div class="form-other">
                        <a href="javascript:;" class="forget-pwd">忘记密码</a>
                        <router-link class="free-register" to="/register">免费注册</router-link>
                    </div>
                </div>
            </div>
        </div>
        <meili-footer></meili-footer>
    </div>
</template>

<script>
import MeiliFooter from './footer.vue'
export default {
    data:function(){
        return {
            userName:'',                //用户名
            userPwd:'',                 //用户密码
            userPhone:'',               //用户手机号
            userActivePwd:'',           //用户动态密码
            isShowNotice:false,         //是否显示提示信息
            noticeInfo:'',              //提示信息
            isNormalLogin:true,         //登录方式为普通登录或者无密码登录
            activePwd:''                //动态密码
        }
    },
    methods:{
        // 判断用户名或者手机号是否为空，并给出相应的提示信息
        checkName(){
            if(this.isNormalLogin){  
                if(!this.userName){
                    this.isShowNotice = true;
                    this.noticeInfo = "用户名不能为空";

                }else{
                    this.isShowNotice = false;
                }
            }else{
                if(!this.userPhone){
                    this.isShowNotice = true;
                    this.noticeInfo = "请输入用户名/邮箱/手机号";

                }else{
                    this.isShowNotice = false;
                }
            }
        },
        // 判断密码或者动态密码是否为空，并给出相应的提示信息
        checkPwd(){
            if(this.isNormalLogin){  
                if(!this.userPwd){
                    this.isShowNotice = true;
                    this.noticeInfo = "请输入密码";
                }else{
                    this.isShowNotice = false;
                }
            }else{
                if(!this.userActivePwd){
                    this.isShowNotice = true;
                    this.noticeInfo = "请输入动态密码";
                }else{
                    this.isShowNotice = false;
                }
            }
        },
        // 模拟手机获取动态密码并打印在控制台
        getActivePwd(){
            this.isShowNotice = false;
            this.activePwd = Math.round(Math.random()*1000000);
            console.log(this.activePwd);
        },
        // 登录请求
        doLogin(){
            this.isShowNotice = false;
            // 如果是正常登录
            if(this.isNormalLogin){
                this.$http.get('http://127.0.0.1/MyProject/data/user/login.php?uname='+this.userName+"&upwd="+this.userPwd,{withCredentials:true})
                .then(function(res){
                    if(res.data.code == 200){
                        if(res.data.pageToJump == "cart"){
                            this.$router.push('/cart');
                        }else{
                            this.$router.push("/index");
                        }
                    }else if(res.data.code == 201){
                        this.isShowNotice = true;
                        this.noticeInfo = "用户名或密码错误"
                    }
                })
            }else{
            // 如果是手机动态码登录
                if(this.userActivePwd == this.activePwd){
                    this.$http.get('http://127.0.0.1/MyProject/data/user/active_login.php?userPhone='+this.userPhone,{withCredentials:true})
                    .then(function(res){
                        if(res.data.code == 200){
                            this.$router.push("/index");                           
                        }else if(res.data.code == 201){
                            this.isShowNotice = true;
                            this.noticeInfo = "用户名不存在"
                        }
                    })
                }else{
                    this.noticeInfo = "验证码不正确";
                }
            }
        }
    },
    components:{
        MeiliFooter
    }
}
</script>

<style scoped src="../assets/css/login.css"></style>
