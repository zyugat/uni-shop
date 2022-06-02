"use strict";
var common_vendor = require("../../common/vendor.js");
var network_request = require("../../network/request.js");
var network_cart = require("../../network/cart.js");
var hooks_checkLogin = require("../../hooks/checkLogin.js");
const _sfc_main = {
  data() {
    return {
      id: 0,
      item: {},
      options: [{
        icon: "headphones",
        text: "\u5BA2\u670D"
      }, {
        icon: "shop",
        text: "\u5E97\u94FA",
        infoBackgroundColor: "#007aff",
        infoColor: "red"
      }, {
        icon: "cart",
        text: "\u8D2D\u7269\u8F66",
        info: 2
      }],
      buttonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "#ff0000",
          color: "#fff"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "#ffa200",
          color: "#fff"
        }
      ]
    };
  },
  comments: ["goodsNav"],
  onLoad: function(option) {
    this.id = option.id;
    this.init();
  },
  methods: {
    async init() {
      let res = await network_request.myRequest({
        url: "/dangdang",
        method: "get",
        data: {
          id: this.id
        }
      });
      this.item = res.data.data[0];
    },
    onClick(e) {
      if (e.content.text === "\u8D2D\u7269\u8F66") {
        common_vendor.index.switchTab({
          url: "/pages/cart/cart"
        });
      }
    },
    buttonClick(e) {
      hooks_checkLogin.checkLogin().then((res) => {
        if (res.status === true) {
          let token = common_vendor.index.getStorageSync("token");
          if (e.index === 0) {
            network_cart.addCart(token, this.id).then((_res) => {
              if (_res.status === true) {
                common_vendor.index.showToast({
                  title: "\u6DFB\u52A0\u6210\u529F"
                });
                common_vendor.index.switchTab({
                  url: "/pages/cart/cart"
                });
              } else if (_res.msg.indexOf("\u91CD\u590D") !== -1) {
                common_vendor.index.showToast({
                  title: "\u8D2D\u7269\u8F66\u5DF2\u5B58\u5728\u8BE5\u5546\u54C1"
                });
                common_vendor.index.switchTab({
                  url: "/pages/cart/cart"
                });
              }
            });
          } else if (e.index === 1) {
            let url = "/pages/addOrder/addOrder?item=" + encodeURIComponent(JSON.stringify(this.item));
            if (url.indexOf("%") > -1) {
              url = url.replace(/%/g, "%25");
            }
            console.log("url2222", url);
            common_vendor.index.navigateTo({ url });
          }
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  _easycom_uni_goods_nav2();
}
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  _easycom_uni_goods_nav();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.item.image,
    b: common_vendor.t($data.item.title),
    c: common_vendor.t($data.item.author),
    d: common_vendor.t($data.item.title),
    e: common_vendor.o($options.onClick),
    f: common_vendor.o($options.buttonClick),
    g: common_vendor.p({
      fill: true,
      options: $data.options,
      buttonGroup: $data.buttonGroup
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Project/ProjectCode/study/uniapp/uni-shop/pages/goods-detail/goods-detail.vue"]]);
wx.createPage(MiniProgramPage);
