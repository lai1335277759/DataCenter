<template>
  <div class="warp">
    <SidebarNav/>
    <router-view></router-view>
  </div>
</template>
<script>
  import SidebarNav from '../../../components/sidebarNav'
  export default {
    mounted () {
      this.$store.dispatch('getPatientInfoDetail')
    },
    components: {
      SidebarNav
    }
  }
</script>
<style lang="scss">
  .warp{
    position: relative;
    .particulars-warp {
      width: 1430px;
      background-color: #ffffff;
      box-shadow: 0px 2px 6px 0px rgba(109, 139, 255, 0.04);
      border-radius: 5px;
      margin-left: 430px;
      padding: 42px 60px 32px 60px;
      .image {
        height: 450px;
        padding-left: 15px;
        div {
          height: 100%;
          background: #EEE;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>