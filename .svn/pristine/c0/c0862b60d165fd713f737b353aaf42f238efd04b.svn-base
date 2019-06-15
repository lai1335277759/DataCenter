<template>
  <el-container style="height: 100vh;overflow-y: auto;" :class="classObj">
    <el-header style="height:104px;">
      <navbar :dep="dep"></navbar>
    </el-header>
    <appMain></appMain>
  </el-container>
</template>
<script>
import { mapState } from "vuex";
import { navbar, appMain } from "./components";
export default {
  data() {
    return {
      dep: ""
    };
  },
  components: {
    navbar,
    appMain
  },
  created() {},
  computed: {
    ...mapState({
      sidebar: state => state.common.sidebar
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation
      };
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("closeSideBar", { withoutAnimation: false });
    },
    datafn(data) {
      console.log(data);
      this.dep = data;
    }
  }
};
</script>
<style lang="scss">
.el-header {
  height: 104px;
  background: url(../../assets/images/bg_top.png) no-repeat;
  background-image: linear-gradient(90deg, #00e7b3 0%, #4097ff 100%);
}
</style>
