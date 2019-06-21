<template>
  <div class="particulars-warp">
    <Header/>
    <Content :isShow="'pissRule'">
      <div class="explain" slot="explain">
        <div class="image"><img src="" alt=""></div>
        <p><span>微生态分析：</span></p>
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
    height: 880px;
    .explain {
      font-size: 16px;
      color: #555;
      .image{
        margin-top: 42px;
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
        margin-top: 34px;
      }
    }
  }
</style>