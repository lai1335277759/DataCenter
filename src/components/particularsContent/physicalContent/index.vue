<template>
  <div class="content" style="margin-top: 37px">
    <slot name="piss"></slot>
    <el-table v-if="isShow === 'Serial'"
              :data="tableData"
              style="width: 100%"
              :header-cell-style="{'background-color':'#f7faff',
      'border-style': 'none','text-align': 'center', 'color': '#499cff'}">
      <el-table-column
        prop="serial"
        label="序号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="projectName"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="result"
        label="结果">
        <template slot-scope="scope">
          <span>{{scope.row.result}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="referenceValue"
        label="参考值">
      </el-table-column>
      <el-table-column
        prop="unit"
        label="单位">
      </el-table-column>
    </el-table>
    <el-table v-if="isShow === 'immune'"
              :data="tableData"
              style="width: 100%"
              :header-cell-style="{'background-color':'#f7faff',
      'border-style': 'none','text-align': 'center', 'color': '#499cff'}">
      <el-table-column
        prop="serial"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="projectName"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="result"
        label="结果">
      </el-table-column>
      <el-table-column
        prop="odValue"
        label="OD值">
      </el-table-column>
      <el-table-column
        prop="cutoff"
        label="Cutoff">
      </el-table-column>
      <el-table-column
        prop="odCutoff"
        label="OD/Cutoff">
      </el-table-column>
      <el-table-column
        prop="referenceValue"
        label="参考值">
      </el-table-column>
      <el-table-column
        prop="unit"
        label="单位">
      </el-table-column>
    </el-table>
    <el-table v-if="isShow === 'wholeBlood'"
              :data="tableData"
              style="width: 100%"
              :header-cell-style="{'background-color':'#f7faff',
      'border-style': 'none','text-align': 'center', 'color': '#499cff'}">
      <el-table-column
        prop="serial"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="projectName"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="result"
        label="结果">
        <template slot-scope="scope">
          <span>{{scope.row.result}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="detectionFloor"
        label="检测下限">
      </el-table-column>
      <el-table-column
        prop="unit"
        label="单位">
      </el-table-column>
    </el-table>
    <div v-if="isShow === 'piss'" style="display: flex">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{'background-color':'#f7faff',
      'border-style': 'none','text-align': 'center', 'color': '#499cff'}">
        <el-table-column
          prop="antibiotic"
          label="抗生素">
        </el-table-column>
        <el-table-column
          prop="measureValue"
          label="测定值 (mg/1)">
        </el-table-column>
        <el-table-column
          prop="drugAllergy"
          label="药敏">
        </el-table-column>
      </el-table>
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{'background-color':'#f7faff',
      'border-style': 'none','text-align': 'center', 'color': '#499cff'}">
        <el-table-column
          prop="antibiotic"
          label="抗生素">
        </el-table-column>
        <el-table-column
          prop="measureValue"
          label="测定值 (mg/1)">
        </el-table-column>
        <el-table-column
          prop="drugAllergy"
          label="药敏">
        </el-table-column>
      </el-table>
    </div>
    <el-table v-if="isShow === 'eugenicsTen'"
              :data="tableData"
              style="width: 100%"
              :header-cell-style="{'background-color':'#f7faff',
      'border-style': 'none','text-align': 'center', 'color': '#499cff'}">
      <el-table-column
        prop="serial"
        label="序号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="englishName"
        label="英文名称">
      </el-table-column>
      <el-table-column
        prop="project"
        label="项目">
      </el-table-column>
      <el-table-column
        prop="result"
        label="结果">
        <template slot-scope="scope">
          <span>{{scope.row.result}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="referenceValue"
        label="参考值">
      </el-table-column>
      <el-table-column
        prop="unit"
        label="单位">
      </el-table-column>
    </el-table>
    <el-table v-if="isShow === 'pissRule'"
              :data="tableData"
              style="width: 100%"
              :header-cell-style="{'background-color':'#f7faff',
      'border-style': 'none','text-align': 'center', 'color': '#499cff'}">
      <el-table-column
        prop="serial"
        label="序号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="projectName"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="result"
        label="结果">
        <template slot-scope="scope">
          <span>{{scope.row.result}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="referenceValue"
        label="参考值">
      </el-table-column>
      <el-table-column
        prop="unit"
        label="单位">
      </el-table-column>
    </el-table>
    <el-table v-if="isShow === 'allergy'"
              :data="tableData"
              style="width: 100%"
              :header-cell-style="{'background-color':'#f7faff',
      'border-style': 'none','text-align': 'center', 'color': '#499cff'}">
      <el-table-column
        prop="serial"
        label="序号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="project1"
        label="项目">
      </el-table-column>
      <el-table-column
        prop="project2"
        label="项目">
      </el-table-column>
      <el-table-column
        prop="concentration"
        label="浓度（IU/ml）">
      </el-table-column>
      <el-table-column
        prop="result"
        label="结果">
      </el-table-column>
    </el-table>
    <el-table v-if="isShow === 'hpv'"
              :data="tableData"
              style="width: 100%"
              :header-cell-style="{'background-color':'#f7faff',
      'border-style': 'none','text-align': 'center', 'color': '#499cff'}">
      <el-table-column
        prop="serial"
        label="序号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="project"
        label="项目">
      </el-table-column>
      <el-table-column
        prop="result"
        label="结果">
      </el-table-column>
      <el-table-column
        prop="unit"
        label="单位">
      </el-table-column>
      <el-table-column
        prop="testMethod"
        label="检查方法">
      </el-table-column>
    </el-table>
    <el-table v-if="isShow === 'infertility'"
              :data="tableData"
              style="width: 100%"
              :header-cell-style="{'background-color':'#f7faff',
      'border-style': 'none','text-align': 'center', 'color': '#499cff'}">
      <el-table-column
        prop="projectName"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="projectCode"
        label="项目代码">
      </el-table-column>
      <el-table-column
        prop="result"
        label="结果">
      </el-table-column>
      <el-table-column
        prop="unit"
        label="单位">
      </el-table-column>
      <el-table-column
        prop="testMethod"
        label="检查方法">
      </el-table-column>
    </el-table>
    <el-table v-if="isShow === 'Cpeptide'"
              :data="tableData"
              style="width: 100%"
              :header-cell-style="{'background-color':'#f7faff',
      'border-style': 'none','text-align': 'center', 'color': '#499cff'}">
      <el-table-column
        prop="barCode"
        label="条码号">
      </el-table-column>
      <el-table-column
        prop="projectName"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="projectCode"
        label="项目代码">
      </el-table-column>
      <el-table-column
        prop="result"
        label="结果">
      </el-table-column>
      <el-table-column
        prop="unit"
        label="单位">
      </el-table-column>
      <el-table-column
        prop="testMethod"
        label="检查方法">
      </el-table-column>
      <el-table-column
        prop="testResult"
        label="检查结果">
      </el-table-column>
    </el-table>
    <slot name="explain"></slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [
          {
            serial: 1,
            projectName: '酸碱度',
            result: '7.42 ↑',
            odValue: '',
            referenceValue: '7.35-7.45',
            unit: 'mmol/L'
          }, {
            serial: 2,
            projectName: '酸碱度',
            result: '7.42 ↑',
            referenceValue: '7.35-7.45',
            unit: 'mmol/L'
          }, {
            serial: 3,
            projectName: '酸碱度',
            result: '7.42 ↑',
            referenceValue: '7.35-7.45',
            unit: 'mmol/L'
          }, {
            serial: 4,
            projectName: '酸碱度',
            result: '7.42 ↑',
            referenceValue: '7.35-7.45',
            unit: 'mmol/L'
          },
          {
            serial: 5,
            projectName: '酸碱度',
            result: '7.42 ↑',
            referenceValue: '7.35-7.45',
            unit: 'mmol/L'
          }, {
            serial: 6,
            projectName: '酸碱度',
            result: '7.42 ↑',
            referenceValue: '7.35-7.45',
            unit: 'mmol/L'
          }
        ],
      }
    },
    props: {
      isShow: String,
    }
  }
</script>
<style lang="scss">
  .el-table td {
    border-style: none;
    text-align: center;
  }

  .el-table::before {
    height: 0;
  }
</style>