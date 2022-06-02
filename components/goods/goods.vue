<template>
	<view class="goods_item">
		<image :src="item.image"></image>
		<view class="price">
			<text>{{item.price}}</text>
		</view>
		<view class="name" @click="show">{{item.title}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				a: [1, 2, 3]
			}
		},
		props: ['item'],
		methods: {
			show() {
				console.log('123', this.item.image)
			}
		}
	}
</script>

<style lang="scss">
	.goods_item {
		width: 355rpx;
		margin-bottom: 15rpx;
		background: #fff;
		padding: 10px;
		box-sizing: border-box;

		image {
			height: 380rpx;
			width: 100%;
			mix-width: 160px;
			margin: 10px auto;
		}

		.price {
			font-size: 18px;
			color: red;
			padding: 8px 0;

			text:nth-child(2) {
				color: #ccc;
				text-decoration: line-through;
				margin-left: 10px;
				font-size: 13px;
			}
		}

		.name {
			font-size: 14px;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			/*设置方向*/
			-webkit-line-clamp: 2;
			/*设置超过为省略号的行数*/
			overflow: hidden;
		}
	}
</style>
