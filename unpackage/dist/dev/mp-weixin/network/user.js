"use strict";
var network_request = require("./request.js");
function login(name, psw) {
  return new Promise((resolve, reject) => {
    if (name.indexOf("@") !== -1) {
      network_request.myRequest({
        url: "/uniShop/login",
        method: "post",
        data: {
          email: name,
          psw
        }
      }).then((res) => {
        resolve(res.data);
      });
    } else {
      network_request.myRequest({
        url: "/uniShop/login",
        method: "post",
        data: {
          name,
          psw
        }
      }).then((res) => {
        resolve(res.data);
      });
    }
  });
}
function register(name, email, psw) {
  return new Promise((resolve, reject) => {
    network_request.myRequest({
      url: "/uniShop/register",
      method: "post",
      data: {
        name,
        email,
        psw
      }
    }).then((res) => {
      resolve(res.data);
    });
  });
}
exports.login = login;
exports.register = register;
