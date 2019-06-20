import Vue from "vue";
import Vuex from "vuex";

import common from "./modules/common";
import user from "./modules/user";
import home from "./modules/home";  // 数据中心首页
import particulars from "./modules/particulars"   // 数据中心详情

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
    user,
    home,
    particulars
  }
});
