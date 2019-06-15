<template>
  <div class="sidebarNav-content">
    <div class="sidebarNav-warp">
      <div class="sidebarNav-user">
        <div class="user">
          <span class="user-avatar">
            <img src="@/assets/images/avatar.png" class="avatar">
          </span>
          <div class="user-details">
            <div class="userinfo">
              <span class="user-name">陈姗姗</span>
              <i class="gender">
                <svg-icon icon-class="male" class="man"/>
              </i>
              <span class="user-age">28岁</span>
            </div>
            <span>123456789111</span>
          </div>
        </div>
        <div class="type">电子病历</div>
      </div>
      <el-tabs type="border-card">
        <el-tab-pane label="按机构显示">
          <div class="report">
            <el-form ref="form" label-width="100px" :inline="true">
              <el-form-item label="检查时间：" style="display:block;">
                <el-date-picker
                  v-model="queryFormData.startPlanTimeStr"
                  type="date"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  style="width: 136px;"
                  placeholder="请选择"
                ></el-date-picker>
                <span style="margin:0 4px;">至</span>
                <el-date-picker
                  v-model="queryFormData.endPlanTimeStr"
                  type="date"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  style="width: 136px;"
                  placeholder="请选择"
                ></el-date-picker>
              </el-form-item>
              <el-form-item>
                <el-input
                  placeholder="请输入"
                  v-model="queryFormData.name"
                  size="medium"
                  style="width: 200px;margin-right:10px"
                  clearable
                ></el-input>
                <el-button type="primary" size="medium" @click="search()">搜索</el-button>
              </el-form-item>
            </el-form>
            <div class="parent" v-for="(item,index) in list" :key="index" :class="{cur:index===i}">
              <div class="sidenavtit" @click="childCheck(index)">
                <span>{{item.examName}}</span>
                <em class="arrow">
                  <i class="iconfont icon-B"></i>
                </em>
              </div>
              <ul v-show=" index === i " class="fe">
                <li
                  v-for="(it,indexs) in item.subList"
                  :key="indexs"
                  @click.stop="childCheck(index,indexs,it.examNo,item.examName,it.examDate)"
                  :class="{curs: indexs == j && index == i}"
                >{{it.examNo}}</li>
              </ul>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="按时间显示">
          <div class="tab-time-content">
            <el-form ref="form" label-width="100px" :inline="true">
              <el-form-item label="检查时间：" style="display:block;">
                <el-date-picker
                  v-model="queryFormData.startPlanTimeStr"
                  type="date"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  style="width: 136px;"
                  placeholder="请选择"
                ></el-date-picker>
                <span style="margin:0 4px;">至</span>
                <el-date-picker
                  v-model="queryFormData.endPlanTimeStr"
                  type="date"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  style="width: 136px;"
                  placeholder="请选择"
                ></el-date-picker>
              </el-form-item>
              <el-form-item>
                <el-input
                  placeholder="请输入"
                  v-model="queryFormData.name"
                  size="medium"
                  style="width: 200px;margin-right:10px"
                  clearable
                ></el-input>
                <el-button type="primary" size="medium" @click="search()">搜索</el-button>
              </el-form-item>
            </el-form>
            <div class="report-list-wrap">
              <ul class="report-list">
                <li class="actvie">
                  <span>
                    动脉血
                    <i>住</i>
                  </span>
                  <span>2019-06-10</span>
                </li>
                <li>
                  <span>
                    粪便
                    <i>住</i>
                  </span>
                  <span>2019-06-10</span>
                </li>
                <li>
                  <span>
                    咽拭子培养
                    <i>门</i>
                  </span>
                  <span>2019-06-10</span>
                </li>
                <li>
                  <span>
                    免疫
                    <i>门</i>
                  </span>
                  <span>2019-06-10</span>
                </li>
                <li>
                  <span>
                    全血
                    <i>门</i>
                  </span>
                  <span>2019-06-10</span>
                </li>
                <li>
                  <span>
                    全清
                    <i>住</i>
                  </span>
                  <span>2019-06-10</span>
                </li>
              </ul>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
//import loginInfo from '@/common/loginInfo.json' //菜单Q
import pageData from "@/assets/json/page.json";
import { getMenuInfoByRoleId } from "@/common/getHttp";

