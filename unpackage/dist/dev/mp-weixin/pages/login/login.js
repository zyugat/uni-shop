"use strict";
var common_vendor = require("../../common/vendor.js");
var network_user = require("../../network/user.js");
require("../../network/request.js");
const _sfc_main = {
  data() {
    return {
      name: "",
      psw: ""
    };
  },
  onLoad() {
  },
  methods: {
    bLogin() {
      if (this.name === "") {
        common_vendor.index.showToast({
          title: "\u8BF7\u586B\u5199\u7528\u6237\u540D/\u90AE\u7BB1"
        });
      } else if (this.psw === "") {
        common_vendor.index.showToast({
          title: "\u8BF7\u586B\u5199\u5BC6\u7801"
        });
      } else {
        network_user.login(this.name, this.psw).then((res) => {
          common_vendor.index.showToast({
            title: res.msg
          });
          if (res.status === true) {
            common_vendor.index.setStorageSync("token", res.data);
            common_vendor.index.switchTab({
              url: "/pages/my/my"
            });
          }
        });
      }
    },
    toResgister() {
      common_vendor.index.navigateTo({
        url: "/pages/register/register"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.toResgister && $options.toResgister(...args)),
    b: $data.name,
    c: common_vendor.o(($event) => $data.name = $event.detail.value),
    d: $data.psw,
    e: common_vendor.o(($event) => $data.psw = $event.detail.value),
    f: common_vendor.o((...args) => $options.bLogin && $options.bLogin(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Project/ProjectCode/study/uniapp/uni-shop/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
