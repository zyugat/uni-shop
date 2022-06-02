<template>
	<view class="cart">
		<view class="cart-content" v-for="item in cartList">
			<cart-item class="cart-content-item" :item="item" @update-cart="_updateCart" @updateCheck="_updateCheck"
				@delCart="_delCart">
			</cart-item>
		</view>
		<view v-if="!status" class="cart-msg">{{msg}}</view>
		<view class="cart-total" v-show="this.total === 0 ? false : true">
			<view>￥{{this.total}}</view>
			<button @click="_addOrder">立即下单</button>
		</view>
	</view>
</template>

<script>
	import {
		showCart,
		updateCart,
		delCart
	} from '@/network/cart.js'

	import checkLogin from '@/hooks/checkLogin.js'

	import cartItem from '@/components/cart-item/cart-item.vue'

	export default {
		data() {
			return {
				checkAll: [],
				cartList: [],
				status: false,
				msg: '购物车还没有商品！！',
				total: 0
			}
		},
		onShow() {
			this.DateInit()
		},
		methods: {
			DateInit() {
				checkLogin().then(res => {
					if (res.status === true) {
						this.cartList = []
						this.checkAll = []
						this.status = false
						this.msg = '购物车还没有商品！！'
						this.total = 0
						this.status = true
						let token = uni.getStorageSync('token')
						showCart(token).then(res => {
							if (res.status === true && res.data
								.length > 0) {
								this.cartList = res.data.map(item => {
									item.check = false
									return item
								})
							}
						})
					}
				})
			},
			_updateCart(cid, count) {
				checkLogin().then(res => {
					if (res.status === true) {
						let token = uni.getStorageSync('token')
						updateCart(token, cid, count).then(res => {
							if (res.status === true) {
								this.cartList.map(item => {
									if (item.cid === cid) {
										item.count = count
									}
									return item
								})
							}
						})
					}
				})
			},
			_delCart(cid) {
				checkLogin().then(res => {
					if (res.status === true) {
						let token = uni.getStorageSync('token')
						delCart(token, cid).then(res => {
							if (res.status === true) {
								this.cartList = this.cartList.filter(item => {
									if (item.cid === cid) {
										return false
									}
									return true
								})
							}
						})
					}
				})
			},
			_updateCheck(cid) {
				this.total = 0
				this.checkAll = []
				this.cartList = this.cartList.map(item => {
					if (item.cid === cid) {
						item.check = !item.check
					}
					return item
				})
				this.cartList.forEach(item => {
					if (item.check === true) {
						this.total = (this.total * 100 + item.price * 100) / 100
						this.checkAll.push(item.cid)
					}
				})
			},
			_addOrder() {
				let url = '/pages/addOrder/addOrder?cid=' + this.checkAll
				if (url.indexOf('%') > -1) {
					url = url.replace(/%/g, '%25');
				} // 解决URI malformed报错的bug
				uni.navigateTo({
					url
				})
			}
		},
		components: ['cart-item']
	}
</script>

<style lang="scss">
	body {
		background-color: #eee;
	}

	.cart {
		height: 100%;
		margin-bottom: 100rpx;

		.cart-content {
			.cart-content-item {
				margin-bottom: 10rpx;
			}
		}

		.cart-msg {
			font-size: 60rpx;
		}

		.cart-total {
			position: fixed;
			bottom: 90rpx;
			height: 80rpx;
			width: 100%;
			background-color: #a4d4fe;

			view {
				float: left;
				margin-top: 15rpx;
				margin-left: 50rpx;
				font-size: 20px;
				color: red;
			}

			button {
				float: right;
				width: 40%;
				height: 40px;
				line-height: 40px;
				border-radius: 40rpx;
				font-size: 20px;
				background-color: #008AFE;
				color: #FFFFFF;
				text-align: center;
			}
		}

	}
</style>
