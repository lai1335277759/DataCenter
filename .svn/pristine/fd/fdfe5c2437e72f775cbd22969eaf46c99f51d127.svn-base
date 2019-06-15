<template>
  <div class="timeAndSearch-wrap">
    <div class="block">
      <span>检查时间:</span>
      <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="small">
      </el-date-picker>
    </div>
    <div class="wrap-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名:">
          <el-input v-model="formInline.user" placeholder="请输入" size="large"></el-input>
        </el-form-item>
        <el-form-item label="身份证号:">
          <el-input v-model="formInline.user" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="科室名称:">
          <el-select v-model="formInline.region" placeholder="全部">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  };
</script>
<style lang="scss" scoped>
  .timeAndSearch-wrap {
    margin: 20px 60px;
    padding: 20px 60px;
    border: 1px solid #EEE;
    box-shadow: 3px 5px 3px 0px #999;
    .block {
      > span {
        font-size: 14px;
      }
    }
    .wrap-form{
      margin: 20px 0 0 25px;
      .el-form-item{
        width: 400px;
      }
      .el-form-item__content{
        width: 320px;
      }
    }
  }
</style>