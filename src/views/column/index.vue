<template>
  <div class="app-container">
    <sidemenu></sidemenu>
    <div class="app-content">
      <div class="app-main">
        <el-form ref="form" label-width="100px" :inline="true">
          <el-form-item label="检查时间：" style="display:block;">
            <el-date-picker
              v-model="queryFormData.startPlanTimeStr"
              type="date"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              style="width: 200px;"
              @change="search"
              placeholder="选择开始日期"
            ></el-date-picker>
            <span style="margin:0 20px;">至</span>
            <el-date-picker
              v-model="queryFormData.endPlanTimeStr"
              type="date"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              style="width: 200px;"
              @change="search"
              placeholder="选择结束日期"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="身份证号：">
            <el-input
              placeholder="请输入"
              v-model="queryFormData.number"
              size="medium"
              style="width: 200px;"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="姓名：">
            <el-input
              placeholder="请输入"
              v-model="queryFormData.name"
              size="medium"
              style="width: 200px;"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="科室名称：">
            <el-select
              v-model="queryFormData.deptCode"
              size="medium"
              placeholder="请选择"
              clearable
              @change="handleChangeDept"
            >
              <el-option
                v-for="item in departmentList"
                :key="item.deptCode"
                :label="item.deptName"
                :value="item.deptCode"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="medium" icon="el-icon-search" @click="search()">搜索</el-button>
          </el-form-item>
        </el-form>
        <div class="table-content">
          <h3 class="title">患者信息</h3>
          <el-table
            :data="tableData"
            v-loading="loading"
            style="width: 100%"
            header-row-class-name="stHeader"
          >
            <el-table-column prop="name" label="姓名" header-align="center" align="center"></el-table-column>
            <el-table-column prop="identityCard" label="身份证号" header-align="center" align="center"></el-table-column>
            <el-table-column prop="gender" label="性别" header-align="center" align="center"></el-table-column>
            <el-table-column prop="age" label="年龄" header-align="center" align="center"></el-table-column>
            <el-table-column prop="examineSum" label="总检查次数" header-align="center" align="center"></el-table-column>
            <el-table-column label="操作" header-align="center" align="center">
              <template slot-scope="scope">
                <el-button @click="editAction(scope.row.id)" type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="page">
            <el-pagination
              @current-change="handleCurrentChange"
              :page-size="queryFormData.everyPage"
              :current-page="queryFormData.pageNum"
              background
              layout="total,  prev, pager, next, jumper"
              :total="totalCount"
            ></el-pagination>
          </div>
        </div>
        <!--新增 编辑-->
        <el-dialog :title="title" :visible.sync="dialogVisible" width="600px">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="130px"
            class="demo-ruleForm"
          >
            <el-form-item label="所属科室：" prop="deptCode">
              <el-select
                v-model="ruleForm.deptCode"
                style="width: 300px;"
                placeholder="请选择"
                clearable
                @change="handleChangeDeptCode"
              >
                <el-option
                  v-for="(item,index) in departmentList"
                  :key="index"
                  :label="item.deptName"
                  :value="item.deptCode"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所属病区：">
              <el-select v-model="ruleForm.wardCode" placeholder="请选择" style="width: 300px;">
                <el-option
                  v-for="(item,index) in wardList"
                  :key="index"
                  :label="item.wardName"
                  :value="item.wardCode"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="开始时间：" prop="beginTime">
              <el-time-picker
                v-model="ruleForm.beginTime"
                placeholder="任意时间点"
                format="HH:mm"
                value-format="HH:mm"
              ></el-time-picker>
            </el-form-item>
            <el-form-item label="结束时间：" prop="endTime">
              <el-time-picker
                v-model="ruleForm.endTime"
                placeholder="任意时间点"
                format="HH:mm"
                value-format="HH:mm"
              ></el-time-picker>
            </el-form-item>
            <el-form-item label="状态：" prop="isEnabled">
              <el-radio v-model="ruleForm.isEnabled" :label="1">启用</el-radio>
              <el-radio v-model="ruleForm.isEnabled" :label="0">禁用</el-radio>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
              <el-button @click="resetForm('ruleForm')">取消</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import sidemenu from "./components/sideMenu.vue";
