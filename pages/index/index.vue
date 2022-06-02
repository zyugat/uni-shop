<template>
	<view class="home">
		<swiper indicator-dots circular autoplay>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>

		<view class="nav" v-if="false">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>

		<view class="hot_goods">
			<goods-list :detailList="detailList" @skip-detail="skipDetail"></goods-list>
		</view>

	</view>
</template>

<script>
	import {
		myRequest
	} from '@/network/request.js'

	import goodsList from '../../components/goods-list/goods-list.vue'

	export default {
		data() {
			return {
				dangdangAll: [],
				detailLen: 0,
				detailList: [],
				swipers: [{
						id: 1,
						img: '../../static/pic-1.png',
					},
					{
						id: 2,
						img: '../../static/pic-2.png',
					},
					{
						id: 3,
						img: '../../static/pic-3.png',
					},
				],
				navs: [{
						icon: 'iconfont icon-ziyuan',
						title: '搜索商品',
						path: '/pages/goods-search/goods-search'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
				]
			}
		},
		components: {
			"goods-list": goodsList
		},
		onLoad() {
			this.DateInit()
		},
		onReachBottom() {
			this.addDetail()
		},
		methods: {
			async DateInit() {
				let res = await myRequest({
					url: '/dangdang',
					method: 'get',
					data: {
						random: 6
					}
				})
				this.detailList = res.data.data
				// this.addDetail()
			},
			async addDetail() {
				let res = await myRequest({
					url: '/dangdang',
					method: 'get',
					data: {
						random: 6
					}
				})
				this.detailList = this.detailList.concat(res.data.data)
			},
			skipDetail(id) {
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id=' + id
				})
			},
			navItemClick(path) {
				uni.navigateTo({
					url: path
				})
			}
		}
	}
</script>

<style lang="scss">
	image {
		width: 100%;
		height: 100%;
	}

	.home {
		.nav {
			display: flex;

			.nav_item {
				width: 50%;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					background: red;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}

				.icon-tupian {
					font-size: 45rpx;
				}

				text {
					font-size: 30rpx;
				}
			}
		}

		.hot_goods {
			background: #eee;
			overflow: hidden;
			margin-bottom: 50rpx;
		}

	}
</style>
