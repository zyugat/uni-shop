"use strict";
var common_vendor = require("../../common/vendor.js");
var network_user = require("../../network/user.js");
require("../../network/request.js");
const _sfc_main = {
  data() {
    return {
      name: "",
      email: "",
      psw: ""
    };
  },
  methods: {
    bRegister() {
      console.log();
      if (this.name === "") {
        common_vendor.index.showToast({
          title: "\u8BF7\u586B\u5199\u7528\u6237\u540D"
        });
      } else if (this.email === "" || !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this.email)) {
        common_vendor.index.showToast({
          title: "\u8BF7\u586B\u5199\u6B63\u786E\u7684\u90AE\u7BB1"
        });
      } else if (this.psw === "") {
        common_vendor.index.showToast({
          title: "\u8BF7\u586B\u5199\u5BC6\u7801"
        });
      } else {
        network_user.register(this.name, this.email, this.psw).then((res) => {
          common_vendor.index.showToast({
            title: res.msg
          });
          if (res.status === true) {
            network_user.login(this.name, this.psw).then((res2) => {
              if (res2.status === true) {
                common_vendor.index.setStorageSync("token", res2.data);
                common_vendor.index.switchTab({
                  url: "/pages/my/my"
                });
              }
            });
          }
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.name,
    b: common_vendor.o(($event) => $data.name = $event.detail.value),
    c: $data.email,
    d: common_vendor.o(($event) => $data.email = $event.detail.value),
    e: $data.psw,
    f: common_vendor.o(($event) => $data.psw = $event.detail.value),
    g: common_vendor.o((...args) => $options.bRegister && $options.bRegister(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Project/ProjectCode/study/uniapp/uni-shop/pages/register/register.vue"]]);
wx.createPage(MiniProgramPage);
