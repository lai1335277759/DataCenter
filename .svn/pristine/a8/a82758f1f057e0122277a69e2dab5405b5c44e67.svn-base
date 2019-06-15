<template>
  <div class="heads">
    <div class="title">
      <svg-icon icon-class="logo"/>
      <span>罗平县医共体信息平台</span>
      <span @click="toggleSideBar">
        <svg-icon icon-class="collapse"/>
      </span>
    </div>
    <div class="user-info">
      <span class="ext">{{name}}</span>
      <span class="ext">|</span>
      <span class="ext" @click="logout">
        <i class="iconfont icon-tuichu"></i>退出
      </span>
      <span class="ext" @click="setPassword">
        <i class="iconfont icon-mima"></i>修改密码
      </span>
    </div>
    <el-dialog title="修改密码" :visible.sync="modal1" @before-close="cancel" width="500px">
      <el-form
        ref="formCustom"
        :model="formCustom"
        :rules="ruleCustom"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="旧密码：" prop="oldPwd" v-if="formCustom.hasOwenp">
          <el-input type="password" v-model="formCustom.oldPwd" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="新密码：" prop="newPwd">
          <el-input type="password" v-model="formCustom.newPwd" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="passwdCheck">
          <el-input type="password" v-model="formCustom.passwdCheck" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit('formCustom')">提交</el-button>
          <el-button @click="handleReset('formCustom')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { loginOut, updateUserPasswords } from "@/common/getHttp";
import { mapState } from "vuex";
export default {
  name: "navbar",
  data() {
    const validateNewPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        if (this.formCustom.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.formCustom.newPwd) {
        callback(new Error("两次密码输入不一致"));
      } else {
        callback();
      }
    };
    const validateOldPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入旧密码"));
      } else {
        callback();
      }
    };
    return {
      formCustom: {
        oldPwd: "",
        newPwd: "",
        passwdCheck: ""
      },
      ruleCustom: {
        oldPwd: [
          {
            validator: validateOldPwd,
            trigger: "blur"
          }
        ],
        newPwd: [
          {
            validator: validateNewPwd,
            trigger: "blur"
          }
        ],
        passwdCheck: [
          {
            validator: validatePassCheck,
            trigger: "blur"
          }
        ]
      },
      modal1: false
    };
  },
  props: ["dep"],
  computed: {
    ...mapState({
      name: state => state.user.name,
      sidebar: state => state.common.sidebar
    })
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("toggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
    loginOut() {
      //退出
      let _this = this;
      loginOut({})
        .then(function(res) {
          if (res.data.code == 200) {
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("loginInfo");
            sessionStorage.removeItem("menuList");
            sessionStorage.removeItem("jumpIndex");
            sessionStorage.removeItem("btns");
            _this.$router.push("/login");
          } else {
            _this.$router.push("/login");
            // _this.$message.error(res.data.msg);
          }
        })
        .catch(function(err) {
          _this.$message.error(err);
          _this.$router.push("/login");
        });
    },
    savePassword() {
      //修改密码
      let _this = this;
      updateUserPasswords(_this.formCustom)
        .then(function(res) {
          if (res.data.code == 200) {
            //_this.$Message.info(res.data.msg);
            _this.$message({
              message: "修改成功，需要重新登录",
              type: "success"
            });
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("loginInfo");
            sessionStorage.removeItem("menuList");
            sessionStorage.removeItem("jumpIndex");
            sessionStorage.removeItem("btns");
            _this.loginOut();
          } else {
            _this.$message.error(res.data.msg);
          }
        })
        .catch(function(err) {
          _this.$message.error(err);
        });
    },
    setPassword() {
      this.modal1 = true;
    },
    cancel() {
      this.handleReset("formCustom");
      //this.$Message.info('Clicked cancel');
    },
    handleSubmit(name) {
      //提交表单
      this.$refs[name].validate(valid => {
        if (valid) {
          this.savePassword();
        } else {
          this.$message.error("请正确填写表单");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  },
  watch: {
    dep: function(val) {
      this.dep = val;
      console.log(val);
    }
  }
};
</script>

<style lang="scss" scoped>
.heads {
  padding: 25px 60px;
  display: flex;
  justify-content: space-between;
  .title {
    font-family: SourceHanSansSC-Medium;
    font-size: 30px;
    line-height: 1;
    letter-spacing: 2px;
    color: #ffffff;
    span {
      margin: 0 10px;
    }
  }
  .user-info {
    color: #ffffff;
    .ext {
      display: inline-block;
      font-size: 16px;
      margin-left: 15px;
    }

    .icon-tuichu,
    .icon-mima {
      margin-right: 5px;
    }
  }
}
</style>
