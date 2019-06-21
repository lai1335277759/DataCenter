<template>
  <div class="particulars-warp">
    <Header/>
    <Content :isShow="'Cpeptide'">
      <div class="explain" slot="explain">
        <div class="image"><img src="" alt=""></div>
        <p>本结果只对此条码来样负责，如有疑问，请在报告日期一周内提出</p>
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
    .explain {
      font-size: 14px;
      color: #555;
      .image{
        margin-top: 40px;
        margin-left: 42px;
        width: 1126px;
        height: 448px;
        background-color: #f0f0f0;
        img{
          width: 100%;
          height: 100%;
        }
      }
      p{
        margin-top: 29px;
      }
    }
  }
</style>