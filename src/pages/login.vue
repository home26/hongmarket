<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">Account Login</span><span class="sep-line">|</span><span>QR Login</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="Please enter account" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="Please enter password" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">Log In</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">Login/Signup By Phone Numer</div>
            <div class="reg">Sign Up<span>|</span>Forget Password</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="https://excellenthong.ca/" target="_blank">Developed By Hong</a><span>|</span>
        <a href="https://excellenthong.ca/" target="_blank">Welcome To Hong's Website</a>
      </div>
      <p class="copyright">Copyright ©2020 hongmarket.com All Right Reserved</p>
    </div>
  </div>
</template>
<script>
import { Message } from 'element-ui';
export default {
  name: 'login',
  data(){
    return {
      username:'',
      password:'',
      userId:''
    }
  },
  methods:{
    login(){
      let { username,password } = this;
      this.axios.post('/user/login',{
        username,
        password
      }).then((res)=>{
        this.$cookie.set('userId',res.id,{expires:'Session'});
        this.$store.dispatch('saveUserName',res.username);
        this.$router.push({
          name: 'index',
          params:{
            from: 'login'
          }
        });
      })
    },
    register(){
      this.axios.post('/user/register',{
        username:'admin1',
        password:'admin1',
        email:'admin1@163.com'
      }).then(()=>{
        //alert('Signed up successfully');
        Message.success('Signed up successfully');
      })
    }
  }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
.login{
  &>.container{
    height:70px;
    margin-top: 20px;

    img{
      width:auto;
      height:70%;
    }
  }
  .wrapper{
    background:url('/imgs/login-bg.jpg') no-repeat center;
    .container{
      height:576px;
      .login-form{
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width:410px;
        height:510px;
        background-color:#ffffff;
        position:absolute;
        bottom:29px;
        right:0;
        h3{
          line-height:23px;
          font-size:24px;
          text-align:center;
          margin:40px auto 49px;
          .checked{
            color:$colorA;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:20px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          margin-top:10px;
          font-size:16px;
        }
        .tips{
          margin-top:14px;
          display:flex;
          justify-content:space-between;
          font-size:12px;
          cursor:pointer;
          .sms{
            color:$colorA;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height:100px;
    padding-top:60px;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}
</style>