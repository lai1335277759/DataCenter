<template>
  <div class="particulars-warp">
    <Header/>
    <Content>
      <div class="image" slot="image">
        <div><img src="" alt=""></div>
        <div><img src="" alt=""></div>
        <div><img src="" alt=""></div>
      </div>
    </Content>
    <Footer/>
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
    height: 1127px;
    .image{
      display: flex;
      justify-content: space-between;
      height: 330px;
      margin-left: -15px;
      div {
        width: 420px;
      }
    }
  }
</style>