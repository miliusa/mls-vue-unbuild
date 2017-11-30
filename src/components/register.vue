<template>
    <div id="register">
        <div id="register-header">
            <span class="logo">
                <router-link to="/index"></router-link>
            </span>
            <span class="tips">
                依《网络安全法》相关要求，即日起美丽说会员登陆需绑定手机。为保障您的账户安全及正常使用，如您尚未绑定，请尽快完成绑定，感谢您的理解和支持!
            </span>
        </div>
        <div id="M-PC-register-content">
            <div class="reg-left">
                <div class="reg-title">新用户注册</div>
                <div class="form-about">
                    <div class="form-info" v-if="isShowNotice">{{noticeInfo}}</div>
                    <div class="tel-register">
                        <input type="text" class="tel-num" placeholder="手机号码" v-model="userPhone" @blur="checkPhone()"  @focus="isShowNotice = false"/>
                        <button class="get-pwd" @click="getActivePwd()"  @focus="isShowNotice = false">点击获取验证码</button>
                        <input type="password" class="tel-pwd" placeholder="验证码" v-model="verificationCode" @blur="checkPwd()"  @focus="isShowNotice = false"/>
                    </div>
                    <div class="form-register">
                        <button @click="register()">立即注册</button>
                    </div>
                    <div class="form-register-other">
                       <input type="checkbox" checked>我已阅读并且同意<a href="http://act.meilishuo.com/wap/1003?ptp=1.yXyP.0.0.KlTmRfc">美丽说注册条款</a>   
                    </div>
                    <div class="form-other">
                        <router-link to="/login" class="had-account-login">&lt;已有账号登录</router-link>
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
            isShowNotice:false,
            userPhone:'',
            verificationCode:'',
            noticeInfo:'',
            activePwd:''
        }
    },
    methods:{
        checkPhone(){
            var reg = /^\d{11}$/;
            if(!this.userPhone){
                this.isShowNotice = true;
                this.noticeInfo = "请输入手机号码";
                return false;
            }else if(!reg.test(this.userPhone*1)){
                this.isShowNotice = true;
                this.noticeInfo = "手机号码格式不正确";
                return false;
            }else{
                this.isShowNotice = false;
                return true;
            }
        },
        checkPwd(){
            if(!this.verificationCode){
                this.isShowNotice = true;
                this.noticeInfo = "请输入验证码";
                return false;
            }else{
                this.isShowNotice = false;
                return true;
            }
        },
        getActivePwd(){
            if(this.checkPhone()){
                this.activePwd = Math.round(Math.random()*1000000);
                console.log(this.activePwd);
            }
        },
        register(){          
            if(this.checkPhone()&&this.checkPwd()){
                if(this.verificationCode*1 == this.activePwd){
                    this.$http.get('http://127.0.0.1/MyProject/data/user/register.php?phone='+this.userPhone)
                    .then(function(res){
                        if(res.data.code == 201){
                            this.isShowNotice = true;
                            this.noticeInfo = "您的手机号已经注册过,请直接登录";
                        }else if(res.data.code == 200){
                            this.isShowNotice = true;
                            this.noticeInfo = "注册成功，请登录";
                            console.log("注册成功");
                        }
                    })
                }else{
                    this.noticeInfo = "您输入的验证码不正确";
                    this.isShowNotice = true;
                }
            }
        }
    },
    components:{
        MeiliFooter
    }
}
</script>

<style scoped src="../assets/css/register.css"></style>
