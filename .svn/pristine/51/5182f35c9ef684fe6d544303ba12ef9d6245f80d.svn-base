import util from "./util";

//首页数据 getHomePageData
export const getHomePageData = data =>
  util.ajax.post("/expenseCost/getHomePageData", data, "POST");

//////////////////////////////////////////////系统管理begin////////////////////////////////////////////////////
//登录
export const loginByPwd = data =>
  util.ajax.post("/login/loginByPwd", data, "POST");
//退出登录
export const loginOut = data => util.ajax.post("/login/loginOut", data, "POST");
//获取验证码
export const getValidateCode = data =>
  util.ajax.post("/login/getValidateCode", data, "POST");
//修改密码
export const updateUserPasswords = data =>
  util.ajax.post("/manageUser/updateUserPasswords", data, "POST");
//5.	菜单列表信息(boardMenu)
export const getMenuInfoByRoleId = data =>
  util.ajax.post("/menuManage/getMenuInfoByRoleId", data, "POST");

