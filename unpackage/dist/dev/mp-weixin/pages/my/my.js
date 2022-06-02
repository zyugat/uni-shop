"use strict";
var common_vendor = require("../../common/vendor.js");
var network_order = require("../../network/order.js");
var hooks_checkLogin = require("../../hooks/checkLogin.js");
require("../../network/request.js");
const _sfc_main = {
  data() {
    return {
      user: {
        name: "\u672A\u767B\u5F55"
      },
      order: [],
      orderGoods: {},
      orderText: {}
    };
  },
  onShow() {
    this.init();
  },
  methods: {
    init() {
      hooks_checkLogin.checkLogin().then((res) => {
        if (res.status === false) {
          this.user.name = "\u672A\u767B\u5F55";
          common_vendor.index.navigateTo({
            url: "/pages/login/login"
          });
        } else {
          this.user = res.data;
          return true;
        }
        return false;
      }).then((_res) => {
        if (_res === true) {
          let token = common_vendor.index.getStorageSync("token");
          network_order.showOrder(token).then((res) => {
            this.order = res.data;
          });
        }
      });
    },
    bLogin() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    },
    bResgiter() {
      common_vendor.index.navigateTo({
        url: "/pages/register/register"
      });
    },
    bLogout() {
      common_vendor.index.removeStorageSync("token");
      common_vendor.index.showToast({
        title: "\u6CE8\u9500\u6210\u529F\uFF0C\u8FD4\u56DE\u9996\u9875"
      });
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    },
    tOrderTitle(item) {
      let bookTitle = item[0].map((item2) => {
        if (item2.title.length > 6) {
          return item2.title.slice(0, 7) + "...";
        }
        return item2.title;
      });
      let _bookTitle = bookTitle.join(" \u548C ");
      return _bookTitle;
    },
    orderMsg(item) {
      this.orderGoods = item[0];
      this.orderText = item[1];
      this.$refs.popup.open("bottom");
    }
  },
  components: ["cart-item"]
};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_th2 = common_vendor.resolveComponent("uni-th");
  const _easycom_uni_tr2 = common_vendor.resolveComponent("uni-tr");
  const _easycom_uni_td2 = common_vendor.resolveComponent("uni-td");
  const _easycom_uni_table2 = common_vendor.resolveComponent("uni-table");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_card2 + _easycom_uni_th2 + _easycom_uni_tr2 + _easycom_uni_td2 + _easycom_uni_table2 + _easycom_uni_popup2)();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_th = () => "../../uni_modules/uni-table/components/uni-th/uni-th.js";
const _easycom_uni_tr = () => "../../uni_modules/uni-table/components/uni-tr/uni-tr.js";
const _easycom_uni_td = () => "../../uni_modules/uni-table/components/uni-td/uni-td.js";
const _easycom_uni_table = () => "../../uni_modules/uni-table/components/uni-table/uni-table.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_card + _easycom_uni_th + _easycom_uni_tr + _easycom_uni_td + _easycom_uni_table + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.user.name),
    b: !$data.user.uid
  }, !$data.user.uid ? {
    c: common_vendor.o((...args) => $options.bLogin && $options.bLogin(...args))
  } : {}, {
    d: common_vendor.o((...args) => $options.bResgiter && $options.bResgiter(...args)),
    e: common_vendor.o((...args) => $options.bLogout && $options.bLogout(...args)),
    f: common_vendor.p({
      title: "\u767B\u5F55\u8BBE\u7F6E",
      extra: "\u9009\u9879"
    }),
    g: common_vendor.t(this.order.length),
    h: common_vendor.f($data.order, (item, k0, i0) => {
      return {
        a: item[0][0].image,
        b: common_vendor.t(item[0].length),
        c: common_vendor.t($options.tOrderTitle(item)),
        d: common_vendor.t(item[1].status),
        e: common_vendor.o(($event) => $options.orderMsg(item)),
        f: "1c69c636-3-" + i0,
        g: common_vendor.p({
          title: item[1].oid
        })
      };
    }),
    i: common_vendor.t($data.orderText.oid),
    j: common_vendor.t($data.orderText.address),
    k: common_vendor.t($data.orderText.phone),
    l: common_vendor.t($data.orderText.time),
    m: common_vendor.t($data.orderText.total),
    n: common_vendor.t($data.orderText.status),
    o: common_vendor.t($data.orderText.tracking),
    p: common_vendor.p({
      align: "center"
    }),
    q: common_vendor.p({
      align: "center",
      width: "200rpx"
    }),
    r: common_vendor.p({
      align: "left"
    }),
    s: common_vendor.p({
      align: "left"
    }),
    t: common_vendor.f($data.orderGoods, (item, k0, i0) => {
      return {
        a: item.image,
        b: "1c69c636-12-" + i0 + "," + ("1c69c636-11-" + i0),
        c: common_vendor.t(item.title),
        d: "1c69c636-13-" + i0 + "," + ("1c69c636-11-" + i0),
        e: common_vendor.t(item.price),
        f: "1c69c636-14-" + i0 + "," + ("1c69c636-11-" + i0),
        g: common_vendor.t(item.count),
        h: "1c69c636-15-" + i0 + "," + ("1c69c636-11-" + i0),
        i: "1c69c636-11-" + i0 + ",1c69c636-5"
      };
    }),
    v: common_vendor.p({
      border: true,
      stripe: true,
      emptyText: "\u6682\u65E0\u66F4\u591A\u6570\u636E"
    }),
    w: common_vendor.sr("popup", "1c69c636-4"),
    x: common_vendor.p({
      ["background-color"]: "#fff"
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Project/ProjectCode/study/uniapp/uni-shop/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
