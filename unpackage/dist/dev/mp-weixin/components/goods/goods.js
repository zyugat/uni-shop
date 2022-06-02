"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      a: [1, 2, 3]
    };
  },
  props: ["item"],
  methods: {
    show() {
      console.log("123", this.item.image);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.item.image,
    b: common_vendor.t($props.item.price),
    c: common_vendor.t($props.item.title),
    d: common_vendor.o((...args) => $options.show && $options.show(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Project/ProjectCode/study/uniapp/uni-shop/components/goods/goods.vue"]]);
wx.createComponent(Component);
