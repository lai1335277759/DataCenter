<template>
  <div class="content">
    <slot name="image"></slot>
    <div class="details">
      <div class="common">
        <span>超声所见:</span>
        <p>
          双侧胸廓对称，右肺、左肺下叶见散在斑片状、结节状密度增高影，边缘模糊，左肺下叶见斑片状密实影，相邻左肺下叶外基底段显示不清，左肺下叶前内基底段支气管受压变窄。右肺上、中叶部分支气管扩张。右肺上、下叶见散在局限性透亮影。纵隔无移位，其内未见占位病灶及肿大淋巴结影，气管及主支气管通畅，心影及大血管影形态基本正常。纵隔见多发钙化灶。双侧胸膜腔见薄层液性低密度影，稍厚处厚约0.8cm（右）、0.4cm（左）  。</p>
      </div>
      <div class="hint common">
        <span>超声提示:</span>
        <p>腹部肠系膜多发性稍低回声结节声像图（多考虑：淋巴结显影）。</p>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
  .content {
    padding-top: 38px;
    .details {
      width: 100%;
      margin-top: 31px;
      .hint {
        margin-top: 53px;
      }
      .common {
        font-family: MicrosoftYaHei;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 30px;
        letter-spacing: 0px;
        color: #555555;
        p {
          font-size: 14px;
          line-height: 27px;
        }
      }
    }
  }
</style>