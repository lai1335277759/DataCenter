<template>
  <div>
    <div class="logo" :class="{'sq':!isCollapse,'nsq':isCollapse}">
      <img src="@/assets/logo.png">
      <i
        class="el-icon-menu"
        @click="collapsedSider"
        :style="{margin:'0 20px 0 0',size:'24px'}"
        v-if="!isCollapse"
      ></i>
      <i
        class="el-icon-more"
        @click="collapsedSider"
        :style="{margin:'0 20px 0 0',size:'24px'}"
        v-if="isCollapse"
      ></i>
    </div>
    <el-menu
      :default-active="jumpIndex"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      style="height:calc(100vh - 112px); overflow: auto;"
    >
      <template v-for="(item,index) in mlist">
        <el-menu-item :index="index+''"  :key="index">
          <i class="fa" :class="item.icon"></i>
          <span slot="title">
            <a @click="jumpURl(item.menuUrl,index+'',item.menuBtnName)">{{item.menuName}}</a>
          </span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
//import loginInfo from '@/common/loginInfo.json' //菜单
import pageData from '@/assets/json/page.json'
import { getMenuInfoByRoleId } from "@/common/getHttp";

export default {
  data() {
    return {
      isCollapse: false,
      mlist: pageData.meunList,
      data: [],
      jumpIndex: ""
    };
  },
  computed: {
    ...mapState({
      sideList: state => state.common.sideList
    })
  },
  created() {
    let url = document.location.toString();
    let token = "";
    let roleId = "";
    if (url.indexOf("?") > -1) {
      let arrUrl = url.split("?");
      if (arrUrl[1].indexOf("&") > -1) {
        let paras = arrUrl[1].split("&");
        for (let i = 0; i < paras.length; i++) {
          if (paras[i].indexOf("token") > -1) {
            token = paras[i].split("=")[1];
          }
          /*if(paras[i].indexOf('roleId') > -1){
							roleId = (paras[i].split('='))[1];
						}*/
        }
      }
    }

    // if (sessionStorage.getItem("loginInfo")) {
    //   this.data = JSON.parse(sessionStorage.getItem("loginInfo"));
    //   sessionStorage.setItem("token", this.data.token);
    //   this.$utils.ajax.defaults.headers = {
    //     token: sessionStorage.getItem("token")
    //   };
    //   //获取菜单
    //   if (sessionStorage.getItem("menuList")) {
    //     this.mlist = JSON.parse(sessionStorage.getItem("menuList"));
    //     //刷新
    //     if (sessionStorage.getItem("jumpIndex")) {
    //       this.jumpIndex = sessionStorage.getItem("jumpIndex");
    //     } else {
    //       this.$router.push(this.mlist[0].children[0].menuUrl);
    //       this.jumpIndex = "0-0";
    //       sessionStorage.setItem("jumpIndex", this.jumpIndex);
    //       sessionStorage.setItem("btns", this.mlist[0].children[0].menuBtnName);
    //     }
    //   } else {
    //     this.getMenu();
    //   }
    // } else if (token != "") {
    //   //从集成平台过来
    //   this.$utils.ajax.defaults.headers = {
    //     token: token
    //   };
    //   //获取菜单
    //   if (sessionStorage.getItem("menuList")) {
    //     this.mlist = JSON.parse(sessionStorage.getItem("menuList"));
    //     //刷新
    //     if (sessionStorage.getItem("jumpIndex")) {
    //       this.jumpIndex = sessionStorage.getItem("jumpIndex");
    //     } else {
    //       this.$router.push(this.mlist[0].children[0].menuUrl);
    //       this.jumpIndex = "0-0";
    //       sessionStorage.setItem("jumpIndex", this.jumpIndex);
    //       sessionStorage.setItem("btns", this.mlist[0].children[0].menuBtnName);
    //     }
    //   } else {
    //     this.getMenu();
    //   }
    // } else {
    //   //提示用户未登录
    //   this.$router.push("/login");
    // }
  },
  methods: {
    jumpURl(url, index, menuBtnName) {
      //跳转
      if (!url) return;
      sessionStorage.setItem("jumpIndex", index);
      this.$router.push(url);
      sessionStorage.setItem("btns", menuBtnName);
    },
    handleOpen(key, keyPath) {
      //打开菜单
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //关闭
      console.log(key, keyPath);
    },
    collapsedSider() {
      //收缩
      console.log(this.isCollapse);
      this.isCollapse = !this.isCollapse;
    },
    getMenu() {
      //获取菜单接口
      //let roleId = this.data.roleId;
      this.mlist = [];
      sessionStorage.removeItem("jumpIndex"); //删除
      //sessionStorage.setItem('roleId',roleId);
      getMenuInfoByRoleId({
        //roleId:roleId
      })
        .then(res => {
          if (res.data.code == 200) {
            this.mlist = res.data.data.menuList;
            sessionStorage.setItem("menuList", JSON.stringify(this.mlist));
            this.$router.push(this.mlist[0].children[0].menuUrl);
            this.jumpIndex = "0-0";
            sessionStorage.setItem("jumpIndex", this.jumpIndex);
            sessionStorage.setItem(
              "btns",
              this.mlist[0].children[0].menuBtnName
            );
          } else {
            this.$message.error(res.data.msg);
          }
        })
        .catch(err => {
          this.$message.error("网络错误");
        });
    }
  }
};
</script>
<style>
.el-menu::-webkit-scrollbar {
  width: 7px;
}

.el-menu::-webkit-scrollbar-thumb {
  background-color: #1ba9ff;
  border-radius: 4px;
}

.el-menu-item-group__title {
  padding: 0;
}
</style>
<style scoped lang="scss">
.logo {
  height: 112px;
  line-height: 112px;
  background-color: rgb(72, 119, 230);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo img {
  margin: auto;
  display: inline;
  vertical-align: middle;
}

.sq {
  /*width: 300px;*/
  img {
    width: 200px;
  }
}

.nsq {
  width: 64px;
  display: flex;
  flex-direction: column;
  img {
    width: 64px;
  }
}

.logo i {
  color: #fff;
}

.fa {
  margin-right: 5px;
}
</style>
