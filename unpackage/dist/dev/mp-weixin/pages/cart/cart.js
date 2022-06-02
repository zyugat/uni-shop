"use strict";
var common_vendor = require("../../common/vendor.js");
var network_cart = require("../../network/cart.js");
var hooks_checkLogin = require("../../hooks/checkLogin.js");
require("../../network/request.js");
const _sfc_main = {
  data() {
    return {
      cartList: [],
      cartCheck: [],
      status: false,
      msg: "\u8D2D\u7269\u8F66\u8FD8\u6CA1\u6709\u5546\u54C1\uFF01\uFF01"
    };
  },
  onShow() {
    this.DateInit();
  },
  methods: {
    DateInit() {
      hooks_checkLogin.checkLogin().then((res) => {
        if (res.status === true) {
          this.cartList = [];
          this.status = false;
          this.msg = "\u8D2D\u7269\u8F66\u8FD8\u6CA1\u6709\u5546\u54C1\uFF01\uFF01";
          let token = common_vendor.index.getStorageSync("token");
          network_cart.showCart(token).then((res2) => {
            if (res2.status === true && res2.data.length > 0) {
              this.cartList = res2.data;
              console.log();
              this.status = true;
            }
          });
        }
      });
    },
    _updateCart(cid, count) {
      hooks_checkLogin.checkLogin().then((res) => {
        if (res.status === true) {
          let token = common_vendor.index.getStorageSync("token");
          network_cart.updateCart(token, cid, count).then((res2) => {
            if (res2.status === true) {
              this.cartList.map((item) => {
                if (item.cid === cid) {
                  item.count = count;
                }
                return item;
              });
            }
          });
        }
      });
    },
    _delCart(cid) {
      hooks_checkLogin.checkLogin().then((res) => {
        if (res.status === true) {
          let token = common_vendor.index.getStorageSync("token");
          network_cart.delCart(token, cid).then((res2) => {
            if (res2.status === true) {
              this.cartList = this.cartList.filter((item) => {
                if (item.cid === cid) {
                  return false;
                }
                return true;
              });
            }
          });
        }
      });
    }
  },
  components: ["cart-item"]
};
if (!Array) {
  const _easycom_cart_item2 = common_vendor.resolveComponent("cart-item");
  _easycom_cart_item2();
}
const _easycom_cart_item = () => "../../components/cart-item/cart-item.js";
if (!Math) {
  _easycom_cart_item();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.cartList, (item, k0, i0) => {
      return {
        a: "e0348b14-0-" + i0,
        b: common_vendor.p({
          item
        })
      };
    }),
    b: common_vendor.o($options._updateCart),
    c: !$data.status
  }, !$data.status ? {
    d: common_vendor.t($data.msg)
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Project/ProjectCode/study/uniapp/uni-shop/pages/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
