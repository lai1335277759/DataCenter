import axios from "axios";

const util = {};
util.stationID = "";
util.stype = "";
util.title = function(title) {
  title = title ? title + " - 管理控制台" : " 管理控制台";
  window.document.title = title;
};
// let serverurl = location.hostname;
// let port = location.port;
let index = "/nursingPdaConsole";

// if (serverurl === 'localhost' || serverurl ==='192.168.1.71') {
//   serverurl = '192.168.1.71';   //location.hostname '223.84.197.222'  '192.168.1.96'
//   port = '8888';   //location.port   '8888' //104 8885
// }

// let ajaxUrl = 'http://' + serverurl + ':' + port + index;

let ajaxUrl = "http://192.168.1.71:8888" + index;

util.ajaxUrl = ajaxUrl;

util.time = 1; //1小时
util.setCookie = function(name, value) {
  let exp = new Date();
  let str = name + "=" + value;
  exp.setTime(exp.getTime() + util.time * 60 * 60 * 1000);
  document.cookie = str + ";expires=" + exp.toGMTString();
};

//获取cookies
util.getCookie = function(name) {
  let arr,
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr == document.cookie.match(reg)) {
    return unescape(arr[2]);
  } else {
    return null;
  }
};

util.ajax = axios.create({
  baseURL: ajaxUrl,
  timeout: 60000 //1分钟
});

export default util;
