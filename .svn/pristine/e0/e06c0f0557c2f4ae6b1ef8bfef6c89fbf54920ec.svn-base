<template>
  <div class="side-menu">
    <el-menu
      :default-active="jumpIndex"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      style="height:calc(100vh - 74px); overflow: auto;"
    >
      <template v-for="(item,index) in mlist">
        <router-link :to="item.menuUrl" :key="index">
          <el-menu-item :index="index">
            <svg-icon :icon-class="item.icon"/>
            <span slot="title" v-if="sidebar.opened">{{item.menuName}}</span>
          </el-menu-item>
        </router-link>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
//import loginInfo from '@/common/loginInfo.json' //菜单Q
import pageData from "@/assets/json/page.json";
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
      sideList: state => state.common.sideList,
      sidebar: state => state.common.sidebar
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
<style lang="scss">
.side-menu {
  position: absolute;
  top: 74px;
  left: 59px;
  z-index: 99;
  box-shadow: 0px 3px 8px 0px rgba(109, 139, 255, 0.08);
  border-radius: 10px 10px 0px 0px;
  @include scrollBar;
  .el-menu {
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0px 3px 8px 0px rgba(109, 139, 255, 0.08);
    border-right: none;
    a {
      margin-top: 36px;
      text-decoration: none;
      &.router-link-active,&:hover {
        box-shadow: 0px 0px 22px 0px rgba(70, 153, 254, 0.15);
        border-radius: 22px;
        li{
            border-radius: 22px;
        }
      }
    }
    .el-menu-item {
      height: 44px;
      line-height: 44px;
      font-size: 14px;
      .svg-icon {
        vertical-align: -10px;
        font-size: 26px;
      }
      span {
        margin-left: 20px;
      }
    }
  }
}
.openSidebar {
  .side-menu {
    width: 240px;
    .el-menu {
      padding: 20px 44px 20px 22px;
    }
    a {
      width: 184px;
    }
  }
}
.hideSidebar {
  .side-menu {
    width: 110px;
      .el-menu {
         padding: 20px 44px 20px 22px;
    }
  }
}

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
