"use strict";
var network_request = require("./request.js");
function showCart(token) {
  return new Promise((resolve, reject) => {
    network_request.myRequest({
      url: "/uniShop/showCart",
      method: "get",
      data: {
        token
      }
    }).then((res) => {
      resolve(res.data);
    });
  });
}
function addCart(token, pid) {
  return new Promise((resolve, reject) => {
    network_request.myRequest({
      url: "/uniShop/addCart",
      method: "post",
      data: {
        token,
        pid
      }
    }).then((res) => {
      resolve(res.data);
    });
  });
}
function updateCart(token, cid, count) {
  return new Promise((resolve, reject) => {
    network_request.myRequest({
      url: "/uniShop/updateCart",
      method: "post",
      data: {
        token,
        cid,
        count
      }
    }).then((res) => {
      resolve(res.data);
    });
  });
}
function delCart(token, cid, count) {
  return new Promise((resolve, reject) => {
    network_request.myRequest({
      url: "/uniShop/delCart",
      method: "post",
      data: {
        token,
        cid
      }
    }).then((res) => {
      resolve(res.data);
    });
  });
}
exports.addCart = addCart;
exports.delCart = delCart;
exports.showCart = showCart;
exports.updateCart = updateCart;
