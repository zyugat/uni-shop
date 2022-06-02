"use strict";
var common_vendor = require("../common/vendor.js");
const baseUrl = "https://api.zyugat.cn/study";
const myRequest = (options) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: baseUrl + options.url,
      method: options.method || "get",
      data: options.data || {},
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      }
    });
  });
};
exports.myRequest = myRequest;
