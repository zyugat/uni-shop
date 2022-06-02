"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      address: "",
      phone: "",
      goods: [],
      only: true
    };
  },
  onLoad: function(option) {
    if (option.item) {
      this.goods.push(JSON.parse(decodeURIComponent(option.item)));
    } else if (option.plist) {
      console.log(option.plist);
    }
  },
  methods: {
    addOrder() {
    },
    toResgister() {
      common_vendor.index.navigateTo({
        url: "/pages/register/register"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_th2 = common_vendor.resolveComponent("uni-th");
  const _easycom_uni_tr2 = common_vendor.resolveComponent("uni-tr");
  const _easycom_uni_td2 = common_vendor.resolveComponent("uni-td");
  const _easycom_uni_table2 = common_vendor.resolveComponent("uni-table");
  (_easycom_uni_th2 + _easycom_uni_tr2 + _easycom_uni_td2 + _easycom_uni_table2)();
}
const _easycom_uni_th = () => "../../uni_modules/uni-table/components/uni-th/uni-th.js";
const _easycom_uni_tr = () => "../../uni_modules/uni-table/components/uni-tr/uni-tr.js";
const _easycom_uni_td = () => "../../uni_modules/uni-table/components/uni-td/uni-td.js";
const _easycom_uni_table = () => "../../uni_modules/uni-table/components/uni-table/uni-table.js";
if (!Math) {
  (_easycom_uni_th + _easycom_uni_tr + _easycom_uni_td + _easycom_uni_table)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      align: "center"
    }),
    b: common_vendor.p({
      align: "center",
      width: "200rpx"
    }),
    c: common_vendor.p({
      align: "left"
    }),
    d: common_vendor.p({
      align: "left"
    }),
    e: common_vendor.f($data.goods, (item, k0, i0) => {
      return {
        a: item.image,
        b: "95ff2ad4-7-" + i0 + "," + ("95ff2ad4-6-" + i0),
        c: common_vendor.t(item.title),
        d: "95ff2ad4-8-" + i0 + "," + ("95ff2ad4-6-" + i0),
        e: common_vendor.t(item.price),
        f: "95ff2ad4-9-" + i0 + "," + ("95ff2ad4-6-" + i0),
        g: common_vendor.t(item.count),
        h: "95ff2ad4-10-" + i0 + "," + ("95ff2ad4-6-" + i0),
        i: "95ff2ad4-6-" + i0 + ",95ff2ad4-0"
      };
    }),
    f: common_vendor.p({
      border: true,
      stripe: true,
      emptyText: "\u6682\u65E0\u66F4\u591A\u6570\u636E"
    }),
    g: $data.address,
    h: common_vendor.o(($event) => $data.address = $event.detail.value),
    i: $data.phone,
    j: common_vendor.o(($event) => $data.phone = $event.detail.value),
    k: common_vendor.o((...args) => $options.addOrder && $options.addOrder(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Project/ProjectCode/study/uniapp/uni-shop/pages/addOrder/addOrder.vue"]]);
wx.createPage(MiniProgramPage);
