<template>
	<view class="cart-item">
		<view class="cart-item-top" v-show="cartItemTOP">
			<view class="cart-item-top-number">
				编号：{{item.cid}}
			</view>
			<view class="cart-item-top-del">
				<uni-icons type="closeempty" size="30" @click="delCart(item.cid)"></uni-icons>
			</view>
		</view>

		<view class="cart-item-content">
			<view class="cart-item-content-check" v-show="cartItemCHECK">
				<checkbox :checked="item.check" @click="updateCheck"></checkbox>
			</view>
			<view class="cart-item-content-image">
				<image :src="item.image"></image>
			</view>
			<view class="cart-item-content-right">
				<view class="cart-item-content-right-title">{{item.title}}</view>
				<view class="cart-item-content-right-bottom">
					<view class="cart-item-content-right-bottom-price">￥{{item.price}}</view>
					<view class="cart-item-content-right-bottom-count">
						<view class="item" v-show="cartItemSUB">
							<uni-icons type="minus" size="30" @click="updateCart(item.count-1)">
							</uni-icons>
						</view>
						<view class="count item">{{item.count}}</view>
						<view class="item" v-show="cartItemADD">
							<uni-icons type="plus" size="30" @click="updateCart(item.count+1)">
							</uni-icons>
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
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
			cartItemTOP: {
				type: Boolean,
				default: true,
				require: false
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
		emits: ['updateCart', 'delCart', 'updateCheck'],
		methods: {
			updateCart(count) {
				if (count === 0) {
					uni.showToast({
						title: '数量必须要大于0！'
					})
				} else {
					this.$emit('updateCart', this.item.cid, count)
				}
			},
			delCart(cid) {
				this.$emit('delCart', cid)
			},
			updateCheck(){
				this.$emit('updateCheck',this.item.cid)
			}
		}

	}
</script>

<style lang="scss">
	$cart-item-content_height: 250rpx;

	.cart-item {
		background-color: #fff;

		.cart-item-top {
			// border: 1px solid red;
			height: 60rpx;
			width: 100%;
			border-bottom: 2rpx solid #d1d1d1;

			.cart-item-top-number {
				float: left;
				display: inline-block;
				line-height: 60rpx;
			}

			.cart-item-top-del {
				float: right;

				button {
					float: right;
					width: 100rpx;
					height: 90%;
				}
			}
		}

		.cart-item-content {
			// border: 1px solid blue;
			height: $cart-item-content_height;
			width: 100%;

			.cart-item-content-check {
				float: left;
				line-height: $cart-item-content_height;
				margin-left: 20rpx;
				margin-right: 20rpx;

				checkbox {
					transform: scale(1.3)
				}
			}

			.cart-item-content-image image {
				float: left;
				height: ($cart-item-content_height - 40rpx);
				width: 750rpx * 0.32;
				margin-top: 20rpx;
			}

			.cart-item-content-right {
				float: left;
				margin: 20rpx 14rpx;
				height: ($cart-item-content_height - 40rpx);
				width: 50%;
				// border: 1px solid red;

				.cart-item-content-right-title {
					display: inline-block;
					// border: 1px solid red;
					width: 100%;
					height: ($cart-item-content_height - 40rpx - 90rpx);
					display: -webkit-box;
					-webkit-box-orient: vertical;
					/*设置方向*/
					-webkit-line-clamp: 3;
					/*设置超过为省略号的行数*/
					overflow: hidden;
				}

				.cart-item-content-right-bottom {
					.cart-item-content-right-bottom-price {
						float: left;
						font-size: 17px;
						color: red;
						padding: 8px 0;
					}

					.cart-item-content-right-bottom-count {
						float: right;
						margin-top: 7rpx;

						// border: 1px solid blue;
						.item {
							float: left;
						}

						.count {
							display: inline-block;
							vertical-align: top;
							margin-top: 10rpx;
							margin: 10rpx;
						}
					}
				}

			}
		}
	}
</style>
