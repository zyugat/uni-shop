<template>
	<view>
		<uni-search-bar @confirm="search" :focus="true" v-model="searchValue">
		</uni-search-bar>
		<view class="search-result">
			<goods-list :detailList="detailList" :showTitile="false"></goods-list>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				searchValue: '',
				detailList: []
			}
		},
		methods: {
			search() {
				console.log(this.searchValue);
			}
		}
	}
</script>

<style>

</style>
