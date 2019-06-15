<template>
  <div class="particulars-warp">
    <div class="particulars">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        maxHeight="520"
        >
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="identityCard"
          label="身份证号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="gender"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄">
        </el-table-column>
        <el-table-column
          prop="examineSum"
          label="总检查次数">
        </el-table-column>
        <el-table-column
          prop="oldExamineTime"
          label="最后一次检查时间">
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="800">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            name: '王小虎',
            identityCard: 360727199809032843,
            gender: '男',
            age: 18,
            examineSum: 5,
            oldExamineTime: '2016-05-04',
            operation: '查看'
          }, {
            name: '王小虎',
            identityCard: 360727199809032843,
            gender: '男',
            age: 18,
            examineSum: 5,
            oldExamineTime: '2016-05-04',
            operation: '查看'
          },
          {
            name: '王小虎',
            identityCard: 360727199809032843,
            gender: '男',
            age: 18,
            examineSum: 5,
            oldExamineTime: '2016-05-04',
            operation: '查看'
          },
          {
            name: '王小虎',
            identityCard: 360727199809032843,
            gender: '男',
            age: 18,
            examineSum: 5,
            oldExamineTime: '2016-05-04',
            operation: '查看'
          },
          {
            name: '王小虎',
            identityCard: 360727199809032843,
            gender: '男',
            age: 18,
            examineSum: 5,
            oldExamineTime: '2016-05-04',
            operation: '查看'
          },
          {
            name: '王小虎',
            identityCard: 360727199809032843,
            gender: '男',
            age: 18,
            examineSum: 5,
            oldExamineTime: '2016-05-04',
            operation: '查看'
          },
          {
            name: '王小虎',
            identityCard: 360727199809032843,
            gender: '男',
            age: 18,
            examineSum: 5,
            oldExamineTime: '2016-05-04',
            operation: '查看'
          },
          {
            name: '王小虎',
            identityCard: 360727199809032843,
            gender: '男',
            age: 18,
            examineSum: 5,
            oldExamineTime: '2016-05-04',
            operation: '查看'
          },
          {
            name: '王小虎',
            identityCard: 360727199809032843,
            gender: '男',
            age: 18,
            examineSum: 5,
            oldExamineTime: '2016-05-04',
            operation: '查看'
          }
        ],
        currentPage: 1
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleClick(row) {
        console.log(row);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .particulars-warp {
    position: relative;
    margin: 20px 60px;
    padding: 20px 60px;
    border: 1px solid #EEE;
    box-shadow: 3px 5px 3px 0px #999;
    min-height: 600px;
    .el-table__row{
      width: 180px;
      height: 50px;
    }
    .block{
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>