import {} from "@/common/getHttp";
export default {
  data() {
    return {
      options2: [],
      loading: false,
      queryFormData: {
        startPlanTimeStr: "",
        endPlanTimeStr: "",
        everyPage: 10,
        pageNum: 1,
        deptCode: "",
        number: "",
        name: ""
      },
      deptCode: "",
      tableData: [
        {
          name: "王小虎",
          identityCard: 360727199809032843,
          gender: "男",
          age: 18,
          examineSum: 5,
          oldExamineTime: "2016-05-04",
          operation: "查看"
        },
        {
          name: "王小虎",
          identityCard: 360727199809032843,
          gender: "男",
          age: 18,
          examineSum: 5,
          oldExamineTime: "2016-05-04",
          operation: "查看"
        },
        {
          name: "王小虎",
          identityCard: 360727199809032843,
          gender: "男",
          age: 18,
          examineSum: 5,
          oldExamineTime: "2016-05-04",
          operation: "查看"
        },
        {
          name: "王小虎",
          identityCard: 360727199809032843,
          gender: "男",
          age: 18,
          examineSum: 5,
          oldExamineTime: "2016-05-04",
          operation: "查看"
        },
        {
          name: "王小虎",
          identityCard: 360727199809032843,
          gender: "男",
          age: 18,
          examineSum: 5,
          oldExamineTime: "2016-05-04",
          operation: "查看"
        },
        {
          name: "王小虎",
          identityCard: 360727199809032843,
          gender: "男",
          age: 18,
          examineSum: 5,
          oldExamineTime: "2016-05-04",
          operation: "查看"
        },
        {
          name: "王小虎",
          identityCard: 360727199809032843,
          gender: "男",
          age: 18,
          examineSum: 5,
          oldExamineTime: "2016-05-04",
          operation: "查看"
        },
        {
          name: "王小虎",
          identityCard: 360727199809032843,
          gender: "男",
          age: 18,
          examineSum: 5,
          oldExamineTime: "2016-05-04",
          operation: "查看"
        },
        {
          name: "王小虎",
          identityCard: 360727199809032843,
          gender: "男",
          age: 18,
          examineSum: 5,
          oldExamineTime: "2016-05-04",
          operation: "查看"
        }
      ],
      totalCount: 0,
      dialogVisible: false,
      action: "",
      title: "",
      ruleForm: {
        deptCode: "",
        wardCode: "",
        equipmentCode: "",
        equipmentName: "",
        roomCode: "",
        equipmentType: 1,
        isEnabled: 1
      },
      rules: {
        wardCode: [
          {
            required: true,
            message: "请输入病区信息",
            trigger: "change"
          }
        ],
        beginTime: [
          {
            required: true,
            message: "请输入开始时间",
            trigger: "blur"
          }
        ],
        endTime: [
          {
            required: true,
            message: "请输入结束时间",
            trigger: "blur"
          }
        ],
        showIndex: [
          {
            required: true,
            message: "请输入排序",
            trigger: "blur"
          }
        ],
        isEnabled: [
          {
            required: true,
            message: "请选择班次状态",
            trigger: "change"
          }
        ],
        deptCode: [
          {
            required: true,
            message: "请选择所属科室",
            trigger: "change"
          }
        ]
      },
      ids: [],
      wardList: []
    };
  },
  components: { sidemenu },
  created() {},
  methods: {
    handleCurrentChange(val) {
      //翻页
      this.queryFormData.pageNum = val;
      this.getList();
    },
    handleSelectionChange(val) {
      //表格选中
      this.ids = [];
      for (let i = 0; i < val.length; i++) {
        this.ids.push(val[i].id);
      }
    },
    handleChangeDept() {
      this.queryFormData.pageNum = 1;
      this.getList();
    },
    search() {
      //搜索
      this.queryFormData.pageNum = 1;
      this.getList();
    },
    getList() {
      //获取表格数据
      this.loading = true;
      this.tableData = [];
      showBedsideSleepTime(this.queryFormData)
        .then(res => {
          if (res.data.code == 200) {
            this.tableData = res.data.data.bedsideSleepTimes;
            this.totalCount = res.data.data.totalCount;
          } else if (res.data.code == 404) {
            console.log(res.data.msg);
          } else {
            this.$message.error(res.data.msg);
          }
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          this.$message.error("网络异常");
        });
    },
    getDepartment() {
      //所属科室
      this.departmentList = [];
      getUsingDepartmentInfos()
        .then(res => {
          if (res.data.code == 200) {
            this.departmentList = res.data.data;
          } else if (res.data.code == 404) {
            console.log(res.data.msg);
          } else {
            this.$message.error(res.data.msg);
          }
        })
        .catch(err => {
          this.$message.error("网络异常");
        });
    },
    handleChangeDeptCode(deptCode) {
      this.ruleForm.wardCode = "";
      this.getWardInfo(deptCode);
    },
    getWardInfo(deptCode) {
      //所属科室
      if (deptCode) {
        getWardInfoByDeptCode({
          deptCode: deptCode
        })
          .then(res => {
            if (res.data.code == 200) {
              this.wardList = res.data.data;
            } else if (res.data.code == 404) {
              console.log(res.data.msg);
            } else {
              this.$message.error(res.data.msg);
            }
          })
          .catch(err => {
            this.$message.error("网络异常");
          });
      }
    },
    addAction() {
      //新增
      this.dialogVisible = true;
      this.title = "睡眠模式设置";
      this.action = "add";
      this.ruleForm = {
        deptCode: "",
        wardCode: "",
        equipmentCode: "",
        equipmentName: "",
        roomCode: "",
        isEnabled: 1
      };
      this.wardList = [];
    }
  }
};
</script>

<style lang="scss" scope>
@import "@/styles/column.scss";

.openSidebar {
  .app-content {
    margin-left: 309px;
    width: calc(100% - 309px);
  }
}
.hideSidebar {
  .app-content {
    margin-left: 175px;
    width: calc(100% - 175px);
  }
}
</style>
