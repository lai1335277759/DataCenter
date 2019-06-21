<template>
  <div class="particulars-warp">
    <Header/>
    <div class="table-content">
      <el-table
        :data="tableData"
        v-loading="loading"
        style="width: 100%"
        header-row-class-name="stHeader"
      >
        <el-table-column  type="index" label="序号" header-align="center" align="center" width="100"></el-table-column>
        <el-table-column prop="name" label="姓名" header-align="center" align="center"></el-table-column>
        <el-table-column prop="identityCard" label="身份证号" header-align="center" align="center"></el-table-column>
        <el-table-column prop="gender" label="性别" header-align="center" align="center"></el-table-column>
        <el-table-column prop="age" label="年龄" header-align="center" align="center"></el-table-column>
        <el-table-column prop="examineSum" label="总检查次数" header-align="center" align="center"></el-table-column>
      </el-table>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import Content from "../../../../components/particularsContent/physicalContent";
export default {
  data() {
    return {
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
      ]
    };
  },
  components: {
    Header,
    Footer,
    Content
  }
};
</script>
<style lang="scss" scoped>
</style>