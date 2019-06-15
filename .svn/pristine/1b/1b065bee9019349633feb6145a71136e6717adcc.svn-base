<template>
  <div class="login" v-loading.fullscreen.lock="spinShow">
    <div class="login-content">
      <div class="login-logo fn-clear">
        <img src="@/assets/logo.png">
        <div class="title">罗平县医共体数据中心</div>
      </div>
      <div class="form">
        <p class="p1">系统登录</p>
        <p class="p2">system login</p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="login-ruleForm">
          <el-form-item prop="accountNo">
            <div class="label">
              <div class="icon">
                <i class="iconfont icon-visit_people"></i>
              </div>
              <el-input v-model="ruleForm.accountNo" placeholder="请输入用户名"></el-input>
            </div>
          </el-form-item>
          <el-form-item prop="passwords">
            <div class="label">
              <div class="icon">
                <i class="iconfont icon-mima"></i>
              </div>
              <el-input
                v-model="ruleForm.passwords"
                placeholder="请输入密码"
                type="password"
                @keyup.enter.native="submit"
              ></el-input>
            </div>
          </el-form-item>
          <!-- 			<el-form-item prop="validateCode">
						<div class="label">
							<el-input v-model="ruleForm.validateCode" placeholder="请输入验证码"  @keyup.enter="submit"></el-input>
							<div class="code"><img :src="'data:image/png;base64,'+img" @click="_getValidateCode()" /></div>
						</div>
          </el-form-item>-->
          <div class="label">
            <span class="btn" @click="submit">登录</span>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { loginByPwd, getValidateCode } from "@/common/getHttp";
export default {
  data() {
    return {
      spinShow: false,
      img: "",
      ruleForm: {
        accountNo: "",
        validateCode: "22",
        passwords: ""
      },
      rules: {
        accountNo: [
          {
            required: true,
            message: "账号不能为空",
            trigger: "blur"
          }
        ],
        validateCode: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur"
          }
        ],
        passwords: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    //验证码
    this._getValidateCode();
  },
  methods: {
    submit() {
      //提交
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.spinShow = true;
          loginByPwd(this.ruleForm)
            .then(res => {
              this.spinShow = false;
              if (res.data.code == 200) {
                sessionStorage.removeItem("jumpIndex"); //删除
                this.$router.push("/index");
                sessionStorage.setItem(
                  "loginInfo",
                  JSON.stringify(res.data.data)
				);
				let  sideList=res.data.data.menuList;
                if (sideList) {
                  this.$store.commit("setSideList", sideList);
                }
              } else {
                this.validateCode = "";
                this.$message.error(res.data.msg);
                this._getValidateCode();
              }
            })
            .catch(err => {
              this.validateCode = "";
              this.spinShow = false;
              this.$message.error(err);
              this._getValidateCode();
            });
        } else {
          this.$message.error("请输入认真填写表单");
          return false;
        }
      });
    },
    _getValidateCode() {
      //获取验证码
      let _this = this;
      getValidateCode({})
        .then(function(res) {
          if (res.data.code == 200) {
            _this.img = res.data.data.validateCode;
            _this.ruleForm.keyId = res.data.data.keyId;
          } else {
            _this.$message.error(res.data.msg);
          }
        })
        .catch(function(err) {
          _this.$message.error("网络错误");
        });
    }
  }
};
</script>

<style scoped>
.login {
  height: 100vh;
  width: 100%;
  /*background: url(../assets/bg1.jpg) no-repeat;*/
  background-image: linear-gradient(180deg, #452aa8 0%, #385dd5 100%),
    linear-gradient(#3a57cf, #3a57cf);
  background-blend-mode: normal, normal;
  position: relative;
}

.login-content {
  position: absolute;
  top: calc(50% - 300px);
  top: -webkit-calc(50% - 300px);
  top: -moz-calc(50% - 300px);
  height: 610px;
  width: 610px;
  left: calc(50% - 305px);
}

.login-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-logo .title {
  color: rgb(255, 255, 255);
  font-size: 28px;
  margin-left: 10px;
  /*    text-shadow: 5px 5px 5px #FF0000;*/
}

.form {
  width: 409px;
  /* height: 385px; */
  border-color: transparent;
  border-radius: 8px;
  font-size: 14px;
  padding: 0px;
  border-width: 1px;
  border-style: solid;
  text-align: center;
  line-height: 20px;
  font-weight: normal;
  font-style: normal;
  transition: none;
  background: #ffffff;
  margin: 20px auto;
  padding-bottom: 40px;
}

.form .p1 {
  line-height: 35px;
  color: rgb(51, 51, 51);
  font-size: 24px;
  text-align: center;
  margin-top: 25px;
}

.form .p2 {
  color: rgb(142, 142, 147);
  font-size: 14px;
  text-align: center;
}

.label {
  height: 50px;
  line-height: 50px;
  width: 350px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.label i {
  color: #fff;
}

.label .icon {
  background-color: rgb(90, 139, 255);
  width: 60px;
  height: 50px;
}

.code {
  width: 180px;
  height: 40px;
}

.label .btn {
  width: 100%;
  height: 100%;
  display: block;
  color: rgb(255, 255, 255);
  background-color: rgb(90, 139, 255);
  border-color: transparent;
  border-radius: 4px;
  font-size: 18px;
  border-width: 1px;
  border-style: solid;
  text-align: center;
  font-weight: normal;
  font-style: normal;
  line-height: 46px;
}
</style>
