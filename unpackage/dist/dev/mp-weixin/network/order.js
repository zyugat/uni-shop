"use strict";
var network_request = require("./request.js");
function showOrder(token) {
  return new Promise((resolve, reject) => {
    network_request.myRequest({
      url: "/uniShop/showOrder",
      method: "get",
      data: {
        token
      }
    }).then((res) => {
      resolve(res.data);
    });
  });
}
exports.showOrder = showOrder;
