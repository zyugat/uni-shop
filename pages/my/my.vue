<template>
	<view class="my">
		<uni-card>
			<text>你好用户：{{user.name}}</text>
		</uni-card>
		<uni-card title="登录设置" extra="选项">
			<view class="my-status">
				<button @click="bLogin" v-if="!user.uid">登录</button>
				<button @click="bResgiter">注册</button>
				<button @click="bLogout">登出</button>
			</view>
		</uni-card>

		<uni-card>
			<text>您的订单数量：{{this.order.length}}</text>
		</uni-card>

		<view v-for="item in order" class="order">
			<uni-card :title="item[1].oid" @click="orderMsg(item)" class="order-item">
				<image slot='cover' :src="item[0][0].image"></image>
				<view>该订单含有 {{item[0].length}} 本书</view>
				<view>书名为：{{tOrderTitle(item)}}</view>
				<view>目前订单状态处于：{{item[1].status}}</view>
				<view>点击图片可以查看更多信息</view>
			</uni-card>
		</view>


		<view>
			<uni-popup ref="popup" background-color="#fff">
				<view class="popup-content">
					<view class="oid">订单编号：{{orderText.oid}}</view>
					<view class="address">收货地址：{{orderText.address}}</view>
					<view class="phone">手机号：{{orderText.phone}}</view>
					<view class="time">下单时间：{{orderText.time}}</view>
					<view class="price">总价格：{{orderText.total}}</view>
					<view class="status">目前状态：{{orderText.status}}</view>
					<view class="tracking">快递单号：{{orderText.tracking}}</view>

					<scroll-view scroll-y="true" class="scroll-Y">
						<uni-table border stripe emptyText="暂无更多数据">
							<!-- 表头行 -->
							<uni-tr>
								<uni-th align="center">图片</uni-th>
								<uni-th align="center" width="200rpx">书名</uni-th>
								<uni-th align="left">价格</uni-th>
								<uni-th align="left">数量</uni-th>
							</uni-tr>
							<!-- 表格数据行 -->
							<uni-tr class="popup-cart-content" v-for="item in orderGoods">
								<uni-td>
									<image :src="item.image"></image>
								</uni-td>
								<uni-td>{{item.title}}</uni-td>
								<uni-td>{{item.price}}</uni-td>
								<uni-td>{{item.count}}</uni-td>
							</uni-tr>
						</uni-table>
					</scroll-view>


				</view>
			</uni-popup>
		</view>


	</view>
</template>

<script>
	import {
		myRequest
	} from '@/network/request.js'

	import {
		showOrder
	} from '@/network/order.js'

	import checkLogin from '@/hooks/checkLogin.js'
	import cartItem from '@/components/cart-item/cart-item.vue'

	export default {
		data() {
			return {
				user: {
					name: '未登录'
				},
				order: [],
				orderGoods: {},
				orderText: {}
			}
		},
		onShow() {
			this.init()
		},
		methods: {
			init() {
				checkLogin().then(res => {
					if (res.status === false) {
						this.user.name = '未登录'
						uni.navigateTo({
							url: '/pages/login/login'
						})
					} else {
						this.user = res.data
						return true
					}
					return false
				}).then(_res => {
					if (_res === true) {
						let token = uni.getStorageSync('token')
						showOrder(token).then(res => {
							this.order = res.data
						})
					}
				})
			},
			bLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			bResgiter() {
				uni.navigateTo({
					url: '/pages/register/register'
				})
			},
			bLogout() {
				uni.removeStorageSync('token')
				uni.showToast({
					title: '注销成功，返回首页'
				})
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			tOrderTitle(item) {
				let bookTitle = item[0].map(item => {
					if (item.title.length > 6) {
						return item.title.slice(0, 7) + '...'
					}
					return item.title
				})
				let _bookTitle = bookTitle.join(' 和 ')
				return _bookTitle
			},
			orderMsg(item) {
				this.orderGoods = item[0]
				this.orderText = item[1]
				this.$refs.popup.open('bottom')
			},
		},
		components: ['cart-item']
	}
</script>

<style lang="scss">
	$cart-item-content_height: 250rpx;

	.my {
		margin-bottom: 120rpx;

		.my-status {
			display: flex;

			button {
				width: 100%;
				border-radius: 50rpx;
				background-color: #008AFE;
				color: #FFFFFF;
			}
		}

		.order {
			.order-item {
				image {
					float: left;
					width: 200rpx;
					height: 200rpx;
					margin-right: 20rpx;
				}
			}
		}

		.popup-content {
			height: 900rpx;

			.scroll-Y {
				height: 550rpx;
			}

			.popup-cart-content {
				image {
					height: 200rpx;
					width: 200rpx;
				}
			}

		}

	}
</style>
