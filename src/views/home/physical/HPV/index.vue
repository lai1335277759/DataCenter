<template>
  <div class="particulars-warp">
    <Header/>
    <Content :isShow="'hpv'"/>
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
  }
</style>