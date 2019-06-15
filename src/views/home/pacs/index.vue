<template>
  <div class="particlars-warp">
    <SidebarNav/>
    <ParticularsContent/>
  </div>
</template>
<script>
  import SidebarNav from '../../../components/particulars/sidebarNav'
  import ParticularsContent from './ultraphonicReport'
  export default {
    components: {
      SidebarNav,
      ParticularsContent
    }
  }
</script>
<style lang="scss" scoped>
  .particlars-warp{
    overflow: hidden;
  }
</style>