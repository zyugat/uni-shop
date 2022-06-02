<template>
	<view class="goods_detail">
		<image :src="item.image"></image>
		<view class="box1">
			<view class="price">
				<text>￥123</text>
				<text>￥123</text>
			</view>
			<view class="goods_name">{{item.title}}</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>作者：{{item.author}}</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content">
				{{item.title}}
			</view>
		</view>
		<view class="goods_nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import {
		myRequest
	} from '@/network/request.js'

	import {
		addCart
	} from '@/network/cart.js'

	import checkLogin from '@/hooks/checkLogin.js'

	export default {
		data() {
			return {
				id: 0,
				item: {},
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		comments: ["goodsNav"],
		onLoad: function(option) {
			this.id = option.id
			this.init()
		},
		methods: {
			async init() {
				let res = await myRequest({
					url: '/dangdang',
					method: 'get',
					data: {
						id: this.id
					}
				})
				this.item = res.data.data[0]
			},
			onClick(e) {
				if (e.content.text === '购物车') {
					uni.switchTab({
						url: '/pages/cart/cart'
					})
				}
			},
			buttonClick(e) {
				checkLogin().then(res => {
					if (res.status === true) {
						let token = uni.getStorageSync('token')
						if (e.index === 0) {
							addCart(token, this.id).then(_res => {
								if (_res.status === true) {
									uni.showToast({
										title: '添加成功'
									})
									uni.switchTab({
										url: '/pages/cart/cart'
									})
								} else if (_res.msg.indexOf('重复') !== -1) {
									uni.showToast({
										title: '购物车已存在该商品'
									})
									uni.switchTab({
										url: '/pages/cart/cart'
									})
								}
							})
						} else if (e.index === 1) {
							let url = '/pages/addOrder/addOrder?item=' + encodeURIComponent(JSON.stringify(this.item))
							if(url.indexOf('%') > -1) {
							    url = url.replace(/%/g, '%25');
							} // 解决URI malformed报错的bug
							uni.navigateTo({ url })
						}
					}
				})
			}

		}
	}
</script>

<style lang="scss">
	.goods_detail {
		image {
			width: 750rpx;
			height: 750rpx;
		}

		.box1 {
			padding: 10px;

			.price {
				font-size: 35rpx;
				color: $shop-color;
				line-height: 80rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}

			.goods_name {
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}

		.box2 {
			padding: 0 10px;
			font-size: 32rpx;
			line-height: 70rpx;
		}

		.box3 {
			padding-bottom: 50px;

			.tit {
				font-size: 32rpx;
				padding-left: 10px;
				border-bottom: 1px solid #eee;
				line-height: 70rpx;
			}

			.content {
				padding: 10px;
				font-size: 28rpx;
				color: #333;
				line-height: 50rpx;
			}
		}
	}

	.goods_nav {
		position: fixed;
		bottom: 0;
		width: 100%;
	}

	.line {
		height: 10rpx;
		width: 750rpx;
		background: #eee;
	}
</style>
