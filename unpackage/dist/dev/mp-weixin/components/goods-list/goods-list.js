"use strict";
var common_vendor = require("../../common/vendor.js");
const googs = () => "../goods/goods.js";
const _sfc_main = {
  data() {
    return {};
  },
  props: ["detailList"],
  components: {
    "googs": googs
  },
  onLoad() {
  },
  methods: {
    skipDetail(id) {
      this.$emit("skip-detail", id);
    }
  }
};
if (!Array) {
  const _easycom_goods2 = common_vendor.resolveComponent("goods");
  _easycom_goods2();
}
const _easycom_goods = () => "../goods/goods.js";
if (!Math) {
  _easycom_goods();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.detailList, (item, k0, i0) => {
      return {
        a: item.id,
        b: common_vendor.o(($event) => $options.skipDetail(item.id), item.id),
        c: "21b36d34-0-" + i0,
        d: common_vendor.p({
          item
        })
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Project/ProjectCode/study/uniapp/uni-shop/components/goods-list/goods-list.vue"]]);
wx.createComponent(Component);
