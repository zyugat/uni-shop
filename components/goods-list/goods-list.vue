<template>
	<view class="hot_goods">
		<view class="tit" v-if="showTitile">推荐商品</view>
		<!-- 一般用法 -->
		<view class="goods_list">
			<goods v-for="item in detailList" :item="item" :key="item.id" @click="skipDetail(item.id)"></goods>
		</view>
	</view>
</template>
<script>
	import googs from '../goods/goods.vue'
	export default {
		data() {
			return {}
		},
		props: {
			detailList: {
				type: Object,
				default: {},
				require: true
			},
			showTitile: {
				type: Boolean,
				default: true,
				require: false
			}
		},
		components: {
			"googs": googs
		},
		onLoad() {

		},
		methods: {
			skipDetail(id) {
				this.$emit('skip-detail', id)
			}
		}
	}
</script>

<style lang="scss">
	.hot_goods {
		background: #eee;

		.tit {
			border-top: 2px solid #eee;
			border-bottom: 2px solid #eee;
			margin-bottom: 3px;
			color: $shop-color;
			height: 50px;
			line-height: 50px;
			text-align: center;
			letter-spacing: 20px;
			background: #fff;
		}

		.goods_list {
			display: flex;
			padding: 0 15rpx;
			justify-content: space-between;
			overflow: hidden;
			flex-wrap: wrap;
		}
	}
</style>
