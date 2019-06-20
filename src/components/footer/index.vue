<template>
  <div class="footer-warp">
    <div class="footer-info title">
      <div class="info">
        <span class="key">记&nbsp;录&nbsp;员&nbsp;:</span>
        <span>朱医生</span>
      </div>
      <div class="info">
        <span class="key">报告医生:</span>
        <span>方医生</span>
      </div>
      <div class="info">
        <span class="key">审核医师:</span>
        <span></span>
      </div>
      <div class="info">
        <span class="key">检查日期:</span>
        <span>2019-05-19 11:27:52</span>
      </div>
      <div class="info">
        <span class="key">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址:</span>
        <span>云南省罗平县雄镇九龙大道310号</span>
      </div>
      <div class="info">
        <span class="key">联系电话:</span>
        <span>0874-8228197</span>
      </div>
    </div>
    <div class="notice title">
      <span>注：此检验报告仅对本次标本负责！如有疑问请在24小时内查询！</span>
      <span>注：请各位病友注意隐私，妥善保管诊断报告书！</span>
    </div>
    <slot name="look"></slot>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
  .footer-warp {
    position: relative;
    width: 1311px;
    height: 168px;
    padding-top: 9px;
    margin-top: 37px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &::after {
      position: absolute;
      top: 0;
      display: block;
      content: '';
      width: 100%;
      height: 2px;
      background: #EEE;
    }
    .title {
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 1px;
      color: #555555;
    }
    .footer-info {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .info {
        width: 33%;
        margin-top: 27px;
      }
    }
    .notice {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 22px;
      span{
        padding: 12px 0;
      }
    }
  }
</style>