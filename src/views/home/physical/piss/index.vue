<template>
  <div class="particulars-warp">
    <Header/>
    <Content :isShow="'piss'">
      <div class="piss-ruselt" slot="piss">
        <div class="ruselt-header">
          <p><span>涂片结果：</span>涂片未检出细菌</p>
          <div>
            <p><span>培养结果：</span>大肠埃希氏菌</p>
            <p><span>MIC方法：</span> >10-5/ml</p>
          </div>
          <p><span>耐药机制：</span></p>
        </div>
        <div class="ruselt-footer">
          <span>大肠埃希氏菌</span>
          <span>MIC法药敏试验</span>
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
    height: 1080px;
    .piss-ruselt{
      font-size: 16px;
      line-height: 30px;
      .ruselt-header{
        position: relative;
        padding-bottom: 26px;
        &::after{
          position: absolute;
          bottom: 0;
          content: '';
          width: 100%;
          height: 2px;
          background: #EEE;
        }
        div{
          display: flex;
          justify-content: space-between;
          width: 608px;
        }
      }
      .ruselt-footer{
        display: flex;
        justify-content: flex-start;
        margin-top: 27px;
        margin-bottom: 32px;
        span{
          width: 50%;
        }
      }
    }
  }
</style>