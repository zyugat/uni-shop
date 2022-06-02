<template>
	<view class="order">
		<view class="order-top">
			<text>添加订单</text>
		</view>

		<view class="order-content">
			<uni-table border stripe emptyText="暂无更多数据" style="margin-top: 80rpx;">
				<!-- 表头行 -->
				<uni-tr>
					<uni-th align="center">图片</uni-th>
					<uni-th align="center" width="200rpx">书名</uni-th>
					<uni-th align="left">价格</uni-th>
					<uni-th align="left">数量</uni-th>
				</uni-tr>
				<!-- 表格数据行 -->
				<uni-tr class="table-content" v-for="item in goods">
					<uni-td>
						<image :src="item.image"></image>
					</uni-td>
					<uni-td>{{item.title}}</uni-td>
					<uni-td>{{item.price}}</uni-td>
					<uni-td>{{item.count||1}}</uni-td>
				</uni-tr>
			</uni-table>
		</view>

		<view class="order-input">
			<view class="input-item">
				<view class="title-content">地址&nbsp;&nbsp;&nbsp;</view>
				<input class="input" placeholder="收获地址" v-model="address" />
			</view>
			<view class="input-item">
				<view class="title-content">手机号</view>
				<input class="input" placeholder="手机号" v-model="phone" />
			</view>
		</view>
		<view class="button" @click="_addOrder">下订单</view>
	</view>
</template>

<script>
	import checkLogin from '@/hooks/checkLogin.js'
	import {
		showCart,
		delCart
	} from '@/network/cart.js'
	import {
		addOrder
	} from '@/network/order.js'

	export default {
		data() {
			return {
				address: '',
				phone: '',
				goods: [],
				only: true,
				plist: ''
			}
		},
		onLoad: function(option) {
			if (option.item) {
				this.goods.push(JSON.parse(decodeURIComponent(option.item)))
				this.only = true
				this.plist = ''
			} else if (option.cid) {
				let token = uni.getStorageSync('token')
				this.only = false
				showCart(token).then(res => {
					if (res.status === true && res.data
						.length > 0) {
						let cid = option.cid.split(',').map(Number)
						this.goods = res.data.filter(item => {
							if (cid.indexOf(item.cid) !== -1) return true
							return false
						})
					}
				})
			}
		},
		methods: {
			_addOrder() {
				checkLogin().then(res => {
					if (res.status === true) {
						if (this.address === '') {
							uni.showToast({
								title: '请输入收货地址'
							})
						} else if (this.phone === '') {
							uni.showToast({
								title: '请输入手机号'
							})
						} else {
							let token = uni.getStorageSync('token')
							let time = new Date().toISOString().slice(0, 19).replace('T', ' ')
							let plist = ''
							let total = 0
							if (this.only === true) {
								plist = this.goods[0].id + '-1'
								total = this.goods[0].price
							} else if (this.only === false) {
								this.goods.forEach(item => {
									plist += ',' + item.cid + '-' + item.count
									total += item.price
								})
							}
							addOrder(token, plist, this.address, this.phone, time, total).then(
								_res => {
									if (_res.status === true) {
										uni.showToast({
											title: '添加成功'
										})
										uni.switchTab({
											url: '/pages/my/my'
										})
										return true
									}
								}).then(__res => {
								if (__res === true) {
									let sum = this.goods.map(item => delCart(token, item.cid))
									Promise.all(sum)
								}
							})
						}

					}
				})
			}
		},
		toResgister() {
			uni.navigateTo({
				url: '/pages/register/register'
			})
		}
	}
</script>

<style lang="scss">
	.order {
		.order-top {
			display: flex;
			justify-content: space-between;
			margin-top: 40rpx;
			margin-left: 32rpx;
			margin-right: 32rpx;

			text {
				color: #000000;
				font-size: 22px;
				font-weight: bold;
			}
		}

		.order-content {
			.table-content {
				image {
					float: left;
					width: 200rpx;
					height: 200rpx;
					margin-right: 20rpx;
				}
			}
		}

		.order-input {
			.input-item {
				display: flex;
				margin-left: 32rpx;
				margin-right: 32rpx;
				height: 50px;
				align-items: center;
				border-bottom: 1px solid #efeff4;
				margin-bottom: 20rpx;

				.title-content {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					font-size: 18px;
				}

				input {
					margin-left: 40rpx;
				}
			}
		}


		.button {
			height: 50px;
			line-height: 50px;
			margin-top: 60rpx;
			margin-left: 32rpx;
			margin-right: 32rpx;
			border-radius: 50rpx;
			font-size: 20px;
			background-color: #008AFE;
			color: #FFFFFF;
			text-align: center;
		}
	}
</style>
