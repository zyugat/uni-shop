"use strict";
var common_vendor = require("../common/vendor.js");
var network_request = require("../network/request.js");
function checkLogin() {
  return new Promise((resolve, reject) => {
    let token = common_vendor.index.getStorageSync("token");
    if (!token) {
      common_vendor.index.showModal({
        title: "\u8BF7\u767B\u5F55",
        showCancel: false,
        success: function(res2) {
          if (res2.confirm) {
            common_vendor.index.navigateTo({
              url: "/pages/login/login"
            });
          }
        }
      });
      let res = {
        status: false
      };
      resolve(res);
    } else {
      network_request.myRequest({
        url: "/uniShop/login",
        method: "post",
        data: {
          token
        }
      }).then((res) => {
        if (res.data.status === false) {
          common_vendor.index.showToast({
            title: "\u5931\u8D25,\u8BF7\u91CD\u65B0\u767B\u5F55",
            duration: 2e3
          });
          common_vendor.index.navigateTo({
            url: "/pages/login/login"
          });
        } else {
          resolve(res.data);
        }
      });
    }
  });
}
exports.checkLogin = checkLogin;