export default {
  data() {
    return {
      list: [],
      data: [],
      queryFormData: {
        startPlanTimeStr: "",
        endPlanTimeStr: "",
        name: ""
      },
      jumpIndex: ""
    };
  },
  computed: {},
  created() {},
  methods: {
    getData(id) {
      this.i = "";
      this.j = "";
      (this.totalCount = 0), (this.isReportCount = 0), (this.list = []);
      this.isDetail = 0;
      if (id) {
        findExamMasterList({
          isInpatient: isInpatient,
          patientId: id
        })
          .then(response => {
            if (response.data.code == 200) {
              this.Error = true;
              this.list = response.data.data.examList;
              this.totalCount = response.data.data.totalCount;
              this.isReportCount = response.data.data.isReportCount;
              this.realName = response.data.data.realName;
            } else {
              this.Error = false;
              this.codeDM = 404;
              this.msg = "暂无数据";
            }
            this.loading = false;
          })
          .catch(error => {
            this.loading = false;
            this.Error = false;
            this.codeDM = res.data.code;
            this.msg = res.data.msg;
          });
      }
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
    },
    childCheck(index, indexs, id, name, date) {
      if (id) {
        this.i = index;
        this.j = indexs;
        this.examName = name;
        this.examDate = date;
        this.getDetail(id, this.isInpatient);
      } else {
        // let obj = this.list[index].subList[0];
        this.childCheck(
          index,
          0,
          obj.examNo,
          this.list[index].examName,
          obj.examDate
        );
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.sidebarNav-content {
  float: left;
  margin-left: 40px;
  .sidebarNav-warp {
    width: 350px;
    height: 122px;
    .sidebarNav-user {
      position: relative;
      display: flex;
      width: 350px;
      height: 122px;
      background-color: #ffffff;
      box-shadow: 0px 2px 6px 0px rgba(109, 139, 255, 0.04);
      border-radius: 5px;
      .user {
        display: flex;
        align-items: center;
        width: 231px;
        height: 70px;
        margin-left: 20px;
        margin-top: 25px;
        .user-avatar {
          width: 68px;
          height: 68px;
          margin-right: 18px;
          .avatar {
            width: 100%;
            height: 100%;
          }
        }
        .user-details {
          display: flex;
          flex-direction: column;
          width: 145px;
          margin: 13px 0;
          .userinfo {
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            .user-name {
              color: #333333;
            }
            .user-age {
              color: #999999;
            }
            .gender {
              width: 19px;
              height: 19px;
              margin: 0 11px 0 14px;
              .man {
                width: 100%;
                height: 100%;
              }
            }
          }
          span {
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #666666;
            margin-top: 15px;
          }
        }
      }
      .type {
        position: absolute;
        right: 0;
        top: 38px;
        width: 64px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        background-color: #ffc500;
        border-radius: 11px 0px 0px 11px;
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #ffffff;
      }
      //病人动态 检查报告 检验报告
      .report {
        .box_left {
          width: 260px;
          height: 635px;
          padding-top: 15px;
          float: left;
          background-color: #ffffff;
          border-radius: 5px;
          box-sizing: border-box;
          overflow-y: auto;
          @include scrollBar;
        }
        .sidenavtit {
          height: 60px;
          line-height: 60px;
          color: #444353;
          font-size: 20px;
          overflow: hidden;
          cursor: pointer;
        }
        .sidenavtit span {
          display: inline-block;
          width: 204px;
          padding-left: 31px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .cur {
          background: rgba(246, 241, 255, 1);
        }
        .cur .sidenavtit .arrow {
          transform: rotate(90deg);
          border-color: #4781e2;
        }
        .cur .sidenavtit .arrow i {
          color: #4781e2;
        }
        .box_right {
          padding: 30px;
          box-sizing: border-box;
          width: 1220px;
          height: 635px;
          float: right;
          background-color: #ffffff;
          border-radius: 5px;
          overflow-y: auto;
          &::-webkit-scrollbar {
            height: 8px;
            width: 8px;
          }
          &::-webkit-scrollbar-thumb {
            background-color: #ced0ff;
            border-radius: 4px;
          }
          table {
            width: 100%;
            border-bottom: 1px #f0f0f0 solid;
          }
          .infotb td {
            line-height: 30px;
            font-size: 20px;
            padding: 6px 0;
            color: #444353;
          }
          tr:last-child td {
            padding-bottom: 15px;
          }
          .detail {
            line-height: 1.8;
          }
        }

        .arrow {
          display: block;
          float: right;
          margin-right: 20px;
          width: 26px;
          height: 26px;
          border-radius: 100%;
          border: 2px solid #b5c6fe;
          margin-top: 17px;
          text-align: center;
          line-height: 15px;
          font-size: 26px;
          font-weight: bold;
          color: #b5c6fe;
        }
        .parent {
          li {
            color: #7b7994;
            height: 56px;
            line-height: 56px;
            padding-left: 31px;
            font-size: 20px;
            overflow: hidden;
            &:before {
              content: "";
              width: 6px;
              height: 6px;
              background-color: #8d96d1;
              border-radius: 100%;
              float: left;
              margin: 25px 12px 0 0;
            }
            &.curs:before {
              background: #fff;
            }
            &.curs {
              color: #fff;
              background-color: #ac81fa;
            }
          }
        }

        .inventory {
          text-align: center;
          padding-top: 200px;
          h2 {
            font-size: 36px;
            line-height: 140px;
          }
          p {
            font-size: 26px;
            text-align: center;
          }
        }

        .right_title {
          height: 66px;
          line-height: 66px;
          color: #4896fe;
          font-size: 22px;
          margin-bottom: -10px;
        }
      }
    }
    .report-list {
      li {
        margin-bottom: 34px;
        display: flex;
        justify-content: space-between;
        i {
          width: 17px;
          height: 17px;
          line-height: 17px;
          text-align: center;
          background-color: #0ed6c3;
          border-radius: 3px;
          font-size: 12px;
          font-style: normal;
          vertical-align: middle;
          color: #fff;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.sidebarNav-warp {
  .el-tabs__item {
    width: 175px;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    border-color: transparent;
  }
  .el-tabs__content {
    height:800px;
  }
  .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
    border-right-color: transparent;
    background-color: #0cd7c2;
    border-radius: 10px 10px 0px 0px;
    color: #fff;
  }
}
</style>