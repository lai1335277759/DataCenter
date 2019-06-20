<template>
  <div class="header-wrap">
    <span class="title">超声诊断报告单</span>
    <div class="patientInfo">
      <div class="info">
        <span class="key">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:</span>
        <span>陈姗姗</span>
      </div>
      <div class="info">
        <span class="key">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</span>
        <span>女</span>
      </div>
      <div class="info">
        <span class="key">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄:</span>
        <span>4天</span>
      </div>
      <div class="info">
        <span class="key">床&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号:</span>
        <span>12345678</span>
      </div>
      <div class="info">
        <span class="key">门&nbsp;&nbsp;&nbsp;诊&nbsp;&nbsp;&nbsp;号:</span>
        <span>4928728</span>
      </div>
      <div class="info">
        <span class="key">超&nbsp;&nbsp;&nbsp;声&nbsp;&nbsp;&nbsp;号:</span>
        <span>US201905190032</span>
      </div>
      <div class="info">
        <span class="key">检查设备号:</span>
        <span>EPIQ7C</span>
      </div>
      <div class="info">
        <span class="key">申&nbsp;请&nbsp;医&nbsp;生:</span>
        <span>袁医生</span>
      </div>
      <div class="info">
        <span class="key">检&nbsp;查&nbsp;部&nbsp;位:</span>
        <span>腹部常规+妇科彩超</span>
      </div>
      <div class="info">
        <span class="key">科&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</span>
        <span>中医科</span>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
  .header-wrap {
    position: relative;
    height: 188px;
    width: 100%;
    text-align: center;
    &::after {
      position: absolute;
      left: 0;
      bottom: 0;
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: #EEE;
    }
    .title {
      font-family: MicrosoftYaHei;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 1px;
      color: #555555;
    }
    .patientInfo {
      display: flex;
      flex-wrap: wrap;
      width: 1278px;
      height: 85px;
      margin-top: 45px;
      align-items: center;
      .info {
        width: 20%;
        text-align: start;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        font-weight: normal;
        letter-spacing: 1px;
        color: #555555;
        .key {
          display: inline-block;
          width: 80px;
        }
      }
    }
  }
</style>