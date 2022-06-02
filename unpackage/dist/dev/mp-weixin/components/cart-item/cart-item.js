"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "cart-item",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default: {},
      require: true
    },
    cartItemSUB: {
      type: Boolean,
      default: true,
      require: false
    },
    cartItemADD: {
      type: Boolean,
      default: true,
      require: false
    },
    cartItemDEL: {
      type: Boolean,
      default: true,
      require: false
    },
    cartItemCHECK: {
      type: Boolean,
      default: true,
      require: false
    }
  },
  emits: ["updateCart", "delCart"],
  methods: {
    updateCart(count) {
      if (count === 0) {
        common_vendor.index.showToast({
          title: "\u6570\u91CF\u5FC5\u987B\u8981\u5927\u4E8E0\uFF01"
        });
      } else {
        this.$emit("updateCart", this.item.cid, count);
      }
    },
    delCart(cid) {
      this.$emit("delCart", cid);
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.item.cid),
    b: common_vendor.o(($event) => $options.delCart($props.item.cid)),
    c: common_vendor.p({
      type: "closeempty",
      size: "30"
    }),
    d: _ctx.cartItemTOP,
    e: $props.cartItemCHECK,
    f: $props.item.image,
    g: common_vendor.t($props.item.title),
    h: common_vendor.t($props.item.price),
    i: common_vendor.o(($event) => $options.updateCart($props.item.count - 1)),
    j: common_vendor.p({
      type: "minus",
      size: "30"
    }),
    k: $props.cartItemSUB,
    l: common_vendor.t($props.item.count),
    m: common_vendor.o(($event) => $options.updateCart($props.item.count + 1)),
    n: common_vendor.p({
      type: "plus",
      size: "30"
    }),
    o: $props.cartItemADD
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Project/ProjectCode/study/uniapp/uni-shop/components/cart-item/cart-item.vue"]]);
wx.createComponent(Component);
