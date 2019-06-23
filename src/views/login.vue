<template>
  <div class="login">
    <header-bar></header-bar>
    <div class="con">
      <div  class="sign-up-wrapper">
        <!-- <div  class="sign-up-header-wrapper">
          <div  class="switch-button-wrapper">
            <div  class="sign-up-type">
              <div  class="sign-up-type-title">手机登录</div>
              <div  class="select-sign-up-bottom-view sign-up-active"></div>
            </div>
            <div  class="sign-up-type-separator"></div>
            <div  class="sign-up-type">
              <div  class="sign-up-type-title">邮箱登录</div>
              <div  class="select-sign-up-bottom-view sign-up-not-active"></div>
            </div>
          </div>
        </div> -->
        <div  class="sign-up-detail-wrapper">
          <div  class="sign-up-cellphone-number-wrapper">
            <div  class="sign-up-detail-title">手机号（目前仅支持中国）</div>
            <div  class="cellphone-input-wrapper">
              <div  class="cellphone-region-input">中国 +86</div>
              <div  class="cellphone-input-separator"></div>
              <el-input placeholder="请输入手机号码" v-model="input" size="medium" class="cellphone-number-input"></el-input>
            </div>
          </div>
        </div>
        <div  class="password-wrapper email-sign-up-section-wrapper">
          <div  class="sign-up-detail-title">密码</div>
          <div  class="relative password-input-wrapper">
            <el-input placeholder="请输入密码" size="medium" v-model="input" show-password></el-input>
          </div>
          <span  class="forget-password">忘记密码？</span>
        </div>
        <div  class="register-button">点此登录</div>
        <div  class="h5-footer-wrapper">
          <div  class="have-got-account-txt text-center">
            <span  class="have-got-account">还没有账号？</span>
            <span  class="link-button">去注册</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerBar from "@/components/headerBar.vue";
export default {
  components: {
    headerBar
  }
};
</script>

<style lang="scss" scoped>
.login {
  background-color: #3d66cc;
  padding: 0 0.2rem;
  height: 100vh;
}
.sign-up-wrapper {
  background-color: white;
  border-radius: 8px;
  display: block;
//   width: 90%;
//   margin: 0px 5%;
  padding-top: 4px;
  padding-bottom: 0.8rem;
  margin-top: 0.4rem;
}
.sign-up-header-wrapper {
  position: relative;
}
.switch-button-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
//   height:0.8rem;
  margin: 10px 14px;
}
.sign-up-type {
  width: 49%;
  height: 0.4rem;
  text-align:center;
}
.sign-up-type-title {
  line-height: 0.35rem;
  font-size: 0.18rem;
}
.sign-up-type-separator {
  width: 1px;
  height: 0.30rem;
  background-color: #b6c2e2;
}
.select-sign-up-bottom-view {
  margin-top: 4px;
  width: 90%;
  height: 5px;
  background-color: #e9a400;
  margin-left: 5%;
}
.sign-up-active {
  display: block;
}
.sign-up-not-active {
  display: none;
}
.sign-up-detail-wrapper {
  margin-left: 0.20rem;
  margin-right: 0.20rem;
}
.sign-up-detail-title {
  text-align: left;
  font-size: 0.16rem;
  margin-bottom: 0.06px;
}
.cellphone-input-wrapper,
.verification-input-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  height: 0.35rem;
}
.cellphone-input-wrapper {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
.cellphone-region-input {
  line-height: 0.35rem;
  font-size: 0.12rem;
  margin-right: 0.08rem;
  margin-left: 0.08rem;
  width: 22%;
}
.cellphone-input-separator {
  height: 0.20rem;
  width: 1px;
  background-color: black;
  margin-top: 0.08rem;
}
.cellphone-number-input {
  font-family: Montserrat-Regular;
  border: none;
  border-radius: 0px;
  text-align: left;
  margin-left: 4%;
  margin-right: 4%;
  font-size: 0.16rem;
  width: 65%;
  .el-input__inner{
    border:0 none;
    border-radius: 0px;
  }
  
}
.register-button {
  background-color: #3d66cc;
  color: white;
  font-size: 0.20rem;
  height: 0.45rem;
  border-radius: 4px;
  line-height: 0.45rem;
  margin: 0.20rem;
  text-align:center;
}
.have-got-account-txt {
  font-size: 0.14rem;
  margin-top: 0.6rem;
  text-align:center;
}
// .email-input {
//   font-family: Montserrat-Regular;
//   border: none;
//   border-radius: 0px;
//   text-align: left;
//   font-size: 16px;
//   width: 100%;
//   height: 35px;
// }
.email-sign-up-section-wrapper {
  margin-top: 0.10rem;
}
.form-item-error {
  height: 0.14rem;
  font-size: 0.11rem;
  font-family: Montserrat-Regular;
  font-weight: normal;
  color: #ff0051;
  line-height: 0.10rem;
  text-align: left;
  width: 100%;
  display: block;
  margin-top: 0.04rem;
}
.link-button {
  color: #3d66cc;
  padding: 0.02rem;
  display: inline-block;
  border-bottom: 1px solid #3d66cc;
}
.referral-code-wrapper {
  margin: 0.10rem 0.20rem;
}
.password-wrapper {
  margin-left: 0.20rem;
  margin-right: 0.20rem;
}
.password-input-wrapper{
  .el-input{
    display:block;
  }
}
.forget-password {
  display: block;
  text-align: right;
  font-size: 0.12rem;
  margin-top: 0.05rem;
  color: #3d66cc;
}
.sign-up-detail-wrapper {
  margin-top: 0.40rem;
}
</style>