<template>
  <div class="particulars-warp">
    <Header/>
    <Content>
      <div class="image" slot="image">
        <div><img src="" alt=""></div>
        <div><img src="" alt=""></div>
        <div><img src="" alt=""></div>
        <div><img src="" alt=""></div>
      </div>
    </Content>
    <Footer>
      <div class="look" slot="look"><span>查看影像</span></div>
    </Footer>
  </div>
</template>
<script>
  import Header from '../../../../components/header'
  import Footer from '../../../../components/footer'
  import Content from '../../../../components/particularsContent/pacsContent'
  export default {
    components: {
      Header,
      Footer,
      Content
    }
  }
</script>
<style lang="scss" scoped>
  .particulars-warp{
    height: 1207px;
    .image{
      display: flex;
      justify-content: space-between;
      height: 330px;
      margin-left: -15px;
      div {
        width: 288px;
      }
    }
    .look{
      display: inline-block;
      width: 114px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      margin-top: 33px;
      background-image: linear-gradient(90deg,
        #47afff 0%,
        #2d77ff 100%);
      border-radius: 18px;
      letter-spacing: 2px;
      color: #FFF;
    }
  }
</style>