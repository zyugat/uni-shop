"use strict";
var common_vendor = require("../../common/vendor.js");
var network_request = require("../../network/request.js");
const goodsList = () => "../../components/goods-list/goods-list.js";
const _sfc_main = {
  data() {
    return {
      dangdangAll: [],
      detailLen: 0,
      detailList: [],
      swipers: [
        {
          id: 1,
          img: "../../static/pic-1.png"
        },
        {
          id: 2,
          img: "../../static/pic-2.png"
        },
        {
          id: 3,
          img: "../../static/pic-3.png"
        }
      ],
      navs: [
        {
          icon: "iconfont icon-ziyuan",
          title: "\u641C\u7D22\u5546\u54C1",
          path: "/pages/goods/goods"
        },
        {
          icon: "iconfont icon-guanyuwomen",
          title: "\u8054\u7CFB\u6211\u4EEC",
          path: "/pages/contact/contact"
        }
      ]
    };
  },
  components: {
    "goods-list": goodsList
  },
  onLoad() {
    this.DateInit();
  },
  onReachBottom() {
    this.addDetail();
  },
  methods: {
    async DateInit() {
      let res = await network_request.myRequest({
        url: "/dangdang",
        method: "get"
      });
      this.dangdangAll = res.data.data;
      this.addDetail();
    },
    addDetail() {
      let a = 0;
      this.dangdangAll.forEach((item) => {
        if (a >= this.detailLen && a <= this.detailLen + 5) {
          this.detailList.push(item);
        }
        a++;
      });
      this.detailLen = this.detailLen + 6;
    },
    skipDetail(id) {
      common_vendor.index.navigateTo({
        url: "/pages/goods-detail/goods-detail?id=" + id
      });
    }
  }
};
if (!Array) {
  const _easycom_goods_list2 = common_vendor.resolveComponent("goods-list");
  _easycom_goods_list2();
}
const _easycom_goods_list = () => "../../components/goods-list/goods-list.js";
if (!Math) {
  _easycom_goods_list();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.swipers, (item, k0, i0) => {
      return {
        a: item.img,
        b: item.id
      };
    }),
    b: common_vendor.f($data.navs, (item, index, i0) => {
      return {
        a: common_vendor.n(item.icon),
        b: common_vendor.t(item.title),
        c: index,
        d: common_vendor.o(($event) => _ctx.navItemClick(item.path))
      };
    }),
    c: common_vendor.o($options.skipDetail),
    d: common_vendor.p({
      detailList: $data.detailList,
      ccid: _ctx.id
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Project/ProjectCode/study/uniapp/uni-shop/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
