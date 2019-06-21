<template>
  <div class="particulars-warp">
    <Header/>
    <Content :isShow="'Serial'">
      <div class="explain" slot="explain">
        <span class="title1">D-二聚体检测结果解释：</span>
        <div class="title2">
          <p><span>成年人：</span> D-Dimer浓度（u      g/ml）:<0.5   静脉血栓栓塞症可能性小，≥0.5   静脉血栓栓塞症可能性大。</p>
          <p><span>老年人或孕妇：</span> D-Dimer浓度（u      g/ml）:<1.5   静脉血栓栓塞症可能性小，≥1.5   静脉血栓栓塞症可能性大。</p>
          <p><span>成年人：</span> D-Dimer浓度（u      g/ml）:<0.5   弥散性血管内凝血可能性小，≥0.5   弥散性血管内凝血可能性大。</p>
          <p><span>老年人或孕妇：</span> D-Dimer浓度（u      g/ml）:<1.5   弥散性血管内凝血可能性小，≥1.5   弥散性血管内凝血可能性大。</p>
        </div>
      </div>
    </Content>
    <Footer/>
  </div>
</template>
<script>
  import Header from '../../../../components/header'
  import Footer from '../../../../components/footer'
  import Content from '../../../../components/particularsContent/physicalContent'
  export default {
    components: {
      Header,
      Footer,
      Content
    }
  }
</script>
<style lang="scss" scoped>
  .particulars-warp {
    .explain{
      margin-top: 48px;
      line-height: 30px;
      color: #555555;
      .title1{
        font-size: 16px;
      }
    }
  }
</style>