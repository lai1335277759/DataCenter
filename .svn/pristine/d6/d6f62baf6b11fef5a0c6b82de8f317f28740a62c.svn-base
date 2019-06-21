<template>
  <div class="particulars-warp">
    <Header/>
    <Content :isShow="'eugenicsTen'">
      <div class="explain" slot="explain">
        <span>建议与解释：</span>
        <p>此项目为初筛项目，当检查结果为弱阳性处于临界范围时，请结合其他检测情况和临床综合判断，并定期 复查。</p>
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
    height: 1080px;
    .explain {
      margin-top: 43px;
      font-size: 16px;
      line-height: 30px;
      color: #555;
      p {
        font-size: 14px;
      }
    }
  }
</style>